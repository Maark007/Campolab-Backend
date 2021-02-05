# Backend da aplicação Campolab

Aplicação criada com NodeJS.

### Como rodar minha aplicação ?

- É necessário que você possua PostgreSQL em seu computador.

```
1 - Clone a aplicação
2 - Yarn install ou npm install
3 - Configure suas credencias em src/database/config.js
4 - Sequelize db:create
4 - Sequelize db:migrate
5 - Yarn start

```

### Rotas

```
- **GET - producer:** Retorna todos os produtores.
- **POST - producer:** Envia os dados necessarios para cadastrar os produtores.
- **PATCH - producer:** Edita os dados do produtor.
- **DELETE - producer:** Exclui o produtor informado.

- **POST - farms:** Envia os dados necessarios para cadastrar as propriedades.
- **GET - producers/farms/:id:** Envia o ID do produtor e retornar as propriedades vinculados ao mesmo.
- **GET - /farm/showall:**  Retornar todas as propriedades.

```

### Ferramentas utilizadas

```
- NodeJS
- Sequelize
- PostgreSQL
```
