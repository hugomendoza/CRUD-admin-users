import { StyledInput } from './Input.styles'

interface InputProps {
  type: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  id?: string;
}

export const Input = (props:InputProps) => {

  const {type, disabled, placeholder, name, id} = props

  return (
    <StyledInput type={type} disabled={disabled} placeholder={placeholder} name={name} id={id}  />
  )
}
