import { Grid2X2, Users, DollarSign, Upload, FolderOpen } from "lucide-react";
import svgPaths from "@/imports/svg-data";
import { Link, useLocation } from "react-router";

function Sidebar() {
  const location = useLocation();
  return (
    <div className="sidebar fixed left-0 top-0 h-full w-20 bg-[#333446] flex flex-col items-center py-2 gap-2.5 z-50">
      <Link to={"/"} className="h-10 w-10 shrink-0 overflow-hidden">
        <img alt="Logo" className="" src={"/src/assets/logo-sm.png"} />
      </Link>
      <div className="seperator w-full h-p`x bg-white/25" />
      <div className="flex flex-col items-center gap-6 w-full mt-2">
        <button className="btn btn-ghost text-white hover:text-info hover:bg-gray-600">
          <Grid2X2 className="size-8 " />
        </button>

        <div className="w-full h-px bg-white/25" />
        <Link
          to="/users"
          className={`btn btn-ghost btn-info size-12 rounded-full text-white hover:text-info hover:bg-gray-600 ${location.pathname === "/users" ? "btn-active" : ""}`}
        >
          <Users className="size-8" />
        </Link>
        <Link
          to="/payment-id"
          className={`btn btn-ghost btn-info size-12 rounded-full text-white hover:text-info hover:bg-gray-600 ${location.pathname === "/payment-id" ? "btn-active" : ""}`}
        >
          <DollarSign className="size-8" />
        </Link>
        <Link
          to="/inbox"
          className={`btn btn-ghost btn-info size-12 rounded-full text-white hover:text-info hover:bg-gray-600 ${location.pathname === "/inbox" || location.pathname === "/" ? "btn-active" : ""}`}
        >
          <div className="w-8 h-8 relative">
            <div className="absolute inset-[-25%]">
              <svg className="block size-full" fill="none" viewBox="0 0 48 48">
                {/* <circle cx="24" cy="24" fill="#007DC1" r="24" /> */}
                <path
                  clipRule="evenodd"
                  d={svgPaths.link}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Link>
        <Link
          to="/enriched-file"
          className={`btn btn-ghost btn-info size-12 rounded-full text-white hover:text-info hover:bg-gray-600 ${location.pathname === "/enriched-file" ? "btn-active" : ""}`}
        >
          <Upload className="w-8 h-8 " />
        </Link>
        <Link
          to="/open-invoices"
          className={`btn btn-ghost btn-info size-12 rounded-full text-white hover:text-info hover:bg-gray-600 ${location.pathname === "/open-invoices" ? "btn-active" : ""}`}
        >
          <FolderOpen className="w-8 h-8 " />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
