export type ModuleId = 'dashboard' | 'timesheet' | 'staff' | 'hiring' | 'payroll' | 'reports' | 'aicenter' | 'settings';

export interface Tab {
  id: string;
  label: string;
}

export const MODULE_TABS: Record<ModuleId, Tab[]> = {
  dashboard: [],
  timesheet: [
    { id: 'overview', label: 'Overview' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'leave-calendar', label: 'Leave Calendar' },
    { id: 'leave-management', label: 'Leave Management' }
  ],
  staff: [
    { id: 'staff-list', label: 'Staff List' }
  ],
  hiring: [
    { id: 'recruitment-ats', label: 'Recruitment ATS' },
    { id: 'interview-calendar', label: 'Interview Calendar' }
  ],
  payroll: [
    { id: 'payroll-overview', label: 'Payroll Overview' }
  ],
  reports: [],
  aicenter: [
    { id: 'ai-hub', label: 'AI Hub' },
    { id: 'ai-recruitment', label: 'AI Recruitment' }
  ],
  settings: [
    { id: 'general', label: 'General' },
    { id: 'audit-logs', label: 'Audit Logs' },
    { id: 'security-settings', label: 'Security Settings' }
  ]
};
