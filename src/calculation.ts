export const add = (add: number, date: Date = new Date()): Date => {
  const time: number = date.getTime() + add * 86400000;
  return new Date(time);
};

export const diff = (dayA: Date, dayB: Date = new Date()): number => {
  const milliSecond: number = dayB.getTime() - dayA.getTime();
  return milliSecond / 86400000;
};
