
export default function Button({children, className, props, size='medium'}) {

    let cssSize = {
        small: 'font-sm px-2 py-1',
        medium: 'font-md px-3 py-1',
        large : 'text-lg px-4 py-2'
    }
  return (
    <>
    <button className={`bg-[#fc5d61] p-1 text-white rounded-full ${cssSize[size]} ${className}` } {...props}>{children}</button>
    </>
  )
}
