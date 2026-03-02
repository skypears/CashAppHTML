
function HeaderBar({children}:{children?: React.ReactNode}) {
  return (
    <div className="headerbar fixed top-16 left-20 right-0 h-16 bg-white border-b border-[#d4d4d4] flex items-center px-5 z-30">
      {children}
    </div>
  );
}

export default HeaderBar;