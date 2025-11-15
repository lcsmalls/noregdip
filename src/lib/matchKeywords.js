export function matchKeywords(text) {
  const phrases = ["flag", "new country", "independence"];

  return phrases.some(phrase =>
    text.toLowerCase().includes(phrase)
  );
}
