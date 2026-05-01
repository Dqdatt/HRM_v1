import { motion } from 'motion/react';
import { 
  Plus, 
  Search, 
  Calendar, 
  Clock, 
  AlertCircle, 
  UserPlus, 
  ChevronRight, 
  CheckCircle2, 
  Edit3, 
  Zap,
  Bot
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Overview() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Welcome Row */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-primary tracking-tight">Chào buổi sáng, Minh Anh</h2>
          <p className="text-slate-500 font-medium mt-1">Chúc bạn một ngày làm việc đầy năng lượng và hiệu quả.</p>
        </div>
      </div>

      {/* Top 4 Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Việc hôm nay', value: '12', sub: '+2 so với hôm qua', icon: <Calendar className="text-primary" />, color: 'bg-blue-50 text-primary' },
          { label: 'Phỏng vấn', value: '04', sub: 'Bắt đầu lúc 09:30', icon: <UserPlus className="text-primary" />, color: 'bg-blue-50 text-primary' },
          { label: 'Deadline', value: '02', sub: 'Yêu cầu phản hồi gấp', icon: <AlertCircle className="text-error" />, color: 'bg-red-50 text-error' },
          { label: 'Ứng viên', value: '45', sub: '+8 hồ sơ mới', icon: <UserPlus className="text-primary" />, color: 'bg-blue-50 text-primary' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 rounded-3xl"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">{stat.label}</span>
              <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center", stat.color)}>
                {stat.icon}
              </div>
            </div>
            <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
            <div className={cn("text-[10px] font-bold uppercase tracking-tight", stat.label === 'Deadline' ? 'text-error' : 'text-emerald-600')}>
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Priority Column */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <section className="glass-card p-8 rounded-[2.5rem] bg-white shadow-xl shadow-slate-100/50 border-primary/5">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-primary-container italic">Việc ưu tiên hôm nay</h3>
                <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline underline-offset-8">Xem tất cả</button>
             </div>
             <div className="space-y-4">
                {[
                  { title: 'Duyệt hồ sơ cho vị trí Senior Designer', meta: 'Ưu tiên cao • 10:00 AM' },
                  { title: 'Gửi offer letter cho ứng viên Nguyễn Văn A', meta: 'Tuyển dụng • 02:30 PM' },
                  { title: 'Họp định kỳ phòng Nhân sự', meta: 'Nội bộ • 04:00 PM' },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-1 p-1 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer group">
                    <div className="p-3">
                      <div className="w-6 h-6 rounded-lg border-2 border-slate-100 flex items-center justify-center group-hover:border-primary transition-all bg-white">
                        {i === 2 && <span className="w-2 h-2 rounded-sm bg-primary opacity-20 group-hover:opacity-100"></span>}
                      </div>
                    </div>
                    <div className="flex-1 pr-4">
                      <p className="font-bold text-slate-800 text-sm group-hover:text-primary transition-colors underline decoration-transparent group-hover:decoration-primary/20 underline-offset-4">{task.title}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mt-1 italic">{task.meta}</p>
                    </div>
                    <ChevronRight size={16} className="text-slate-100 group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                ))}
             </div>
          </section>

          <section className="glass-card p-8 rounded-[2.5rem] bg-white shadow-xl shadow-slate-100/50 border-primary/5">
             <h3 className="text-xl font-black text-primary-container mb-10 italic">Pipeline tuyển dụng</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { label: 'Applied', val: '124', p: 85 },
                  { label: 'Interview', val: '18', p: 40 },
                  { label: 'Offer', val: '05', p: 15 },
                ].map((pipe, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest italic">
                      <span className="text-slate-400">{pipe.label}</span>
                      <span className="text-primary">{pipe.val}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${pipe.p}%` }} className="h-full bg-primary"></motion.div>
                    </div>
                  </div>
                ))}
             </div>
             <div className="mt-10 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-slate-100 px-5 py-3 rounded-2xl shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Zap size={16} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 italic">Mới: 12 ứng viên UI/UX</span>
                </div>
                <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-slate-100 px-5 py-3 rounded-2xl shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Clock size={16} className="text-orange-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 italic">Chờ duyệt: 4 Offer</span>
                </div>
             </div>
          </section>
        </div>

        {/* Timeline Column */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <section className="glass-card p-8 rounded-[2.5rem] bg-white shadow-xl shadow-slate-100/50 border-primary/5">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black text-primary-container italic">Lịch hôm nay</h3>
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase italic">24 Oct</span>
             </div>
             <div className="space-y-10 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100 before:shadow-inner">
                {[
                  { time: '09:30', title: 'Phỏng vấn Lê Hoàng Nam', meta: 'Google Meet • ID: hcm-rec-24', state: 'active', color: 'blue' },
                  { time: '11:00', title: 'Họp Team Marketing', meta: 'Phòng họp 202 • Lầu 2', state: 'pending', color: 'slate' },
                  { time: '14:00', title: 'Training Nhân viên mới', meta: 'Hội trường A • Online/Offline', state: 'next', color: 'primary' },
                ].map((ev, i) => (
                  <div key={i} className="relative pl-10 group cursor-pointer">
                    <div className={cn(
                      "absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 p-0.5 z-10 shadow-lg group-hover:scale-125 transition-all outline outline-white outline-4",
                      ev.color === 'blue' ? "border-blue-500" : ev.color === 'primary' ? "border-primary" : "border-slate-100"
                    )}>
                      {ev.state === 'active' && <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>}
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors underline decoration-transparent group-hover:decoration-primary/10 underline-offset-4">{ev.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 mt-1 italic tracking-tight">{ev.meta}</p>
                      </div>
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest",
                        ev.color === 'blue' ? "text-blue-500" : ev.color === 'primary' ? "text-primary" : "text-slate-300"
                      )}>{ev.time}</span>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-10 py-3 text-xs font-black uppercase tracking-widest text-slate-400 border-2 border-dashed border-slate-100 rounded-2xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-600 transition-all">
                + Thêm sự kiện
             </button>
          </section>

          <section className="glass-card p-10 rounded-[2.5rem] bg-white shadow-xl shadow-slate-100/50 border-primary/5 min-h-[320px] flex flex-col">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-black text-primary-container italic">Ghi chú nhanh</h3>
                <Edit3 size={18} className="text-slate-300" />
             </div>
             <textarea 
                className="w-full flex-1 bg-slate-50/50 border-dashed border-2 border-slate-100 rounded-3xl p-6 text-sm font-medium text-slate-700 focus:ring-0 focus:border-primary/20 placeholder:text-slate-200 resize-none italic" 
                placeholder="Nhập ghi chú hoặc ý tưởng mới tại đây..."
             ></textarea>
             <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  {['#FEF3C7', '#DBEAFE', '#F3E8FF'].map(c => <button key={c} className="w-6 h-6 rounded-lg shadow-sm border border-black/5 hover:scale-110 transition-transform" style={{ backgroundColor: c }}></button>)}
                </div>
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-6 py-2.5 rounded-full hover:bg-primary/10 hover:shadow-lg transition-all">Lưu nháp</button>
             </div>
          </section>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-lg z-[60]">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card rounded-full p-2 flex items-center justify-between shadow-2xl border-white/50 ring-1 ring-primary/5 px-10"
        >
          <div className="flex items-center gap-3 text-primary">
            <Zap size={18} strokeWidth={3} className="text-primary-container" />
            <span className="text-xs font-black uppercase tracking-widest italic">Phím tắt:</span>
          </div>
          <div className="h-6 w-[1px] bg-slate-100"></div>
          <div className="flex gap-10">
            {[
              { icon: <UserPlus size={20} />, label: 'Ứng viên' },
              { icon: <Plus size={20} />, label: 'Việc mới' },
              { icon: <Bot size={20} />, label: 'Hỏi AI' },
            ].map((btn, i) => (
              <button key={i} className="flex flex-col items-center gap-1 group">
                <span className="text-slate-300 group-hover:text-primary transition-all group-hover:scale-110">{btn.icon}</span>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-300 group-hover:text-primary transition-all opacity-0 group-hover:opacity-100">{btn.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
