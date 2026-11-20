
import { useState } from "react";

import {
  Activity,
  ArrowUpRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Users,
  Pill,
  Clock3,
  Code2,
  Menu,
  X,
  Stethoscope,
  ClipboardCheck,
  Languages,
  Siren,
  Mail,
  ArrowRight,
  Zap,
  Radio,
  CircleDot,
  ScanLine,
  Fingerprint,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BellRing,
    number: "01",
    title: "Intelligent reminders",
    description:
      "Timely medication reminders with an adaptive alert sequence designed to reduce missed doses.",
    tag: "SMART NOTIFICATIONS",
  },
  {
    icon: Users,
    number: "02",
    title: "Connected caregivers",
    description:
      "Caregivers stay informed through alerts when medication is delayed or missed.",
    tag: "CONNECTED CARE",
  },
  {
    icon: Activity,
    number: "03",
    title: "Adaptive intelligence",
    description:
      "Medication patterns are monitored to help the reminder experience respond to user behaviour.",
    tag: "BEHAVIOUR AWARE",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Dose intelligence",
    description:
      "A clear history of taken, snoozed and missed medication doses.",
    tag: "MEDICATION TRACKING",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Accessible by design",
    description:
      "Large controls, readable layouts and simple navigation for elderly users.",
    tag: "HUMAN CENTRED",
  },
  {
    icon: Languages,
    number: "06",
    title: "Inclusive experience",
    description:
      "Multilingual support and voice reminders help make medication management more accessible.",
    tag: "ACCESSIBILITY",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "SQLite",
  "JWT Authentication",
  "Server-Sent Events",
];

const screenshots = [
  {
    title: "Login experience",
    subtitle: "A simple, accessible entry point.",
    image: "/screenshots/login.png",
    number: "01",
  },
  {
    title: "Elderly dashboard",
    subtitle: "Daily medication at a glance.",
    image: "/screenshots/elderly-dashboard.png",
    number: "02",
  },
  {
    title: "Caregiver dashboard",
    subtitle: "Connected monitoring and alerts.",
    image: "/screenshots/caregiver-dashboard.png",
    number: "03",
  },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F9F8] text-[#17324D]">
      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background: #3D8C87; color: white; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glow {
          0%, 100% { opacity: .35; }
          50% { opacity: .75; }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }

        .float-card { animation: float 6s ease-in-out infinite; }
        .float-card-delayed { animation: floatReverse 7s ease-in-out infinite; }
        .orbit-ring { animation: orbit 35s linear infinite; }
        .glow-pulse { animation: glow 4s ease-in-out infinite; }

        .medical-grid {
          background-image:
            linear-gradient(rgba(23,50,77,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,50,77,.045) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .glass-panel {
          background: rgba(255,255,255,.76);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.9);
          box-shadow: 0 24px 80px rgba(23,50,77,.09);
        }

        .section-label {
          font-size: 10px;
          letter-spacing: .23em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .reveal-line {
          height: 1px;
          background: linear-gradient(90deg, #3D8C87, transparent);
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-[#17324D]/10 bg-[#F7F9F8]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#17324D] text-white shadow-lg shadow-[#17324D]/15">
              <HeartPulse size={23} />
            </div>
            <div>
              <p className="text-[17px] font-bold tracking-tight">
                MediCare<span className="text-[#3D8C87]"> Assist.</span>
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-slate-400">
                Intelligent healthcare
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-9 text-[13px] font-medium text-[#526777] lg:flex">
            <a href="#about" className="transition hover:text-[#3D8C87]">Overview</a>
            <a href="#features" className="transition hover:text-[#3D8C87]">Capabilities</a>
            <a href="#screenshots" className="transition hover:text-[#3D8C87]">Experience</a>
            <a href="#technology" className="transition hover:text-[#3D8C87]">Technology</a>
          </div>

          <a
            href="https://github.com/sathwikgandham9-creator/medicare-assist"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#17324D] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#3D8C87] md:flex"
          >
            Explore project <ArrowUpRight size={15} />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-[#17324D]/10 p-2.5 lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-[#17324D]/10 bg-[#F7F9F8] px-6 py-6 text-sm lg:hidden">
            {[
              ["Overview", "#about"],
              ["Capabilities", "#features"],
              ["Experience", "#screenshots"],
              ["Technology", "#technology"],
            ].map(([name, link]) => (
              <a key={name} href={link} onClick={() => setMenuOpen(false)}>
                {name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative isolate">
        <div className="medical-grid absolute inset-0 -z-20 opacity-70" />
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#BBDCD4]/35 blur-[110px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#D7E5EF]/50 blur-[100px]" />

        <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:pb-32 lg:pt-28">
          {/* Hero text */}
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#3D8C87]/20 bg-white/75 px-4 py-2.5 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3D8C87] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3D8C87]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#3D8C87]">
                A smarter approach to elderly care
              </span>
            </div>

            <p className="section-label mb-5 text-[#3D8C87]">
              HUMAN CARE · INTELLIGENT TECHNOLOGY
            </p>

            <h1 className="max-w-3xl text-[clamp(3.5rem,7vw,6.6rem)] font-semibold leading-[.99] tracking-[-.065em] text-[#17324D]">
              Care that
              <br />
              thinks <span className="font-serif font-normal italic text-[#3D8C87]">ahead.</span>
              <br />
              Connects
              <br />
              <span className="font-serif font-normal italic text-[#17324D]/60">hearts.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[15px] leading-8 text-[#617382] sm:text-base">
              Meet MediCare Assist — an intelligent medication reminder and
              caregiver alert platform designed to make everyday care more
              reliable, accessible and connected.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#17324D] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#17324D]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#3D8C87]"
              >
                Discover the platform
                <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="#screenshots"
                className="inline-flex items-center gap-2 rounded-full border border-[#17324D]/15 bg-white/70 px-7 py-4 text-sm font-semibold text-[#17324D] transition hover:border-[#3D8C87] hover:bg-white"
              >
                See it in action <ChevronRight size={16} />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#17324D]/10 pt-7">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-[#3D8C87]" />
                <span className="text-xs font-medium text-[#617382]">Elderly-first design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Radio size={18} className="text-[#3D8C87]" />
                <span className="text-xs font-medium text-[#617382]">Real-time alerts</span>
              </div>
            </div>
          </div>

          {/* Futuristic dashboard visual */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3D8C87]/15" />
            <div className="orbit-ring absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3D8C87]/25" />
            <div className="glow-pulse absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9DCD3]/40 blur-[65px]" />

            <div className="relative z-10 mx-auto max-w-[470px] rounded-[30px] border border-white bg-white/80 p-4 shadow-[0_35px_100px_rgba(23,50,77,.14)] backdrop-blur-2xl sm:p-6">
              <div className="flex items-center justify-between border-b border-[#17324D]/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17324D] text-white">
                    <HeartPulse size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#17324D]">Care overview</p>
                    <p className="text-[10px] tracking-wide text-slate-400">MEDICATION MONITORING</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#E6F0ED] px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3D8C87]" />
                  <span className="text-[10px] font-bold text-[#3D8C87]">CONNECTED</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#17324D] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-white/55">Daily doses</span>
                    <Pill size={17} className="text-[#9BD4C7]" />
                  </div>
                  <p className="mt-5 text-4xl font-semibold tracking-tight">04</p>
                  <p className="mt-1 text-[10px] text-white/55">Scheduled today</p>
                </div>
                <div className="rounded-2xl bg-[#E6F0ED] p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#66817B]">Care status</span>
                    <Activity size={17} className="text-[#3D8C87]" />
                  </div>
                  <p className="mt-5 text-2xl font-semibold text-[#17324D]">Active</p>
                  <p className="mt-2 text-[10px] text-[#66817B]">Illustrative preview</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#17324D]/10 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#17324D]">Medication schedule</p>
                    <p className="mt-1 text-[10px] text-slate-400">Today's overview</p>
                  </div>
                  <CalendarClock size={20} className="text-[#3D8C87]" />
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { name: "Morning dose", time: "08:00 AM", status: "Taken", icon: CheckCircle2 },
                    { name: "Afternoon dose", time: "01:00 PM", status: "Upcoming", icon: Clock3 },
                    { name: "Evening dose", time: "07:00 PM", status: "Upcoming", icon: Pill },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name} className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${index === 0 ? "bg-[#E6F0ED] text-[#3D8C87]" : "bg-[#F2F5F6] text-[#80919C]"}`}>
                          <Icon size={17} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-[#17324D]">{item.name}</p>
                          <p className="mt-1 text-[10px] text-slate-400">{item.time}</p>
                        </div>
                        <span className={`text-[10px] font-semibold ${index === 0 ? "text-[#3D8C87]" : "text-slate-400"}`}>
                          {item.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#3D8C87]/15 bg-[#E6F0ED]/75 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#3D8C87]">
                  <BellRing size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#17324D]">Caregiver connection</p>
                  <p className="mt-1 text-[10px] text-[#71847F]">Alerts keep care teams informed.</p>
                </div>
                <ArrowUpRight size={17} className="text-[#3D8C87]" />
              </div>
            </div>

            {/* Floating cards */}
            <div className="float-card absolute -left-7 top-16 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-2xl shadow-[#17324D]/10 backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#E6F0ED] p-2.5 text-[#3D8C87]">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#17324D]">Dose recorded</p>
                  <p className="mt-1 text-[9px] text-slate-400">Medication activity</p>
                </div>
              </div>
            </div>

            <div className="float-card-delayed absolute -right-5 bottom-20 z-20 hidden rounded-2xl border border-white bg-white/90 p-4 shadow-2xl shadow-[#17324D]/10 backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#17324D] p-2.5 text-white">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#17324D]">Care connected</p>
                  <p className="mt-1 text-[9px] text-slate-400">Caregiver support</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -z-10 h-20 w-3/4 -translate-x-1/2 rounded-full bg-[#3D8C87]/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Project signal strip */}
      <section className="border-y border-[#17324D]/10 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-6 py-8 sm:grid-cols-3 lg:px-12">
          {[
            { icon: HeartPulse, title: "Human-centred", text: "Designed around everyday care" },
            { icon: Zap, title: "Adaptive alerts", text: "Responsive reminder experience" },
            { icon: Radio, title: "Connected support", text: "Caregiver communication" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F0ED] text-[#3D8C87]">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#17324D]">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute -right-48 top-20 h-96 w-96 rounded-full bg-[#E6F0ED] blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-12">
          <div>
            <p className="section-label text-[#3D8C87]">01 / The purpose</p>
            <h2 className="mt-7 text-5xl font-semibold leading-[1.08] tracking-[-.045em] text-[#17324D] sm:text-6xl">
              Technology
              <br />
              should feel
              <br />
              <span className="font-serif font-normal italic text-[#3D8C87]">human.</span>
            </h2>
            <div className="reveal-line mt-9 w-36" />
            <p className="mt-7 max-w-md text-sm leading-8 text-[#647684]">
              Healthcare technology matters most when it makes everyday life
              easier for the people who depend on it.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xl leading-9 text-[#365168] sm:text-2xl">
              Managing multiple medications can become challenging,
              particularly for elderly people who need consistent support.
              MediCare Assist brings schedules, reminders and caregiver
              communication together in one accessible platform.
            </p>
            <p className="mt-7 leading-8 text-[#71818C]">
              The system monitors medication activity and responds to delayed
              or missed doses through an adaptive alert process. Its purpose
              is to make medication management simpler for users and more
              visible to their caregivers.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="group rounded-3xl border border-[#17324D]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17324D]/5">
                <Stethoscope className="text-[#3D8C87]" size={26} />
                <h3 className="mt-6 font-semibold text-[#17324D]">For elderly users</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Simple schedules, accessible controls and supportive reminders.
                </p>
              </div>
              <div className="group rounded-3xl border border-[#17324D]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17324D]/5">
                <HeartPulse className="text-[#3D8C87]" size={26} />
                <h3 className="mt-6 font-semibold text-[#17324D]">For caregivers</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Better visibility into medication activity and missed doses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - dark contrast section */}
      <section id="features" className="relative overflow-hidden bg-[#17324D] py-28 text-white">
        <div className="medical-grid absolute inset-0 opacity-[.07]" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#3D8C87]/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#7395B1]/15 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="section-label text-[#91C8BA]">02 / Platform capabilities</p>
              <h2 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl">
                More than reminders.
                <br />
                <span className="font-serif font-normal italic text-[#91C8BA]">A connected care system.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-8 text-slate-300">
              Every feature is designed to support a more reliable and
              accessible medication experience.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.number}
                  className="group relative bg-[#17324D] p-8 transition duration-500 hover:bg-[#20465A] sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#91C8BA]/20 bg-[#91C8BA]/10 text-[#91C8BA] transition group-hover:bg-[#91C8BA] group-hover:text-[#17324D]">
                      <Icon size={23} />
                    </div>
                    <span className="font-mono text-xs text-white/30">{feature.number}</span>
                  </div>
                  <p className="mt-9 text-[9px] font-bold tracking-[.2em] text-[#91C8BA]">
                    {feature.tag}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300/75">
                    {feature.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#91C8BA]">
                    Built for better care <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-label text-[#3D8C87]">03 / The workflow</p>
            <h2 className="mt-7 text-5xl font-semibold leading-tight tracking-[-.045em] text-[#17324D] sm:text-6xl">
              A simple process.
              <br />
              <span className="font-serif font-normal italic text-[#3D8C87]">A meaningful impact.</span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#3D8C87]/40 to-transparent md:block" />
            {[
              {
                number: "01",
                title: "Schedule",
                text: "Medication details and prescribed times are organised in the system.",
                icon: CalendarClock,
              },
              {
                number: "02",
                title: "Remind",
                text: "Users receive reminders and can record their medication activity.",
                icon: BellRing,
              },
              {
                number: "03",
                title: "Connect",
                text: "Caregivers receive alerts when doses are delayed or missed.",
                icon: Siren,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#3D8C87]/20 bg-[#F7F9F8] text-[#3D8C87] shadow-lg shadow-[#17324D]/5">
                    <Icon size={25} />
                  </div>
                  <p className="mt-8 font-mono text-xs tracking-widest text-[#3D8C87]">{step.number}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#17324D]">{step.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="bg-white py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="section-label text-[#3D8C87]">04 / Product experience</p>
              <h2 className="mt-7 text-5xl font-semibold tracking-[-.045em] text-[#17324D] sm:text-6xl">
                Designed to
                <br />
                <span className="font-serif font-normal italic text-[#3D8C87]">make a difference.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-8 text-slate-500">
              A closer look at the actual interfaces developed for elderly
              users and caregivers.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screen, index) => (
              <button
                key={screen.title}
                onClick={() => setSelectedImage(screen)}
                className={`group text-left ${index === 1 ? "lg:translate-y-10" : ""}`}
              >
                <div className="relative overflow-hidden rounded-[26px] border border-[#17324D]/10 bg-[#E6F0ED] p-3 shadow-sm transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[#17324D]/10">
                  <div className="mb-3 flex items-center justify-between px-2 pt-1">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#D1A7A1]" />
                      <span className="h-2 w-2 rounded-full bg-[#D8C79B]" />
                      <span className="h-2 w-2 rounded-full bg-[#8FB6A5]" />
                    </div>
                    <span className="text-[9px] font-bold tracking-widest text-[#78918A]">MEDICARE / APP</span>
                  </div>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/40" />
                </div>
                <div className="flex items-start justify-between gap-4 px-1 pt-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-[#3D8C87]">{screen.number} / INTERFACE</p>
                    <h3 className="mt-2 text-lg font-semibold text-[#17324D]">{screen.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{screen.subtitle}</p>
                  </div>
                  <div className="mt-2 rounded-full border border-[#17324D]/10 p-3 text-[#3D8C87] transition group-hover:bg-[#17324D] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="relative overflow-hidden bg-[#E6F0ED] py-28">
        <div className="medical-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="section-label text-[#3D8C87]">05 / Engineering</p>
            <h2 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-[-.045em] text-[#17324D] sm:text-6xl">
              Thoughtfully
              <br />
              <span className="font-serif font-normal italic text-[#3D8C87]">engineered.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-8 text-[#647684]">
              A full-stack application combining a responsive frontend,
              backend services, database storage, authentication and
              real-time notifications.
            </p>
            <a
              href="https://github.com/sathwikgandham9-creator/medicare-assist"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#17324D] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#3D8C87]"
            >
              <Code2 size={17} /> Explore source code <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/75 p-7 shadow-xl shadow-[#17324D]/5 backdrop-blur-xl sm:p-10">
            <div className="flex items-center justify-between border-b border-[#17324D]/10 pb-6">
              <div>
                <p className="section-label text-[#3D8C87]">System architecture</p>
                <h3 className="mt-2 text-xl font-semibold text-[#17324D]">Technology ecosystem</h3>
              </div>
              <ScanLine size={24} className="text-[#3D8C87]" />
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 rounded-xl border border-[#17324D]/10 bg-[#F7F9F8] px-4 py-4 transition hover:border-[#3D8C87]/40 hover:bg-white"
                >
                  <span className="font-mono text-[9px] text-[#3D8C87]">0{index + 1}</span>
                  <span className="text-xs font-semibold text-[#365168]">{tech}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3 rounded-xl bg-[#17324D] p-4 text-white">
              <Fingerprint size={22} className="text-[#91C8BA]" />
              <div>
                <p className="text-xs font-semibold">Full-stack architecture</p>
                <p className="mt-1 text-[10px] text-white/55">Frontend · Backend · Database · Real-time</p>
              </div>
              <Sparkles className="ml-auto text-[#91C8BA]" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#DDECE7] blur-[100px]" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="overflow-hidden rounded-[32px] bg-[#17324D] text-white shadow-2xl shadow-[#17324D]/15">
            <div className="medical-grid relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
              <div>
                <p className="section-label text-[#91C8BA]">06 / Behind the project</p>
                <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Built with purpose.
                  <br />
                  <span className="font-serif font-normal italic text-[#91C8BA]">Created by Sathwik.</span>
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-8 text-slate-300">
                  I'm Sathwik Gandham, a B.Tech Computer Science Engineering
                  student specialising in AI & ML, interested in building
                  practical technology with human-centred applications.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:sathwikgandham9@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-[#91C8BA] px-5 py-3 text-xs font-bold text-[#17324D] transition hover:bg-white"
                  >
                    <Mail size={16} /> Get in touch
                  </a>
                  <a
                    href="https://github.com/sathwikgandham9-creator"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
                  >
                    <Code2 size={16} /> GitHub <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sathwik-gandham-16a58a33a"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white/10"
                  >
                    <Users size={16} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-[#91C8BA]/30 bg-[#91C8BA]/10 lg:h-56 lg:w-56">
                <div className="absolute inset-3 rounded-full border border-dashed border-[#91C8BA]/40" />
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#91C8BA] text-[#17324D] shadow-2xl shadow-black/20 lg:h-40 lg:w-40">
                  <HeartPulse size={64} strokeWidth={1.4} />
                </div>
                <span className="absolute -right-3 top-8 rounded-full border border-white/20 bg-[#24465D] px-3 py-2 text-[9px] font-bold tracking-widest text-[#91C8BA]">CSE · AI&ML</span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-[#24465D] px-4 py-2 text-[9px] font-bold tracking-widest text-white">ROLL NO. 22</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#17324D]/10 bg-[#F7F9F8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#17324D] text-white">
              <HeartPulse size={18} />
            </div>
            <div>
              <p className="font-bold text-[#17324D]">MediCare Assist</p>
              <p className="mt-1 text-[9px] uppercase tracking-widest">Intelligent healthcare</p>
            </div>
          </div>
          <p>Technology designed around people.</p>
          <p>© 2026 Sathwik Gandham. All rights reserved.</p>
        </div>
      </footer>

      {/* Screenshot lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#102538]/95 p-5 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={22} />
          </button>
          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="mx-auto max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <div className="mt-5 text-center">
              <p className="text-lg font-semibold text-white">{selectedImage.title}</p>
              <p className="mt-2 text-sm text-white/55">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
