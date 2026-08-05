import { Job } from "../types/job.type";

export class ResponseService {
  getGeneralGuidanceMessage(): string {
    return "برای راهنمایی بهتر، لطفاً درباره فرصت‌های همکاری و یکی از موقعیت‌های شغلی ما سؤال بفرمایید.";
  }

  getJobSelectionMessage(): string {
    return "لطفاً موقعیت موردنظر خود را انتخاب کنید:";
  }

  formatJobDetails(job: Job): string {
    const conditionsBlock = job.conditions
      .map((item) => `- ${item}`)
      .join("\n");

    return [
      job.title,
      "",
      job.description,
      "",
      "شرایط:",
      conditionsBlock
    ].join("\n");
  }

  getUnknownJobMessage(): string {
    return "موقعیت انتخاب‌شده معتبر نیست.";
  }
}