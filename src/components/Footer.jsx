import styled from "styled-components"

export const Footer = ({title, button}) => (
    <Container>
        <h1>{title}</h1>
        <button>{button}</button>
    </Container>
)

const Container = styled.footer`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
    text-align: center;

    h1 {
        color: var(--green);
        font-size: 6.4rem;
        width: 590px;
        font-weight: 800;
    }

    p {
        color: var(--light);
        font-size: 3.2rem;
        width: 590px;
        font-weight: 200;
    }

    button {
        background: none;
        border: 2px solid var(--green);
        border-radius: 15px;
        color: var(--green);
        padding: 21px 255px;
        margin-top: 20px;
        font-weight: 600;
        font-size: 2rem;
        transition: 0.5s ease;

        :hover {
            cursor: pointer;
            background-color: var(--green);
            color: var(--white);
        }
    }

`