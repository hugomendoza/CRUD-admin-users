import { Footer, NavBar } from '../components'
import { StyledLayout, StyledWrapperContent } from './Layout.styles'

type PropsLayout = {
  children: React.ReactNode,
}

export const Layout = ({children}:PropsLayout) => {
  return (
    <StyledLayout>
      <NavBar />

      <StyledWrapperContent>
        {children}
      </StyledWrapperContent>
      
      <Footer />
    </StyledLayout>
  )
}
