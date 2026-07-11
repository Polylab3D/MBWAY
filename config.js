// ==========================================
// CONFIGURAÇÃO DO SITE MB WAY - WELLEN BARBOSA
// Repositório: wellen-barbosa
// ==========================================
// Esta página utiliza a index base da PolyLAB 3D.

const CONFIG = {
  // Informações do negócio
  business: {
    name: 'Wellen Barbosa',
    logoFile: 'wb.png',
  },

  // Número MB WAY
  mbway: {
    phoneDisplay: '+351 927 437 849',
    phoneValue: '927437849',
  },

  // Tema visual inspirado na identidade rosa, dourada e vinho da cliente
  theme: {
    // Fundo geral da página
    'background-color':
      'linear-gradient(180deg, #FFF1F4 0%, #F6DCE2 100%)',

    // Card principal
    'card-background': '#FFF9FA',

    // Sombra do card
    'card-shadow': '0 12px 36px rgba(126, 47, 73, 0.14)',

    // Cor principal do número MB WAY
    'text-color': '#4A252F',

    // Cor do texto "Número MB WAY"
    'text-secondary': '#A23A5A',

    // Cor das instruções e do rodapé
    'text-muted': 'rgba(106, 66, 77, 0.68)',

    // Cor da linha divisória
    'divider-color': 'rgba(199, 140, 63, 0.22)',

    // Cor principal dos botões
    'link-bg': '#C78C3F',

    // Cor dos botões ao clicar ou passar o rato
    'link-hover-bg': '#A96F2C',

    // Cor do texto e dos ícones dos botões
    'link-text': '#FFFFFF',
  },

  // Textos da página
  text: {
    pageTitle: 'Pagamento MB WAY',

    label: 'Número MB WAY',

    buttonText: 'Copiar número',

    openButtonText: 'Abrir MB WAY agora',

    successMessage:
      '✓ Número copiado! Agora toque em "Abrir MB WAY agora".',

    errorMessage:
      'Erro ao copiar. Seleciona o número manualmente.',

    step1: 'Clica no botão para copiar o número',

    step2: 'No MB WAY, cola o número',
  },

  // Rodapé
  footer: {
    text: '© 2026 PolyLAB 3D - Todos os direitos reservados',
  },
};
