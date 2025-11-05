import { render, screen, fireEvent } from "@testing-library/react";
import { Projects } from "@/components/Projects";
import { projects } from "@/data/data";
import type { ComponentProps } from "react";

// Mock the ClientMotion component
jest.mock("@/components/animation", () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));
// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,

  default: (props: ComponentProps<'img'>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));


describe("Projects Component", () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it("renders the main heading and description", () => {
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
    expect(
      screen.getByText(/A selection of projects showcasing expertise/)
    ).toBeInTheDocument();
  });

  it("renders category filter buttons", () => {
    const categories = [
      "All Projects",
      "Web Development",
      "AWS Projects",
      // "Agentic AI",
    ];
    categories.forEach((category) => {
      expect(
        screen.getByRole("button", { name: category })
      ).toBeInTheDocument();
    });
  });

  it("filters projects when category is selected", () => {
    // Click AWS Projects filter
    fireEvent.click(screen.getByRole("button", { name: "AWS Projects" }));

    // Should only show AWS projects
    const awsProjects = projects.filter((p) => p.category === "aws");
    awsProjects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });

    // Projects from other categories should not be visible
    const nonAwsProjects = projects.filter((p) => p.category !== "aws");
    nonAwsProjects.forEach((project) => {
      expect(screen.queryByText(project.title)).not.toBeInTheDocument();
    });
  });

  it("displays project details correctly", () => {
    projects.forEach((project) => {
      // Project title
      expect(screen.getByText(project.title)).toBeInTheDocument();

      // Project description
      expect(screen.getByText(project.description)).toBeInTheDocument();

      // Project category badge - find the specific instance
      const categoryElements = screen.getAllByText(project.category);
      expect(categoryElements.length).toBeGreaterThan(0);

      // Technologies used
      project.tech.forEach((tech) => {
        const techElements = screen.getAllByText(tech);
        expect(techElements.length).toBeGreaterThan(0);
      });

      // Key achievements
      const achievementsList = screen.getAllByRole("listitem");
      expect(achievementsList.length).toBeGreaterThan(0);
      project.achievements.forEach((achievement) => {
        const achievementExists = achievementsList.some(
          (item) =>
            item.textContent?.includes(achievement.split(":")[0]) ?? false
        );
        expect(achievementExists).toBe(true);
      });
    });
  });

  it("renders project links with correct attributes", () => {
    projects.forEach((project) => {
      if (project.links.demo) {
        const demoLinks = screen.getAllByLabelText("View demo");
        const matchingDemoLink = Array.from(demoLinks).find(
          (link) => link.getAttribute("href") === project.links.demo
        );
        expect(matchingDemoLink).toBeInTheDocument();
      }

      if (project.links.github) {
        const githubLinks = screen.getAllByLabelText("View code");
        const matchingGithubLink = Array.from(githubLinks).find(
          (link) => link.getAttribute("href") === project.links.github
        );
        expect(matchingGithubLink).toBeInTheDocument();
      }
    });
  });

  it("shows project challenges when provided", () => {
    projects.forEach((project) => {
      if (project.challenge) {
        expect(screen.getByText(project.challenge)).toBeInTheDocument();
      }
    });
  });
});
