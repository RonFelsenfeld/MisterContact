export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

const initialState = {
    contacts: [],
}

export function contactReducer(state = initialState, action = {}) {
    switch (action.type) {
        //contacts
        case SET_CONTACTS:
            return { ...state, contacts: action.contacts }

        case REMOVE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.contact]
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            }
        default:
            return state
    }
}