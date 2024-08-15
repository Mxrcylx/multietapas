import React from 'react';
import { VStack, Input, RadioGroup, Radio, Text } from '@chakra-ui/react';

const FormPessoal = () => {
  return (
    <VStack spacing={4} align="stretch" className="form-container">
      <div className="form-header">
        <Text fontSize="2xl" fontWeight="bold">Pessoal</Text>
      </div>
      <Input placeholder="Nome" className="form-input" />
      <Input placeholder="CPF" className="form-input" />
      <Input type="email" placeholder="Email" className="form-input" />
      <Text fontSize="lg" fontWeight="semibold">Selecione o sexo:</Text>
      <RadioGroup>
        <Radio value="female">Feminino</Radio>
        <Radio value="male">Masculino</Radio>
      </RadioGroup>
    </VStack>
  );
};

export default FormPessoal;
