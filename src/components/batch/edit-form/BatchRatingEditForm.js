import React, { Component } from "react"

class BatchRatingEditForm extends Component {
// This component is used only by completed batches. It is rendered by the CompletedEdit component

  render() {
    if (this.props.rating === "positive") {
      return (
        <div className="margin-vertical-m text-align-center border border-radius box-shadow-s padding-vertical-m">
            <input className="" type="radio" name="editRating" value="negative" onChange={(evt) => {
              this.props.handleFieldChangeRating(evt)
            }} /><i className="fas fa-thumbs-down fa-2x margin-right-m color-info"></i>
          <input type="radio" name="editRating" value="positive" defaultChecked onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-up fa-2x color-info"></i><br></br>
        </div>
      )
    } else {
      return (
        <div className="margin-vertical-m text-align-center">
          <input type="radio" name="editRating" defaultChecked value="negative" onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-down fa-2x margin-right-m color-info"></i>
          <input type="radio" name="editRating" value="positive" onChange={(evt) => {
            this.props.handleFieldChangeRating(evt)
          }} /><i className="fas fa-thumbs-up fa-2x margin-right-m color-info"></i><br></br>
        </div>
      )
    }

  }
}

export default BatchRatingEditForm
