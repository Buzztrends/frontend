export default function Button({buttonText}) {
  return (
    <input type="submit" className="cursor-pointer .bg-linear-gradient text-whitetext-lg rounded-lg shadow-primary w-2/5 py-3 font-medium " value={buttonText}/>
  )
}