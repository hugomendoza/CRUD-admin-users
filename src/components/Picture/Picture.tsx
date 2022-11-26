import { StyledImage, StyledPicture, StyledPictureProps } from "./Picture.styles"

interface PictureProps extends StyledPictureProps {
  src: string;
  alt: string;
  title: string;
  className: string;
}


export const Picture = (props:PictureProps) => {

  const { src, alt, title, className, size, variant } = props

  return (
    <StyledPicture className={className} size={size}>
      <StyledImage src={src} alt={alt} title={title} className={className} variant={variant}  />
    </StyledPicture>
  )
}

const defaultProps:PictureProps = {
  size: "avatar",
  variant: "normal",
  src: "",
  alt: "",
  title: "",
  className: "",
}

Picture.defaultProps = defaultProps;