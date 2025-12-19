export default function Footer() {
  return (
    <div className="w-[1280px] h-28 px-20 pt-px left-0 top-[1530px] absolute bg-cyan-900 border-t border-gray-300 inline-flex justify-between items-center">
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-[5px]">
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-white text-xl font-bold font-['Montserrat']">ESPRITFIT</div>
        </div>
        <div className="self-stretch opacity-90 flex flex-col justify-start items-start">
          <div className="self-stretch justify-center text-white text-sm font-normal font-['Montserrat']">Plateforme universitaire pour découvrir, planifier et réserver des activités sportives.</div>
        </div>
      </div>
      <div className="inline-flex flex-col justify-start items-end gap-[5px]">
        <div className="text-right justify-center text-white text-base font-normal font-['Montserrat']">Campus Esprit, Tunis</div>
        <div className="text-right justify-center text-orange-500 text-base font-semibold font-['Montserrat']">sport@esprit.tn</div>
        <div className="text-right justify-center text-white text-base font-semibold font-['Montserrat']">71 000 000</div>
      </div>
    </div>
  );
}