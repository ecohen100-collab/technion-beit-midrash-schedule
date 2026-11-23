// נתוני לוח השיעורים - בית המדרש בטכניון
// מקור: הודעה שאיתן שלח לרב דוקוב (טרם אושרה על ידו). לוודא מולו לפני פרסום.
// תוכניות "חי בהם" (ראשון, שני, רביעי): לפי מצגת ערב הפתיחה תשפ"ז.

const CATEGORIES = {
  rabanim: { label: "שיעורי הרב", color: "#1f7a7a" },
  groups: { label: "קבוצות לימוד", color: "#2e86c1" },
  women: { label: "לנשים", color: "#d81b8c" },
  chevruta: { label: "פרוייקט חברותא", color: "#8a8a8a" },
  tefila: { label: "מניינים נוספים", color: "#6b5b95" }
};

const LANGUAGES = ["עברית", "צרפתית", "אנגלית"];

const DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

const CONTACTS = {
  "ליל שישי": { contact: "מור דהן", phone: "052-5716990", groupLink: "https://chat.whatsapp.com/GuG31iNAL0eEsACA6NCyVC" },
  "אגדות חז\"ל": { groupLink: "https://chat.whatsapp.com/LX4WVjIK8km7TZQ96imYsC" },
  "וחי בהם": { contact: "גיל טולדנו", phone: "055-2260801", groupLink: "https://chat.whatsapp.com/H2WagQbdAm197aFaSc19Cf" },
  "מדרשה לבנות": { contact: "רינת", phone: "052-6161326", groupLink: "https://chat.whatsapp.com/Af1NEA9GI7773tjSYk0thG" },
  "אמונה ומעשה": { contact: "איתן כהן", phone: "058-5858432", groupLink: "https://chat.whatsapp.com/ILfOUuOtzYjGbN0RmvYJIB" },
  "Lunch and Learn": { contact: "טובה לוין", phone: "052-2298735" },
  "לימוד כוזרי": { contact: "איתן כהן", phone: "058-5858432", groupLink: "https://chat.whatsapp.com/KlnvYtRDlE555GbwlyqvW1" },
  "חסידות": { contact: "חנניה גבאי", phone: "+33 7 66 81 35 23" }
};

const SCHEDULE = [
  { time: "6:00", subject: "שחרית", teacher: "", category: "tefila", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 40 },
  { time: "8:00", subject: "שחרית", teacher: "", category: "tefila", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 40 },
  { time: "14:00", subject: "מנחה", teacher: "", category: "tefila", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 15 },
  { time: "18:30", subject: "ערבית", teacher: "", category: "tefila", contactKey: "", days: ["ראשון","שני","שלישי","רביעי"], duration: 15 },
  { time: "17:05", subject: "דף יומי", teacher: "הרב ישראל אריה ברנאד", category: "groups", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 60, timeLabel: "מיד אחרי ערבית" },
  { time: "18:40", subject: "שיעור", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 40, timeLabel: "שעה לפני מנחה", rel: -40, hidden: true },
  { time: "19:35", subject: "שיעור", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["ראשון","שני","שלישי","רביעי","חמישי"], duration: 30, timeLabel: "בין מנחה לערבית" },

  { time: "8:00", subject: "לימוד כוזרי", teacher: "איתן כהן", category: "groups", contactKey: "לימוד כוזרי", days: ["רביעי"], duration: 60 },

  { time: "18:30", subject: "אגדות חז\"ל - שיעור אמונה ומחשבה", teacher: "הרב דורון אביטל", category: "groups", contactKey: "אגדות חז\"ל", days: ["ראשון"], duration: 60, hidden: true, note: "בנושאים מגוונים עפ\"י מדרשי חז\"ל" },
  { time: "19:00", subject: "אמונה ומעשה", teacher: "איתן כהן או הרב נדב טולדו", category: "groups", contactKey: "אמונה ומעשה", days: ["שני"], duration: 60, note: "20:00 ארוחת ערב. פעם בחודש: מרצה אורח, ערב משותף עם המדרשה" },
  { time: "20:20", subject: "אמונה ומעשה - קודש וחול", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "אמונה ומעשה", days: ["שני"], duration: 30 },
  { time: "19:00", subject: "מדרשה לבנות", teacher: "אפרת ומו\"ר הרב אלעד דוקוב", category: "women", contactKey: "מדרשה לבנות", days: ["שני"], duration: 120 },
  { time: "19:00", subject: "שיעור בצרפתית", teacher: "ר' מיכאל וועקנין", category: "groups", contactKey: "", days: ["שני"], duration: 60, lang: "צרפתית" },

  { time: "20:30", subject: "חסידות", teacher: "", category: "groups", contactKey: "חסידות", days: ["רביעי"], duration: 90, lang: "צרפתית" },

  { time: "19:30", subject: "תוכנית סמיכת חבר", teacher: "הרב אבן לוין", category: "groups", contactKey: "", days: ["ראשון"], duration: 60, lang: "אנגלית", note: "לימוד עמוק בענייני הלכה. השעה תלויה בזמני תפילה" },
  { time: "19:00", subject: "משמר", teacher: "הרב אבן לוין", category: "groups", contactKey: "", days: ["שני"], duration: 60, lang: "אנגלית", note: "לימוד בחבורות קטנות" },

  { time: "18:30", subject: "שיעור הלכה לנשים", teacher: "הרב אבן לוין", category: "women", contactKey: "", days: ["שלישי"], lang: "אנגלית", note: "בדירה של אחת הבנות (לא בבית המדרש)" },
  { time: "18:00", subject: "פרוייקט חברותא", teacher: "", category: "chevruta", contactKey: "", days: ["שלישי"], duration: 240 },

  { time: "13:00", subject: "Lunch and Learn", teacher: "טובה לוין", category: "groups", contactKey: "Lunch and Learn", days: ["רביעי"], duration: 60, lang: "אנגלית" },
  { time: "20:00", subject: "חי בהם - הלכה במרחבי החיים", teacher: "הרב עדיאל כהן", category: "groups", contactKey: "וחי בהם", days: ["רביעי"], duration: 60, note: "נושאים הלכתיים הקשורים בחיי היומיום של כולנו" },
  { time: "19:30", subject: "תוכנית הכנה למבחן רבנות - חופה וקידושין", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["רביעי"], duration: 90 },

  { time: "19:00", subject: "ליל שישי - צ'ולנט ולימוד", teacher: "הרב ישראל אריה ברנאד", category: "groups", contactKey: "ליל שישי", days: ["חמישי"], duration: 60 },
  { time: "8:30", subject: "שיעור בגמרא", teacher: "הרב אבן לוין", category: "groups", contactKey: "", days: ["חמישי"], duration: 60, lang: "אנגלית", note: "השעה משוערת" },

  { time: "19:00", subject: "דרשת שבת", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["שישי"], duration: 20, timeLabel: "בין קבלת שבת לערבית" },

  { time: "10:45", subject: "שיעור אחרי התפילה", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["שבת"], duration: 60 },
  { time: "19:35", subject: "סעודה שלישית ושיעור", teacher: "מו\"ר הרב אלעד דוקוב", category: "rabanim", contactKey: "", days: ["שבת"], duration: 30, timeLabel: "בין מנחה לערבית" }
];
