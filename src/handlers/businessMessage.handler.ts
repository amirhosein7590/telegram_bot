import { Context } from "grammy";
import { ConversationService } from "../services/conversation.service";
import { JobService } from "../services/job.service";
import { createJobsKeyboard } from "../keyboards/jobs.keyboard";

const conversation = new ConversationService();

const jobService = new JobService();

export async function handleBusinessMessage(ctx: Context) {
  const text = ctx.update.business_message?.text;
  if (!text) return;

  const connection = await ctx.getBusinessConnection();

  if (ctx.from?.id === connection.user.id) return;

  if (!conversation.isJobRelated(text)) {
    await ctx.reply(conversation.getDefaultMessage());

    return;
  }

  await ctx.reply("لطفاً موقعیت مورد نظر خود را انتخاب کنید:", {
    reply_markup: createJobsKeyboard(jobService.getAllJobs()),
  });
}
