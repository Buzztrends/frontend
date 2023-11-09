export default function Button({buttonText, strokeOnly=false, width='1/2'}) {
  return (
    <input type="submit" className={`cursor-pointer border-2 border-primary-color ${strokeOnly ? "text-primary-color":"bg-gradient-linear hover:bg-gradient-linear-50 text-white"} text-xl rounded-lg w-${width} py-3 font-medium`} value={buttonText}/>
  )
}