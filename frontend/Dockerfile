# Usar Nginx para servir HTML estático
FROM nginx:alpine

# Copiar o HTML para Nginx
COPY . /usr/share/nginx/html

# Expor porta
EXPOSE 80

# Comando padrão
CMD ["nginx", "-g", "daemon off;"]
