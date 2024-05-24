import BgVideo from "../../components/BgVideo/BgVideo";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from './RegistrationPage.module.css'
export default function RegistrationPage () {
    return (
       <BgVideo>
         <div className={css.container}>
            <h2>Please, register you account</h2>
            <RegistrationForm/>
        </div>
       </BgVideo>
    )
}