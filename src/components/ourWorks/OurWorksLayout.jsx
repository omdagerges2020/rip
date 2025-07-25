import { BiSkipPrevious } from "react-icons/bi";
import { MdSkipNext } from "react-icons/md";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: for navigation buttons
import "swiper/css/pagination"; // Optional: for pagination dots
import zebdaLogo from "/assets/zebdaa3malna.png";
import zebdaSherka from "/assets/zebdaelsherka.png";
import { motion } from "framer-motion";
import bgImage from "/assets/Frame 1707482067.png";
import teammember1img from "/assets/teammember1.png";
import teammember2img from "/assets/teammember2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import OurWorkersLeftContent from "./OurWorkersLeftContent";
import { useRef, useState } from "react";

const OurWorksLayout = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  return (
    <div className="w-[500px] gap-[4em] flex justify-center items-center h-full  border-1 border-gray-700 rounded-xl relative mt-3">
      {/* video */}
      <div className="flex xl:order-2 flex-shrink-0 flex-col justify-center items-center">
        {/* logo above the video */}
        <div>
          <img src={zebdaLogo} alt="zebdalogo" />
        </div>
        <div className="relative bg-gray-900 w-full h-[280px] flex items-center justify-center overflow-hidden rounded-2xl">
          {/* Video element */}
          <video
            src="/assets/awesome-video.mp4"
            controls
            poster="/assets/video-poster.jpg" // صورة الغلاف (اختياري)
            className="w-full h-full object-cover rounded-2xl border border-gray-700 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWorksLayout;
