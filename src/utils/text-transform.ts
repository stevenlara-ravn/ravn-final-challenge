/**
 * Normalizes text to lowercase and replaces underscores with spaces
 * @param text string
 * @returns string
 *
 * @example
 * normalizeText("IN_PROGRESS") // in progress
 */
export const normalizeText = (text: string) =>
  text.toLowerCase().replace(/_/g, " ");

/**
 * Pads a number with leading zeros
 * @param number number
 * @returns string
 *
 * @example
 * zeroPad(1) // 01
 */
export const zeroPad = (number: number) => number.toString().padStart(2, "0");
