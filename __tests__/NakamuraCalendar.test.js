import NakamuraCalendar from "../src/NakamuraCalendar";

const MOCK = new Date(2020, 6, 15, 6, 30, 0);
const CLASS = new NakamuraCalendar(new Date(2020, 6, 15, 6, 30, 0));

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
  it("unit = hours", () => {});
  it("unit = week", () => {});
  it("unit = month", () => {});
  it("unit = year", () => {});
});

describe("diff", () => {
  it("unit = day", () => {});
  it("unit = hours", () => {});
  it("unit = week", () => {});
  it("unit = month", () => {});
  it("unit = year", () => {});
});
