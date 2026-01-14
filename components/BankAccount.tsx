
import React from 'react';

interface BankAccountProps {
  data: {
    bankName: string;
    accountNumber: string;
    ownerName: string;
    bankLogo: string;
    instruction1: string;
    instruction2: string;
  };
}

const BankAccount: React.FC<BankAccountProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <div className="py-4 border-b-4 border-gray-800 flex items-center justify-center bg-white shrink-0">
        <h2 className="text-5xl font-playfair font-black tracking-[0.4em] uppercase text-[#b30000]">
          BANK ACCOUNT CARD
        </h2>
      </div>

      <div className="flex-1 flex flex-col p-12 overflow-y-auto">
        <div className="flex items-center justify-between gap-16 mb-16 px-10">
          <div className="flex-1 flex justify-center">
            <img src={data.bankLogo} alt="Bank Logo" className="max-h-32 object-contain" />
          </div>

          <div className="w-[55%] bg-[#660000] text-white p-10 rounded-sm shadow-xl relative">
            <h3 className="text-3xl font-bold tracking-widest mb-6 uppercase border-b border-white/30 pb-4 font-playfair">
              DETAILS
            </h3>
            <div className="space-y-6 text-xl font-bold tracking-wider">
              <div className="flex items-start">
                <span className="w-28 uppercase">Bank</span>
                <span className="mr-4">:</span>
                <span className="flex-1 uppercase">{data.bankName}</span>
              </div>
              <div className="flex items-start">
                <span className="w-28 uppercase">Number</span>
                <span className="mr-4">:</span>
                <span className="flex-1 tracking-[0.2em]">{data.accountNumber}</span>
              </div>
              <div className="flex items-start">
                <span className="w-28 uppercase">Name</span>
                <span className="mr-4">:</span>
                <span className="flex-1 uppercase">{data.ownerName}</span>
              </div>
            </div>
            <div className="w-12 h-1 bg-white mt-8"></div>
          </div>
        </div>

        <div className="border-4 border-black rounded-[40px] p-10 bg-white shadow-sm max-w-6xl mx-auto w-full mb-12 text-center space-y-4">
          <p className="text-lg font-black uppercase tracking-wide">{data.instruction1}</p>
          <p className="text-lg font-black uppercase tracking-wide">{data.instruction2}</p>
        </div>
      </div>

      <div className="py-4 border-t-4 border-gray-800 flex items-center justify-start gap-12 px-16 bg-white shrink-0">
        <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/54/Bank_Indonesia_logo.svg/1200px-Bank_Indonesia_logo.svg.png" alt="BI" className="h-10 object-contain grayscale opacity-80" />
        <img src="https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/LPS_Logo.svg/1024px-LPS_Logo.svg.png" alt="LPS" className="h-10 object-contain" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Otoritas_Jasa_Keuangan_Logo.svg/1200px-Otoritas_Jasa_Keuangan_Logo.svg.png" alt="OJK" className="h-10 object-contain" />
      </div>
    </div>
  );
};

export default BankAccount;
