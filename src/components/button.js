export default function Button({buttonText, strokeOnly=false, isDisabled=false, width='1/2'}) {
  return (
    <button className={`cursor-pointer border-2 border-primary-color ${strokeOnly ? "text-primary-color hover:text-primary-color-dim hover:border-primary-color-dim":"bg-gradient-linear hover:bg-gradient-linear-50 text-white"} text-xl rounded-lg w-${width} py-3 font-medium`} value={buttonText}>
      {buttonText}
    </button>
  )
}