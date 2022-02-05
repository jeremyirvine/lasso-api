"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const axiosMitm = axios_1.default.create({
    proxy: {
        host: "localhost",
        port: 8080
    },
    maxRedirects: 0,
});
exports.default = axiosMitm;
//# sourceMappingURL=mitm.js.map