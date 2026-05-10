import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.timesheet': 'Timesheet',
    'nav.staffs': 'Staffs',
    'nav.hiring': 'Hiring',
    'nav.payrolls': 'Payrolls',
    'nav.reports': 'Reports',
    'nav.aicenter': 'AI Center',
    'nav.settings': 'Settings',
    // Tabs
    'tab.overview': 'Overview',
    'tab.attendance': 'Attendance',
    'tab.leave-calendar': 'Leave Calendar',
    'tab.leave-management': 'Leave Management',
    'tab.staff-list': 'Staff List',
    'tab.recruitment-ats': 'Recruitment ATS',
    'tab.interview-calendar': 'Interview Calendar',
    'tab.payroll-overview': 'Payroll Overview',
    'tab.ai-hub': 'AI Hub',
    'tab.ai-recruitment': 'AI Recruitment',
    'tab.general': 'General',
    'tab.audit-logs': 'Audit Logs',
    'tab.security-settings': 'Security Settings',
    // Settings strings
    'setting.general': 'General Settings',
    'setting.language': 'Language',
    'setting.language.desc': 'Choose your preferred language for the interface.',
  },
  vi: {
    'nav.dashboard': 'Bảng điều khiển',
    'nav.timesheet': 'Chấm công',
    'nav.staffs': 'Nhân viên',
    'nav.hiring': 'Tuyển dụng',
    'nav.payrolls': 'Lương thưởng',
    'nav.reports': 'Báo cáo',
    'nav.aicenter': 'Trung tâm AI',
    'nav.settings': 'Cài đặt',
    // Tabs
    'tab.overview': 'Tổng quan',
    'tab.attendance': 'Chấm công',
    'tab.leave-calendar': 'Lịch nghỉ phép',
    'tab.leave-management': 'Quản lý nghỉ phép',
    'tab.staff-list': 'Danh sách nhân viên',
    'tab.recruitment-ats': 'Tuyển dụng ATS',
    'tab.interview-calendar': 'Lịch phỏng vấn',
    'tab.payroll-overview': 'Tổng quan lương',
    'tab.ai-hub': 'AI Hub',
    'tab.ai-recruitment': 'Tuyển dụng AI',
    'tab.general': 'Cài đặt chung',
    'tab.audit-logs': 'Nhật ký hệ thống',
    'tab.security-settings': 'Cài đặt bảo mật',
    // Settings strings
    'setting.general': 'Cài đặt chung',
    'setting.language': 'Ngôn ngữ',
    'setting.language.desc': 'Chọn ngôn ngữ giao diện của bạn.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
