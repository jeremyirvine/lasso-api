"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLSerializeObject = void 0;
function URLSerializeObject(obj) {
    let queryString = "";
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let key = Object.keys(obj)[i];
        let prefix = i == 0 ? "?" : "&";
        queryString += `${prefix}${key}=${encodeURIComponent(obj[key])}`;
    }
    console.log(queryString);
    return queryString;
}
exports.URLSerializeObject = URLSerializeObject;
//# sourceMappingURL=util.js.map