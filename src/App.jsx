import { useEffect, useState } from 'react'
import data from './fakeDB.json'

import './App.css'
import BlogCard from './Component/BlogCard'

function App() {
  const [count, setCount] = useState([])
  useEffect(() => {
    setCount(data.posts)
  }, [])

  return (
    <div className=" grid grid-cols-1 gap-5 ">
      {
        count.map((ele ,id) => <div key={id}>
          {/* <p>{ele.id}</p>
          <img src ={ele.images.blog_cover_image} alt='' crossOrigin="anonymous"/>
          <p>{ele.author_name}</p>
          <p>{ele.blog_title}</p>
          <p>{ele.read_time}</p>
          <p>{ele.publish_date}</p> */}
          <BlogCard 
          authorImage={ele.images.author_image} 
          authorName={ele.author_name}
          blogCoverImage={ele.images.blog_cover_image}
          blogTitle={ele.blog_title}
          publishDate={ele.publish_date}
          post={ele.post}
          readTime={ele.read_time}
          />
          
        </div>)
      }
    </div>
  )
}

export default App
