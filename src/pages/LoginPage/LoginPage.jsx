import { useSelector } from 'react-redux';
import LoginForm from '../../components/LogInForm/LogInForm'
import css from '../LoginPage/LoginPage.module.css';
import { selectError } from '../../redux/auth/selectors';
import BgVideo from '../../components/BgVideo/BgVideo';
export default function LoginPage () {
    const isError = useSelector(selectError)
    return (
      <BgVideo>
          <div className={css.container}>
            <h2>Please, Log in</h2>
            <LoginForm/>
            {isError && <b>{isError}</b>}
        </div>
      </BgVideo>
    )
}