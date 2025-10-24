export const education = {
  degree: "BSc. Information Technology Education",
  school: "University Of Education",
  period: "Aug 2014 – Jul 2018",
  gpa: "3.27 / 4.0",
  coursework: [
    "Networking and Security",
    "Data Structures and Algorithms (C++)",
    "Linear Algebra",
    "Statistics",
    "Web Technologies",
    "Software Development",
    "Object-Oriented Programming (Java)",
    "Database (MySQL)",
    "Teaching Methodology",
  ],
};


export const professionalDevelopment = [
  {
    title: "AWS Cloud Practitioner Training Program",
    institution: "K21 Academy",
    period: "Jan 2024 – Oct 2025",
  },
  {
    title: "Full Stack Web Developer Course",
    institution: "Microverse",
    period: "Jun 2022 – Feb 2023",
  },
  {
    title: "Python Specialization",
    institution: "University of Michigan",
    period: "Jan 2020 – Apr 2020",
  },
  {
    title: "Cisco Networking Academy, CCNA",
    institution: "Cisco Networking Academy",
    period: "Jan 2019 – Oct 2019",
  },
];

export const experiences = [
   {
     title: "Freelance Full Stack Developer",
     company: "WebSP",
     location: "UK",
     period: "Feb 2025 — Sept 2025",
     achievements: [
       "Provided end-to-end full-stack web development services for diverse clients, specializing in high-performance, SEO-optimized, and visually engaging web applications",
       "Managed full project lifecycle from client consultation and requirements gathering to deployment and post-launch optimization",
       "Regularly implemented advanced SEO strategies (SSR, JSON-LD, canonicalization) to improve search engine visibility",
       "Consistently optimized web performance, achieving average mobile scores exceeding 80% through advanced debugging and rendering strategies",
     ],
   },
   {
     title: "Front End Developer",
     company: "Hot Platform",
     location: "Remote",
     period: "Aug 2023 — Dec 2024",
     achievements: [
       "Led the design and development of a company payment platform, ensuring a seamless user experience and adherence to industry best practices",
       "Improved platform accessibility by implementing WCAG best practices and UI/UX enhancements",
       "Achieved a 20% increase in user engagement and adoption through accessibility improvements",
     ],
   },
   {
     title: "Junior Python Developer",
     company: "I.T HouseGH",
     location: "Ghana",
     period: "July 2020 – Mar 2022",
     achievements: [
       "Wrote modular, maintainable code that improved code readability by 25% and reduced bug rates by 15%",
       "Implemented comprehensive testing and code reviews to ensure code quality",
       "Proficient in writing complex SQL queries and stored procedures to optimize database performance",
     ],
   },
];
 
export const projects = [
  {
    title: "WebSP Official Website (Performance Optimized) - UK",
    image: "/websp.png",
    category: "web",

    description:
      "Designed and developed a high-performance corporate website, specializing in Core Web Vitals optimization and advanced SEO strategies.",
    tech: ["Next.js", "React", "Tailwind CSS", "Server-Side Rendering", "AWS"],
    challenge:
      "Deliver a website with exceptional speed and top-tier SEO to serve as the company's leading digital portfolio.",
    achievements: [
      "Achieved Lighthouse scores above 95% on desktop and over 80% on mobile",
      "Enhanced SEO performance through structured data:  Achieve top rankings on Google Search.",
      "Implemented dynamic imports and SSR to resolve initial rendering bottlenecks.",
      "Regularly monitored and optimized Largest Contentful Paint (LCP) and Total Blocking Time (TBT)",
    ],
    links: {
      demo: "https://www.websp.co.uk",
      github: undefined,
    },
  },
  {
    title: "AWS Infrastructure as Code (IaC) Automation",
    category: "aws",
    image: "/Terraform.png",
    description:
      "Developed automated, reusable infrastructure deployment solutions using Terraform and AWS services for scalable cloud applications.",
    tech: [
      "AWS CloudFormation",
      "Terraform",
      "Lambda",
      "S3",
      "VPC",
      "IAM",
      "Docker",
    ],
    challenge:
      "Establish consistent, repeatable, and secure infrastructure provisioning processes for new application deployments across multiple environments.",
    achievements: [
      "Automated infrastructure provisioning using Terraform, reducing manual deployment time by 60%.",
      "Implemented security best practices using IAM policies and VPC configurations.",
      "Created dynamic, reusable infrastructure templates (IaC) for staging and production environments.",
      "Utilized AWS Lambda functions for scheduled cleanup and configuration tasks.",
    ],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Milton Keynes S.D.A Int Web Application - UK",
    category: "web",
    image: "/church.png",
    description:
      "Developed a scalable full-stack web application for managing church memberships and events, deployed on AWS cloud infrastructure.",
    tech: [
      "Next.js",
      "Django",
      "Tailwind CSS",
      "Rest API",
      "AWS ECS",
      "Docker",
      "PostgreSQL",
      "CI/CD",
    ],
    challenge:
      "Engineer a highly scalable, full-stack application (Next.js/Django) and implement a robust, automated CI/CD pipeline for reliable deployment.",
    achievements: [
      "Built automated CI/CD pipelines using AWS CodePipeline, Jenkins, and GitHub Actions",
      "Utilized Docker containerization integrated with ECS (Elastic Container Service)",
      "Implemented personalized content features increasing member engagement by 25%",
      "Designed and deployed the scalable infrastructure using AWS VPC, S3, and RDS (PostgreSQL).",
    ],
    links: {
      demo: "https://www.mkintsda.org",
      github: "#",
    },
  },
  {
    title: "Scalable & Highly Available Web Application on AWS",
    category: "aws",
    image: "/aws-scalable-web-app.png", // This will be the image I generate
    description:
      "Engineered a robust, fault-tolerant cloud infrastructure for a high-traffic web application, ensuring scalability, high availability, and secure operations.",
    tech: [
      "AWS EC2",
      "Auto Scaling",
      "Elastic Load Balancing (ALB)",
      "Amazon RDS (PostgreSQL/MySQL)",
      "AWS VPC",
      "CloudFront",
      "Security Groups",
      "Route 53",
      "CloudWatch",
    ],
    challenge:
      "Design and implement a resilient AWS architecture capable of handling fluctuating traffic, maintaining high availability, and securing data, while being cost-effective.",
    achievements: [
      "Implemented a multi-tier architecture within AWS VPC for enhanced security and network isolation.",
      "Configured Auto Scaling Groups with EC2 instances behind an Application Load Balancer (ALB) to automatically handle traffic spikes.",
      "Utilized Amazon CloudFront for global content delivery and reduced latency, improving user experience.",
      "Deployed Multi-AZ Amazon RDS (PostgreSQL/MySQL) for database high availability and disaster recovery.",
      "Enforced robust security using AWS Security Groups and IAM roles for least privilege access.",
    ],
    links: {
      github: "#", // Replace with actual GitHub repo if available
      demo: "#", // Replace with actual demo URL if available
    },
  },
  {
    title: "Garden Cleaning Services Website (Booking Integration)",
    image: "/cleaning.png",
    category: "web",
    description:
      "Developed a high-performance, SEO-optimized website for a garden cleaning service, featuring a seamless user interface for booking services and generating leads.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server-Side Rendering",
      "Form Handling",
      "State Management",
    ],
    challenge:
      "Designing a user-friendly website that effectively promotes services, ensures high performance/SEO, and efficiently manages the client booking process through the front end.",
    achievements: [
      "Implemented a dynamic multi-step booking system on the frontend for streamlined service scheduling.",
      "Achieved Lighthouse scores above 95% on desktop and over 80% on mobile.",
      "Utilized React state management for smooth and responsive form validation and data capture.",
      "Optimized Core Web Vitals for superior user experience and improved lead conversion.",
    ],
    links: {
      demo: "https://cleaning-web-app.vercel.app/",
      github: "https://github.com/kusiLaw/cleaning-web-app",
    },
  },
  {
    title: "CarePlus Healthcare Website",
    image: "/healthcare.png",
    category: "web",
    description:
      "Designed and developed a fully responsive and high-performance corporate website, prioritizing intuitive UI/UX design and content presentation for healthcare services.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server-Side Rendering",
      "Responsive Design",
      "UI/UX",
    ],
    challenge:
      "Creating a visually appealing and highly functional website that effectively showcases the healthcare services while ensuring optimal performance and a trustworthy user experience.",
    achievements: [
      "Collected with the other developer to design and develop a fully responsive and high-performance corporate website, prioritizing intuitive UI/UX design and content presentation for healthcare services. ",
      "Implemented responsive design techniques to ensure seamless accessibility across all devices.",
      "Optimized Core Web Vitals for superior user experience.",
      "Ensured pixel-perfect responsiveness across all major devices and screen sizes.",
    ],
    links: {
      demo: "https://care-home-red.vercel.app",
      github: "https://github.com/kusiLaw/Care-Home",
    },
  },
];

export const socialLinks = {
  github: "https://github.com/kusiLaw",
  linkedin: "https://www.linkedin.com/in/lawrence-addai-kusi/",
  email: "mailto:lawrence.kusi.addai@gmail.com",
};

export const certifications = [
  {
    title: "AWS Certified Solution Architect - Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/b730a8a9-eea2-4183-8563-d165fa6c9671/linked_in?t=sy3dkt",
    type: "Certification",
  },
];
  


