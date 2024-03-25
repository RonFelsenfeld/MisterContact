import { contactService } from "../contact.service.js"
// import { todoReducer } from "./reducers/todo.reducer.js"


const { createStore, compose, combineReducers } = Redux

const rootReducer = combineReducers({
    contactModule: contactReducer,

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
