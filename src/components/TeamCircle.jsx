import { motion } from "framer-motion";
import bgImage from "/assets/Frame 1707482067.png";
import teammember1img from "/assets/teammember1.png";
import teammember2img from "/assets/teammember2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiSkipPrevious } from "react-icons/bi";
import { MdSkipNext } from "react-icons/md";
import TeamLeftContentBottom from "./teamTab/TeamLeftContentBottom";
import TeamMemberCard from "./teamTab/TeamMemberCard";
import TeamLeftContentTop from "./teamTab/TeamLeftContentTop";

const TeamCircle = () => {
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
    // <div className="w-full rounded-md  relative overflow-hidden shadow-2xl border-[1px]">

    // </div>
    <motion.div
      className="w-full flex flex-col gap-6"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* الصف الأول: Co-founders section + TeamLeftContentTop */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
        {/* Co-founders section */}
        <div className="flex-1 order-2 xl:order-1 w-full flex justify-center items-center">
          <div
            className="w-full
            min-h-[120px] h-[120px] md:h-[150px] xl:h-[215px] rounded-md bg-cover bg-center relative gap-5 mx-auto"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <img
              src={teammember1img}
              alt="إسلام شاكر"
              className="w-[800px] scale-[150%] xl:w-[400px] h-[130px] xl:h-[180px] xl:top-[-40px] top-[-30px] xl:left-[130px] left-[-80px] absolute"
            />
            <img
              src={teammember2img}
              alt="عبدالله عسيري"
              className="w-[800px] scale-[150%] xl:w-[400px] h-[130px] xl:h-[180px] top-[-30px]  xl:top-[-50px] left-[80px] xl:left-[130px] absolute"
            />
            <div className="flex flex-col absolute bottom-[10px] left-[10px] lg:left-[70px] xl:bottom-[5px] xl:left-[160px]">
              <h2 className="xl:bg-orange-900/70 bg-orange-900 px-4 xl:px-7 text-center w-fit text-white -rotate-3 transition-transform duration-500">
                إسلام شاكر
              </h2>
              <span className="xl:bg-white/70 bg-white relative left-[2px] xl:left-[-40px] top-[-3px] xl:top-[1px] px-3 w-fit text-center py-[.5em] rotate-5 xl:rotate-4 transition-transform duration-500 text-[5px] xl:text-[6px] font-bold">
                Co-founder &CCO
              </span>
            </div>
            <div className="flex flex-col absolute bottom-[5px] xl:bottom-[5px] right-[5px] lg:right-[30px] xl:right-[160px]">
              <h2 className="xl:bg-orange-900/90  bg-orange-900 px-5 text-center w-fit rotate-1 transition-transform duration-500 text-white font-bold">
                عبد الله عسيرى
              </h2>
              <span className="xl:bg-white/70 bg-white px-3 relative left-[-20px] top-[-3px] py-1 -rotate-3 w-fit text-center text-[7px] font-bold">
                Co-founder &CCO
              </span>
            </div>
          </div>
        </div>
        {/* TeamLeftContentTop */}
        <div className="w-full xl:basis-[20%]  flex flex-col justify-start order-1 xl:order-2 items-start">
          <TeamLeftContentTop />
        </div>
      </div>

      {/* الصف الثاني: السلايدر + TeamLeftContentBottom */}
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="flex-1 order-2 xl:order-1 w-full flex justify-center items-center">
          <div className="w-full max-w-md xl:max-w-2xl h-[150px] rounded-xl flex justify-center items-center relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              // slidesPerView={6}
              breakpoints={{
                0: { slidesPerView: 3 }, // mobile (optional, or set to 2)
                480: { slidesPerView: 3 }, // small screens
                768: { slidesPerView: 3 }, // md screens
                1024: { slidesPerView: 6 }, // lg and up
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              className="w-full rounded-xl xl:border-[1px] xl:border-gray-800 bg-gradient-to-r from-gray-900 to-transparent"
            >
              {teamMembers.map((member, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <TeamMemberCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    imageSrc={member.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="hidden custom-prev border-[1px] absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-7 h-7 lg:flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
              <BiSkipPrevious />
            </button>
            <button className="hidden custom-next border-[1px] absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-7 h-7 lg:flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
              <MdSkipNext />
            </button>
          </div>
        </div>
        <div className="w-full xl:basis-[20%] flex flex-col justify-start items-start order-1 xl:order-2">
          <TeamLeftContentBottom />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCircle;

