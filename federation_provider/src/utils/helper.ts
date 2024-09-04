export const helper = (num:number):number => {
  if (num <= 1) return 1
  if (num === 2) return 2
  return helper(num-1) + helper(num-2)
} 