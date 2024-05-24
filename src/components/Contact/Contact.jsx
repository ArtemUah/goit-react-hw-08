import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import css from '../Contact/Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact ({contact}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    }

    return (<div className={css.container}>
        <div>
        <p><IoIosContact/> {contact.name}</p>
        <p><FaPhoneAlt/> {contact.number}</p>
    </div>
    <button  type='button' onClick={handleDelete}> Delete </button>
    </div>)
}