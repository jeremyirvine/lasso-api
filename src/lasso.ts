import axios from 'axios'
import type { AxiosResponse } from 'axios'
import axiosMitm from './mitm'
import type { Event, EventsRequest, EventsResponse, TransportError } from './types'
import { URLSerializeObject } from './util'

class Lasso {
	urlBase: string
	token: string
	useMitm: boolean

	/**
	 * @param urlBase {string} The lasso.io url to use when communicating with `Lasso` (follows the format https://<company>.lasso.io/api/v1) 
	 * @param token {string} The api key for authentication 
	 */
	constructor(urlBase: string, token: string) {
		if(!urlBase || urlBase.length <= 0) throw new Error("Lasso requires a baseURL")
		if(!token || token.length <= 0) throw new Error("Lasso requires an API key")

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
	 *	@returns the axios instance based on wether we're using MITM 
	 */
	getAxios = () => this.useMitm ? axiosMitm : axios

  /**
   *  @returns headers used for communicating with Lasso 
   */
  getHeaders = () => ({ 'LASSO-APIKEY': this.token })


	/**
	 * Gets the events for the current url and API Key 
	 * @returns {Promise<EventsResponse | TransportError>} Array of Events, or an error if one occurred 
	 */
	async getEvents(params?: EventsRequest): Promise<EventsResponse | TransportError> {
		let urlData = URLSerializeObject(params || {})

    let req: AxiosResponse<any, any>
    try {
      req = await this.getAxios().get(`${this.urlBase}/events${urlData}`, {
        headers: this.getHeaders()
      })
    } catch(e) {
      return {
        code: e.response.status,
        data: e.response.data,
        _istransporterror: true
      }
    }

		return req.data
	}
  
  /**
   * Gets an event from the event's id 
   * @returns {Promise<Event | TransportError>} The event with the supplied id, or an error if one occurred 
   */
  async getEvent(id: String): Promise<Event | TransportError> {
    let req: AxiosResponse<any, any>
    try {
      req = await this.getAxios().get(`${this.urlBase}/events/${id}`, {
        headers: this.getHeaders()
      })
    } catch(e) {
      return {
        code: e.response.status,
        data: e.response.data,
        _istransporterror: true
      }
    }

    return req.data
  }

  /**
   * Updates an event's data based on the event's id, without suppplying the complete event dataset
   * @param {number} id - The id of the event you want to modify
   * @param {Event} ev - The data you want to update
   * @returns {Promise<Event | TransportError>} The full event with the modifications, or an error if one occurred 
   */
  async updateEvent(id: number, ev: Event): Promise<Event | TransportError> {
    let req: AxiosResponse<any, any>

    try {
      req = await this.getAxios().patch(`${this.urlBase}/events/${id}`, ev, {
        headers: this.getHeaders()
      })
    } catch(e) {
      return {
        code: e.response.status,
        data: e.response.data,
        _istransporterror: true
      }
    }

    return req.data
  }

  /**
   * Create an event with the supplied data
   * @param {Event} ev - The event data used to create a new event
   * @returns {Promise<Event | TransportError>} The event that was just created, or an error if one occurred    
   */
  async createEvent(ev: Event): Promise<Event | TransportError> {
    let req: AxiosResponse<any, any>
    try {
      req = await this.getAxios().post(`${this.urlBase}/events`, {
        ...ev,
        hide_client: typeof ev.hide_client === 'undefined' ? true : ev.hide_client
      }, { headers: this.getHeaders() })
    } catch(e) {
      return {
        code: e.response.status,
        data: e.response.data,
        _istransporterror: true
      }
    }

    return req.data
  }
}

export default Lasso
