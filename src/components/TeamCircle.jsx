import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import TeamLeftContentTop from "./teamTab/TeamLeftContentTop";
import TeamMemberCard from "./teamTab/TeamMemberCard";
import TeamLeftContentBottom from "./teamTab/TeamLeftContentBottom";

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

  // State to track which profile is hovered (null, "islam", or "abdullah")
  const [hoveredProfile, setHoveredProfile] = useState(null);

  // Framer Motion variants for the info panel
  const infoVariants = {
    initial: {
      opacity: 0,
      x: -200, // Slide in from top-left
      y: -400,
    },
    animate: {
      opacity: 1,
      x: 100,
      y: -50,
      transition: {
        duration: 0.7, // Smooth and elegant
        ease: [0.8, 0, 0.2, 1], // Soft easing
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      y: -50,
      transition: {
        duration: 0.5,
        ease: [0.8, 0, 0.2, 1],
      },
    },
  };

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
        <div className="flex-1 order-2 xl:order-1 w-full flex justify-center items-center">
          <div
            className="w-full min-h-[120px] h-[120px] md:h-[150px] xl:h-[215px] rounded-md bg-cover bg-center relative mx-auto"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            {/* Profile 1: إسلام شاكر */}
            <div
              className="group absolute top-[-30px] left-[10%] md:left-[15%] xl:left-[38%] flex flex-col items-center"
              onMouseEnter={() => setHoveredProfile("islam")}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <img
                src={teammember1img}
                alt="إسلام شاكر، المؤسس المشارك"
                className="w-24 h-24 md:w-32 md:h-32 scale-[150%] xl:w-40 xl:h-40 object-cover transition-transform duration-500 group-hover:scale-[170%]"
              />
              <div className="flex flex-col mt-7 ml-[-12em] transition-transform duration-500 group-hover:-translate-y-[7em]">
                <h2 className="bg-orange-900 xl:px-5 text-center w-fit text-white -rotate-3 text-sm xl:text-base font-bold">
                  إسلام شاكر
                </h2>
                <span className="bg-white px-3 py-[.3em] w-fit text-center text-[8px] xl:text-[8px] rotate-4 font-bold">
                  Co-founder & CCO
                </span>
              </div>
              <AnimatePresence>
                {hoveredProfile === "islam" && (
                  <motion.div
                    className="absolute z-10 flex flex-col gap-2 top-[120px] md:top-[150px] w-[250px] border-[1px] border-gray-500 xl:top-[180px] right-[220px] bg-gray-900/80 text-white p-4 rounded-lg max-w-xs text-sm"
                    variants={infoVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <span>يقود العمليات ويشرف على تنفيذ المشاريع من الفكرة حتى التسليم زبخبرة تجمع بين الاخراج والابداع والادارة</span>
                    <span>يحرص ان كل شىء يطلع من ريب يحمل الزبدة بوضوح وباعلى جودة</span>
                    <span>e.shaker@reprofilm.com</span>
                    <span>+966 532 6423 75</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile 2: عبدالله عسيري */}
            <div
              className="group absolute top-[-30px] right-[10%] md:right-[15%] xl:right-[36%] flex flex-col items-center"
              onMouseEnter={() => setHoveredProfile("abdullah")}
              onMouseLeave={() => setHoveredProfile(null)}
            >
              <img
                src={teammember2img}
                alt="عبدالله عسيري، المؤسس المشارك"
                className="w-24 h-24 md:w-32 md:h-32 scale-[150%]  xl:w-40 xl:h-40 object-cover transition-transform duration-500 group-hover:scale-[200%]"
              />
              <div className="flex flex-col mt-7  transition-transform mr-[-11em] duration-500 group-hover:-translate-y-[7em]">
                <h2 className="bg-orange-900/90 px-5 text-center w-fit text-white rotate-1 text-sm xl:text-base font-bold">
                  عبدالله عسيري
                </h2>
                <span className="bg-white px-3  py-[.3em] w-fit text-center text-[8px] mr-3  xl:text-[8px]  -rotate-3 font-bold">
                  Co-founder & CCO
                </span>
              </div>
              <AnimatePresence>
                {hoveredProfile === "abdullah" && (
                  <motion.div
                    className="absolute border-[1px] border-gray-500 flex flex-col gap-2 top-[120px] md:top-[150px] xl:top-[180px] right-0 bg-gray-900/90 text-white p-4 rounded-lg w-[250px] text-[10px]"
                    variants={infoVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <span>يركّز على تطوير العلاقات الاستراتيجية، واستكشاف الفرص، ومتابعة رضا العملاء.</span>
                    <span>يفهم السوق، ويقود نمو ريب بثقة، يحرص إن الشراكة ما تنتهي عند التسليم، بل تبدأ من عنده.</span>
                    <span>a.assiri@reprofilm.com</span>
                    <span>+966 501 8024 94</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* TeamLeftContentTop */}
        <div className="w-full xl:basis-[20%] flex flex-col justify-start order-1 xl:order-2 items-start">
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
              breakpoints={{
                0: { slidesPerView: 3 },
                480: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
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
  )
};

export default TeamCircle;
