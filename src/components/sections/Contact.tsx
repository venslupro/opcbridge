import type { DictionaryContact } from '@/types';
import { CONTACT_EMAIL } from '@/lib/constants/site';
import { CTAButton } from '@/components/common/CTAButton';

interface ContactProps {
  readonly contact: DictionaryContact;
}

export function Contact({ contact }: ContactProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <span className="section-badge">{contact.badge}</span>
          <h2 className="section-title">{contact.title}</h2>
          <p className="contact-subtitle">{contact.subtitle}</p>
          <div className="contact-email-row">
            <span className="contact-email-label">{contact.emailLabel}</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
              {CONTACT_EMAIL}
            </a>
          </div>
          <CTAButton href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="lg" external>
            {contact.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
