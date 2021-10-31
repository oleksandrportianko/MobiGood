import React from 'react'
import { ErrorMessage, useField } from 'formik'
import './TextField.css'

const TextField = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <div>
         <label htmlFor={field.name}>{label}</label>
         <input className={`text-field-login-input form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props} autoComplete="off" />
         <ErrorMessage className="text-field-login-error-message" component="div" name={field.name} />
      </div>
   )
}

export default TextField
