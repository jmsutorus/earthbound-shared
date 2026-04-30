export type GoalStatus = 'not_started' | 'in_progress' | 'on_hold' | 'completed' | 'archived' | 'abandoned';
export type GoalPriority = 'low' | 'medium' | 'high';

export interface Goal {
  id: number;
  userId: string;
  slug: string;
  title: string;
  description: string | null;
  content: string | null;
  status: GoalStatus;
  target_date: string | null;
  completed_date: string | null;
  tags: string[];
  priority: GoalPriority;
  created_at: string;
  updated_at: string;
}

export interface GoalMilestone {
  id: number;
  goalId: number;
  title: string;
  description: string | null;
  target_date: string | null;
  completed: boolean;
  completed_date: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface GoalChecklistItem {
  id: number;
  goalId: number | null;
  milestoneId: number | null;
  text: string;
  completed: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface GoalWithDetails extends Goal {
  milestones: GoalMilestoneWithChecklist[];
  checklist: GoalChecklistItem[];
  progress: number;
}

export interface GoalMilestoneWithChecklist extends GoalMilestone {
  checklist: GoalChecklistItem[];
}

export interface GoalWithProgress extends Goal {
  progress: number;
  category?: string;
  milestoneCount: number;
  milestonesCompleted: number;
}


// Raw database row types (before parsing)
interface GoalRow {
  id: number;
  userId: string;
  slug: string;
  title: string;
  description: string | null;
  content: string | null;
  status: GoalStatus;
  target_date: string | null;
  completed_date: string | null;
  tags: string | null;
  priority: GoalPriority;
  created_at: string;
  updated_at: string;
}

interface MilestoneRow {
  id: number;
  goalId: number;
  title: string;
  description: string | null;
  target_date: string | null;
  completed: number;
  completed_date: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

interface ChecklistRow {
  id: number;
  goalId: number | null;
  milestoneId: number | null;
  text: string;
  completed: number;
  order_index: number;
  created_at: string;
  updated_at: string;
}
