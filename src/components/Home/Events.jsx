import { TbPackageExport } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { SiCkeditor4 } from "react-icons/si";


const Events = () => {
    return (
        <div className="px-5 md:px-20 my-10">
            <h2 className="text-2xl border-b-2 my-10 w-60 p-3 text-center font-semibold mx-auto">Upcomming Events</h2>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow ">
                    <TbPackageExport className="text-3xl text-gray-500 mb-3" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">AutoTech Expo 2023</h5>

                    <p className="mb-3 font-normal text-gray-500  ">Immerse yourself in the latest automotive technologies at AutoTech Expo 2023. Discover cutting-edge innovations, attend tech talks, and experience hands-on demonstrations. Don't miss the future of automotive tech!</p>
                    <div className="flex justify-between ">
                        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                            See What's New
                        </a>
                        <p className="text-gray-600">Date: May 20, 2023</p>
                    </div>
                </div>
                <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow ">
                    <IoCarSportOutline className="text-3xl text-gray-500 mb-3" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Electric Vehicle Showcase</h5>

                    <p className="mb-3 font-normal text-gray-500  ">Explore the electric future of mobility at the Electric Vehicle Showcase. Test drive the latest electric models, attend expert panels on sustainable transportation, and learn about advancements in battery technology.</p>
                    <div className="flex justify-between ">
                        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                            See What's New
                        </a>
                        <p className="text-gray-600">Date: June 10-12, 2023</p>
                    </div>
                </div>
                <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow ">
                    <SiCkeditor4 className="text-3xl text-gray-500 mb-3" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Future Mobility Symposium</h5>

                    <p className="mb-3 font-normal text-gray-500  ">Dive into the future of mobility at the Future Mobility Symposium. Renowned speakers, industry experts, and innovators will discuss trends, challenges, and breakthroughs shaping the next generation of transportation.</p>
                    <div className="flex justify-between ">
                        <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                            See What's New
                        </a>
                        <p className="text-gray-600">Date: August 15-17, 2023</p>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Events;