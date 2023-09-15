import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Courses from "./Components/Courses/Courses"
import Credit from "./Components/Credit/Credit"
import Header from "./Components/Header/Header"
import Price from "./Components/Price/Price"
import Credits from "./Credits/Credits"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [courses,setCourses] = useState([]);

  const [credit, setCredit]= useState(0)

  const [creditRemaining, setCreditRemaining] =useState(20)
  const [price, setPrice]= useState(0)


  const handleToAddCourse =blog=>{
    const isExist = courses.find(item=>item.id==blog.id)
    let count= blog.credit;
    let price=blog.price
    
    if(isExist){

      return  toast('👨‍✈️ Dear User Ar Akta Click Diba Na! ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      courses.forEach(item =>{
           count=count+item.credit
           price=price+item.price
         
        
      })
      if(count>20){
        toast('🤞 your credit limit is over!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        const totalCriditRemaining = 20-count;
        setCreditRemaining(totalCriditRemaining)
        setCredit(count)
       setPrice(price)
      const newCourses =[...courses,blog]
      setCourses(newCourses)
      }
      
    }
  
    
  }


  return (
    <>
    <ToastContainer />
    <Header></Header>  
  <div className="container mx-auto ml-12 ">


  <div className=" flex-none lg:flex gap-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
  <Blogs handleToAddCourse={handleToAddCourse} ></Blogs>
  </div>
 <div className="mt-10 shadow-lg ">
 <Credit creditRemaining={creditRemaining}  ></Credit>
  <Courses courses= {courses} ></Courses>
  <Credits credit={credit} ></Credits>
  <Price price={price} ></Price>
 </div>
  </div>

  </div>
    </>
  )
}

export default App
