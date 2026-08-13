import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { ensureLocale } from '@/lib/i18n/ensure-locale';
import { getDictionary } from '@/lib/i18n/get-dictionary';

interface HomePageProps {
  readonly params: Promise<{ readonly locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  const locale = await ensureLocale(rawLocale);
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} hero={dict.hero} />
      <ProjectsGrid locale={locale} projects={dict.projects} />
      <Contact contact={dict.contact} />
    </>
  );
}
