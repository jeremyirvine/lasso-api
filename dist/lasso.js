"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const mitm_1 = require("./mitm");
class Lasso {
    /**
     *
     * @param urlBase {string} The lasso.io url to use when communicating with `Lasso`
     * @param token {string} The api key for authentication
     */
    constructor(urlBase, token) {
        if (urlBase.length <= 0)
            throw new Error("Lasso requires a baseURL");
        if (token.length <= 0)
            throw new Error("Lasso requires an API key");
        this.urlBase = urlBase;
        this.token = token;
        this.useMitm = false;
    }
    /**
     *	Use the "axiosMitm" instance instead of the axios default instance,
     * 	forwarding traffic through port 8080
     */
    useMITM() {
        this.useMitm = true;
    }
    /**
     *	Returns the axios instance based on wether we're using MITM
     */
    getAxios() {
        return this.useMitm ? mitm_1.default : axios_1.default;
    }
    /**
     * Gets the events for the current url and API Key
     * @returns {Promise<Array>} Array of Events
     */
    async getEvents() {
        let req = await this.getAxios().get(`${this.urlBase}/events`, {
            headers: {
                'LASSO-APIKEY': this.token
            }
        });
        return req.data;
    }
}
exports.default = Lasso;
//# sourceMappingURL=lasso.js.map