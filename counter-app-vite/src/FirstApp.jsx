import PropTypes from 'prop-types'

export const FirstApp = ({ title }) => {


  return (
    <>
      <h3> {title} </h3>
      <h1>Carlos</h1>
      <p>Soy un subtitulo</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}