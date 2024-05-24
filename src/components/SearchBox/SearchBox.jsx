import { useDispatch, useSelector } from 'react-redux';
import css from '../SearchBox/SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { selectFilteredName } from '../../redux/filters/selectors';

export default function Filter () {
    const value = useSelector(selectFilteredName);
    const dispatch = useDispatch();

    return (
        <div className={css.container}>
        <label className={css.container}>Find contacts by name
            <input value={value} type="text" onChange={(e)=>dispatch(changeFilter(e.target.value))}/>
        </label>
    </div>)
    
}