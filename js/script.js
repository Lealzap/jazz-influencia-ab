/**
 * Script principal - Jazz Influência AB
 * Gerencia funcionalidades do site de jazz
 */

/* eslint-disable no-console */

/**
 * Inicializa o site ao carregar a página
 */
function initializeApp() {
  try {
    console.log('Site Jazz Influência AB carregado com sucesso!');
    
    // Validar disponibilidade de APIs do navegador
    if (!validateBrowserSupport()) {
      console.warn('Algumas funcionalidades podem não estar disponíveis');
    }
    
    // Inicializar listeners de eventos
    setupEventListeners();
  } catch (error) {
    console.error('Erro ao inicializar aplicação:', error);
  }
}

/**
 * Valida o suporte do navegador
 * @returns {boolean} true se o navegador é suportado
 */
function validateBrowserSupport() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof localStorage !== 'undefined'
  );
}

/**
 * Configura os event listeners da página
 */
function setupEventListeners() {
  // Adicionar evento de scroll suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', handleSmoothScroll);
  });
  
  // Validar links internos
  validateInternalLinks();
}

/**
 * Manipula scroll suave para links internos
 * @param {Event} event - Evento do clique
 */
function handleSmoothScroll(event) {
  const href = event.currentTarget.getAttribute('href');
  
  if (href === '#' || !href) {
    event.preventDefault();
    return;
  }
  
  const targetElement = document.querySelector(href);
  
  if (targetElement) {
    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Valida se todos os links internos estão funcionando
 */
function validateInternalLinks() {
  const links = document.querySelectorAll('a[href*=".html"]');
  
  links.forEach((link) => {
    const href = link.getAttribute('href');
    
    if (!href || href.trim() === '') {
      console.warn('Link vazio encontrado:', link);
      link.classList.add('is-invalid');
    }
  });
}

/**
 * Verifica se a página está completamente carregada
 */
function checkPageReady() {
  return document.readyState === 'complete' || document.readyState === 'interactive';
}

// Inicializar quando o DOM estiver pronto
if (checkPageReady()) {
  initializeApp();
} else {
  document.addEventListener('DOMContentLoaded', initializeApp);
}

/* eslint-enable no-console */