export const Blockquote = ({title, subtitle, src, alt}) => (
    <blockquote>
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
        <img src={src} alt={alt} />
    </blockquote>
)