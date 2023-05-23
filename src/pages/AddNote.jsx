
const AddNote = ({setTitle, title, handleClick, note, setNote}) => {
   console.log(note)
    return(
        <div className="w-full bg-[#1D1E24] p-10 h-screen text-white">
            <p className="uppercase mb-4 font-semibold">Add New Note</p>
            <div className="w-full">
                <input type="text"
                placeholder="Enter note title" 
                className="px-4 outline-none bg-input block w-full py-3 mb-4"
                onChange={(e) => setTitle(e.target.value)}
                />
                <textarea rows="10" className="px-4 outline-none bg-input block w-full py-3" onChange={(e)=> {setNote(e.target.value)}}></textarea>
                <button className="border-b-[1px] w-full p-6" onClick={handleClick}></button>
            </div>
        </div>
    )
}

export default AddNote