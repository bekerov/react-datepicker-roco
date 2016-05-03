import React from 'react'
import moment from 'moment'

var Months = React.createClass({
  displayName: 'Months',

  propTypes: {
    date: React.PropTypes.object.isRequired,
    onChangeView: React.PropTypes.func.isRequired,
    onChangeMonth: React.PropTypes.func.isRequired,
    onChangeYear: React.PropTypes.func.isRequired
  },

  getDefaultProps () {
    return {
      onChangeView: () => {},
      onChangeYear: () => {},
      onChangeMonth: () => {}
    }
  },

  /**
   * Изменение месяца.
   * @param year Год.
   */
  handleChangeYear (year) {
    this.props.onChangeYear(year)
  },

  /**
   * Выбор месяца.
   * @param month Месяц.
   */
  handleSelectMonth (month) {
    this.props.onChangeMonth(month)
  },

  changeView () {
    this.props.onChangeView('years')
  },

  render () {
    const {date} = this.props
    let year = date.year()
    let currentMonth = date.month()
    let months = moment.monthsShort().map((month, i) => {
      let classNames = ['month']
      if (i === currentMonth) {
        classNames.push('active')
      }
      return <div key={i} className={classNames.join(' ')} onClick={this.handleSelectMonth.bind(this, i)}>{month}</div>
    })
    return <div>
      <div className="header">
        <a className='navigation navigation--previous' onClick={this.handleChangeYear.bind(this, year - 1)}/>
        <div onClick={this.changeView}>{year}</div>
        <a className='navigation navigation--next' onClick={this.handleChangeYear.bind(this, year + 1)}/>
      </div>
      <div className="months">
        {months}
      </div>
    </div>
  }

})

module.exports = Months
