import { motion } from "framer-motion"

const BottomLeftSection = () => {
  return (
    <motion.div
      className="bg-orange-500 rounded-2xl p-6 max-w-xs"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      dir="rtl"
    >
      <div className="text-white mb-4">
        <h3 className="font-bold text-lg mb-1">اكتشف</h3>
        <h2 className="font-bold text-2xl">لجوء</h2>
        <p className="text-sm mt-2">زبدة ريب في التمكين</p>
      </div>

      {/* Mascot placeholder - you can replace with actual image */}
      <div className="w-20 h-20 bg-orange-600 rounded-lg flex items-center justify-center">
        <div className="text-white text-xs text-center">
          🦊
          <br />
          Mascot
        </div>
      </div>
    </motion.div>
  )
}

export default BottomLeftSection
