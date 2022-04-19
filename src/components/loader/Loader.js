import {Spinner} from "react-bootstrap";

const Loader = (props) => {
    return (
        <div className={'position-absolute h-100 w-100 d-flex justify-content-center align-items-center'}>
            <Spinner style={{width: props.side, height: props.side}} animation="border" variant="success" />
        </div>
    );
};

export default Loader;