import axios from 'axios'
import axiosMitm from './mitm'

class Lasso {
	urlBase: string
	token: string
	useMitm: boolean

	/**
	 * 
	 * @param urlBase {string} The lasso.io url to use when communicating with `Lasso` 
	 * @param token {string} The api key for authentication 
	 */
	constructor(urlBase: string, token: string) {
		if(urlBase.length <= 0) throw new Error("Lasso requires a baseURL")
		if(token.length <= 0) throw new Error("Lasso requires an API key")

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
		return this.useMitm ? axiosMitm : axios;
	}


	/**
	 * Gets the events for the current url and API Key
	 * @returns {Promise<Array>} Array of Events
	 */
	async getEvents(): Promise<Array<any>> {
		let req = await this.getAxios().get(`${this.urlBase}/events`, {
			headers: {
				'LASSO-APIKEY': this.token
			}
		})

		return req.data
	}


}

export default Lasso