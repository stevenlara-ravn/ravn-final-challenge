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
