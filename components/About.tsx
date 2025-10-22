// import { motion } from "motion/react";
import { Award } from "lucide-react";
import { ClientMotion } from "./animation";
import Link from "next/link";
import { certifications } from "@/data/data";
import Certificate from "./certificate";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-8 text-center text-2xl sm:text-3xl lg:text-4xl">
            About Me
          </h2>

          <div className="space-y-6 text-slate-600">
            <p>
              My passion lies at the intersection of application development and
              robust cloud infrastructure. I&apos;m a results-driven Full Stack
              Engineer who ensures applications are not only functional but are
              also fast, scalable, and architecturally sound.
            </p>
            <h3 className="text-slate-900 mt-8 mb-4 text-lg font-semibold">
              <span>Career Evolution: </span>From Optimized Code to Cloud Scale
            </h3>
            My professional journey has been built on continuous skill expansion
            and a focus on quantifiable results:
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <span className="font-bold text-base">
                  The Foundation (2020 – 2022):
                </span>{" "}
                I began as a Junior Python Developer, establishing a strong base
                in software engineering principles. My focus was on code
                quality, where I implemented rigorous testing and code reviews
                that reduced bug rates by 15% and improved maintainability.{" "}
              </li>
              <li>
                <span className="font-bold text-base">
                  Front-End Excellence (2023 – 2024):{" "}
                </span>{" "}
                Transitioning to a Front End Developer role, I specialized in
                user-centric design and accessibility. I led the redesign of a
                company payment platform, successfully implementing WCAG best
                practices which directly resulted in a 20% increase in user
                engagement.
              </li>
              <li>
                <span className="font-bold text-base">
                  The Full Stack Architect (2025 – Present):
                </span>{" "}
                My recent work as a Freelance Full Stack Developer solidified my
                end-to-end expertise. This experience demanded full
                ownership—from initial client consultation and requirements
                gathering to deploying AWS-hosted, SEO-optimized applications. I
                routinely diagnose and resolve critical Core Web Vitals issues,
                ensuring mobile performance exceeds industry standards.
              </li>
            </ul>
            <h3 className="text-slate-900 mt-8 mb-4 text-lg font-semibold">
              My Philosophy
            </h3>
            <p>
              I thrive on bridging the gap between development and operations.
              My AWS Certified Solutions Architect knowledge, combined with my
              proficiency in Next.js and Django, allows me to approach problems
              holistically. I don&apos;t just write code; I design and implement
              the entire scalable environment using tools like Docker,
              Kubernetes, and Terraform to guarantee reliability and performance
              from day one.
            </p>
            <div className="mt-12 p-6 bgslate-50 rounded-lg border max-w-2xl mx-auto
             border-slate-200 bg-linear-to-r from-orange-50 via-slate-100  to-slate-300"
            >
              <Certificate {...certifications[0]} />
            </div>
          </div>
        </ClientMotion>
      </div>
    </section>
  );
}

export default About;