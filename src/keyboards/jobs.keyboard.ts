import { InlineKeyboard } from "grammy";
import { Job } from "../types/job.type";


export function createJobsKeyboard(
  jobs: Job[]
){

 const keyboard = new InlineKeyboard();


 jobs.forEach(job=>{

   keyboard.text(
    job.title,
    `job:${job.id}`
   )
   .row();

 });


 return keyboard;

}