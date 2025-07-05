# 🚀 Portfólio - Kelvin Charles

Portfólio profissional moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS. Apresenta projetos, habilidades e experiências como desenvolvedor front-end com foco em performance e SEO.

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-38bdf8?style=for-the-badge&logo=tailwindcss)

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Arquitetura](#arquitetura)
- [Instalação e Configuração](#instalação-e-configuração)
- [Como Usar](#como-usar)
- [Design System](#design-system)
- [SEO e Performance](#seo-e-performance)
- [Responsividade](#responsividade)
- [Deploy](#deploy)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Roadmap](#roadmap)
- [Aprendizados](#aprendizados)
- [Autor](#autor)

## 🚀 Tecnologias

- **[Next.js 15.3.3](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[React 19](https://reactjs.org/)** - Biblioteca para interfaces
- **[Vercel](https://vercel.com/)** - Plataforma de deploy

## ✨ Funcionalidades

### 🏠 Apresentação Profissional

- [x] Página inicial com hero section
- [x] Seção sobre com informações pessoais
- [x] Apresentação de habilidades técnicas
- [x] Call-to-action para contato

### 💼 Portfólio de Projetos

- [x] Lista de projetos com filtros
- [x] Páginas dinâmicas para cada projeto
- [x] Detalhes técnicos e tecnologias utilizadas
- [x] Links para GitHub e deploy ao vivo
- [x] Galeria de imagens dos projetos

### 🎯 Navegação e UX

- [x] Menu lateral fixo no desktop
- [x] Menu hamburger responsivo no mobile
- [x] Scroll suave entre seções
- [x] Animações e transições elegantes
- [x] Loading states e feedback visual

### 🔍 SEO e Indexação

- [x] Sitemap.xml automático
- [x] Robots.txt configurado

## 🏗️ Arquitetura

### Estrutura de Pastas

```
src/
├── app/                    # App Router (Next.js 15+)
│   ├── projetos/          # Área de projetos
│   │   ├── projeto/       # Rotas dinâmicas
│   │   │   └── [projectName]/
│   │   └── not-found.tsx  # 404 específico
│   ├── sobre/             # Página sobre
│   ├── contato/           # Formulário de contato
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── not-found.tsx      # 404 global
│   ├── sitemap.ts         # Gerador de sitemap
│   └── robots.ts          # Configuração robots.txt
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI
│   ├── layout/           # Componentes de layout
│   └── content/          # Componentes de conteúdo
├── data/                 # Dados dos projetos
├── content/              # Conteúdo das páginas
└── lib/                  # Utilitários e helpers
```

### Funcionalidades Técnicas

- **Rotas Dinâmicas**: Sistema de páginas automáticas para projetos
- **Metadata Dinâmica**: SEO personalizado por página
- **Sitemap Automático**: Geração automática para indexação
- **Responsividade**: Design mobile-first com breakpoints otimizados

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### 1. Clone o repositório

```bash
git clone https://github.com/kelvincharlesdev/kelvin-dev.git
cd portfolio
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

```bash
# Para funcionalidade de email (opcional)
# Se você quiser testar o envio de emails, configure:
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
EMAIL_RECEIVER=seu-email@gmail.com
```

> **📧 Nota sobre Email:** Para testar a funcionalidade de envio de emails, você precisa configurar suas próprias credenciais de email. Recomendo usar uma senha de aplicativo do Gmail para maior segurança.

### Como configurar email (opcional):

1. **Gmail**: Ative a autenticação em duas etapas
2. **Gere uma senha de app**: [Instruções aqui](https://support.google.com/accounts/answer/185833)
3. **Adicione as variáveis**: Use sua senha de app (não a senha normal)

> **⚠️ Segurança:** Nunca compartilhe suas credenciais de email. O arquivo `.env.local` já está no `.gitignore` para proteger suas informações.

### 4. Execute o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 📖 Como Usar

### 1. Navegação

- Menu lateral fixo no desktop para navegação rápida
- Menu hamburger no mobile para economia de espaço
- Scroll suave entre seções

### 2. Projetos

- Acesse `/projetos` para ver a lista completa
- Clique em qualquer projeto para ver detalhes
- Navegue entre projetos usando os botões de navegação

### 3. Contato

- Formulário de contato disponível em `/contato`
- Links para redes sociais no rodapé
- Informações de contato sempre visíveis

## 🎨 Design System

### Paleta de Cores

- **Background**: `#111827` (Gray 900)
- **Text Primary**: `#F3F4F6` (Gray 100)
- **Text Secondary**: `#9CA3AF` (Gray 400)
- **Accent**: Gradientes azuis e cinzas

### Tipografia

- **Primary**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Optimization**: `font-display: swap`

## 🔍 SEO e Performance

### Otimizações Implementadas

- **Core Web Vitals**: Otimizado para performance
- **Sitemap Automático**: Indexação facilitada
- **Meta Tags Dinâmicas**: SEO personalizado

### URLs Otimizadas

- `/` - Página inicial
- `/sobre` - Informações pessoais
- `/projetos` - Lista de projetos
- `/projetos/projeto/[nome]` - Páginas individuais
- `/contato` - Formulário de contato
- `/formcacoes-academicas` - Informações Academicas

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Navigation**: Sidebar desktop + hamburger mobile
- **Images**: Otimizadas com Next.js Image

## 🚀 Deploy

### Vercel (Recomendado)

> **🌐 Deploy:** [Acesse o portfólio em produção](https://dev-kelvin.vercel.app)

### Configuração Automática

- Deploy automático via GitHub
- Domínio personalizado configurado
- SSL/TLS automático

## 🧪 Scripts Disponíveis

```bash
npm run dev      # Modo desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Linting com ESLint
```

## 📚 Aprendizados

Este portfólio representa uma jornada de aprendizado contínuo e aplicação de tecnologias modernas. Como desenvolvedor em constante evolução, pude explorar e implementar:

- **Next.js 15**: App Router, Server Components, e otimizações automáticas
- **TypeScript**: Tipagem estática para código mais seguro e manutenível
- **Tailwind CSS v4**: Design system consistente e responsivo
- **SEO Avançado**: Implementação de sitemap, robots.txt e metadata dinâmica
- **Performance**: Otimizações de imagem, lazy loading e Core Web Vitals

Cada funcionalidade implementada foi uma oportunidade de aprender algo novo e aplicar as melhores práticas do desenvolvimento web moderno. O projeto serviu como laboratório para experimentar novas tecnologias e consolidar conhecimentos.

A experiência de criar um portfólio profissional me ensinou sobre a importância da primeira impressão, performance e acessibilidade. Cada detalhe foi pensado para criar uma experiência única para visitantes e potenciais clientes.

## 👨‍💻 Autor

<p align="center">
  <img src="https://media.licdn.com/dms/image/v2/D4D03AQHip__jqQexeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674946196667?e=1756944000&v=beta&t=DG2YFUAZPt6l5ALpSaDj4XGAS0YWkAnsLRJ4Hdabb6E" alt="Kelvin Charles" width="150" style="border-radius: 50%;" />
</p>

<p align="center"><strong>👋 Desenvolvido por Kelvin Charles</strong></p>

<p align="center">
  <a href="https://www.linkedin.com/in/kelvin-charles/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://github.com/kelvincharlesdev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

> 💼 Portfólio criado para apresentar projetos e habilidades  
> 🎯 Focado em performance, SEO e experiência do usuário

---

**Portfólio** - Conectando talentos e oportunidades 🚀💙
