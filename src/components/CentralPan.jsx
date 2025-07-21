import { motion, AnimatePresence } from "framer-motion"
import defaultContentImg from "../assets/Group 1171275311 1.png"

const CentralPan = ({ activeTab }) => {
  return (
    <div className="relative w-80 h-80">
      <AnimatePresence mode="wait">
        {activeTab === -1 ? (
          // Default main page circle
          <motion.div
            key="default"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img src={defaultContentImg} />
          </motion.div>
        ) : activeTab === 0 ? (
          // Tab 1 - زبدة أعمالنا
          <motion.div
            key="tab0"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <WorksCircle />
          </motion.div>
        ) : activeTab === 1 ? (
          // Tab 2 - زبدة عملائنا
          <motion.div
            key="tab1"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <ClientsCircle />
          </motion.div>
        ) : activeTab === 2 ? (
          // Tab 3 - زبدة فريقنا
          <motion.div
            key="tab2"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <TeamCircle />
          </motion.div>
        ) : (
          // Tab 4 - ليج الزبدة ؟ كلمنا
          <motion.div
            key="tab3"
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <ContactCircle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


// Tab 1 - Works circle
const WorksCircle = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-800 to-blue-900 border-4 border-blue-700 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center">
      <div className="text-center text-white" dir="rtl">
        <div className="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2">أعمالنا</div>
        <h3 className="text-yellow-400 font-bold text-xl mb-2">مشاريع إبداعية</h3>
        <p className="text-gray-300 text-sm">
          تصميم وتطوير
          <br />
          حلول متكاملة
        </p>
      </div>
    </div>
  </div>
)

// Tab 2 - Clients circle
const ClientsCircle = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-br from-green-800 to-green-900 border-4 border-green-700 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
      <div className="text-center text-white" dir="rtl">
        <div className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2">عملاؤنا</div>
        <h3 className="text-yellow-400 font-bold text-xl mb-2">شركاء النجاح</h3>
        <p className="text-gray-300 text-sm">
          عملاء يثقون بنا
          <br />
          في كل مشروع
        </p>
      </div>
    </div>
  </div>
)

// Tab 3 - Team circle
const TeamCircle = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-800 to-purple-900 border-4 border-purple-700 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
      <div className="text-center text-white" dir="rtl">
        <div className="bg-purple-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2">فريقنا</div>
        <h3 className="text-yellow-400 font-bold text-xl mb-2">خبراء محترفون</h3>
        <p className="text-gray-300 text-sm">
          فريق متخصص
          <br />
          في الإبداع
        </p>
      </div>
    </div>
  </div>
)

// Tab 4 - Contact circle
const ContactCircle = () => (
  <div className="w-full h-full rounded-full bg-gradient-to-br from-red-800 to-red-900 border-4 border-red-700 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
      <div className="text-center text-white" dir="rtl">
        <div className="bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-2">تواصل معنا</div>
        <h3 className="text-yellow-400 font-bold text-xl mb-2">ليج الزبدة؟</h3>
        <p className="text-gray-300 text-sm">
          كلمنا دلوقتي
          <br />
          واحصل على استشارة
        </p>
      </div>
    </div>
  </div>
)

export default CentralPan
