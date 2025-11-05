import { render, screen } from "@testing-library/react";
import { Skills } from "@/components/Skills";

// Mock the ClientMotion component
jest.mock("@/components/animation", () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Skills Component", () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it("renders the main heading", () => {
    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
  });

  it("displays all skill categories", () => {
    const categories = [
      "Languages & Frameworks",
      "Tools & Methods",
      "Cloud & DevOps",
      "Databases",
      "Professional Skills",
    ];

    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("renders programming languages and frameworks", () => {
    const languages = [
      "Python",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "Django",
    ];
    languages.forEach((lang) => {
      expect(screen.getByText(lang)).toBeInTheDocument();
    });
  });

  it("renders tools and methods", () => {
    const tools = [
      "Git",
      "GitHub",
      "Tailwind CSS",
      "Jest",
      "RESTful APIs",
      "Agile",
      "CI/CD",
      "UI/UX",
    ];
    tools.forEach((tool) => {
      expect(screen.getByText(tool)).toBeInTheDocument();
    });
  });

  it("renders cloud and DevOps skills", () => {
    const cloudSkills = [
      "AWS (ECS, EC2, S3, Lambda, RDS)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
    ];
    cloudSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders database skills", () => {
    const databases = ["PostgreSQL", "MySQL", "DynamoDB"];
    databases.forEach((db) => {
      expect(screen.getByText(db)).toBeInTheDocument();
    });
  });

  it("renders professional skills", () => {
    const profSkills = [
      "Communication",
      "Teamwork",
      "Mentoring",
      "Collaboration",
      "Problem-Solving",
      "Remote Work",
    ];
    profSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders skill categories with appropriate icons", () => {
    // Verify each category has an icon
    const categories = [
      "Languages & Frameworks",
      "Tools & Methods",
      "Cloud & DevOps",
      "Databases",
      "Professional Skills",
    ];
    categories.forEach((category) => {
      const categoryHeading = screen.getByRole("heading", { name: category });
      expect(categoryHeading).toBeInTheDocument();
    });
  });
});
