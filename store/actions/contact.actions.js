import { contactService } from "../../services/contact.service.js";
import { ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, SET_FILTER_BY, SET_SORT_BY, UPDATE_CONTACT } from "../reducers/contact.reducer.js";
import { store } from "../store.js"

export function loadContacts() {
    const { filterBy, sortBy } = store.getState().contactModule

    return contactService.query(filterBy, sortBy)
        .then(contacts => {
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('contacts action -> cannot load contacts', err);
            throw err
        })
}

export function removeContact(contactId) {
    return contactService.remove(contactId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactId })
        })
        .catch(err => {
            console.log('contacts actions-> cannot remove contacts', err);
            throw err
        })
}

export function saveContact(contact) {
    const type = contact._id ? UPDATE_CONTACT : ADD_CONTACT
    return contactService.save(contact)
        .then(savedContact => {
            store.dispatch({ type, contact: savedContact })
            return savedContact
        })
        .catch(err => {
            console.log('contact action -> Cannot save contact', err)
            throw err
        })
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export function setSortBy(sortBy) {
    store.dispatch({ type: SET_SORT_BY, sortBy })
}



