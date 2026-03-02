import svgPaths from '@/imports/svg-data'
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="w-4 h-4 shrink-0 cursor-pointer block relative"
    >
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        {checked ? (
          <>
            <rect width="16" height="16" rx="2" fill="#007DC1" />
            <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <path clipRule="evenodd" d={svgPaths.pa6eea00} fill="#D4D4D4" fillRule="evenodd" />
        )}
      </svg>
    </button>
  );
}

export default Checkbox;