/**
 * Production-safe logging utility
 *
 * In development: All log levels are active
 * In production: Only warnings and errors are logged to avoid exposing internal details
 */

const isDev = import.meta.env.DEV

export const logger = {
  /**
   * Debug-level logging (stripped in production)
   * Use for detailed debugging information
   */
  log: isDev ? console.log.bind(console) : () => {},

  /**
   * Info-level logging (stripped in production)
   * Use for general informational messages
   */
  info: isDev ? console.info.bind(console) : () => {},

  /**
   * Debug-level logging (stripped in production)
   * Use for detailed debugging traces
   */
  debug: isDev ? console.debug.bind(console) : () => {},

  /**
   * Warning-level logging (kept in production)
   * Use for recoverable issues that should be monitored
   */
  warn: console.warn.bind(console),

  /**
   * Error-level logging (kept in production)
   * Use for errors and exceptions that need attention
   */
  error: console.error.bind(console),
}
