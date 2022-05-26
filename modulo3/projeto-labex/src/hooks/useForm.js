import { useState } from "react";

/* Custom hook, como iremos utilizar formularios para criar viagem e para o usuário se inscrever em uma viagem,
criamos esse useForm para que podemos utilizar em ambas paginas (home e adm) */

export const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const onChange = (e)=>{
        //propriedades name e value vem dos inputs
        const {name, value} = e.target

        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(inicialState);
    }

    return { form, onChange, clear}
}