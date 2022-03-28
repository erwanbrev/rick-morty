import './Perso.css';

const Perso = (props) => {

    let {name, image} = props.persoDatas
    
    const register = (perso) => {
        if (localStorage) {
            let add = true;
            let persos = localStorage.getItem('myfav');
            if (persos && persos.length) {
                persos = JSON.parse(persos);
            } else {
                persos = [];
            }
            persos = persos.filter(
                (item) => {
                    if (item.id === perso.id) {
                        add = false;
                        return false;
                    } else {
                        return true;
                    }
                }
            )
            if (add) {
                persos.push(perso);
            }
            let persosStorage = JSON.stringify(persos);
            localStorage.setItem('myfav', persosStorage);
        }
    }
    
    return (
        <article className="perso">
            <img src={image} />
            <h3>{name}</h3>
            <span onClick={() => {register(props.persoDatas)}} className="favorite"></span>
        </article>
    )
}

export default Perso;