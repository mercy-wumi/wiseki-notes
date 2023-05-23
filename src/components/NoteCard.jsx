

const NoteCard = ({allNotes}) => {
    return(
        <>
        {allNotes && allNotes.map((notes, index) => (
        <div className={`${notes.category == 'favorite' ? 'bg-[#FD99FF]' : 'bg-[#91F48F]'} p-6  mb-2 text-[#000000]`} key={index}>
            <div className="flex justify-between items-center mb-2">
            <h3 className="uppercase font-semibold">{notes.titleNote}</h3>
            <span>...</span>
            </div>
            <p>{notes.noteText}</p>
        </div>
        ))}
        </>
    )
}

export default NoteCard