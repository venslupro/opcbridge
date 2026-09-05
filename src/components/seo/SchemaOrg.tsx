import type { ReactElement } from 'react';

type JsonLdProps = {
  readonly data: ReadonlyArray<Record<string, unknown>>;
};

export function SchemaOrg({ data }: JsonLdProps): ReactElement {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
