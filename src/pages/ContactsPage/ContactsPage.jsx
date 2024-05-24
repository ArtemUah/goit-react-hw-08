import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from "react";
import { getContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors";
import BasicSpinner from "../../components/Spinner/Spinner";
import css from '../ContactsPage/ContactPage.module.css';

export default function ContactsPage () {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);

    useEffect(()=>{
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <div className={css.container}> 
            <ContactForm/>
            <SearchBox/>
            {isLoading && <BasicSpinner/>}
            {isError && <b>{isError}</b>}
            {contacts.length > 0 && <ContactList/>}
        </div>
    )
}