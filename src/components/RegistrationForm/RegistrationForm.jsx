import { Field, Form, Formik } from "formik";
import css from './RegistrationForm.module.css';
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";


export default function RegistrationForm () {
    const dispatch = useDispatch();
    
    const handleSubmit = (values, actions) => {
        dispatch(register(values)).unwrap().then(() => toast.success('Congratulations! You are registered')).catch(error => toast.error('Something gone wrong...'));
        actions.resetForm();
    }

    return (
            <Formik initialValues={{name:'', email:'', password:''}} onSubmit={handleSubmit}>
            <Form className={css.form}>
            <label className={css.label}>UserName
            <Field type='text' name='name'/>
            </label>
            <label className={css.label}>Email
                <Field type='email' name='email'/>
            </label>
            <label className={css.label}>Password
                <Field type='password' name='password'/>
            </label>
            <button className={css.btn} type='submit'>Register</button>
            </Form>
        </Formik>
    )
}