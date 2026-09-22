export type Testimonial = {
  id: string
  name: string
  role?: string
  project?: string
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
}

/** Public reviews — add manually after clients send feedback on WhatsApp. */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Muhammad Kaif",
    role: "Client",
    project: "Sports Ecosystem Platform",
    rating: 5,
    quote:
      "Bhai kaam zabardast tha. Sports platform pe booking, coaching, marketplace sab clear flow mein. Deadline pe deliver kiya aur baad mein bugs bhi jaldi fix kar diye. FYP demos ke liye ab yehi use kar raha hun — recommend karta hun agar koi full-stack chahiye.",
  },
  {
    id: "2",
    name: "Anam Riaz",
    role: "Client",
    project: "Eventify",
    rating: 5,
    quote: "Exactly what we needed. Fast and clean.",
  },
  {
    id: "3",
    name: "Muhammad Basit",
    role: "Client",
    project: "OEMS",
    rating: 5,
    quote:
      "آن لائن امتحان والا سسٹم بالکل ہمارے SRS کے مطابق بنا۔ ٹیچر پیپر بھیجتے ہیں، ایڈمن اپروو کرتا ہے، سٹوڈنٹ کا ٹائمر اور آٹو سیو بھی ٹھیک چل رہا ہے۔ رپورٹس PDF میں مل جاتی ہیں۔ بہت شکریہ — اگلے سمسٹر بھی اسی پر چلیں گے۔",
  },
  {
    id: "4",
    name: "Dr. M. Nadeem Sajjad",
    role: "Client",
    project: "Personal Website",
    rating: 5,
    quote: "Professional site, on time. Simple and looks good live.",
  },
  {
    id: "5",
    name: "Ayesha Nadeem",
    role: "Client",
    project: "Prescripto",
    rating: 5,
    quote:
      "Clinic ke liye appointment system chahiye tha — patients, doctors, admin dashboards alag. Saad ne MERN pe properly banaya. Booking flow smooth hai aur JWT auth bhi secure feel hota hai. Support ke messages ka reply bhi jaldi aata tha.",
  },
  {
    id: "6",
    name: "Fatima Afzal",
    role: "Client",
    project: "Finance Tracker",
    rating: 4,
    quote: "Charts clear hain. Paisa track karna asaan ho gaya.",
  },
  {
    id: "7",
    name: "Laiba Zulfiqar",
    role: "Client",
    project: "Brandable",
    rating: 5,
    quote:
      "Landing page ka look bilkul brand jaisa chahiye tha. Sections modular hain, CTAs clear. Thodi changes mangwayi thin — turant update kar diye. Overall soft launch ke liye perfect tha.",
  },
  {
    id: "8",
    name: "Ahmad Akram",
    role: "Client",
    project: "Ecommerce Frontend",
    rating: 5,
    quote: "Cart UX bohat smooth. Backend plug karna easy lag raha.",
  },
  {
    id: "9",
    name: "Abdul Moiz",
    role: "Client",
    project: "Question Paper Generator",
    rating: 5,
    quote:
      "سوالات کا بینک اور پیپر جنریشن والا حصہ بالکل کام کر رہا ہے۔ رولز کے ساتھ پیپر بنتے ہیں اور ایکسپورٹ بھی ٹھیک ہے۔ فیکلٹی والوں کو سمجھ آ گیا۔ شکریہ!",
  },
  {
    id: "10",
    name: "Hassan Ali",
    role: "Client",
    project: "Blood Bank System",
    rating: 5,
    quote:
      "Donor registry aur stock alerts theek se chal rahe hain. Role-based access staff ke liye clear hai. NGO demo pe positive feedback mila — next phase inventory reports add karenge.",
  },
  {
    id: "11",
    name: "Sara Khan",
    role: "Client",
    project: "Codsoft",
    rating: 4,
    quote: "Internship tasks on time. UI neat.",
  },
  {
    id: "12",
    name: "Usman Raza",
    role: "Client",
    project: "Dice App",
    rating: 5,
    quote: "Animation maze ki hai. Friends ke sath board games pe use karte hain.",
  },
  {
    id: "13",
    name: "Zainab Malik",
    role: "Client",
    project: "Hangman",
    rating: 5,
    quote:
      "Classic hangman but keyboard support aur hints ke sath. Bachon ko sikhane ke liye rakha hai. Chhoti si request pe difficulty levels bhi add kar diye — thanks!",
  },
  {
    id: "14",
    name: "Bilal Ahmed",
    role: "Client",
    project: "BMI Calculator",
    rating: 4,
    quote: "Simple utility. Instant result. No drama.",
  },
  {
    id: "15",
    name: "Hira Shah",
    role: "Client",
    project: "SharePreference",
    rating: 5,
    quote:
      "Android pe SharedPreferences wala demo clear tha. Assignment samajhne mein madad mili. Code readable hai aur comments bhi theek hain. Next assignment ke liye bhi contact karungi inshaAllah.",
  },
]

export const WHATSAPP_FEEDBACK_NUMBER = "923061975881"

/** Quotes longer than this show a Read more control on cards. */
export const TESTIMONIAL_PREVIEW_CHARS = 110
