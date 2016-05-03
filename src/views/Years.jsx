import React, {PropTypes} from 'react'
import moment from 'moment'

var Years = React.createClass({
  displayName: 'Years',

  propTypes: {
    date: React.PropTypes.object.isRequired,
    onChangeView: React.PropTypes.func.isRequired,
    onChangeYear: React.PropTypes.func.isRequired,
  },

  getInitialState () {
    let {date} = this.props
    let year = date.year()
    let decadeStart = year - 1 - year % 10
    let decadeEnd = decadeStart + 12
    return {
      year: year,
      decadeStart: decadeStart,
      decadeEnd: decadeEnd
    }
  },

  handlePrev () {
    const {decadeStart, decadeEnd} = this.state
    this.setState({decadeStart: decadeStart - 10, decadeEnd: decadeEnd - 10})
  },

  handleNext () {
    const {decadeStart, decadeEnd} = this.state
    this.setState({decadeStart: decadeStart + 10, decadeEnd: decadeEnd + 10})
  },

  /**
   * При изменении года.
   * @param year
   */
  onChangeYear (year) {
    this.props.onChangeYear(year)
    this.props.onChangeView('months')
  },

  render () {
    let {year, decadeStart, decadeEnd} = this.state
    let years = []
    let i

    for (i = decadeStart; i < decadeEnd; i++) {
      let classNames = ['year']
      if (i === year) classNames.push('active')
      years.push(<div key={i} className={classNames.join(' ')} onClick={this.onChangeYear.bind(this, i)}>{i}</div>)
    }

    return <div>
        <div className="header">
          <a className='navigation navigation--previous' onClick={this.handlePrev}/>
          <div onClick={this.changeView}>{decadeStart} - {decadeEnd}</div>
          <a className='navigation navigation--next' onClick={this.handleNext}/>
        </div>
        <div className="years">
          {years}
        </div>
      </div>
  }
})

module.exports = Years
