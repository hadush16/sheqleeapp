// 1. For paragraph text (3-digit grouping)
export function formatWithCommas(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

// 2. For black stat box (K, M, B formatting)
export function formatCompact(number) {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B+";
  }
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
  }
  if (number >= 1_000) {
    return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "K+";
  }
  return number + "+";
}
