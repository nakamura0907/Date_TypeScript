import * as DATE from "../src/index";

const NOW = new Date();
const MOCK = new Date(2020, 1, 1, 5, 0, 0);

describe("year", () => {
  it("now", () => {
    expect(DATE.year()).toBe(NOW.getFullYear());
  });
  it("2020", () => {
    expect(DATE.year(MOCK)).toBe(MOCK.getFullYear());
  });
});

describe("month", () => {
  it("now", () => {
    expect(DATE.month()).toBe(NOW.getMonth() + 1);
  });
  it("1", () => {
    expect(DATE.month(MOCK)).toBe(MOCK.getMonth() + 1);
  });
});

describe("date", () => {
  it("now", () => {
    expect(DATE.date()).toBe(NOW.getDate());
  });
  it("1", () => {
    expect(DATE.date(MOCK)).toBe(MOCK.getDate());
  });
});

describe("today", () => {
  it("YYYY年MM月DD日", () => {
    const today =
      NOW.getFullYear() +
      "年" +
      (NOW.getMonth() + 1) +
      "月" +
      NOW.getDate() +
      "日";
    expect(DATE.today()).toBe(today);
  });
  it("2020/1/1", () => {
    const today =
      MOCK.getFullYear() + "/" + (MOCK.getMonth() + 1) + "/" + MOCK.getDate();
    expect(DATE.today("/", MOCK)).toBe(today);
  });
});

describe("hours", () => {
  it("H", () => {
    expect(DATE.hours(MOCK, false)).toBe(MOCK.getHours());
  });
  it("HH", () => {
    expect(DATE.hours(MOCK, true)).toBe("05");
  });
});

describe("minutes", () => {
  it("M", () => {
    expect(DATE.minutes(MOCK, false)).toBe(MOCK.getMinutes());
  });
  it("MM", () => {
    expect(DATE.minutes(MOCK, true)).toBe("00");
  });
});

describe("seconds", () => {
  it("S", () => {
    expect(DATE.seconds(MOCK, false)).toBe(MOCK.getMinutes());
  });
  it("SS", () => {
    expect(DATE.seconds(MOCK, true)).toBe("00");
  });
});

describe("time", () => {
  it("H時M分S秒", () => {
    expect(DATE.time("", MOCK, false)).toBe("5時0分0秒");
  });
  it("HH:MM:SS", () => {
    expect(DATE.time(":", MOCK, true)).toBe("05:00:00");
  });
});
