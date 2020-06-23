declare class NakamuraCalendar {
    private date;
    constructor(date?: Date);
    getDate(): string;
    add(date: Date, plus: number, unit?: string): NakamuraCalendar;
    diff(date: Date, unit?: string): number;
    private getMillisecond;
}
declare let hoge: NakamuraCalendar;
