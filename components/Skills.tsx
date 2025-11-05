// import { motion } from "motion/react";
import { Code, Database, Cloud, Wrench, Users } from "lucide-react";
import { ClientMotion  } from "./animation";
export function Skills() {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "Django",
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Methods",
      skills: [
        "Git",
        "GitHub",
        "Tailwind CSS",
        "Jest",
        "RESTful APIs",
        "Agile",
        "CI/CD",
        "UI/UX",
      ],
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & DevOps",
      skills: [
        "AWS (ECS, EC2, S3, Lambda, RDS)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    {
      icon: <Database size={24} />,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "DynamoDB"],
    },
    {
      icon: <Users size={24} />,
      title: "Professional Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Mentoring",
        "Collaboration",
        "Problem-Solving",
        "Remote Work",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-12 text-center text-2xl sm:text-3xl lg:text-4xl">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <ClientMotion
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-slate-700">{category.icon}</div>
                  <h3 className="text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ClientMotion>
            ))}
          </div>
        </ClientMotion>
      </div>
    </section>
  );
}

export default Skills;