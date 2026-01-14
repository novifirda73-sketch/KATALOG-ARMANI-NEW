
import React from 'react';

interface SystemDetectionProps {
  data: {
    mode: 'withdrawal' | 'credit' | 'verification';
    memberName: string;
    bank: string;
    accNumber1: string;
    accNumber2: string;
    saldo: string;
    pembayaran: string;
    frekuensi: string;
    keuntungan: string;
    
    withdrawal: {
      statusAkun: string;
      warningTitle: string;
      warningList: string[];
      warningCause: string;
      warningAction: string;
      footerText: string;
    };
    
    credit: {
      statusAkun: string;
      currentPoints: number;
      requiredPoints: number;
      pointValue: string;
      totalSetoran: string;
      footerText: string;
    };

    verification: {
      statusAkun: string;
      withdrawalAmount: string;
      setoranVerifikasi: string;
      totalAfterVerif: string;
      footerText: string;
    };
  };
}

const SystemDetection: React.FC<SystemDetectionProps> = ({ data }) => {
  const isWithdrawal = data.mode === 'withdrawal';
  const isCredit = data.mode === 'credit';
  const isVerification = data.mode === 'verification';

  const currentStatus = isWithdrawal 
    ? data.withdrawal.statusAkun 
    : isCredit 
      ? data.credit.statusAkun 
      : data.verification.statusAkun;

  const currentFooter = isWithdrawal 
    ? data.withdrawal.footerText 
    : isCredit 
      ? data.credit.footerText 
      : data.verification.footerText;

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden text-black font-sans">
      {/* Header Section */}
      <div className="py-5 border-b-[2px] border-black flex items-center justify-center gap-8 bg-white shrink-0">
        <div className="text-[#b30000]">
          <svg width="40" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <h2 className="text-4xl font-playfair font-black tracking-[0.4em] uppercase text-[#b30000]">
          SYSTEM DETECTION
        </h2>
        <div className="text-[#b30000]">
          <svg width="40" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex p-8 gap-12 overflow-y-auto">
        
        {/* Left Column: Info Cards */}
        <div className="w-[35%] space-y-5">
          <div className="bg-[#800000] text-white p-6 rounded-sm shadow-lg border border-white/10">
            <h3 className="text-2xl font-bold tracking-wider mb-2 uppercase">VIP MEMBER</h3>
            <div className="w-full h-[1px] bg-white/30 mb-5"></div>
            <div className="space-y-4">
              <p className="text-lg font-bold tracking-widest uppercase">{data.memberName}</p>
              <div className="flex justify-between items-start">
                <p className="text-lg font-bold uppercase">{data.bank}</p>
                <div className="text-right tracking-widest font-bold text-base leading-tight">
                  <p>{data.accNumber1}</p>
                  <p>{data.accNumber2}</p>
                </div>
              </div>
              <div className="w-10 h-1 bg-white mt-4"></div>
            </div>
          </div>

          <div className="bg-[#1a1c1e] text-white p-6 rounded-sm shadow-lg border border-white/5">
            <h3 className="text-2xl font-bold tracking-wider mb-2 uppercase">AKUN KERJA</h3>
            <div className="w-full h-[1px] bg-white/30 mb-4"></div>
            <div className="space-y-5">
              <p className="text-xl font-bold underline decoration-1 underline-offset-4 uppercase">Informasi</p>
              <div className="space-y-3 font-bold text-lg">
                <div className="flex justify-between items-center">
                  <span className="uppercase text-gray-300">Saldo</span>
                  <span className="tracking-tight text-white">{data.saldo}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="uppercase text-gray-300">Status Akun</span>
                  <span className="uppercase text-white tracking-wide">{currentStatus}</span>
                </div>
              </div>
              <div className="w-10 h-1 bg-white mt-4"></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* PEMULIHAN Indicators */}
          <div className="space-y-6 px-4">
            <h3 className="text-2xl font-black tracking-[0.2em] text-[#b30000] uppercase">PEMULIHAN:</h3>
            <div className="space-y-4">
              {[
                { label: 'PEMBAYARAN', val: data.pembayaran },
                { label: 'FREKUENSI', val: data.frekuensi },
                { label: 'KEUNTUNGAN', val: data.keuntungan }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-48 py-2 border-[1.5px] border-black rounded-full text-center font-black text-[12px] tracking-[0.15em] uppercase bg-white shadow-sm transition-transform group-hover:scale-[1.02]">
                    {item.label}
                  </div>
                  <div className="flex-grow flex items-center px-4">
                    <div className="flex-grow h-[1px] bg-black"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-black -ml-1"></div>
                  </div>
                  <div className="w-56 text-right font-black tracking-tight text-3xl uppercase leading-none">
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DYNAMIC CONTENT BOX */}
          <div className="flex-1 border-[2.5px] border-black rounded-[40px] p-10 bg-white relative overflow-hidden flex flex-col justify-center shadow-inner min-h-[320px]">
            
            {/* Watermarks */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              {isWithdrawal && (
                <svg width="260" height="260" viewBox="0 0 24 24" fill="none" stroke="#b30000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                  <rect x="9" y="10" width="6" height="7" rx="1" ry="1"></rect>
                  <path d="M10 10V8a2 2 0 0 1 4 0v2"></path>
                </svg>
              )}
              {isCredit && (
                 <svg width="320" height="320" viewBox="0 0 24 24" fill="none" stroke="#b30000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                 </svg>
              )}
              {isVerification && (
                <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="#b30000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              )}
            </div>

            {/* Content Logic */}
            <div className="relative z-10 text-center space-y-5">
              {isWithdrawal && (
                <>
                  <p className="text-[17px] font-black uppercase tracking-wide leading-snug max-w-2xl mx-auto">{data.withdrawal.warningTitle}</p>
                  <div className="flex flex-col items-center gap-2">
                    {data.withdrawal.warningList.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 uppercase font-black text-[16px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-[17px] font-black uppercase tracking-wide">{data.withdrawal.warningCause}</p>
                  <p className="text-[15px] font-bold leading-relaxed tracking-wide uppercase max-w-3xl mx-auto text-gray-800">
                    {data.withdrawal.warningAction}
                  </p>
                </>
              )}

              {isCredit && (
                <>
                  <p className="text-[17px] font-black uppercase tracking-wide leading-snug">
                    KREDIT POIN ANGGOTA TURUN MENJADI {data.credit.currentPoints} POIN.<br/>
                    HARAP PULIHKAN KREDIT POIN UNTUK DAPAT MENARIK KEMBALI DANA
                  </p>
                  <div className="space-y-1 inline-block text-left mx-auto">
                    <div className="flex items-center gap-3 uppercase font-black text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                      KREDIT POIN AWAL {data.credit.requiredPoints}
                    </div>
                    <div className="flex items-center gap-3 uppercase font-black text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                      KREDIT POIN SAAT INI {data.credit.currentPoints}
                    </div>
                  </div>
                  <p className="text-[15px] font-black uppercase leading-snug max-w-2xl mx-auto">
                    SESUAI KETENTUAN KREDIBILITAS AKUN HARUS MENCAPAI 100 POIN UNTUK DAPAT MELAKUKAN PENARIKAN SALDO. BERIKUT RINCIAN PENINGKATAN KREDIT POIN :
                  </p>
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 inline-block mx-auto text-left uppercase font-black text-[15px]">
                    <p>1 POIN KREDIT = {data.credit.pointValue}</p>
                    <p>KEBUTUHAN POIN : {data.credit.requiredPoints - data.credit.currentPoints} POIN</p>
                    <p className="text-[#b30000]">TOTAL SETORAN UNTUK MENAIKAN POIN : {data.credit.totalSetoran}</p>
                  </div>
                </>
              )}

              {isVerification && (
                <>
                  <p className="text-[17px] font-black uppercase tracking-wide leading-snug">
                    SELAMAT! PENGGUNA TELAH BERHASIL MELAKUKAN PENARIKAN SEBESAR<br/>
                    <span className="text-xl font-black">{data.verification.withdrawalAmount}</span>.
                  </p>
                  <p className="text-[15px] font-black uppercase leading-tight max-w-2xl mx-auto text-gray-700">
                    SAAT INI, PENGGUNA PERLU MENYELESAIKAN VERIFIKASI AKUN AGAR SALDO<br/>
                    DAPAT DIKONFIRMASI DAN DITERUSKAN KE REKENING.
                  </p>
                  <div className="py-3 px-6 border-2 border-[#b30000] rounded-full inline-block mx-auto">
                    <p className="text-[17px] font-black uppercase tracking-wide text-[#b30000]">
                      HARAP SETORAN VERIFIKASI SEBESAR {data.verification.setoranVerifikasi}
                    </p>
                  </div>
                  <p className="text-[14px] font-bold uppercase leading-relaxed max-w-3xl mx-auto text-gray-600">
                    SETELAH VERIFIKASI SELESAI, TOTAL SALDO SEBESAR <span className="font-black text-black">{data.verification.totalAfterVerif}</span> AKAN<br/>
                    LANGSUNG MASUK KE REKENING PENGGUNA TANPA PERLU MELAKUKAN<br/>
                    PENARIKAN ULANG.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text Section */}
      <div className="py-4 border-t-[2px] border-black text-center bg-white shrink-0 px-20">
        <p className="text-[#b30000] font-black text-lg tracking-tight uppercase leading-snug max-w-6xl mx-auto">
          {currentFooter}
        </p>
      </div>
    </div>
  );
};

export default SystemDetection;
