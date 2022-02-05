import axios, { AxiosInstance } from 'axios'

const axiosMitm: AxiosInstance = axios.create({
	proxy: {
		host: "localhost",
		port: 8080
	},
	maxRedirects: 0,
})

export default axiosMitm