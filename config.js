// ==========================================
// CONFIGURAÇÃO DO SITE MBWAY - WHITE LABEL
// ==========================================
// Edite apenas este arquivo para personalizar o site para cada cliente

const CONFIG = {
  // Informações do Negócio
  business: {
    name: 'Wellen Barbosa',           // Ex: "Nails Designer"
    logoFile: 'wb.png',               // Nome do arquivo do logo (deve estar na mesma pasta)
  },

  // Número MBWay
  mbway: {
    phoneDisplay: '+351 927 437 849',        // Formato visual (com espaços)
    phoneValue: '927437849',            // Número real (sem espaços, será copiado)
  },

  // Cores e Estilo
  theme: {
    // Cor principal (botão MBWay)
    primaryColor: '#FBD6A3',            // dourado claro
    primaryColorHover: '##C78C3F',       // dourado escuro

    // Fundo da página
    backgroundColor: '#FDECEE',         // rosa claro

    // Card
    cardBackground: '#F2CED1',          // Branco
    cardShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },

  // Textos Customizáveis
  text: {
    pageTitle: 'Pagamento MBWay',       // Título da aba do navegador
    label: 'Número MBWay',              // Texto acima do número
    buttonText: 'Copiar e Abrir MB WAY', // Texto do botão
    successMessage: '✓ Copiado! A abrir MB WAY...', // Mensagem de sucesso
    errorMessage: 'Erro ao copiar. Seleciona o número manualmente.', // Mensagem de erro

    // Instruções
    step1: 'Clica no botão',
    step2: 'No MB WAY → cola o número',
  },
};
