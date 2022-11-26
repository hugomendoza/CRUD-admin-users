import styled from "styled-components";

export const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
`
  
export const StyledWrapperContent = styled.div`
  flex: 1 1 0;
  width: min(700px, 90%);
  margin: 8rem auto;
`