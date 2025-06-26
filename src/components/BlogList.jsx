import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({blogs, title}) => {
  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
        <h1 className='text-5xl font-bold text-center mb-8 text-blue-600'>{title}</h1>
        <div className='flex flex-col gap-6 items-start '>{
          blogs.map((blog)=>{
          return (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/blogs/${blog.id}`}>
                <h2 className="md:text-4xl font-semibold  text-gray-800 mb-2 text-[25px] ">
                  {blog.title}
                </h2>
                <p className="md:text-3xl text-gray-500 mb-4  text-2xl">by {blog.author}</p>
              </Link>
            </div>
          );
          })  
            }
            </div>
    </div>
  )
}

export default BlogList