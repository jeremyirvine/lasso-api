"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const mitm_1 = require("./mitm");
const util_1 = require("./util");
class Lasso {
    /**
     * @param urlBase {string} The lasso.io url to use when communicating with `Lasso` (follows the format https://<company>.lasso.io/api/v1)
     * @param token {string} The api key for authentication
     */
    constructor(urlBase, token) {
        /**
         *	Returns the axios instance based on wether we're using MITM
         */
        this.getAxios = () => this.useMitm ? mitm_1.default : axios_1.default;
        /**
         *  Returns headers used for communicating with Lasso
         */
        this.getHeaders = () => ({ 'LASSO-APIKEY': this.token });
        if (!urlBase || urlBase.length <= 0)
            throw new Error("Lasso requires a baseURL");
        if (!token || token.length <= 0)
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
     * Gets the events for the current url and API Key
     * @returns {Promise<Array>} Array of Events
     */
    async getEvents(params) {
        let urlData = (0, util_1.URLSerializeObject)(params);
        let req = await this.getAxios().get(`${this.urlBase}/events${urlData}`, {
            headers: this.getHeaders()
        });
        return req.data;
    }
    async getEvent(id) {
        let req;
        try {
            req = await this.getAxios().get(`${this.urlBase}/events/${id}`, {
                headers: this.getHeaders()
            });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data
            };
        }
        return req.data;
    }
}
exports.default = Lasso;
//# sourceMappingURL=lasso.js.map