import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import cvUploadImg from "/assets/uploadcv.png";
import spezialization from "/assets/spezialization.png";
import phoneImg from "/assets/phone.png";
import emailImg from "/assets/email.png";
import userImg from "/assets/user.png";

const ContactForm = () => {
  const [activeFormTab, setActiveFormTab] = useState(0); // 0 = services, 1 = join us
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    specialization: "",
  });

  // Animation variants for tab content (fade-in/fade-out only)
  const formVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.8, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: [0.8, 0, 0.2, 1],
      },
    },
  };

  // Staggered animation for form children
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.8, 0, 0.2, 1],
      },
    },
  };

  // Tab animation with slower, smoother background transition
  const tabVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#1F2937",
      transition: {
        duration: 0.9, 
        ease: [0.8, 0, 0.2, 1], 
      },
    },
    active: {
      scale: 1.03,
      backgroundColor: "#FFFFFF", 
      transition: {
        duration: 0.9,
        ease: [0.8, 0, 0.2, 1],
      },
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
  };

  return (
    <div className="w-full mx-auto">
      {/* Form Tabs */}
      <div className="flex justify-center" dir="rtl">
        <div className="flex bg-gray-900/80 rounded-t-2xl relative">
          <motion.button
            onClick={() => setActiveFormTab(0)}
            className={`px-6 py-2 rounded-t-2xl text-sm font-medium transition-colors duration-600 ${
              activeFormTab === 0 ? "text-black" : "text-gray-300"
            }`}
            variants={tabVariants}
            initial="inactive"
            animate={activeFormTab === 0 ? "active" : "inactive"}
            role="tab"
            aria-selected={activeFormTab === 0}
          >
            دي خدماتنا
          </motion.button>
          <motion.button
            onClick={() => setActiveFormTab(1)}
            className={`px-6 py-2 text-sm font-medium rounded-t-2xl border-t-[1px] border-r-none border-l-[1px] border-gray-700 transition-colors duration-600 ${
              activeFormTab === 1 ? "text-black" : "text-gray-300"
            }`}
            variants={tabVariants}
            initial="inactive"
            animate={activeFormTab === 1 ? "active" : "inactive"}
            role="tab"
            aria-selected={activeFormTab === 1}
          >
            تبى تشتغل معنا
          </motion.button>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-3">
        <AnimatePresence mode="wait">
          {activeFormTab === 0 ? (
            <motion.div
              key="services"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              dir="rtl"
            >
              <motion.div variants={containerVariants} initial="initial" animate="animate">
                <motion.p variants={childVariants} className="text-white text-lg mb-2">
                  عندك تحدّي؟ تبغى تسوّي ضجة؟ أو تحتاج فكرة
                </motion.p>
                <motion.p variants={childVariants} className="text-orange-900 text-sm">
                  املى البيانات وبنتواصل معك
                </motion.p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="الاسم"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-900 transition-colors"
                      required
                    />
                    <img src={userImg} alt="" className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-900 transition-colors"
                      required
                    />
                    <img src={emailImg} alt="email" className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="text"
                      name="phone"
                      placeholder="رقم التواصل"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-900 transition-colors"
                      required
                    />
                    <img src={phoneImg} alt="phone" className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <textarea
                      name="message"
                      placeholder="عندك ملاحظات؟ تبي تعلمنا منصبك أو ايش هي جهتكم؟"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-900 transition-colors resize-none"
                    />
                  </motion.div>
                  <motion.button
                    variants={childVariants}
                    type="submit"
                    className="w-full bg-orange-900 text-white py-3 px-6 rounded-full font-medium transition-colors"
                  >
                    إرسال
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="join-us"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              dir="rtl"
            >
              <motion.div variants={containerVariants} initial="initial" animate="animate">
                <motion.p
                  variants={childVariants}
                  className="text-white text-md mb-2 max-w-[400px]"
                >
                  تشوف نفسك مبدع؟ عندك أفكر رهيبة؟ تبي تترك أثر
                </motion.p>
                <motion.p variants={childVariants} className="text-orange-900 text-sm">
                  املى البيانات وبنتواصل معك
                </motion.p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="الاسم"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder:pr-5 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <img src={userImg} className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="text"
                      name="specialization"
                      placeholder="التخصص"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 placeholder:pr-5 border border-gray-600 rounded-2xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <img src={spezialization} alt="specialization" className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-2xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <img src={emailImg} alt="email" className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants} className="relative">
                    <input
                      type="text"
                      name="phone"
                      placeholder="رقم التواصل"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 placeholder:pr-5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-600 rounded-2xl text-white placeholder:text-[#707070] focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <img src={phoneImg} alt="phone" className="absolute top-[40%] right-[10px]" />
                  </motion.div>
                  <motion.div variants={childVariants} className="flex w-full justify-center gap-4">
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
                  </motion.div>
                  <motion.div
                    variants={childVariants}
                    className="text-white flex justify-center items-center w-full"
                  >
                    <span className="w-[300px] items-center">
                      لا تشيل هم.. نشوف كل الطلبات.. بس حاول تملى كل الخانات
                    </span>
                  </motion.div>
                  <motion.button
                    variants={childVariants}
                    type="submit"
                    className="w-full bg-orange-900 text-white py-3 px-6 rounded-full font-medium transition-colors"
                  >
                    إرسال
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;
