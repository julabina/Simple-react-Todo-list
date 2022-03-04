import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';


function Input(props) {

    const [inputState, setInputState] = useState();
    const [dataArr, setDataArr] = useState([]);

    const changeInput = (e) => {
        setInputState(e);
    }

    const changeArr = () => {
       let newArr = [...dataArr];
       let item = {
         txt : inputState,
         id: uuidv4()
       }
       newArr.push(item);
       setDataArr(newArr);
       setInputState(''); 
    }
    
    const deleteArr = (e) => {
        const filteredArr = dataArr.filter(el => el.id !== e);
        setDataArr(filteredArr);
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <input type="text" onChange={e => changeInput(e.target.value)} className="form-control" value={inputState} />
            <button onClick={changeArr} value={inputState} className="mt-2 btn btn-primary d-block">Envoyer</button>
            <ul className="list-group">
                {dataArr.map((el, index) => {
                    return (
                        <Item txt={el.txt} key={el.id} id={el.id} delFunc={deleteArr} />
                    )
                } )}
            </ul>
        </div>
    )
}

export default Input;