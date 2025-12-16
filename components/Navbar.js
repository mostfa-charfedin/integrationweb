export default function Navbar({ currentPage = '' }) {
  return (
    <div className="w-[1280px] h-28 pl-11 pr-32 pb-0.5 left-0 top-0 absolute bg-gradient-to-r from-cyan-900 to-slate-900 shadow-[0px_6px_30px_0px_rgba(10,31,47,0.40)] border-b-2 border-gray-300 inline-flex justify-start items-center">
      <div className="w-32 inline-flex flex-col justify-start items-start">
        <img className="w-24 h-24" src="https://placehold.co/104x104" />
      </div>
      <div className="w-[1053px] flex justify-start items-center gap-12">
        <a href="profil.html" className="pl-6 pr-7 py-3.5 bg-white/10 rounded-lg inline-flex flex-col justify-start items-start hover:bg-white/20 transition-colors">
          <div className="justify-center text-gray-300 text-xl font-medium font-['Montserrat']">Accueil</div>
        </a>
        <a href="calendrier.html" className="pl-6 pr-7 py-3.5 bg-white/10 rounded-lg inline-flex flex-col justify-start items-start hover:bg-white/20 transition-colors">
          <div className="justify-center text-neutral-200 text-xl font-medium font-['Montserrat']">Calendrier</div>
        </a>
        <div className="relative group">
          <div className="px-6 py-3.5 bg-gradient-to-b from-orange-500 to-red-500 rounded-lg shadow-[0px_6px_20px_0px_rgba(255,107,53,0.40)] inline-flex flex-col justify-start items-start cursor-pointer">
            <div className="justify-center text-gray-300 text-xl font-medium font-['Montserrat']">Suivi Progression</div>
          </div>
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <a href="profil.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                <div className="font-medium">Profil Sportif</div>
              </a>
              <a href="objectifs.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                <div className="font-medium">Objectifs</div>
              </a>
              <a href="programme.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                <div className="font-medium">Programme Sportif</div>
              </a>
              <a href="workspace.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                <div className="font-medium">Espace de Travail</div>
              </a>
            </div>
          </div>
        </div>
        <a href="activites.html" className="pl-6 pr-7 py-3.5 bg-white/10 rounded-lg inline-flex flex-col justify-start items-start hover:bg-white/20 transition-colors">
          <div className="justify-center text-gray-300 text-xl font-medium font-['Montserrat']">Activité Sportive</div>
        </a>
      </div>
    </div>
  );
}