 import {useState} from 'react' ;
 import {useCallback} from 'react' ;
 import {useEffect} from 'react' ;
 import {useRef} from 'react'; 
 
 

 
 export default function Password(){

    const [length , setlength] = useState(8);
     const [numAll , setnumAll] = useState(false) ;
     const[charAllowed , setcharAllowed] = useState (false) ;
      const[password ,setpassword] = useState("");

      const PasswordGenerator = useCallback(()=>{
        let pass = "" ;
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let numbers = "0123456789" ;
        let chars= "!@#$%^&*_"

        if(numAll) characters += numbers
        if(charAllowed ) characters +=chars

        for( let i=1 ; i <=length ;i++) {
            let temp = Math.floor(Math.random ()* characters.length +1)

            pass += characters.charAt(temp) ;
        }
        setpassword(pass);
      },[length,numAll,charAllowed,setpassword]);

      useEffect(()=> {
        PasswordGenerator();

      }, [PasswordGenerator, length,numAll,charAllowed])


      const passRef = useRef<HTMLInputElement>(null);

        const passwordcopy = useCallback(()=> {

          passRef.current ?.select();
          
          window.navigator.clipboard.writeText(password) ;
          alert("password is copied ");
           
        } ,  [password])

       
      return(
<>

        <div className="w-full max-w-full  mx-auto bg-gray-700 text-white font-extrabold rounded-lg px-5 pb-4 my-8 text-center">
            <h1  className =" text-white text-center m-4">Password Generator </h1>
            <div className ="flex justify-between font-sans  rounded mb-8 bg-white text-black  overflow-hidden ">
                
                <input
                className ="w-full outline-none  bg-gray-600 text-white" 
                type =" text"
                placeholder = " password"
                value = {password} 
                readOnly
                ref = {passRef}
                ></input>
              
                
            </div>
              <button
              onClick = {passwordcopy}
               className="bg-blue-900 outline-none shrink-0 px-5 py-2 text-white font-bold rounded-xl hover:cursor-pointer hover:bg-blue-500 ">
                  copy
                </button>

              <div className ="flex text-sm gap-x-1.5 ">
                <div className=" flex items-center gap-x-2 ">

                    <input 
                    id="length"
                     type="range"
                     min={3}
                     max = {102}
                     value = {length}
                     className =" cursor-pointer"
                     onChange = {(e)=> {setlength(parseInt(e.target.value))}}
                     
                     />
                      <label htmlFor='length'>length : {length}</label>

                </div>

              <input
                       type ="checkbox"
                       id="numin"
                       onChange = {() =>{
                        setnumAll((prev) => !prev)
                       
                       }
                      }              
              />
              <label htmlFor ="numin"> numbers</label> 

              
              <input
                       type ="checkbox"
                       id="charin"
                       onChange = {() =>{
                        setcharAllowed((prev) => !prev)
                       
                       }
                      }              
              />
              <label htmlFor ="charin"> Characters</label> 

              </div>

              <button 

              className="bg-blue-900 outline-none shrink-0 px-5 py-2 text-white font-bold rounded-xl hover:bg-blue-500 hover:cursor-pointer mt-4"
              onClick ={PasswordGenerator}> click me to generate </button>

              
        </div>

        <input
         className ="w-full outline-none bg-gray-600 text-white m-7 "
          type = "text"
          placeholder = " password" 
          
          >
        </input>
</>
      
      )
    



}