import { GraduationCap, BookOpen } from "lucide-react";
import { ClientMotion  } from "./animation";
import { education, certifications, professionalDevelopment } from "../data/data";
import Certificate from "./certificate";

export function Education() {

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-12 text-center text-2xl sm:text-3xl lg:text-4xl">
            Education & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <ClientMotion
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="text-slate-700 mt-1" size={24} />
                <div>
                  <h3 className="text-slate-900 mb-1">{education.degree}</h3>
                  <div className="text-slate-700 mb-1">{education.school}</div>
                  <div className="text-slate-600 text-sm mb-2">
                    {education.period}
                  </div>
                  <div className="text-slate-700">GPA: {education.gpa}</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-slate-900 mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-white text-slate-600 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </ClientMotion>

            {/* Certifications */}
            <ClientMotion
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-lg border-slate-200 bg-linear-to-r from-orange-50 via-slate-100  to-slate-300"
                >
                  <Certificate {...certifications[0]} />
                </div>
              ))}
            </ClientMotion>
          </div>

          {/* Professional Development */}
          <ClientMotion
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen size={24} className="text-slate-700" />
              Professional Development
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalDevelopment.map((course, index) => (
                <ClientMotion
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 p-4 rounded-lg"
                >
                  <h4 className="text-slate-900 mb-2">{course.title}</h4>
                  <div className="text-slate-600 text-sm mb-1">
                    {course.institution}
                  </div>
                  <div className="text-slate-500 text-sm">{course.period}</div>
                </ClientMotion>
              ))}
            </div>
          </ClientMotion>
        </ClientMotion>
      </div>
    </section>
  );
}

export default Education;