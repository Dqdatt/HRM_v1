import { motion } from 'motion/react';
import { 
  User, 
  Palette, 
  Bell, 
  Download, 
  ChevronRight, 
  Camera,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-500 pb-20">
      <div>
        <h1 className="text-4xl font-black text-primary tracking-tight mb-2">Cài đặt hệ thống</h1>
        <p className="text-slate-500 font-medium">Quản lý tùy chọn cá nhân và cấu hình môi trường làm việc của bạn.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 space-y-10">
          {/* Profile Section */}
          <section className="glass-card rounded-[2.5rem] p-10 bg-white shadow-xl shadow-slate-100/50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-primary-container flex items-center gap-3 italic">
                <User size={24} className="text-primary not-italic" />
                Hồ sơ cá nhân
              </h2>
              <button className="text-primary text-xs font-black uppercase tracking-widest hover:underline underline-offset-8">Chỉnh sửa</button>
            </div>
            
            <div className="flex items-center gap-8 mb-10 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl transition-transform group-hover:scale-105"
                />
                <button className="absolute bottom-0 right-0 bg-white p-2.5 rounded-full shadow-lg border border-slate-100 hover:bg-primary hover:text-white transition-all">
                  <Camera size={16} />
                </button>
              </div>
              <div>
                <h3 className="text-xl font-black text-primary-container">Nguyễn Minh Anh</h3>
                <p className="text-sm font-bold text-slate-400 mt-1 italic">Giám đốc Nhân sự (HR Director)</p>
                <div className="mt-2 text-[10px] font-black text-slate-300 uppercase tracking-widest bg-white px-2 py-1 rounded inline-block border border-slate-100">
                  ID: #WORK-2024-089
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 px-2">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] italic ml-1">Email</label>
                <input className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-primary focus:ring-0 transition-all outline-none text-sm font-bold placeholder:text-slate-200" type="email" defaultValue="minhanh.hr@workos.vn" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em] italic ml-1">Số điện thoại</label>
                <input className="w-full bg-transparent border-b-2 border-slate-100 py-3 focus:border-primary focus:ring-0 transition-all outline-none text-sm font-bold placeholder:text-slate-200" type="text" defaultValue="+84 908 123 456" />
              </div>
            </div>
          </section>

          {/* Appearance Section */}
          <section className="glass-card rounded-[2.5rem] p-10 bg-white shadow-xl shadow-slate-100/50" id="appearance">
            <h2 className="text-2xl font-black text-primary-container flex items-center gap-3 mb-10 italic">
              <Palette size={24} className="text-primary not-italic" />
              Giao diện
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Sáng (Mặc định)', active: true, theme: 'light' },
                { label: 'Tối', active: false, theme: 'dark' },
                { label: 'Hệ thống', active: false, theme: 'system' }
              ].map((item) => (
                <div key={item.label} className="cursor-pointer group flex flex-col items-center">
                  <div className={cn(
                    "w-full aspect-[4/3] rounded-2xl border-2 p-3 transition-all mb-3 overflow-hidden flex flex-col gap-2",
                    item.active ? "border-primary bg-slate-50 ring-4 ring-primary/5" : "border-slate-100 bg-white group-hover:border-slate-300"
                  )}>
                    <div className={cn("h-2 w-12 rounded-full", item.theme === 'light' ? 'bg-slate-200' : 'bg-slate-700')}></div>
                    <div className={cn("h-1 w-full rounded-full", item.theme === 'light' ? 'bg-slate-100' : 'bg-slate-800')}></div>
                    <div className={cn("h-1 w-2/3 rounded-full", item.theme === 'light' ? 'bg-slate-100' : 'bg-slate-800')}></div>
                  </div>
                  <p className={cn("text-[10px] font-black uppercase tracking-widest", item.active ? "text-primary" : "text-slate-400")}>{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl border border-slate-100 border-dashed">
              <div>
                <h4 className="font-black text-primary-container text-sm underline decoration-primary/5 underline-offset-4 tracking-tight">Chế độ tập trung (Compact Mode)</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Thu nhỏ khoảng cách hiển thị để xem nhiều nội dung hơn.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer group">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-14 h-8 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary shadow-inner"></div>
              </label>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="glass-card rounded-[2.5rem] p-10 bg-white shadow-xl shadow-slate-100/50">
             <h2 className="text-2xl font-black text-primary-container flex items-center gap-3 mb-10 italic">
              <Bell size={24} className="text-primary not-italic" />
              Thông báo
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Thông báo đẩy (Push)', desc: 'Nhận thông báo trực tiếp trên trình duyệt.', checked: true },
                { title: 'Email định kỳ', desc: 'Báo cáo tổng kết công việc hàng tuần.', checked: true },
                { title: 'Nhắc nhở lịch phỏng vấn', desc: 'Thông báo trước 30 phút cho mỗi buổi hẹn.', checked: true },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 group">
                  <div className="max-w-[80%]">
                    <h4 className="font-bold text-primary-container text-sm leading-tight group-hover:text-primary transition-colors underline decoration-slate-100 underline-offset-4">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-1 italic">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer group">
                    <input className="sr-only peer" type="checkbox" defaultChecked={item.checked} />
                    <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="md:col-span-4 space-y-8">
          <section className="glass-card rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-black text-primary text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2 not-italic italic">
              <Layers size={14} className="not-italic" />
              Đồng bộ
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-50">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Wma0bALmjN7oYTEPZVWhW9uxz3bdXOVf4K3gU84UvM1fmcj4ZutOySVfI7mIbI82dO4IrwcsLhCIe8pnnZd0M4sXb2w43uBythhnoBxvAS0VBh_9yOyIX7DCw_hzYk669GhZyLAAaIoKbGFDo3hzw-VWocXMx8uh4QrfH93L6nVP7Ue0FwrPW3KNnaDWfisw3TI9_Oa4KnSJCQorpQypD9dM-X20dh3u34hG0_XhxOHx8jD19XjA-4B05i67jPdUflhCrb6K-5Ju" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-primary leading-tight">Google Calendar</p>
                  <p className="text-[9px] text-emerald-600 font-black uppercase mt-1 tracking-tighter">Đã kết nối</p>
                </div>
                <CheckCircle2 size={20} className="text-emerald-500" />
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4 transition-transform hover:-translate-y-1 cursor-pointer opacity-60 hover:opacity-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-200/50 border border-slate-50">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVC-ZXaluFucoeY0hkducDvWyYsobbYEEFq1afDGqHSeZ40OYeeBofi6nYGyFQQ9e9S87qFQIWNjjUd36sWYm03feF12olRgA2NFimGouGIgVZWdT6QXuc_upLlECOAviWh756HQpgjQAZj527znapUOyZMCD8BpVd7lF7Zh6MkpRsXfNVzSTs58L8btQxrCLpkT24JVhSpHyUlMNnVeOtkyKg1LW5Ys_WnucrUuLRVboYxvgSFPGQcCbmfuCdTc9JwN_kGlbWBcdf" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-primary leading-tight">Outlook Office 365</p>
                  <button className="text-[10px] text-primary font-black uppercase mt-1 tracking-tighter border-b border-primary/20">Kết nối ngay</button>
                </div>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-black text-primary text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2 italic">
              <Download size={14} className="not-italic" />
              Xuất dữ liệu
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3">
                  <Layers size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-black text-slate-700">Tải về (.CSV)</span>
                </div>
                <ChevronRight size={16} className="text-slate-200 group-hover:text-primary transition-all group-hover:translate-x-1" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3">
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-black text-slate-700">Báo cáo (.PDF)</span>
                </div>
                <ChevronRight size={16} className="text-slate-200 group-hover:text-primary transition-all group-hover:translate-x-1" />
              </button>
            </div>
            <p className="mt-8 text-[9px] text-slate-400 font-bold uppercase tracking-wider italic text-center leading-relaxed">
              Dữ liệu được mã hóa chuẩn bảo mật quốc tế GDPR.
            </p>
          </section>

          <div className="ai-gradient p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-primary/30 group cursor-pointer transition-transform active:scale-[0.98]">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 tracking-tight italic">Gói Pro</h3>
              <p className="text-xs text-blue-100 font-medium mb-8 leading-relaxed opacity-80 italic">Hết hạn trong <span className="text-white font-black">45 ngày</span>. Tự động gia hạn vào 12/12/2024.</p>
              <button className="w-full bg-white text-primary font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-black/10 hover:bg-blue-50 transition-colors">Nâng cấp ngay</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      <div className="pt-20 border-t border-slate-100 flex items-center justify-between text-slate-400 font-bold text-[10px] tracking-widest uppercase italic">
        <div className="flex items-center gap-10">
          <a className="hover:text-primary transition-colors cursor-pointer border-b border-transparent hover:border-primary/30">Điều khoản dịch vụ</a>
          <a className="hover:text-primary transition-colors cursor-pointer border-b border-transparent hover:border-primary/30">Chính sách bảo mật</a>
        </div>
        <p>© 2024 Work OS Ecosystem. All rights reserved.</p>
      </div>
    </div>
  );
}
