const initialState = {
  categories: [],
  community:[],
  housing:[],
  job:[],
  services:[],
  forSale:[],
  personals:[],
  gigs:[],
  resumes:[],
  postings: [],
  post: [],
  subs: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES':
      return {...state, categories: action.payload}
    case 'SUBCATEGORIES':
      return {...state, community: action.community, housing: action.housing, job: action.job, services: action.services, forSale: action.forSale, personals: action.personals, gigs: action.gigs, resumes: action.resumes}
    case 'POSTINGS':
      return {...state, postings: action.payload}
    case 'POST':
      return {...state, post: action.payload}
    case 'SUB':
      return {...state, subs: action.payload}
    default:
      return state
  }
}