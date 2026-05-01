import { motion } from 'motion/react';
import { 
  FolderOpen, 
  Badge, 
  User, 
  Lock, 
  FilePlus, 
  Paperclip, 
  MoreHorizontal,
  ChevronRight,
  Pin,
  Search,
  Share2,
  Edit
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Note } from '../types';

const notes: Note[] = [
  {
    id: '1',
    title: 'Đánh giá hiệu suất Q3 - Đội ngũ Kỹ thuật',
    category: 'Ghi chú họp',
    date: '10:30 AM, Hôm nay',
    content: 'Thảo luận về các chỉ số KPI chính cho quý 3. Cần tập trung vào tốc độ phản hồi và chất lượng mã nguồn. Đề xuất chương trình đào tạo mới cho junior developers...',
  },
  {
    id: '2',
    title: 'Chính sách nghỉ phép mới 2024',
    category: 'Nhân sự',
    date: 'Cập nhật 2 giờ trước',
    content: 'Cập nhật quy định về ngày nghỉ phép năm và chế độ làm việc từ xa cho năm tài chính 2024. Đảm bảo tuân thủ các quy định lao động mới...',
    pinned: true,
  },
  {
    id: '3',
    title: 'Phỏng vấn: Nguyễn Văn A - Senior Designer',
    category: 'Ghi chú ứng viên',
    date: 'Hôm qua',
    content: 'Kỹ năng UI xuất sắc, tư duy sản phẩm tốt. Portfolio đa dạng. Phù hợp văn hóa công ty. Cần check thêm về khả năng lead team...',
  },
  {
    id: '4',
    title: 'Ý tưởng cải tiến Workspace',
    category: 'Cá nhân',
    date: '22 Tháng 10',
    content: 'Tối ưu hóa quy trình Onboarding thông qua tự động hóa AI và hệ thống tài liệu tập trung. Giảm thời gian setup môi trường cho dev mới...',
  }
];

const categoryIcons = {
  'Ghi chú họp': <FolderOpen size={16} />,
  'Nhân sự': <Badge size={16} />,
  'Ghi chú ứng viên': <User size={16} />,
  'Cá nhân': <Lock size={16} />,
};

export default function NotesView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-black text-primary tracking-tight">Ghi chú</h2>
        <p className="text-slate-500 mt-1">Không gian làm việc cá nhân và cộng tác tài liệu nhân sự.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-none">
        {['Tất cả', 'Ghi chú họp', 'Ghi chú ứng viên', 'Ghi chú nhân sự', 'Ghi chú cá nhân'].map((cat, idx) => (
          <button 
            key={cat}
            className={cn(
              "whitespace-nowrap px-6 py-3 rounded-2xl flex items-center gap-3 font-bold text-xs ring-1 ring-slate-200 transition-all active:scale-95",
              idx === 0 ? "bg-[#1A237E] text-white shadow-lg shadow-primary/20 ring-primary" : "bg-white text-slate-500 hover:bg-slate-50"
            )}
          >
            <FolderOpen size={16} />
            <span>{cat}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Create Note Card */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <button className="w-full h-full min-h-[220px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-4 text-slate-400 hover:border-primary hover:text-primary transition-all group p-6 hover:bg-primary/5">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <FilePlus size={28} />
            </div>
            <span className="font-bold text-sm">Tạo ghi chú mới</span>
          </button>
        </div>

        {/* Notes Grid */}
        {notes.map((note, idx) => (
          <motion.div 
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "glass-card p-6 rounded-3xl hover:shadow-2xl transition-all cursor-pointer group flex flex-col relative overflow-hidden",
              idx === 0 ? "col-span-12 md:col-span-8 lg:col-span-6" : "col-span-12 md:col-span-4 lg:col-span-3"
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{note.category}</span>
              <div className="flex items-center gap-2">
                {note.pinned && <Pin size={14} className="text-primary fill-primary" />}
                <span className="text-[10px] font-bold text-slate-300 uppercase italic">{note.date}</span>
              </div>
            </div>

            <h3 className="text-lg font-black text-primary mb-3 group-hover:text-primary-container leading-tight">{note.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6 font-medium">{note.content}</p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                {idx === 0 && (
                  <div className="flex -space-x-2">
                    {[1, 2].map(i => (
                      <img 
                        key={i}
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=150`} 
                        className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                )}
                {note.id === '4' && (
                  <div className="flex items-center gap-1.5 text-primary">
                    <Paperclip size={14} />
                    <span className="text-[10px] font-black tracking-tighter">3 tệp đính kèm</span>
                  </div>
                )}
              </div>
              <button className="p-2 rounded-xl bg-slate-50 text-slate-400 opacity-0 group-hover:opacity-100 transition-all hover:text-primary hover:bg-primary/10">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </motion.div>
        ))}

        {/* Work Activity Bento Section */}
        <div className="col-span-12 mt-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <Share2 size={18} />
              Hoạt động gần đây
            </h3>
            <button className="text-primary font-bold text-xs flex items-center gap-1 group">
              Xem tất cả
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="space-y-3">
            {[
              { icon: <Edit size={16} />, title: 'Bạn đã chỉnh sửa "Ghi chú họp Q3"', meta: '2 giờ trước • Trong Công việc', color: 'bg-blue-50 text-primary' },
              { icon: <Share2 size={16} />, title: 'Minh Hạnh đã chia sẻ "Quy trình Tuyển dụng"', meta: '5 giờ trước • Trong Tuyển dụng', color: 'bg-orange-50 text-orange-600' },
            ].map((act, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", act.color)}>
                    {act.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-800">{act.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight italic mt-0.5">{act.meta}</p>
                  </div>
                </div>
                <MoreHorizontal size={18} className="text-slate-200 group-hover:text-slate-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-50">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card rounded-full p-2 flex items-center shadow-2xl border border-white/50 ring-1 ring-primary/10"
        >
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
            <Search size={18} strokeWidth={3} />
          </div>
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-4 placeholder:text-slate-400 font-bold" 
            placeholder="Tìm kiếm nhanh hoặc gõ lệnh /" 
            type="text"
          />
          <div className="flex gap-1 pr-4">
            <kbd className="flex items-center px-2 py-1 bg-slate-50 text-slate-400 rounded-lg text-[9px] font-black border border-slate-200">⌘ K</kbd>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
