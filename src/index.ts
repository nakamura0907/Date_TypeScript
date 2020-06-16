const LOCATION: string = "Asia/Tokyo";
const DATE: Date = new Date();

export const year = (): number => {
  return DATE.getFullYear();
};

export const month = (): number => {
  return DATE.getMonth() + 1;
};

export const date = (): number => {
  return DATE.getDate();
};

export const today = (separator: string = ""): string => {
  if (separator) {
    return year() + separator + month() + separator + date();
  }
  return year() + "年" + month() + "月" + date() + "日";
};

export const time = (separator: string = "", flag: boolean = false): string => {
  let hh: string | number = DATE.getHours();
  let mm: string | number = DATE.getMinutes();
  let ss: string | number = DATE.getSeconds();

  if (flag) {
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (ss < 10) {
      ss = "0" + ss;
    }
  }

  if (separator) {
    return hh + separator + mm + separator + ss;
  }

  return hh + "時" + mm + "分" + ss + "秒";
};

export const fullYear = (): string => {
  return DATE.toLocaleString();
};

console.log(today()); // YYYY年MM月DD日
console.log(today("/")); // YYYY/MM/DD
console.log(time()); // H時M分S秒
console.log(time(":")); // H:M:S
console.log(time("", true)); // HH時:MM分:SS秒
