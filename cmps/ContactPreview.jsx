const { Link } = ReactRouterDOM

export function ContactPreview({ contact, onRemoveContact }) {
    return (
        <li className="contact-preview">
            <h3>{contact.fullName}</h3>
            <h3>{contact.phone}</h3>
            <h3>{contact.email}</h3>
            <Link to={`/contact/${contact._id}`}><button>Details</button></Link>
            <Link to={`/contact/edit/${contact._id}`}><button>Edit</button></Link>
            <button onClick={() => onRemoveContact(contact._id)}>x</button>
        </li>
    )
}
