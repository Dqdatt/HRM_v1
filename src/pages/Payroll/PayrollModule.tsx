import { Calendar as CalendarIcon, Download, Lock, Filter, CheckCircle2, Clock, Wallet, ChevronLeft, ChevronRight, Search, FileText, Printer, DownloadCloud, X } from 'lucide-react';
import { useState } from 'react';

interface PayrollModuleProps {
  activeTab: string;
}

const PayrollOverview = ({ onSelectEmployee }: { onSelectEmployee: (emp: any) => void }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-hr-title">Payroll Overview</h1>
          <p className="text-sm text-hr-secondary mt-1">Manage and process employee salaries for the current period.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50 transition-colors">
            <CalendarIcon className="w-4 h-4 text-gray-500" />
            October 2023
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 text-gray-500" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#14b8a6] text-white rounded-lg text-sm font-bold hover:bg-[#0f766e] transition-colors shadow-sm">
            <Lock className="w-4 h-4" />
            Lock Payroll
          </button>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-4">
        {/* Total Payroll */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Payroll</p>
            <div className="w-8 h-8 rounded-lg bg-[#f0fdfa] text-[#0f766e] flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">$124,500.00</h3>
            <span className="text-[11px] font-bold text-green-600 flex items-center gap-1">
              <span className="text-[14px]">↗</span> 4.5% vs last month
            </span>
          </div>
        </div>

        {/* Pending Payroll */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Pending Payroll</p>
            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
              <CalendarIcon className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">$12,400.00</h3>
            <p className="text-[11px] text-hr-secondary">12 employees waiting</p>
          </div>
        </div>

        {/* Processed Payroll */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Processed Payroll</p>
            <div className="w-8 h-8 rounded-lg bg-green-50 text-green-500 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">$112,100.00</h3>
            <p className="text-[11px] text-hr-secondary">92% of total target</p>
          </div>
        </div>

        {/* OT Cost */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">OT Cost</p>
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-hr-title mb-2">$5,240.00</h3>
            <span className="text-[11px] font-bold text-red-500 flex items-center gap-1">
              <span className="text-[14px]">↗</span> 12% increase
            </span>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden flex flex-col">
        {/* Table Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-hr-title text-sm">Employee Payroll List</h3>
            <span className="px-2 py-0.5 bg-gray-200 text-gray-600 rounded text-[10px] font-bold">156 Total</span>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-hr-title hover:bg-gray-50 bg-white">
              <Download className="w-3.5 h-3.5" /> Export Excel
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-hr-title hover:bg-gray-50 bg-white">
              <Wallet className="w-3.5 h-3.5" /> Bank Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-gray-400 font-bold uppercase tracking-wider text-[9px] border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4 text-right">Base</th>
                <th className="px-6 py-4 text-right">Allowance</th>
                <th className="px-6 py-4 text-right">KPI</th>
                <th className="px-6 py-4 text-right">OT</th>
                <th className="px-6 py-4 text-right">Deduction</th>
                <th className="px-6 py-4 text-right">PIT/Tax</th>
                <th className="px-6 py-4 text-right">Net Salary</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Alex Danver', id: 'E-00124', dept: 'Engineering', base: '$4,500', allowance: '$250', kpi: '$800', ot: '$120', ded: '($45)', tax: '$420', net: '$5,205', status: 'Paid', statusColor: 'bg-green-50 text-green-600', avatar: '13' },
                { name: 'James Smith', id: 'E-00125', dept: 'Product Design', base: '$3,800', allowance: '$200', kpi: '$500', ot: '$0', ded: '$0', tax: '$310', net: '$4,190', status: 'Approved', statusColor: 'bg-[#f0fdfa] text-[#0f766e]', avatar: '14' },
                { name: 'Maria Rodriguez', id: 'E-00128', dept: 'Marketing', base: '$3,200', allowance: '$150', kpi: '$400', ot: '$80', ded: '($120)', tax: '$220', net: '$3,490', status: 'Pending', statusColor: 'bg-orange-50 text-orange-600', avatar: '15' },
                { name: 'Kevin Brown', id: 'E-00130', dept: 'Finance', base: '$6,200', allowance: '$500', kpi: '$1,200', ot: '$0', ded: '$0', tax: '$890', net: '$7,010', status: 'Draft', statusColor: 'bg-gray-100 text-gray-500', avatar: '16' },
                { name: 'Lucas White', id: 'E-00132', dept: 'Engineering', base: '$4,100', allowance: '$250', kpi: '$450', ot: '$240', ded: '$0', tax: '$380', net: '$4,660', status: 'Paid', statusColor: 'bg-green-50 text-green-600', avatar: '17' },
              ].map((emp, i) => (
                <tr 
                  key={i} 
                  onClick={() => onSelectEmployee(emp)}
                  className="hover:bg-gray-50/50 transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/150?u=${emp.avatar}`} alt={emp.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-bold text-hr-title text-sm group-hover:text-[#0f766e] transition-colors">{emp.name}</p>
                        <p className="text-[10px] text-hr-secondary">{emp.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-hr-secondary">{emp.dept}</td>
                  <td className="px-6 py-3 text-right font-bold text-hr-title">{emp.base}</td>
                  <td className="px-6 py-3 text-right text-hr-secondary">{emp.allowance}</td>
                  <td className="px-6 py-3 text-right text-hr-secondary">{emp.kpi}</td>
                  <td className="px-6 py-3 text-right text-hr-secondary">{emp.ot}</td>
                  <td className="px-6 py-3 text-right text-red-500 font-medium">{emp.ded}</td>
                  <td className="px-6 py-3 text-right text-hr-secondary">{emp.tax}</td>
                  <td className="px-6 py-3 text-right font-bold text-hr-title text-sm">{emp.net}</td>
                  <td className="px-6 py-3 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${emp.statusColor}`}>
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/30">
          <span className="text-[11px] text-hr-secondary">Showing <span className="font-bold text-hr-title">1-10</span> of <span className="font-bold text-hr-title">156</span> results</span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white"><ChevronLeft className="w-3.5 h-3.5" /></button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-[#0f766e] bg-[#0f766e] text-white text-xs font-medium">1</button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white text-xs font-medium">2</button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white text-xs font-medium">3</button>
            <span className="w-7 h-7 flex items-center justify-center text-hr-secondary text-xs">...</span>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white text-xs font-medium">16</button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-hr-secondary hover:bg-gray-50 bg-white"><ChevronRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronDown = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);

const PayrollDetail = ({ employee, onBack }: { employee: any, onBack: () => void }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <nav className="flex items-center gap-2 text-[11px] mb-2">
            <span className="text-hr-secondary cursor-pointer hover:text-hr-title" onClick={onBack}>Payrolls</span>
            <span className="text-gray-300">›</span>
            <span className="text-hr-secondary cursor-pointer hover:text-hr-title">June 2024</span>
            <span className="text-gray-300">›</span>
            <span className="text-[#0f766e] font-medium">{employee.name}</span>
          </nav>
          <h1 className="text-2xl font-bold text-hr-title">Payroll Detail: {employee.name}</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50 transition-colors shadow-sm">
            <X className="w-4 h-4" /> Reject
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0f766e] text-white rounded-lg text-sm font-bold hover:bg-hr-title transition-colors shadow-sm">
            <CheckCircle2 className="w-4 h-4" /> Approve Payroll
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column - Details */}
        <div className="space-y-6">
          {/* User Card */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src={`https://i.pravatar.cc/150?u=${employee.avatar}`} alt={employee.name} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-bold text-hr-title">{employee.name}</h2>
                <p className="text-xs text-hr-secondary mb-1">Senior Product Designer • Design Department</p>
                <div className="flex gap-4 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">✉ alex.j@hrment.corp</span>
                  <span className="flex items-center gap-1">🆔 EMP-9402</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-orange-50 text-orange-500 font-bold text-[10px] rounded-full uppercase tracking-wider mb-2 border border-orange-100">
                • Pending Approval
              </span>
              <p className="text-[10px] text-hr-secondary">Period: June 01 - June 30, 2024</p>
            </div>
          </div>

          {/* Earnings */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-hr-title text-base">Earnings Breakdown</h3>
              <span className="font-bold text-[#0f766e] text-base">$6,450.00</span>
            </div>
            <table className="w-full text-xs text-left">
              <thead className="text-gray-400 font-bold uppercase tracking-wider text-[9px] border-b border-gray-100">
                <tr>
                  <th className="pb-3">Description</th>
                  <th className="pb-3 text-right">Calculation</th>
                  <th className="pb-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="py-4 text-hr-title font-medium">Base Salary</td>
                  <td className="py-4 text-right text-gray-500">Fixed monthly</td>
                  <td className="py-4 text-right font-bold text-hr-title">$5,200.00</td>
                </tr>
                <tr>
                  <td className="py-4 text-hr-title font-medium">Housing Allowance</td>
                  <td className="py-4 text-right text-gray-500">10% of Base</td>
                  <td className="py-4 text-right font-bold text-hr-title">$520.00</td>
                </tr>
                <tr>
                  <td className="py-4 text-hr-title font-medium">Transport Allowance</td>
                  <td className="py-4 text-right text-gray-500">Flat rate</td>
                  <td className="py-4 text-right font-bold text-hr-title">$150.00</td>
                </tr>
                <tr>
                  <td className="py-4 text-hr-title font-medium">KPI Bonus</td>
                  <td className="py-4 text-right text-gray-500">Q2 Performance</td>
                  <td className="py-4 text-right font-bold text-hr-title">$450.00</td>
                </tr>
                <tr>
                  <td className="py-4 text-hr-title font-medium">Overtime (OT)</td>
                  <td className="py-4 text-right text-gray-500">8.5 hrs x $15.3</td>
                  <td className="py-4 text-right font-bold text-hr-title">$130.05</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deductions */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-hr-title text-base">Deductions & Statutory</h3>
              <span className="font-bold text-hr-title text-base">-$842.15</span>
            </div>
            <table className="w-full text-xs text-left">
              <thead className="text-gray-400 font-bold uppercase tracking-wider text-[9px] border-b border-gray-100">
                <tr>
                  <th className="pb-3">Description</th>
                  <th className="pb-3 text-right">Rate</th>
                  <th className="pb-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr>
                  <td className="py-4 text-hr-title font-medium">Social Insurance (BHXH)</td>
                  <td className="py-4 text-right text-gray-500">8.0%</td>
                  <td className="py-4 text-right font-bold text-hr-title">$416.00</td>
                </tr>
                <tr>
                  <td className="py-4 text-hr-title font-medium">Health Insurance</td>
                  <td className="py-4 text-right text-gray-500">1.5%</td>
                  <td className="py-4 text-right font-bold text-hr-title">$78.00</td>
                </tr>
                <tr>
                  <td className="py-4 text-hr-title font-medium">Personal Income Tax (PIT)</td>
                  <td className="py-4 text-right text-gray-500">Progressive</td>
                  <td className="py-4 text-right font-bold text-hr-title">$348.15</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Audit Log */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
            <h3 className="font-bold text-hr-title text-sm mb-6">Audit Log & Approval History</h3>
            <div className="relative pl-6 space-y-6 before:absolute before:inset-0 before:ml-[11px] before:w-px before:h-full before:bg-gray-100">
              <div className="relative">
                <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-white border-2 border-[#0f766e] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#0f766e]"></div>
                </div>
                <p className="text-xs font-bold text-hr-title mb-0.5">Payroll Drafted by System</p>
                <p className="text-[10px] text-hr-secondary mb-3">Jun 25, 2024 • 09:12 AM</p>
                <div className="p-3 bg-gray-50 rounded-lg text-xs text-gray-500 italic border border-gray-100">
                  Automated generation based on June timesheet and contract terms.
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-white border-2 border-[#0f766e] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#0f766e]"></div>
                </div>
                <p className="text-xs font-bold text-hr-title mb-0.5">KPI Verified by Manager</p>
                <p className="text-[10px] text-hr-secondary">Jun 26, 2024 • 02:45 PM by <span className="font-bold text-hr-title">Sarah Connor</span></p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-white border-2 border-[#0f766e] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#0f766e]"></div>
                </div>
                <p className="text-xs font-bold text-hr-title mb-0.5">Deductions Adjusted by HR</p>
                <p className="text-[10px] text-hr-secondary mb-1">Jun 27, 2024 • 11:30 AM by <span className="font-bold text-hr-title">Hang Minh Nguyen</span></p>
                <p className="text-xs text-gray-500">Adjustment: Updated PIT based on new tax relief certificate.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] w-5 h-5 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center z-10 shadow-[0_0_0_4px_#fff7ed]">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
                <p className="text-xs font-bold text-orange-500 mb-0.5">Awaiting Final Approval</p>
                <p className="text-[10px] text-hr-secondary">Current State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - PDF Viewer Mock */}
        <div className="bg-[#cbd5e1] rounded-xl flex flex-col overflow-hidden border border-gray-300 shadow-inner">
          {/* PDF Toolbar */}
          <div className="bg-white p-3 border-b border-gray-200 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <FileText className="w-4 h-4 text-gray-400" />
              payslip_june_ajohnston.pdf
            </div>
            <div className="flex gap-2">
              <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Search className="w-4 h-4" /></button>
              <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Printer className="w-4 h-4" /></button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-[#e0f2fe] text-[#0369a1] rounded text-xs font-bold hover:bg-[#bae6fd] transition-colors">
                <DownloadCloud className="w-3.5 h-3.5" /> Download PDF
              </button>
            </div>
          </div>
          
          {/* PDF Content Area */}
          <div className="flex-1 p-8 overflow-y-auto flex justify-center">
            <div className="bg-white w-full max-w-[450px] min-h-[650px] shadow-lg p-10 flex flex-col">
              <div className="flex justify-between items-start mb-10 border-b border-gray-200 pb-6">
                <div>
                  <h1 className="text-2xl font-black text-hr-title tracking-tight mb-1">hrment.</h1>
                  <p className="text-[9px] text-gray-400 italic">Corporate Payroll Solutions</p>
                  <div className="text-[8px] text-gray-400 mt-4 leading-relaxed">
                    123 Business Ave, Suite 500<br/>Singapore 018983
                  </div>
                </div>
                <div className="text-right">
                  <h2 className="text-[15px] font-bold text-gray-300 tracking-[0.2em] mb-2">PAYSLIP</h2>
                  <p className="text-[10px] font-bold text-hr-title mb-1">MONTH: JUNE 2024</p>
                  <p className="text-[8px] text-gray-400">Issued: June 28, 2024</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-[8px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Employee Information</h3>
                  <p className="text-xs font-bold text-hr-title mb-1">{employee.name}</p>
                  <p className="text-[9px] text-gray-500 mb-0.5">Employee ID: {employee.id || 'EMP-9402'}</p>
                  <p className="text-[9px] text-gray-500">Department: {employee.dept || 'Product Design'}</p>
                </div>
                <div className="text-right">
                  <h3 className="text-[8px] font-bold text-gray-400 tracking-wider mb-2 uppercase">Payment Information</h3>
                  <p className="text-xs font-bold text-hr-title mb-1">DBS Bank Ltd.</p>
                  <p className="text-[9px] text-gray-500 mb-0.5">Acc No: ****5678</p>
                  <p className="text-[9px] text-gray-500">Status: <span className="text-orange-500 font-medium">Pending Approval</span></p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between border-b-2 border-gray-800 pb-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase">Earnings</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase">Amount</span>
                </div>
                <div className="space-y-2 text-[10px] text-gray-600 mb-4 border-b border-gray-100 pb-4">
                  <div className="flex justify-between"><span className="text-hr-title">Base Salary</span><span>$5,200.00</span></div>
                  <div className="flex justify-between"><span className="text-hr-title">Housing Allowance</span><span>$520.00</span></div>
                  <div className="flex justify-between"><span className="text-hr-title">Transport Allowance</span><span>$150.00</span></div>
                  <div className="flex justify-between"><span className="text-hr-title">KPI Bonus</span><span>$450.00</span></div>
                  <div className="flex justify-between"><span className="text-hr-title">Overtime Pay</span><span>$130.05</span></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-hr-title">
                  <span>TOTAL GROSS</span>
                  <span>$6,450.05</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between border-b-2 border-gray-800 pb-2 mb-3 mt-6">
                  <span className="text-[10px] font-bold tracking-wider uppercase">Deductions</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase">Amount</span>
                </div>
                <div className="space-y-2 text-[10px] text-gray-600 mb-4 border-b border-gray-100 pb-4">
                  <div className="flex justify-between"><span className="text-hr-title">Social Insurance (8%)</span><span>$416.00</span></div>
                  <div className="flex justify-between"><span className="text-hr-title">Health Insurance (1.5%)</span><span>$78.00</span></div>
                  <div className="flex justify-between"><span className="text-hr-title">Personal Income Tax</span><span>$348.15</span></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-hr-title">
                  <span>TOTAL DEDUCTIONS</span>
                  <span>$842.15</span>
                </div>
              </div>

              <div className="mt-auto bg-gray-50 p-4 border border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-hr-title uppercase tracking-widest">Net Pay</span>
                  <span className="text-xl font-black text-hr-title border-b-2 border-hr-title pb-1">$5,607.90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PayrollModule = ({ activeTab }: PayrollModuleProps) => {
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  if (selectedEmployee) {
    return <PayrollDetail employee={selectedEmployee} onBack={() => setSelectedEmployee(null)} />;
  }

  return <PayrollOverview onSelectEmployee={setSelectedEmployee} />;
};
