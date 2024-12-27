import './App.css';
import {useGetTodoAppQuery} from "./todolistApp/todolistApp";


function App() {
    const {data} = useGetTodoAppQuery()
    console.log(data)

    return (
        <>
            {data?.map(el => (
                <ul key={el.id}>

                </ul>
            ))}
        </>
    )


}

export default App;
