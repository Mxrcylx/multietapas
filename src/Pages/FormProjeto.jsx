import React, { useState } from 'react';
import { VStack, Input, Checkbox, Text } from '@chakra-ui/react';

const FormProjeto = () => {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedOption((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <VStack spacing={4} align="stretch" className="form-container">
      <div className="form-header">
        <Text fontSize="2xl" fontWeight="bold">Projeto</Text>
      </div>
      <Input placeholder="Projeto" className="form-input" />
      <Input placeholder="Área" className="form-input" />
      <Input placeholder="Coordenador/Professor" className="form-input" />
      <Text fontSize="lg" fontWeight="semibold">Selecione o local:</Text>
      <Checkbox
        isChecked={selectedOption.includes('CETCC')}
        onChange={() => handleCheckboxChange('CETCC')}
      >
        CETCC
      </Checkbox>
      <Checkbox
        isChecked={selectedOption.includes('CETAFAJU')}
        onChange={() => handleCheckboxChange('CETAFAJU')}
      >
        CETAFAJU
      </Checkbox>
      <Checkbox
        isChecked={selectedOption.includes('CETICC')}
        onChange={() => handleCheckboxChange('CETICC')}
      >
        CETICC
      </Checkbox>
      <Checkbox
        isChecked={selectedOption.includes('CETAFEST')}
        onChange={() => handleCheckboxChange('CETAFEST')}
      >
        CETAFEST
      </Checkbox>
    </VStack>
  );
};

export default FormProjeto;
