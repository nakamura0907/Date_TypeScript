const ary = [
  {
    searchValue: /%hoge/gi,
    replaceValue: "huga",
  },
  {
    searchValue: /%Y/gi,
    // replaceValue: String(date.getFullYear()),
    replaceValue: "piyo",
  },
];

const day = [
  {
    aaaa: "日曜日",
    aaa: "日",
    dddd: "Sunday",
    ddd: "Sun",
  },
  {
    aaaa: "月曜日",
    aaa: "月",
    dddd: "Monday",
    ddd: "Mon",
  },
  {
    aaaa: "火曜日",
    aaa: "火",
    dddd: "Tuesday",
    ddd: "Tue",
  },
  {
    aaaa: "水曜日",
    aaa: "水",
    dddd: "Wednesday",
    ddd: "Wed",
  },
  {
    aaaa: "木曜日",
    aaa: "木",
    dddd: "Thursday",
    ddd: "Thu",
  },
  {
    aaaa: "金曜日",
    aaa: "金",
    dddd: "Friday",
    ddd: "Fri",
  },
  {
    aaaa: "土曜日",
    aaa: "土",
    dddd: "Saturday",
    ddd: "Sat",
  },
];

const zeroPadding = (time: number): string => {
  if (time < 10) {
    return "0" + time;
  }
  return String(time);
};

const replace = (date: Date, value: string): string => {
  // let result: string = value;
  // ary.map((item) => {
  //   result = result.replace(item.searchValue, item.replaceValue);
  // });
  let result = value
    .replace(/%YYYY/g, String(date.getFullYear()))
    .replace(/%YY/g, String(date.getFullYear()).slice(2))
    .replace(/%MM/g, () => {
      return zeroPadding(date.getMonth() + 1);
    })
    .replace(/%M/g, String(date.getMonth() + 1))
    .replace(/%DD/g, () => {
      return zeroPadding(date.getDate());
    })
    .replace(/%D/g, String(date.getDate()))
    .replace(/%hh/g, () => {
      return zeroPadding(date.getHours());
    })
    .replace(/%mm/g, () => {
      return zeroPadding(date.getMinutes());
    })
    .replace(/%ss/g, () => {
      return zeroPadding(date.getSeconds());
    })
    .replace(/%h/g, String(date.getHours()))
    .replace(/%m/g, String(date.getMinutes()))
    .replace(/%s/g, String(date.getSeconds()))
    .replace(/%aaaa/g, day[date.getDay()]["aaaa"])
    .replace(/%aaa/g, day[date.getDay()]["aaa"])
    .replace(/%dddd/g, day[date.getDay()]["dddd"])
    .replace(/%ddd/g, day[date.getDay()]["ddd"]);
  return result;
};

export default replace;
