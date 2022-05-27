import React from "react";
import "../App.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e : React.FormEvent)=> void;
}


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
    return (
        <form className="input" onSubmit={(e)=>handleAdd(e)}>
            <input type="input"
             className="input-box" 
             value={todo} 
             onChange = {(e)=>{
                 setTodo(e.target.value)
             }}
             placeholder="Enter task" />
            <button className="input-submit" type="submit">Go</button>
        </form>
    )
}

export default InputField