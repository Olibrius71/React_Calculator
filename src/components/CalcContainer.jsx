import "./CalcContainer.css";

function CalcContainer(props) {
    return (
        <section className="main-container">
            {props.children[0]}
            <div className="container-fluid d-flex flex-column justify-content-around">
                {props.children[1]}
                {props.children[2]}
            </div>
        </section>
    );
}


export default CalcContainer;