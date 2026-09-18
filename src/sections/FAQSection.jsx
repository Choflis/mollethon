import React from 'react';
import { FAQ_DATA } from '../data/faqData';
import Accordion from '../components/Accordion';

export default function FAQSection() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle">
            Todo lo que necesitas saber para prepararte y vivir la Innovathon frente al mar.
          </p>
        </div>

        {/* Accessible Animated Accordion */}
        <Accordion items={FAQ_DATA} />

        {/* Secondary Help Callout */}
        <div className="faq-help-box text-center">
          <p>
            ¿Tienes otra duda que no esté aquí listada? Escríbenos a{' '}
            <a href="mailto:hola@innovathonmollendo.pe" className="faq-mail-link">
              hola@innovathonmollendo.pe
            </a>
          </p>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: #040e24;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .faq-help-box {
          margin-top: 3.5rem;
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }
        .faq-mail-link {
          color: var(--color-aqua);
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .faq-mail-link:hover {
          color: var(--color-lime);
        }
      `}</style>
    </section>
  );
}
