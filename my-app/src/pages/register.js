import { useState } from 'react';
import { Form } from '../component/Textfield/Form';
import { Input } from '@/component/Textfield/Input';
import { Button } from '../component/Button/Button'

const register = () => {
    const [name, setName] = useState("")
    const [firstName, setFirstname] = useState("");
    const [password, setPassword] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleFirstName = (e) => {
        setFirstname(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const SubmitForm = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(firstName)
        console.log(password)
    }

    return (
        <div className="flex flex-col">
            <Form onSubmit={SubmitForm}>
                <label> nom </label>
                <Input onChange={handleName} type="text" />

                <label>  prenom </label>
                <Input onChange={handleFirstName} type="text" />

                <label> mot de passe  </label>
                <Input onChange={handlePassword} type="password" />
                <Button type="submit"> Valider </Button>
            </Form>
            <span> test </span>
        </div>

    )
}
export default register;