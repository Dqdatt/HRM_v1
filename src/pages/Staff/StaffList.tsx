import { Search, Filter, MoreHorizontal } from 'lucide-react';

interface StaffListProps {
  onSelectStaff: (staffId: string) => void;
}

export const StaffList = ({ onSelectStaff }: StaffListProps) => {
  const staffData = [
    { id: 'SJ53862', name: 'Hang Minh Nguyen', role: 'UI - UX Designer', department: 'Product', status: 'Active' },
    { id: 'SJ53863', name: 'John Doe', role: 'Frontend Engineer', department: 'Engineering', status: 'Active' },
    { id: 'SJ53864', name: 'Jane Smith', role: 'Product Manager', department: 'Product', status: 'On Leave' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-hr-title">Staff List</h1>
        <button className="bg-hr-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-hr-primary transition-colors">
          + Add Staff
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl border border-hr-border flex gap-4 items-center shadow-sm">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search staff by name, ID..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-hr-accent transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="font-medium text-sm text-hr-title">Filters</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-hr-secondary uppercase text-[11px] font-bold tracking-wider">
            <tr>
              <th className="px-6 py-4">Employee</th>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {staffData.map((staff) => (
              <tr 
                key={staff.id} 
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onSelectStaff(staff.id)}
              >
                <td className="px-6 py-4 font-medium text-hr-title">{staff.name}</td>
                <td className="px-6 py-4 text-hr-secondary">{staff.id}</td>
                <td className="px-6 py-4 text-hr-title">{staff.role}</td>
                <td className="px-6 py-4 text-hr-secondary">{staff.department}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    staff.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {staff.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-gray-400">
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
