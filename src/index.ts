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
    let result: string;
    result = format
      .replace(/%Y/gi, String(this.date.getFullYear()))
      .replace(/%M/g, String(this.date.getMonth() + 1))
      .replace(/%D/gi, String(this.date.getDate()))
      .replace(/%hh/gi, () => {
        let hours = this.date.getHours();
        if (hours < 10) {
          return "0" + hours;
        }
        return String(hours);
      })
      .replace(/%mm/g, () => {
        let minutes = this.date.getMinutes();
        if (minutes < 10) {
          return "0" + minutes;
        }
        return String(minutes);
      })
      .replace(/%ss/gi, () => {
        let seconds = this.date.getSeconds();
        if (seconds < 10) {
          return "0" + seconds;
        }
        return String(seconds);
      })
      .replace(/%h/gi, String(this.date.getHours()))
      .replace(/%m/g, String(this.date.getMinutes()))
      .replace(/%s/gi, String(this.date.getSeconds()));
    return result;
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
