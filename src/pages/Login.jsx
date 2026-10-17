<<<<<<< HEAD
function Login(){
    
    return(
      <>
      <h1>
        Login
      </h1>
      </>

    )
}


export default Login
=======
import { LoginForm } from "@/components/login-form"


function Login(){
    
    return(
      <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
      </>

    )
}

export default Login
>>>>>>> 5c080fd (added some car functionality with bug fix in products rendering)
