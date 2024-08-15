import * as C from "@chakra-ui/react";
import { useState } from "react";
import Step from './Components/Step.jsx';
import FormContato from "./Pages/FormContato.jsx";
import FormPessoal from "./Pages/FormPessoal.jsx";
import FormProjeto from "./Pages/FormProjeto.jsx";

function App() {
    const [step, setStep] = useState(1);
    const Steps = [1, 2, 3];

    const GetStep = () => {
        switch (step) {
            case 1:
                return <FormPessoal />;
            case 2:
                return <FormContato />;
            case 3:
                return <FormProjeto />;
            default:
                return <FormPessoal />;
        }
    };

    return (
        <C.Flex
            direction="column"
            h="100vh"
            p={4}
            align="center"
            justify="center"
        >
            <C.Center maxW="container.md" w="100%" flexDirection="column">
                <div className="form-header">
                    <C.HStack spacing={4} mb={4}>
                        {Steps.map((item) => (
                            <Step key={item} index={item} active={step === item} />
                        ))}
                    </C.HStack>
                </div>

                <C.Divider mb={4} borderColor="blackAlpha.400" />

                <C.Box
                    w="100%"
                    maxW="container.sm"
                    p={6}
                    bg="white"
                    borderRadius="md"
                    boxShadow="md"
                    border="2px solid"
                    borderColor="gray.200"
                >
                    {GetStep()}
                </C.Box>

                <div className="form-footer">
                    <C.HStack mt={4} spacing={10} w="full" justify="space-between">
                        <C.Button
                            bg="gray.200"
                            onClick={() => setStep(step - 1)}
                            isDisabled={step === 1}
                        >
                            Voltar
                        </C.Button>

                        <C.Button
                            bg="green.500"
                            color="white"
                            onClick={() => step !== 3 && setStep(step + 1)}
                        >
                            {step === 3 ? "Enviar" : "Próximo"}
                        </C.Button>
                    </C.HStack>
                </div>
            </C.Center>
        </C.Flex>
    );
}

export default App;
