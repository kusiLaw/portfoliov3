
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { ClientMotion } from "./animation";
import { experiences } from "../data/data";

export function Experience() {
   return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-12 text-center text-2xl sm:text-3xl lg:text-4xl">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ClientMotion
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-200 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-slate-900 rounded-full -translate-x-[9px]" />

                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase
                      className="text-slate-700 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div className="flex-1">
                      <h3 className="text-slate-900 mb-1">{exp.title}</h3>
                      <div className="text-slate-700 mb-2">{exp.company}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 text-slate-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ClientMotion>
            ))}
          </div>
        </ClientMotion>
      </div>
    </section>
  );
}

export default Experience;