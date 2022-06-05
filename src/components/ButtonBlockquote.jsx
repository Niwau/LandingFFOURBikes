export const ButtonBlockquote = ({title, subtitle, button, src, alt}) => (
    <blockquote>
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button>{button}</button>
        </div>
        <img src={src} alt={alt} />
    </blockquote>
)