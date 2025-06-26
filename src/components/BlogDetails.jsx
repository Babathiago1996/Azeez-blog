import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const BlogDetails = () => {
  const { id } = useParams();
  const [showFullText, setShowFullText]=useState(false)
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`https://azeez-blog.onrender.com/blogs/${id}`);
  const redirect = useNavigate();

  const handleDelete = () => {
    const getRide = async () => {
      await fetch(`https://azeez-blog.onrender.com/blogs/${id}`, {
        method: "DELETE",
      });
      toast.error("blog deleted successfully", { autoClose: 3000 });

      setTimeout(() => {
        redirect("/");

      }, 4000);
    };
    getRide()
  };
  // function to truncate text to 200words
  const truncateText=(text)=>{
    const words=text.split(" ")
    if(words.length>300){
      return words.slice(0, 200).join(" ") + "..."
    }
    return text
  }

  return (
    <div>
      {error && <div className="text-red-500"></div>}
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <RingLoader size={60} color="#3b82f6" />
        </div>
      )}
      {blog && (
        <article className="max-w-3xl mt-8 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 hover:text-red-400 ">
              {blog.title}
            </h1>
            <h3 className="text-3xl text-gray-600 mb-4 ">
              Written by: <b>{blog.author}</b>
            </h3>
            <div className="text-gray-700  text-2xl hover:bg-blue-100 transition-colors duration-300 p-2 rounded text-justify">
              {showFullText?blog.body : truncateText(blog.body)}
              {/* {show more/ show less button -only appear when needed} */}
              {blog.body.split(" ").length>300 && <button onClick={()=> setShowFullText(!showFullText)} className="ml-2 text-blue-600 font-medium hover:underline focus:outline-none">{showFullText? "show less":"show more"}</button>
              }
              
              </div>
            <button
              onClick={handleDelete}
              className="mt-4 bg-red-500 w-[100px] text-[26px] rounded font-semibold "
            >
              DELETE
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
