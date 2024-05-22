import { useParams } from "react-router-dom";

function Params() {

    const location = useParams();
    const {name} = location;
    
    return (
        <>
            <h1>My {name} is Rais</h1>
            
        </>
    );
}

export default Params;
