import styled from "styled-components"

export const Header = ({children}) => (
    <Container>{children}</Container>
)

const Container = styled.header`
    padding: 15px 50px;
`
