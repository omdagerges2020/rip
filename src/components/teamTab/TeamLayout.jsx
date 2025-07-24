// import TeamMemberCard from "./TeamMemberCard";
// import { motion } from "framer-motion";
// import bgImage from "/assets/Frame 1707482067.png"; // عدّل اسم الصورة حسب الحاجة
// import teammember1img from "/assets/teammember1.png";
// import teammember2img from "/assets/teammember2.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules"; // Import required Swiper modules
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/navigation"; // Optional: for navigation buttons
// import "swiper/css/pagination"; // Optional: for pagination dots
// import { BiSkipPrevious } from "react-icons/bi";
// import { MdSkipNext } from "react-icons/md";
// import TeamLeftContentBottom from "./TeamLeftContentBottom";
// import TeamLeftContentTop from "./TeamLeftContentTop";

// const TeamLayout = () => {
//   const teamMembers = [
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-1.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-2.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-3.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-4.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-5.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-6.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-7.png" },
//     { name: "الاسم", title: "مصمم جرافيك", image: "/images/team-member-8.png" },
//   ];

//   return (
//     <motion.div
//       className="w-full flex flex-col items-center justify-center gap-2"
//       initial={{ opacity: 0, y: -100 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 100 }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//     >
//       {/* Co-founders section */}
//       <div
//         className="w-full max-w-2xl h-[200px] rounded-md bg-cover  relative gap-5"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <img
//           src={teammember1img}
//           alt="إسلام شاكر"
//           className="w-[500px] h-[220px] top-[-70px] left-[30px] absolute"
//         />
//         <img
//           src={teammember2img}
//           alt="عبدالله عسيري"
//           className="w-[500px] h-[220px] top-[-70px] left-[50px] absolute"
//         />
//         <div className="flex flex-col absolute bottom-[5px] left-[160px]">
//           <h2 className="bg-orange-900/70 px-7 text-center w-fit text-white -rotate-3 transition-transform duration-500">
//             إسلام شاكر
//           </h2>
//           <span className="bg-white/70 relative left-4 top-[-3px] px-3 w-fit text-center text-xs rotate-4 transition-transform duration-500 text-[6px] font-bold">
//             Co-founder &CCO
//           </span>
//         </div>
//         <div className="flex flex-col absolute bottom-[10px] right-[130px]">
//           <h2 className="bg-orange-900/90 px-5 text-center w-fit rotate-1 transition-transform duration-500 text-white font-bold">
//             عبد الله عسيرى
//           </h2>
//           <span className="bg-white/70 px-3 relative left-4 top-[-3px] py-1 -rotate-3 w-fit text-center text-[7px] font-bold">
//             Co-founder &CCO
//           </span>
//         </div>
//       </div>

//       <div className="w-full max-w-2xl h-[150px] rounded-xl border-[1px] border-gray-800 flex justify-center items-center">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={20}
//           slidesPerView={6}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           className="flex overflow-x-auto space-x-6 pb-4 px-2 scrollbar-hide"
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <TeamMemberCard
//                 key={index}
//                 name={member.name}
//                 title={member.title}
//                 imageSrc={member.image}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button className="custom-prev border-[1px] absolute left-[360px] bottom-[230px] transform -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
//           <BiSkipPrevious />
//         </button>
//         <button className="custom-next border-[1px] absolute right-[360px] bottom-[230px] transform -translate-y-1/2 bg-gray-700/80 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 transition-colors z-10">
//           <MdSkipNext />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default TeamLayout;
import TeamMemberCard from "./TeamMemberCard";
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
import TeamLeftContentBottom from "./TeamLeftContentBottom";
import TeamLeftContentTop from "./TeamLeftContentTop";

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
      className="w-full flex flex-col gap-6"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* الصف الأول: Co-founders section + TeamLeftContentTop */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full">
        {/* Co-founders section */}
        <div className="flex-1 order-1 xl:order-2 w-full flex justify-center items-center">
          <div
            className="   w-full
            max-w-md
    xl:max-w-2xl
    lg:max-w-2xl
    md:max-w-2xl
    min-h-[120px] 
    h-[120px] 
    md:h-[150px] 
    rounded-md 
    bg-cover 
    bg-center 
    relative 
    gap-5
    mx-auto"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <img
              src={teammember1img}
              alt="إسلام شاكر"
              className="w-[800px] scale-125 xl:w-[400px] h-[130px] xl:h-[150px] xl:top-[-30px] top-[-30px] xl:left-[100px] left-[-80px] absolute"
            />
            <img
              src={teammember2img}
              alt="عبدالله عسيري"
              className="w-[800px] scale-125 xl:w-[400px] h-[130px] xl:h-[150px] top-[-30px]  xl:top-[-70px] left-[80px] xl:left-[160px] absolute"
            />
            <div className="flex flex-col absolute bottom-[10px] left-[10px] lg:left-[70px] xl:bottom-[5px] xl:left-[160px]">
              <h2 className="xl:bg-orange-900/70 bg-orange-900 px-4 xl:px-7 text-center w-fit text-white -rotate-3 transition-transform duration-500">
                إسلام شاكر
              </h2>
              <span className="xl:bg-white/70 bg-white relative left-[2px] xl:left-4 top-[-3px] px-3 w-fit text-center py-[.5em] rotate-6 xl:rotate-4 transition-transform duration-500 text-[5px] xl:text-[6px] font-bold">
                Co-founder &CCO
              </span>
            </div>
            <div className="flex flex-col absolute bottom-[5px] xl:bottom-[5px] right-[5px] lg:right-[30px] xl:right-[180px]">
              <h2 className="xl:bg-orange-900/90  bg-orange-900 px-5 text-center w-fit rotate-1 transition-transform duration-500 text-white font-bold">
                عبد الله عسيرى
              </h2>
              <span className="xl:bg-white/70 bg-white px-3 relative left-4 top-[-3px] py-1 -rotate-3 w-fit text-center text-[7px] font-bold">
                Co-founder &CCO
              </span>
            </div>
          </div>
        </div>
        {/* TeamLeftContentTop */}
        <div className="w-full xl:w-[220px] flex-shrink-0 flex flex-col justify-start order-2 xl:order-1 items-start">
          <TeamLeftContentTop />
        </div>
      </div>

      {/* الصف الثاني: السلايدر + TeamLeftContentBottom */}
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="flex-1 order-1 xl:order-2 w-full flex justify-center items-center">
          <div className="w-full max-w-md xl:max-w-2xl h-[150px] rounded-xl border-none xl:border-[1px] border-gray-800 flex justify-center items-center relative">
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
              className="w-full"
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
        <div className="w-full xl:w-[220px] flex-shrink-0 flex flex-col justify-start items-start order-2 xl:order-1">
          <TeamLeftContentBottom />
        </div>
      </div>
    </motion.div>
  );
};

export default TeamLayout;
