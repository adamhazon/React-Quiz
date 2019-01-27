export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const RESET = 'RESET';
export const START = 'START';

export function correctAnswer() {
  return { type: CORRECT_ANSWER };
}

export function reset(payload) {
  return { type: RESET, payload: payload };
}

export function start() {
  return { type: START };
}
