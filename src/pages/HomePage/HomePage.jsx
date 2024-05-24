import { useSelector } from "react-redux";
import BasicSpinner from "../../components/Spinner/Spinner";
import css from '../HomePage/HomePage.module.css';
import { selectError } from "../../redux/contacts/selectors";

export default function HomePage () {
    const isError = useSelector(selectError);

    return (<div className={css.container} >
        {isError && <b>{isError}</b>}
        <h2>Welcome, to your Phonebook</h2>
        <p>It will make your life easier.</p>
    </div>)
}