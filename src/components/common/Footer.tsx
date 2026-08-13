import type { DictionaryFooter } from '@/types';
import { CONTACT_EMAIL } from '@/lib/constants/site';

interface FooterProps {
  readonly footer: DictionaryFooter;
  readonly siteName: string;
}

export function Footer({ footer, siteName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">◈</span>
          <span className="logo-text">{siteName}</span>
          <p className="footer-tagline">{footer.tagline}</p>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {year} {siteName}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
