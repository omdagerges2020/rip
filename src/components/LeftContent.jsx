// import { motion } from "framer-motion";
// import zebdaelsherkaImg from "/assets/sherka.png";
// import zebdaa3malnaImg from "/assets/a3malna.png";
// import contactImg from "/assets/contact.png";

// const LeftContent = ({ activeTab }) => {
//   // Animation variants based on activeTab
//   const animationProps =
//     activeTab === 0
//       ? {
//           initial: { y: -800, opacity: 0, scale: 0.8 },
//           animate: { y: 0, opacity: 1, scale: 1 },
//           exit: { y: 100, opacity: 0, scale: 0.8 },
//           transition: { duration: 0.7, ease: "easeInOut" },
//         }
//       : {
//           initial: { opacity: 0, x: -50 }, // Default for other tabs
//           animate: { opacity: 1, x: 0 },
//           transition: { duration: 0.5, ease: "easeInOut" },
//         };

//   return (
//     <motion.div
//       className="text-white space-y-4 mb-8 w-full"
//       {...animationProps}
//       dir="rtl"
//     >
//       {activeTab === 0 ? (
//         <div className="flex xl:flex-col md:flex-row justify-center md:justify-center xl:items-start gap-3 mt-6">
//           <img
//             src={zebdaelsherkaImg}
//             alt="sherka"
//             className="w-[150px] h-[130px]"
//           />
//           <img
//             src={zebdaa3malnaImg}
//             alt="a3malna"
//             className="w-[150px] h-[130px]"
//           />
//         </div>
//       ) : activeTab === 1 ? (
//         null
//       ) : activeTab === 2 ? (
//         null
//       ) : activeTab === 3 ? (
//         <div className="flex justify-center items-center h-[600px]">
//           <img src={contactImg} alt="contact us" />
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-2xl font-bold text-orange-900 mb-4">
//             وش معنى <span className="text-white">ريب</span>؟
//           </h2>
//           <div className="text-gray-300 leading-relaxed space-y-3 text-[11px] md:text-[14px]">
//             <p>الصراحة ما يهم وش معنى ريب، لكن خل الي</p>
//             <p>يهمنا ايش ريب تسوي</p>
//             <p>حنا وكالة حلول إبداعية، نشتغل على اى تحدى ايا</p>
//             <p>كان نوعه سواء كان حملة إعلانية، تواصل داخلي،</p>
//             <p>إطلاق منتج فاعلية، محتوى تفاعلى،او حتى تغيير</p>
//             <p>صورة ذهنية، من أول الفكرة حق تنفيذها</p>
//             <p>مطلعينها مو زى اى مطبخ، الزبدة ريب في وسط</p>
//             <p>زحمة الأفكار تعطيك الزبدة مو أكثر ولا اقل</p>
//           </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default LeftContent;
import { motion } from "framer-motion";
import zebdaelsherkaImg from "/assets/sherka.png";
import zebdaa3malnaImg from "/assets/a3malna.png";
import contactImg from "/assets/contact.png";

const LeftContent = ({ activeTab }) => {
  const animationProps = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="text-white space-y-4 w-full max-w-md"
      {...animationProps}
      dir="rtl"
    >
      {activeTab === 0 ? (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <img
            src={zebdaelsherkaImg}
            alt="sherka"
            className="w-1/2 max-w-xs h-auto"
          />
          <img
            src={zebdaa3malnaImg}
            alt="a3malna"
            className="w-1/2 max-w-xs h-auto"
          />
        </div>
      ) : activeTab === 1 ? (
        null
      ) : activeTab === 2 ? (
        null
      ) : activeTab === 3 ? (
        <div className="flex justify-center items-center min-h-[20rem]">
          <img src={contactImg} alt="contact us" className="w-full max-w-md h-auto" />
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4">
            وش معنى <span className="text-white">ريب</span>؟
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-3 text-xs sm:text-sm md:text-base">
            <p>الصراحة ما يهم وش معنى ريب، لكن خل الي</p>
            <p>يهمنا ايش ريب تسوي</p>
            <p>حنا وكالة حلول إبداعية، نشتغل على اى تحدى ايا</p>
            <p>كان نوعه سواء كان حملة إعلانية، تواصل داخلي،</p>
            <p>إطلاق منتج فاعلية، محتوى تفاعلى،او حتى تغيير</p>
            <p>صورة ذهنية، من أول الفكرة حق تنفيذها</p>
            <p>مطلعينها مو زى اى مطبخ، الزبدة ريب في وسط</p>
            <p>زحمة الأفكار تعطيك الزبدة مو أكثر ولا اقل</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default LeftContent;
