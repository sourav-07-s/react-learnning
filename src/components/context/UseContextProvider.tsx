import React from "react";
import userContext from "./userContext";

const userContextProvider = (
{children,} :
{
  children: React.ReactNode;
}
) => {
    return(

        <userContext.Provider value = {null}>
            {children}
        </userContext.Provider>
    )


}



export default userContextProvider ;



