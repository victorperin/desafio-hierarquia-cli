export const findDepth = (path: string[], depth: number) => {
  return path[depth - 1] || null
}