export function decode(toon: string): any {
  const lines = toon.split("\n");
  const result: any = {};
  let currentKey = "";
  let columns: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.endsWith(":")) {
      const match = trimmed.match(/(\w+)\[(\d+)\]\{([^}]*)\}:/);
      if (!match) continue;
      currentKey = match[1];
      columns = match[3].split(",");
      result[currentKey] = [];
    } else if (trimmed.length > 0) {
      const values = trimmed.split(",");
      const obj: any = {};
      columns.forEach((key, i) => {
        obj[key] = isNaN(Number(values[i])) ? values[i] : Number(values[i]);
      });
      result[currentKey].push(obj);
    }
  }
  return result;
}