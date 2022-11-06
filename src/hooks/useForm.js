import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

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
    };

    const onResetForm = (event) => {
        setFormState(initialForm);
    };

    return {
        ...formState, 
        formState, 
        onInputChange, 
        onResetForm
    }
}