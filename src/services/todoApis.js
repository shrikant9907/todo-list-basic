import toast from "react-hot-toast";
import { axios } from "./Axios";

export const fetchTodoAPI = async (setData) => {
    const res = await axios.get("/todos");
    if (res.status == 200) {
        console.log('res testest', res)
        setData(res.data)
        toast.success('Todo list loaded successfully.')
    } else {
        toast.error('Unable to load todos')
    }
}

export const addTodoAPI = async (payload, setData) => {

    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    // console.log('payload', payload)
    // const res = await axios.post("/todos/add", JSON.stringify(payload));
    // if (res.status == 200) {
    //     console.log('res testest', res)
    //     fetchTodoAPI(setData); // Will update the list
    //     toast.success('Todo list loaded successfully.')
    // } else {
    //     toast.error('Unable to load todos')
    // }
}

export const updateTodoAPI = async (data, setData) => {
    const res = await axios.put("/todos", data);
    if (res.status == 200) {
        console.log('res testest', res)
        fetchTodoAPI(setData); // Will update the list
        toast.success('Todo list loaded successfully.')
    } else {
        toast.error('Unable to load todos')
    }
}

export const deleteTodoAPI = async (id, setData) => {
    const res = await axios.delete(`/todos/${id}`);
    if (res.status == 200) {
        console.log('res testest', res)
        setData(res.data)
        fetchTodoAPI(setData); // Will update the list
        toast.success('Todo list loaded successfully.')
    } else {
        toast.error('Unable to load todos')
    }
}

