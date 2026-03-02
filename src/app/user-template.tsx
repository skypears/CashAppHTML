
import {Sidebar, TopBar } from "./components/webapp";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
     <div className="bg-[#f2f2f4] min-h-screen main">
      <Sidebar />
      <TopBar />
      
     {children}
    </div>
)
}
