import { removeContact, saveContact } from "../store/actions/contact.actions.js"

const { useSelector } = ReactRedux
const { useEffect } = React


export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.todoModule.todos)

    useEffect(() => {
        loadTodos()
            .catch(() => {
                showErrorMsg('Could not load contacts')
            })
    }, [])

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .then(() => {
                showSuccessMsg(`Removed contact successfully`)
            })
            .catch(() => showErrorMsg('Had trouble removing the contact'))
    }

    function onUpdateContact(contact) {
        saveContact(contact)
            .then(() => {
                showSuccessMsg(`Updated contact successfully`)
            })
            .catch(() => showErrorMsg('Had trouble updating the contact'))
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
            {/* <ContactList contacts={contacts} onUpdateContact={onUpdateContact} onRemoveContact={onRemoveContact} /> */}
            {(!contacts.length) && <div>No contacts to show...</div>}
        </section>
    )
}
