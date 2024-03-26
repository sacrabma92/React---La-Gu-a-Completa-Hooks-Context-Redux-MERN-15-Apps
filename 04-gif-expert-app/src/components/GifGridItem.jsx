

export const GifGridItem = ({ title, url, id }) => {

  return (
    <div className="card">
      <img src={url} alr={title}></img>
      <p>{title}</p>
    </div>
  )
}

