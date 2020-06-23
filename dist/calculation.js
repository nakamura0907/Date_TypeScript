export var add = function (add, date) {
    if (date === void 0) { date = new Date(); }
    var time = date.getTime() + add * 86400000;
    return new Date(time);
};
export var diff = function (dayA, dayB) {
    if (dayB === void 0) { dayB = new Date(); }
    var milliSecond = dayB.getTime() - dayA.getTime();
    return milliSecond / 86400000;
};
