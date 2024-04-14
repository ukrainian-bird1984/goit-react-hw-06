import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import css from './ContactForm.module.css';

const ContactForm = ({ updateContacts }) => {
  const initialContactValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    updateContacts(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").matches(/^[a-zA-Z\s]+\s+[a-zA-Z]+$/g, "The name format must be First Name Last Name").trim(),
    number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/g, "The number format must be 123-45-67").required("Required").trim(),
  });

  return (
    <div>
      <Formik initialValues={initialContactValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={css.user}>
          <label className={css.input}>
            <span>Name</span>
            <Field  type="text" name="name" placeholder='Name Surname'></Field>
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={css.input}>
            <span>Number</span>
            <Field  type="tel" name="number" placeholder='xxx-xx-xx'></Field>
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;