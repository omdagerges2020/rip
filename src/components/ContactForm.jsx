import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useRef, useState } from "react";
import cvUploadImg from "/assets/uploadcv.png";
import { Input } from "@material-tailwind/react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import spezialization from "/assets/spezialization.png";
import phoneImg from "/assets/phone.png";
import emailImg from "/assets/email.png"
import userImg from "/assets/user.png";

const ContactForm = () => {
  const [activeFormTab, setActiveFormTab] = useState(0); // 0 = form, 1 = contact info
  console.log(activeFormTab);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

   // Animation variants for smoother and slower transitions
  const formVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 3.0, 
        ease: [0.4, 0, 0.2, 1] 
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { 
        duration: 3.0, 
        ease: [0.4, 0, 0.2, 1] 
      }
    },
  };

  // Staggered animation for form children
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Stagger child animations by 0.2s
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.5, 
        ease: [0.4, 0, 0.2, 1] 
      }
    },
  };
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <div className="w-full mx-auto">
      {/* Form Tabs */}
      <div className="flex justify-center" dir="rtl">
        <div className="flex bg-gray-900/80 rounded-t-2xl">
          <button
            onClick={() => setActiveFormTab(0)}
            className={`px-6 py-2 rounded-t-2xl text-sm font-medium transition-all duration-300 ${
              activeFormTab === 0
                ? "bg-white text-black"
                : "text-gray-300"
            }`}
          >
            دي خدماتنا
          </button>
          <button
            onClick={() => setActiveFormTab(1)}
            className={`px-6 py-2 text-sm font-medium rounded-t-2xl border-t-[1px] border-r-none border-l-[1px] border-gray-700 border-r-none transition-all duration-300 ${
              activeFormTab === 1
                ? "bg-white text-black"
                : "text-gray-300"
            }`}
          >
            تبى تشتغل معنا
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-3">
        <AnimatePresence mode="wait">
          {activeFormTab === 0 ? (
            // تبى خدماتنا
            <motion.div
              key="form"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
              dir="rtl"
            >
              <div className="mb-6 flex justify-center flex-col items-start">
                <p className="text-white text-lg mb-2">
                  عندك تحدّي؟ تبغى تسوّي ضجة؟ أو تحتاج فكرة
                </p>
                <p className="text-orange-900 text-sm">
                  املى البيانات وبنتواصل معك
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="الاسم"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-900 transition-colors"
                    required
                  />
                  <img src={userImg} alt="" className="absolute top-[40%] right-[10px]"/>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900  border border-gray-600 rounded-xl text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-900 transition-colors"
                    required
                  />
                  <img src={emailImg} alt="email" className="absolute top-[40%] right-[10px]" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    placeholder="رقم التواصل"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900  border border-gray-600 rounded-xl text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-900 transition-colors"
                    required
                  />
                  <img src={phoneImg} alt="phone" className="absolute top-[40%] right-[10px]"/>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="عندك ملاحظات؟
تبي تعلمنا منصبك أو ايش هي جهتكم؟"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900  border border-gray-600 rounded-xl text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-900 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-900 text-white py-3 px-6 rounded-full font-medium transition-colors"
                >
                  إرسال
                </button>
              </form>
            </motion.div>
          ) : (
            // تبى تشتغل معنا
            <motion.div
              key="form"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
              dir="rtl"
            >
              <div className="mb-6 flex justify-center flex-col items-start">
                <p className="text-white text-lg mb-2 max-w-[400px]">
                  تشوف نفسك مبدع؟ عندك أفكر رهيبة؟ تبي تترك أثر
                </p>
                <p className="text-orange-900 text-sm">
                  املى البيانات وبنتواصل معك
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="الاسم"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:pr-5 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900  border border-gray-600 text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                  <img src={userImg} className="absolute top-[40%] right-[10px] text-gray-500" />

                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="specilaization"
                    placeholder="التخصص"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900  placeholder:pr-5 border border-gray-600 rounded-2xl text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                  <img
                    src={spezialization}
                    alt="spezialization"
                    className="absolute top-[40%] right-[10px]"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:pr-5  bg-gradient-to-r from-gray-800 to-gray-900  border border-gray-600 rounded-2xl text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                  <img src={emailImg} alt="email" className="absolute top-[40%] right-[10px] text-gray-500"/>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    placeholder="رقم التواصل"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900  border border-gray-600 rounded-2xl text-white placeholder:text-[#707070]  focus:outline-none focus:border-orange-500 transition-colors"
                    required
                  />
                  <img
                    src={phoneImg}
                    alt="phone"
                    className="absolute top-[40%] right-[10px]"
                  />
                </div>

                {/* File Upload Buttons */}
                <div className="flex w-full justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="flex w-1/2 rounded-2xl items-center flex-col gap-2 px-3 py-2 bg-white text-white"
                  >
                    <img src={cvUploadImg} alt="upload cv" />
                    <span className="text-black font-bold">cv</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleClick}
                    className="flex items-center w-1/2 flex-col gap-2 px-3 py-2 bg-white text-white rounded-2xl"
                  >
                    <img src={cvUploadImg} alt="upload cv" />
                    <span className="text-black font-bold">ملف الاعمال</span>
                  </button>
                </div>

                <div className="text-white flex justify-center items-center w-full">
                  <span className="w-[300px] items-center">
                    لا تشيل هم.. نشوف كل الطلبات.. بس حاول تملى كل الخانات
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-900 text-white py-3 px-6 rounded-full font-medium transition-colors"
                >
                  إرسال
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;
