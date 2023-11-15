export default function Loading({text}) {
  return (
    <div className="generate-loader">
                        <div className="flex">
                            <div className="loader-message m-8 align-middle">{text}</div><span className="loading align-middle loading-bars loading-lg"></span>
                        </div>
                        <div className="flex">
                            <LoadingCard />
                            <LoadingCard />
                        </div>
                    </div>
  )
}

const LoadingCard = () => {
    return (

        <div className="mx-auto w-[45%] bg-white rounded shadow-lg rounded-2xl">
            <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse">
            </div>
            <div className="p-3 h-">
                <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                    </div>
                    <div className="h-8 bg-gray-200 rounded  animate-pulse">
                    </div>
                    <div className="...">
                    </div>
                    <div className="col-span-2 ...">
                    </div>
                </div>
            </div>
        </div>
    );
};