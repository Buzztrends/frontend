export default function Button({buttonText, isDisabled=false, width='1/2'}) {
  return (
    <button className={`cursor-pointer ${!isDisabled ? "bg-gradient-linear hover:bg-gradient-linear-50":"bg-gradient-linear-off"} text-white text-xl rounded-lg w-${width} py-3 font-medium`} value={buttonText} disabled={isDisabled}>
      {buttonText}
    </button>
  )
}