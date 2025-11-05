
import { Mail, Linkedin, Github,  } from "lucide-react";
import { ClientMotion } from "./animation";
import { socialLinks } from "@/data/data";
import Link from "next/link";
import ContactForm from "./ContactFormClient";

export function Contact() {
 

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ClientMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 mb-4 text-center text-2xl sm:text-3xl lg:text-4xl">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <ClientMotion
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <Link
                    href="mailto:lawrence.kusi.addai@gmail.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Mail size={20} />
                    lawrence.kusi.addai@gmail.com
                  </Link>
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn Profile
                  </Link>
                  <Link
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github size={20} />
                    GitHub Profile
                  </Link>
                  
                </div>
              </div>

              <div className="bg-slate-200 p-6 rounded-lg">
                <h4 className="text-slate-900 mb-2">Open to Opportunities</h4>
                <p className="text-slate-600">
                  Currently available for freelance projects and full-time
                  positions. Specializing in full-stack development, AWS cloud
                  solutions, and AI integration.
                </p>
              </div>
            </ClientMotion>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </ClientMotion>
      </div>
    </section>
  );
}

export default Contact