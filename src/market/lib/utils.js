/* eslint import/prefer-default-export: 0 */

export function getDecimalCount(d) {
  let nums = d.toString();
  if (nums.length === 0) return 0;
  nums = nums.split('.');
  if (nums.length === 1) return 0;
  return nums[1].length;
}
