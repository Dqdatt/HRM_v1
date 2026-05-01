import { motion } from 'motion/react';
import { 
  Users, 
  Zap, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Download,
  Calendar
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

const lineData = [
  { name: 'Tuần 1', value: 30 },
  { name: 'Tuần 2', value: 40 },
  { name: 'Tuần 3', value: 65 },
  { name: 'Tuần 4', value: 55 },
  { name: 'Tuần 5', value: 80 },
];

const pieData = [
  { name: 'Hoàn thành', value: 428, color: '#1A237E' },
  { name: 'Đang thực hiện', value: 112, color: '#90CAF9' },
  { name: 'Quá hạn', value: 14, color: '#E0E0E0' },
];

const barData = [
  { name: 'Ứng tuyển', value: 2450, color: '#1A237E' },
  { name: 'Sơ loại', value: 1590, color: '#283593' },
  { name: 'Phỏng vấn', value: 540, color: '#3949AB' },
  { name: 'Mời làm việc', value: 82, color: '#5C6BC0' },
  { name: 'Nhận việc', value: 45, color: '#9FA8DA' },
];

const StatCard = ({ title, value, change, isDown = false }: { title: string; value: string; change: string, isDown?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card p-6 rounded-2xl flex flex-col justify-between"
  >
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{title}</p>
    <div className="flex items-end justify-between">
      <span className="text-3xl font-black text-primary leading-none">{value}</span>
      <span className={`text-xs font-bold flex items-center gap-1 ${isDown ? 'text-error' : 'text-emerald-600'}`}>
        {isDown ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
        {change}
      </span>
    </div>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-primary-container tracking-tight">Trung tâm Báo cáo</h2>
          <p className="text-slate-500 mt-1">Phân tích hiệu suất và dữ liệu nhân sự thời gian thực.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
            <Calendar size={16} />
            <span>30 ngày qua</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
            <Download size={16} />
            <span>Xuất dữ liệu</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Tổng nhân viên" value="1,284" change="12%" />
        <StatCard title="Hiệu suất trung bình" value="94.2%" change="4%" />
        <StatCard title="Hồ sơ mới" value="426" change="8%" isDown />
        <StatCard title="Chi phí tuyển dụng" value="$8.4k" change="0%" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 lg:col-span-8 glass-card p-6 rounded-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-bold text-primary">Khối lượng công việc tháng</h3>
              <p className="text-xs text-slate-500">Phân bổ nguồn lực theo thời gian</p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary"></span> Dự án chính</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-300"></span> Vận hành</div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1A237E" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1A237E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontSize: '12px'
                  }} 
                />
                <Area type="monotone" dataKey="value" stroke="#1A237E" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 lg:col-span-4 glass-card p-6 rounded-2xl flex flex-col"
        >
          <h3 className="font-bold text-primary mb-6 text-center">Hoàn thành công việc</h3>
          <div className="flex-1 min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="block text-2xl font-black text-primary">78%</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Mục tiêu</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 rounded-2xl"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-bold text-primary">Tiến độ tuyển dụng</h3>
            <p className="text-xs text-slate-500">Số lượng ứng viên qua các giai đoạn</p>
          </div>
        </div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} dy={10} />
              <Tooltip cursor={{fill: '#f8f9fa'}} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="glass-card w-full max-w-2xl px-6 py-4 flex items-center gap-4 border-primary/10 shadow-2xl shadow-primary/5 rounded-full"
        >
          <Zap className="text-primary" size={20} />
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium" 
            placeholder="Tạo báo cáo nhanh bằng AI (vd: 'So sánh hiệu suất phòng Marketing quý 3')" 
            type="text"
          />
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-100 rounded-lg border text-[10px] text-slate-400 font-bold">⌘</kbd>
            <kbd className="px-2 py-1 bg-slate-100 rounded-lg border text-[10px] text-slate-400 font-bold">K</kbd>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
