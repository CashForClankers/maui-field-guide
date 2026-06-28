export const escapeIcs = (value: string) =>
  value
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;");

export const foldIcsLine = (value: string) => {
  const lines: string[] = [];
  let current = "";
  for (const character of value) {
    const next = `${current}${character}`;
    if (new TextEncoder().encode(next).length > 75) {
      lines.push(current);
      current = ` ${character}`;
    } else {
      current = next;
    }
  }
  lines.push(current);
  return lines.join("\r\n");
};

export const renderIcs = (lines: string[]) =>
  `${lines.map(foldIcsLine).join("\r\n")}\r\n`;
