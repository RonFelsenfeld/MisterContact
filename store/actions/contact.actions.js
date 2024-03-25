import { contactService } from "../../contact.service.js";
import { ADD_CONTACT, REMOVE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from "../reducers/contact.reducer.js";
import { store } from "../store.js"

export function loadContacts() {
    return contactService.query(filterBy)
        .then(contacts => {
            store.dispatch({ type: SET_CONTACTS, contacts })
        })
        .catch(err => {
            console.log('contacts action -> cannot load contacts', err);
            throw err
        })
}

export function removeContact(contactsId) {
    return contactService.remove(contactsId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactsId })
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


