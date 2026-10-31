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
import { useState } from "react"
import axios from "axios"

export function LoginForm({
  className,
  ...props
}) {


  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function onChangeEmailHandler(e) {
    setEmail(e.target.value)
  }

  function onChangePasswordHandler(e) {
    setPassword(e.target.value)
  }

  async function loginSubmitHandler(e) {

    e.preventDefault()
    // const tkn = localStorage.getItem('token')
    // console.log(tkn)

    const response = await axios.post("http://localhost:3001/api/v1/user/authenticate", {
      email: email,
      password:password
    },
   

    )

    if (response.data.success == true) {
      navigate("/")

    }

  }







  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginSubmitHandler}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={onChangeEmailHandler}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required onChange={onChangePasswordHandler} />
              </Field>
              <Field>
                <Button type="submit" >Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Dont have an account? < Link to='/signup'>Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
