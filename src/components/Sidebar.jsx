import allnotes from '../assets/allnotes.png'
import favorite from '../assets/favorite.png'
import notebook from '../assets/notebook.png'
import deleted from '../assets/deleted.png'
import setting from '../assets/setting.png'

const Sidebar = ({setActive, active}) => {
    return(
        <div className='bg-bgSidebar w-[364px] min-h-screen text-white p-10 fixed top-0 left-0 pr-0'>
            <ul className="list-none">
                <li className={`${active === 'allnote' ? 'border-r-2 border-white' : ''} cursor-pointer flex items-center mb-10`} onClick={() => setActive('allnote')}>
                    <img src={allnotes} alt="all notes icon" className='mr-4' />
                    <span>All Note</span>
                </li>
                <li className={`${active === 'notebook' ? 'border-r-2 border-white' : ''} cursor-pointer flex items-center mb-10`}  onClick={() => setActive('notebook')}>
                    <img src={notebook} alt="all notes icon" className='mr-4' />
                    <span>Notebook</span>
                </li>
                <li className="cursor-pointer flex items-center mb-10">
                    <img src={favorite} alt="all notes icon" className='mr-4' />
                    <span>Favorite</span>
                </li>
                <li className="cursor-pointer flex items-center mb-10">
                    <img src={deleted} alt="all notes icon" className='mr-4' />
                    <span>Deleted</span>
                </li>
                <li className="cursor-pointer flex items-center mb-10">
                    <img src={setting} alt="all notes icon" className='mr-4' />
                    <span>Setting</span>
                </li>
            </ul>
            <div className='w-[58px] h-[58px] rounded-full flex justify-center items-center bg-[#1D1E24] text-4xl fixed bottom-8 cursor-pointer' onClick={() => setActive('notebook')}>
                <span className='-mt-2'>+</span>
                </div>
        </div>
    )
}

export default Sidebar