const LeftContent = ({ activeTab }) => {
  
  return (
        <div className="text-white flex justify-center items-center flex-col  space-y-4 mb-8" dir="rtl">
          <h2 className="text-2xl font-bold text-orange-900 mb-4">
            وش معنى <span className="text-white">ريب</span> ؟
          </h2>
          <div className="text-[#FFFFFF] leading-relaxed space-y-3 text-[15px] w-[239px] h-[176px]">
            <span>
              الصراحة ما يهم وش معنى ريب، لكن كل اللي يهمنا ايش ريب تسوي. حنّا
              وكالة حلول إبداعية، نشتغل على أي تحدي أياً كان نوعه، سواء كان حملة
              إعلامية، تواصل داخلي، إطلاق منتج، فعالية، محتوى تفاعلي، أو حتى
              تغيير صورة ذهنية. من أول الفكرة حتى تنفيذها. مطبخنا مو زي أي مطبخ،
              الزبدة: ريب في وسط زحمة الأفكار، تعطيك الزبدة. مو أكثر، ولا أقل.
            </span>
          </div>
        </div>
  );
};

export default LeftContent;
