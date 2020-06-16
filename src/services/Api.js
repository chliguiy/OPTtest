import axios from 'axios'



export default () => {
  //initialisation  de Axios avec un basURL de l'api OCS
  return axios.create({
    baseURL: 'https://api.ocs.fr/',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    }
  })
}