import { useState } from 'react';

interface FormValues {
  [key: string]: string;
}

type ValidateFunction = (fieldValues?: FormValues) => boolean;

const useForm = (
  initialValues: FormValues,
  validateOnChange = false,
  validate: ValidateFunction
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormValues>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    resetForm,
  };
};

export default useForm;
