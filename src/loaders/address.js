const FILE_ADDRESS_PREFIX = 'dsh-resource://file/';

/**
 * Parse a DSH session file resource address.
 *
 * @param {unknown} address Resource address.
 * @returns {{ scope: 'session', sessionId: string, path: string } | undefined} Parsed address.
 */
export function parseFileAddress(address) {
  if (typeof address !== 'string' || !address.startsWith(FILE_ADDRESS_PREFIX)) return undefined;

  try {
    const end = address.search(/[?#]/);
    const [scope, ...rest] = address.slice(FILE_ADDRESS_PREFIX.length, end === -1 ? undefined : end).split('/');
    if (scope !== 'session') return undefined;
    const [id, ...segments] = rest;
    if (id === undefined || id === '' || segments.length === 0) return undefined;
    return {
      scope: 'session',
      sessionId: decodeURIComponent(id),
      path: segments.map(decodeURIComponent).join('/'),
    };
  } catch {
    return undefined;
  }
}
