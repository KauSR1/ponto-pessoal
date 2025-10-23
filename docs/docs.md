# 📁 Estrutura do Projeto - Sistema de Controle de Ponto

```
timetracker-sistema/
│
├── index.html                    # Página principal
│
├── src/
│   ├── css/
│   │   ├── reset.css            # Reset CSS
│   │   ├── variables.css        # Variáveis CSS (cores, fontes)
│   │   ├── layout.css           # Layouts gerais (header, sidebar, main)
│   │   ├── components.css       # Componentes (cards, botões, modais)
│   │   └── responsive.css       # Media queries
│   │
│   ├── js/
│   │   ├── app.js               # Inicialização da aplicação
│   │   ├── clock.js             # Funções do relógio
│   │   ├── punch.js             # Funções de registro de ponto
│   │   ├── timeline.js          # Funções da timeline
│   │   ├── activities.js        # Funções de atividades
│   │   └── modal.js             # Funções do modal
│   │
│   └── assets/
│       ├── img/
│       │   └── logo.png         # Logo do sistema
│       │
│       └── icons/               # Ícones SVG (se necessário)
│
├── config/
│   └── config.js                # Configurações do sistema
│
├── docs/
│   ├── README.md                # Documentação do projeto
│   └── INSTALL.md               # Instruções de instalação
│
└── backend/                     # Pasta para seu back-end (Java/PHP)
    ├── api/                     # Endpoints da API
    ├── models/                  # Modelos de dados
    ├── controllers/             # Controladores
    └── database/                # Scripts SQL
```

## 📝 Descrição dos Arquivos:

### **index.html**
- Página principal que importa todos os CSS e JS

### **src/css/**
- `reset.css` - Normalização do CSS
- `variables.css` - Cores, fontes, espaçamentos
- `layout.css` - Estrutura da página (header, sidebar, main)
- `components.css` - Estilos de componentes reutilizáveis
- `responsive.css` - Responsividade mobile

### **src/js/**
- `app.js` - Inicialização e configuração geral
- `clock.js` - Relógio e atualização de tempo
- `punch.js` - Lógica de entrada/saída/pausas
- `timeline.js` - Renderização da timeline
- `activities.js` - Gerenciamento de atividades
- `modal.js` - Controle de modais

### **backend/**
- Aqui você vai desenvolver seu back-end em Java ou PHP
- Organizado em camadas (MVC)

---
