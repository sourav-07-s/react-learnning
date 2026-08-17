import React , {useState , useContext} from "react"
import userContext from "./context/userContext" 



 export const Login = ()=>{

    const [userName , setuserName] = useState('')
    const [password, setpasswrod] = useState('')

    const {setuser} = useContext(userContext)

    


    const handelsubmit = (e:any) => {
     e.preventDefault();

     setuser({userName,setuserName})

   setuserName("")
   setpasswrod("")
        
    }


    return (
        <>

        <div className="flex justify-center gap-1.5">
            <input
            className="bg-black text-white rounded-3xl text-center"
            type =" text"
            value={userName}
            onChange={(e)=>{setuserName(e.target.value)}}
            placeholder="UserName"
            id="user"
            />
            <br/>
            {" "}
            
            <input
            className="bg-black text-white rounded-3xl text-center"
            type="text"
            value ={password}
            onChange={(e)=>{setpasswrod(e.target.value)}}
            placeholder ="Password" 
            id="pass"
            />

            <br/>

           
        </div>
        <br/>
        <div  className =" flex justify-center">
         <button  
            className="bg-black text-white rounded-3xl text-center p-2 hover:cursor-pointer "
            onClick={handelsubmit}>
                Submit
            </button>
            </div>
        
        </>


    )

 }

 