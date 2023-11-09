export default function InputText({name, id, width='full', height=12, isDisabled=false}) {
  return (
    <input className={`border-2 border-solid border-primary-color rounded-lg block w-${width} h-${height} px-5 mt-2 font-medium`} type="text" name={name} id={id} disabled={isDisabled}/>
  )
}