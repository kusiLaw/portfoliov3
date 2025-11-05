import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ClientMotion } from "./animation";
import { Badge } from "./ui/badge";
import { socialLinks } from "@/data/data";

export function Hero() {
  return (
    <section className="bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 py-16 md:py-18 ">
      <div className="max-w-4xl mx-auto text-center">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ClientMotion
            className="text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 border-slate-900 px-3 py-1 bg-linear-to-r from-orange-50 via-slate-100  to-slate-300"
            >
              Available for new opportunities
            </Badge>
          </ClientMotion>
          <ClientMotion
            className="text-slate-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lgtext-xl tracking-tight">
              AWS Certified
              <span className="block text-muted-foreground py-2">
                Full Stack Engineer
              </span>
            </h1>
          </ClientMotion>
          <ClientMotion
            className="text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-base">
              Building Scalable, High-Performance web applications with Next.js,
              Django, and robust Cloud Architecture (AWS/DevOps).
            </p>

            <p className="text-black mt-4">
              I specialize in moving applications from concept to
              production-ready deployment using modern full-stack development
              and robust CI/CD pipelines. I focus on performance metrics (Core
              Web Vitals) to deliver fast, maintainable, and highly available
              solutions that drive user engagement and business growth.
            </p>
          </ClientMotion>

          <ClientMotion
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SocialLink
              href={socialLinks.linkedin}
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialLink
              href={socialLinks.github}
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialLink
              href="mailto:lawrence.kusi.addai@gmail.com"
              icon={<Mail size={20} />}
              label="Email"
            />
          </ClientMotion>

          {/* Certification & Tech Badges */}
          {/* <ClientMotion
            className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Badge
              icon={<Award size={16} />}
              label="AWS Certified"
              variant="primary"
            />
            <Badge
              icon={<Code size={16} />}
              label="Next.js"
              variant="secondary"
            />
            <Badge
              icon={<Database size={16} />}
              label="Python/Django"
              variant="secondary"
            />
          </ClientMotion> */}

          <ClientMotion
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Get In Touch
            </a>
          </ClientMotion>
        </ClientMotion>

        <ClientMotion
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </ClientMotion>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <ClientMotion
      className=" bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-slate-700 hover:text-slate-900"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2"
      >
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </Link>
    </ClientMotion>
  );
}

export default Hero;