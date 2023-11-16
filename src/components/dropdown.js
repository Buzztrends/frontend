export default function Dropdown({ name, id, options, selectedOption, handleSelectChange }) {
    return (
        <select name={name} id={id} value={selectedOption} onChange={handleSelectChange} className="rounded-lg block w-full h-12 px-5 mt-2 font-medium border-r-8 border-transparent outline outline-primary-color" required>
            <option value="">Select...</option>
            {options.map((option, index) => <option key={index} value={option} defaultValue={true}>{option}
            </option>)}
        </select>
    )
}