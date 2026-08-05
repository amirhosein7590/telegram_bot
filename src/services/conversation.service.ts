const keywords = [
 "کار",
 "استخدام",
 "همکاری",
 "شغل",
 "فرصت",
 "نیرو"
];


export class ConversationService {


isJobRelated(text:string){

 const normalized =
 text.toLowerCase();


 return keywords.some(keyword =>
   normalized.includes(keyword)
 );

}


getDefaultMessage(){

 return `
برای راهنمایی بهتر، لطفاً درباره فرصت‌های همکاری سوال بفرمایید.
 `;

}


}