import React, { useState } from 'react';
import { VStack, Input, Select, Text } from '@chakra-ui/react';

const FormContato = () => {
  const [uf, setUf] = useState('SP');

  const handleUfChange = (event) => setUf(event.target.value);

  return (
    <VStack spacing={4} align="stretch" className="form-container">
      <div className="form-header">
        <Text fontSize="2xl" fontWeight="bold">Endereço</Text>
      </div>
      <Input placeholder="CEP" className="form-input" />
      <Input placeholder="Bairro" className="form-input" />
      <Input placeholder="Cidade" className="form-input" />
      <Text fontSize="lg" fontWeight="semibold">Selecione o estado:</Text>
      <Select placeholder="UF" value={uf} onChange={handleUfChange}>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </Select>
    </VStack>
  );
};

export default FormContato;
