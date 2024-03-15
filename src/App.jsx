
import { useState } from 'react'
import './App.css'
import Blogs from './conponents/Blogs/Blogs'
import Bookmarks from './conponents/Bookmarks/Bookmarks'
import Header from './conponents/Header/Header'

function App() {
  //bookMark handel
  const [bookmarks , setBookmarks] = useState([]);
  const handelBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }


  return (
    <>
      <hr />
      <Header></Header>
      <hr />
      <div className='md:flex mt-10 gap-8'>
        <Blogs  
        handelBookmark={ handelBookmark}></Blogs>
        
        <Bookmarks 
        bookmarks={bookmarks}></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
