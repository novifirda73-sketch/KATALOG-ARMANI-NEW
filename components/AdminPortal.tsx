
import React, { useState } from 'react';
import { Catalog } from '../types';

interface AdminPortalProps {
  catalogs: Catalog[];
  setCatalogs: React.Dispatch<React.SetStateAction<Catalog[]>>;
  detailPromotion: any;
  setDetailPromotion: React.Dispatch<React.SetStateAction<any>>;
  systemDetection: any;
  setSystemDetection: React.Dispatch<React.SetStateAction<any>>;
  bankAccount: any;
  setBankAccount: React.Dispatch<React.SetStateAction<any>>;
}

const AdminPortal: React.FC<AdminPortalProps> = ({
  catalogs, setCatalogs,
  detailPromotion, setDetailPromotion,
  systemDetection, setSystemDetection,
  bankAccount, setBankAccount
}) => {
  const [activeSection, setActiveSection] = useState('catalogue');

  const handleProductChange = (catIdx: number, prodIdx: number, field: string, value: any) => {
    const newCats = [...catalogs];
    (newCats[catIdx].products[prodIdx] as any)[field] = value;
    setCatalogs(newCats);
  };

  const handleDetailChange = (field: string, value: any) => {
    setDetailPromotion({ ...detailPromotion, [field]: value });
  };

  const handleSystemChange = (field: string, value: any) => {
    setSystemDetection({ ...systemDetection, [field]: value });
  };

  const handleNestedSystemChange = (nest: string, field: string, value: any) => {
    const updated = { ...systemDetection };
    updated[nest] = { ...updated[nest], [field]: value };
    setSystemDetection(updated);
  };

  const handleBankChange = (field: string, value: any) => {
    setBankAccount({ ...bankAccount, [field]: value });
  };

  const handleWarningListChange = (value: string) => {
    const list = value.split('\n').filter(line => line.trim() !== '');
    handleNestedSystemChange('withdrawal', 'warningList', list);
  };

  const handleRincianChange = (value: string) => {
    const list = value.split('\n').filter(line => line.trim() !== '');
    handleDetailChange('rincian', list);
  };

  return (
    <div className="flex h-full overflow-hidden bg-gray-50">
      {/* Sidebar navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col p-6 space-y-4 shrink-0">
        <h2 className="text-xl font-bold font-playfair tracking-wider border-b pb-4">CMS PANEL</h2>
        {[
          { id: 'catalogue', label: 'Catalogue' },
          { id: 'promotion', label: 'Detail Promo' },
          { id: 'detection', label: 'System Detection' },
          { id: 'bank', label: 'Bank Account' }
        ].map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors ${
              activeSection === sec.id ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            {sec.label}
          </button>
        ))}
        <div className="mt-auto pt-4 border-t">
          <button 
            onClick={() => {
              if (confirm('Reset to defaults? All manual edits will be lost.')) {
                localStorage.removeItem('armani_cms_data');
                window.location.reload();
              }
            }}
            className="w-full py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded"
          >
            RESET ALL DATA
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 overflow-y-auto p-10 bg-gray-50">
        
        {/* CATALOGUE SECTION */}
        {activeSection === 'catalogue' && (
          <div className="space-y-12 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold font-playfair text-[#b30000] border-b pb-4 uppercase">Catalogue Management</h3>
            {catalogs.map((cat, cIdx) => (
              <div key={cIdx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
                <h4 className="text-xl font-bold text-gray-800 tracking-wider flex items-center gap-3">
                  <span className="w-2 h-8 bg-black"></span> {cat.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.products.map((prod, pIdx) => (
                    <div key={pIdx} className="p-6 border rounded-xl bg-gray-50 space-y-4 relative group">
                      <div className="absolute top-4 right-4 text-[10px] font-bold text-gray-400">ID: {prod.id}</div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-gray-400">Product Name</label>
                        <input 
                          value={prod.name} 
                          onChange={(e) => handleProductChange(cIdx, pIdx, 'name', e.target.value)}
                          className="w-full p-2 text-sm border rounded font-bold" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-gray-400">Image URL</label>
                        <input 
                          value={prod.image} 
                          onChange={(e) => handleProductChange(cIdx, pIdx, 'image', e.target.value)}
                          className="w-full p-2 text-sm border rounded font-mono" 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400">Price Start</label>
                          <input 
                            type="number"
                            value={prod.topPrice} 
                            onChange={(e) => handleProductChange(cIdx, pIdx, 'topPrice', Number(e.target.value))}
                            className="w-full p-2 border rounded font-bold" 
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-gray-400">Commission %</label>
                          <input 
                            type="number"
                            value={prod.percentage} 
                            onChange={(e) => handleProductChange(cIdx, pIdx, 'percentage', Number(e.target.value))}
                            className="w-full p-2 border rounded font-bold text-[#b30000]" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DETAIL PROMO SECTION */}
        {activeSection === 'promotion' && (
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-100 space-y-8">
            <h3 className="text-3xl font-bold font-playfair text-[#b30000] border-b pb-4 uppercase">Detail Promotion Editor</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">ID Akun Display</label>
                  <input value={detailPromotion.idAkun} onChange={(e) => handleDetailChange('idAkun', e.target.value)} className="w-full p-3 border rounded-lg font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Tugas Display</label>
                  <input value={detailPromotion.tugas} onChange={(e) => handleDetailChange('tugas', e.target.value)} className="w-full p-3 border rounded-lg font-bold text-[#b30000]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Komisi Display</label>
                  <input value={detailPromotion.komisi} onChange={(e) => handleDetailChange('komisi', e.target.value)} className="w-full p-3 border rounded-lg font-bold" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-gray-400">Promotion Image Preview</label>
                <div className="aspect-[3/4] border rounded-lg overflow-hidden bg-gray-50">
                  <img src={detailPromotion.leftImage} className="w-full h-full object-cover" alt="Preview" />
                </div>
                <input 
                  value={detailPromotion.leftImage} 
                  onChange={(e) => handleDetailChange('leftImage', e.target.value)} 
                  className="w-full p-2 text-xs border rounded font-mono"
                  placeholder="Paste Image URL..." 
                />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <label className="text-[10px] font-black uppercase text-gray-400">Main Warning Box Text</label>
              <textarea 
                value={detailPromotion.infoText} 
                onChange={(e) => handleDetailChange('infoText', e.target.value)} 
                className="w-full p-4 border rounded-lg h-32 text-sm leading-relaxed font-bold uppercase"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400">Rincian Pekerjaan (One per line)</label>
              <textarea 
                value={detailPromotion.rincian.join('\n')} 
                onChange={(e) => handleRincianChange(e.target.value)} 
                className="w-full p-4 border rounded-lg h-32 text-sm font-mono"
              />
            </div>
          </div>
        )}

        {/* SYSTEM DETECTION SECTION */}
        {activeSection === 'detection' && (
          <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-100 space-y-10">
            <div>
              <h3 className="text-3xl font-bold font-playfair text-[#b30000] mb-2 uppercase tracking-tight">System Detection Editor</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Select the active mode and edit its specific parameters</p>
            </div>

            {/* Feature Selector Buttons */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'withdrawal', label: 'PENARIKAN ERROR' },
                { id: 'credit', label: 'KREDIT POIN' },
                { id: 'verification', label: 'VERIFIKASI' }
              ].map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => handleSystemChange('mode', mode.id)}
                  className={`py-6 px-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 group ${
                    systemDetection.mode === mode.id 
                      ? 'border-black bg-black text-white shadow-xl scale-[1.02]' 
                      : 'border-gray-200 bg-white text-gray-400 hover:border-black hover:text-black'
                  }`}
                >
                  <span className={`text-[10px] font-black tracking-widest uppercase ${systemDetection.mode === mode.id ? 'text-white' : 'text-gray-400'}`}>Mode Active</span>
                  <span className="text-[15px] font-black tracking-tighter">{mode.label}</span>
                </button>
              ))}
            </div>

            {/* Shared Detection Data */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase text-gray-400 border-b pb-1">User Profile Info</h4>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold">Member Name</label>
                    <input value={systemDetection.memberName} onChange={(e) => handleSystemChange('memberName', e.target.value)} className="w-full p-2 border rounded text-sm uppercase font-bold" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Bank</label>
                      <input value={systemDetection.bank} onChange={(e) => handleSystemChange('bank', e.target.value)} className="w-full p-2 border rounded text-sm uppercase font-bold" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Saldo</label>
                      <input value={systemDetection.saldo} onChange={(e) => handleSystemChange('saldo', e.target.value)} className="w-full p-2 border rounded text-sm font-bold" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black uppercase text-gray-400 border-b pb-1">Restoration Stats</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold">Pembayaran</label>
                    <input value={systemDetection.pembayaran} onChange={(e) => handleSystemChange('pembayaran', e.target.value)} className="w-full p-2 border rounded text-[11px]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold">Frekuensi</label>
                    <input value={systemDetection.frekuensi} onChange={(e) => handleSystemChange('frekuensi', e.target.value)} className="w-full p-2 border rounded text-[11px]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold">Untung</label>
                    <input value={systemDetection.keuntungan} onChange={(e) => handleSystemChange('keuntungan', e.target.value)} className="w-full p-2 border rounded text-[11px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mode Specific Editors */}
            <div className="mt-6 border-t pt-10">
              {systemDetection.mode === 'withdrawal' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-[#b30000] pl-4 uppercase">Mode: Penarikan Error</h4>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Status Label</label>
                      <input value={systemDetection.withdrawal.statusAkun} onChange={(e) => handleNestedSystemChange('withdrawal', 'statusAkun', e.target.value)} className="w-full p-3 border rounded text-red-600 font-bold" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Warning Title</label>
                      <input value={systemDetection.withdrawal.warningTitle} onChange={(e) => handleNestedSystemChange('withdrawal', 'warningTitle', e.target.value)} className="w-full p-3 border rounded font-bold" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Bullet Points</label>
                      <textarea value={systemDetection.withdrawal.warningList.join('\n')} onChange={(e) => handleWarningListChange(e.target.value)} className="w-full p-3 border rounded h-24 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Action Instructions</label>
                      <textarea value={systemDetection.withdrawal.warningAction} onChange={(e) => handleNestedSystemChange('withdrawal', 'warningAction', e.target.value)} className="w-full p-3 border rounded h-32 text-sm" />
                    </div>
                  </div>
                </div>
              )}

              {systemDetection.mode === 'credit' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-black pl-4 uppercase">Mode: Kredit Poin</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold">Current Points</label>
                        <input type="number" value={systemDetection.credit.currentPoints} onChange={(e) => handleNestedSystemChange('credit', 'currentPoints', Number(e.target.value))} className="w-full p-3 border rounded text-xl font-black" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold">Point Value Description</label>
                        <input value={systemDetection.credit.pointValue} onChange={(e) => handleNestedSystemChange('credit', 'pointValue', e.target.value)} className="w-full p-3 border rounded" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold">Total Deposit Amount</label>
                        <input value={systemDetection.credit.totalSetoran} onChange={(e) => handleNestedSystemChange('credit', 'totalSetoran', e.target.value)} className="w-full p-3 border rounded text-xl font-black text-[#b30000]" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold">Footer Note</label>
                    <textarea value={systemDetection.credit.footerText} onChange={(e) => handleNestedSystemChange('credit', 'footerText', e.target.value)} className="w-full p-3 border rounded h-24 text-[#b30000] font-bold uppercase" />
                  </div>
                </div>
              )}

              {systemDetection.mode === 'verification' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold border-l-4 border-blue-600 pl-4 uppercase">Mode: Verifikasi</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Withdrawal Success Amount</label>
                      <input value={systemDetection.verification.withdrawalAmount} onChange={(e) => handleNestedSystemChange('verification', 'withdrawalAmount', e.target.value)} className="w-full p-3 border rounded font-black" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold">Required Fee</label>
                      <input value={systemDetection.verification.setoranVerifikasi} onChange={(e) => handleNestedSystemChange('verification', 'setoranVerifikasi', e.target.value)} className="w-full p-3 border rounded font-black text-[#b30000]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold">Total After Balance</label>
                    <input value={systemDetection.verification.totalAfterVerif} onChange={(e) => handleNestedSystemChange('verification', 'totalAfterVerif', e.target.value)} className="w-full p-3 border rounded font-black" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* BANK ACCOUNT SECTION */}
        {activeSection === 'bank' && (
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-gray-100 space-y-8">
            <h3 className="text-3xl font-bold font-playfair text-[#b30000] border-b pb-4 uppercase">Bank Account Editor</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Bank Name</label>
                  <input value={bankAccount.bankName} onChange={(e) => handleBankChange('bankName', e.target.value)} className="w-full p-3 border rounded-lg font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Account Number</label>
                  <input value={bankAccount.accountNumber} onChange={(e) => handleBankChange('accountNumber', e.target.value)} className="w-full p-3 border rounded-lg font-bold tracking-widest" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Account Owner Name</label>
                  <input value={bankAccount.ownerName} onChange={(e) => handleBankChange('ownerName', e.target.value)} className="w-full p-3 border rounded-lg font-bold" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400">Bank Logo URL</label>
                  <input value={bankAccount.bankLogo} onChange={(e) => handleBankChange('bankLogo', e.target.value)} className="w-full p-3 border rounded-lg font-mono text-xs" />
                </div>
                <div className="p-6 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50 h-48">
                  <img src={bankAccount.bankLogo} className="max-h-32 object-contain" alt="Logo Preview" />
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <h4 className="text-xs font-black uppercase text-gray-400">Instruction Modals</h4>
              <input value={bankAccount.instruction1} onChange={(e) => handleBankChange('instruction1', e.target.value)} className="w-full p-3 border rounded text-sm font-bold uppercase" />
              <input value={bankAccount.instruction2} onChange={(e) => handleBankChange('instruction2', e.target.value)} className="w-full p-3 border rounded text-sm font-bold uppercase" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPortal;
