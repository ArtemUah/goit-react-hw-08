import { Field, Formik, Form, ErrorMessage } from "formik";
import css from '../ContactForm/ContactForm.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";



export default function ContactForm () {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
        number: Yup.number().min(7, 'Too Short!').positive().integer().required('Required'),
      });

    return (
        <Formik initialValues={{name:'', number:''}} onSubmit={handleSubmit} validationSchema={SignupSchema}>
            <Form className={css.container}>
                <label  className={css.label}>
                    Name*
                    <Field type='text' name='name' />
                </label>
                <ErrorMessage name='name' className={css.error} component='span'/>
                <label className={css.label}>
                    Phone Number*
                    <Field type='phone' name='number' />
                </label>
                <ErrorMessage name='number' className={css.error} component='span'/>
                <button className={css.btn} type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}