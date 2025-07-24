import { motion } from "framer-motion"

const TeamLeftContentBottom = () => {
  return (
    <motion.div
      className="text-white space-y-2 w-full xl:w-[170px] border-r-[2px] px-3 border-orange-900"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      dir="rtl"
    >
      <h2 className="text-xl font-bold text-orange-900 mb-2">هذا فريقنا</h2>
      <div className="text-gray-300 leading-relaxed space-y-3 text-md">
        <span>كبر وهــــو يســـــــأل "ليــــش؟" و"كيف؟"، واليوم صار يجاوب… بإجابات تطلع منها الزبدة.</span>
      </div>
    </motion.div>
  )
}

export default TeamLeftContentBottom
