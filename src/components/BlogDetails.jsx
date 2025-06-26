import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:9002/blogs/${id}`);
  const handleDelete = () => {
    const getRide = async () => {
      await fetch(`http://localhost:9002/blogs/${id}`, {
        method: "DELETE",
      });
      toast.success("blog deleted successfully")
      redirect("/")
    };
    getRide()
  };
  const redirect=useNavigate()

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
            <div className="text-gray-700  text-2xl hover:bg-blue-100 transition-colors duration-300 p-2 rounded text-justify">{blog.body}</div>
            <button
              onClick={handleDelete}
              className="mt-4 bg-red-500 w-[100px] text-[26px] rounded font-semibold"
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
