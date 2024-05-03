import ReactDom from "react-dom";

//Create Backdrop component and export it so that we can use it
export const Backdrop = props => {//pass props to
    const handleClick = () => {
        if(props.onClose) {
            props.onClose();
        }
    }
    return (
        <div onClick={handleClick} className="loader-overlay"></div>
    );
}

//Loader is another component
const Loader = () => {
    return (
        ReactDom.createPortal(
            <>       
                <Backdrop />
                <div className="loading-dots">
                    <div >Loading</div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                    <div className="loading-dots--dot"></div>
                </div>
            </>,
            document.getElementById("loader-root")
        )
    )
}

export default Loader;