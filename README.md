# 🤖 Agents Web

Este repositório contém o frontend do **Agents**, uma aplicação de perguntas e respostas com inteligência artificial. Os utilizadores podem criar salas, enviar perguntas e receber respostas automáticas geradas por IA. O frontend é desenvolvido em React, Vite e TailwindCSS.

---

## 🗂️ Estrutura do Projeto

```
web/
├── src/
│   ├── components/         # Componentes reutilizáveis (UI e lógicos)
│   ├── http/               # Hooks para comunicação com a API
│   ├── lib/                # Utilitários e libs
│   ├── pages/              # Páginas principais da aplicação
│   ├── index.css           # Estilos globais (Tailwind)
│   ├── app.tsx             # Definição de rotas e providers
│   └── main.tsx            # Entry point React
├── index.html              # HTML principal
├── package.json            # Dependências e scripts npm
└── ...
```

---

## 🚀 Como Executar Localmente

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/agents-web.git
   cd agents-web/web
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```sh
   npm run dev
   ```

   O frontend estará disponível em [http://localhost:5173](http://localhost:5173).

> ⚠️ **Nota:** Certifique-se de que o backend está em execução em `http://localhost:3333` para que todas as funcionalidades funcionem corretamente.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React** — Biblioteca para construção de interfaces de utilizador
- ⚡ **Vite** — Bundler rápido para desenvolvimento moderno
- 🎨 **TailwindCSS** — Estilização utilitária
- 🔄 **React Query** — Gestão de dados assíncronos
- 📝 **React Hook Form** — Gestão de formulários
- 🛡️ **Zod** — Validação de esquemas de dados
- 📅 **Day.js** — Manipulação de datas
- 🧩 **Radix UI** — Componentes acessíveis
- 🖼️ **Lucide React** — Ícones SVG

---

## ✨ Funcionalidades

- 🏠 **Criação de Salas:** Crie salas temáticas para organizar perguntas.
- 📋 **Listagem de Salas:** Veja as salas criadas recentemente e aceda rapidamente.
- ❓ **Envio de Perguntas:** Submeta perguntas em cada sala e obtenha respostas automáticas.
- 🤖 **Respostas por IA:** As respostas são geradas automaticamente por um sistema de IA.
- 🎤 **Gravação de Áudio:** Grave e envie áudios para uma sala (suporte a MediaRecorder).
- ⚡ **Feedback em Tempo Real:** Interface reativa com carregamento e estados de envio.
- ✅ **Validação de Formulários:** Validação robusta usando Zod e React Hook Form.

---

## 📜 Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento Vite
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build de produção localmente
- `npm run lint` — Executa o linter

---

## 📝 Detalhes de Implementação

- **Gerenciamento de Estado:** Utiliza React Query para cache e sincronização de dados com a API.
- **Formulários:** Todos os formulários usam React Hook Form com validação Zod.
- **Componentização:** Componentes UI desacoplados e reutilizáveis em `src/components/ui`.
- **Estilização:** TailwindCSS com variantes customizadas e temas claro/escuro.
- **Gravação de Áudio:** Página dedicada para gravar e enviar áudios para uma sala, usando a API MediaRecorder do navegador.
- **Internacionalização:** Datas e textos adaptados para português (pt-BR).

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas alterações (`git commit -m 'feat: nova funcionalidade'`).
4. Push para o branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

> Frontend do projeto Agents — perguntas e respostas