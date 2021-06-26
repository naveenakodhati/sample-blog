// Write your JS code here
import BlogList from '../BlogList'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  return (
    <div className="blog-container">
      {blogData.map(eachItem => (
        <BlogList eachData={eachItem} key={eachItem.id} />
      ))}
    </div>
  )
}

export default BlogItem
