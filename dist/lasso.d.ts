import type { Event, Client, EventsRequest, ClientsRequest, TransportError, Response } from './types';
declare class Lasso {
    urlBase: string;
    token: string;
    useMitm: boolean;
    /**
     * @param urlBase {string} The lasso.io url to use when communicating with `Lasso` (follows the format https://<company>.lasso.io/api/v1)
     * @param token {string} The api key for authentication
     */
    constructor(urlBase: string, token: string);
    /**
     *	Use the "axiosMitm" instance instead of the axios default instance,
     * 	forwarding traffic through port 8080
     */
    useMITM(): void;
    /**
     *	@returns the axios instance based on wether we're using MITM
     */
    getAxios: () => import("axios").AxiosInstance;
    /**
     *  @returns headers used for communicating with Lasso
     */
    getHeaders: () => {
        'LASSO-APIKEY': string;
    };
    /**
     * Gets the events for the current url and API Key
     * @returns {Promise<EventsResponse | TransportError>} Array of Events, or an error if one occurred
     */
    getEvents(params?: EventsRequest): Promise<Response<Event> | TransportError>;
    /**
     * Gets an event from the event's id
     * @returns {Promise<Event | TransportError>} The event with the supplied id, or an error if one occurred
     */
    getEvent(id: String): Promise<Event | TransportError>;
    /**
     * Updates an event's data based on the event's id, without suppplying the complete event dataset
     * @param {number} id - The id of the event you want to modify
     * @param {Event} ev - The data you want to update
     * @returns {Promise<Event | TransportError>} The full event with the modifications, or an error if one occurred
     */
    updateEvent(id: number, ev: Event): Promise<Event | TransportError>;
    /**
     * Create an event with the supplied data
     * @param {Event} ev - The event data used to create a new event
     * @returns {Promise<Event | TransportError>} The event that was just created, or an error if one occurred
     */
    createEvent(ev: Event): Promise<Event | TransportError>;
    /**
     * Gets the clients for the current url and API Key
     * @returns {Promise<ClientsResponse | TransportError>} Array of Clients, or an error if one occurred
     */
    getClients(params?: ClientsRequest): Promise<Response<Client> | TransportError>;
    /**
     * Gets a client from the client's id
     * @returns {Promise<Client | TransportError>} The client with the supplied id, or an error if one occurred
     */
    getClient(id: String): Promise<Client | TransportError>;
    /**
     * Updates an client's data based on the client's id, without suppplying the complete event dataset
     * @param {number} id - The id of the client you want to modify
     * @param {Client} cl - The data you want to update
     * @returns {Promise<Client | TransportError>} The full event with the modifications, or an error if one occurred
     */
    updateClient(id: number, cl: Client): Promise<Client | TransportError>;
    /**
     * Create a client with the supplied data
     * @param {Client} cl - The client data used to create a new client
     * @returns {Promise<Client | TransportError>} The client that was just created, or an error if one occurred
     */
    createClient(cl: Client): Promise<Client | TransportError>;
}
export default Lasso;
