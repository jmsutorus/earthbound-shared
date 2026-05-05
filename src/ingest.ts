export type IngestionSource = 'email' | 'extension' | 'share' | 'manual';
export type IngestionStatus = 'pending' | 'processing' | 'processed' | 'needs_review' | 'rejected';
export type IngestionConfidence = 'low' | 'medium' | 'high';

export interface PendingIngestion {
  id: number;
  userId: string;
  source: IngestionSource;
  rawContent: string;
  category: string | null;
  extractedData: any | null;
  status: IngestionStatus;
  targetId: number | null;
  targetType: string | null;
  confidence: IngestionConfidence | null;
  reasoning: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface IngestionInput {
  source: IngestionSource;
  content: string;
  key?: string;
}

export interface IngestionResolveInput {
  category?: string;
  targetId?: number;
  targetType?: string;
  status?: IngestionStatus;
  extractedData?: any;
}
