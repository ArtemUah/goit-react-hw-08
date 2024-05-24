import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from '../RegisterPage/RegisterPage.module.css'
export default function RegisterPage () {
    return (
        <div className={css.container}>
            <h2>Please, register you account</h2>
            <RegisterForm/>
        </div>
    )
}