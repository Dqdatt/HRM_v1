import { Rocket, Sparkles, BrainCircuit, Users, TrendingUp, AlertCircle, Search, ChevronRight, FileText, CheckCircle2, RefreshCw, Paperclip, Mic, Send, MoreVertical, Settings, ChevronLeft, CalendarCheck, Zap } from 'lucide-react';
import { useState } from 'react';

interface AICenterModuleProps {
  activeTab: string;
}

const AIHub = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-hr-title">AI HR Hub</h1>
        <span className="text-[10px] font-bold tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full uppercase border border-teal-200">Advanced Analytics</span>
      </div>
    </div>

    {/* Top Row Cards */}
    <div className="grid grid-cols-3 gap-6">
      {/* Turnover Probability */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded uppercase border border-orange-200">High Alert</span>
          </div>
          <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-1">Turnover Probability (Q4)</p>
          <div className="flex items-end gap-2 mb-4">
            <h3 className="text-3xl font-bold text-hr-title">12.4%</h3>
            <span className="text-xs font-bold text-red-500 flex items-center gap-0.5 mb-1"><TrendingUp className="w-3 h-3" /> 2.1% <span className="font-normal text-hr-secondary">vs last month</span></span>
          </div>
        </div>
        <p className="text-[13px] text-hr-secondary italic border-l-2 border-orange-200 pl-3">"Predicted increase due to market salary shifts in Engineering dept."</p>
      </div>

      {/* Performance Velocity */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase border border-green-200">Stable</span>
          </div>
          <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-1">Performance Velocity</p>
          <div className="flex items-end gap-2 mb-4">
            <h3 className="text-3xl font-bold text-hr-title">88/100</h3>
            <span className="text-xs font-medium text-green-600 flex items-center gap-1 mb-1"><CheckCircle2 className="w-3 h-3" /> Top 5% in industry benchmark</span>
          </div>
        </div>
        <p className="text-[13px] text-hr-secondary border-l-2 border-blue-200 pl-3">Engagement scores up by <strong className="text-hr-title">14%</strong> across remote teams.</p>
      </div>

      {/* Avg Time to Hire */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold tracking-wider text-hr-accent bg-hr-accent-bg px-2 py-0.5 rounded uppercase border border-hr-accent/30">Optimized</span>
          </div>
          <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-1">Avg. Time to Hire</p>
          <div className="flex items-end gap-2 mb-4">
            <h3 className="text-3xl font-bold text-hr-title">18 Days</h3>
            <span className="text-xs font-medium text-hr-accent flex items-center gap-0.5 mb-1">↓ 4 days <span className="font-normal text-hr-secondary">reduction</span></span>
          </div>
        </div>
        <p className="text-[13px] text-hr-secondary border-l-2 border-teal-200 pl-3">AI-screening has processed <strong className="text-hr-title">428</strong> applications this week.</p>
      </div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-3 gap-6">
      {/* Left Column - Recommendations & Actions */}
      <div className="col-span-2 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Strategic Recommendations */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-hr-title">
                <Sparkles className="w-5 h-5 text-hr-accent" />
                <h3 className="font-bold text-[15px]">Strategic Recommendations</h3>
              </div>
              <button className="text-[11px] font-bold text-hr-accent hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {/* Rec 1 */}
              <div className="bg-[#fff6f5] border border-[#ffe4e1] rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src="https://i.pravatar.cc/150?u=12" alt="Marcus" className="w-10 h-10 rounded-full" />
                    <div>
                      <h4 className="text-sm font-bold text-hr-title">Marcus Thorne</h4>
                      <p className="text-[10px] font-bold tracking-wider text-red-500 uppercase mt-0.5">Highlight Risk</p>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                  Predictive analysis suggests a 78% probability of resignation. Performance is peaking but salary is 15% below market rate.
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#0f766e] text-white text-[11px] font-bold py-2 rounded-lg hover:bg-hr-title transition-colors">
                    Initiate Retention Plan
                  </button>
                  <button className="flex-1 bg-white border border-gray-200 text-hr-title text-[11px] font-bold py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Review Comp
                  </button>
                </div>
              </div>

              {/* Rec 2 */}
              <div className="bg-[#f0f9ff] border border-[#e0f2fe] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <BrainCircuit className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-hr-title">Skills Gap Identified</h4>
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                  The Product team requires "Advanced TypeScript" training to meet Q3 roadmap goals. 4 members lack certification.
                </p>
                <button className="bg-[#3b82f6] text-white text-[11px] font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Auto-Enroll Team
                </button>
              </div>

              {/* Rec 3 */}
              <div className="bg-[#f0fdfa] border border-[#ccfbf1] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-sm font-bold text-hr-title">Succession Planning</h4>
                </div>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                  Elena Rodriguez is an ideal successor for 'Lead Designer' role based on peer reviews and leadership scores.
                </p>
                <button className="bg-white border border-teal-200 text-teal-700 text-[11px] font-bold py-2 px-4 rounded-lg hover:bg-teal-50 transition-colors">
                  View Succession Path
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions & Automations */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col relative overflow-hidden">
            <div className="flex items-center gap-2 text-hr-title mb-6">
              <Zap className="w-5 h-5 text-hr-accent" />
              <h3 className="font-bold text-[15px]">Quick AI Actions</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-hr-accent hover:shadow-sm transition-all group">
                <FileText className="w-6 h-6 text-gray-400 mb-2 group-hover:text-hr-accent" />
                <span className="text-sm font-bold text-hr-title mb-1">Draft JD</span>
                <span className="text-[10px] text-hr-secondary">Generate job descriptions in seconds</span>
              </button>
              <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-hr-accent hover:shadow-sm transition-all group">
                <CheckCircle2 className="w-6 h-6 text-gray-400 mb-2 group-hover:text-hr-accent" />
                <span className="text-sm font-bold text-hr-title mb-1">Probation Eval</span>
                <span className="text-[10px] text-hr-secondary">Summarize performance metrics</span>
              </button>
              <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-hr-accent hover:shadow-sm transition-all group">
                <AlertCircle className="w-6 h-6 text-gray-400 mb-2 group-hover:text-hr-accent" />
                <span className="text-sm font-bold text-hr-title mb-1">Policy Auditor</span>
                <span className="text-[10px] text-hr-secondary">Scan docs for compliance gaps</span>
              </button>
              <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-hr-accent hover:shadow-sm transition-all group">
                <BrainCircuit className="w-6 h-6 text-gray-400 mb-2 group-hover:text-hr-accent" />
                <span className="text-sm font-bold text-hr-title mb-1">Sentiment Scan</span>
                <span className="text-[10px] text-hr-secondary">Analyze latest engagement survey</span>
              </button>
            </div>

            {/* Circular Add Button */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <button className="w-12 h-12 rounded-full bg-[#0f766e] text-white flex items-center justify-center shadow-lg hover:bg-hr-title transition-colors">
                <span className="text-2xl leading-none mb-1">+</span>
              </button>
            </div>

            <div className="mt-auto border-t border-gray-100 pt-6">
              <h4 className="text-[10px] font-bold tracking-wider text-gray-400 uppercase mb-4">Recent Automations</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hr-accent"></div>
                    <span className="text-hr-title font-medium">Senior Dev JD Drafted</span>
                  </div>
                  <span className="text-hr-secondary">2h ago</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hr-accent"></div>
                    <span className="text-hr-title font-medium">Quarterly Perk Audit</span>
                  </div>
                  <span className="text-hr-secondary">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Chat Interface */}
      <div className="col-span-1 bg-white rounded-xl border border-hr-border shadow-sm flex flex-col overflow-hidden h-[800px]">
        {/* Chat Header */}
        <div className="bg-[#0f766e] text-white p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm">HRment AI</h3>
              <p className="text-[10px] text-white/70">System Intelligence Active</p>
            </div>
          </div>
          <button className="p-1 hover:bg-white/10 rounded">
            <MoreVertical className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 space-y-6">
          <div className="text-center mb-6">
            <AlertCircle className="w-4 h-4 text-gray-400 mx-auto mb-2" />
            <p className="text-[10px] text-gray-400 mx-8">This conversation is encrypted and adheres to company data privacy policies.</p>
          </div>

          {/* AI Message */}
          <div className="flex gap-3 max-w-[90%]">
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100">
              <Sparkles className="w-4 h-4 text-hr-accent" />
            </div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-[13px] text-hr-title leading-relaxed">
              Hello Sarah! I've analyzed the latest payroll data. Would you like to see a summary of the <span className="font-bold">overtime trends</span> for October, or shall I help you with a <span className="font-bold">specific employee query</span>?
            </div>
          </div>

          {/* User Message */}
          <div className="flex gap-3 max-w-[90%] ml-auto justify-end">
            <div className="bg-[#0f766e] text-white p-4 rounded-2xl rounded-tr-none shadow-sm text-[13px] leading-relaxed">
              Show me the leave balance for the Engineering team.
            </div>
          </div>

          {/* AI Response with Component */}
          <div className="flex gap-3 max-w-[95%]">
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100 mt-1">
              <Sparkles className="w-4 h-4 text-hr-accent" />
            </div>
            <div className="w-full">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-[13px] text-hr-title leading-relaxed mb-3">
                Here is the current leave balance overview for the Engineering department (24 employees):
              </div>
              <div className="bg-white p-4 rounded-xl border border-hr-accent/20 shadow-sm ml-2">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-hr-secondary font-medium">Avg. Remaining PTO</span>
                  <span className="text-sm font-bold text-hr-title">14.2 Days</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-hr-accent w-[70%] rounded-full"></div>
                </div>
                
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-hr-secondary font-medium">Sick Leave Taken</span>
                  <span className="text-sm font-bold text-orange-500">3.1 Days/Avg</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-orange-400 w-[30%] rounded-full"></div>
                </div>

                <button className="w-full py-2 border border-gray-200 rounded-lg text-[11px] font-bold text-hr-title hover:bg-gray-50 transition-colors uppercase tracking-wider">
                  Export Full Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
          <div className="flex items-center border border-gray-200 rounded-xl p-2 focus-within:border-hr-accent focus-within:ring-1 focus-within:ring-hr-accent transition-all bg-white">
            <input 
              type="text" 
              placeholder="Ask about policies, KPIs, or data..."
              className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 text-hr-title placeholder:text-gray-400"
            />
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:text-hr-secondary transition-colors"><Paperclip className="w-4 h-4" /></button>
              <button className="p-2 text-gray-400 hover:text-hr-secondary transition-colors"><Mic className="w-4 h-4" /></button>
              <button className="p-2.5 bg-[#0f766e] text-white rounded-lg hover:bg-hr-title transition-colors ml-1">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
            <button className="px-3 py-1.5 rounded-full border border-gray-200 text-[10px] text-hr-secondary whitespace-nowrap hover:bg-gray-50">"Analyze Q4 retention"</button>
            <button className="px-3 py-1.5 rounded-full border border-gray-200 text-[10px] text-hr-secondary whitespace-nowrap hover:bg-gray-50">"WFH Policy updates"</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AIRecruitment = () => (
  <div className="space-y-6">
    {/* Top Row Cards */}
    <div className="grid grid-cols-3 gap-6">
      {/* AI Active Screening */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
        <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-2">AI Active Screening</p>
        <div className="flex items-end gap-3 mb-2">
          <h3 className="text-3xl font-bold text-hr-title">1,248</h3>
          <span className="text-sm font-bold text-hr-accent flex items-center gap-0.5 mb-1"><TrendingUp className="w-3.5 h-3.5" /> ~12%</span>
        </div>
        <p className="text-[13px] text-hr-secondary">Resumes parsed today</p>
      </div>

      {/* Avg Match Quality */}
      <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
        <p className="text-[11px] font-bold text-hr-secondary uppercase tracking-wider mb-2">Avg. Match Quality</p>
        <div className="flex items-end gap-3 mb-2">
          <h3 className="text-3xl font-bold text-hr-title">84%</h3>
          <span className="text-sm font-bold text-green-500 flex items-center gap-0.5 mb-1"><CheckCircle2 className="w-3.5 h-3.5" /> +4%</span>
        </div>
        <p className="text-[13px] text-hr-secondary">JD alignment score</p>
      </div>

      {/* AI Automation Impact */}
      <div className="bg-[#f0fdfa] p-6 rounded-xl border border-hr-accent/30 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold text-teal-700 uppercase tracking-wider mb-2">AI Automation Impact</p>
          <h3 className="text-3xl font-bold text-hr-title mb-1">420 hrs</h3>
          <p className="text-[12px] text-teal-800 font-medium">Human effort saved in the last 30 days</p>
        </div>
        <button className="bg-[#0f766e] text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-hr-title transition-colors shadow-sm">
          <Rocket className="w-4 h-4" />
          Optimize Workflows
        </button>
      </div>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-3 gap-6">
      {/* Left Column (Span 2) */}
      <div className="col-span-2 space-y-6">
        {/* Candidates List */}
        <div className="bg-white rounded-xl border border-hr-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-hr-title">
              <BrainCircuit className="w-5 h-5 text-hr-accent" />
              <h3 className="font-bold text-[15px]">Top AI-Ranked Candidates <span className="text-hr-secondary font-normal">(Senior Fullstack Engineer)</span></h3>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 border border-gray-200 rounded-md text-xs font-bold text-hr-title hover:bg-gray-50">Refine Search</button>
              <button className="px-4 py-1.5 bg-[#0f766e] text-white rounded-md text-xs font-bold hover:bg-hr-title">Bulk Action</button>
            </div>
          </div>
          
          <table className="w-full text-left text-[13px]">
            <thead className="bg-gray-50/50 text-hr-secondary font-bold tracking-wider text-[10px] uppercase">
              <tr>
                <th className="px-6 py-3">Candidate</th>
                <th className="px-6 py-3 text-center">AI Score</th>
                <th className="px-6 py-3">Key Strengths</th>
                <th className="px-6 py-3">Classification</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {/* Candidate 1 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-xs">MA</div>
                    <div>
                      <p className="font-bold text-hr-title">Marcus Aurelius</p>
                      <p className="text-[11px] text-hr-secondary">marcus.a@domain.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-500 text-green-600 font-bold text-sm bg-green-50">98%</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 w-fit">
                    <span className="px-2 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 bg-white">Distributed Systems</span>
                    <span className="px-2 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 bg-white">Kubernetes</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded border border-green-200">Top Talent</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-hr-title font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Interviewer Assigned
                  </div>
                </td>
              </tr>
              {/* Candidate 2 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-xs">EL</div>
                    <div>
                      <p className="font-bold text-hr-title">Elena Lovelace</p>
                      <p className="text-[11px] text-hr-secondary">elena.l@cloud.io</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-green-400 text-green-500 font-bold text-sm bg-green-50">92%</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 w-fit">
                    <span className="px-2 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 bg-white">AI/ML Ops</span>
                    <span className="px-2 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 bg-white">Rust</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-200">Overskilled</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-hr-secondary font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Pending Review
                  </div>
                </td>
              </tr>
              {/* Candidate 3 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-xs">SK</div>
                    <div>
                      <p className="font-bold text-hr-title">Satoshi K.</p>
                      <p className="text-[11px] text-hr-secondary">satoshi@blocks.net</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-hr-accent text-hr-accent font-bold text-sm bg-hr-accent-bg/30">87%</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 w-fit">
                    <span className="px-2 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 bg-white">Cryptography</span>
                    <span className="px-2 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 bg-white">Go</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider rounded border border-teal-200">Cultural Fit</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs text-green-600 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Offer Generated
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-4 border-t border-gray-100 flex justify-between items-center text-xs text-hr-secondary">
            <span>Showing 3 of 152 AI-filtered candidates</span>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-7 h-7 rounded border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-2 gap-6">
          {/* Skill Gap Heatmap */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
            <div className="flex items-center gap-2 text-hr-title mb-6">
              <BarChartIcon className="w-5 h-5 text-hr-accent" />
              <h3 className="font-bold text-[15px]">Skill Gap Heatmap</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span>Backend Architecture</span>
                  <span className="text-hr-accent">95% Match</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-hr-accent rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span>Cloud Infrastructure</span>
                  <span className="text-hr-accent">72% Match</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-hr-accent rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold text-hr-title mb-1.5">
                  <span>Team Leadership</span>
                  <span className="text-gray-400">45% Match</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 italic mt-6">*Based on cross-analysis of 42 historical hires for this role.</p>
          </div>

          {/* AI Velocity Report */}
          <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-hr-title mb-6">
              <Zap className="w-5 h-5 text-hr-accent" />
              <h3 className="font-bold text-[15px]">AI Velocity Report</h3>
            </div>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-3xl font-bold text-hr-title mb-1">2.4d</h3>
                <p className="text-[10px] font-bold text-hr-secondary uppercase tracking-wider">Time to Screen</p>
              </div>
              <div className="text-right">
                <h3 className="text-3xl font-bold text-hr-title mb-1">18%</h3>
                <p className="text-[10px] font-bold text-hr-secondary uppercase tracking-wider">Declined by AI</p>
              </div>
            </div>
            <div className="bg-green-50 text-green-700 text-xs font-bold px-4 py-3 rounded-lg border border-green-200 text-center flex items-center justify-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> 30% faster than manual screening
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 space-y-6">
        {/* Co-Pilot */}
        <div className="bg-[#2a3036] text-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-hr-accent flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-[15px]">AI Recruiting Co-Pilot</h3>
              <p className="text-[11px] text-gray-400">Intelligent document generator</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <button className="w-full bg-[#363d45] border border-[#4a535c] hover:border-hr-accent rounded-xl p-4 text-left transition-colors group">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold">Draft Offer Letter</h4>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-hr-accent transition-colors" />
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">Personalized based on candidate skill score & market data.</p>
            </button>
            <button className="w-full bg-[#363d45] border border-[#4a535c] hover:border-hr-accent rounded-xl p-4 text-left transition-colors group">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold">Interview Questions</h4>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-hr-accent transition-colors" />
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">Generate 5 behavior-based questions for Tech Round 1.</p>
            </button>
            <button className="w-full bg-[#363d45] border border-[#4a535c] hover:border-hr-accent rounded-xl p-4 text-left transition-colors group">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold">JD Re-Optimization</h4>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-hr-accent transition-colors" />
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">Update 'Senior Fullstack' JD to attract diverse talent.</p>
            </button>
          </div>

          <div className="pt-4 border-t border-[#4a535c]">
            <h4 className="text-[10px] font-bold tracking-wider text-hr-accent uppercase mb-3">Recent Generations</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <RefreshCw className="w-3.5 h-3.5 text-gray-500" /> Offer_MarcusA_v2.pdf <span className="text-[10px] text-gray-500">- 2m ago</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <RefreshCw className="w-3.5 h-3.5 text-gray-500" /> Questions_TechLead.docx <span className="text-[10px] text-gray-500">- 1h ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Talent Analytics */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <h3 className="font-bold text-[15px] text-hr-title mb-6">Market Talent Analytics</h3>
          
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6">
            <h4 className="text-[10px] font-bold tracking-wider text-gray-500 uppercase mb-4">Expected Salary Trend</h4>
            <div className="h-20 flex items-end gap-2 px-2">
              <div className="w-full bg-gray-200 rounded-t h-[30%]"></div>
              <div className="w-full bg-gray-200 rounded-t h-[45%]"></div>
              <div className="w-full bg-gray-200 rounded-t h-[60%]"></div>
              <div className="w-full bg-[#0f766e] rounded-t h-[90%] shadow-sm relative"></div>
              <div className="w-full bg-gray-200 rounded-t h-[75%]"></div>
              <div className="w-full bg-gray-200 rounded-t h-[65%]"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-gray-400 px-2">
              <span>2022</span><span>Current</span>
            </div>
          </div>

          <div className="flex gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50 relative">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-blue-100 text-blue-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-hr-title mb-1">AI Insight</h4>
              <p className="text-[11px] text-gray-600 leading-relaxed">Candidates with 'Rust' experience currently 14% more likely to accept offers within 48 hours.</p>
            </div>
            <div className="absolute -right-3 -bottom-3">
              <button className="w-10 h-10 rounded-full bg-[#0f766e] text-white flex items-center justify-center shadow-md hover:bg-hr-title transition-colors">
                <span className="text-xl leading-none mb-0.5">+</span>
              </button>
            </div>
          </div>
        </div>

        {/* Automation Nodes */}
        <div className="bg-white p-6 rounded-xl border border-hr-border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Automation Nodes</h4>
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-green-600 uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Secure
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-hr-title">LinkedIn API</span>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-hr-title">Zoom Automation</span>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-hr-title">GitHub Scraper</span>
              <RefreshCw className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Helper component for BarChart icon
const BarChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

export const AICenterModule = ({ activeTab }: AICenterModuleProps) => {
  switch (activeTab) {
    case 'ai-hub':
      return <AIHub />;
    case 'ai-recruitment':
      return <AIRecruitment />;
    default:
      return <AIHub />;
  }
};
