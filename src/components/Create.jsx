import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Create = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("broCode");
  const [body, setBody] = useState("");
  const [error, setError]=useState(null)
  const redirect=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    const blog = { title, author, body };
    fetch("http://localhost:8005/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      if(!res.ok){
        throw Error ("Failed to add blog")
      }
      return res.json()
    })
    .then(()=>{
        toast.success("blog Added Successfully", {autoClose:99000, pauseOnHover:true, theme:"light"});

        setIsLoading(false)
        setTitle("")
        setBody("")
        setAuthor("broCode")

    })
    .catch((error)=>{
        setIsLoading(false)
        setError(error.message)
toast.error("Error adding blog") 
   })
   redirect("/");

  };
  return (
    <div className="max-w-[700px] mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 ">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 ">
        Add New Blog
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 ">
        <div>
          <label className="block text-2xl  font-medium text-gray-700 mb-1 ">
           Blog Title
          </label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[60px]"
            required
          />
        </div>

        <div>
          <label className="block text-2xl  font-medium text-gray-700 mb-1 ">
          Blog Author
          </label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[60px]"
            required
          >
            <option value="Azeez">Azeez</option>
            <option value="BroCode">BroCode</option>
            <option value="Alabi">jane Doe</option>
            <option value="john smith">john smith</option>
            <option value="Emily Zhang">Emily Zhang</option>
          </select>
        </div>
        <div>
          <label className="block text-2xl  font-medium text-gray-700 mb-1 ">
            Blog Body
          </label>
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[180px]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;
