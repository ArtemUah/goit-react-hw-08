import { useSelector } from 'react-redux';
import LoginForm from '../../components/LogInForm/LogInForm'
import css from '../LoginPage/LoginPage.module.css';
import { selectError } from '../../redux/auth/selectors';
import BasicSpinner from '../../components/Spinner/Spinner';
export default function LoginPage () {
    const isError = useSelector(selectError)
    return (
        <div className={css.container}>
            <h2>Please, Log in</h2>
            <LoginForm/>
            {isError && <b>{isError}</b>}
        </div>
    )
}