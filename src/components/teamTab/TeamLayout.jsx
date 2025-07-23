import TeamMemberCard from "./TeamMemberCard";
import { motion } from "framer-motion";
import bgImage from "/assets/Frame 1707482067.png"; // عدّل اسم الصورة حسب الحاجة
import teammember1img from "/assets/teammember1.png";
import teammember2img from "/assets/teammember2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import required Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import "swiper/css/pagination"; // Optional: for pagination dots
import { BiSkipPrevious } from "react-icons/bi";
import { MdSkipNext } from "react-icons/md";




const TeamLayout = () => {
  const teamMembers = [
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-1.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-2.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-3.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-4.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-5.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-6.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-7.png" },
    { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-8.png" },
  ];

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center gap-2"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Co-founders section */}
      <div
        className="w-full h-[200px] rounded-md bg-cover bg-center relative gap-5"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img
          src={teammember1img}
          alt="إسلام شاكر"
          className="w-[500px] h-[220px] top-[-70px] left-[60px] absolute"
        />
        <img
          src={teammember2img}
          alt="عبدالله عسيري"
          className="w-[500px] h-[220px] top-[-70px] left-[75px] absolute"
        />
        <div className="flex flex-col absolute bottom-[5px] left-[160px]">
          <h2 className="bg-orange-900/70 px-7 text-center w-fit text-white -rotate-3 transition-transform duration-500">
            إسلام شاكر
          </h2>
          <span className="bg-white/70 relative left-4 top-[-3px] px-3 w-fit text-center text-xs rotate-4 transition-transform duration-500 text-[7px] font-bold">
            Co-founder &CCO
          </span>
        </div>
        <div className="flex flex-col absolute bottom-[5px] right-[160px]">
          <h2 className="bg-orange-900/90 px-5 text-center w-fit rotate-1 transition-transform duration-500 text-white font-bold">
            عبد الله عسيرى
          </h2>
          <span className="bg-white/70 px-3 relative left-4 top-[-3px] py-1 -rotate-3 w-fit text-center text-[7px] font-bold">
            Co-founder &CCO
          </span>
        </div>
      </div>

      {/* Team members section */}
      <div className="w-full max-w-4xl h-[150px] rounded-xl border-[1px] border-gray-800 flex justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={6}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="flex overflow-x-auto space-x-6 pb-4 px-2 scrollbar-hide"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMemberCard
                key={index}
                name={member.name}
                title={member.title}
                imageSrc={member.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Previous Button */}
        <button className="custom-prev border-[1px] absolute left-[330px] bottom-[230px] transform -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
          <BiSkipPrevious/>
        </button>
        {/* Custom Next Button */}
        <button className="custom-next border-[1px] absolute right-[330px] bottom-[230px] transform -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
          <MdSkipNext/>
        </button>
      </div>
    </motion.div>
  );
};

export default TeamLayout;
