import React, { Component } from "react"
import { Link } from "react-router-dom"
import APIManager from "../../../modules/APIManager"
import Moment from 'react-moment';
import NavBar from "./../../navigation/NavBar"

class PastBatchesList extends Component {

  state = {
    batches: [],
    currentUser: +sessionStorage.getItem("userId") || +localStorage.getItem("userId")
  }

  componentDidMount() {
    APIManager.getAllEntries("batches", `?userId=${this.state.currentUser}&status=3&_sort=completeDate&_order=desc&_expand=type`)
      .then(batches =>
        this.setState({ batches: batches }))
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="container">
          <div className="flex flex-column align-items-center">
            <h1 className="text-align-center no-margin-bottom">Completed</h1>
            <div className="title-divider margin-bottom-m"></div>
          </div>
          {
            this.state.batches.map(batch => {
              return <div className="flex flex-row justify-content-space-between padding-vertical-m padding-horizontal-s border border-radius box-shadow-m margin-bottom-xs" key={batch.id}>
                <div>
                  <h3 className="no-margin-bottom">{batch.name}</h3>
                  <p className="no-margin-top font-size-l">Completed <Moment format="MM/DD/YY">{batch.completeDate}</Moment></p>
                </div>
                <div className="align-self-flex-end">
                  <Link to={`/batches/${batch.id}`}><button className="button button-l info box-shadow-xxl">Details</button></Link>
                </div>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default PastBatchesList