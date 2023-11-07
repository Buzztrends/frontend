export default function Button({buttonText}) {
  return (
    <input type="submit" className="cursor-pointer bg-gradient-linear text-white text-lg rounded-lg shadow-primary w-2/5 py-3 font-medium " value={buttonText}/>
  )
}