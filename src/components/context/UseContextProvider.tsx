import React, { useState } from "react";
import userContext from "./userContext";

const UserContextProvider = (
{children,} 
:
{
  children: React.ReactNode;
}

) => {

    const [user,setuser] = useState(null) ;
    return(

        <userContext.Provider value = {{user , setuser}}> 
            {children}
        </userContext.Provider>
    )


}



export default UserContextProvider ;



