import { Context } from "grammy";
import { JobService } from "../services/job.service";

const jobService = new JobService();

export async function handleJobSelection(ctx: Context) {
  const data = ctx.callbackQuery?.data;

  if (!data) return;

  const [, jobId] = data.split(":");

  const job = jobService.getJobById(jobId as string);

  if (!job) return;

  const response = `
${job.title}

${job.description}


شرایط:

${job.conditions.map((item) => `- ${item}`).join("\n")}
 `;

  await ctx.answerCallbackQuery();

  await ctx.reply(response);
}
