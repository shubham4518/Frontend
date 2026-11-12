
import './Card.css'

export const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

export const CardImage = ({ src }) => {
    return (
        <img className="card-image" src={src} alt="Image" />
    );
};

export const Cardtitle = ({ title }) => {
    return <div className="card-title">{title}</div>;
};

export const CardDescription = ({description}) => {
    return (
        <div className="card-description">{description}</div>
    );
};

export const Cardrating = ({rating}) => {
    return <div className="card-rating">{rating}</div>
}
