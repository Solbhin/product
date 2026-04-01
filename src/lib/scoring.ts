import results from '@/data/results.json';

export type ResultType = (typeof results)[number];

export function calculateScore(answers: number[]): number {
  return answers.reduce((sum, a) => sum + (a >= 0 ? a : 0), 0);
}

export function getResultById(id: string): ResultType | undefined {
  return results.find((r) => r.id === id);
}

export function getResultByScore(score: number): ResultType {
  const match = results.find((r) => score >= r.minScore && score <= r.maxScore);
  return match ?? results[results.length - 1];
}

export function getResultTypeFromAnswers(answers: number[]): string {
  const score = calculateScore(answers);
  return getResultByScore(score).id;
}

export function getAllResultIds(): string[] {
  return results.map((r) => r.id);
}
