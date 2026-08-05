export type ConversationKind = "job_related" | "not_job_related";

export interface ConversationAnalysis {
  kind: ConversationKind;
  normalizedText: string;
  matchedKeywords: string[];
}

export interface JobSummary {
  id: string;
  title: string;
}