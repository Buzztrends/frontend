import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
export default function Loading() {
    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="w-4/5 flex flex-col ml-auto">
                    <Header header="Create Content" />
                    <div className="p-5 mt-24 flex flex-col gap-11">

                    <div className="flex flex-col w-full gap-5 p-2 border mx-auto bg-white shadow-lg select-none sm:p-4 rounded-2xl sm:flex-row ">
                            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                                <div className="flex flex-col flex-1 gap-3">
                                    <div className="w-full bg-gray-300 animate-pulse h-8 rounded-2xl">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full gap-5 p-2 border mx-auto bg-white shadow-lg select-none sm:p-4 rounded-2xl sm:flex-row ">
                            <div className="flex flex-col flex-1 gap-5 sm:p-2">
                                <div className="flex flex-col flex-1 gap-3">
                                    <div className="w-full my-4 bg-gray-200 animate-pulse h-14 rounded-2xl">
                                    </div>
                                    <div className="w-full my-4 h-6 bg-gray-200 animate-pulse rounded-2xl">
                                    </div>
                                    <div className="w-full my-4 h-6 bg-gray-200 animate-pulse rounded-2xl">
                                    </div>
                                    <div className="w-full my-4 h-6 bg-gray-200 animate-pulse rounded-2xl">
                                    </div>
                                    <div className="w-full my-4 h-6 bg-gray-200 animate-pulse rounded-2xl">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};


const LoadingCard = () => {
    return (

        <div className="mx-auto w-[30%] bg-white rounded shadow-lg rounded-2xl">
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