

const NoteCard = ({allNotes}) => {
    return(
        <>
        {allNotes && allNotes.map((notes, index) => (
        <div className="p-6 bg-[#FD99FF] mb-2 text-[#000000]" key={index}>
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