"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var replace_1 = __importDefault(require("./lib/replace"));
var NakamuraCalendar = /** @class */ (function () {
    function NakamuraCalendar(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    NakamuraCalendar.prototype.setDate = function (date) {
        this.date = date;
        return this;
    };
    NakamuraCalendar.prototype.getDate = function (format) {
        if (format === void 0) { format = ""; }
        if (format != "") {
            return this.format(format);
        }
        return this.date.toString();
    };
    NakamuraCalendar.prototype.add = function (plus, unit, flag) {
        if (unit === void 0) { unit = "day"; }
        if (flag === void 0) { flag = false; }
        var time = this.date.getTime() + plus * this.getMillisecond(unit);
        if (flag) {
            this.date = new Date(time);
            return this;
        }
        return new NakamuraCalendar(new Date(time));
    };
    NakamuraCalendar.prototype.diff = function (date, unit) {
        if (unit === void 0) { unit = "day"; }
        var millisecond = date.getTime() - this.date.getTime();
        return millisecond / this.getMillisecond(unit);
    };
    NakamuraCalendar.prototype.isBefore = function (date) {
        if (this.date.getTime() - date.getTime() < 0) {
            return true;
        }
        return false;
    };
    NakamuraCalendar.prototype.isAfter = function (date) {
        if (this.date.getTime() - date.getTime() > 0) {
            return true;
        }
        return false;
    };
    NakamuraCalendar.prototype.format = function (format) {
        return replace_1.default(this.date, format);
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
exports.default = NakamuraCalendar;
var CLASS = new NakamuraCalendar();
console.log(CLASS.getDate("%aaaa %aaa %dddd %ddd"));
