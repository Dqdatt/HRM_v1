import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  Plus,
  Search,
  Check,
  Calendar as CalendarIcon,
  Clock,
  MapPin
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Calendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
      <div className="lg:col-span-9 glass-card rounded-[2rem] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-black text-primary tracking-tight">Tháng 10, 2023</h2>
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button className="p-2 hover:bg-slate-50 border-r border-slate-100 transition-colors"><ChevronLeft size={18} /></button>
              <button className="p-2 hover:bg-slate-50 transition-colors"><ChevronRight size={18} /></button>
            </div>
            <button className="text-xs font-black uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">Hôm nay</button>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-white shadow-sm text-primary">Tháng</button>
            <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-slate-400 hover:text-slate-600 transition-colors">Tuần</button>
            <button className="px-4 py-1.5 text-xs font-bold rounded-lg text-slate-400 hover:text-slate-600 transition-colors">Ngày</button>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/50">
          {weekDays.map(day => (
            <div key={day} className={cn(
              "py-4 text-center text-[10px] font-black uppercase tracking-[0.2em]",
              day === 'Chủ Nhật' ? "text-error" : "text-slate-400"
            )}>
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 bg-slate-100/50">
          {/* Calendar Grid Simulation */}
          {Array.from({ length: 35 }).map((_, i) => {
            const dayNum = i - 5; // offset for start of month
            const isToday = dayNum === 12;
            const isCurrentMonth = dayNum > 0 && dayNum <= 30;

            return (
              <div key={i} className={cn(
                "min-h-[120px] bg-white group p-3 transition-colors border-r border-b border-slate-100",
                !isCurrentMonth && "bg-slate-50/50"
              )}>
                <span className={cn(
                  "text-xs font-bold block w-6 h-6 flex items-center justify-center rounded-lg mb-2",
                  isToday ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-slate-500",
                  !isCurrentMonth && "text-slate-200"
                )}>
                  {isCurrentMonth ? dayNum : ''}
                </span>
                
                {isCurrentMonth && dayNum === 2 && (
                  <div className="bg-blue-50 text-[#1A237E] text-[9px] px-1.5 py-1 rounded-lg border-l-2 border-[#1A237E] font-bold truncate">Phỏng vấn: Minh Tú</div>
                )}
                {isCurrentMonth && dayNum === 4 && (
                  <div className="bg-slate-100 text-slate-500 text-[9px] px-1.5 py-1 rounded-lg border-l-2 border-slate-300 font-bold truncate">Họp bộ phận HR</div>
                )}
                {isToday && (
                  <div className="space-y-1">
                    <div className="bg-blue-50 text-[#1A237E] text-[9px] px-1.5 py-1 rounded-lg border-l-2 border-[#1A237E] font-bold truncate">Sàng lọc CV đợt 2</div>
                    <div className="bg-emerald-50 text-emerald-700 text-[9px] px-1.5 py-1 rounded-lg border-l-2 border-emerald-500 font-bold truncate">Lunch with CEO</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-3 space-y-6">
        <div className="glass-card p-6 rounded-[2rem] shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-primary">Tiêu điểm hôm nay</h3>
            <MoreHorizontal size={18} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {[
              { time: '09:30', period: 'SÁNG', title: 'Phỏng vấn: Lead Designer', desc: 'Phòng họp 02 • Trực tuyến', accent: 'blue' },
              { time: '14:00', period: 'CHIỀU', title: 'Check-in OKRs Q4', desc: 'Toàn thể bộ phận HR', accent: 'slate' },
              { time: '17:00', period: 'CHIỀU', title: 'Deadline: Báo cáo thuế', desc: 'Phải hoàn thành trong ngày', accent: 'red' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-all">
                <div className="flex-shrink-0 text-center w-10">
                  <div className="text-xs font-black text-primary">{item.time}</div>
                  <div className="text-[8px] font-black text-slate-300 tracking-widest">{item.period}</div>
                </div>
                <div className={cn(
                  "flex-1 pl-4 border-l-4",
                  item.accent === 'blue' ? "border-blue-500" : item.accent === 'red' ? "border-error" : "border-slate-300"
                )}>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2.5 text-xs font-black uppercase tracking-widest text-primary bg-[#E3F2FD] rounded-xl hover:bg-blue-100 transition-colors">
            Xem lịch trình chi tiết
          </button>
        </div>

        <div className="glass-card p-6 rounded-[2rem] shadow-sm">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Các loại lịch</h3>
          <div className="space-y-4">
            {[
              { label: 'Phỏng vấn', color: 'bg-blue-500' },
              { label: 'Hội họp', color: 'bg-slate-300' },
              { label: 'Thời hạn (Deadline)', color: 'bg-error' },
            ].map(type => (
              <label key={type.label} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-200 text-primary transition-all" />
                <span className="text-xs font-bold text-slate-600 group-hover:text-primary transition-all">{type.label}</span>
                <span className={cn("ml-auto w-2 h-2 rounded-full", type.color)}></span>
              </label>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden aspect-square group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <p className="text-[9px] text-white/60 font-black uppercase tracking-widest mb-1">Gợi ý địa điểm</p>
            <h4 className="text-sm font-black text-white leading-tight">Sử dụng Phòng Họp Ảo</h4>
            <p className="text-[10px] text-white/70 font-medium mt-1">Nâng cao hiệu suất với AI Notes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
