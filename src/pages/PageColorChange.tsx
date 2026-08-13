import { useState } from "react";

export default function PageColorChange() {

  const [color, setcolor] = useState("black");
  return (
   
    <>
    
    
   <div  className="w-full h-screen "
      style={{ backgroundColor: color }}  

  
    >
      <div className=" fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-3 py-2 " >

        <div className="flex flex-wrap gap-2   rounded-3xl px-3 py-2"> 


          <button 
          onClick={()=> setcolor("red")}

          className="rounded-full px-4 py-3 bg-red-600 hover:cursor-pointer duration-200">Red</button>
          <button 
          onClick={()=> setcolor("green")}

          className="rounded-full px-4 py-3 bg-green-600 hover:cursor-pointer">Green</button>
          <button 
          onClick={()=> setcolor("blue")}

          className="rounded-full px-4 py-3 bg-blue-600 hover:cursor-pointer">Blue</button>
          <button 
          onClick={()=> setcolor("orange")}

          className="rounded-full px-4 py-3 bg-orange-600 hover:cursor-pointer">Orange</button>


        </div>
            
     </div>


</div>
</>
    
   
  );
}