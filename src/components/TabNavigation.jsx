import { motion } from "framer-motion"

const tabs = ["زبدة أعمالنا", "زبدة عملائنا", "زبدة فريقنا", "تبى الزبدة ؟ كلمنا"]

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4" dir="rtl">
      {tabs.map((tab, index) => (
        <motion.button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-6 py-4 rounded-full text-center text-black text-[16px] font-bold transition-all duration-300 w-[217px] ${
            activeTab === index ? "bg-orange-500 text-white shadow-lg hover:bg-orange-600" : "bg-white text-gray-900 shadow-md hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  )
}

export default TabNavigation
