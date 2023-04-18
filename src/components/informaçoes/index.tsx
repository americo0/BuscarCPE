import './style.css'

type Props = { 
    Cep:string;
    Endereço:string;
    Bairro:string;
    Cidade:string

}

export const InformaçoesAPI = ({Cep,Endereço,Bairro,Cidade}:Props) => {
 return(
    <div className='informaInput'>
        <>
        <input 
        type="text"
        value={Cep}
        placeholder='Cep'
        />
        </>

        <>
        <input 
        type="text"
        value={Cidade}
        placeholder='Cidade'
        />
        </>

        <>
        <input 
        type="text"
        value={Bairro}
        placeholder='Bairro'
        />
        </>

        <>
        <input 
        type="text"
        value={Endereço}
        placeholder='Endereço'
        />
        </>
    </div>
 )
}
