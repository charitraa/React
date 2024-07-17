import React from 'react';
import useForm from './useForm';

interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = { name: '', email: '' };

const Form: React.FC = () => {
  const { values, errors, handleChange, resetForm, setErrors } = useForm(
    initialValues,
    true,
    validate
  );

  const validate = (fieldValues: FormValues = values): boolean => {
    let tempErrors: Partial<FormValues> = { ...errors };
    if ('name' in fieldValues)
      tempErrors.name = fieldValues.name ? '' : 'Name is required';
    if ('email' in fieldValues) {
      if (!fieldValues.email) {
        tempErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(fieldValues.email)) {
        tempErrors.email = 'Email is invalid';
      } else {
        tempErrors.email = '';
      }
    }

    setErrors(tempErrors as FormValues);

    if (fieldValues === values)
      return Object.values(tempErrors).every((x) => x === '');
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully');
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
