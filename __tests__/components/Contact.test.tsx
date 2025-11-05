import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Contact } from "@/components/Contact";

// Mock ClientMotion passthrough
jest.mock("@/components/animation", () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

// Mock the formSpare API
jest.mock("@/api/formSpare", () => ({
  formSpare: jest.fn(() => Promise.resolve({ data: {} })),
}));

// Ensure next/link renders a normal anchor in tests
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children?: React.ReactNode; href?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

import { formSpare } from "@/api/formSpare";

describe("Contact component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // mock alert
    jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Contact />);
  });

  it("renders heading and intro text", () => {
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(
      screen.getByText(/I\'m always open to discussing new projects/)
    ).toBeInTheDocument();
  });

  it("renders contact information links with correct attributes", () => {
    const mailLink = screen.getByRole("link", {
      name: /lawrence.kusi.addai@gmail.com/i,
    });
    expect(mailLink).toHaveAttribute(
      "href",
      "mailto:lawrence.kusi.addai@gmail.com"
    );

    const linkedin = screen.getByRole("link", { name: /LinkedIn Profile/i });
    expect(linkedin).toHaveAttribute(
      "href",
      expect.stringContaining("linkedin.com")
    );
    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");

    const github = screen.getByRole("link", { name: /GitHub Profile/i });
    expect(github).toHaveAttribute(
      "href",
      expect.stringContaining("github.com")
    );
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders contact form fields and submits successfully", async () => {
    // Find inputs inside the ContactForm
    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const messageTextarea = screen.getByLabelText(
      "Message"
    ) as HTMLTextAreaElement;
    const submitButton = screen.getByRole("button", { name: /Send Message/i });

    // Fill form
    fireEvent.change(nameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageTextarea, { target: { value: "Hello there" } });

    // Submit
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(formSpare).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining("Message sent successfully")
      );
    });

    // After successful submit, inputs should be cleared
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(messageTextarea.value).toBe("");
  });
});
