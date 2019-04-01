import React, { Fragment } from "react"

export const RenderInput = ({
  input,
  meta,
  label,
  placeholder,
  disabled,
  validation = false,
  type,
  ...rest
}) => (
  <Fragment>
    <label>{label}</label>
    <input
      {...input}
      {...rest}
      disabled={disabled}
      placeholder={placeholder}
      invalid={meta && meta.error}
      className="validate"
      type={type}
    />
    {meta && (
      <span className="helper-text" data-error="wrong" data-success="right">
        {meta.error}
      </span>
    )}
  </Fragment>
)
