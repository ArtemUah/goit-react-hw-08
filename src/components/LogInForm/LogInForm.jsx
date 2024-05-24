import { Field, Form, Formik } from "formik";
import css from "../LogInForm/LogInForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function LogInForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then((data) => {
        toast.success("Congratulations! You are Logged in")
      })
      .catch((error) => {
        toast.error('Something gone wrong...');
      });
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field type="text" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
