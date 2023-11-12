export default function Header({header, width='full'}) {
  return (
    <div className={`h-24 w-${width} font-semibold text-3xl text-white content-center float-right flex items-center bg-gradient-linear fixed`}>
      <p className="text-center ml-6">{header}</p>
    </div>
  )
}