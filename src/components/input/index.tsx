import './style.css'
import { SlMagnifier } from "react-icons/sl";
import { useState } from 'react'
import {api} from '../apii'
import {InformaçoesAPI} from '../informaçoes'

export const Input = () =>{

    const [input,setInput] = useState('');
    const [res,setRes] = useState({});


    const handleClick = async () =>{
        if(input === ''){
            alert('PRENCHA TODOS OS DADOS')
            return
        }else{
            const response = await api.get(`${input}/json`)
            setRes(response.data)
            setInput('')
            
        }
    }
    return(
        <div>
            <div className='containerInput'> 
                <input 
                    type="text" 
                    placeholder='Digite o seu cpe'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />

                <button className='buttonSearch' onClick={handleClick}>
                    <SlMagnifier size={25}/>
                </button>

                
            </div>


            <InformaçoesAPI Cidade={res.localidade} Cep={res.cep} Bairro={res.bairro} Endereço={res.logradouro} />
        </div>

        

    )

}