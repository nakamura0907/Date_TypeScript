import replace from "./lib/replace";

class NakamuraCalendar {
  private date: Date;

  constructor(date: Date = new Date()) {
    this.date = date;
  }

  setDate(date: Date): NakamuraCalendar {
    this.date = date;
    return this;
  }

  getDate(format: string = ""): string {
    if (format != "") {
      return this.format(format);
    }
    return this.date.toString();
  }

  add(
    plus: number,
    unit: string = "day",
    flag: boolean = false
  ): NakamuraCalendar {
    const time: number = this.date.getTime() + plus * this.getMillisecond(unit);
    if (flag) {
      this.date = new Date(time);
      return this;
    }
    return new NakamuraCalendar(new Date(time));
  }

  diff(date: Date, unit: string = "day"): number {
    const millisecond: number = date.getTime() - this.date.getTime();
    return millisecond / this.getMillisecond(unit);
  }

  isBefore(date: Date): boolean {
    if (this.date.getTime() - date.getTime() < 0) {
      return true;
    }
    return false;
  }

  isAfter(date: Date): boolean {
    if (this.date.getTime() - date.getTime() > 0) {
      return true;
    }
    return false;
  }

  private format(format: string): string {
    return replace(this.date, format);
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

export default NakamuraCalendar;
