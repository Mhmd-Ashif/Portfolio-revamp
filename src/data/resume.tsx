import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
//data
export const DATA = {
  name: "Mohamed Ashif",
  initials: "MA",
  url: "http://localhost:3000",
  location: "Thanjavur, TN",
  description:
    "I'm a full-stack developer Who loves building Scalable web apps and currently learning Web3",
  summary:
    "I’m Mohamed Ashif, a Computer Science graduate passionate about full-stack development with the MERN and Next.js ecosystems. I love building scalable web applications, exploring Web3, and using tools like Docker and Github to streamline workflows. Outside of coding, I’m a football enthusiast and Manchester United supporter who also enjoys gaming as a way to unwind and spark creativity.",
  avatarUrl: "/pfp3 colored.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Framer Motion",
    "Socket.io",
    "Express",
    "Node.js",
    "Redis",
    "Postgres",
    "MongoDB",
    "Prisma ORM",
    "NPM",
    "Docker",
    "C++ (DSA focused)",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mohamedashif18se@gmail.com",
    tel: "+91 8610417055",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mhmd-Ashif",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mhmd-ashif/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mhmdashif18",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1uoz3NIlBiYDdhLCDzGw6I68ueIqxkhyI/view?usp=sharing",
        icon: Icons.googleDrive,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelancer",
      badges: [],
      location: "Remote",
      title: "Freelance Full Stack Developer",
      logoUrl: "/webgi.png",
      start: "Nov 2022",
      end: "Present",
      description:
        "Delivered 3 production web applications to clients, boosting user engagement by 40% through responsive design and performance optimization across 15+ components Engineered SEO-optimized Next.js landing pages, increasing organic traffic by 5% within 3 months of deployment Architected backend systems using Node.js and Express.js, handling 200+ daily API requests with 99.5% uptime Collaborated with 3 cross-functional teams to gather requirements and deliver projects 2 weeks ahead of schedule",
    },
  ],
  education: [
    {
      school: "Parisutham Insitute of Technology and Science",
      href: "https://www.parisuthamtech.com/",
      degree:
        "Bachelor of Engineering (B.E) in Computer Science and Engineering (CSE)",
      logoUrl: "/clglogo.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Wallet Gen",
      href: "https://wallet-ash.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "A secure, dark-themed HD wallet generator for Solana and Ethereum that lets users create or recover wallets with mnemonics, view real-time balances, and copy keys easily using a sleek Tailwind + Shadcn UI.",
      technologies: ["React js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://wallet-ash.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mhmd-Ashif/WalletGen",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.jsdelivr.net/gh/Mhmd-Ashif/Project-Demos@main/wallet-ash-1756729979917.mp4",
    },
    {
      title: "Dapp",
      href: "https://dapp-ten-flame.vercel.app/",
      dates: "July 2025",
      active: true,
      description:
        "Designed, developed and Solana Token Launchpad using Solana SPL token program",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Solana SPL Token",
      ],
      links: [
        {
          type: "Website",
          href: "https://dapp-ten-flame.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mhmd-Ashif/Dapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.jsdelivr.net/gh/Mhmd-Ashif/Project-Demos@main/dapp.mp4",
    },
    {
      title: "Song Sync",
      href: "https://song-sync-eta.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "Song Sync is a real-time platform that lets friends stream YouTube music together in sync, using WebSockets, Redis, and Firebase OAuth for smooth, collaborative listening.",
      technologies: [
        "React.js",
        "Typescript",
        "Node.js",
        "Redis",
        "Socket.io",
        "TailwindCSS",
        "Shadcn UI",
        "Firebase OAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://song-sync-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mhmd-Ashif/song-sync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.jsdelivr.net/gh/Mhmd-Ashif/Project-Demos@main/song-sync-v2.mp4",
    },
    {
      title: "Payit",
      href: "https://payit-wallet.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "PayIt is a Paytm-inspired digital wallet built with Next.js, Tailwind, PostgreSQL, and Prisma, offering secure email login, real-time transactions, and a clean dashboard for seamless money transfers and tracking.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Email Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://payit-wallet.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mhmd-Ashif/payit-wallet",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Mhmd-Ashif/Project-Demos@main/img2.png",
      video: "",
    },
    {
      title: "Medium Clone",
      href: "https://medium-mauve.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "A Medium-like blogging platform with a rich-text editor, built using Cloudflare Workers, Hono, MongoDB, and React for fast, secure, and responsive writing and reading experiences.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Cloudflare Workers",
        "MongoDB",
        "JWT Auth",
        "Hono",
      ],
      links: [
        {
          type: "Website",
          href: "https://medium-mauve.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mhmd-Ashif/medium",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://cdn.jsdelivr.net/gh/Mhmd-Ashif/Project-Demos@main/img3.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Crackathon 2.0",
      dates: "November 14th - 15th, 2024",
      location: "Karur, Tamilnadu",
      description:
        "Partially developed a shared cab-riding platform where users can register and share rides to their destination, reducing individual travel costs.",
      links: [],
    },
  ],
} as const;
