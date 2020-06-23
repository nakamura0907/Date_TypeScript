var LOCATION = "Asia/Tokyo";
var DATE = new Date();
export var year = function (date) {
    if (date === void 0) { date = new Date(); }
    return date.getFullYear();
};
export var month = function (date) {
    if (date === void 0) { date = new Date(); }
    return date.getMonth() + 1;
};
export var date = function (date) {
    if (date === void 0) { date = new Date(); }
    return date.getDate();
};
export var today = function (separator, d) {
    if (separator === void 0) { separator = ""; }
    if (d === void 0) { d = new Date(); }
    if (separator) {
        return year(d) + separator + month(d) + separator + date(d);
    }
    return year(d) + "年" + month(d) + "月" + date(d) + "日";
};
export var hours = function (date, flag) {
    if (date === void 0) { date = new Date(); }
    if (flag === void 0) { flag = false; }
    var hh = date.getHours();
    if (flag) {
        hh = format(hh);
    }
    return hh;
};
export var minutes = function (date, flag) {
    if (date === void 0) { date = new Date(); }
    if (flag === void 0) { flag = false; }
    var mm = date.getMinutes();
    if (flag) {
        mm = format(mm);
    }
    return mm;
};
export var seconds = function (date, flag) {
    if (date === void 0) { date = new Date(); }
    if (flag === void 0) { flag = false; }
    var ss = date.getSeconds();
    if (flag) {
        ss = format(ss);
    }
    return ss;
};
export var time = function (separator, date, flag) {
    if (separator === void 0) { separator = ""; }
    if (date === void 0) { date = new Date(); }
    if (flag === void 0) { flag = false; }
    var hh = hours(date, flag);
    var mm = minutes(date, flag);
    var ss = seconds(date, flag);
    if (separator) {
        return hh + separator + mm + separator + ss;
    }
    return hh + "時" + mm + "分" + ss + "秒";
};
var format = function (time) {
    var result = time;
    if (result < 10) {
        result = "0" + result;
    }
    return result;
};
