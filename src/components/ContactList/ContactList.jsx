import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id} >
          <Contact name={contact.name} phone={contact.number} id={contact.id} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
   )
}

export default ContactList