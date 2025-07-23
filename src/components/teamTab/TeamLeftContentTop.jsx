import { motion } from "framer-motion"

const TeamLeftContentTop = () => {
  return (
    <motion.div
      className="text-white w-[170px] space-y-2 mb-8 border-r-[2px] px-3 border-orange-900"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      dir="rtl"
    >
      <h2 className="text-xl font-bold text-orange-900 mb-2">مسؤولين ضبط الكوليسترول</h2>
      <div className="text-gray-300 leading-relaxed space-y-3 text-md">
        <span>لأن كل عمل إبداعي يتم تحت إشرافهم يسعون إن كل تفصيلة تكون مظبوطة زي ماقال الكتاب. </span>
      </div>
    </motion.div>
  )
}

export default TeamLeftContentTop
