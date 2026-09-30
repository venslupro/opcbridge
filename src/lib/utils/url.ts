/**
 * Normalizes a configured URL: trims it, adds `https://` when the scheme is
 * missing (e.g. `ontodecide.opcbridge.top`), and drops trailing slashes.
 * Returns `undefined` for empty input so callers can fall back to a default.
 */
export function normalizeUrl(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  if (!trimmed) {
    return undefined;
  }
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed.replace(/^\/+/, '')}`;
  return withScheme.replace(/\/+$/, '');
}
