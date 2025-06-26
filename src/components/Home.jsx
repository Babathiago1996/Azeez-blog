import React from 'react'
import useFetch from '../Hooks/useFetch'
import BlogList from './BlogList'
import { RingLoader } from 'react-spinners'

const Home = () => {
    const {
      data: blogs,
      isLoading,
      error,
    } = useFetch(`http://localhost:9002/blogs`);
console.log(blogs)
  return (
    <div>
      
      {error && <div className='text-red-500'></div>}
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <RingLoader size={60} color="#3b82f6"/>
        </div>
      )}
      {blogs && <BlogList title="All Blogs" blogs={blogs} />}
    </div>
  );
}

export default Home