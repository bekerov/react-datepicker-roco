import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default React.createClass({
  displayName: 'HeroExample',

  getInitialState () {
    return {
      startDate: moment()
    }
  },

  handleChange (date) {
    this.setState({
      startDate: date
    })
  },

  render () {
    return <DatePicker
      locale="de"
        selected={this.state.startDate}
        onChange={this.handleChange} />
  }
})
