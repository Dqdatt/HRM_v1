export type View = 
  | 'overview' 
  | 'tasks' 
  | 'recruitment' 
  | 'calendar' 
  | 'notes' 
  | 'reports' 
  | 'assistant' 
  | 'settings';

export interface Task {
  id: string;
  title: string;
  project: string;
  deadline: string;
  priority: 'low' | 'medium' | 'high';
  status: 'not_started' | 'in_progress' | 'completed';
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  match: number;
  status: 'applied' | 'screening' | 'interview' | 'offer' | 'hired';
  avatar?: string;
  initials: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  pinned?: boolean;
}
