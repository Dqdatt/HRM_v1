import { Calendar as CalendarIcon, TrendingUp, TrendingDown, MoreHorizontal, ChevronDown, Bell, Grid, ChevronRight, BarChart } from 'lucide-react';
import { useState } from 'react';

export const Report = () => {
  return (
    <div className="flex h-full gap-6">
      {/* Left Sidebar - Departments */}
      <div className="w-64 shrink-0 flex flex-col gap-6">
        {/* Departments List */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
            <h3 className="font-bold text-hr-title text-sm">Departments</h3>
            <button className="text-gray-400 hover:text-hr-title">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            </button>
          </div>
          <div className="p-3 space-y-2 flex-1 overflow-y-auto">
            {/* Dept 1 */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f0fdfa] text-[#0f766e] flex items-center justify-center border border-[#ccfbf1]">
                  <span className="text-[10px] font-bold">&lt;&gt;</span>
                </div>
                <span className="text-sm font-bold text-hr-title">Engineering</span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">142</span>
            </div>
            {/* Dept 2 - Active */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#f0fdfa] border border-[#ccfbf1] cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0f766e] text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
                </div>
                <span className="text-sm font-bold text-[#0f766e]">Marketing</span>
              </div>
              <span className="px-2 py-1 bg-teal-100 text-[#0f766e] rounded text-xs font-bold">56</span>
            </div>
            {/* Dept 3 */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center border border-gray-100">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-hr-title">Sales</span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">84</span>
            </div>
            {/* Dept 4 */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center border border-gray-100">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <span className="text-sm font-bold text-hr-title">HR</span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">12</span>
            </div>
            {/* Dept 5 */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center border border-gray-100">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                </div>
                <span className="text-sm font-bold text-hr-title">Finance</span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">22</span>
            </div>
          </div>
        </div>

        {/* Total Budget Usage Card */}
        <div className="bg-[#0f766e] p-6 rounded-xl text-white relative overflow-hidden shadow-sm shrink-0">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
            <BarChart className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-bold tracking-wider text-teal-100 uppercase mb-2">Total Budget Usage</p>
            <h3 className="text-4xl font-bold mb-4">84.2%</h3>
            <div className="w-full h-1 bg-teal-800 rounded-full mb-3 overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '84.2%' }}></div>
            </div>
            <p className="text-xs text-teal-100">Remaining: <span className="font-bold text-white">$1.2M</span> of $7.5M</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-hr-title">Departmental Analytics</h1>
            <div className="w-px h-6 bg-gray-200"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors">
              <CalendarIcon className="w-4 h-4" />
              Q4 FY2024
            </button>
          </div>
          {/* Note: Topbar icons and profile are assumed to be handled by layout, but if user wants them here, we can add them. According to design, they look like Topbar elements. I'll omit Topbar duplicate elements here. */}
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-lg p-1 border border-hr-border w-max shadow-sm">
          <button className="px-6 py-2 text-sm font-bold rounded-md bg-[#f0fdfa] text-[#0f766e] shadow-sm">Overview</button>
          <button className="px-6 py-2 text-sm font-medium rounded-md text-hr-secondary hover:text-hr-title">Team List</button>
          <button className="px-6 py-2 text-sm font-medium rounded-md text-hr-secondary hover:text-hr-title">Comparison</button>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm flex flex-col justify-center">
            <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-2">Headcount</p>
            <div className="flex items-end gap-3">
              <h3 className="text-3xl font-bold text-hr-title">56</h3>
              <span className="flex items-center gap-0.5 text-[11px] font-bold text-green-600 mb-1">
                <TrendingUp className="w-3 h-3" /> 12%
              </span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm flex flex-col justify-center">
            <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-2">Avg. Salary</p>
            <div className="flex items-end gap-1">
              <h3 className="text-3xl font-bold text-hr-title">$92k</h3>
              <span className="text-sm font-medium text-hr-secondary mb-1">/ yr</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm flex flex-col justify-center">
            <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-2">Turnover Rate</p>
            <div className="flex items-end gap-3">
              <h3 className="text-3xl font-bold text-hr-title">4.2%</h3>
              <span className="flex items-center gap-0.5 text-[11px] font-bold text-green-600 mb-1">
                <TrendingDown className="w-3 h-3" /> 1.1%
              </span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-hr-border shadow-sm flex flex-col justify-center">
            <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-2">Performance</p>
            <div className="flex items-end gap-1">
              <h3 className="text-3xl font-bold text-hr-title">4.8</h3>
              <span className="text-sm font-medium text-hr-secondary mb-1">/ 5.0</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6 h-72">
          {/* Retention Trend */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 z-10">
              <h3 className="font-bold text-hr-title text-[15px]">Retention Trend</h3>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-[11px] font-medium text-gray-600 hover:bg-gray-100">
                Last 6 Months <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <div className="flex-1 w-full relative z-10 flex items-end justify-between px-4 pb-8">
              {/* Mock Line Chart */}
              <svg className="absolute inset-0 w-full h-[calc(100%-2rem)]" preserveAspectRatio="none" viewBox="0 0 100 50">
                <path d="M5,40 L20,35 L40,38 L60,30 L80,25 L95,15" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5,40 L20,35 L40,38 L60,30 L80,25" fill="none" stroke="#00A99D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              
              <div className="flex justify-between w-full absolute bottom-0 left-0 right-0 px-6 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span className="text-[#0f766e]">Dec</span>
              </div>
            </div>
          </div>

          {/* Performance Distribution */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
            <h3 className="font-bold text-hr-title text-[15px] mb-6">Performance Distribution</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span className="text-hr-secondary font-medium">Exceptional (5.0)</span>
                  <span>12%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0f766e] rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span className="text-hr-secondary font-medium">Exceeds Expectations (4.0+)</span>
                  <span>44%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#14b8a6] rounded-full" style={{ width: '44%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span className="text-hr-secondary font-medium">Meets Expectations (3.0+)</span>
                  <span>38%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#94a3b8] rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span className="text-hr-secondary font-medium">Needs Improvement (&lt; 3.0)</span>
                  <span>6%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: '6%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Table */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-hr-title text-sm">Top Performers - Marketing</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0f766e] text-white rounded-lg text-xs font-bold hover:bg-hr-title transition-colors shadow-sm">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              Compare Depts
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50/50 text-gray-400 font-bold uppercase tracking-wider text-[9px] border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Tenure</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/150?u=18" alt="Alex Morgan" className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-hr-title text-sm">Alex Morgan</p>
                        <p className="text-[10px] text-hr-secondary">Senior Specialist</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-hr-secondary">Growth Marketing</td>
                  <td className="px-6 py-4 text-hr-secondary">3.4 yrs</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 font-bold text-[10px] rounded border border-green-100">
                      5.0 <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/150?u=19" alt="Riley Lewis" className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-hr-title text-sm">Riley Lewis</p>
                        <p className="text-[10px] text-hr-secondary">Content Lead</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-hr-secondary">Creative Ops</td>
                  <td className="px-6 py-4 text-hr-secondary">2.1 yrs</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 font-bold text-[10px] rounded border border-green-100">
                      4.9 <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src="https://i.pravatar.cc/150?u=20" alt="Sasha Chen" className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-hr-title text-sm">Sasha Chen</p>
                        <p className="text-[10px] text-hr-secondary">Brand Strategist</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-hr-secondary">Brand & PR</td>
                  <td className="px-6 py-4 text-hr-secondary">1.5 yrs</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 font-bold text-[10px] rounded border border-green-100">
                      4.7 <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
