
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Sidebar from './components/Sidebar';
import DetailPromotion from './components/DetailPromotion';
import SystemDetection from './components/SystemDetection';
import BankAccount from './components/BankAccount';
import AdminPortal from './components/AdminPortal';
import GeminiAssistant from './components/GeminiAssistant';
import { CATALOGS as INITIAL_CATALOGS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Promotional Catalogue');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScreenshotMode, setIsScreenshotMode] = useState(false);
  const [scale, setScale] = useState(1);

  // --- GLOBAL APP STATE ---
  const [catalogs, setCatalogs] = useState(INITIAL_CATALOGS);
  
  const [detailPromotionData, setDetailPromotionData] = useState({
    idAkun: '628212282131',
    tugas: 'Rp. 100.000',
    komisi: '20%',
    leftImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
    infoText: 'ANGGOTA HANYA PERLU MENUNGGU HINGGA KOMISI BERTAMBAH DI DALAM AKUN KERJA KARENA TUGAS AKAN DI KERJAKAN SECARA OTOMATIS OLEH SISTEM. DAN JIKA PEKERJAAN BELUM SELESAI PENARIKAN BELUM DAPAT DILAKUKAN !!!',
    rincian: [
      '[SATU TUGAS - SATU PENARIKAN]',
      'SISTEM MEMPROMOSIKAN PRODUK SECARA OTOMATIS',
      '-----IKUTI PETUNJUK LAYANAN HINGGA SELESAI-----',
      'PESANAN TUNGGAL SATU PESANAN SATU PRODUK TOTAL SATU PESANAN',
      'SELESAIKAN PEKERJAAN DALAM WAKTU 60 MENIT'
    ],
    footerWarning: 'SETIAP MISI PEKERJAAN DISELESAIKAN, PENARIKAN DAPAT LANGSUNG DI LAKUKAN \nHARAP SELESAIKAN PEKERJAAN INI DALAM WAKTU YANG DI TENTUKAN'
  });

  const [systemDetectionData, setSystemDetectionData] = useState({
    mode: 'withdrawal', 
    memberName: 'SUKMA NINGSIH',
    bank: 'BRI',
    accNumber1: '015282821745153',
    accNumber2: '085240188282',
    saldo: 'Rp. 68.250.000',
    pembayaran: 'Rp. 13.500.000',
    frekuensi: '3',
    keuntungan: 'Rp. 15.300.000',
    
    withdrawal: {
      statusAkun: 'PENARIKAN ERROR',
      warningTitle: 'ANGGOTA MELAKUKAN PENARIKAN TIDAK SESUAI ARAHAN DALAM SISTEM.',
      warningList: [
        'JUMLAH YANG DITARIK ADALAH Rp. 50.000.000',
        'JUMLAH YANG DITENTUKAN SISTEM ADALAH Rp. 52.000.000'
      ],
      warningCause: 'YANG MENYEBABKAN SISTEM CRASH AND SALURAN PENARIKAN ERROR',
      warningAction: 'HARAP SETORKAN Rp. 48.000.000 KE AKUN UNTUK MEMULIHKAN SALURAN PENARIKAN SETELAH SALURAN PENARIKAN DIPULIHKAN SEPENUHNYA MAKA ANGGOTA DAPAT LANGSUNG MELAKUKAN PENARIKAN KEMBALI SECARA NORMAL.',
      footerText: 'PEMULIHAN WAJIB DISELESAIKAN SESUAI DENGAN KETENTUAN YANG DI TETAPKAN UNTUK DAPAT MELAKUKAN PENARIKAN KEMBALI'
    },
    
    credit: {
      statusAkun: 'KREDIT POIN',
      currentPoints: 56,
      requiredPoints: 100,
      pointValue: 'Rp. 1.393.200 (1%)',
      totalSetoran: 'Rp. 61.300.800',
      footerText: 'KREDIBILITAS AKUN HARUS MENCUKUPI UNTUK DAPAT MELAKUKAN PENARIKAN. SILAKAN TINGKATKAN POIN KREDIT HINGGA MENCAPAI 100 AGAR KREDIBILITAS AKUN TERPENUHI AND PENARIKAN DAPAT DILAKUKAN'
    },

    verification: {
      statusAkun: 'VERIFIKASI AKUN',
      withdrawalAmount: 'Rp. 121.014.000',
      setoranVerifikasi: 'Rp. 60.527.000',
      totalAfterVerif: 'Rp. 181.521.000',
      footerText: 'VERIFIKASI HARUS DISELESAIKAN AGAR PENARIKAN DAPAT DIPROSES SECARA OTOMATIS KE REKENING ANGGOTA'
    }
  });

  const [bankAccountData, setBankAccountData] = useState({
    bankName: 'BANK NEGARA INDONESIA',
    accountNumber: '1986969259',
    ownerName: 'NAS',
    bankLogo: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png',
    instruction1: 'SAAT REKENING INI DIBERIKAN, HARAP SEGERA MELAKUKAN PENGISIAN SALDO DALAM WAKTU 10 MENIT.',
    instruction2: 'APABILA MELEBIHI BATAS WAKTU TERSEBUT, MOHON UNTUK MENGAJUKAN PERMINTAAN NOMOR REKENING KEMBALI.'
  });

  // Calculate scale to fit 1700x1000 in browser window
  useEffect(() => {
    const handleResize = () => {
      if (isScreenshotMode) {
        const padding = 60; // Slightly more padding for the wider frame
        const availableW = window.innerWidth - padding;
        const availableH = window.innerHeight - padding;
        // Dimension updated to 1700 x 1000
        const scaleW = availableW / 1700;
        const scaleH = availableH / 1000;
        setScale(Math.min(scaleW, scaleH, 1)); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isScreenshotMode]);

  useEffect(() => {
    const saved = localStorage.getItem('armani_cms_data');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.catalogs) setCatalogs(data.catalogs);
        if (data.detailPromotion) setDetailPromotionData(data.detailPromotion);
        if (data.systemDetection) setSystemDetectionData(data.systemDetection);
        if (data.bankAccount) setBankAccountData(data.bankAccount);
      } catch (e) { console.error("Load failed", e); }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('armani_cms_data', JSON.stringify({
      catalogs,
      detailPromotion: detailPromotionData,
      systemDetection: systemDetectionData,
      bankAccount: bankAccountData
    }));
  }, [catalogs, detailPromotionData, systemDetectionData, bankAccountData]);

  const nextCatalog = () => setCurrentIndex((prev) => (prev + 1) % catalogs.length);
  const prevCatalog = () => setCurrentIndex((prev) => (prev - 1 + catalogs.length) % catalogs.length);

  const handleProductSelect = (product: Product) => {
    if (isScreenshotMode) return;
    setDetailPromotionData(prev => ({
      ...prev,
      leftImage: product.image,
    }));
    setActiveTab('Detail Promotion');
  };

  const currentCatalog = catalogs[currentIndex];

  const renderContent = () => {
    switch (activeTab) {
      case 'Detail Promotion':
        return <DetailPromotion data={detailPromotionData} />;
      case 'System Detection':
        return <SystemDetection data={systemDetectionData} />;
      case 'Bank Account':
        return <BankAccount data={bankAccountData} />;
      case 'About':
        return (
          <AdminPortal 
            catalogs={catalogs} setCatalogs={setCatalogs}
            detailPromotion={detailPromotionData} setDetailPromotion={setDetailPromotionData}
            systemDetection={systemDetectionData} setSystemDetection={setSystemDetectionData}
            bankAccount={bankAccountData} setBankAccount={setBankAccountData}
          />
        );
      default:
        return (
          <>
            <header className="border-b border-gray-300 bg-white py-2 px-8 relative flex items-center justify-between h-14 shrink-0">
              {!isScreenshotMode && (
                <button 
                  onClick={prevCatalog} 
                  className="text-gray-800 hover:opacity-60 transition-opacity p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                </button>
              )}
              <div className={`text-center flex flex-col items-center relative -bottom-1 flex-1`}>
                <h2 className="text-3xl font-playfair tracking-[0.3em] uppercase text-[#b30000] font-bold">
                  {currentCatalog.title}
                </h2>
                {!isScreenshotMode && (
                  <div className="flex gap-1.5 mt-1 pb-1">
                    {catalogs.map((_, i) => (
                      <div key={i} className={`w-[5px] h-[5px] rounded-full transition-colors ${i === currentIndex ? 'bg-black' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                )}
              </div>
              {!isScreenshotMode && (
                <button 
                  onClick={nextCatalog} 
                  className="text-gray-800 hover:opacity-60 transition-opacity p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              )}
            </header>
            <div className={`flex-1 grid grid-cols-4 bg-white ${isScreenshotMode ? 'overflow-hidden' : 'overflow-y-auto'}`}>
              {currentCatalog.products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => handleProductSelect(product)} 
                />
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div className={`flex flex-col min-h-screen bg-white transition-all duration-700 ${isScreenshotMode ? 'is-ss-active bg-[#0a0a0a]' : ''}`}>
      <style>{`
        /* Global Reset for SS Mode */
        .is-ss-active {
          overflow: hidden !important;
          height: 100vh !important;
          width: 100vw !important;
        }

        /* Screenshot Frame 1700x1000 Precision Container */
        #ss-frame-wrapper {
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .is-ss-active #ss-frame-wrapper {
          width: 1700px !important;
          height: 1000px !important;
          min-width: 1700px !important;
          min-height: 1000px !important;
          margin: 0 !important;
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          /* Dynamic responsive scaling */
          transform: translate(-50%, -50%) scale(${scale}) !important;
          box-shadow: 0 60px 120px rgba(0,0,0,0.9), 0 0 0 4000px rgba(0,0,0,0.8);
          background: white;
          z-index: 50;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Fixed components inside 1700x1000 frame */
        .is-ss-active main {
          height: 100% !important;
          overflow: hidden !important;
        }

        .is-ss-active .group:hover img { transform: none !important; }
        .is-ss-active .group:hover span, .is-ss-active .group:hover div[class*="bg-black/"] { display: none !important; }
        
        #ss-mode-btn {
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .is-ss-active #ss-mode-btn {
          opacity: 0.2;
          filter: grayscale(1);
        }
        .is-ss-active #ss-mode-btn:hover {
          opacity: 1;
          filter: none;
        }

        .is-ss-active *::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>

      {/* Backdrop for SS Mode focus */}
      {isScreenshotMode && (
        <div 
          className="fixed inset-0 z-[45] bg-transparent cursor-pointer" 
          onClick={() => setIsScreenshotMode(false)}
        ></div>
      )}

      <div id="ss-frame-wrapper" className="flex flex-col h-full w-full">
        {/* Navbar - Intact */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex flex-1 overflow-hidden relative">
          <main className="flex-1 flex flex-col overflow-hidden bg-white">
            {renderContent()}
            {/* Footer - Upgraded for more "thickness" and visual weight */}
            <footer className="bg-[#8a1515] text-white text-center py-4 text-[14px] tracking-[0.7em] uppercase font-black shrink-0 border-b-[6px] border-[#1a1a1a]">
              GIORGIO ARMANI SYSTEM 2026
            </footer>
          </main>
          
          {/* Sidebar - Intact */}
          <Sidebar />
        </div>
      </div>

      {/* Control Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <button
          id="ss-mode-btn"
          onClick={() => {
            // Force focus on Catalogue for the 1700x1000 screenshot
            if (!isScreenshotMode) setActiveTab('Promotional Catalogue');
            setIsScreenshotMode(!isScreenshotMode);
          }}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all border-2 border-white ${
            isScreenshotMode 
              ? 'bg-[#b30000] text-white' 
              : 'bg-black text-white hover:bg-[#8a1515]'
          }`}
          title={isScreenshotMode ? "Exit Screenshot Mode" : "Enter Screenshot Mode (1700x1000)"}
        >
          {isScreenshotMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </button>
      </div>

      <div id="gemini-chat-anchor" style={{ display: isScreenshotMode ? 'none' : 'block' }}>
        <GeminiAssistant />
      </div>
    </div>
  );
};

export default App;
