# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos
COPY package*.json ./
RUN npm install

# Copia o restante
COPY . .

# Expõe a porta do servidor
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
