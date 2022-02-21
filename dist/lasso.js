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
         *	@returns the axios instance based on wether we're using MITM
         */
        this.getAxios = () => this.useMitm ? mitm_1.default : axios_1.default;
        /**
         *  @returns headers used for communicating with Lasso
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
     * @returns {Promise<EventsResponse | TransportError>} Array of Events, or an error if one occurred
     */
    async getEvents(params) {
        let urlData = (0, util_1.URLSerializeObject)(params || {});
        let req;
        try {
            req = await this.getAxios().get(`${this.urlBase}/events${urlData}`, {
                headers: this.getHeaders()
            });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Gets an event from the event's id
     * @returns {Promise<Event | TransportError>} The event with the supplied id, or an error if one occurred
     */
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
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Updates an event's data based on the event's id, without suppplying the complete event dataset
     * @param {number} id - The id of the event you want to modify
     * @param {Event} ev - The data you want to update
     * @returns {Promise<Event | TransportError>} The full event with the modifications, or an error if one occurred
     */
    async updateEvent(id, ev) {
        let req;
        try {
            req = await this.getAxios().patch(`${this.urlBase}/events/${id}`, ev, {
                headers: this.getHeaders()
            });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Create an event with the supplied data
     * @param {Event} ev - The event data used to create a new event
     * @returns {Promise<Event | TransportError>} The event that was just created, or an error if one occurred
     */
    async createEvent(ev) {
        let req;
        try {
            req = await this.getAxios().post(`${this.urlBase}/events`, {
                ...ev,
                hide_client: typeof ev.hide_client === 'undefined' ? true : ev.hide_client
            }, { headers: this.getHeaders() });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Gets the clients for the current url and API Key
     * @returns {Promise<ClientsResponse | TransportError>} Array of Clients, or an error if one occurred
     */
    async getClients(params) {
        let urlData = (0, util_1.URLSerializeObject)(params || {});
        let req;
        try {
            req = await this.getAxios().get(`${this.urlBase}/clients${urlData}`, {
                headers: this.getHeaders()
            });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Gets a client from the client's id
     * @returns {Promise<Client | TransportError>} The client with the supplied id, or an error if one occurred
     */
    async getClient(id) {
        let req;
        try {
            req = await this.getAxios().get(`${this.urlBase}/clients/${id}`, {
                headers: this.getHeaders()
            });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Updates an client's data based on the client's id, without suppplying the complete event dataset
     * @param {number} id - The id of the client you want to modify
     * @param {Client} cl - The data you want to update
     * @returns {Promise<Client | TransportError>} The full event with the modifications, or an error if one occurred
     */
    async updateClient(id, cl) {
        let req;
        try {
            req = await this.getAxios().patch(`${this.urlBase}/clients/${id}`, cl, {
                headers: this.getHeaders()
            });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
    /**
     * Create a client with the supplied data
     * @param {Client} cl - The client data used to create a new client
     * @returns {Promise<Client | TransportError>} The client that was just created, or an error if one occurred
     */
    async createClient(cl) {
        let req;
        try {
            req = await this.getAxios().post(`${this.urlBase}/clients`, cl, { headers: this.getHeaders() });
        }
        catch (e) {
            return {
                code: e.response.status,
                data: e.response.data,
                _istransporterror: true
            };
        }
        return req.data;
    }
}
exports.default = Lasso;
//# sourceMappingURL=lasso.js.map