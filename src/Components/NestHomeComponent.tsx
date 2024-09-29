import { useContext } from "react"
import { GlobalContext } from "../GlobalContext"
import { useDispatch } from "react-redux";
import { changeTitle } from "../store";

const NestHomeComponent = () => {
    const dispatch = useDispatch();

    const { setTitle } = useContext(GlobalContext);

    const handleClick = () => {
        setTitle('Changed into Nest Home Title')
    }

    const handleReduxClick = () => {
        dispatch(changeTitle('Redux Title Has been Changed'))
    }

    return <div>I am the Nest Home COmponent<br />
        <button onClick={handleClick} style={{ border: '1px solid grey', backgroundColor: 'red' }} >Change the title</button>
        <button onClick={handleReduxClick} style={{ border: '1px solid grey', backgroundColor: 'green' }}>Change the Redux title</button>
    </div>
}

export default NestHomeComponent;