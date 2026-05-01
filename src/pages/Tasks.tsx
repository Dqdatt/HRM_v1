import { motion } from 'motion/react';
import { 
  Briefcase, 
  Filter, 
  ArrowUpDown, 
  MoreVertical, 
  Clock, 
  CheckCircle2, 
  Calendar,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Task } from '../types';

const tasks: Task[] = [
  {
    id: '1',
    title: 'Review hồ sơ ứng viên Senior Designer',
    project: 'Tuyển dụng Q4',
    deadline: '14:00 Hôm nay',
    priority: 'high',
    status: 'in_progress',
  },
  {
    id: '2',
    title: 'Chuẩn bị nội dung Onboarding mới',
    project: 'Văn hóa doanh nghiệp',
    deadline: '25 Thg 10',
    priority: 'medium',
    status: 'not_started',
  },
  {
    id: '3',
    title: 'Gửi email thông báo chính sách bảo hiểm',
    project: 'Vận hành',
    deadline: '26 Thg 10',
    priority: 'low',
    status: 'not_started',
  },
  {
    id: '4',
    title: 'Duyệt yêu cầu nghỉ phép tuần này',
    project: 'Vận hành',
    deadline: 'Đã xong',
    priority: 'medium',
    status: 'completed',
  },
];

const priorityStyles = {
  high: "bg-red-50 text-error border-red-100",
  medium: "bg-blue-50 text-blue-600 border-blue-100",
  low: "bg-slate-50 text-slate-500 border-slate-100",
};

const statusColors = {
  completed: "bg-emerald-500",
  in_progress: "bg-amber-500",
  not_started: "bg-slate-300",
};

export default function Tasks() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-primary-container tracking-tight">Công việc</h2>
        <p className="text-slate-500 mt-1">Quản lý và theo dõi tiến độ công việc hàng ngày của bạn.</p>
      </div>

      <div className="flex items-center space-x-8 border-b border-slate-200">
        <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm">Hôm nay</button>
        <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-600 text-sm font-medium transition-all">Tuần này</button>
        <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-600 text-sm font-medium transition-all">Đang chờ</button>
        <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-slate-600 text-sm font-medium transition-all">Hoàn thành</button>
      </div>

      <div className="glass-card rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
            <Filter size={14} />
            <span>Bộ lọc</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-all">
            <ArrowUpDown size={14} />
            <span>Sắp xếp</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 font-medium">Đã chọn 0 công việc</span>
          <button className="text-primary font-bold text-xs hover:underline decoration-thickness-2">Đánh dấu đã xong</button>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 italic">
              <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Tên việc</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Deadline</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Mức ưu tiên</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-slate-400">Trạng thái</th>
              <th className="px-6 py-4 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tasks.map((task, index) => (
              <motion.tr 
                key={task.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4"><input type="checkbox" checked={task.status === 'completed'} className="rounded" /></td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className={cn(
                      "font-bold text-primary-container",
                      task.status === 'completed' && "line-through text-slate-400"
                    )}>
                      {task.title}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{task.project}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className={cn(
                    "flex items-center gap-2 text-xs font-semibold",
                    task.deadline.includes('Hôm nay') ? "text-error" : "text-slate-500",
                    task.status === 'completed' && "text-slate-400"
                  )}>
                    {task.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                    <span>{task.deadline}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                    priorityStyles[task.priority]
                  )}>
                    {task.priority === 'high' ? 'Cao' : task.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={cn("w-2 h-2 rounded-full", statusColors[task.status])}></span>
                    <span className="text-xs font-medium text-slate-600">
                      {task.status === 'completed' ? 'Hoàn thành' : task.status === 'in_progress' ? 'Đang thực hiện' : 'Chưa bắt đầu'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-primary transition-all">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hiệu suất</p>
            <p className="text-xl font-black text-primary-container leading-none">+12% tuần này</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đã hoàn thành</p>
            <p className="text-xl font-black text-primary-container leading-none">24/30 việc</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-error">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ưu tiên cao</p>
            <p className="text-xl font-black text-primary-container leading-none">3 việc còn lại</p>
          </div>
        </div>
      </div>
    </div>
  );
}
