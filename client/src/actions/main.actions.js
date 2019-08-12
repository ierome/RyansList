import store from '../store'
import axios from 'axios'

export function getCategories() {
  axios.get('/api/categories').then(resp => {
    store.dispatch({
      type: 'CATEGORIES',
      payload: resp.data
    })
  })
}
export function getSubCategories() {
  const community = []
  const housing = []
  const job = []
  const services = []
  const forSale = []
  const personals = []
  const gigs = []
  const resumes = []

  axios.get('/api/subcategories').then(resp => {
    resp.data.forEach((item) => {
      if (item.parent_id === 1) {
        community.push(item)
      } else if (item.parent_id === 2) {
        housing.push(item)
      }else if (item.parent_id === 3) {
        job.push(item)
      }else if (item.parent_id === 4) {
        services.push(item)
      }else if (item.parent_id === 5) {
        forSale.push(item)
      }else if (item.parent_id === 122) {
        personals.push(item)
      }else if (item.parent_id === 123) {
        gigs.push(item)
      }else if (item.parent_id === 139) {
        resumes.push(item)
      }
    })
    store.dispatch({
      type: 'SUBCATEGORIES',
      community: community,
      housing: housing,
      job: job,
      services: services,
      forSale: forSale,
      personals: personals,
      gigs: gigs,
      resumes: resumes
    })
  })
}
export function getPostings(category, subcategory) {
axios.get('/api/getPostings/?category=' + category + '&subcategory=' + subcategory).then(resp => {
  console.log('/api/getPostings?category=' + category + '&subcategory=' + subcategory)
  store.dispatch({
    type: 'POSTINGS',
    payload: resp.data
  })
})
}
export function getPost(id) {
  axios.get('/api/getPost/?id=' + id).then(resp => {
    store.dispatch({
      type: 'POST',
      payload: resp.data
    })
  })
}
export function getSub() {
axios.get('/api/subcategories').then(resp => {
    store.dispatch({
      type: 'SUB',
      payload: resp.data
    })
  })
}
export function sendPost(category, title, city, price, content) {
  axios.get(`/api/addPost?title=${title}&price=${price}&city=${city}&content=${content}&category=${category}`).then(resp => {
  console.log(resp)
  })
 }