
import React from 'react';

interface DetailPromotionProps {
  data: {
    idAkun: string;
    tugas: string;
    komisi: string;
    leftImage: string;
    infoText: string;
    rincian: string[];
    footerWarning: string;
  };
}

const DetailPromotion: React.FC<DetailPromotionProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">
      {/* Top Section: Split into Image (Left) and Details (Right) */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {/* Left Column: Focused on the Enlarged Product Image */}
        <div className="w-[40%] h-full border-r border-gray-300 flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-8">
          <div className="w-full h-full flex items-center justify-center p-4">
             <img
              src={data.leftImage}
              alt="Product Promotion"
              className="w-full h-auto max-h-[85%] object-contain shadow-[0_30px_70px_rgba(0,0,0,0.2)] rounded-sm border border-gray-200 bg-white"
            />
          </div>
        </div>

        {/* Right Column: Key Account and Job Information */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header Title - Increased pt-24 to push the title further down as requested */}
          <div className="pt-24 pb-8 flex items-center justify-center shrink-0">
            <div className="flex-1 h-[2px] bg-gray-100 ml-12"></div>
            <h2 className="text-[44px] font-playfair font-black tracking-[0.45em] uppercase text-[#b30000] px-10 leading-none">
              DETAIL PROMOTION
            </h2>
            <div className="flex-1 h-[2px] bg-gray-100 mr-12"></div>
          </div>

          {/* Details Content - Reduced pt-4 since header padding already pushes content down */}
          <div className="px-12 pb-0 pt-4 flex-grow flex flex-col overflow-hidden">
            {/* Top Fields - Values pushed inward using pr-16 */}
            <div className="space-y-3 max-w-5xl mx-auto w-full mb-6 shrink-0">
              <div className="flex items-center gap-8">
                <div className="w-48 py-2 px-6 border-[2px] border-gray-900 rounded-full text-center font-black text-[12px] tracking-[0.25em] uppercase bg-white shadow-sm">
                  ID AKUN
                </div>
                <div className="flex-grow flex items-center h-0 mt-1">
                  <div className="flex-grow border-b-[3px] border-dotted border-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full -ml-1.5 shadow-sm"></div>
                </div>
                <div className="w-[360px] text-right text-[30px] font-bold tracking-tighter text-black shrink-0 font-mono leading-none pr-16">
                  {data.idAkun}
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-48 py-2 px-6 border-[2px] border-gray-900 rounded-full text-center font-black text-[12px] tracking-[0.25em] uppercase bg-white shadow-sm">
                  TUGAS
                </div>
                <div className="flex-grow flex items-center h-0 mt-1">
                  <div className="flex-grow border-b-[3px] border-dotted border-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full -ml-1.5 shadow-sm"></div>
                </div>
                <div className="w-[360px] text-right text-[30px] font-bold tracking-tighter text-black shrink-0 leading-none pr-16">
                  {data.tugas}
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-48 py-2 px-6 border-[2px] border-gray-900 rounded-full text-center font-black text-[12px] tracking-[0.25em] uppercase bg-white shadow-sm">
                  KOMISI
                </div>
                <div className="flex-grow flex items-center h-0 mt-1">
                  <div className="flex-grow border-b-[3px] border-dotted border-black"></div>
                  <div className="w-3 h-3 bg-black rounded-full -ml-1.5 shadow-sm"></div>
                </div>
                <div className="w-[360px] text-right text-[30px] font-bold tracking-tighter text-black shrink-0 leading-none pr-16">
                  {data.komisi}
                </div>
              </div>
            </div>

            {/* Main Informational Text Box */}
            <div className="max-w-7xl mx-auto w-full border-[2.5px] border-[#b30000] rounded-[35px] py-8 px-20 text-center bg-white shadow-md mb-6 shrink-0">
              <p className="text-[15px] font-black leading-snug tracking-wide uppercase whitespace-pre-wrap text-black italic">
                {data.infoText}
              </p>
            </div>

            {/* Rincian Pekerjaan Section */}
            <div className="max-w-5xl mx-auto w-full flex flex-col min-h-0 mt-6 mb-0 items-start overflow-hidden">
              <div className="w-48 py-2 px-6 border-[2.5px] border-gray-900 rounded-full text-center font-black text-[10px] tracking-[0.3em] uppercase mb-4 bg-white shadow-sm shrink-0">
                RINCIAN PEKERJAAN
              </div>
              
              <div className="w-full border-[2.5px] border-gray-900 rounded-[35px] px-10 py-4 text-center bg-white shadow-lg overflow-hidden flex flex-col justify-center min-h-[160px]">
                <div className="text-[17px] font-black space-y-0 tracking-[0.1em] uppercase text-black leading-tight">
                  {data.rincian.map((line, idx) => (
                    <p key={idx} className="border-b border-gray-100 py-1.5 last:border-0 last:pb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Footer warning */}
      <div className="w-full bg-white pt-2 pb-4 px-16 shrink-0 flex flex-col items-center border-t border-gray-100">
        <div className="mb-2 w-24 h-[1.5px] bg-[#b30000] opacity-20"></div>
        <div className="text-center w-full max-w-7xl">
          <p className="text-[#b30000] font-black text-[19px] leading-[1.3] tracking-[0.18em] uppercase whitespace-pre-wrap italic">
            {data.footerWarning}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPromotion;
