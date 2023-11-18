import { BiRefresh } from "react-icons/bi";

export default function Extras({extrasContent}) {
    return (
        <>
            <div className="rounded-lg border shadow-sidd ml-3 mr-4 h-full">
                <div className="flex justify-between border-b text-primary-color text-lg border-b-2 px-6 py-3">
                    <div className="font-medium items-center">Extras:</div>
                    <button className="regenerate-btn p-1 px-4 border border-indigo-800 rounded-lg flex items-center text-base hover:bg-gradient-linear hover:text-white"><div className='mx-2 text-2xl'><BiRefresh /> </div> Regenerate</button>
                </div>
                <div className="px-2 h-96 overflow-y-auto m-4" dangerouslySetInnerHTML={{__html: extrasContent}}>
                </div>
            </div>
        </>
    )
}