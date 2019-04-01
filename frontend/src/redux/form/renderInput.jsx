import React, { Fragment } from "react"

export const RenderInput = ({
  input,
  meta,
  label,
  placeholder,
  disabled,
  validation = false,
  type,
  textarea,
  ...rest
}) => (
  <Fragment>
    <label htmlFor={input.name}>{label}</label>
    {!textarea ? (
      <input
        {...input}
        {...rest}
        disabled={disabled}
        placeholder={placeholder}
        invalid={meta && meta.error}
        className="validate"
        type={type}
      />
    ) : (
      <textarea
        {...input}
        {...rest}
        disabled={disabled}
        placeholder={placeholder}
        invalid={meta && meta.error}
        className="validate"
        type={type}
        className="materialize-textarea"
      />
    )}
    {meta && (
      <span className="helper-text" data-error="wrong" data-success="right">
        {meta.error}
      </span>
    )}
  </Fragment>
)
