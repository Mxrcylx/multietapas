import * as C from "@chakra-ui/react"


const FormContato = () => {
    return(
        <C.VStack>
             <div>
            <h1>Endereço</h1>
            </div>
            <C.Input type="text" placeholder="CEP"/>
            <C.Input type="text" placeholder="Bairro"/>
            <C.Input type="text" placeholder="Cidade"/>
            
            <select placeholder="UF"> 
  <option value="UF">UF</option>
  <option value="sergipe">Sergipe</option>
  <option selected value="saopaulo">São Paulo</option>
  <option value="rioJaneiro">Rio de Janeiro</option>
</select>
        </C.VStack>
    )
}

export default FormContato