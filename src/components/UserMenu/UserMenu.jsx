import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors"
import css from '../UserMenu/UserMenu.module.css';
import { logout } from "../../redux/auth/operations";

export default function UserMenu () {
    const user = useSelector(selectUserName);
    const dispatch = useDispatch();
    const handlLogout = () => dispatch(logout());
    
    return (
        <div className={css.container}>
            <h4>Welcome, {user}</h4>
        <button className={css.btn} onClick={handlLogout} type='button'>Log out</button>
        </div>
    )
}