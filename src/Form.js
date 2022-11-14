import React, {useState } from 'react';
import axios from 'axios';

function Form(){

    const [campos, setCampos] = useState({
        txtNome: '',
    });

    const [ret, setRet] = useState('');

    function handleInputChange(event){
        if(event === undefined){
            console.log('evento undefined');
        }else{
            campos[event.target.name] = event.target.value;
            console.log(event.target.name)
            setCampos(campos);
        }
    }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(campos);
        axios.post('http://localhost:8888/cadastro', campos).then(response => {
            alert(response.data.nome);
            setRet(response.data.nome);
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>
 
                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange} />
                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                    <div><p>Retorno: {ret}</p></div>
                </fieldset>
            </form>
        </div>
    )
}
export default Form;