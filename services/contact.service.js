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
  getDefaultFilter,
  getDefaultSort
}

function query(filterBy = {}, sortBy = {}) {
  return storageService.query(STORAGE_KEY).then(contacts => {
    let contactsToReturn = contacts.slice()

    if (filterBy.txt) {
      const regExp = new RegExp(filterBy.txt, 'i')
      contactsToReturn = contactsToReturn.filter(contact => regExp.test(contact.fullName) || regExp.test(contact.phone))
    }

    if (sortBy.fullName) {
      contactsToReturn = contactsToReturn.sort((c1, c2) => (c1.fullName.localeCompare(c2.fullName)) * sortBy.fullName)
    }

    if (sortBy.email) {
      contactsToReturn = contactsToReturn.sort((c1, c2) => (c1.email.localeCompare(c2.email)) * sortBy.email)
    }

    return contactsToReturn
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

function getDefaultFilter() {
  return { txt: '' }
}

function getDefaultSort() {
  return { fullName: 1 }
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
