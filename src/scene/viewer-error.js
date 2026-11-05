/**
 * An error with a stable code the React surface can localize.
 */
export class ViewerError extends Error {
  /**
   * @param {'webgl' | 'scene' | 'parse'} code Failure category.
   * @param {string} message Technical detail, kept for the disclosure panel.
   * @param {unknown} [cause] Original error.
   */
  constructor(code, message, cause) {
    super(message);
    this.name = 'ViewerError';
    this.code = code;
    this.cause = cause;
  }
}
