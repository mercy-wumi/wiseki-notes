import search from '../assets/search.png'
import NoteCard from '../components/NoteCard'

const AllNote = ({allNotes}) => {
    return(
        <div className='p-10 bg-[#1D1E24] text-white'>
            <div className='flex justify-between items-center'>
                <span className='font-bold'>All Notes</span>
                <div className='flex items-center rounded-md bg-bgSidebar text-white px-3 py-1'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search' className='bg-transparent ml-2 outline-none' />
                </div>
            </div>
            <div className=''>
            <div className='flex items-center justify-between my-4'>
                <span className='uppercase '>Pinned</span>
            </div>
            <NoteCard allNotes={allNotes} />
            </div>
            <div>
            <div className='flex items-center justify-between my-4'>
                <span className='uppercase '>Other</span>
            </div>
            <NoteCard allNotes={allNotes} />
            </div>
        </div>
    )
}

export default AllNote