import { render, screen } from "@testing-library/react";
import { Experience } from "@/components/Experience";
import { experiences } from "@/data/data";

// Mock the ClientMotion component
jest.mock("@/components/animation", () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Experience Component", () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it("renders the main heading", () => {
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("displays all experiences with their details", () => {
    experiences.forEach((exp) => {
      // Check for job title and company
      expect(screen.getByText(exp.title)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();

      // Check for location and period
      expect(screen.getByText(exp.location)).toBeInTheDocument();
      expect(screen.getByText(exp.period)).toBeInTheDocument();

      // Check for achievements
      exp.achievements.forEach((achievement) => {
        expect(screen.getByText(achievement)).toBeInTheDocument();
      });
    });
  });

  it("renders experience timeline with correct structure", () => {
    // Check for section with ID
    const section = document.querySelector("#experience");
    expect(section).toBeInTheDocument();

    // Check for timeline markers (dots)
    const timelineMarkers = document.querySelectorAll(
      ".absolute.left-0.top-0.w-4.h-4.bg-slate-900.rounded-full"
    );
    expect(timelineMarkers.length).toBe(experiences.length);
  });

  it("renders icons for location and period", () => {
    experiences.forEach(() => {
      // Each experience should have location and calendar icons
      const locationIcons = document.querySelectorAll(".lucide-map-pin");
      const calendarIcons = document.querySelectorAll(".lucide-calendar");
      expect(locationIcons.length).toBe(experiences.length);
      expect(calendarIcons.length).toBe(experiences.length);
    });
  });
});
