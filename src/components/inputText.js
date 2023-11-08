export default function InputText({name, id, height=12}) {
  return (
    <input className={`border border-solid border-primary-color rounded-lg shadow-primary block w-10/12 h-${height} px-5 mt-2 font-medium`} type="text" name={name} id={id} />
  )
}