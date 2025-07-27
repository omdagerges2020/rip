import { motion, AnimatePresence } from "framer-motion"

const tabContents = [
  {
    title: "زبدة أعمالنا",
    content: "هنا نعرض أفضل أعمالنا وإنجازاتنا في مختلف المجالات الإبداعية والتسويقية",
  },
  {
    title: "زبدة عملائنا",
    content: "عملاؤنا هم شركاؤنا في النجاح، نفخر بالثقة التي يضعونها فينا",
  },
  {
    title: "زبدة فريقنا",
    content: "فريق متخصص من المبدعين والمفكرين الذين يحولون الأفكار إلى واقع",
  },
  {
    title: "ليج الزبدة ؟ كلمنا",
    content: "تواصل معنا الآن واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك",
  },
]

const TabContent = ({ activeTab }) => {
  return (
    <div className="mt-8 h-40 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {activeTab >= 0 && (
          <motion.div
            key={activeTab}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-center text-white max-w-md"
            dir="rtl"
          >
            <h3 className="text-xl font-bold text-orange-500 mb-4">{tabContents[activeTab]?.title}</h3>
            <p className="text-gray-300 leading-relaxed">{tabContents[activeTab]?.content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TabContent
