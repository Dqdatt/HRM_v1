import { TrendingUp, TrendingDown, MoreHorizontal, Sparkles, AlertCircle, Mail, Phone, Zap } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-5 gap-4">
        {/* Total Employees */}
        <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm">
          <p className="text-xs text-hr-secondary font-medium mb-2">Total Employees</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">1,248</h3>
            <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 mb-1">
              <TrendingUp className="w-3 h-3" /> +5%
            </span>
          </div>
        </div>
        
        {/* Turnover Rate */}
        <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm">
          <p className="text-xs text-hr-secondary font-medium mb-2">Turnover Rate</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">4.2%</h3>
            <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 mb-1">
              <TrendingDown className="w-3 h-3" /> -0.5%
            </span>
          </div>
        </div>

        {/* Hiring Rate */}
        <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm">
          <p className="text-xs text-hr-secondary font-medium mb-2">Hiring Rate</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">12%</h3>
            <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 mb-1">
              <TrendingUp className="w-3 h-3" /> +2%
            </span>
          </div>
        </div>

        {/* Payroll Cost */}
        <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm">
          <p className="text-xs text-hr-secondary font-medium mb-2">Payroll Cost</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">$420k</h3>
            <span className="flex items-center gap-1 text-[11px] font-bold text-red-500 mb-1">
              <TrendingUp className="w-3 h-3" /> +3%
            </span>
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <p className="text-xs text-hr-secondary font-medium mb-2">Attendance Trend</p>
          <div className="flex justify-between items-end">
            <h3 className="text-3xl font-bold text-hr-title">96.4%</h3>
            <div className="flex items-end gap-1 h-6">
              <div className="w-1.5 h-3 bg-hr-accent/40 rounded-t-sm"></div>
              <div className="w-1.5 h-4 bg-hr-accent/60 rounded-t-sm"></div>
              <div className="w-1.5 h-5 bg-hr-accent/80 rounded-t-sm"></div>
              <div className="w-1.5 h-6 bg-hr-accent rounded-t-sm"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Main 4 Cols */}
        <div className="col-span-4 space-y-6">
          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Employee Growth */}
            <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm h-80 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-hr-title text-[15px]">Employee Growth</h3>
                <button className="text-hr-secondary hover:text-hr-title">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 w-full relative flex items-end">
                {/* Mock Line Chart */}
                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <path d="M0,40 Q10,38 20,35 T40,30 T60,20 T80,25 T100,10" fill="none" stroke="#00A99D" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {/* X-axis labels */}
                <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-hr-secondary transform translate-y-6">
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span>
                </div>
              </div>
            </div>

            {/* Attendance Trend Chart */}
            <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm h-80 flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 z-10">
                <h3 className="font-bold text-hr-title text-[15px]">Attendance Trend</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-hr-accent"></div>
                  <span className="text-[11px] text-hr-secondary">Last 30 Days</span>
                </div>
              </div>
              <div className="flex-1 w-full relative z-10">
                {/* Mock Line Chart with Gradient Fill */}
                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="attGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00A99D" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#00A99D" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,40 L0,35 L20,32 L40,28 L60,30 L80,25 L100,26 L100,50 Z" fill="url(#attGradient)" />
                  <path d="M0,35 L20,32 L40,28 L60,30 L80,25 L100,26" fill="none" stroke="#00A99D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Recruitment Funnel */}
            <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-hr-title text-[15px]">Recruitment Funnel</h3>
                <button className="text-[11px] font-bold text-hr-accent hover:underline">View All</button>
              </div>
              <div className="space-y-5">
                {[
                  { label: 'Applications', value: '450', percent: '100%' },
                  { label: 'Interviews', value: '120', percent: '40%' },
                  { label: 'Offer Sent', value: '45', percent: '15%' },
                  { label: 'Hired', value: '32', percent: '10%' },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${i === 0 ? 'bg-hr-title' : 'bg-hr-accent'}`} 
                        style={{ width: item.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Distribution */}
            <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col">
              <h3 className="font-bold text-hr-title text-[15px] mb-6">Department Distribution</h3>
              <div className="flex-1 flex items-center gap-8">
                {/* Mock Donut Chart */}
                <div className="relative w-32 h-32 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#f3f4f6" strokeWidth="4" />
                    <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#00A99D" strokeWidth="4" strokeDasharray="40 60" strokeDashoffset="0" />
                    <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#0f766e" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-40" />
                    <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#94a3b8" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-65" />
                    <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-80" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-hr-title">1.2k</span>
                    <span className="text-[10px] text-hr-secondary">Staff</span>
                  </div>
                </div>
                {/* Legend */}
                <div className="space-y-3 flex-1">
                  {[
                    { label: 'Engineering', value: '40%', color: 'bg-[#00A99D]' },
                    { label: 'Sales', value: '25%', color: 'bg-[#0f766e]' },
                    { label: 'Operations', value: '15%', color: 'bg-[#94a3b8]' },
                    { label: 'Other', value: '20%', color: 'bg-[#e2e8f0]' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                        <span className="text-hr-secondary">{item.label}</span>
                      </div>
                      <span className="font-bold text-hr-title">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 space-y-6">
          {/* AI Insights */}
          <div className="bg-[#f0fdfa] p-5 rounded-xl border border-hr-accent/20">
            <div className="flex items-center gap-2 mb-4 text-hr-accent">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold text-[15px]">AI Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <TrendingDown className="w-3.5 h-3.5 text-hr-accent" />
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  Turnover risk in <span className="font-bold text-hr-title">Sales</span> has decreased by 12% following the new bonus rollout.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 text-hr-accent" />
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  Hiring efficiency is <span className="font-bold text-hr-title">high</span>; average time-to-fill reduced to 18 days.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-hr-accent" />
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  Recommendation:<br/>Update remote work policy to improve Engineering retention.
                </p>
              </div>
            </div>
          </div>

          {/* HR Alerts */}
          <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-hr-title text-[15px]">HR Alerts</h3>
              <div className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">5</div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                <h4 className="text-[13px] font-bold text-hr-title mb-1">3 Probation Endings</h4>
                <p className="text-[11px] text-hr-secondary">Review required by end of week.</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                <h4 className="text-[13px] font-bold text-hr-title mb-1">2 Abnormal OT Warnings</h4>
                <p className="text-[11px] text-hr-secondary">IT Dept. exceeding 40h/wk threshold.</p>
              </div>
            </div>
            <button className="w-full py-2 border border-gray-200 rounded-lg text-xs font-bold text-hr-title hover:bg-gray-50 transition-colors">
              Manage All Alerts
            </button>
          </div>

          {/* Top Performer */}
          <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm flex items-start gap-4">
            <img src="https://i.pravatar.cc/150?u=10" alt="Top Performer" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
            <div>
              <span className="text-[9px] font-bold tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase mb-1.5 inline-block">Top Performer</span>
              <h4 className="text-sm font-bold text-hr-title">Elena Vance</h4>
              <p className="text-xs text-hr-secondary mb-3">Lead Product Designer</p>
              <div className="flex gap-2">
                <button className="w-7 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-hr-secondary" />
                </button>
                <button className="w-7 h-7 rounded bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-hr-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
