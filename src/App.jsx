import { useState } from "react";
import AddNote from "./pages/AddNote";
import Sidebar from "./components/Sidebar";
import AllNote from "./pages/AllNotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const dataNotes = [{
  titleNote:'Timeline Amazing Task',
  noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.',
  category: 'favorite'
},
{
  titleNote:'Timeline Amazing Task',
  noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.',
  category: 'normal'
}
,{
  titleNote:'Timeline Amazing Task',
  noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor ut arcu eu nisl condimentum sit. Amet et purus pellentesque non auctor enim facilisi. Suspendisse arcu nunc semper quam blandit lectus. Scelerisque metus euismod sed lacus.',
  category: 'normal'
}]

export default function App() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [active, setActive] = useState('allnote')
  const [allNotes, setAllNotes] = useState(dataNotes)

const category = ['favorite', 'normal']

const rand = (Math.floor(Math.random() * 2))
console.log(rand)

const handleClick = () => {
  console.log('checking..')
   setAllNotes([
    ...allNotes,
    {
      titleNote: title,
      noteText: note,
      category: category[rand]
   }])
   console.log(allNotes)
}
  return (
    <div className="flex w-screen">
      <Sidebar setActive={setActive} active={active} />
      <div className="main">
        {active === 'allnote' && <AllNote allNotes={allNotes} />}
        {active === 'notebook' && 
        <AddNote 
        setTitle={setTitle} 
        title={title} 
        setNote={setNote} 
        note={note} 
        handleClick={handleClick} 
        />
  }
      </div>
    </div>
  )
}