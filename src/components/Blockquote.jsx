import styled from "styled-components"

export const Blockquote = ({title, subtitle, src, alt, sort, reverse}) => (
    <Container style={{flexWrap: reverse}}>
        <div style={{order: sort}}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
        <img src={src} alt={alt}/>
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