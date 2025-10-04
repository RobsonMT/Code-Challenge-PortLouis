# Usar Node.js LTS
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código
COPY . .

# Build TypeScript
RUN npm run build

# Expor porta da API
EXPOSE 8000

# Rodar migrations automaticamente e depois iniciar o servidor
CMD sh -c "npm run migration:run && npm run start:dev"
