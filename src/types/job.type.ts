export interface Job {
  id: string;
  title: string;
  description: string;
  conditions: string[];
  type: "remote" | "onsite";
}


export interface JobsData {
  jobs: Job[];
}