import type { DictionaryHero, Locale } from '@/types';
import { CTAButton } from '@/components/common/CTAButton';

interface HeroProps {
  readonly locale: Locale;
  readonly hero: DictionaryHero;
}

export function Hero({ locale, hero }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>
      <div className="container hero-content">
        <span className="hero-badge animate-fade-up">{hero.badge}</span>
        <div className="hero-logo-wrapper animate-fade-up delay-1">
          <img src="/icon.svg" alt="OPC Bridge" className="hero-logo" width="120" height="120" />
        </div>
        <h1 className="hero-title animate-fade-up delay-2">
          {hero.titleLine1}
          <br />
          <span className="gradient-text">{hero.titleLine2}</span>
        </h1>
        <p className="hero-subtitle animate-fade-up delay-3">{hero.subtitle}</p>
        <div className="hero-cta animate-fade-up delay-4">
          <CTAButton href={`/${locale}#projects`} variant="primary" size="lg">
            {hero.ctaPrimary}
          </CTAButton>
          <CTAButton href={`/${locale}#contact`} variant="outline" size="lg">
            {hero.ctaSecondary}
          </CTAButton>
        </div>
        <dl className="hero-stats animate-fade-up delay-5">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <dt className="hero-stat-label">{stat.label}</dt>
              <dd className="hero-stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
