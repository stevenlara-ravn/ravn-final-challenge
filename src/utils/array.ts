/**
 * Groups an array of items by a specified key or callback function.
 *
 * @param array - The array of items to group.
 * @param keySelector - A key or a function to determine the group key.
 *
 * @returns An object where keys are group identifiers and values are arrays of grouped items.
 */
export function groupBy<T>(
  array: T[],
  keySelector: (item: T) => string | number,
): Record<string | number, T[]> {
  return array.reduce(
    (result, item) => {
      const key = keySelector(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
      return result;
    },
    {} as Record<string | number, T[]>,
  );
}

/**
 * Generic sortBy function
 * @param items - Array of items to sort
 * @param keyExtractor - Callback function to extract the key for sorting
 * @param order - Sort order ('asc' for ascending, 'desc' for descending, default is 'desc')
 * @returns Sorted array of items
 */
export function sortBy<T>(
  items: T[],
  keySelector: (item: T) => string | number | Date,
  order: "asc" | "desc" = "desc",
): T[] {
  return [...items].sort((a, b) => {
    const keyA = keySelector(a);
    const keyB = keySelector(b);

    const valueA =
      keyA instanceof Date
        ? keyA.getTime()
        : typeof keyA === "string"
          ? new Date(keyA).getTime() || Number(keyA) || 0
          : Number(keyA) || 0;

    const valueB =
      keyB instanceof Date
        ? keyB.getTime()
        : typeof keyB === "string"
          ? new Date(keyB).getTime() || Number(keyB) || 0
          : Number(keyB) || 0;

    return order === "asc" ? valueA - valueB : valueB - valueA;
  });
}
