export const person = {
  name: "Razeen H",
  title: "GenAI Full Stack Developer",
  email: "razeen.official23@gmail.com",
  phone: "+91 93450 35514",
  phoneHref: "tel:+919345035514",
  uae: "+971 50 769 7208",
  uaeHref: "tel:+971507697208",
  city: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/razeen-developer",
  github: "https://github.com/Razeen23",
  whatsapp: "https://wa.me/919345035514",
};

export const resumes = [
  {
    id: "in",
    label: "India",
    note: "Roles based in India",
    href: "/AI-Full-Stack-Developer-CV-Razeen.pdf",
    file: "AI-Full-Stack-Developer-CV-Razeen.pdf",
  },
  {
    id: "ae",
    label: "UAE",
    note: "Roles based in the UAE",
    href: "/GenAI-Full-Stack-Developer-CV-Razeen-UAE.pdf",
    file: "GenAI-Full-Stack-Developer-CV-Razeen-UAE.pdf",
  },
];

export const marquee = [
  "GenAI Full Stack",
  "Retrieval",
  "LangChain",
  "Kubernetes",
  "Helm",
  "S3",
  "Ceph",
  "Spring Boot",
  "FastAPI",
  "React",
  "TypeScript",
  "Docker",
  "Chennai",
];

export const proof =
  "The assistant answers from the docs. Kubernetes takes a repo live. The buckets are S3-compatible.";

export const stills = [
  { src: "/stills/ai-support.webp", title: "Support assistant", meta: "Hostzop · RAG" },
  { src: "/stills/cloud.webp", title: "Git to a live URL", meta: "Kubernetes · Helm" },
  { placeholder: true, title: "Object storage", meta: "S3-compatible · Ceph" },
  { src: "/stills/saas.webp", title: "Client portal", meta: "5,000 on the dashboards" },
  { src: "/stills/spotcard.webp", title: "SpotCard", meta: "Digital card" },
  { src: "/stills/invite.webp", title: "Invite", meta: "spotcard.in" },
  { src: "/stills/aryaa.webp", title: "Aryaa Foods", meta: "React" },
  { src: "/stills/sarab.webp", title: "Sarab Shipping", meta: "Logistics" },
  { src: "/stills/urban.webp", title: "Urban Horticulture", meta: "UAE" },
  { src: "/stills/hello.webp", title: "Hello Social", meta: "Studio site" },
  { src: "/stills/neet.webp", title: "Muthayammal NEET", meta: "Education" },
];

export const chapters = [
  {
    no: "01",
    kicker: "Hostzop · In the product",
    title: "The assistant answers from the docs.",
    image: "/stills/ai-support.webp",
    alt: "Hostzop Support AI chat inside a customer account, with a terminal beside the conversation.",
    paragraphs: [
      "A customer asks a server question inside the hosting account, instead of opening a ticket first. LangChain and FAISS pull the matching internal docs. OpenAI or Gemini answer only from that text. FastAPI serves the reply. React is the screen. 600+ customers use it.",
      "Common fixes run on their own: install a package, create a folder, check DNS, SSL, and the stack. A ticket opens only when the assistant cannot finish the fix, and the chat goes with it.",
    ],
    stack: ["Python", "FastAPI", "React", "LangChain", "FAISS", "OpenAI", "Gemini"],
  },
  {
    no: "02",
    kicker: "Hostzop · Kubernetes",
    title: "A repository becomes a URL.",
    image: "/stills/cloud.webp",
    alt: "Hostzop cloud panel used to manage hosted services.",
    paragraphs: [
      "A GitHub repository or a ZIP goes live on Kubernetes with no one logging into a server. The path detects the stack, builds an image, pushes it to Harbor, and installs it with Helm, TLS, and DNS.",
      "The model writes the Dockerfile from the detected stack. If a build or a deploy fails, it returns the cause, not only the raw log. Trivy scans the image before Helm installs it. Each app sits in its own namespace. The same API can add a domain, a database, and WordPress.",
    ],
    stack: ["Kubernetes", "Helm", "Docker", "Harbor", "Trivy", "Fastify", "PostgreSQL", "React"],
  },
  {
    no: "03",
    kicker: "Hostzop · Object storage",
    title: "S3-compatible buckets for an organization.",
    placeholder: true,
    alt: "Object storage dashboards are not photographed on this page yet.",
    paragraphs: [
      "A customer panel, an operator panel, and a billing API. The Spring Boot service covers organization accounts, buckets, upload and download, versioning, and IAM-style access policies. Objects are stored on local disk or on Ceph RGW.",
      "Prepaid plans are invoices. Razorpay, PayPal, or a confirmed bank transfer pays them. Digio KYC is required before an organization can buy capacity or create a bucket. Next.js dashboards cover buckets, members, billing, and platform operations.",
    ],
    stack: ["Java", "Spring Boot", "Ceph RGW", "MySQL", "Next.js", "React", "JWT", "Docker"],
  },
];

export const catalogue = [
  {
    no: "04",
    title: "AI email sender",
    blurb: "Ollama writes a separate email for each spreadsheet row. SQLite blocks a second send to the same address. SMTP sends on a rate limit.",
    stack: "Python · Ollama · SQLite",
  },
  {
    no: "05",
    title: "Financial document analyzer",
    blurb: "Earnings-call transcripts are ingested and searched by passage. A Streamlit page asks a question or requests a summary from those passages.",
    stack: "Python · Streamlit · Vector search",
  },
  {
    no: "06",
    title: "The hosting portal",
    blurb: "White-label portals in PHP, JavaScript, AJAX, and MySQL, used by 1,000 people. The dashboards serve 5,000. A paid order through Stripe or Razorpay turns the service on. A new VM is ready in 5 minutes instead of 40.",
    stack: "PHP · JavaScript · MySQL · D3.js",
  },
  {
    no: "07",
    title: "SpotCard",
    blurb: "A mobile-first invitation with a map, a schedule, and a gallery, plus a digital business card with a profile and a QR code.",
    stack: "React · Node.js · Vite",
    href: "https://spotcard.in",
  },
  {
    no: "08",
    title: "E-invoicing",
    blurb: "MasterGST writes the GST invoice from the order the billing system already has. Nine hours of retyping a week came off this flow, and filing errors on it went to zero.",
    stack: "PHP · MasterGST · MySQL",
  },
  {
    no: "09",
    title: "Release path",
    blurb: "GitHub Actions builds and deploys React, Node, and PHP over SSH. Release time dropped by 5×. Deployment issues dropped by 90%.",
    stack: "GitHub Actions · Linux · Nginx",
  },
  {
    no: "10",
    title: "Face attendance",
    blurb: "Aspire internship. A face is recognized as the person arrives, with OpenCV, cvzone, and NumPy. The model lives in Pickle. The record goes to Firebase.",
    stack: "Python · OpenCV · Firebase",
  },
  {
    no: "11",
    title: "Aryaa Foods",
    blurb: "A product site for a food manufacturer. React and Tailwind, with the photography edited for the page.",
    stack: "React · Tailwind",
    href: "https://aryaa-react-new.vercel.app",
  },
  {
    no: "12",
    title: "Sarab Shipping",
    blurb: "A logistics site for ocean, air, and land. Static, fast, and readable on a phone.",
    stack: "HTML · CSS · JavaScript",
    href: "https://sarab-shipping.vercel.app",
  },
  {
    no: "13",
    title: "Hello Social",
    blurb: "A studio site for a digital marketing and web firm.",
    stack: "React · Tailwind",
    href: "https://hellosocial.in",
  },
  {
    no: "14",
    title: "Urban Horticulture",
    blurb: "Farming equipment and services for growers in the UAE.",
    stack: "HTML · CSS · JavaScript",
    href: "https://urban-horticulture-farm.vercel.app",
  },
  {
    no: "15",
    title: "Muthayammal NEET",
    blurb: "Coaching, faculty, and admissions for NEET aspirants.",
    stack: "React",
    href: "http://muthayammalneet.com/",
  },
];

export const roles = [
  {
    when: "Aug 2023 — Present",
    place: "Chennai",
    title: "GenAI Full Stack Developer",
    org: "Hostzop Cloud Technologies Pvt. Ltd.",
    points: [
      "Built the support assistant into the hosting account. LangChain and FAISS pull the internal docs, and OpenAI or Gemini answer only from that text. It is used by 600+ customers.",
      "Put a GitHub repo or a ZIP on Kubernetes: stack detect, image, Harbor, Helm, TLS, and DNS. The model writes the Dockerfile and names the cause of a failed deploy.",
      "Built the Spring Boot API for S3-compatible object storage: accounts, buckets, upload and download, versioning, and access policies, with objects on disk or Ceph RGW.",
      "GitHub Actions cut release time by 5× and deployment issues by 90%. Dashboards serve 5,000 people. A new VM is ready in 5 minutes instead of 40.",
    ],
  },
  {
    when: "Apr 2023 — Jul 2023",
    place: "Internship",
    title: "Full Stack Developer Intern",
    org: "Aspire Systems",
    points: [
      "Shipped a real-time attendance system. Python, OpenCV, cvzone, and NumPy recognize a face as the person arrives.",
      "Stored the matching model with Pickle and wrote each record to Firebase. Best Performer award for the internship.",
    ],
  },
];

export const facts = [
  { value: "3+", label: "Years shipping product" },
  { value: "5,000+", label: "People on the dashboards" },
  { value: "5×", label: "Faster releases" },
  { value: "90%", label: "Fewer deploy issues" },
];

export const practice = [
  {
    no: "01",
    title: "The assistant",
    copy: "Retrieval with LangChain and FAISS, served by FastAPI. OpenAI and Gemini answer only from the retrieved text. The assistant can install a package, check DNS and SSL, and open a ticket only when it cannot finish.",
  },
  {
    no: "02",
    title: "Kubernetes",
    copy: "Docker, Harbor, Trivy, and Helm. Each app gets its own namespace, a certificate, and DNS. The model writes the Dockerfile from the detected stack and names the cause of a failed deploy.",
  },
  {
    no: "03",
    title: "The buckets",
    copy: "An S3-compatible API in Spring Boot: accounts, buckets, upload, download, versioning, and IAM-style policies. Objects live on disk or Ceph RGW. Next.js covers the customer panel and the operator panel.",
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications",
    meta: "Mohamed Sathak College of Arts and Science, Chennai · 2019 — 2022",
  },
  {
    title: "Diploma in Counseling Psychology",
    meta: "Sypa IIE · 2020 — 2021",
  },
];

export const certifications = [
  "Full Stack Development — Offline training",
  "Back-end Development — Meta",
  "JavaScript — Udemy",
  "Fundamentals of Cybersecurity — upGrad",
  "UX Design Process — Google",
];

export const awards = [
  "Best Performer, Aspire Systems internship.",
  "Led a 10-member team during NCC camp.",
];

export const languages = ["English, fluent", "Tamil, native", "Hindi"];
