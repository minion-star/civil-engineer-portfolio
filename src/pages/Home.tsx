import { useNavigate } from "react-router-dom";

const services = [
    {img:"/assets/service-1.png", title: "Professional Team", content:"It is a long established fact that reader by the readable content of a page when looking at its layout." },
    {img:"/assets/service-2.png", title: "24/7 support", content:"It is a long established fact that reader distracted by the readable content of a page when looking at its layout."},
    {img:"/assets/service-3.png", title: "Affordable Price", content:"It is a long established fact that reader by the readable content of a page when looking at its layout."},
    {img:"/assets/service-4.png", title: "Construction", content:"It is a long established fact that reader distracted by the readable content of a page when looking at its layout."},
    {img:"/assets/service-5.png", title: "Building", content:"It is a long established fact that reader distracted by the readable content of a page when looking at its layout."},
    {img:"/assets/service-6.png", title: "Engineering", content:"It is a long established fact that reader distracted by the readable content of a page when looking at its layout."},
]


const Home = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <div
                id="hero"
                className="bg-[url('/assets/hero1.jpg')] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center min-h-screen px-4 md:px-0 py-10 md:py-64"
            >
                {/* content */}
                <p className="text-3xl md:text-[64px] font-bold font-serif text-black">
                    WAY IN BUILDING
                </p>
                <p className="text-lg md:text-2xl font-bold text-black">
                    Contractors & Construction Managers Since 1989
                </p>
                <button className="py-2 px-6 md:py-4 md:px-8 mt-6 rounded-full text-white border-2 border-white hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer" onClick={()=>Navigate("/projects")}>
                    See Our Recent Projects
                </button>
            </div>
            <div id="new-idea" className="bg-amber-500 bg-cover flex flex-col md:flex-row px-12 py-12">
                <div className="flex-auto">
                    <p className="text-[48px] text-white font-serif">Already have an excellent idea!</p>
                    <p className="text-[20px] text-white">And want to know whether it is possible to implement it?</p>
                </div>
                <div className="flex-auto text-center py-8">
                    <button className="px-6 py-2 md:py-4 md:px-8 rounded-full text-center text-white border-2 border-white hover:bg-white hover:text-black transition duration-700 cursor-pointer">See New Projects</button>
                </div>
            </div>
            <div id="introduce-feature" className="bg-white bg-cover flex flex-col px-6 py-12">
                {/* title */}
                <div className="flex-auto text-center">
                    <p className="text-[48px] text-black font-serif">Introducing Our Features</p>
                    <p className=" text-gray-500 mb-4">We understand the importance of innovation and professionalism and work with the best people to achieve this..</p>
                </div>
                {/* services */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {services.map((service, index)=>(
                        <div key={index} className="flex flex-col px-16 py-8 mx-6 my-4 items-center shadow-lg rounded-lg">
                            <img src={service.img} alt={service.content} className="w-16 h-16 object-cover mt-4"/>
                            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                            <p className="mt-2 text-gray-500 text-md text-center">{service.content}</p>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default Home;
