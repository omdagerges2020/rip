import { motion } from "framer-motion";
import { ImGift } from "react-icons/im";

const CoFounderCard = ({ name, title, imageSrc }) => {
  return (
    // <motion.div
    //   className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col items-center p-4"
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    //   {/* Background image/pattern for the card */}
    //   <div className="absolute inset-0 bg-[url('/images/industrial-bg.png')] bg-cover bg-center opacity-20"></div>

    //   {/* Image of the co-founder */}
    //   <div className="relative w-full h-48 flex justify-center items-end z-10">
    //     <ImGift
    //       src={imageSrc || "/placeholder.svg"}
    //       alt={name}
    //       width={200}
    //       height={200}
    //       className="object-cover object-top w-full h-full"
    //     />
    //   </div>

    //   {/* Orange name tag */}
    //   <div className="relative z-20 bg-orange-500 text-white px-6 py-2 rounded-full -mt-6 mb-2 text-lg font-bold whitespace-nowrap">
    //     {name}
    //   </div>
    //   <p className="relative z-20 text-gray-300 text-sm">{title}</p>
    // </motion.div>
    <motion.div
      className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background image/pattern for the card */}
      <div className="absolute inset-0 bg-[url('/images/industrial-bg.png')] bg-cover bg-center opacity-20"></div>

      {/* Image of the co-founder */}
      <div className="relative w-full h-48 flex justify-center items-end z-10">
        <ImGift
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={200}
          height={200}
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* Orange name tag */}
      <div className="relative z-20 bg-orange-500 text-white px-6 py-2 rounded-full -mt-6 mb-2 text-lg font-bold whitespace-nowrap">
        {name}
      </div>
      <p className="relative z-20 text-gray-300 text-sm">{title}</p>
    </motion.div>
  );
};

export default CoFounderCard;
