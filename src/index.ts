const LOCATION: string = "Asia/Tokyo";
const DATE: Date = new Date();

export const year = (date: Date = new Date()): number => {
  return date.getFullYear();
};

export const month = (date: Date = new Date()): number => {
  return date.getMonth() + 1;
};

export const date = (date: Date = new Date()): number => {
  return date.getDate();
};

export const today = (separator: string = "", d: Date = new Date()): string => {
  if (separator) {
    return year(d) + separator + month(d) + separator + date(d);
  }
  return year(d) + "年" + month(d) + "月" + date(d) + "日";
};

export const hours = (
  date: Date = new Date(),
  flag: boolean = false
): string | number => {
  let hh: string | number = date.getHours();
  if (flag) {
    hh = format(hh);
  }
  return hh;
};

export const minutes = (
  date: Date = new Date(),
  flag: boolean = false
): string | number => {
  let mm: string | number = date.getMinutes();
  if (flag) {
    mm = format(mm);
  }
  return mm;
};

export const seconds = (
  date: Date = new Date(),
  flag: boolean = false
): string | number => {
  let ss: string | number = date.getSeconds();
  if (flag) {
    ss = format(ss);
  }
  return ss;
};

export const time = (
  separator: string = "",
  date: Date = new Date(),
  flag: boolean = false
): string => {
  const hh: string | number = hours(date, flag);
  const mm: string | number = minutes(date, flag);
  const ss: string | number = seconds(date, flag);
  if (separator) {
    return hh + separator + mm + separator + ss;
  }
  return hh + "時" + mm + "分" + ss + "秒";
};

const format = (time: number): string | number => {
  let result: string | number = time;
  if (result < 10) {
    result = "0" + result;
  }
  return result;
};
