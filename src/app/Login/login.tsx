import { Link } from "react-router";

function Login() {
  return (
    <div className="login-bg-overlay">
      <div className="flex items-center justify-center h-full">
        {/* <div className="min-h-screen bg-[#ececec] px-4 py-6 grid place-items-center"> */}
        <div className="w-md bg-white border border-[#d4d4d4] rounded-xl px-16 py-6 flex flex-col items-center gap-6">
          <img src={'./src/assets/logo-sm.png'} alt="Logo" className="w-20" />

          <div className="w-full text-center text-[#242424] leading-none">
            <p className="font-medium">Welcome back</p>
            <p className="mt-2 text-2xl font-semibold ">
              Please Sign In to Continue
            </p>
          </div>

          <div className="w-full space-y-6">
            <div className="space-y-2">
              <label className="label text-sm">Email or Username</label>
              <input
                type="text"
                defaultValue="johndoe@abc.com"
                className="input"
              />
            </div>

            <div className="space-y-2">
              <label className="label text-sm">Password</label>
              <input
                type="password"
                defaultValue="************"
                className=" input "
              />
            </div>
          </div>

          <button className="w-full h-10 rounded-lg bg-[#333446] text-white hover:bg-[#333446]/90  font-medium">
            Login
          </button>

          <Link to={"/forgot-password"} className=" text-[#007dc1] text-sm">
            Forgot Password?
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
function Logout() {
  return <h1>Logout Page</h1>;
}

export default Login;
export { Logout };
