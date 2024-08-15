import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        bg: 'gray.50',
        color: 'gray.800',
        margin: 0,
        padding: 0,
      },
      'h1': {
        fontSize: '2rem', // Ajuste o tamanho do h1
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
      '.form-container': {
        maxWidth: '600px',
        margin: 'auto',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: 'md',
        boxShadow: 'md',
        border: '2px solid',
        borderColor: 'gray.200',
      },
      '.form-header': {
        marginBottom: '1rem',
      },
      '.form-footer': {
        marginTop: '1rem',
        justifyContent: 'center',
      },
      '.form-content': {
        marginTop: '1rem',
      },
      '.form-input': {
        marginBottom: '1rem',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
        textTransform: 'uppercase',
      },
      variants: {
        solid: {
          bg: 'blue.500',
          color: 'white',
          _hover: {
            bg: 'blue.600',
          },
        },
        outline: {
          borderColor: 'gray.300',
          color: 'gray.800',
          _hover: {
            borderColor: 'gray.400',
            bg: 'gray.100',
          },
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: 'gray.300',
      },
    },
    Select: {
      baseStyle: {
        borderColor: 'gray.300',
      },
    },
  },
});

export default theme;
