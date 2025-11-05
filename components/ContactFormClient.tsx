'use client'
import React from 'react'
import { useState } from "react";
import { ClientMotion } from "@/components/animation";
import { Send } from "lucide-react";
import { formSpare } from '@/api/formSpare';

function ContactForm() {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
   });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formSpare(JSON.stringify(formData))
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        alert(
          "Message sent successfully!. I will get back to you within 24 hours."
        );
      })
      .catch(() => {
        alert("Error ocurred, please try again");
      });
  }

  
   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
  };
  

  return (
    <ClientMotion
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-slate-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-slate-900 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Send Message
        </button>
      </form>
    </ClientMotion>
  );
}

export default ContactForm;