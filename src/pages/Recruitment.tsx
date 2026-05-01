import { motion } from 'motion/react';
import { 
  Search, 
  MoreHorizontal, 
  ChevronRight, 
  ChevronDown, 
  Star, 
  Link as LinkIcon, 
  Paperclip,
  CheckCircle2,
  Calendar,
  UserPlus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Candidate } from '../types';

const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Lê Minh Quân',
    role: 'Senior UX Designer',
    match: 98,
    status: 'applied',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    initials: 'MQ'
  },
  {
    id: '2',
    name: 'Trần Thu Thủy',
    role: 'Product Architect',
    match: 85,
    status: 'applied',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    initials: 'TT'
  },
  {
    id: '3',
    name: 'Nguyễn Gia Huy',
    role: 'Lead Designer',
    match: 92,
    status: 'screening',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    initials: 'GH'
  },
  {
    id: '4',
    name: 'Phạm Hoàng Nam',
    role: 'Senior UI Artist',
    match: 88,
    status: 'interview',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    initials: 'HN'
  },
  {
    id: '5',
    name: 'Đặng Minh Hạnh',
    role: 'Design Manager',
    match: 95,
    status: 'offer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    initials: 'MH'
  }
];

const CandidateCard = ({ candidate }: { candidate: Candidate }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="glass-card p-4 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/20 transition-all cursor-grab active:cursor-grabbing group min-w-[260px]"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden ring-2 ring-white">
        <img src={candidate.avatar} alt={candidate.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full translate-x-2 -translate-y-1">
        <Star size={10} fill="currentColor" />
        <span className="text-[10px] font-black">{candidate.match / 20}</span>
      </div>
    </div>
    <h4 className="font-bold text-primary leading-tight">{candidate.name}</h4>
    <p className="text-[11px] text-slate-500 mb-4">{candidate.role}</p>
    
    <div className="flex items-center justify-between pt-3 border-t border-slate-50/50">
      <div className="flex items-center gap-2">
        <Paperclip size={12} className="text-slate-300" />
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">CV_2024.pdf</span>
      </div>
      <span className="text-[10px] text-slate-400 font-medium italic">2d ago</span>
    </div>
  </motion.div>
);

export default function Recruitment() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
            <span>Tuyển dụng</span>
            <ChevronRight size={10} />
            <span className="text-primary">Quy trình CRM</span>
          </nav>
          <h1 className="text-3xl font-black text-primary tracking-tight">Phễu Tuyển Dụng</h1>
          <p className="text-slate-500 mt-1">Quản lý 142 ứng viên tiềm năng cho các vị trí đang mở.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 hover:border-primary transition-colors">
            <span>Senior Product Designer</span>
            <ChevronDown size={16} />
          </button>
          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=150`} 
                className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+3</div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 -mx-8 px-8 snap-x">
        {/* Kanban Columns */}
        {(['applied', 'screening', 'interview', 'offer', 'hired'] as const).map((status) => (
          <div key={status} className="flex flex-col gap-4 min-w-[280px]">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "w-2 h-2 rounded-full",
                  status === 'applied' && "bg-slate-400",
                  status === 'screening' && "bg-blue-400",
                  status === 'interview' && "bg-amber-400",
                  status === 'offer' && "bg-emerald-400",
                  status === 'hired' && "bg-primary"
                )}></span>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 italic">{status}</h3>
                <span className="text-[10px] font-black bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
                  {candidates.filter(c => c.status === status).length || 0}
                </span>
              </div>
              <button className="text-slate-400 hover:text-primary transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <div className="space-y-4">
              {candidates.filter(c => c.status === status).map(c => (
                <div key={c.id} className="relative group">
                  {status === 'interview' && (
                    <div className="absolute top-4 right-4 z-10 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1 border border-amber-100">
                      <Calendar size={10} />
                      <span>Today 2PM</span>
                    </div>
                  )}
                  <CandidateCard candidate={c} />
                  {status === 'offer' && (
                    <div className="p-3">
                      <div className="bg-white/70 backdrop-blur-sm border border-emerald-100 rounded-xl p-2 flex items-center justify-between shadow-sm">
                        <span className="text-[10px] font-black text-emerald-800">$4.5k - $5.2k</span>
                        <CheckCircle2 size={14} className="text-emerald-500" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-[2rem] md:col-span-1">
          <h4 className="font-bold text-primary mb-4">Nguồn Ứng Viên</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-slate-500">LinkedIn</span>
              </div>
              <span className="text-xs font-black text-primary">64%</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '64%' }} className="bg-primary h-full"></motion.div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                <span className="text-xs font-bold text-slate-500">Referrals</span>
              </div>
              <span className="text-xs font-black text-primary">22%</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '22%' }} className="bg-blue-300 h-full"></motion.div>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-[2rem] md:col-span-2 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-primary">Dự báo Tuyển dụng</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Quý IV / 2024</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-primary leading-none">82%</span>
              <p className="text-[10px] font-bold text-emerald-600">Theo tiến độ</p>
            </div>
          </div>
          
          <div className="flex items-end gap-2 h-24 mt-6">
            {[40, 60, 45, 85, 55, 70, 30].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className={cn(
                  "flex-1 rounded-t-xl transition-all duration-300",
                  i === 3 ? "bg-primary" : "bg-slate-100 hover:bg-primary/20 cursor-pointer",
                  i === 6 && "border border-dashed border-slate-200 bg-transparent"
                )}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3 text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">
            <span>Jul</span><span>Aug</span><span>Sep</span><span className="text-primary text-[10px]">Oct</span><span>Nov</span><span>Dec</span><span>Jan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
