# 🎷 Jazz Influência AB

Projeto frontend e DevOps explorando como o jazz influencia a música R&B, a cultura e o cotidiano.

## 📋 Descrição

Este é um website educacional que apresenta:
- **História do Jazz**: Origem e evolução do jazz em Nova Orleans
- **Artistas Importantes**: Grandes nomes como Louis Armstrong e Miles Davis
- **Influência no R&B**: Como o jazz moldou o Rythm and Blues moderno

## 🎯 Características

✅ Design responsivo com Bootstrap 5.3.3
✅ Acessibilidade (WCAG 2.1)
✅ Testes automatizados com Cypress
✅ Análise de código com SonarQube
✅ JavaScript moderno com melhores práticas
✅ CSS otimizado com variáveis

## 🚀 Como Instalar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Lealzap/jazz-influencia-ab.git
cd jazz-influencia-ab

# Instalar dependências
npm install
```

## 📚 Como Usar

### Desenvolvimento

```bash
# Iniciar um servidor local (usando Live Server)
# Ou qualquer servidor HTTP na porta 5500
http-server -p 5500
```

### Testes

```bash
# Executar testes Cypress em modo headless
npm test

# Abrir interface do Cypress
npm run test:open
```

### Linting

```bash
# Verificar código JavaScript
npm run lint

# Corrigir erros automaticamente
npm run lint
```

### SonarQube

```bash
# Executar análise SonarQube
npm run sonar
```

## 📁 Estrutura do Projeto

```
jazz-influencia-ab/
├── css/
│   └── style.css          # Estilos customizados
├── js/
│   ├── script.js          # Script principal
│   └── cypress/
│       └── e2e/
│           └── site.cy.js # Testes E2E
├── cypress/
│   ├── e2e/
│   │   └── teste.cy.js    # Testes adicionais
│   └── support/           # Configurações do Cypress
├── images/                # Imagens do projeto
├── index.html             # Página inicial
├── historia.html          # Página de história
├── artistas.html          # Página de artistas
├── rnb.html              # Página de influência
├── contato.html          # Página de contato
├── package.json          # Dependências do projeto
├── cypress.config.js     # Configuração do Cypress
├── sonar-project.properties # Configuração do SonarQube
├── .eslintrc.json        # Configuração do ESLint
├── .editorconfig         # Padronização de editor
└── README.md             # Este arquivo
```

## 🧪 Testes

O projeto utiliza **Cypress** para testes end-to-end:

```javascript
// Exemplo de teste
describe("Jazz Influência AB", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("index.html");
    cy.contains("Jazz Influência AB");
  });
});
```

### Executar Testes

```bash
# Modo headless
npm test

# Modo interativo
npm run test:open
```

## 🔍 Análise de Código - SonarQube

Configuração SonarQube para análise contínua de qualidade:

```bash
# Executar análise
npm run sonar
```

**Exclusões configuradas:**
- `node_modules/**`
- `cypress/**`
- `.git/**`

**Métricas monitoradas:**
- Bugs e vulnerabilidades
- Code smells
- Cobertura de testes
- Duplicação de código
- Complexidade ciclomática

## ♿ Acessibilidade

O projeto segue as normas WCAG 2.1:

✅ Atributos `alt` em todas as imagens
✅ Atributos `aria-label` em elementos interativos
✅ Roles semânticas corretas
✅ Navegação por teclado
✅ Contraste de cores adequado
✅ Respostas ao foco visível

## 📱 Responsividade

- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobile: Até 767px

## 🛠️ Tecnologias

- **HTML5**: Semântica e acessibilidade
- **CSS3**: Variáveis, Grid, Flexbox, Animações
- **JavaScript**: Vanilla JS com melhores práticas
- **Bootstrap 5.3.3**: Framework CSS responsivo
- **Cypress**: Testes E2E
- **ESLint**: Linting de código
- **SonarQube**: Análise de qualidade

## 📝 Convenções de Código

### JavaScript
- Use `const` por padrão, `let` quando necessário
- Nomes descritivos em camelCase
- Funções com documentação JSDoc
- Máximo 80 caracteres por linha

### CSS
- Use variáveis CSS para cores
- Classes em kebab-case
- Mobile-first responsive design
- Evite `!important`

### HTML
- Semântica HTML5
- Atributos `alt` obrigatórios em imagens
- Roles ARIA quando necessário
- Indentação de 2 espaços

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a ISC License.

## 👥 Autores

- **Jazz Influência AB** - Projeto Educacional

## 📞 Suporte

Para questões ou sugestões, abra uma issue no repositório GitHub.

## 🔗 Links Úteis

- [Bootstrap Documentation](https://getbootstrap.com/)
- [Cypress Documentation](https://docs.cypress.io/)
- [SonarQube Documentation](https://docs.sonarqube.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Última atualização:** 30 de maio de 2026
**Versão:** 1.0.0
