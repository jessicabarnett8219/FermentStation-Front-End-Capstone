import React, { Component } from "react"
import BatchTypeEditForm from "./BatchTypeEditForm";

class BrewingEdit extends Component {

  render() {
    return (
      <div>
        <div className="container">
        <h1 className="text-align-center">Edit Batch</h1>
          <label htmlFor="editName">Name</label>
          <input id="editName" type="text" defaultValue={this.props.batch.name} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <BatchTypeEditForm batchType={this.props.batch.typeId} handleFieldChangeRadio={this.props.handleFieldChangeRadio} typeOptions={this.props.typeOptions} />

          <label htmlFor="editStartDate">Start Date</label>
          <input type="date" id="editStartDate" defaultValue={this.props.batch.startDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label htmlFor="editBottleDate">Expected Bottling Date</label>
          <input type="date" id="editBottleDate" defaultValue={this.props.batch.bottleDate} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label>Amount</label>
          <input id="editAmount" type="text" defaultValue={this.props.batch.batchAmount} onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <label className="select" htmlFor="editMeasurement">
            <select id="editMeasurement" defaultValue={this.props.batch.editMeasurement} onChange={
              (evt) => { this.props.handleFieldChange(evt) }
            } >
              <option value="cups">Cups</option>
              <option value="ounces">Ounces</option>
            </select>
          </label>

          <label htmlFor="editStarterIngredients">Starter Ingredients</label>
          <textarea id="editStarterIngredients" defaultValue={this.props.batch.starterIngredients} label="Starter Ingredients" onChange={
            (evt) => { this.props.handleFieldChange(evt) }
          } />

          <div className="flex justify-content-center margin-bottom-s">
            <button className="button info button-border margin-top-xxs" onClick={() => {
              this.props.history.push(`/batches/${this.props.batch.id}`)
            }}>Cancel</button>
            <button className="button info margin-left-xxs margin-top-xxs" onClick={() => {
              if (this.props.startDate === "" || this.props.bottleDate === "") {
                alert("Date fields should not be left blank")
              } else {
                this.props.handleSave()
              }
            }}>Save</button>
          </div>
        </div>
      </div>
    )

  }
}

export default BrewingEdit