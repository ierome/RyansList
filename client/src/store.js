import { createStore } from 'redux'

import exampleReducer from './reducers/mainReducer'

const store = createStore(exampleReducer)

export default store