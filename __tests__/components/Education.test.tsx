import { render, screen } from "@testing-library/react";
import { Education } from "@/components/Education";
import {
  education,
  certifications,
  professionalDevelopment,
} from "@/data/data";

// Mock the ClientMotion component
jest.mock("@/components/animation", () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Education Component", () => {
  beforeEach(() => {
    render(<Education />);
  });

  it("renders the main heading", () => {
    expect(screen.getByText("Education & Certifications")).toBeInTheDocument();
  });

  it("displays education details", () => {
    expect(screen.getByText(education.degree)).toBeInTheDocument();
    expect(screen.getByText(education.school)).toBeInTheDocument();
    expect(screen.getByText(education.period)).toBeInTheDocument();
    expect(screen.getByText(`GPA: ${education.gpa}`)).toBeInTheDocument();
  });

  it("displays relevant coursework", () => {
    expect(screen.getByText("Relevant Coursework")).toBeInTheDocument();
    education.coursework.forEach((course) => {
      expect(screen.getByText(course)).toBeInTheDocument();
    });
  });

  it("renders certifications section", () => {
    certifications.forEach((cert) => {
      expect(
        screen.getByRole("heading", { name: cert.title })
      ).toBeInTheDocument();
      // Find the paragraph containing both "Issued by" and the issuer name
      const issuerText = screen.getByText((content: string) => {
        return content.includes(cert.issuer);
      });
      expect(issuerText).toBeInTheDocument();
    });
  });

  it("renders professional development section", () => {
    expect(screen.getByText("Professional Development")).toBeInTheDocument();

    professionalDevelopment.forEach((course) => {
      expect(screen.getByText(course.title)).toBeInTheDocument();
      expect(screen.getByText(course.institution)).toBeInTheDocument();
      expect(screen.getByText(course.period)).toBeInTheDocument();
    });
  });

  it("renders the GraduationCap icon for education section", () => {
    const educationSection = screen.getByRole("heading", {
      name: education.degree,
    });
    expect(educationSection).toBeInTheDocument();
  });
});
