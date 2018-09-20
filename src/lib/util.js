
/**
 * Created by Halley on 16/6/20.
 * 时间对象的格式化;
 */
function formatDate(date, format) {
    /*
     * eg:format="yyyy-MM-dd hh:mm:ss";
     */
    date = new Date(date);
    let o = {
        "M+": date.getMonth() + 1, // month
        "d+": date.getDate(), // day
        "h+": date.getHours(), // hour
        "m+": date.getMinutes(), // minute
        "s+": date.getSeconds(), // second
        "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
        "S": date.getMilliseconds()
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear().toString()).substr(4 - RegExp.$1.length));
    }

    for (let k in o) {
        if (new RegExp(`(${k})`).test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1
                ? o[k]
                : (`00${o[k]}`).substr((o[k].toString()).length));
        }
    }
    return format;
}

function getWeekDay(date) {
    let a = ["日", "一", "二", "三", "四", "五", "六"];
    let week = date ? new Date(date).getDay() : new Date().getDay();
    let str = `周${a[week]}`;
    return str;
}

function querySearch(key) {
    let match = RegExp(`[?&]${key}=([^&]*)`).exec(location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


function getOffsetLeft(obj) {
    let {offsetLeft, offsetParent} = obj;
    return offsetLeft + (offsetParent ? getOffsetLeft(offsetParent) : 0);
}

function getOffsetTop(obj) {
    let {offsetTop, offsetParent} = obj;
    return offsetTop + (offsetParent ? getOffsetTop(offsetParent) : 0);
}

export default function() {
    return {
        formatDate,
        getWeekDay,
        querySearch,
        getOffsetLeft,
        getOffsetTop
    }
}