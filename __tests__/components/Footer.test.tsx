import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    // Mock the current year to ensure consistent testing
    const mockDate = new Date("2025-11-05");
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the name and description", () => {
    render(<Footer />);
    expect(screen.getByText("Lawrence Kusi Addai")).toBeInTheDocument();
    expect(
      screen.getByText(/Full Stack Developer specializing in/)
    ).toBeInTheDocument();
  });

  it("renders all quick links", () => {
    render(<Footer />);
    const quickLinks = ["About", "Skills", "Experience", "Projects", "Contact"];
    quickLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("renders social media links with correct attributes", () => {
    render(<Footer />);

    // GitHub link
    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toHaveAttribute("href", "https://github.com");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    // LinkedIn link
    const linkedinLink = screen.getByLabelText("LinkedIn");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // Email link
    const emailLink = screen.getByLabelText("Email");
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:lawrence.kusi.addai@gmail.com"
    );
  });

  it("displays the current year in copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Lawrence Kusi Addai/)).toBeInTheDocument();
  });

  it("renders section headings", () => {
    render(<Footer />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Connect")).toBeInTheDocument();
  });

  it("applies correct CSS classes for styling", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-slate-900", "text-white");

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass("hover:text-white", "transition-colors");
    });
  });
});
