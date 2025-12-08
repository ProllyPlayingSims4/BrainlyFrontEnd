const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   
}
export const AddContentForm = () => {
    return <div className="bg-lavender-300 rounded-3xl flex flex-col p-6" >
        <h1 className="flex justify-center p-4 font-bold text-2xl">Add Content</h1>
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <div className="flex flex-col p-4 w-full">
            <label htmlFor="link">Content: </label>
            <input className="rounded-lg bg-gray-400 w-full" type="text" name="link" />
        </div>
        <div className="flex flex-col p-4 w-full ">
            <label htmlFor="type">Select post type: </label>
            <select className="rounded-lg bg-gray-400 w-full" name="type" id="type">
                <option value="tweet">tweets</option>
                <option value="insta">insta</option>
                <option value="fb">facebook</option>
                <option value="youtube">youtube</option>
            </select>    
        </div>
        <div className="flex flex-col p-4 w-full">
            <label htmlFor="title">Title</label>
            <input className="rounded-lg bg-gray-400 w-full" type="text" name="title" />
        </div>
        <div className="flex flex-col p-4 w-full">
            <label htmlFor="tags">Enter Tags: </label>
            <input className="rounded-lg bg-gray-400 w-full" type="text" name="tags" />0
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button className="bg-lavender-600 text-white rounded-2xl p-4 m-2 w-full" type="submit">Submit</button>
        </div>
        
    </form>
    </div>
}