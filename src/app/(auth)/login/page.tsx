import LoginButton from "@/components/login-button"
import { Button } from "@/components/ui/button"

const Login = () => {
  
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="text-4xl">Login</h1>

      <div className="mt-10 flex items-center flex-col text-center w-full max-w-sm">
        {/* Social Login Buttons */}
        <div className="flex flex-col gap-2 items-center w-full">
         <LoginButton/>
        </div>

        {/* Divider */}
        <div className="mt-1">
          <p className="text-sm">or</p>
        </div>

        {/* Login Form */}
        <form className="flex gap-4 flex-col text-start w-full">
          <div className="flex flex-col">
            <label htmlFor="email" className="px-2 text-sm">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              className="p-2 rounded-2xl border border-gray-300"
              placeholder="example@domain.com"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="px-2 flex justify-between text-sm">
              <p>Password</p>
              <span className="underline">Forgot Password?</span>
            </label>
            <input
              type="password"
              id="password"
              className="p-2 rounded-2xl border border-gray-300"
              placeholder="password"
            />
          </div>

          <Button className="w-full">Login</Button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 flex items-center gap-3">
          <p>Don&apos;t have an account?</p>
          <p className="underline">Sign Up</p>
        </div>
      </div>
    </div>
  )
}

export default Login
