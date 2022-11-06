import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'javi',
        email: 'jlasa007@gmail.com'
    });

    const {username, email} = formState;
    const onInputChange = (event) => {
        const {name, value} = event.target;
        console.log(event.target.name);
        console.log(event.target.value);
        setFormState(
            {
                ...formState,
                [name]:value
            }
        )
    }

    // useEffect(() => {
    //   console.log('useEffect called on create');
    // }, [])

    // useEffect(() => {
    //     console.log('useEffect called on change formState');
    //   }, [formState])

    // useEffect(() => {
    //     console.log('useEffect called on change email');
    //   }, [email])


  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>
        <input type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={username} 
            onChange={onInputChange}/>
        
        <input type="email" 
            className="form-control mt-2" 
            placeholder="jlasa007@gmail.com" 
            name="email" value={email} 
            onChange={onInputChange}
        />
        {
            (username==='javi' && <Message />)

        }
    </>
  )
}
