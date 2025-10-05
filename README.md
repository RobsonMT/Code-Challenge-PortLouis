# Projeto - Gerenciamento de Contatos

Este projeto é uma aplicação completa com **Backend (Express + MySQL)** e **Frontend (Vue 3)**, rodando em containers com **Docker Compose**.

---

## 🧱 Estrutura

```
.
├── backend/      # API Express com MySQL
├── frontend/     # Interface Web em Vue 3
├── docker-compose.yml
├── README.md
```

---

## 🚀 Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Porta `8081`, `8000`, `3307` livres no host

---

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone git@github.com:RobsonMT/Code-Challenge-PortLouis.git
cd Code-Challenge-PortLouis
```

---

### 2. Ajuste variáveis de ambiente (opcional)

Se necessário, edite o arquivo `.env.example` para `.env` (ou use variáveis direto no `docker-compose.yml`).

Exemplo de variáveis já definidas:

```yaml
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=12345
DB_NAME=contacts_db

PORT=8000
NODE_ENV=development
VUE_APP_API_BASE=http://api:8000/api
```

---

### 3. Suba os containers

```bash
docker-compose up --build
```

Aguarde até que os serviços `backend`, `frontend` e `db` estejam no ar.

---

### 4. Acesse a aplicação

- Frontend: [http://localhost:8081/](http://localhost:8081/)
- API: [http://localhost:8000/](http://localhost:8000/)

---

## 🛠️ Comandos úteis

```bash
# Subir tudo com rebuild
docker-compose up --build

# Parar tudo
docker-compose down

# Ver logs
docker-compose logs -f
```

---

## 🧪 Tecnologias utilizadas

- **Backend**: Express + TypeORM + MySQL
- **Frontend**: Vue 3
- **Banco de Dados**: MySQL
- **Containerização**: Docker + Docker Compose

---
