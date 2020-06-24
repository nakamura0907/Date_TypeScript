var NakamuraCalendar = /** @class */ (function () {
    function NakamuraCalendar(date) {
        if (date === void 0) { date = new Date(); }
        this.date = date;
    }
    NakamuraCalendar.prototype.getDate = function (format) {
        if (format === void 0) { format = ""; }
        if (format != "") {
            return this.format(format);
        }
        return this.date.toString();
    };
    NakamuraCalendar.prototype.add = function (plus, unit) {
        if (unit === void 0) { unit = "day"; }
        var time = this.date.getTime() + plus * this.getMillisecond(unit);
        return new NakamuraCalendar(new Date(time));
    };
    NakamuraCalendar.prototype.diff = function (date, unit) {
        if (unit === void 0) { unit = "day"; }
        var millisecond = date.getTime() - this.date.getTime();
        return millisecond / this.getMillisecond(unit);
    };
    NakamuraCalendar.prototype.format = function (format) {
        var _this = this;
        var result;
        result = format
            .replace(/%Y/gi, String(this.date.getFullYear()))
            .replace(/%M/g, String(this.date.getMonth() + 1))
            .replace(/%D/gi, String(this.date.getDate()))
            .replace(/%hh/gi, function () {
            var hours = _this.date.getHours();
            if (hours < 10) {
                return "0" + hours;
            }
            return String(hours);
        })
            .replace(/%mm/g, function () {
            var minutes = _this.date.getMinutes();
            if (minutes < 10) {
                return "0" + minutes;
            }
            return String(minutes);
        })
            .replace(/%ss/gi, function () {
            var seconds = _this.date.getSeconds();
            if (seconds < 10) {
                return "0" + seconds;
            }
            return String(seconds);
        })
            .replace(/%h/gi, String(this.date.getHours()))
            .replace(/%m/g, String(this.date.getMinutes()))
            .replace(/%s/gi, String(this.date.getSeconds()));
        return result;
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
export default NakamuraCalendar;
