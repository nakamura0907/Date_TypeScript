class NakamuraCalendar {
  private date: Date;

  constructor(date: Date = new Date()) {
    this.date = date;
  }

  getDate(): string {
    return this.date.toString();
  }

  add(date: Date, plus: number, unit: string = "day"): NakamuraCalendar {
    const time: number = date.getTime() + plus * this.getMillisecond(unit);
    return new NakamuraCalendar(new Date(time));
  }

  diff(date: Date, unit: string = "day"): number {
    const millisecond: number = date.getTime() - this.date.getTime();
    return millisecond / this.getMillisecond(unit);
  }

  private format(format: string): string {
    return "hoge";
  }

  private getMillisecond(unit: string): number {
    let millisecond: number;
    switch (unit) {
      case "day":
        millisecond = 86400000;
        break;
      case "hours":
        millisecond = 3600000;
        break;
      case "week":
        millisecond = 604800017;
        break;
      case "month":
        millisecond = 2629800000;
        break;
      case "year":
        millisecond = 31557600000;
        break;
      default:
        millisecond = 86400000;
    }
    return millisecond;
  }
}

let hoge = new NakamuraCalendar(new Date(2020, 6, 15, 12, 30, 0));
console.log("day: ", hoge.diff(new Date(2020, 6, 30, 12, 30, 0), "day"));
console.log("week: ", hoge.diff(new Date(2020, 6, 30, 12, 30, 0), "week"));
