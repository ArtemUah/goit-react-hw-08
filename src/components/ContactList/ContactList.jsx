import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from '../ContactList/ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList () {
    const listOfContacts = useSelector(selectFilteredContacts);

return(<ul className={css.container}>
        {listOfContacts.map(contact => {
            return (<li key={contact.id}>
                <Contact contact={contact}/>
            </li>)
        })}
    </ul>)

}