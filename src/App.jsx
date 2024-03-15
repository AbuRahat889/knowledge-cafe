
import './App.css'
import Blogs from './conponents/Blogs/Blogs'
import Bookmarks from './conponents/Bookmarks/Bookmarks'
import Header from './conponents/Header/Header'

function App() {
  return (
    <>
      <h1 className='text-4xl'>Vite + React</h1>
      <hr />
      <Header></Header>
      <hr />
      <div className='md:flex mt-10 gap-8'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
