import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logos.svg";
import heroImg from "../assets/dashboard_hero.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [caseNumber, setCaseNumber] = useState("");
  const [notification, setNotification] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const modules = [
    { title: "Case Status", icon: "⚖️", action: () => { setShowModal(true); setIsMobileMenuOpen(false); } },
    { title: "Wills and letters Testamentary", icon: "📜" },
    { title: "Hearing Dates and Times", icon: "📅" },
    { title: "Court Forms", icon: "📝" },
    { title: "Public Record Documents", icon: "📁" },
    { title: "Attorney/Case search", icon: "🔍" },
    { title: "Fees & Local Rules", icon: "💵" },
  ];

  const handleSubmitCase = (e) => {
    e.preventDefault();
    if (caseNumber.trim()) {
      setNotification(
        "Due to the discrepancies on the part of the beneficiary or the executor, the beneficiary has now been charged with a fine of $33,000 before authorisation is given for release of funds or a 1-year proof that beneficiaries in person of Tommy Hendrickson and Becky Hendrickson have been in an in-person romantic relationship."
      );
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="bg-[#014481] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-xl border-b border-white/10">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 md:h-12 brightness-0 invert" />
          <div className="hidden lg:block border-l border-white/20 pl-4">
            <h1 className="text-xl font-black tracking-tight">Administrative Portal</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Probate Division • Ohio</p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center gap-3 bg-blue-900/50 px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Admin Active</span>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-3xl"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <button 
            onClick={handleLogout}
            className="hidden md:block bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl text-sm font-black transition-all shadow-lg shadow-red-900/20 active:scale-95"
          >
            LOGOUT
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#014481] z-[60] lg:hidden flex flex-col p-8 pt-24 animate-in slide-in-from-right duration-300">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-4xl text-white"
          >
            ✕
          </button>
          <div className="flex flex-col gap-6 text-center">
            {modules.map((m, i) => (
              <button 
                key={i}
                onClick={m.action || (() => setIsMobileMenuOpen(false))}
                className="text-2xl font-bold text-white/80 hover:text-white border-b border-white/10 pb-4"
              >
                {m.title}
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="mt-8 bg-red-600 text-white py-4 rounded-2xl font-black text-xl"
            >
              LOGOUT
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
        <img 
          src={heroImg} 
          alt="Courthouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-black mb-4 drop-shadow-2xl leading-tight">
            Probate Division Portal
          </h1>
          <p className="text-blue-100 text-sm md:text-xl max-w-3xl font-medium drop-shadow-md">
            Your unified gateway for case management, public records, and legal resources.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-16 relative z-10 pb-20">
        {/* Notification Alert */}
        {notification && (
          <div className="mb-10 bg-white border-l-[12px] border-red-600 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 md:p-10 rounded-2xl animate-in slide-in-from-top duration-500">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-red-100 p-4 rounded-full">
                <span className="text-4xl">⚠️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-3xl font-black text-red-600 mb-4 uppercase tracking-tighter">Critical Case Notification</h3>
                <p className="text-gray-900 text-base md:text-xl leading-relaxed font-bold italic bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  "{notification}"
                </p>
                <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm md:text-base font-bold text-[#014481] flex items-center gap-2">
                    <span className="text-xl">ℹ️</span>
                    Note: This case is exclusive. For inquiries, please contact your appointed executor immediately.
                  </p>
                </div>
                <button 
                  onClick={() => setNotification("")}
                  className="mt-8 w-full md:w-auto px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold text-gray-700 transition-colors"
                >
                  Close Notification
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              onClick={module.action || null}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center gap-4 transition-all hover:scale-105 group cursor-pointer ${
                module.title === "Case Status" ? "ring-2 ring-[#4DCC78] shadow-[#4DCC78]/20" : ""
              }`}
            >
              <div className="text-5xl group-hover:scale-110 transition-transform">{module.icon}</div>
              <h3 className="text-xl font-bold text-[#014481] leading-tight">{module.title}</h3>
              <p className="text-sm text-gray-500">Access secure {module.title.toLowerCase()} information and services.</p>
            </div>
          ))}
        </div>
      </main>

      {/* Case Status Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-in fade-in zoom-in duration-300">
            <div className="bg-[#014481] p-6 text-white flex justify-between items-center">
              <h3 className="text-xl font-bold">Check Case Status</h3>
              <button onClick={() => setShowModal(false)} className="text-2xl hover:text-gray-300">&times;</button>
            </div>
            <form onSubmit={handleSubmitCase} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Case Number</label>
                <input 
                  type="text" 
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder="e.g. 2026-PR-12345"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4DCC78] outline-none transition-all font-mono text-lg"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#4DCC78] hover:bg-[#3dbb68] text-[#014481] font-black py-4 rounded-xl shadow-lg transform transition-all active:scale-95"
              >
                SUBMIT FOR REVIEW
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto bg-[#014481] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img src={logo} alt="Logo" className="h-12 brightness-0 invert" />
            <p className="text-blue-100 text-sm md:text-base leading-relaxed opacity-80">
              Providing secure, transparent, and efficient legal administrative services to the citizens of Franklin County.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-blue-300 text-sm">Services</h4>
            <ul className="space-y-4 text-sm md:text-base text-blue-50">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span>›</span> Case Search</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span>›</span> Public Records</li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"><span>›</span> E-Filing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-blue-300 text-sm">Urgent Inquiries</h4>
            <div className="bg-blue-900/50 p-6 rounded-xl border border-blue-800">
              <p className="text-sm text-blue-100 mb-2">Executor Hotlink:</p>
              <p className="text-xl md:text-2xl font-black text-white">1-800-FRANKLIN</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-blue-800/50 mt-16 pt-8 text-center">
          <p className="text-xs md:text-sm text-blue-400 font-medium tracking-wide">
            © 2026 Franklin County Court of Common Pleas, Probate Division, Ohio<br className="md:hidden" />
            <span className="hidden md:inline mx-2">|</span> 
            Authorized Personnel Access Only
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
