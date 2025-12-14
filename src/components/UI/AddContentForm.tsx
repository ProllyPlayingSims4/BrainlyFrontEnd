import { useState, type ReactElement } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";

interface AddContentFormProps {
    open?: boolean;
    onClose?: () => void;
    onSubmit: (data: any)=> void;
}



export const AddContentForm = ({open, onClose, onSubmit}: AddContentFormProps) => {
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({
    link: '',
    type: 'fb',
    title: '',
    tags: ''
    })

    const handleChange = (e: any) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
       const payload = {
        link: form.link,
        type: form.type,
        title: form.title,
        tags: form.tags
       }
       onSubmit(payload)
    }
    return <div>
        {open && 
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-70 z-9999 flex justify-center" onClick={onClose}>
                <div className="flex flex-col justify-center" onClick={(e)=> {e.stopPropagation()}}>
                      <span className="opacity-100 bg-white p-4 rounded-2xl">
                        <div className="flex justify-end" onClick={onClose}>
                           <CrossIcon/> 
                        </div>
                        <div>
                            <Input Name={"Content"} onChange={handleChange} value={form.link} />
                            <SelectOption Name={"Type"} options={["fb", "youtube", "tweet", "insta"]} onChange={handleChange} value={form.type}/>
                            <Input Name={"Title"} onChange={handleChange} value={form.title} />
                            <Input Name={"Tags"} onChange={handleChange} value={form.tags}/>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" size="md" text="Submit" onClick={handleSubmit}/>
                        </div>
                      </span>
                </div>


            </div>
        }
    </div>
}

export const Input = ({onChange, Name, value}: {onChange: (data: any) => void; Name: string; value: string}) => {
    return <div className="flex flex-col p-4 w-full justify-center ">
        <label htmlFor={Name}>{Name}</label>
        <input name={Name} placeholder={Name} type="text" className="px-2 py-4 rounded-lg w-full bg-amber-700" onChange={onChange} value={value}/>
    </div>
}

export const SelectOption = ({Name, options, onChange, value}: {Name: string; value: string; options: string[]; onChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void}) => {
    return <div className="flex flex-col p-4 w-full">
        <label htmlFor={Name}>{Name}</label>
        <select name={Name} id="" value={value} onChange={onChange}>
        {options.map((opt)=>{
            return <option key={opt} value={opt}>
                 {opt}
            </option>
        })}
        </select>
    </div>
}


// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//    e.preventDefault();
   
// }
// export const AddContentForm = () => {
//     return <div className="bg-lavender-300 rounded-3xl flex flex-col p-6" >
//         <h1 className="flex justify-center p-4 font-bold text-2xl">Add Content</h1>
//     <form onSubmit={handleSubmit} className="flex flex-col items-start">
//         <div className="flex flex-col p-4 w-full">
//             <label htmlFor="link">Content: </label>
//             <input className="rounded-lg bg-gray-400 w-full" type="text" name="link" />
//         </div>
//         <div className="flex flex-col p-4 w-full ">
//             <label htmlFor="type">Select post type: </label>
//             <select className="rounded-lg bg-gray-400 w-full" name="type" id="type">
//                 <option value="tweet">tweets</option>
//                 <option value="insta">insta</option>
//                 <option value="fb">facebook</option>
//                 <option value="youtube">youtube</option>
//             </select>    
//         </div>
//         <div className="flex flex-col p-4 w-full">
//             <label htmlFor="title">Title</label>
//             <input className="rounded-lg bg-gray-400 w-full" type="text" name="title" />
//         </div>
//         <div className="flex flex-col p-4 w-full">
//             <label htmlFor="tags">Enter Tags: </label>
//             <input className="rounded-lg bg-gray-400 w-full" type="text" name="tags" />0
//         </div>
//         <div className="flex flex-col items-center justify-center w-full">
//           <button className="bg-lavender-600 text-white rounded-2xl p-4 m-2 w-full" type="submit">Submit</button>
//         </div>
        
//     </form>
//     </div>
// }