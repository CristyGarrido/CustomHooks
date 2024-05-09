import { useState } from "react";


export const useForm = ( initalForm = {} ) => {
    
    const [formState, setformState] = useState(initalForm);

    const onInputChange = ({target}) => {
        const {name, value, password} = target;
        setformState({
            ...formState,
            [name] : value
        })
    };

    const onResetForm = () => {
        setformState(initalForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
};


