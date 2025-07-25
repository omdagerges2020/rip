import clientsImage from "/assets/clients.png";
import { BiSkipPrevious } from "react-icons/bi";
import { MdSkipNext } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import required Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import "swiper/css/pagination"; // Optional: for pagination dots
import clientstopLogo from "/assets/clientstoplogo.png";


const ClientLayout = () => {
  return (
    // Tab 2 - Clients circle
    <div className="w-[500px] flex justify-center items-center h-full  border-1 border-gray-700 rounded-xl relative mt-3">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="flex overflow-x-auto space-x-6 pb-4 px-2 scrollbar-hide"
        >
          <SwiperSlide>
            <img src={clientsImage} alt="image 1" className="h-full w-full " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientsImage} alt="image 1" className="h-full w-full " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={clientsImage} alt="image 1" className="h-full w-full " />
          </SwiperSlide>
        </Swiper>
        {/* Custom Previous Button */}
        <button className="custom-prev border-[1px] absolute left-[200px] bottom-[-5px] transform -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
          <BiSkipPrevious />
        </button>
        {/* Custom Next Button */}
        <button className="custom-next border-[1px] absolute right-[200px] bottom-[-5px] transform -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
          <MdSkipNext />
        </button>
    </div>
  );
};

export default ClientLayout;
