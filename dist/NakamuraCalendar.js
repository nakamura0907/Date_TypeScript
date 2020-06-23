"use strict";
var NakamuraCalendar = /** @class */ (function () {
    function NakamuraCalendar(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    NakamuraCalendar.prototype.getDate = function () {
        return this.date.toString();
    };
    NakamuraCalendar.prototype.add = function (date, plus, unit) {
        if (unit === void 0) { unit = "day"; }
        var time = date.getTime() + plus * this.getMillisecond(unit);
        return new NakamuraCalendar(new Date(time));
    };
    NakamuraCalendar.prototype.diff = function (date, unit) {
        if (unit === void 0) { unit = "day"; }
        var millisecond = date.getTime() - this.date.getTime();
        return millisecond / this.getMillisecond(unit);
    };
    NakamuraCalendar.prototype.getMillisecond = function (unit) {
        var millisecond;
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
    };
    return NakamuraCalendar;
}());
var hoge = new NakamuraCalendar(new Date(2020, 6, 15, 12, 30, 0));
console.log("day: ", hoge.diff(new Date(2020, 6, 30, 12, 30, 0), "day"));
console.log("week: ", hoge.diff(new Date(2020, 6, 30, 12, 30, 0), "week"));
