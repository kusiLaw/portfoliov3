import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/Header";
import React from "react";

// Mock the motion components from motion/react
jest.mock("motion/react", () => ({
  motion: {
    nav: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("Header Component", () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });
  });

  it("renders the logo and name", () => {
    render(<Header />);
    expect(screen.getByText("LAK")).toBeInTheDocument();
    expect(screen.getByText("Lawrence Addai Kusi")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<Header />);
    const navItems = [
      "About",
      "Skills",
      "Experience",
      "Projects",
      "Education",
      "Contact",
    ];
    navItems.forEach((item) => {
      const links = screen.getAllByText(item);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it("toggles mobile menu when menu button is clicked", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button");

    // Menu should be initially closed (only desktop items visible)
    expect(screen.getAllByText("About").length).toBe(1);

    // Open menu
    fireEvent.click(menuButton);
    const mobileMenu = screen.getAllByText("About")[1]; // Get the mobile menu item
    expect(mobileMenu).toBeInTheDocument();

    // Close menu
    fireEvent.click(menuButton);
    expect(screen.getAllByText("About").length).toBe(1); // Only desktop menu item should be visible
  });

  it("changes background on scroll", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");

    // Initial state
    expect(nav.className).toContain("bg-transparent");

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 51 });
    fireEvent.scroll(window);

    // Scrolled state
    expect(nav.className).toContain("bg-white/80");
  });

  it("handles smooth scroll when clicking navigation items", () => {
    const mockScrollIntoView = jest.fn();
    const mockElement = document.createElement("div");
    mockElement.scrollIntoView = mockScrollIntoView;

    const mockQuerySelector = jest
      .spyOn(document, "querySelector")
      .mockImplementation(() => mockElement);

    render(<Header />);

    const aboutLink = screen.getAllByText("About")[0];
    fireEvent.click(aboutLink);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
    expect(mockQuerySelector).toHaveBeenCalledWith("#about");

    mockQuerySelector.mockRestore();
  });
});
