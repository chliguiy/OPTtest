import Api from '@/services/Api'

export default {
  getOcs (params) {
    return Api().get('apps/v2/contents?search=title%3D' + params.title)
  },
  getOcsDetails (params) {
    return Api().get( params.url)
  }
}