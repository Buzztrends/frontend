export default function InputText({name, id, width='10/12', height=12, isDisabled=false}) {
  return (
    <input className={`border border-solid border-primary-color rounded-lg shadow-primary block w-${width} h-${height} px-5 mt-2 font-medium`} type="text" name={name} id={id} disabled={isDisabled}/>
  )
}