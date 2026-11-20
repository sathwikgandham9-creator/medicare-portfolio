import { useState } from "react";

import {
  Activity,
  ArrowRight,
  Bell,
  CalendarCheck,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Users,
  Code2,
  X,
  ExternalLink,
} from "lucide-react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    {
      src: "/screenshots/login.png",
      title: "Login Page",
      description: "Secure access for elderly users and caregivers.",
    },
    {
      src: "/screenshots/elderly-dashboard.png",
      title: "Elderly Dashboard",
      description: "Simple medication reminders and dose tracking.",
    },
    {
      src: "/screenshots/caregiver-dashboard.png",
      title: "Caregiver Dashboard",
      description: "Monitor medication activity and patient alerts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-teal-600 p-2 text-white">
            <HeartPulse size={25} />
          </div>

          <span className="text-xl font-bold">
            MediCare<span className="text-teal-600">Assist</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="hover:text-teal-600">About</a>
          <a href="#features" className="hover:text-teal-600">Features</a>
          <a href="#technology" className="hover:text-teal-600">Technology</a>
          <a href="#screenshots" className="hover:text-teal-600">Screenshots</a>
        </div>

        <a
          href="#about"
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
        >
          Explore Project
        </a>
      </nav>

      {/* Hero Section */}
      <section className="grid items-center gap-12 px-8 py-20 md:grid-cols-2 md:px-16 md:py-28">

        <div>

          {/* Personal Introduction */}
          <div className="mb-8">

            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Personal Portfolio
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Hi, I'm Sathwik Gandham.
            </h1>

            <h2 className="mt-2 text-xl font-semibold text-teal-600">
              BTech CSE (AI & ML) Student
            </h2>

            <p className="mt-3 max-w-lg leading-7 text-slate-500">
              I'm passionate about technology, creative problem-solving,
              and building meaningful digital experiences.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap gap-3">

              <a
                href="https://github.com/sathwikgandham9-creator"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-teal-700"
              >
                <Code2 size={20} />
                GitHub
                <ExternalLink size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/sathwik-gandham-16a58a33a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                <Users size={20} />
                LinkedIn
                <ExternalLink size={15} />
              </a>

            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
            <Activity size={16} />
            Smarter Healthcare Management
          </div>

          <h2 className="max-w-xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Never miss a
            <span className="text-teal-600"> medication </span>
            again.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
            A smart medication reminder and caregiver alert system
            designed to make medicine management simpler, safer,
            and more reliable for elderly people.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#features"
              className="flex items-center gap-2 rounded-full bg-teal-600 px-7 py-4 font-semibold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700"
            >
              Discover Features <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-7 py-4 font-semibold hover:border-teal-600 hover:text-teal-600"
            >
              Learn More
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">

            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-teal-600" />
              Reliable reminders
            </span>

            <span className="flex items-center gap-2">
              <Users size={18} className="text-teal-600" />
              Caregiver support
            </span>

          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-2xl shadow-slate-200/70 md:p-8">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Welcome back</p>
              <h2 className="mt-1 text-2xl font-bold">Today's Overview</h2>
            </div>

            <div className="rounded-xl bg-white p-3 shadow-sm">
              <Bell className="text-teal-600" />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <CalendarCheck className="text-teal-600" />
              <p className="mt-4 text-3xl font-bold">06</p>
              <p className="mt-1 text-sm text-slate-500">Total medicines</p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <CheckCircle2 className="text-green-600" />
              <p className="mt-4 text-3xl font-bold">04</p>
              <p className="mt-1 text-sm text-slate-500">Taken today</p>
            </div>

          </div>

          <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Next Medication</h3>

              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                Upcoming
              </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-semibold">Vitamin Tablet</p>
                <p className="mt-1 text-sm text-slate-500">After lunch</p>
              </div>

              <p className="text-lg font-bold text-teal-700">1:00 PM</p>
            </div>

          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-teal-50 p-4">
            <ShieldCheck className="text-teal-700" size={25} />

            <div>
              <p className="font-semibold text-teal-900">Caregiver Connected</p>
              <p className="text-sm text-teal-700">
                Monitoring medication activity
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50 px-8 py-20 text-center md:px-16">

        <p className="font-semibold uppercase tracking-widest text-teal-600">
          About the Project
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-4xl">
          Making medication management smarter and safer.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-500">
          MediCare Assist helps elderly users follow their medication
          schedules through intelligent reminders, adaptive alerts,
          and real-time caregiver notifications.
        </p>

      </section>

      {/* Features */}
      <section id="features" className="px-8 py-20 md:px-16">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-teal-600">
            What We Offer
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Designed around better care
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {[
            {
              icon: Bell,
              title: "Smart Reminders",
              description: "Timely medication reminders with escalating alerts.",
            },
            {
              icon: Activity,
              title: "Adaptive Alerts",
              description: "Learns from missed and delayed doses to improve reminders.",
            },
            {
              icon: Users,
              title: "Caregiver Support",
              description: "Keeps caregivers informed about missed medications.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-teal-50 p-3 text-teal-700">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* How It Works */}
      <section className="bg-teal-50 px-8 py-20 md:px-16">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-teal-700">
            Simple Workflow
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            How MediCare Assist Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From medication scheduling to caregiver notifications,
            every step is designed to support better medication management.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-4">

          {[
            {
              number: "01",
              title: "Schedule",
              description: "Add medicines and set their dosage and reminder times.",
            },
            {
              number: "02",
              title: "Remind",
              description: "Receive timely reminders when medication is due.",
            },
            {
              number: "03",
              title: "Track",
              description: "Record taken, snoozed and missed doses.",
            },
            {
              number: "04",
              title: "Notify",
              description: "Alert caregivers when important doses are missed.",
            },
          ].map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-7 shadow-sm">

              <span className="text-3xl font-bold text-teal-600">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

              <p className="mt-3 leading-7 text-slate-500">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Project Screenshots */}
      <section id="screenshots" className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-teal-600">
              Project Preview
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Explore MediCare Assist
            </h2>

            <p className="mt-4 text-slate-500">
              Click on any screenshot to view it in full size.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {screenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <button
                  type="button"
                  onClick={() => setSelectedImage(screenshot)}
                  className="block w-full cursor-zoom-in"
                  aria-label={`View ${screenshot.title} in full size`}
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="h-64 w-full object-cover object-top"
                  />
                </button>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    {screenshot.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {screenshot.description}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-teal-600">
                    Click to enlarge ↗
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="bg-slate-900 px-8 py-20 text-center text-white md:px-16">

        <p className="font-semibold uppercase tracking-widest text-teal-400">
          Built With
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">

          {[
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "SQLite",
            "Tailwind CSS",
            "Server-Sent Events",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm text-slate-200"
            >
              {tech}
            </span>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-sm text-slate-500">
        © 2026 Sathwik Gandham. Built with MediCare Assist.
      </footer>

      {/* Screenshot Popup / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
            aria-label="Close image"
          >
            <X size={28} />
          </button>

          <div
            className="max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >

            <p className="mb-3 text-center text-lg font-semibold text-white">
              {selectedImage.title}
            </p>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <p className="mt-3 text-center text-sm text-slate-300">
              Click outside the image or press the X to close.
            </p>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
