import './Perso.css';

const Perso = (props) => {
    let {name, image} = props.persoDatas
    return (
        <article className="perso">
            <img src={image} />
            <h3>{name}</h3>
        </article>
    )
}

export default Perso;