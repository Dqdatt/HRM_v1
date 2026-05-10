import { Search, Calendar, Filter, Download, Monitor, Smartphone, X, Shield, Plus, Printer, RefreshCw, ChevronDown, Globe, BrainCircuit } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface SettingModuleProps {
  activeTab: string;
}

const AuditLogs = () => (
  <div className="space-y-6">
    {/* Header & Controls */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-hr-title">Audit Logs & Security</h1>
        <span className="text-[10px] font-bold tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full uppercase border border-gray-200">Admin Console</span>
      </div>
    </div>

    <div className="flex gap-4 mb-6 bg-white p-3 rounded-xl border border-hr-border shadow-sm">
      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input type="text" placeholder="Search by user, action, or module..." className="bg-transparent border-none outline-none text-sm w-full" />
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-100 transition-colors">
        <Calendar className="w-4 h-4 text-gray-500" />
        Last 24 Hours
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-100 transition-colors">
        <Filter className="w-4 h-4 text-gray-500" />
        All Modules
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-[#0f766e] text-white rounded-lg text-sm font-bold hover:bg-hr-title transition-colors shadow-sm">
        <Download className="w-4 h-4" />
        Export Logs
      </button>
    </div>

    <div className="flex gap-6">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        {/* Recent Activity Logs */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-hr-title">
              <RefreshCw className="w-4 h-4" />
              <h3 className="font-bold text-[15px]">Recent Activity Logs</h3>
            </div>
            <span className="text-[11px] text-hr-secondary">Showing 1,248 entries</span>
          </div>
          
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50/50 text-gray-400 font-bold tracking-wider text-[10px] uppercase border-b border-gray-100">
              <tr>
                <th className="px-5 py-3">Timestamp</th>
                <th className="px-5 py-3">User</th>
                <th className="px-5 py-3">Action</th>
                <th className="px-5 py-3">Module</th>
                <th className="px-5 py-3">IP Address</th>
                <th className="px-5 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer bg-[#f0fdfa]/30">
                <td className="px-5 py-4 text-hr-title font-medium">2023-11-24 14:22:11</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-[10px]">MH</div>
                    <span className="font-bold text-hr-title">M. Holloway</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-hr-secondary">Update Payroll Grade</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-bold tracking-wider uppercase">Finance</span>
                </td>
                <td className="px-5 py-4 text-gray-400 font-mono text-[11px]">192.168.1.45</td>
                <td className="px-5 py-4 text-center">
                  <span className="px-2 py-1 bg-green-50 text-green-600 font-bold text-[10px] rounded uppercase tracking-wider">Success</span>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                <td className="px-5 py-4 text-hr-title font-medium">2023-11-24 14:18:05</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-[10px]">SC</div>
                    <span className="font-bold text-hr-title">S. Chen</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-hr-secondary">Revoke API Key</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-bold tracking-wider uppercase">Security</span>
                </td>
                <td className="px-5 py-4 text-gray-400 font-mono text-[11px]">10.0.4.112</td>
                <td className="px-5 py-4 text-center">
                  <span className="px-2 py-1 bg-green-50 text-green-600 font-bold text-[10px] rounded uppercase tracking-wider">Success</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                <td className="px-5 py-4 text-hr-title font-medium">2023-11-24 13:55:42</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-[10px]">AL</div>
                    <span className="font-bold text-hr-title">A. Lopez</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-hr-secondary">Delete Staff Record</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-bold tracking-wider uppercase">Staffs</span>
                </td>
                <td className="px-5 py-4 text-gray-400 font-mono text-[11px]">172.16.25.4</td>
                <td className="px-5 py-4 text-center">
                  <span className="px-2 py-1 bg-red-50 text-red-500 font-bold text-[10px] rounded uppercase tracking-wider">Failed</span>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                <td className="px-5 py-4 text-hr-title font-medium">2023-11-24 13:42:19</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center text-[10px]">BD</div>
                    <span className="font-bold text-hr-title">B. Davis</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-hr-secondary">Bulk Upload CSV</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-bold tracking-wider uppercase">Payroll</span>
                </td>
                <td className="px-5 py-4 text-gray-400 font-mono text-[11px]">192.168.1.12</td>
                <td className="px-5 py-4 text-center">
                  <span className="px-2 py-1 bg-orange-50 text-orange-500 font-bold text-[10px] rounded uppercase tracking-wider">Warning</span>
                </td>
              </tr>
              {/* Row 5 */}
              <tr className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                <td className="px-5 py-4 text-hr-title font-medium">2023-11-24 13:10:01</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-[10px]">MH</div>
                    <span className="font-bold text-hr-title">M. Holloway</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-hr-secondary">System Login</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-bold tracking-wider uppercase">Auth</span>
                </td>
                <td className="px-5 py-4 text-gray-400 font-mono text-[11px]">192.168.1.45</td>
                <td className="px-5 py-4 text-center">
                  <span className="px-2 py-1 bg-green-50 text-green-600 font-bold text-[10px] rounded uppercase tracking-wider">Success</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Active User Sessions */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-hr-title">
              <svg className="w-5 h-5 text-[#0f766e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <h3 className="font-bold text-[15px]">Active User Sessions</h3>
            </div>
            <button className="text-xs font-bold text-red-500 hover:text-red-700">Revoke All Others</button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-green-100 bg-green-50/30">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-200">
                  <Monitor className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-hr-title text-sm">MacBook Pro 16" - London, UK</p>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[9px] font-bold tracking-wider uppercase">This Device</span>
                  </div>
                  <p className="text-[11px] text-hr-secondary">Chrome 119.0.0.0 • 192.168.1.45</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-500">Started: 2h ago</p>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-200">
                  <Smartphone className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-hr-title text-sm">iPhone 15 Pro - Manchester, UK</p>
                  </div>
                  <p className="text-[11px] text-hr-secondary">HRment App v4.2 • 82.15.22.1</p>
                </div>
              </div>
              <button className="px-4 py-1.5 border border-gray-200 rounded text-[11px] font-bold text-red-500 hover:bg-red-50 hover:border-red-100 transition-colors">Revoke</button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Log Details */}
      <div className="w-[320px] shrink-0 flex flex-col gap-4">
        <div className="bg-white rounded-xl border border-hr-border shadow-sm flex flex-col h-full flex-1">
          <div className="p-5 border-b border-gray-100 flex justify-between items-start">
            <div>
              <h3 className="font-bold text-[15px] text-hr-title mb-1">Log Details</h3>
              <p className="text-[10px] font-mono text-gray-400 tracking-wider">ID: LOG-99812-AF01</p>
            </div>
            <button className="text-gray-400 hover:text-hr-title">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-5 flex-1 overflow-y-auto">
            <div className="space-y-4 mb-8 text-[13px]">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-hr-secondary">Action Type:</span>
                <span className="font-bold text-hr-title text-right">Update Record</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-hr-secondary">Performed By:</span>
                <span className="font-bold text-hr-title text-right">M. Holloway (Admin)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-hr-secondary">Timestamp:</span>
                <span className="font-bold text-hr-title text-right">Nov 24, 2023 14:22:11</span>
              </div>
            </div>

            <h4 className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-4">Attribute Changes</h4>
            <div className="space-y-4">
              {/* Field 1 */}
              <div className="p-4 rounded-xl border border-gray-100">
                <h5 className="text-xs font-bold text-hr-title mb-3">Base Salary</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase mb-1 block">From</span>
                    <div className="bg-red-50 text-red-500 text-xs font-medium py-1.5 px-3 rounded border border-red-100 line-through decoration-red-300">
                      $75,000
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase mb-1 block">To</span>
                    <div className="bg-green-50 text-green-600 text-xs font-medium py-1.5 px-3 rounded border border-green-100">
                      $82,000
                    </div>
                  </div>
                </div>
              </div>

              {/* Field 2 */}
              <div className="p-4 rounded-xl border border-gray-100">
                <h5 className="text-xs font-bold text-hr-title mb-3">Payroll Grade</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase mb-1 block">From</span>
                    <div className="bg-red-50 text-red-500 text-xs font-medium py-1.5 px-3 rounded border border-red-100 line-through decoration-red-300">
                      G-12
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase mb-1 block">To</span>
                    <div className="bg-green-50 text-green-600 text-xs font-medium py-1.5 px-3 rounded border border-green-100">
                      G-14
                    </div>
                  </div>
                </div>
              </div>

              {/* Field 3 */}
              <div className="p-4 rounded-xl border border-gray-100">
                <h5 className="text-xs font-bold text-hr-title mb-3">Approval Status</h5>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase mb-1 block">From</span>
                    <div className="bg-red-50 text-red-500 text-[10px] font-bold py-1.5 px-3 rounded border border-red-100 line-through decoration-red-300 uppercase tracking-wider text-center">
                      Pending
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 tracking-wider uppercase mb-1 block">To</span>
                    <div className="bg-green-50 text-green-600 text-[10px] font-bold py-1.5 px-3 rounded border border-green-100 uppercase tracking-wider text-center">
                      Approved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="w-full py-3 bg-gray-200 text-gray-600 rounded-lg text-[13px] font-bold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2">
          <Printer className="w-4 h-4" /> Download Audit Report
        </button>
      </div>
    </div>
  </div>
);

const SecuritySettings = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="flex justify-between items-center mb-2">
      <h1 className="text-2xl font-bold text-hr-title">Role & Permission Management</h1>
    </div>

    {/* Tabs */}
    <div className="flex bg-white rounded-lg p-1 border border-hr-border w-max shadow-sm mb-6">
      <button className="px-6 py-2 text-sm font-bold rounded-md bg-[#f0fdfa] text-[#0f766e] shadow-sm">Roles & Permissions</button>
      <button className="px-6 py-2 text-sm font-medium rounded-md text-hr-secondary hover:text-hr-title">Session Tracking</button>
      <button className="px-6 py-2 text-sm font-medium rounded-md text-hr-secondary hover:text-hr-title">2FA Settings</button>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="col-span-1 space-y-6">
        {/* Active Roles */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-hr-title text-[15px]">Active Roles</h3>
            <button className="text-xs font-bold text-[#0f766e] hover:text-[#115e59] flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" /> New Role
            </button>
          </div>
          <div className="space-y-2">
            <div className="bg-[#f0fdfa] border-l-4 border-l-[#0f766e] border border-[#ccfbf1] p-3 rounded-r-lg flex justify-between items-center cursor-pointer">
              <div>
                <p className="text-sm font-bold text-[#0f766e] mb-0.5">Admin</p>
                <p className="text-[10px] text-teal-600/70">Full System Access</p>
              </div>
              <span className="text-[11px] font-bold text-[#0f766e]">04 Users</span>
            </div>
            
            <div className="p-3 rounded-lg border border-transparent hover:bg-gray-50 flex justify-between items-center cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-bold text-hr-title mb-0.5">HR Manager</p>
                <p className="text-[10px] text-hr-secondary">People Operations</p>
              </div>
              <span className="text-[11px] font-medium text-gray-600">12 Users</span>
            </div>
            
            <div className="p-3 rounded-lg border border-transparent hover:bg-gray-50 flex justify-between items-center cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-bold text-hr-title mb-0.5">Leader</p>
                <p className="text-[10px] text-hr-secondary">Team Management</p>
              </div>
              <span className="text-[11px] font-medium text-gray-600">35 Users</span>
            </div>

            <div className="p-3 rounded-lg border border-transparent hover:bg-gray-50 flex justify-between items-center cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-bold text-hr-title mb-0.5">Accountant</p>
                <p className="text-[10px] text-hr-secondary">Payroll & Finance</p>
              </div>
              <span className="text-[11px] font-medium text-gray-600">03 Users</span>
            </div>

            <div className="p-3 rounded-lg border border-transparent hover:bg-gray-50 flex justify-between items-center cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-bold text-hr-title mb-0.5">Employee</p>
                <p className="text-[10px] text-hr-secondary">Standard Self-Service</p>
              </div>
              <span className="text-[11px] font-medium text-gray-600">248 Users</span>
            </div>
          </div>
        </div>

        {/* Security Health */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-5">
          <h3 className="font-bold text-hr-title text-[15px] mb-4">Security Health</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-hr-secondary">2FA Compliance</span>
                <span className="font-bold text-green-500">98%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-hr-secondary">Role Overlap</span>
                <span className="font-bold text-orange-500">12%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-400 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Column */}
      <div className="col-span-2 space-y-6">
        {/* Permission Matrix */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden flex flex-col">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-[15px] text-hr-title">Permission Matrix: <span className="text-[#0f766e]">Admin</span></h3>
              <p className="text-[11px] text-gray-400 mt-1">Define granular access controls for each module</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-hr-title hover:bg-gray-50">Discard</button>
              <button className="px-4 py-2 bg-[#14b8a6] text-white rounded-lg text-xs font-bold hover:bg-[#0f766e] shadow-sm">Save Changes</button>
            </div>
          </div>
          
          <table className="w-full text-left text-[13px]">
            <thead className="bg-gray-50/50 text-gray-500 font-bold tracking-wider text-[9px] uppercase border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Module Name</th>
                <th className="px-6 py-4 text-center">View</th>
                <th className="px-6 py-4 text-center">Create</th>
                <th className="px-6 py-4 text-center">Edit</th>
                <th className="px-6 py-4 text-center">Delete</th>
                <th className="px-6 py-4 text-center">Export</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Employee Management', perms: [true, true, true, true, true] },
                { name: 'Payroll Processing', perms: [true, true, false, false, true] },
                { name: 'Leave Approval', perms: [true, true, true, true, false] },
                { name: 'Attendance Records', perms: [true, true, true, false, true] },
                { name: 'Recruitment Pipeline', perms: [true, true, true, true, true] },
              ].map((mod, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-hr-title text-sm">{mod.name}</td>
                  {mod.perms.map((isOn, j) => (
                    <td key={j} className="px-6 py-4 text-center">
                      <div className={`w-9 h-5 rounded-full inline-flex items-center px-0.5 cursor-pointer transition-colors ${isOn ? 'bg-[#14b8a6]' : 'bg-gray-200'}`}>
                        <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${isOn ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Role Hierarchy */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-6 h-64 flex flex-col relative overflow-hidden">
          <h3 className="font-bold text-[15px] text-hr-title mb-6">Role Hierarchy & Inheritance</h3>
          <div className="flex-1 relative flex justify-center pt-2">
            {/* Tree lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <path d="M 50% 10 L 50% 40 L 25% 40 L 25% 60" fill="none" stroke="#ccfbf1" strokeWidth="2" />
              <path d="M 50% 10 L 50% 40 L 75% 40 L 75% 60" fill="none" stroke="#ccfbf1" strokeWidth="2" />
              <path d="M 25% 90 L 25% 120" fill="none" stroke="#f1f5f9" strokeWidth="2" />
              <path d="M 75% 90 L 75% 120" fill="none" stroke="#f1f5f9" strokeWidth="2" />
            </svg>
            
            {/* Nodes */}
            <div className="absolute top-0 flex justify-center w-full z-10">
              <div className="bg-[#f0fdfa] border-2 border-[#0f766e] rounded-xl px-8 py-3 text-center shadow-sm">
                <p className="font-bold text-[#0f766e] text-sm mb-0.5">Admin</p>
                <p className="text-[8px] font-bold tracking-wider text-teal-600 uppercase">Master Root</p>
              </div>
            </div>

            <div className="absolute top-[80px] w-full flex justify-around z-10">
              <div className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-3 text-center shadow-sm ml-[-5%] w-40">
                <p className="font-bold text-hr-title text-sm mb-0.5">HR Manager</p>
                <p className="text-[8px] font-bold tracking-wider text-gray-400 uppercase">Ops Control</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-3 text-center shadow-sm mr-[-5%] w-40">
                <p className="font-bold text-hr-title text-sm mb-0.5">Leader</p>
                <p className="text-[8px] font-bold tracking-wider text-gray-400 uppercase">Team Control</p>
              </div>
            </div>

            <div className="absolute top-[160px] w-full flex justify-around z-10">
              <div className="bg-white border border-gray-100 rounded-xl px-8 py-3 text-center shadow-sm ml-[-5%] w-40">
                <p className="font-bold text-hr-title text-sm mb-0.5">Accountant</p>
                <p className="text-[8px] font-bold tracking-wider text-gray-400 uppercase">Financial View</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl px-8 py-3 text-center shadow-sm mr-[-5%] w-40">
                <p className="font-bold text-hr-title text-sm mb-0.5">Employee</p>
                <p className="text-[8px] font-bold tracking-wider text-gray-400 uppercase">Standard Restricted</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area - Spans all 3 cols */}
      <div className="col-span-3 grid grid-cols-2 gap-6 mt-2">
        {/* Global Session Tracking */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Monitor className="w-5 h-5 text-[#0f766e]" />
            <h3 className="font-bold text-[15px] text-hr-title">Global Session Tracking</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="bg-green-50/50 border border-green-100 rounded-xl p-4 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-hr-title text-sm mb-0.5">Main Office Terminal 04</h4>
                  <p className="text-[11px] text-hr-secondary">Chrome / Windows 11 • IP: 192.168.1.45</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 font-bold text-[9px] rounded uppercase tracking-wider">Active Now</span>
            </div>

            <div className="border border-gray-100 rounded-xl p-4 flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <h4 className="font-bold text-hr-title text-sm mb-0.5">HR Mobile App - iPhone 14</h4>
                  <p className="text-[11px] text-hr-secondary">iOS App • Last active 4h ago</p>
                </div>
              </div>
              <button className="text-xs font-bold text-red-500 hover:text-red-700">Revoke</button>
            </div>
          </div>
          
          <button className="w-full py-2.5 border border-red-200 text-red-500 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors">
            Logout of All Other Sessions
          </button>
        </div>

        {/* 2FA Authentication Policy */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-[#0f766e]" />
              <h3 className="font-bold text-[15px] text-hr-title">2FA Authentication Policy</h3>
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="font-bold text-hr-title text-[13px] mb-1">Enforce 2FA for all Privileged Roles</h4>
                <p className="text-[11px] text-gray-400">Applies to Admin, HR Manager, and Leader roles.</p>
              </div>
              <div className="w-10 h-6 rounded-full bg-[#14b8a6] flex items-center px-1 cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-white shadow-sm transform translate-x-4"></div>
              </div>
            </div>

            <p className="text-[11px] font-bold text-hr-title mb-3">Allowed Methods</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="border border-[#14b8a6] bg-[#f0fdfa] rounded-lg p-3 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-[#14b8a6] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#14b8a6]"></div>
                </div>
                <span className="text-xs font-medium text-hr-title">Authenticator App</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                <span className="text-xs font-medium text-hr-title">SMS Verification</span>
              </div>
              <div className="border border-[#14b8a6] bg-[#f0fdfa] rounded-lg p-3 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-[#14b8a6] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#14b8a6]"></div>
                </div>
                <span className="text-xs font-medium text-hr-title">Hardware Key (FIDO)</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                <span className="text-xs font-medium text-hr-title">Email OTP</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-4">
            <p className="text-[11px] text-gray-600 leading-relaxed">
              <span className="font-bold text-[#0f766e]">System Note:</span> Changes to 2FA policy will trigger a notification to all affected users and require re-authentication on their next login.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);



const GeneralSettings = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-hr-title">{t('setting.general')}</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Language Selection */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-6 flex flex-col h-min">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#f0fdfa] border border-[#ccfbf1] flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4 text-[#0f766e]" />
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-hr-title leading-none">{t('setting.language')}</h3>
              <p className="text-[11px] text-hr-secondary mt-1">{t('setting.language.desc')}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setLanguage('en')}
              className={`flex-1 py-2 px-3 rounded-lg border flex items-center justify-center gap-2 transition-colors ${language === 'en' ? 'border-[#0f766e] bg-[#f0fdfa] text-[#0f766e]' : 'border-gray-200 hover:border-[#0f766e] bg-white text-hr-title'}`}
            >
              <span className="text-lg">🇺🇸</span>
              <span className="text-sm font-bold">English</span>
            </button>

            <button 
              onClick={() => setLanguage('vi')}
              className={`flex-1 py-2 px-3 rounded-lg border flex items-center justify-center gap-2 transition-colors ${language === 'vi' ? 'border-[#0f766e] bg-[#f0fdfa] text-[#0f766e]' : 'border-gray-200 hover:border-[#0f766e] bg-white text-hr-title'}`}
            >
              <span className="text-lg">🇻🇳</span>
              <span className="text-sm font-bold">Tiếng Việt</span>
            </button>
          </div>
        </div>

        {/* AI Configuration */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-hr-title leading-none">AI Configuration</h3>
              <p className="text-[11px] text-hr-secondary mt-1">Manage your AI API keys and models</p>
            </div>
          </div>
          
          <div className="space-y-4 flex-1">
            <div>
              <label className="block text-xs font-bold text-hr-title mb-1.5">AI API Key</label>
              <input 
                type="password" 
                placeholder="sk-..." 
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0f766e] focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-hr-title mb-1.5">Model Selection</label>
              <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0f766e] focus:bg-white transition-colors">
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="claude-3-opus">Claude 3 Opus</option>
                <option value="gemini-pro">Gemini Pro</option>
              </select>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
            <button className="px-4 py-2 bg-[#0f766e] text-white text-sm font-bold rounded-lg shadow-sm hover:bg-[#115e59] transition-colors">
              Save AI Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SettingModule = ({ activeTab }: SettingModuleProps) => {
  switch (activeTab) {
    case 'general':
      return <GeneralSettings />;
    case 'audit-logs':
      return <AuditLogs />;
    case 'security-settings':
      return <SecuritySettings />;
    default:
      return <AuditLogs />;
  }
};
