import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export function SignupForm({
  className,
  ...props
}) {
  const navigate = useNavigate()
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [username,setUsername]=useState("");

   function onSubmitHandler(e){
    e.preventDefault()
    console.log(name,password,email,address,username)

    async function createAccount(){
      const response = await axios.post("http://localhost:3001/api/v1/user",{
        name:name,
        email:email,
        address:address,
        username:username,
        password:password
        
      })
    console.log("here after the request")
      console.log(response.data.tkn)
      localStorage.setItem('token', response.data.tkn)
      if(response.data.success==true){
        navigate("/login")
      }
    }

    createAccount()
    

    
   
 
}


  
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmitHandler}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" type="text" placeholder="John Doe" onChange={(e)=>(setName(e.target.value))} required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"

                  onChange={(e)=>(setEmail(e.target.value))}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  id="address"
                  type="address"
                  placeholder=""

                  onChange={(e)=>(setAddress(e.target.value))}
                  required
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password"  onChange={(e)=>(setPassword(e.target.value))} required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="text">
                      Username
                    </FieldLabel>
                    <Input id="username" type="text" onChange={(e)=>(setUsername(e.target.value))} required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" >Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account? < Link to='/login'>Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
