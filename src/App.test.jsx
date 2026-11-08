import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App, { ContactForm } from './App.jsx';

function fillForm() {
  fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Test Visitor' } });
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'visitor@example.com' } });
  fireEvent.change(screen.getByLabelText('What would you like to build?'), { target: { value: 'A sample enquiry for a mocked test only.' } });
}
describe('Portfolio content and navigation', () => {
  it('uses general positioning and puts skills before experience and work', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/^Software Engineer$/);
    expect(document.body.textContent).not.toMatch(/Software Engineer (II|III)|Senior/);
    expect([...document.querySelectorAll('main > section')].map(s => s.id)).toEqual(['', 'skills', 'experience', 'work', 'contact']);
    for (const tool of ['Spring Boot · Node.js', 'Postgres · MySQL', 'ECS · Lambda · EKS', 'SQS · Glue', 'CloudFormation', 'AI agents · RAG', 'JUnit · Jest · TDD']) expect(screen.getByText(tool)).toBeInTheDocument();
    expect(screen.getByText('Feb 2023–present', { selector: '.job-date' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
  });
  it('supports menu toggle, Escape focus return and close on section selection', () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: /Menu/ });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
    fireEvent.click(toggle);
    fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Skills' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
  it('provides genuine project overviews rather than dead demo buttons', () => {
    render(<App />);
    expect(screen.getAllByText('Project overview')).toHaveLength(2);
    expect(screen.getByAltText('iPark parking-reservation application interface')).toHaveAttribute('src', '/previews/iPark-preview.png');
    expect(screen.queryByText('Live Preview')).not.toBeInTheDocument();
  });
  it('keeps all content visible without observer support', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    // Simulate an old browser where the property does not exist.
    delete window.IntersectionObserver;
    render(<App />);
    expect(document.querySelectorAll('.reveal-pending')).toHaveLength(0);
  });
  it('does not set up animation when reduced motion is preferred', () => {
    const observer = vi.fn();
    vi.stubGlobal('IntersectionObserver', observer);
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })));
    render(<App />);
    expect(observer).not.toHaveBeenCalled();
    expect(document.querySelectorAll('.reveal-pending')).toHaveLength(0);
  });
});
describe('Contact form — all requests mocked', () => {
  it('uses explicit labels and native validation constraints', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Your name')).toBeRequired();
    expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('What would you like to build?')).toBeRequired();
  });
  it('preserves text and offers a direct-email fallback on network failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Network error')));
    render(<ContactForm />); fillForm();
    fireEvent.submit(screen.getByRole('form'));
    expect(await screen.findByText(/Your message wasn’t sent/)).toBeInTheDocument();
    expect(screen.getByLabelText('What would you like to build?')).toHaveValue('A sample enquiry for a mocked test only.');
    expect(screen.getByRole('link', { name: 'email me directly' })).toHaveAttribute('href', 'mailto:galangmarkg@gmail.com');
    expect(screen.getByRole('button', { name: /Send message/ })).toBeEnabled();
  });
  it('shows pending state, prevents duplicate sends and announces success', async () => {
    let finish;
    const fetchMock = vi.fn(() => new Promise(resolve => { finish = resolve; }));
    vi.stubGlobal('fetch', fetchMock);
    render(<ContactForm />); fillForm();
    fireEvent.submit(screen.getByRole('form'));
    expect(screen.getByRole('button', { name: /Sending/ })).toBeDisabled();
    fireEvent.submit(screen.getByRole('form'));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    finish({ ok: true });
    expect(await screen.findByText('Thanks! Your message has been sent.')).toBeInTheDocument();
    expect(screen.getByLabelText('Your name')).toHaveValue('');
    expect(fetchMock.mock.calls[0][0]).toBe('https://formspree.io/f/mgepoonk');
  });
  it('treats non-success HTTP responses as failures', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }));
    render(<ContactForm />); fillForm(); fireEvent.submit(screen.getByRole('form'));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Your message wasn’t sent'));
  });
});
