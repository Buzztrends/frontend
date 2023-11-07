import './style.css';

export default function TabComponent({items}) {
    return(
        <div className="max-w-md flex flex-col gap-y-2 md:w-1/2">
            <div className="bg-gray-400 rounded-lg flex justify-between items-center gap-x-2">
                {items.map((item, index) => (
                    <button key={index} className="outline-none w-full p-2 rounded-xl focus:ring-2 focus:bg-gradient-linear focus:text-white">{item.tab}</button>
                ))}
            </div>
            
        </div>
    );
};