export function isRequire(param) {
    param = ((param||"")+"").trim();
    return param && param.length;
}

export function isTel(param) {
    return /^1[34578]\d{9}$/.test(param);
}

export function isName(param) {
    param = (param||"").trim();
    return /^[\u4e00-\u9fa5a-zA-Z0-9_\-\s]+$/.test(param);//\u4e00-\u9fa5：中文；a-zA-Z0-9：字母+数字；_\-\s：空格和下划线中划线
}

export function range(val,rngObj){
	let len=(val||"").length;
	return len>=rngObj.min&&len<=rngObj.max;
}

export function isNormal(param) {//不包含特殊字符，只包含数字和字母
    param = (param||"").trim();
    return /^[A-Za-z0-9_\-]+$/.test(param);//匹配由数字、26个英文字母或者下划线组成的字符串
}

export function isURL(param) {//不包含特殊字符，只包含数字和字母
    param = (param||"").trim();
    return /(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/.test(param);//匹配由数字、26个英文字母或者下划线组成的字符串
}


