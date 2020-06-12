import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://api.ocs.fr/',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}