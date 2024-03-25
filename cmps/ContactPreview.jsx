const { Link } = ReactRouterDOM

export function ContactPreview({ contact, onRemoveContact }) {
console.log(contact);
    return (
        <li className="contact-preview">
            <h3>{contact.fullName}</h3>
            <h3>{contact.phone}</h3>
            <h3>{contact.email}</h3>
            <Link to={`/contact/${contact._id}`}>Details</Link>
            <button>Edit</button>
            <button onClick={() => onRemoveContact(contact._id)}>x</button>
        </li>
    )
}
