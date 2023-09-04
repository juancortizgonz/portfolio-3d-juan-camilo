import "../styles.css";

const Info = ({ name, bio }) => {

    return (
        <>
        <div className="card">
            <h3>{name}</h3>
            <p>{bio}</p>
        </div>
        </>
    );
}

export default Info;