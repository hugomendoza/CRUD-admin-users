import styled from "styled-components";

export interface StyledPictureProps {
  variant?: "normal" | "avatar";
  size?: "avatar" | "small"
}

export const StyledPicture = styled.figure<StyledPictureProps>`
  display: block;
  ${ props => {
    switch (props.size) {
      case "avatar":
        return `
          width: 3rem;
          height: 3rem;
          border-radius: 100%;
          position: relative;
        `
      case "small":
        return `
          width: 1.75rem;
          height: 1.75rem;
        `
      default:
        return `
          width: 1.25rem;
          height: 1.25rem;
        `
    }
  }}
`

export const StyledImage = styled.img<StyledPictureProps>`
  ${ props => {
    switch (props.variant) {
      case "avatar":
        return `
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 100%;
        `
      case "normal":
        return `
          display: block;
          margin: auto;
        `
      default:
        return ``
    }
  }}
`