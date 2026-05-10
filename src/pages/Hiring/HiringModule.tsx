import { Calendar as CalendarIcon, Video, CheckCircle2, Edit3, Copy, Send, Check, Search, Filter, Plus, X, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';

interface HiringModuleProps {
  activeTab: string;
}

const RecruitmentATS = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  return (
    <div className="relative min-h-[calc(100vh-120px)] flex flex-col">
      {/* Header Search */}
      <div className="bg-white rounded-xl p-3 border border-hr-border shadow-sm mb-6 flex items-center max-w-lg">
        <Search className="w-5 h-5 text-gray-400 ml-2" />
        <input 
          type="text" 
          placeholder="Search applications, candidates..." 
          className="flex-1 bg-transparent border-none outline-none px-3 text-sm"
        />
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Hiring Rate</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">82.4%</h3>
            <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3" /> +4.2%
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Interview Conversion</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">34.1%</h3>
            <span className="text-[11px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded flex items-center gap-1 mb-1">
              <TrendingDown className="w-3 h-3" /> -1.5%
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Offer Acceptance</p>
          <div className="flex items-end gap-3">
            <h3 className="text-3xl font-bold text-hr-title">92%</h3>
            <span className="text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3" /> +3%
            </span>
          </div>
        </div>
      </div>

      {/* Kanban Board Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-64">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" placeholder="Search candidate..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-hr-title hover:bg-gray-50">
            <CalendarIcon className="w-4 h-4" /> Calendar
          </button>
        </div>

        {/* Columns */}
        <div className="flex gap-6 overflow-x-auto pb-4 flex-1">
          {/* Col 1: New CV */}
          <div className="w-80 shrink-0 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <h3 className="font-bold text-hr-title text-sm">New CV</h3>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">12</span>
              </div>
              <button className="text-gray-400 hover:text-hr-title"><Plus className="w-4 h-4" /></button>
            </div>
            
            <div className="space-y-4">
              <div 
                className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer hover:border-hr-accent transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=11" alt="Alex Rivera" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm font-bold text-hr-title">Alex Rivera</h4>
                      <p className="text-[11px] text-hr-secondary">UI Designer</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">94%</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] text-gray-500 font-medium">Figma</span>
                  <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] text-gray-500 font-medium">5 yrs exp</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-hr-secondary pt-3 border-t border-gray-50">
                  <img src="https://i.pravatar.cc/150?u=1" alt="Recruiter" className="w-4 h-4 rounded-full" />
                  <span>2h ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Screening */}
          <div className="w-80 shrink-0 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                <h3 className="font-bold text-hr-title text-sm">Screening</h3>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">08</span>
              </div>
              <button className="text-gray-400 hover:text-hr-title"><Plus className="w-4 h-4" /></button>
            </div>
            
            <div className="space-y-4">
              <div 
                className="bg-white p-4 rounded-xl border-2 border-[#0f766e] shadow-sm cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedCandidate({ name: 'Sarah Chen' })}
              >
                {/* Active Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0f766e]"></div>
                
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=12" alt="Sarah Chen" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm font-bold text-hr-title">Sarah Chen</h4>
                      <p className="text-[11px] text-hr-secondary">Senior Product Designer</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#0f766e] bg-[#f0fdfa] px-1.5 py-0.5 rounded border border-[#ccfbf1]">92%</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] text-gray-500 font-medium">React</span>
                  <span className="px-2 py-1 bg-gray-50 border border-gray-100 rounded text-[10px] text-gray-500 font-medium">8 yrs exp</span>
                </div>
                <div className="flex justify-between items-center text-[10px] pt-3 border-t border-gray-50">
                  <span className="font-bold text-orange-500">In Progress</span>
                  <span className="text-hr-secondary">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Col 3: Interview */}
          <div className="w-80 shrink-0 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                <h3 className="font-bold text-hr-title text-sm">Interview</h3>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Modal for Candidate */}
      {selectedCandidate && (
        <div className="absolute top-0 right-0 bottom-0 w-[420px] bg-white shadow-2xl border-l border-gray-200 z-50 flex flex-col transform transition-transform animate-in slide-in-from-right-full duration-300">
          <div className="p-6 border-b border-gray-100 flex items-start gap-4">
            <img src="https://i.pravatar.cc/150?u=12" alt="Sarah Chen" className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-hr-title">Sarah Chen</h2>
                <button onClick={() => setSelectedCandidate(null)} className="p-1 hover:bg-gray-100 rounded-full text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[11px] text-hr-secondary mt-1">Applying for: <span className="font-bold text-[#0f766e]">Senior Product Designer</span></p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* AI Analysis Card */}
            <div className="bg-[#f0fdfa] rounded-xl p-5 border border-[#ccfbf1]">
              <div className="flex items-center gap-2 text-[#0f766e] mb-4">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-bold text-[15px]">AI Candidate Analysis</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="text-[9px] font-bold tracking-wider text-[#0f766e] uppercase mb-2">Key Strengths</h4>
                <ul className="list-disc pl-4 space-y-1.5 text-[11px] text-gray-700 leading-relaxed">
                  <li>Strong background in enterprise B2B workflows.</li>
                  <li>Expert proficiency in design systems (Figma/Tokens).</li>
                  <li>High cultural fit based on personality screening.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[9px] font-bold tracking-wider text-orange-500 uppercase mb-2">Points of Consideration</h4>
                <p className="text-[11px] text-gray-700 italic">"Current salary expectation is at the top 10% of the range."</p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mb-1">Total Experience</p>
                <p className="text-sm font-bold text-hr-title">8 Years 4 Months</p>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mb-1">AI Match Score</p>
                <p className="text-sm font-bold text-green-600">92.4% Match</p>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mb-1">Location</p>
                <p className="text-sm font-bold text-hr-title">Remote (Singapore)</p>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mb-1">Current Role</p>
                <p className="text-sm font-bold text-hr-title">Senior Designer @ Meta</p>
              </div>
            </div>

            {/* Screening Notes */}
            <div>
              <h3 className="font-bold text-[15px] text-hr-title mb-3">Screening Notes</h3>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[10px] text-hr-secondary mb-2">Assigned Recruiter: Hang Minh Nguyen</p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Excellent communication skills. Demonstrated deep understanding of the SJ Label design principles during the initial call. Portfolio shows impressive scalability for large-scale HR tools.
                </p>
              </div>
            </div>

            {/* Scorecard */}
            <div className="border border-gray-200 p-5 rounded-xl">
              <h4 className="text-xs font-bold text-hr-title mb-4">Skill Scorecard</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-gray-600 mb-1.5">
                    <span>Visual Design</span>
                    <span className="font-bold text-hr-title">4.8/5</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0f766e] rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-gray-600 mb-1.5">
                    <span>UX Logic</span>
                    <span className="font-bold text-hr-title">4.5/5</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0f766e] rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-100 bg-white flex gap-3 shrink-0">
            <button className="flex-1 py-3 bg-[#fff1f2] text-[#e11d48] rounded-lg text-sm font-bold hover:bg-red-50 transition-colors">Reject</button>
            <button className="flex-1 py-3 bg-[#14b8a6] text-white rounded-lg text-sm font-bold hover:bg-[#0f766e] transition-colors">Move to Interview</button>
          </div>
        </div>
      )}
    </div>
  );
};

const InterviewCalendar = () => {
  const [techScore, setTechScore] = useState<number | null>(4);
  const [cultureScore, setCultureScore] = useState<number | null>(5);

  return (
    <div className="flex gap-6">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        {/* Interview Calendar Card */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-hr-accent" />
              <h2 className="text-lg font-bold text-hr-title">Interview Calendar</h2>
            </div>
            <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
              <button className="px-3 py-1 text-xs font-medium rounded bg-white shadow-sm text-hr-title">Today</button>
              <button className="px-3 py-1 text-xs font-medium rounded text-hr-secondary hover:text-hr-title">Week</button>
              <button className="px-3 py-1 text-xs font-medium rounded text-hr-secondary hover:text-hr-title">Month</button>
            </div>
          </div>

          <div className="flex justify-between gap-2 mb-6">
            {[
              { day: 'MON', date: '26' },
              { day: 'TUE', date: '27' },
              { day: 'WED', date: '01', active: true },
              { day: 'THU', date: '02' },
              { day: 'FRI', date: '03', hasEvent: true },
              { day: 'SAT', date: '04' },
              { day: 'SUN', date: '05' },
            ].map((d) => (
              <div key={d.day} className={`flex flex-col items-center justify-center w-12 h-16 rounded-xl border ${d.active ? 'border-hr-accent bg-hr-accent-bg/30 text-hr-title' : 'border-gray-200 text-hr-secondary hover:border-gray-300'} cursor-pointer transition-colors relative`}>
                <span className="text-[10px] font-semibold mb-1">{d.day}</span>
                <span className={`text-sm font-bold ${d.active ? 'text-hr-title' : ''}`}>{d.date}</span>
                {d.hasEvent && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-hr-accent"></div>}
              </div>
            ))}
          </div>

          <div className="bg-[#f0fdfa] border-l-4 border-hr-accent p-4 rounded-r-xl flex items-center gap-4 relative">
            <div className="p-2 bg-white rounded-full text-hr-accent shadow-sm">
              <Video className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-hr-title">Technical Round - Alex Rivera</h4>
              <p className="text-xs text-hr-secondary">02:00 PM - 03:00 PM • Google Meet</p>
            </div>
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/150?u=1" alt="Interviewer 1" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/150?u=2" alt="Interviewer 2" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>

        {/* Feedback Form Card */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-hr-accent" />
              <h2 className="text-lg font-bold text-hr-title">Interview Feedback Form</h2>
            </div>
            <span className="text-[10px] font-bold tracking-wider text-hr-accent bg-hr-accent-bg px-2.5 py-1 rounded-full uppercase">Active Round</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl mb-6 bg-gray-50/50">
            <img src="https://i.pravatar.cc/150?u=3" alt="Candidate" className="w-16 h-16 rounded-lg object-cover shadow-sm" />
            <div>
              <h3 className="text-base font-bold text-hr-title">Alex Rivera</h3>
              <p className="text-sm text-hr-secondary mb-1">Senior Frontend Engineer Application</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> 2nd Round</span>
                <span className="flex items-center gap-1"><CalendarIcon className="w-3.5 h-3.5" /> Oct 24, 2023</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-sm font-bold text-hr-title mb-3">Technical Proficiency</h4>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button 
                    key={num}
                    onClick={() => setTechScore(num)}
                    className={`w-10 h-10 rounded-lg border font-semibold flex items-center justify-center transition-colors ${
                      techScore === num 
                        ? 'bg-hr-accent border-hr-accent text-white' 
                        : 'border-gray-200 text-gray-600 hover:border-hr-accent'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-hr-title mb-3">Cultural Alignment</h4>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button 
                    key={num}
                    onClick={() => setCultureScore(num)}
                    className={`w-10 h-10 rounded-lg border font-semibold flex items-center justify-center transition-colors ${
                      cultureScore === num 
                        ? 'bg-hr-accent border-hr-accent text-white' 
                        : 'border-gray-200 text-gray-600 hover:border-hr-accent'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-bold text-hr-title mb-3">Overall Observations</h4>
            <textarea 
              className="w-full border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-hr-accent focus:ring-1 focus:ring-hr-accent transition-all resize-none h-32"
              placeholder="Write your detailed interview notes here..."
            ></textarea>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-hr-title hover:bg-gray-50 transition-colors">
              Save Draft
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-hr-accent text-white text-sm font-medium hover:bg-hr-primary transition-colors">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[380px] shrink-0 space-y-6">
        {/* Email Templates Card */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Send className="w-5 h-5 text-hr-accent" />
              <h2 className="text-base font-bold text-hr-title">Email Templates</h2>
            </div>
            <button className="w-6 h-6 rounded-full bg-hr-accent-bg text-hr-accent flex items-center justify-center hover:bg-hr-accent hover:text-white transition-colors">
              <span className="text-lg leading-none mb-0.5">+</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="p-4 border border-hr-accent bg-hr-accent-bg/20 rounded-xl cursor-pointer relative">
              <h4 className="text-sm font-bold text-hr-accent mb-1">Interview Invite</h4>
              <p className="text-xs text-hr-secondary">Standard invitation for technical rounds...</p>
              <CheckCircle2 className="w-4 h-4 text-hr-accent absolute top-4 right-4" />
            </div>
            <div className="p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-hr-accent transition-colors">
              <h4 className="text-sm font-bold text-hr-title mb-1">Offer Letter</h4>
              <p className="text-xs text-hr-secondary">Executive level offer package details...</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-hr-accent transition-colors">
              <h4 className="text-sm font-bold text-hr-title mb-1">Rejection</h4>
              <p className="text-xs text-hr-secondary">Post-interview soft rejection template...</p>
            </div>
          </div>
        </div>

        {/* Template Preview Card */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col min-h-[400px]">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Template Preview</h3>
            <div className="flex gap-2 text-gray-400">
              <button className="hover:text-hr-title"><Edit3 className="w-4 h-4" /></button>
              <button className="hover:text-hr-title"><Copy className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-hr-secondary">Subject:</span>
            <div className="flex-1 p-2 border border-gray-200 rounded text-sm font-medium text-hr-title bg-gray-50">
              Interview Invitation: Senior Frontend Engineer @ sj label
            </div>
          </div>

          <div className="text-sm text-hr-title leading-relaxed space-y-4 flex-1">
            <p>Dear <span className="text-hr-accent bg-hr-accent-bg/50 px-1 rounded font-medium">{'{candidate_name}'}</span>,</p>
            <p>Thank you for your interest in the <span className="text-hr-accent bg-hr-accent-bg/50 px-1 rounded font-medium">{'{job_title}'}</span> position at sj label. We were impressed with your background and would like to invite you for a technical interview.</p>
            <p>The session will be conducted by <span className="text-hr-accent bg-hr-accent-bg/50 px-1 rounded font-medium">{'{interviewer_names}'}</span> and is expected to last approximately 60 minutes.</p>
            <div className="p-3 border border-dashed border-gray-300 rounded bg-gray-50 text-center text-gray-400 italic my-4">
              [Insert Calendar Link Placeholder Here]
            </div>
            <p>Best regards,<br /><span className="font-bold text-hr-accent">SJ Label Talent Acquisition Team</span></p>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-hr-secondary hover:bg-gray-50 transition-colors">
              <Send className="w-4 h-4" />
              Send Test Email
            </button>
            <button className="flex-1 px-4 py-2.5 rounded-lg bg-hr-accent text-white text-sm font-medium hover:bg-hr-primary transition-colors">
              Apply Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HiringModule = ({ activeTab }: HiringModuleProps) => {
  switch (activeTab) {
    case 'recruitment-ats':
      return <RecruitmentATS />;
    case 'interview-calendar':
      return <InterviewCalendar />;
    default:
      return <RecruitmentATS />;
  }
};
