import { StyledButton, StyledButtonProps } from "./Button.styles"

interface ButtonProps extends StyledButtonProps {
  name: string;
  onPress: () => void;
}

export const Button = ( props:ButtonProps ) => {

  const {name, variant, onPress} = props

  return (
    <StyledButton variant={variant} onClick={onPress}>
      {name}
    </StyledButton>
  )
}

const defaultProps:ButtonProps = {
  name: "Guardar",
  variant: "",
  onPress: () => {}
}

Button.defaultProps = defaultProps;
