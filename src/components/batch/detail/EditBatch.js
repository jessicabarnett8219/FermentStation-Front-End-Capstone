import React, { Component } from "react"
import { Grid, Button, Header, List, Form } from 'semantic-ui-react'
import APIManager from "../../../modules/APIManager"
import BrewingEdit from "./brewing/BrewingEdit";

// TODO fix date input value issue - prepopulating and saving


class EditBatch extends Component {

  state = {
    batch: "",
    initialized: false,
    currentUser: "",
    editName: "",
    editType: "",
    editStartDate: "",
    editBottleDate: "",
    editCompleteDate: "",
    editStarterIngredients: "",
    editBottleIngredients: "",
    editReview: ""
  }

  componentDidMount() {
    const { batchId } = this.props.match.params
    const currentUserId = +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
    this.setState({ currentUser: currentUserId }, () => {
      APIManager.getEntry("batches", batchId, "?_expand=type")
        .then(batchObj => {
          this.setState({
            batch: batchObj,
            editName: batchObj.name,
            editType: batchObj.typeId,
            editStartDate: batchObj.startDate,
            editBottleDate: batchObj.bottleDate,
            editStarterIngredients: batchObj.starterIngredients,
            editCompleteDate: batchObj.completeDate,
            editBottleIngredients: batchObj.bottleIngredients,
            editReview: batchObj.review
          }, () => this.setState({ initialized: true }, () => console.log(this.state)))
        })
    })

  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleFieldChangeRadio = (evt) => {
    let targetValue = evt.target.value
    this.setState({ editType: +targetValue })
  }

  constructEditedBatch = () => {
    let editedBatch = {
      name: this.state.editName,
      typeId: this.state.editType,
      review: this.state.editReview,
      startDate: this.state.editStartDate,
      bottleDate: this.state.editBottleDate,
      completeDate: this.state.editCompleteDate,
      starterIngredients: this.state.editStarterIngredients,
      bottleIngredients: this.state.editBottleIngredients
    }
    return editedBatch
  }

  handleSave = () => {
    let editedBatch = this.constructEditedBatch()
    APIManager.editEntry("batches", this.state.batch.id, editedBatch)
      .then(() => {
        this.props.history.push(`/batches/${this.state.batch.id}`)
      })

  }

  render() {
    if (this.state.initialized === true) {
      if (this.state.batch.status === 1) {
        return (
          <BrewingEdit handleFieldChange={this.handleFieldChange} handleSave={this.handleSave} handleFieldChangeRadio={this.handleFieldChangeRadio} batch={this.state.batch} />
        )
      } else if (this.state.batch.status === 2) {
        return (
          <div>
            <h1>Edit Bottled</h1>
          </div>
        )
      }
      else if (this.state.batch.status === 3) {
        return (
          <div>
            <h1>Edit Complete</h1>
          </div>
        )
      }
    }
    else {
      return (
        <div>
        </div>
      )
    }

  }





}


export default EditBatch