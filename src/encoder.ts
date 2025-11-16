export function encode(obj: any): string {
  let output = "";
  for (const key of Object.keys(obj)) {
    const arr = obj[key];
    if (!Array.isArray(arr)) continue;
    if (arr.length === 0) {
      output += `${key}[0]{}:\n`;
      continue;
    }
    const columns = Object.keys(arr[0]);
    output += `${key}[${arr.length}]{${columns.join(",")}}:\n`;
    for (const row of arr) {
      const values = columns.map(col => row[col]);
      output += `  ${values.join(",")}\n`;
    }
  }
  return output.trim();
}