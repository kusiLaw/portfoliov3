import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';
import { socialLinks } from '@/data/data';

// Mock the ClientMotion component
jest.mock('@/components/animation', () => ({
  ClientMotion: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('renders the hero section with correct headings', () => {
    expect(screen.getByText('AWS Certified')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Engineer')).toBeInTheDocument();
  });

  it('displays the availability badge', () => {
    expect(screen.getByText('Available for new opportunities')).toBeInTheDocument();
  });

  it('renders the main description text', () => {
    expect(screen.getByText(/Building Scalable, High-Performance web applications/)).toBeInTheDocument();
    expect(screen.getByText(/I specialize in moving applications from concept/)).toBeInTheDocument();
  });

  it('renders social links with correct attributes', () => {
    // LinkedIn link
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', socialLinks.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');

    // GitHub link
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', socialLinks.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Email link
    const emailLink = screen.getByRole('link', { name: /Email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:lawrence.kusi.addai@gmail.com');
  });

  it('renders the call-to-action button', () => {
    const ctaButton = screen.getByRole('link', { name: 'Get In Touch' });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '#contact');
  });

  it('renders the scroll down indicator', () => {
    const scrollLink = screen.getAllByRole('link').find(link => link.getAttribute('href') === '#projects');
    expect(scrollLink).toBeInTheDocument();
  });
});