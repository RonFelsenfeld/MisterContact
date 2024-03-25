import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'
_createContacts()

export const contactService = {
  query,
  getById,
  save,
  remove,
  getEmptyContact,
}

function query(filterBy = {}) {
  return storageService.query(STORAGE_KEY).then(contacts => {
    return contacts
  })
}

function getById(contactId) {
  return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
  return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
  if (contact._id) {
    return storageService.put(STORAGE_KEY, contact)
  } else {
    return storageService.post(STORAGE_KEY, contact)
  }
}

function getEmptyContact() {
  return {
    fullName: '',
    phone: '',
    email: ''
  }
}

////////////////////////////////////////////////////

function _createContacts() {
  let contacts = utilService.loadFromStorage(STORAGE_KEY)
  if (!contacts || !contacts.length) {
    contacts = []
    contacts.push(_createContact('Ido Yotvat'))
    contacts.push(_createContact('Ron Felsenfeld'))
    contacts.push(_createContact('Atar Mor'))
    contacts.push(_createContact('Popo Pa'))
    contacts.push(_createContact('Lolo La'))
    utilService.saveToStorage(STORAGE_KEY, contacts)
  }
}

function _createContact(fullName = '') {
  const contact = getEmptyContact()
  contact._id = utilService.makeId()
  contact.fullName = fullName
  contact.phone = utilService.generateRndPhoneNumber()
  contact.email = utilService.generateRndEmail()

  return contact
}
