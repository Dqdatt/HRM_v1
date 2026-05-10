import { Download, Edit, Calendar as CalendarIcon, Filter, ChevronDown, X, MoreHorizontal, Home, Building2, ChevronLeft, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Attendance } from './Attendance';
interface TimesheetModuleProps {
  activeTab: string;
}

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-hr-title">Timesheet Overview</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50 transition-colors bg-white">
            <Download className="w-4 h-4" />
            Import Data
            <ChevronDown className="w-4 h-4 text-hr-secondary" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0f766e] text-white rounded-lg text-sm font-medium hover:bg-hr-title transition-colors shadow-sm">
            <Edit className="w-4 h-4" />
            Manual Correction
          </button>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-4">
        {/* Attendance Rate */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider">Attendance Rate</span>
              <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">+2.4%</span>
            </div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">96.5%</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '96.5%' }}></div>
            </div>
            <span className="text-[10px] text-hr-secondary whitespace-nowrap">Target: 95%</span>
          </div>
        </div>

        {/* Late Employees */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider">Late Employees</span>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">-4 today</span>
            </div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">12</h3>
          </div>
          <p className="text-[11px] text-hr-secondary">8% of total workforce</p>
        </div>

        {/* OT Hours */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider">OT Hours</span>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Peak week</span>
            </div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">142h</h3>
          </div>
          <p className="text-[11px] text-hr-secondary">Across 24 projects</p>
        </div>

        {/* Remote Workers */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider">Remote Workers</span>
              <Home className="w-4 h-4 text-hr-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">45</h3>
          </div>
          <p className="text-[11px] text-hr-secondary">30% Work-from-home today</p>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden flex flex-col">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-hr-title">
              <Filter className="w-4 h-4 text-hr-secondary" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-hr-title hover:bg-gray-50 bg-gray-50">
                All Departments <ChevronDown className="w-3.5 h-3.5 text-hr-secondary" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-hr-title hover:bg-gray-50 bg-gray-50">
                All Shifts <ChevronDown className="w-3.5 h-3.5 text-hr-secondary" />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-hr-title hover:bg-gray-50 bg-gray-50">
                All Status
              </button>
              <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-hr-title bg-gray-50/50">
                <CalendarIcon className="w-3.5 h-3.5 text-hr-secondary" />
                Oct 15, 2023 - Oct 21, 2023
                <X className="w-3.5 h-3.5 text-hr-secondary cursor-pointer hover:text-hr-title ml-1" />
              </div>
            </div>
          </div>
          <button className="text-xs font-bold text-[#0f766e] hover:underline">Clear all filters</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-white text-hr-secondary font-bold tracking-wider text-[10px] uppercase border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-bold text-gray-500">Employee</th>
                <th className="px-6 py-4 font-bold text-gray-500">Check In</th>
                <th className="px-6 py-4 font-bold text-gray-500">Check Out</th>
                <th className="px-6 py-4 font-bold text-gray-500">Late Min</th>
                <th className="px-6 py-4 font-bold text-gray-500">OT</th>
                <th className="px-6 py-4 font-bold text-gray-500">Shift</th>
                <th className="px-6 py-4 font-bold text-gray-500">Location</th>
                <th className="px-6 py-4 font-bold text-gray-500">Status</th>
                <th className="px-6 py-4 font-bold text-gray-500 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=1" alt="Minh Nguyen" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-bold text-hr-title text-sm">Minh Nguyen</p>
                      <p className="text-[10px] text-hr-secondary">ID: SJ53862</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 font-bold text-hr-title">08:05 AM</td>
                <td className="px-6 py-3 text-hr-secondary">05:15 PM</td>
                <td className="px-6 py-3 font-bold text-orange-500">5m</td>
                <td className="px-6 py-3 text-hr-secondary">0.2h</td>
                <td className="px-6 py-3 text-hr-secondary">Morning</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-1.5 text-hr-title text-xs">
                    <Building2 className="w-3.5 h-3.5 text-hr-secondary" /> Office
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="font-bold text-orange-500 text-xs">Late</span>
                </td>
                <td className="px-6 py-3 text-center">
                  <button className="text-hr-secondary hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=2" alt="Linh Tran" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-bold text-hr-title text-sm">Linh Tran</p>
                      <p className="text-[10px] text-hr-secondary">ID: SJ53910</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 font-bold text-hr-title">07:55 AM</td>
                <td className="px-6 py-3 text-hr-secondary">05:30 PM</td>
                <td className="px-6 py-3 text-gray-300">-</td>
                <td className="px-6 py-3 font-bold text-hr-title">0.5h</td>
                <td className="px-6 py-3 text-hr-secondary">Morning</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-1.5 text-hr-title text-xs">
                    <Home className="w-3.5 h-3.5 text-hr-secondary" /> Remote
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="font-bold text-green-500 text-xs">Present</span>
                </td>
                <td className="px-6 py-3 text-center">
                  <button className="text-hr-secondary hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=3" alt="An Pham" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-bold text-hr-title text-sm">An Pham</p>
                      <p className="text-[10px] text-hr-secondary">ID: SJ53899</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 text-gray-300">-</td>
                <td className="px-6 py-3 text-gray-300">-</td>
                <td className="px-6 py-3 text-gray-300">-</td>
                <td className="px-6 py-3 text-gray-300">-</td>
                <td className="px-6 py-3 text-hr-secondary">Morning</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-1.5 text-hr-title text-xs">
                    <Building2 className="w-3.5 h-3.5 text-hr-secondary" /> Office
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="font-bold text-red-500 text-xs">Absent</span>
                </td>
                <td className="px-6 py-3 text-center">
                  <button className="text-hr-secondary hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=4" alt="Hieu Le" className="w-8 h-8 rounded-full" />
                    <div>
                      <p className="font-bold text-hr-title text-sm">Hieu Le</p>
                      <p className="text-[10px] text-hr-secondary">ID: SJ54002</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3 font-bold text-hr-title">08:00 AM</td>
                <td className="px-6 py-3 text-hr-secondary">06:00 PM</td>
                <td className="px-6 py-3 text-gray-300">-</td>
                <td className="px-6 py-3 font-bold text-hr-title">1.0h</td>
                <td className="px-6 py-3 text-hr-secondary">Morning</td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-1.5 text-hr-title text-xs">
                    <Building2 className="w-3.5 h-3.5 text-hr-secondary" /> Office
                  </div>
                </td>
                <td className="px-6 py-3">
                  <span className="font-bold text-green-500 text-xs">Present</span>
                </td>
                <td className="px-6 py-3 text-center">
                  <button className="text-hr-secondary hover:text-hr-title"><MoreHorizontal className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/30">
          <span className="text-xs text-hr-secondary">Showing 1 to 10 of 124 entries</span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#0f766e] bg-[#0f766e] text-white text-xs font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white text-xs font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white text-xs font-medium">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-hr-secondary text-xs">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white text-xs font-medium">13</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Weekly Attendance Trends */}
        <div className="col-span-2 bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-hr-title text-base">Weekly Attendance Trends</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#14b8a6]"></div>
                <span className="text-[11px] font-bold text-hr-title uppercase tracking-wider">Present</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                <span className="text-[11px] font-bold text-hr-title uppercase tracking-wider">Late</span>
              </div>
            </div>
          </div>
          
          <div className="h-48 flex items-end justify-between px-4">
            {/* Mock Chart Bars */}
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full bg-[#14b8a6] rounded-sm flex-1"></div>
              <div className="w-full h-2 bg-orange-500 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Mon</span>
            </div>
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full bg-[#14b8a6] rounded-sm flex-1"></div>
              <div className="w-full h-1.5 bg-orange-500 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Tue</span>
            </div>
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full h-1 bg-[#14b8a6] rounded-sm"></div>
              <div className="w-full h-2 bg-orange-500 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Wed</span>
            </div>
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full h-0.5 bg-[#14b8a6] rounded-sm"></div>
              <div className="w-full h-1 bg-orange-500 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Thu</span>
            </div>
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full h-4 bg-orange-500 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Fri</span>
            </div>
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full h-8 bg-gray-200 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Sat</span>
            </div>
            <div className="w-16 flex flex-col justify-end items-center h-full gap-1">
              <div className="w-full h-6 bg-gray-200 rounded-sm"></div>
              <span className="text-[10px] text-hr-secondary mt-2">Sun</span>
            </div>
          </div>
        </div>

        {/* Department Snapshot */}
        <div className="col-span-1 bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col">
          <h3 className="font-bold text-hr-title text-base mb-6">Department Snapshot</h3>
          <div className="space-y-6 flex-1">
            <div>
              <div className="flex justify-between text-xs font-bold text-hr-title mb-2">
                <span>Technology</span>
                <span className="text-gray-500 font-normal">98% Attendance</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#14b8a6] rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-hr-title mb-2">
                <span>Operations</span>
                <span className="text-gray-500 font-normal">92% Attendance</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#14b8a6] rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-hr-title mb-2">
                <span>Sales</span>
                <span className="text-gray-500 font-normal">85% Attendance</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-hr-title mb-2">
                <span>HR & Admin</span>
                <span className="text-gray-500 font-normal">95% Attendance</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#14b8a6] rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2.5 bg-gray-50 hover:bg-gray-100 text-[#0f766e] font-bold text-xs rounded-lg transition-colors border border-gray-100">
            View Full Reports
          </button>
        </div>
      </div>
    </div>
  );
};

const LeaveCalendar = () => (
  <div className="flex gap-6 h-[calc(100vh-140px)]">
    {/* Main Calendar Area */}
    <div className="flex-1 bg-white rounded-xl border border-hr-border shadow-sm flex flex-col overflow-hidden">
      {/* Header Controls */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center shrink-0">
        <div>
          <h2 className="text-lg font-bold text-hr-title">Team Leave Calendar</h2>
          <p className="text-xs text-hr-secondary mt-1">May 2024 • SJ Label Development Team</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
            <button className="px-3 py-1.5 rounded border border-gray-200 text-sm font-medium text-hr-title hover:bg-gray-50">Today</button>
            <button className="w-8 h-8 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
          </div>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button className="px-4 py-1.5 text-sm font-medium bg-[#0f766e] text-white">Month</button>
            <button className="px-4 py-1.5 text-sm font-medium bg-white text-hr-secondary hover:bg-gray-50">Week</button>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-orange-50 p-3 border-b border-orange-100 flex items-center gap-2 text-sm text-orange-600 font-medium shrink-0">
        <AlertCircle className="w-4 h-4" />
        Leave Conflict Detected: 3 team members off on May 15th (Capacity Alert)
      </div>

      {/* Calendar Grid (Simplified for UI representation) */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left text-[11px] border-collapse min-w-[800px]">
          <thead className="bg-gray-50/50 text-hr-secondary font-bold tracking-wider text-[9px] uppercase">
            <tr>
              <th className="px-4 py-3 border-b border-r border-gray-100 w-64 sticky left-0 bg-gray-50 z-10">Employee</th>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(day => (
                <th key={day} className="px-2 py-3 border-b border-r border-gray-100 text-center min-w-[60px]">
                  <div className="flex flex-col items-center">
                    <span className="text-hr-title text-sm">{day}</span>
                    <span className="text-gray-400">MAY</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* Alex Rivera */}
            <tr className="hover:bg-gray-50/50">
              <td className="px-4 py-3 border-r border-gray-100 sticky left-0 bg-white z-10">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=5" alt="Alex" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-bold text-hr-title text-sm">Alex Rivera</p>
                    <p className="text-[10px] text-hr-secondary">UI Designer</p>
                  </div>
                </div>
              </td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1">
                <div className="w-full h-8 bg-blue-50 border border-blue-200 rounded-md"></div>
              </td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1 bg-gray-50/50"></td>
              <td className="border-r border-gray-100 px-1 py-1 bg-gray-50/50"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
            </tr>
            {/* Sarah Jenkins */}
            <tr className="hover:bg-gray-50/50 bg-[#f0fdfa]/30">
              <td className="px-4 py-3 border-r border-gray-100 sticky left-0 bg-[#f0fdfa] z-10">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=6" alt="Sarah" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-bold text-[#0f766e] text-sm">Sarah Jenkins</p>
                    <p className="text-[10px] text-hr-secondary">Lead Dev</p>
                  </div>
                </div>
              </td>
              <td colSpan={9} className="border-r border-gray-100 px-1 py-1">
                {/* Empty cells to simulate scrolling to the 15th, not fully accurate but visually matching */}
              </td>
            </tr>
            {/* Marcus Thorne */}
            <tr className="hover:bg-gray-50/50">
              <td className="px-4 py-3 border-r border-gray-100 sticky left-0 bg-white z-10">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=7" alt="Marcus" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-bold text-hr-title text-sm">Marcus Thorne</p>
                    <p className="text-[10px] text-hr-secondary">Project Mgr</p>
                  </div>
                </div>
              </td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
              <td className="border-r border-gray-100 px-1 py-1 bg-gray-50/50"></td>
              <td className="border-r border-gray-100 px-1 py-1 bg-gray-50/50"></td>
              <td className="border-r border-gray-100 px-1 py-1">
                <div className="w-full h-8 border border-blue-200 rounded-md bg-blue-50/50"></div>
              </td>
              <td className="border-r border-gray-100 px-1 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex gap-6 text-[11px] font-medium text-hr-secondary shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0f766e]"></div> Annual Leave
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div> Sick Leave
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div> WFH
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div> Conflict Warning
        </div>
      </div>
    </div>

    {/* Right Sidebar - Leave Request Details */}
    <div className="w-[380px] shrink-0 bg-white rounded-xl border border-hr-border shadow-sm flex flex-col h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase border border-orange-200">Pending Review</span>
          <button className="text-gray-400 hover:text-hr-title"><X className="w-5 h-5" /></button>
        </div>
        <h2 className="text-2xl font-bold text-hr-title mb-1">Leave Request</h2>
        <p className="text-xs text-hr-secondary mb-6">Submitted on May 12, 2024</p>

        {/* User Card */}
        <div className="flex items-center gap-4 mb-8">
          <img src="https://i.pravatar.cc/150?u=6" alt="Sarah" className="w-14 h-14 rounded-xl object-cover shadow-sm" />
          <div>
            <h3 className="font-bold text-hr-title text-base">Sarah Jenkins</h3>
            <p className="text-xs text-hr-secondary mb-1">Lead Developer • Engineering</p>
            <span className="inline-block px-2 py-0.5 border border-gray-200 text-[10px] font-medium text-gray-500 rounded bg-gray-50">Balance: 12 Days</span>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 border border-gray-200 rounded-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Start Date</p>
            <p className="font-bold text-hr-title text-sm">May 15, 2024</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">End Date</p>
            <p className="font-bold text-hr-title text-sm">May 16, 2024</p>
          </div>
        </div>

        {/* Reason */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Leave Type & Reason</p>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-red-500 rounded-full"></div>
            <span className="font-bold text-red-600 text-sm">Sick Leave (Medical)</span>
          </div>
          <p className="text-[13px] text-gray-600 italic leading-relaxed">
            "Persistent migraine and recommended rest by specialist. Medical certificate is attached below for verification."
          </p>
        </div>

        {/* Attachments */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Attachments (1)</p>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:border-[#0f766e] transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#f0fdfa] text-[#0f766e] rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-bold text-hr-title group-hover:text-[#0f766e] transition-colors">medical_cert_jenkins.pdf</p>
                <p className="text-[10px] text-hr-secondary">2.4 MB • PDF Document</p>
              </div>
            </div>
            <Download className="w-4 h-4 text-gray-400 group-hover:text-[#0f766e]" />
          </div>
        </div>

        {/* Approval History */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Approval History</p>
          <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:w-px before:h-full before:bg-gray-100">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center border-2 border-white shadow-sm z-10">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-xs font-bold text-hr-title mb-0.5">Employee Submitted</p>
              <p className="text-[10px] text-hr-secondary">Sarah Jenkins • May 12, 10:45 AM</p>
            </div>
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-white border-[1.5px] border-dashed border-[#0f766e] flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f766e]"></div>
              </div>
              <p className="text-xs font-bold text-[#0f766e] mb-0.5">Department Lead Approval</p>
              <p className="text-[10px] text-hr-secondary">Marcus Thorne • Awaiting Review</p>
            </div>
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-white border-[1.5px] border-dashed border-gray-300 flex items-center justify-center z-10">
              </div>
              <p className="text-xs font-bold text-gray-400 mb-0.5">HR Final Verification</p>
              <p className="text-[10px] text-gray-400">TBD</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-100 bg-white mt-auto flex gap-3">
        <button className="flex-1 py-3 bg-[#ef4444] text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-colors">Reject Request</button>
        <button className="flex-1 py-3 bg-[#14b8a6] text-white rounded-lg text-sm font-bold hover:bg-[#0f766e] transition-colors">Approve Leave</button>
      </div>
    </div>
  </div>
);

const LeaveManagement = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold text-hr-title">Leave Management</h1>
        <p className="text-sm text-hr-secondary mt-1">Overview and tracking of employee absence requests.</p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2.5 bg-[#14b8a6] text-white rounded-lg text-sm font-bold hover:bg-[#0f766e] transition-colors shadow-sm">
        <span className="text-lg leading-none">+</span>
        Apply for Leave
      </button>
    </div>

    {/* Top Cards */}
    <div className="grid grid-cols-4 gap-4">
      {/* Remaining Leave */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
        <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0f766e] flex items-center justify-center mb-4">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-hr-secondary uppercase tracking-wider mb-2">Remaining Leave</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-hr-title">12</h3>
            <span className="text-sm font-medium text-hr-secondary mb-1">Days</span>
          </div>
        </div>
      </div>

      {/* Pending Requests */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between relative">
        <div className="absolute top-6 right-6">
          <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">+3 today</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
          <p className="text-xs font-bold text-hr-secondary uppercase tracking-wider mb-2">Pending Requests</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-hr-title">08</h3>
            <span className="text-sm font-medium text-hr-secondary mb-1">Requests</span>
          </div>
        </div>
      </div>

      {/* Approved Requests */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
        <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-hr-secondary uppercase tracking-wider mb-2">Approved Requests</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-hr-title">45</h3>
            <span className="text-sm font-medium text-hr-secondary mb-1">This month</span>
          </div>
        </div>
      </div>

      {/* Rejected Requests */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
        </div>
        <div>
          <p className="text-xs font-bold text-hr-secondary uppercase tracking-wider mb-2">Rejected Requests</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-hr-title">02</h3>
            <span className="text-sm font-medium text-hr-secondary mb-1">Declined</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main Table Area */}
    <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden flex flex-col">
      {/* Filters & Header Controls */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50 bg-white">
            All Leave Types <ChevronDown className="w-4 h-4 text-hr-secondary" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50 bg-white">
            All Status <ChevronDown className="w-4 h-4 text-hr-secondary" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm text-hr-secondary">
          <span>Showing 1-10 of 124 requests</span>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 bg-white"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50 bg-white"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50/50 text-hr-secondary font-bold text-sm border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-bold text-hr-title">Employee</th>
              <th className="px-6 py-4 font-bold text-hr-title">Leave Type</th>
              <th className="px-6 py-4 font-bold text-hr-title">Start Date</th>
              <th className="px-6 py-4 font-bold text-hr-title">End Date</th>
              <th className="px-6 py-4 font-bold text-hr-title">Duration</th>
              <th className="px-6 py-4 font-bold text-hr-title">Approver</th>
              <th className="px-6 py-4 font-bold text-hr-title">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {/* Row 1 */}
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=7" alt="Marcus Finn" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-hr-title">Marcus Finn</p>
                    <p className="text-xs text-hr-secondary">Lead Designer</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-hr-title font-medium">Annual Leave</td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 12,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 15,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">3 Days</td>
              <td className="px-6 py-4 text-hr-title font-medium">Jane<br/><span className="text-hr-secondary text-xs font-normal">Cooper</span></td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 font-bold text-xs rounded-full">Pending</span>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=8" alt="Leslie Alexander" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-hr-title">Leslie Alexander</p>
                    <p className="text-xs text-hr-secondary">Marketing Lead</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-hr-title font-medium">Sick Leave</td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 10,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 11,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">1 Day</td>
              <td className="px-6 py-4 text-hr-title font-medium">Hang Minh<br/><span className="text-hr-secondary text-xs font-normal">N.</span></td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 font-bold text-xs rounded-full">Approved</span>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">JD</div>
                  <div>
                    <p className="font-bold text-hr-title">Jacob Dorsey</p>
                    <p className="text-xs text-hr-secondary">Backend Developer</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-hr-title font-medium">Maternity Leave</td>
              <td className="px-6 py-4 text-hr-title font-medium">Sep 25,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">Dec 25,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">90 Days</td>
              <td className="px-6 py-4 text-hr-title font-medium">Guy<br/><span className="text-hr-secondary text-xs font-normal">Hawkins</span></td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 font-bold text-xs rounded-full">Approved</span>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=9" alt="Robert Fox" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-hr-title">Robert Fox</p>
                    <p className="text-xs text-hr-secondary">Project Manager</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-hr-title font-medium">Annual Leave</td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 18,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 20,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">2 Days</td>
              <td className="px-6 py-4 text-hr-title font-medium">Jane<br/><span className="text-hr-secondary text-xs font-normal">Cooper</span></td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-red-50 text-red-600 font-bold text-xs rounded-full">Rejected</span>
              </td>
            </tr>
            {/* Row 5 */}
            <tr className="hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/150?u=10" alt="Cody Fisher" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-hr-title">Cody Fisher</p>
                    <p className="text-xs text-hr-secondary">Accountant</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-hr-title font-medium">Personal Leave</td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 05,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">Oct 05,<br/><span className="text-hr-secondary text-xs font-normal">2023</span></td>
              <td className="px-6 py-4 text-hr-title font-medium">1 Day</td>
              <td className="px-6 py-4 text-hr-title font-medium">Hang Minh<br/><span className="text-hr-secondary text-xs font-normal">N.</span></td>
              <td className="px-6 py-4">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 font-bold text-xs rounded-full">Approved</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/30">
        <span className="text-xs text-hr-secondary">Page 1 of 13</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 text-hr-title text-xs font-medium rounded hover:bg-gray-50">Previous</button>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#14b8a6] text-white text-xs font-medium">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-title bg-white hover:bg-gray-50 text-xs font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-hr-title bg-white hover:bg-gray-50 text-xs font-medium">3</button>
          </div>
          <button className="px-4 py-2 bg-white border border-gray-200 text-hr-title text-xs font-medium rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  </div>
);

export const TimesheetModule = ({ activeTab }: TimesheetModuleProps) => {
  switch (activeTab) {
    case 'overview':
      return <Overview />;
    case 'attendance':
      return <Attendance />;
    case 'leave-calendar':
      return <LeaveCalendar />;
    case 'leave-management':
      return <LeaveManagement />;
    default:
      return <Overview />;
  }
};
