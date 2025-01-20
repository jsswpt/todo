export type NormalizeDataValue<T extends { id: number }> = Array<T>

export const normalizeData = <T extends { id: number }>(
  value: NormalizeDataValue<T>
): Record<string, T> =>
  value.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
