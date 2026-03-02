import { Bell, User } from "lucide-react";

function TopBar() {
  return (
    <div className="topbar fixed top-0 left-20 right-0 h-16 bg-white border-b border-[#d4d4d4] flex items-center justify-end px-4 z-40">
      <button className="btn btn-ghost">
        <Bell className=" text-[#BCBCBC]" />
      </button>
      <details className="dropdown dropdown-end">
        <summary className="btn btn-ghost m-1">
          <User className=" text-[#007DC1]" />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default TopBar;
