import "../App.css";
import logo from "../age_of_empires.jpg";

const Card = ({ id, name, expansion, civilization_bonus }) => {
    return (
        <>
            <div className="card">
                <div>
                    <img src={logo} alt="Age of empires logo" />
                </div>

                <div>
                    <p> <strong> ID:</strong> {id}</p>
                    <p><strong> Name:</strong> {name}</p>
                    <p><strong>Expansion:</strong> {expansion}</p>
                    <hr />
                    <p><strong>Civilization Bonus:</strong> {civilization_bonus}</p>
                </div>
            </div>
        </>
    );
};

export default Card;
