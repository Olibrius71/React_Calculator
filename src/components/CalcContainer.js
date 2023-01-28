import "./CalcContainer.css";

function CalcContainer(props) {
    return (
        <section className="main-container">
            {props.children}
        </section>
    );
}


export default CalcContainer;