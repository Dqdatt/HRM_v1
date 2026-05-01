import { motion } from 'motion/react';
import { 
  Bot, 
  Send, 
  Paperclip, 
  Mic, 
  Mail, 
  Briefcase, 
  FileText, 
  Calendar, 
  Megaphone,
  Sparkles,
  Command,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function AIAssistant() {
  return (
    <div className="h-[calc(100vh-10rem)] flex overflow-hidden -m-8 animate-in fade-in duration-500">
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50/30">
        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin">
          <div className="max-w-3xl mx-auto text-center py-12">
            <div className="w-20 h-20 ai-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
              <Bot size={40} className="text-white" />
            </div>
            <h2 className="text-4xl font-black text-primary tracking-tight mb-2">Chào buổi sáng, Admin</h2>
            <p className="text-slate-500 font-medium max-w-md mx-auto">Tôi là cộng sự AI của bạn. Hôm nay tôi có thể giúp gì cho quy trình nhân sự của bạn?</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* AI Message */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl ai-gradient flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                <Bot size={18} className="text-white" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-5 rounded-3xl rounded-tl-none max-w-[80%] shadow-lg border-primary/5"
              >
                <p className="text-sm font-medium leading-relaxed text-slate-800">Chào bạn! Tôi đã phân tích xong 12 hồ sơ ứng tuyển mới cho vị trí Senior Developer. Bạn có muốn tôi tóm tắt những ứng viên tiềm năng nhất không?</p>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-3 block italic">09:15 AM</span>
              </motion.div>
            </div>

            {/* User Message */}
            <div className="flex items-start gap-4 flex-row-reverse">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" 
                className="w-9 h-9 rounded-xl object-cover shrink-0 border-2 border-primary/10"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary text-white p-5 rounded-3xl rounded-tr-none max-w-[80%] shadow-xl shadow-primary/20"
              >
                <p className="text-sm font-medium leading-relaxed">Có chứ, hãy tóm tắt và so sánh kỹ năng của top 3 ứng viên hàng đầu dựa trên yêu cầu dự án Cloud sắp tới nhé.</p>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-3 block italic">09:16 AM</span>
              </motion.div>
            </div>

            {/* AI Complex Response */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl ai-gradient flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                <Bot size={18} className="text-white" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 rounded-3xl rounded-tl-none max-w-[85%] shadow-lg space-y-4 border-primary/5"
              >
                 <p className="text-sm font-bold text-primary italic">Dưới đây là so sánh top 3 ứng viên cho dự án Cloud:</p>
                 <div className="space-y-2">
                    {[
                      { name: 'Nguyễn Hoàng', skills: '8+ năm kinh nghiệm AWS/GCP', match: '98%' },
                      { name: 'Trần Minh', skills: 'Kỹ năng Kubernetes xuất sắc', match: '92%' },
                    ].map((c) => (
                      <div key={c.name} className="p-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between hover:border-primary/20 transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary font-black text-xs">{c.name.split(' ').map(n => n[0]).join('')}</div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{c.name}</p>
                            <p className="text-[10px] font-medium text-slate-400">{c.skills}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 uppercase italic">Match {c.match}</span>
                      </div>
                    ))}
                 </div>
                 <div className="flex gap-2">
                    <button className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-slate-50 text-primary rounded-xl border border-slate-200 hover:bg-slate-100 transition-all">Xem chi tiết</button>
                    <button className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-primary text-white rounded-xl shadow-md hover:opacity-90 transition-all">Đặt lịch phỏng vấn</button>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-8 pt-0">
          <div className="max-w-4xl mx-auto glass-card rounded-[2rem] p-2 flex items-end gap-2 shadow-2xl shadow-primary/10 ring-1 ring-primary/5">
            <button className="p-3 text-slate-400 hover:text-primary transition-colors">
              <Paperclip size={20} />
            </button>
            <textarea 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-4 px-2 resize-none max-h-32 min-h-[44px] font-medium" 
              placeholder="Nhập yêu cầu tại đây... (Shift + Enter để xuống dòng)" 
              rows={1}
            />
            <div className="flex items-center gap-1 pb-1 pr-1">
              <button className="p-3 text-slate-400 hover:text-primary transition-colors">
                <Mic size={20} />
              </button>
              <button className="p-3.5 bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                <Send size={20} fill="currentColor" />
              </button>
            </div>
          </div>
          <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-3 italic">
            Work OS AI có thể đưa ra câu trả lời không chính xác. Hãy kiểm tra lại thông tin quan trọng.
          </p>
        </div>
      </div>

      {/* Sidebar Actions */}
      <aside className="w-[320px] border-l border-slate-100 bg-white/40 p-8 overflow-y-auto hidden xl:block">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 italic">Quick Actions</h3>
        <div className="space-y-4">
          {[
            { icon: <Mail size={16} />, title: 'Viết email', desc: 'Soạn thư mời nhận việc hoặc thông báo nội bộ' },
            { icon: <Briefcase size={16} />, title: 'Tạo JD', desc: 'Xây dựng mô tả công việc chuyên nghiệp' },
            { icon: <FileText size={16} />, title: 'Tóm tắt họp', desc: 'Chuyển ghi âm/văn bản thành ý chính' },
            { icon: <Calendar size={16} />, title: 'Lên việc hôm nay', desc: 'Sắp xếp ưu tiên dựa trên lịch trình' },
            { icon: <Megaphone size={16} />, title: 'Soạn thông báo', desc: 'Phát hành quy định mới của công ty' },
          ].map((action, i) => (
            <button key={i} className="w-full glass-card p-5 rounded-3xl text-left hover:border-primary/20 transition-all group flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                {action.icon}
              </div>
              <div>
                <p className="text-sm font-black text-primary leading-tight underline decoration-primary/10 group-hover:decoration-primary/40 underline-offset-4">{action.title}</p>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{action.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-[2rem] ai-gradient relative overflow-hidden group cursor-pointer shadow-xl shadow-primary/20">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white/80 font-black text-[10px] uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              Gợi ý AI
            </div>
            <p className="text-white text-[11px] font-black leading-relaxed">Phòng Kỹ thuật tăng <span className="text-blue-200">15%</span> hiệu suất với Work OS.</p>
            <button className="mt-4 w-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] font-bold py-2.5 rounded-xl hover:bg-white/40 transition-all flex items-center justify-center gap-2">
              Xem ngay
              <ArrowRight size={14} />
            </button>
          </div>
          <Bot size={120} className="absolute -right-10 -bottom-10 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>

        <div className="fixed bottom-12 right-12 z-50">
          <div className="glass-card rounded-2xl px-4 py-2 flex items-center gap-3 border-primary/20 shadow-2xl">
            <Command size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">⌘ K để tìm kiếm nhanh</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
