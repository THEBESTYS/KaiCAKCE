
import React from 'react';
import { User } from '../types';

interface AdminPanelProps {
  members: User[];
  onClose: () => void;
  t: any;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ members, onClose, t }) => {
  const exportToExcel = () => {
    // Generate CSV content
    const headers = [t.table_id, t.table_name, t.table_email, t.table_date, t.table_reservations, t.table_status].join(',');
    const rows = members.map(m => [m.id, m.name, m.email, m.joinDate, m.reservations, m.role].join(','));
    const csvContent = "data:text/csv;charset=utf-8,\ufeff" + headers + "\n" + rows.join("\n");
    
    // Download logic
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `kai_academy_members_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
        <div className="bg-zinc-900 text-white p-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <iconify-icon icon="mdi:shield-account" className="text-primary text-3xl"></iconify-icon>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t.title}</h2>
              <p className="text-zinc-400 text-sm font-medium">Management System v1.0</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-all text-white/50 hover:text-white">
            <iconify-icon icon="mdi:close" width="32"></iconify-icon>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-zinc-900">{t.members}</h3>
            <button 
              onClick={exportToExcel}
              className="bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <iconify-icon icon="mdi:download"></iconify-icon>
              {t.download}
            </button>
          </div>

          <div className="overflow-x-auto border border-zinc-100 rounded-3xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-100">
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">{t.table_id}</th>
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">{t.table_name}</th>
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">{t.table_email}</th>
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">{t.table_date}</th>
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">{t.table_reservations}</th>
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase text-xs tracking-widest">{t.table_status}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {members.map(m => (
                  <tr key={m.id} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="py-5 px-6 text-sm font-semibold text-zinc-400">#{m.id}</td>
                    <td className="py-5 px-6 font-bold text-zinc-900">{m.name}</td>
                    <td className="py-5 px-6 text-zinc-600">{m.email}</td>
                    <td className="py-5 px-6 text-zinc-500 font-medium">{m.joinDate}</td>
                    <td className="py-5 px-6">
                      <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-xs">
                        {m.reservations}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${m.role === 'admin' ? 'bg-primary/10 text-primary' : 'bg-green-100 text-green-700'}`}>
                        {m.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
