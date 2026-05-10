import { Edit3 } from 'lucide-react';

interface StaffDetailProps {
  onBack: () => void;
}

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-[16px] font-bold text-hr-title">{title}</h2>
    <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
      <Edit3 className="w-4 h-4 text-hr-secondary" />
    </button>
  </div>
);

const DetailItem = ({ label, value, fullWidth }: { label: string; value: string; fullWidth?: boolean }) => (
  <div className={fullWidth ? 'col-span-2' : ''}>
    <p className="text-[13px] text-hr-secondary mb-1">{label}</p>
    <p className="text-[14px] font-bold text-hr-primary">{value}</p>
  </div>
);

export const StaffDetail = ({ onBack }: StaffDetailProps) => {
  const tabs = [
    'Staff profile',
    'Work information',
    'Timesheet & Attendance',
    'Constructs & Documents',
    'Payroll & Benefits',
    'Company assets'
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm">
        <span className="text-hr-secondary cursor-pointer hover:text-hr-accent" onClick={onBack}>Staffs</span>
        <span className="text-hr-secondary">/</span>
        <span className="text-hr-secondary cursor-pointer hover:text-hr-accent" onClick={onBack}>Staff list</span>
        <span className="text-hr-secondary">/</span>
        <span className="text-hr-accent font-medium">Staff detail</span>
      </nav>

      {/* Navigation Tabs */}
      <div className="bg-hr-accent-bg p-1 rounded-[10px] flex gap-1 overflow-x-auto no-scrollbar">
        {tabs.map((tab, i) => (
          <button 
            key={tab}
            className={`px-6 py-2 rounded-lg text-[13px] whitespace-nowrap transition-all ${
              i === 0 
                ? 'bg-white text-hr-accent font-semibold shadow-sm' 
                : 'text-hr-secondary hover:text-hr-primary font-medium'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Card */}
      <section className="bg-white rounded-lg p-6 border border-hr-border shadow-card flex items-center gap-8">
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img 
            alt="Hang Minh Nguyen" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uj6M0E683OrCLrVsbus4foEiVJvxlJUfrICeN-bS1l6OPA9k9hp-MLttsbmXMdH6cUdHZWbUgsERMGIRixtMh7c3u4jaZqrrge6DQCqDM9UyaUclGO5BOPRfmfZavj4cdLTxfRZytLcl9RCSgSYxzJ0n3O5Uy0iRidB604ZvdYrbsfw6SltggLmMFhHzp6qoKV8Js9D4heVqRdlU4-fa7fuSpK84NX-aUjOyNhQvV0kr4Qj1Rjd5xC7YF1WBlSEq3UQP7eNyRwBtg"
          />
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-hr-title">Hang Minh Nguyen</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-hr-accent font-semibold">UI - UX Designer</span>
              <span className="text-hr-secondary">|</span>
              <span className="text-hr-secondary">Product Department</span>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8 md:border-l border-hr-border md:pl-8">
            <div>
              <p className="text-[11px] text-hr-secondary uppercase tracking-wider font-semibold">Staff ID:</p>
              <p className="text-sm font-bold text-hr-title">SJ53862</p>
            </div>
            <div>
              <p className="text-[11px] text-hr-secondary uppercase tracking-wider font-semibold">Phone number:</p>
              <p className="text-sm font-bold text-hr-title">0913 854 235</p>
            </div>
            <div>
              <p className="text-[11px] text-hr-secondary uppercase tracking-wider font-semibold">Staff Account:</p>
              <p className="text-sm font-bold text-hr-title">hangntm1</p>
            </div>
            <div>
              <p className="text-[11px] text-hr-secondary uppercase tracking-wider font-semibold">Email:</p>
              <p className="text-sm font-bold text-hr-title">hangntm@sjlabel.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <section className="bg-white rounded-lg p-6 border border-hr-border shadow-card">
          <SectionHeader title="Personal information" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            <DetailItem label="Gender" value="Female" />
            <DetailItem label="Date of birth" value="5th March, 1996" />
            <DetailItem label="Identify code" value="3234611342" />
            <DetailItem label="Hometown" value="Hai Duong city" />
            <DetailItem label="Nationality" value="Vietnam" />
            <DetailItem label="Religion" value="None" />
            <DetailItem label="Language" value="Vietnamese, English" />
            <DetailItem label="Marital status" value="Single" />
            <DetailItem label="Permanent address" value="5. Nguyen Chi Thanh Street, Tan Binh Ward, Hai Duong" fullWidth />
            <DetailItem label="Current address" value="29. Nguyen Ngoc Doan Street, Dong Da District, Ha Noi" fullWidth />
          </div>
        </section>

        <div className="space-y-6">
          {/* Education */}
          <section className="bg-white rounded-lg p-6 border border-hr-border shadow-card">
            <SectionHeader title="Education information" />
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[14px] font-bold text-hr-primary">Bachelor in Management Information System</h3>
                  <p className="text-[13px] text-hr-secondary">National Economic University</p>
                </div>
                <span className="text-[14px] font-bold text-hr-primary whitespace-nowrap">2014-2018</span>
              </div>
              <div className="w-full h-px bg-hr-border" />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[14px] font-bold text-hr-primary">Certificate of Graphic Design</h3>
                  <p className="text-[13px] text-hr-secondary">FPT Arena University</p>
                </div>
                <span className="text-[14px] font-bold text-hr-primary whitespace-nowrap">2018-2019</span>
              </div>
            </div>
          </section>

          {/* Account Info */}
          <section className="bg-white rounded-lg p-6 border border-hr-border shadow-card">
            <SectionHeader title="Account information" />
            <div className="grid grid-cols-3 gap-6">
              <DetailItem label="Bank account" value="02520613401" />
              <DetailItem label="Account name" value="Nguyen Thi Minh Hang" />
              <DetailItem label="Bank" value="TPBank Duy Tan" />
              <DetailItem label="Tax code" value="8456120546" />
              <div className="col-span-2">
                <DetailItem label="Insurance code" value="8456120546" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
