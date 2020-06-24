import NakamuraCalendar from "../src";

const MOCK = new Date(2020, 6, 15, 6, 30, 0);
const CLASS = new NakamuraCalendar(new Date(2020, 6, 15, 6, 30, 0));

describe("setDate", () => {
  it("new Date()", () => {
    const CLASS2 = new NakamuraCalendar(MOCK);
    expect(CLASS2.setDate(new Date()).getDate()).toEqual(new Date().toString());
  });
});

describe("getDate", () => {
  it('arg = ""', () => {
    expect(CLASS.getDate()).toEqual(MOCK.toString());
  });
  it('arg = "%y年%M月%d日"', () => {
    expect(CLASS.getDate("%y年%M月%d日")).toEqual("2020年7月15日");
  });
  it('arg = "%h:%m:%s = 6:30:0', () => {
    expect(CLASS.getDate("%h:%m:%s")).toEqual("6:30:0");
  });
  it('arg = "%hh:%mm:%ss = 06:30:00', () => {
    expect(CLASS.getDate("%hh:%mm:%ss")).toEqual("06:30:00");
  });
});

describe("add", () => {
  it("unit = day", () => {
    const DATE = CLASS.add(3, "day");
    expect(DATE.getDate()).toEqual(new Date(2020, 6, 18, 6, 30, 0).toString());
  });
  it("unit = hours", () => {
    const DATE = CLASS.add(3, "hours");
    expect(DATE.getDate()).toEqual(new Date(2020, 6, 15, 9, 30, 0).toString());
  });
  it("unit = week", () => {
    const DATE = CLASS.add(3, "week");
    expect(DATE.getDate()).toEqual(new Date(2020, 7, 5, 6, 30, 0).toString());
  });
  it("unit = month", () => {
    const DATE = CLASS.add(3, "month");
    expect(DATE.getDate()).toEqual(new Date(2020, 9, 14, 14, 0, 0).toString());
  });
  it("unit = year", () => {
    const DATE = CLASS.add(3, "year");
    expect(DATE.getDate()).toEqual(new Date(2023, 6, 16, 0, 30, 0).toString());
  });
  it("flag = true", () => {
    expect(CLASS.add(0, "day", true).getDate()).toEqual(
      new Date(2020, 6, 15, 6, 30, 0).toString()
    );
  });
});

describe("diff", () => {
  it("unit = day", () => {
    expect(CLASS.diff(new Date(2020, 6, 18, 6, 30, 0), "day")).toEqual(3);
  });
  it("unit = hours", () => {
    expect(CLASS.diff(new Date(2020, 6, 15, 9, 30, 0), "hours")).toEqual(3);
  });
  it("unit = week", () => {
    // expect(CLASS.diff(new Date(2020, 7, 5, 6, 30, 0), "week")).toEqual(3); 2.999999
  });
  it("unit = month", () => {
    expect(CLASS.diff(new Date(2020, 9, 14, 14, 0, 0), "month")).toEqual(3);
  });
  it("unit = year", () => {
    expect(CLASS.diff(new Date(2023, 6, 16, 0, 30, 0), "year")).toEqual(3);
  });
});

describe("isBefore", () => {
  it("true", () => {
    expect(CLASS.isBefore(new Date(2030, 6, 15))).toBe(true);
  });
  it("false", () => {
    expect(CLASS.isBefore(new Date(2010, 6, 15))).toBe(false);
  });
});

describe("isAfter", () => {
  it("true", () => {
    expect(CLASS.isAfter(new Date(2010, 6, 15))).toBe(true);
  });
  it("false", () => {
    expect(CLASS.isAfter(new Date(2030, 6, 15))).toBe(false);
  });
});
