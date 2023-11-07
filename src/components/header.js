export default function Header({header}) {
  return (
    <div className="h-24 w-10/12 font-semibold text-3xl text-white content-center float-right flex items-center bg-linear-gradient">
      <p className="text-center ml-6">{header}</p>
    </div>
  )
}