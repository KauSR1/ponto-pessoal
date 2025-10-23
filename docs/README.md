# 🕐 TimeTracker - Sistema de Controle de Ponto

Sistema de controle de ponto online desenvolvido para gerenciar horários de trabalho, pausas e atividades diárias.

## 📋 Sobre o Projeto

Este é um sistema web de controle de ponto que permite:
- ✅ Registrar entrada, pausas, retornos e saídas
- ✅ Calcular automaticamente horas trabalhadas
- ✅ Adicionar descrições de atividades a cada registro
- ✅ Visualizar histórico em timeline
- ✅ Gerar relatórios de produtividade

## 🚀 Tecnologias

### Front-end
- HTML5
- CSS3 (Vanilla CSS com variáveis)
- JavaScript (ES6+ / Modules)

### Back-end (Em desenvolvimento)
- Java (Spring Boot) OU PHP
- MySQL

## 📁 Estrutura do Projeto

```
timetracker-sistema/
├── index.html              # Página principal
├── config/
│   └── config.js          # Configurações do sistema
├── src/
│   ├── css/
│   │   ├── reset.css      # Reset CSS
│   │   ├── variables.css  # Variáveis (cores, fontes)
│   │   ├── layout.css     # Layout (header, sidebar, main)
│   │   ├── components.css # Componentes
│   │   └── responsive.css # Media queries
│   ├── js/
│   │   ├── app.js         # Inicialização
│   │   ├── clock.js       # Módulo do relógio
│   │   ├── punch.js       # Módulo de registros
│   │   ├── timeline.js    # Módulo da timeline
│   │   ├── activities.js  # Módulo de atividades
│   │   └── modal.js       # Módulo do modal
│   └── assets/
│       └── img/           # Imagens
├── backend/               # Back-end (a ser desenvolvido)
└── docs/
    ├── README.md          # Este arquivo
    └── INSTALL.md         # Instruções de instalação
```

## 🎯 Funcionalidades Atuais

### ✅ Implementado no Front-end:
- [x] Relógio em tempo real (data e hora)
- [] Botões de registro (Entrada, Pausa, Retorno, Saída)
- [] Timeline de registros
- [] Cálculo de horas trabalhadas
- [] Tempo em pausa
- [] Saída prevista
- [] Descrição de atividades por registro
- [] Lista de atividades do dia
- [] Design responsivo
- [] Armazenamento local (localStorage)

### 🚧 Em Desenvolvimento:
- [ ] Integração com back-end (API REST)
- [ ] Autenticação de usuários
- [ ] Calendário mensal
- [ ] Relatórios e gráficos
- [ ] Exportação de dados (PDF, Excel)
- [ ] Histórico completo
- [ ] Múltiplos usuários

## 💻 Como Usar

### Instalação Local

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` no navegador
3. Pronto! O sistema já está funcional

### Configurações

Edite o arquivo `config/config.js` para personalizar:
- Horas de trabalho por dia
- Tempo de pausa
- URL da API (quando criar o back-end)
- Mensagens do sistema

## 🔧 Desenvolvimento

### Adicionando Funcionalidades

1. **CSS**: Adicione estilos em `src/css/components.css`
2. **JavaScript**: Crie novos módulos em `src/js/`
3. **Configurações**: Edite `config/config.js`

### Debug

Abra o console do navegador e use:
```javascript
// Limpar todos os dados
TimeTracker.clearData()

// Exportar backup
TimeTracker.exportData()

// Ver versão
TimeTracker.version
```

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `src/css/variables.css`:
```css
--color-primary: #ff5252;  /* Cor principal */
--color-success: #4caf50;  /* Entrada */
--color-warning: #ff9800;  /* Pausa */
--color-info: #2196f3;     /* Retorno */
--color-danger: #f44336;   /* Saída */
```

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px+)
- 📱 Tablet (768px+)
- 📱 Mobile (480px+)

## 🔐 Segurança

### Front-end:
- ✅ Escape de HTML para prevenir XSS
- ✅ Validações de entrada
- ✅ Armazenamento local seguro

### Back-end (a implementar):
- [ ] Autenticação JWT
- [ ] Criptografia de senhas
- [ ] HTTPS obrigatório
- [ ] Rate limiting
- [ ] Validações server-side

## 📊 Próximos Passos

1. **Back-end**: Desenvolver API REST em Java/PHP
2. **Banco de dados**: Criar schema MySQL
3. **Autenticação**: Implementar login/logout
4. **Relatórios**: Gráficos e exportação
5. **Deploy**: Hospedar em servidor

## 🤝 Contribuindo

Este é um projeto de aprendizado! Sugestões são bem-vindas.

## 📝 Licença

Projeto livre para uso educacional.

## ✉️ Contato

Desenvolvedor: [Seu Nome]
Email: [seu@email.com]

---

**Versão**: 1.0.0  
**Última atualização**: Outubro 2025