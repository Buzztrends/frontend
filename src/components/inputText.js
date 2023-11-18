export default function InputText({name, id, width='full', height=12, isDisabled=false, defValue=null, handleChange}) {
  return (
    <input className={`border shadow-sidd rounded-lg block w-${width} h-${height} px-5 mt-2 font-medium`} type="text" name={name} id={id} disabled={isDisabled} defaultValue={defValue} onChange={handleChange}/>
  )
}