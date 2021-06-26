// Write your JS code here
import './index.css'

const BlogList = props => {
  const {eachData} = props
  const {title, description, publishedDate} = eachData
  return (
    <div className="blog-list-styling">
      <div className="blog-styling">
        <h1 className="heading">{title}</h1>
        <p className="blog-description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </div>
  )
}

export default BlogList
