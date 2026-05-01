import { Search, Bell, Plus, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

export default function TopBar() {
  const today = new Date();

  return (
    <header className="fixed top-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-40 flex items-center justify-between px-8 left-60">
      <div className="flex items-center bg-slate-100/50 rounded-full px-4 py-1.5 w-96 border border-slate-200/50 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
        <Search size={16} className="text-slate-400" />
        <input 
          className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 ml-2" 
          placeholder="Tìm kiếm báo cáo, dữ liệu..." 
          type="text"
        />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <CalendarIcon size={14} className="text-slate-400" />
          <span>{format(today, 'MMM dd, yyyy', { locale: vi })}</span>
        </div>
        
        <button className="relative text-slate-500 hover:text-primary transition-colors p-1 rounded-full hover:bg-slate-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-4 pl-4 border-l border-slate-100">
          <button className="bg-primary text-white h-9 px-4 rounded-xl text-sm font-semibold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/20">
            <Plus size={16} />
            <span>Thêm mới</span>
          </button>
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-primary-container leading-none">Minh Anh</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">HR Director</p>
            </div>
            <img 
              alt="Avatar" 
              className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-primary/20 transition-all" 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
