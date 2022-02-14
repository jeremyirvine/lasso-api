import axios from 'axios'
import type { AxiosResponse } from 'axios'
import axiosMitm from './mitm'
import type { Event, EventsRequest, TransportError } from './types'
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
	 *	Returns the axios instance based on wether we're using MITM 
	 */
	getAxios = () => this.useMitm ? axiosMitm : axios

  /**
   *  Returns headers used for communicating with Lasso
   */
  getHeaders = () => ({ 'LASSO-APIKEY': this.token })


	/**
	 * Gets the events for the current url and API Key
	 * @returns {Promise<Array>} Array of Events
	 */
	async getEvents(params?: EventsRequest): Promise<Array<any>> {
		let urlData = URLSerializeObject(params)

    let req = await this.getAxios().get(`${this.urlBase}/events${urlData}`, {
		  headers: this.getHeaders()
    })

		return req.data
	}

  async getEvent(id: String): Promise<Event>
  async getEvent(id: String): Promise<TransportError> 
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

}

export default Lasso
