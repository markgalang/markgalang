import React, { useEffect, useRef, useState } from 'react';
import { experience, projects, skills } from './data';

const nav = [['skills', 'Skills'], ['experience', 'Experience'], ['work', 'Work'], ['contact', 'Contact']];
const Arrow = () => <span aria-hidden="true">↗</span>;

export function useReveals() {
  useEffect(() => {
    if (typeof window.IntersectionObserver !== 'function' || !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const elements = [...document.querySelectorAll('[data-reveal]')];
    elements.forEach(element => {
      // Only conceal items below the viewport; above-the-fold content is always visible.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        observer.observe(element);
        element.classList.add('reveal-pending');
      }
    });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal-pending')); };
  }, []);
}
function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = e => { if (!header.current?.contains(e.target)) setOpen(false); };
    const closeEscape = e => { if (e.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeEscape);
    return () => { document.removeEventListener('pointerdown', closeOutside); document.removeEventListener('keydown', closeEscape); };
  }, [open]);
  return <header className="header shell" ref={header}>
    <a className="brand" href="#top" onClick={() => setOpen(false)}>Mark Galang<span aria-hidden="true">.</span></a>
    <button ref={button} className="menu-toggle" type="button" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Main navigation">{nav.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}</nav>
  </header>;
}
export function ContactForm() {
  const [status, setStatus] = useState('idle');
  const abort = useRef(null);
  useEffect(() => () => abort.current?.abort(), []);
  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (String(data.get('_gotcha') || '')) return;
    setStatus('sending');
    const controller = new AbortController(); abort.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('https://formspree.io/f/mgepoonk', { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal });
      if (!response.ok) throw new Error('Unable to send');
      form.reset(); setStatus('success');
    } catch { setStatus('error'); }
    finally { window.clearTimeout(timeout); }
  }
  return <form className="contact-form" onSubmit={submit} aria-label="Send Mark a message" aria-busy={status === 'sending'}>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={120} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
    <label>What would you like to build?<textarea name="message" rows={4} required maxLength={5000} /></label>
    <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-bottom"><button className="button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'} <Arrow /></button><p className="form-note">Sent securely via Formspree.</p></div>
    <div className={`form-status ${status}`} role="status" aria-live="polite" aria-atomic="true">{status === 'success' && 'Thanks! Your message has been sent.'}{status === 'error' && <>Your message wasn’t sent. Please try again or <a href="mailto:galangmarkg@gmail.com">email me directly</a>. Your message is still here.</>}</div>
  </form>;
}
export default function App() {
  useReveals();
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div id="top" />
    <Header />
    <main id="main" className="shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Mark Galang / Clifton, New Jersey</p>
        <h1 id="hero-title">Software Engineer</h1>
        <p className="hero-statement">Applications. Infrastructure. Intelligent systems.</p>
        <div className="hero-meta"><p><span className="status-dot" aria-hidden="true" />Currently at <strong>JPMorganChase</strong><span className="hero-role">Software Engineer · Feb 2023–present</span></p><a className="text-link" href="#skills">Explore my toolkit <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="skills" className="section skills" aria-labelledby="skills-title">
        <div className="section-heading" data-reveal><p className="eyebrow">01 / Tech stack</p><h2 id="skills-title">The tools behind the work.</h2><p className="section-description">Languages, frameworks and platforms I work with.</p></div>
        <div className="skills-grid">{skills.map((skill, i) => <article className="skill" data-reveal key={skill.title} style={{ '--delay': `${i % 3 * 65}ms` }}><span className="index" aria-hidden="true">0{i + 1}</span><h3>{skill.title}</h3><ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="section-heading" data-reveal><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Applied in real engineering teams.</h2></div>
        <div className="experience-list">{experience.map(job => <article className="job" key={job.company} data-reveal><div className="job-heading"><span className="index">{job.range}</span><h3>{job.company}</h3><p>{job.role}</p><p className="job-date">{job.date}</p></div><div className="job-content"><ul className="job-bullets">{job.bullets.map(b => <li key={b}>{b}</li>)}</ul><ul className="tags" aria-label={`${job.company} technologies`}>{job.tags.map(t => <li key={t}>{t}</li>)}</ul></div></article>)}</div>
      </section>
      <section id="work" className="section" aria-labelledby="work-title">
        <div className="section-heading" data-reveal><p className="eyebrow">03 / Personal projects</p><h2 id="work-title">Software with a practical purpose.</h2></div>
        <div className="project-grid">{projects.map(project => <article className="project" key={project.title} data-reveal><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><details><summary>Project overview <span aria-hidden="true">+</span></summary><div className="project-details"><img src={project.image} alt={project.alt} loading="lazy" width="1200" height="675" /><h4>Key features</h4><ul>{project.features.map(f => <li key={f}>{f}</li>)}</ul><h4>Built with</h4><p>{project.stack.join(' · ')}</p></div></details></article>)}</div>
      </section>
      <aside className="approach" data-reveal><p className="eyebrow">Engineering approach</p><h2>Testable code. Reliable delivery. Useful software.</h2><p>Unit, integration, end-to-end and performance testing.</p></aside>
      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="contact-intro" data-reveal><p className="eyebrow">04 / Let’s connect</p><h2 id="contact-title">Good software starts with a conversation.</h2><p>Have a project in mind or an opportunity to discuss? Let’s talk.</p><div className="social-links"><a href="mailto:galangmarkg@gmail.com">Email <Arrow /></a><a href="https://www.linkedin.com/in/markggalang/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /><span className="sr-only"> (opens in a new tab)</span></a><a href="https://github.com/markgalang" target="_blank" rel="noopener noreferrer">GitHub <Arrow /><span className="sr-only"> (opens in a new tab)</span></a><a href="https://twitter.com/dev_markG" target="_blank" rel="noopener noreferrer">X <Arrow /><span className="sr-only"> (opens in a new tab)</span></a></div></div>
        <ContactForm />
      </section>
    </main>
    <footer className="footer shell"><p>Mark Galang <span>/</span> Clifton, New Jersey</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>;
}
