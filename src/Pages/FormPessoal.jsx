import * as C from "@chakra-ui/react"



const FormPessoal = () => {
    return(
        
        <C.VStack>
            <div>
            <h1>Pessoa</h1>
            </div>
            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="CPF"/>
            <C.Input type="email" placeholder="Email"/>
            <C.RadioGroup>
            <C.Radio value="option1">Feminino</C.Radio>
            <C.Radio value="option2">Masculino</C.Radio>
            </C.RadioGroup>

        </C.VStack>
    )
}

export default FormPessoal