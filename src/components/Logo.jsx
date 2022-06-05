import styled from "styled-components"

export const Logo = ({name}) => (
    <Title>{name}</Title>
)

const Title = styled.h1`
    color: var(--green);
    font-size: 4rem;
    font-weight: 600;
`