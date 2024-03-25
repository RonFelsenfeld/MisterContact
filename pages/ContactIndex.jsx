import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { loadContacts, removeContact, saveContact, setFilterBy, setSortBy } from "../store/actions/contact.actions.js"

import { ContactList } from "../cmps/ContactList.jsx"
import { ContactFilter } from "../cmps/ContactFilter.jsx"
import { ContactSort } from "../cmps/ContactSort.jsx"

const { useSelector } = ReactRedux
const { useEffect } = React
const { Link } = ReactRouterDOM

export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)
    const filterBy = useSelector(storeState => storeState.contactModule.filterBy)
    const sortBy = useSelector(storeState => storeState.contactModule.sortBy)

    useEffect(() => {
        loadContacts()
            .catch(() => {
                showErrorMsg('Could not load contacts')
            })
    }, [filterBy, sortBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onSetSort(sortBy) {
        setSortBy(sortBy)
    }

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .then(() => {
                showSuccessMsg(`Removed contact successfully`)
            })
            .catch(() => showErrorMsg('Had trouble removing the contact'))
    }

    function onAddContact(contact) {
        saveContact(contact)
            .then(() => {
                showSuccessMsg(`Added contact successfully`)
            })
            .catch(() => showErrorMsg('Had trouble adding the contact'))
    }

    if (!contacts) return <div>Loading...</div>
    return (
        <section className="contact-index" >
            <ContactFilter onSetFilter={onSetFilter} filterBy={filterBy} />

            <ContactSort onSetSort={onSetSort} sortBy={sortBy} />

            <Link to={'/contact/edit'}><button className="add-btn">Add</button></Link>
            <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
            {(!contacts.length) && <div>No contacts to show...</div>}
        </section>
    )
}
