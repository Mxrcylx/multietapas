import * as C from "@chakra-ui/react"


const FormProjeto = () => {
    return(
        <C.VStack>
             <div>
            <h1>Projeto</h1>
            </div>
            <C.Input type="text" placeholder="Projeto"/>
            <C.Input type="text" placeholder="Área"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
            <C.CheckboxGroup>
                <C.Checkbox value="option1">CETCC</C.Checkbox>
                <C.Checkbox value="option1">CETAFAJU</C.Checkbox>
                <C.Checkbox value="option1">CETICC</C.Checkbox>
                <C.Checkbox value="option1">CETAFEST</C.Checkbox>
            </C.CheckboxGroup>
        </C.VStack>
    )
}

export default FormProjeto