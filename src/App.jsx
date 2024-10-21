import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);
  }
  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
    <div className='max-w-7xl mx-auto'>

    <Header></Header>
    <div className='md:flex '>
    <Blogs handleAddToBookmark={handleAddToBookmark}  handleMarkAsRead={handleMarkAsRead}></Blogs>
  <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    </div>
    </>
  )
}

export default App
