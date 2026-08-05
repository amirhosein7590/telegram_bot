export function normalizeText(input: string): string {
  return input
    .normalize("NFKC")
    .replace(/\u200c/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function containsAnyKeyword(
  text: string,
  keywords: readonly string[]
): boolean {
  const normalized = normalizeText(text);

  return keywords.some((keyword) => normalized.includes(normalizeText(keyword)));
}

export function findMatchedKeywords(
  text: string,
  keywords: readonly string[]
): string[] {
  const normalized = normalizeText(text);

  return keywords.filter((keyword) =>
    normalized.includes(normalizeText(keyword))
  );
}