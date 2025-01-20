export type NormalizeDataValue<T extends { id: string | number }> = Array<T>

export const normalizeData = <T extends { id: string | number }>(
  value: NormalizeDataValue<T>
): Record<string, T> =>
  value.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
