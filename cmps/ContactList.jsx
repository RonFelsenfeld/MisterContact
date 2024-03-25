import { ContactPreview } from "./ContactPreview";

export function ContactList({ contacts, onRemoveContact }) {
    return (
        <ul className="contact-list clean-list">
            {contacts.map(contact => (
                <ContactPreview key={contact._id} contact={contact} 
                onRemoveContact={onRemoveContact} />
            ))}
        </ul>)
}
