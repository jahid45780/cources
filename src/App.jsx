import Blogs from "./Components/Blogs/Blogs"
import Courses from "./Components/Courses/Courses"
import Credit from "./Components/Credit/Credit"
import Header from "./Components/Header/Header"
import Price from "./Components/Price/Price"
import Credits from "./Credits/Credits"

function App() {
  
  return (
    <>
    
    <Header></Header>  
  <div className="container mx-auto">


  <div className=" flex gap-5">
  <div className=" grid grid-cols-3 gap-3 mt-10 ">
  <Blogs></Blogs>
  </div>
 <div className="mt-10 shadow-lg">
 <Credit></Credit>
  <Courses></Courses>
  <Credits></Credits>
  <Price></Price>
 </div>
  </div>

  </div>
    </>
  )
}

export default App
