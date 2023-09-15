import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Courses from "./Components/Courses/Courses"
import Credit from "./Components/Credit/Credit"
import Header from "./Components/Header/Header"
import Price from "./Components/Price/Price"
import Credits from "./Credits/Credits"

function App() {
  
  const [courses,setCourses] = useState([]);

  const [credit, setCredit]= useState(0)

  const [creditRemaining, setCreditRemaining] =useState(20)
  

  const handleToAddCourse =blog=>{
    const isExist = courses.find(item=>item.id==blog.id)
    let count= blog.credit;
    
    if(isExist){
    return alert('User you have already booked it once')
    }
    else{
      courses.forEach(item =>{
           count=count+item.credit
        
      })
      if(count>20){
        alert("Tomer 0 hoice")
      }
      else{
        const totalCriditRemaining = 20-count;
        setCreditRemaining(totalCriditRemaining)
        setCredit(count)
     console.log(count)
      const newCourses =[...courses,blog]
      setCourses(newCourses)
      }
      
    }
  
    
  }


  return (
    <>
    
    <Header></Header>  
  <div className="container mx-auto ml-12 ">


  <div className=" flex-none lg:flex gap-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
  <Blogs handleToAddCourse={handleToAddCourse} ></Blogs>
  </div>
 <div className="mt-10 shadow-lg ">
 <Credit creditRemaining={creditRemaining}  ></Credit>
  <Courses courses= {courses} ></Courses>
  <Credits credit={credit} ></Credits>
  <Price></Price>
 </div>
  </div>

  </div>
    </>
  )
}

export default App
