import PublicNavbar from "@/components/layout/PublicNavbar"

const LoginLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <div className="fixed top-0 z-50 left-0 right-0">
        <PublicNavbar />
      </div>
      <main className="max-w-screen-2xl md:px-0 px-2 mx-auto pt-20   ">{children}</main>
    </div>
  )
}

export default LoginLayout