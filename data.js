// נתוני לוח השיעורים - בית המדרש בטכניון
// מקור: הודעה שאיתן שלח לרב דוקוב (טרם אושרה על ידו). לוודא מולו לפני פרסום.

const CATEGORIES = {
  rabanim: { label: "שיעורי הרב", color: "#1f7a7a" },
  groups: { label: "קבוצות לימוד", color: "#2e86c1" },
  women: { label: "לנשים", color: "#d81b8c" },
  chevruta: { label: "חברותא", color: "#8a8a8a" }
};

const LANGUAGES = ["עברית", "צרפתית", "אנגלית"];

const DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

const CONTACTS = {
  "וחי בהם": { contact: "גיל טולדנו" },
  "מדרשה לבנות": { contact: "רינת" },
  "אמונה ומעשה": { contact: "איתן", phone: "058-5858432" }
};

const SCHEDULE = [
  { time: "18:00", subject: "דף יומי", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 40, timeLabel: "שעה לפני מנחה" },
  { time: "18:40", subject: "שיעור (נושא חדש - אלול)", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 40, timeLabel: "שעה לפני מנחה" },
  { time: "19:35", subject: "שיעור", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 30, timeLabel: "בין מנחה לערבית" },

  { time: "8:00", subject: "לימוד כוזרי", teacher: "איתי", category: "groups", contactKey: "", days: ["רביעי"], duration: 60 },

  { time: "20:30", subject: "שיעור אמונה", teacher: "דורון אביטל", category: "groups", contactKey: "", days: ["ראשון"], duration: 60, note: "השעה משתנה" },
  { time: "20:30", subject: "אמונה ומעשה", teacher: "", category: "groups", contactKey: "אמונה ומעשה", days: ["שני"], duration: 90 },
  { time: "20:00", subject: "מדרשה לבנות - שיעור עם אפרת", teacher: "אפרת", category: "women", contactKey: "מדרשה לבנות", days: ["שני"], duration: 60 },
  { time: "21:00", subject: "מדרשה לבנות - שיעור עם מו\"ר", teacher: "מו\"ר הרב אלעד דוקוב", category: "women", contactKey: "מדרשה לבנות", days: ["שני"], duration: 60 },
  { time: "20:00", subject: "חברותא בצרפתית", teacher: "", category: "chevruta", contactKey: "", days: ["שני"], duration: 120, lang: "צרפתית" },
  { time: "20:00", subject: "JLC", teacher: "הרב אבן לוין", category: "rabanim", contactKey: "", days: ["שני"], duration: 120, lang: "אנגלית" },

  { time: "18:00", subject: "חברותא", teacher: "", category: "chevruta", contactKey: "", days: ["שלישי"], duration: 240 },

  { time: "20:30", subject: "וחי בהם - הלכה בעיון", teacher: "הרב עדיאל כהן", category: "groups", contactKey: "וחי בהם", days: ["רביעי"], duration: 60 },

  { time: "19:00", subject: "דרשת שבת", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["שישי"], duration: 20, timeLabel: "בין קבלת שבת לערבית" },

  { time: "10:45", subject: "שיעור אחרי התפילה", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["שבת"], duration: 60 },
  { time: "19:35", subject: "סעודה שלישית ושיעור", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["שבת"], duration: 30, timeLabel: "בין מנחה לערבית" }
];
