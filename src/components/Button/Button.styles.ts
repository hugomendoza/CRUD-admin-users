import styled from "styled-components";

export interface StyledButtonProps {
  variant?: "primary" | "secondary" | "";
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 0.25rem;
  color: white;
  border: none;
  padding: 0.75rem;
  text-align: center;
  font-size: 1rem;
  ${ props => {
    switch (props.variant) {
      case "primary":
        return `
          background-color: #006d68;
        `
      case "secondary":
        return `
          background-color: tomato;
        `
      default:
        return `
          background-color: transparent;
        `
    }
}}
`