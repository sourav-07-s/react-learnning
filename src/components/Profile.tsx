
import React ,{useContext} from 'react' ;
import userContext from './context/userContext';



export default function Profile() {

    const {user} =useContext(userContext) 

    if (!user) return <div>plese Login</div>

    return(
        <div>Welcome {user.userName}</div>
    )
   
}

