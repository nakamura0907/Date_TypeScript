declare class NakamuraCalendar {
    private date;
    constructor(date?: Date);
    setDate(date: Date): NakamuraCalendar;
    getDate(format?: string): string;
    add(plus: number, unit?: string, flag?: boolean): NakamuraCalendar;
    diff(date: Date, unit?: string): number;
    isBefore(date: Date): boolean;
    isAfter(date: Date): boolean;
    private format;
    private getMillisecond;
}
export default NakamuraCalendar;
