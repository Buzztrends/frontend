import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
export default function Loading() {
    return (
        <>
            <div className="flex">
                <Sidebar />

                <div className="w-4/5 flex flex-col ml-auto">
                    <Header header="Research" />
                    <div className="p-5 mt-24 flex flex-col gap-11">
                    <div className="flex flex-wrap gap-x-12 gap-y-5">
                    <LoadingCard/>
                    <LoadingCard/>
                    <LoadingCard/>
                    <LoadingCard/>
                    <LoadingCard/>
                    <LoadingCard/>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
};


const LoadingCard = () => {
    return(

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