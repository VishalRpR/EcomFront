
import { useNavigate } from "react-router-dom"
import SearchBar from "./Navbar/SearchBar"
import { Button } from "./ui/button"
import { useEffect, useState } from "react";
import axios from "axios";

function CreatorButton({role, onClick}) {
  if (role == "Admin") {
    return <Button onClick={onClick} >Create Product</Button>;
  }
  return;
}




export function SiteHeader() {
  function creatorHandler(){
    navigate("/products")
  }

  const navigate = useNavigate();
  function loginHandler(){
    navigate("/login")
  }

  

  const [role, setRole]= useState("User")

useEffect(()=>{
async function getUser(){
try {
 
  const user = await axios.get("http://localhost:3001/api/v1/user/email")

  const response= user.data.data.role 
  console.log(response)
  setRole(response)
} catch (error) {
  console.log(error)
}
}
getUser()
} ,[])




  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">

        <SearchBar/>
        <CreatorButton role={role} onClick={creatorHandler}/>
        <Button onClick={loginHandler}>
          login
        </Button>
      </div>
    </header>
  )
}
