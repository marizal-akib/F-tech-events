

const Testimonials = () => {
    return (
        <div className="bg-blue-200 bg-opacity-30">
            <h2 className="text-3xl font-bold text-center pt-8 mb-6  text-red-900">
            Meet With Our Creative Dedicated Team
            </h2>
            <p className="text-center font-semibold text-xl w-10/12 mx-auto mb-6"> the dynamic and talented team that makes every event a success. Our experienced professionals come together from diverse backgrounds to create a synergy that's second to none.</p>
            <div className="w-11/12 mx-auto grid grid-cols-1 gap-3 md:grid-cols-3 pb-8">
                <div className="flex flex-col text-center text-red-700"><img src="https://i.ibb.co/FmXgScP/image-1.jpg" alt="" />
                <p className="mt-4 text-lg font-medium  text-red-700">Client Relations Manage</p>
                </div>
                <div className="flex flex-col text-center"><img src="https://i.ibb.co/xg14Tq5/image-2.jpg" alt="" />
                <p className="mt-4 text-lg font-medium  text-red-700">On-Site Event Staff</p>
                </div>
                <div className="flex flex-col text-center"><img src="https://i.ibb.co/ggPkx3n/image-3.jpg" alt="" />
                <p className="mt-4 text-lg font-medium  text-red-700">Marketing and Promotion Specialist</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;