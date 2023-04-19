import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  FormField,
  Form,
  Field,
  SubmitBtn,
  ErrorMessage,
} from './ContactForm.module';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operationsContacts';
import { selectContacts } from 'redux/contacts/selectors';
import { ModalForm } from 'components/Modal/Modal';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(25, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(25, 'Too Long!')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('A phone number is required'),
});

export const EditContact = ({ item, onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    console.log(values);
    const nameExists = contacts.find(
      contact =>
        contact.name.toLowerCase().includes(values.name.toLowerCase()) &&
        contact.id !== item.id
    );

    if (nameExists) {
      return alert(`${values.name} is already in contacts!`);
    }
    actions.resetForm();
    dispatch(editContact(values));
    onClose();
  };

  return (
    <ModalForm onClose={onClose}>
      <Formik
        initialValues={{
          id: item.id,
          name: item.name,
          number: item.number,
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FormField htmlFor="name">
            Name
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField htmlFor="name">
            Number
            <Field type="tel" name="number" placeholder="Phone number" />
            <ErrorMessage name="number" component="span" />
          </FormField>
          <SubmitBtn type="submit">
            <span className="text">Add contact</span>
          </SubmitBtn>
        </Form>
      </Formik>
    </ModalForm>
  );
};

EditContact.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      numder: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};
