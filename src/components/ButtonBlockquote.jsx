import styled from "styled-components"

export const ButtonBlockquote = ({title, subtitle, button, src, alt}) => (
    <Container>
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button>{button}</button>
        </div>
        <img src={src} alt={alt} />
    </Container>
)

const Container = styled.blockquote`

    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin: 50px;
    gap: 125px;
    align-items: center;

    h1 {
        color: var(--dark);
        font-size: 6.4rem;
        font-weight: 800;
    }

    p {
        color: var(--light);
        font-size: 3.2rem;
        font-weight: 200;
    }

    button {
        background: none;
        border: 2px solid var(--green);
        border-radius: 15px;
        color: var(--green);
        padding: 2.1rem 25.5rem;
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

    img {
        width: 60rem;
    }
    
    @media(max-width: 600px){
        text-align: center;
    }

    @media(min-width: 600px){
        h1,p {width: 590px}
    }
    
`