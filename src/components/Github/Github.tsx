
import { useLoaderData } from "react-router-dom";
  function Github(){


  const data = useLoaderData()


    return (

 <div
 className="bg-gray-600 text-white p-5 text-2xl flex justify-around">
     git followes : {data.followers}
     <br/>
     git Name : {data.name}
 <img
 className="rounded-full" 
 src={data.avatar_url} alt="Git Pic" width={300} />
 
 </div>
    )
  }
  export default Github ;

  export const GithubInfoLoader = async ()=> {

   const responce =  await  fetch("https://api.github.com/users/sourav-07-s")
   return responce.json() ;
  }