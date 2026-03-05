import { Link } from "react-router";

function ForgotPass() {
  return (
    <div className="login-bg-overlay">
      <div className="flex items-center justify-center h-full">
        {/* <div className="min-h-screen bg-[#ececec] px-4 py-6 grid place-items-center"> */}
        <div className="w-md bg-white border border-[#d4d4d4] rounded-xl px-16 py-6 flex flex-col items-center gap-6">
          <img src={"./src/assets/logo-sm.png"} alt="Logo" className="w-20" />

          <div className="w-full text-center text-[#242424] leading-none">
            <p className="font-medium">Forgot Password</p>
            <p className="mt-2 text-2xl font-semibold ">
              Enter Email to Reset Password
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
          </div>

          <button className="w-full h-10 rounded-lg bg-[#333446] text-white hover:bg-[#333446]/90  font-medium">
            Submit
          </button>

          <Link to={"/login"} className=" text-[#007dc1] text-sm">
            Back to Login
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ForgotPass;
