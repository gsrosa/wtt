import React, { Fragment, useEffect } from "react"
import { Range } from "react-materialize"
import noUiSlider from "nouislider"

export const RenderRange = ({
  input,
  meta,
  label,
  disabled,
  min,
  max,
  ...rest
}) => {
  return (
    <Fragment>
      {label && <label htmlFor={input.name}>{label}</label>}
      <Range
        min={min}
        max={max}
        {...input}
        disabled={disabled}
        {...rest}
        style={{ marginTop: "28px" }}
      />
    </Fragment>
  )
}
