import Spinner from "../components/Spinner"
// import Blog from '../Components/Blog';
import { useSelector } from 'react-redux';
function Home() {
 
  const {auth}= useSelector((state) => state);
 
  return (
    <>
       <center> 
         <br></br>
          <i> {auth?.user
          ? `Welcome ${auth?.user?.user?.name}`: "Welcome Everyone"} </i>
          </center>
   
    </>
  )
}

export default Home