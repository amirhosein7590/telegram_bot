import jobsData from "../data/jobs.json";
import { Job } from "../types/job.type";


export class JobService {

   jobs = jobsData.jobs as Job[];

  getAllJobs(): Job[] {
    return this.jobs
  }


  getJobById(id:string): Job | undefined {

    return this.jobs.find(
      job => job.id === id
    )
  }

}