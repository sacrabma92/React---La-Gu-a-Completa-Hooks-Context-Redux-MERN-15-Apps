import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle }) => {


  return (
    <>
      <h3> {title} </h3>
      <h1>Carlos</h1>
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}