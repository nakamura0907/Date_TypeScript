declare class NakamuraCalendar {
    private date;
    constructor(date?: Date);
    getDate(format?: string): string;
    add(plus: number, unit?: string): NakamuraCalendar;
    diff(date: Date, unit?: string): number;
    private format;
    private getMillisecond;
}
export default NakamuraCalendar;
