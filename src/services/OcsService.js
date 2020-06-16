import Api from '@/services/Api'


class OcsService {

  // méthode pour récuperer les programmes par title
  static getProgrammes(params) {
    return Api().get('apps/v2/contents?search=title%3D' + params.title)
  }

  // méthode pour récuperer  détail d'un programme spécifiqueF
  static getProgrammeDetail(params) {
    return Api().get(params.url)
  }
}
export default OcsService;