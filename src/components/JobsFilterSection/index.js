import ProfileDetails from '../ProfileDetails'
import './index.css'

const JobsFilterSection = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(employ => {
      const {changeEmploymentType} = props
      const onChangeEmployType = () =>
        changeEmploymentType(employ.employmentTypeId)

      return (
        <li
          className="checkbox-list-items"
          key={employ.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
          />
          <label htmlFor={employ.employmentTypeId} className="check-label">
            {employ.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list-items"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )

  const getLocationList = () => {
    const {locationList} = props

    return locationList.map(item => {
      const {changeLocation} = props
      const changeCityLocation = () => changeLocation(item.locationId)

      return (
        <li
          className="checkbox-list-items"
          key={item.locationId}
          onChange={changeCityLocation}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={item.locationId}
            value={item.locationId}
          />
          <label htmlFor={item.locationId} className="check-label">
            {item.label}
          </label>
        </li>
      )
    })
  }

  const renderLocation = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Location</h1>
      <ul className="salary-range-container">{getLocationList()}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
      <hr className="horizontal-line" />
      {renderLocation()}
    </div>
  )
}

export default JobsFilterSection
