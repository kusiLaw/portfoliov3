import { render, screen } from "@testing-library/react";
import { About } from "@/components/About";


// Mock the ClientMotion component since we don't need to test animations
jest.mock("@/components/animation", () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("About Component", () => {
  beforeEach(() => {
    render(<About />);
  });

  it("renders the About Me heading", () => {
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the career evolution section", () => {
    expect(screen.getByText(/Career Evolution:/)).toBeInTheDocument();
    expect(
      screen.getByText(/From Optimized Code to Cloud Scale/)
    ).toBeInTheDocument();
  });

  it("renders all career timeline entries", () => {
    expect(
      screen.getByText(/The Foundation \(2020 – 2022\):/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Front-End Excellence \(2023 – 2024\):/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The Full Stack Architect \(2025 – Present\):/)
    ).toBeInTheDocument();
  });

  it("renders the philosophy section", () => {
    expect(screen.getByText("My Philosophy")).toBeInTheDocument();
    const philosophyContent = screen.getByText(
      /I thrive on bridging the gap between development and operations./
    );
    expect(philosophyContent).toBeInTheDocument();
  });

  it("renders the Certificate component", () => {
    // Get the certificate link that contains both the title and issuer
    const certificateLink = screen.getByRole("link", {
      name: /AWS Certified Solution Architect - Associate/i,
    });
    expect(certificateLink).toBeInTheDocument();
    expect(certificateLink).toHaveAttribute(
      "href",
      expect.stringContaining("credly.com")
    );
  });

  it("contains important skill keywords", () => {
    const content = screen.getByText(/AWS Certified Solutions Architect/);
    expect(content).toBeInTheDocument();
    expect(screen.getByText(/Docker/)).toBeInTheDocument();
    expect(screen.getByText(/Kubernetes/)).toBeInTheDocument();
    expect(screen.getByText(/Terraform/)).toBeInTheDocument();
  });
});
