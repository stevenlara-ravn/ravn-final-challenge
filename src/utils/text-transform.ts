export const normalizeText = (text: string) =>
  text.toLowerCase().replace(/_/g, " ");
export const zeroPad = (number: number) => number.toString().padStart(2, "0");
