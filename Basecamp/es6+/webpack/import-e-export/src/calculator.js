const sum = (...params) => params.reduce((total, next) => total + next);
const sub = (...params) => params.reduce((total, next) => total - next);

export { sum, sub };
