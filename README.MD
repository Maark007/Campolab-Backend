# Backend da aplicação Campolab

Aplicação criada com NodeJS.

### Ferramentas utilizadas

```
- NodeJS
- Sequelize
- PostgreSQL
```

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
- **GET - (producer) :** Retorna todos os produtores.
- **POST - (producer) :** Envia os dados necessarios para cadastrar os produtores.
- **PATCH - (/producer/:id) :** Edita os dados do produtor.
- **DELETE - (/producer/:id) :** Exclui o produtor informado.

- **POST - (/producer/:id_producer/farm) :** Envia os dados necessarios para cadastrar as propriedades.
- **GET - (/producer/:id_producer/farm) :** Envia o ID do produtor e retornar as propriedades vinculados ao mesmo.
- **GET - (/farm/showall) :**  Retorna todas as propriedades.

```

### Retornos das rotas PRODUCER

- GET **/Producer
```
[
  {
    "id": 23,
    "name": "Marcos Aurélio Sousa Gonçalves",
    "email": "marcosaureliolelo@outlook.com",
    "phone": "62993171921",
    "createdAt": "2021-02-05T13:42:59.690Z",
    "updatedAt": "2021-02-05T13:42:59.690Z"
  }
]
```

- POST **/Producer
```
{
  "id": 5,
  "name": "Lucas",
  "email": "Lucas@hotmail.com",
  "phone": "99 9999-9999",
  "updatedAt": "2021-02-03T19:08:57.650Z",
  "createdAt": "2021-02-03T19:08:57.650Z"
}
```

- PATCH **/Producer/:id
```
 - Produtor atualizado!
```

- DELETE **/Producer/:id
```
"Produtor deletado."
```

### Retornos das rotas FARM

- GET **/producer/:id_producer/farm

```
{
  "id": 14,
  "name": "Marcos Aurélio Sousa Gonçalves",
  "email": "marcosaureliolelo@outlook.com",
  "phone": "62993171921",
  "createdAt": "2021-02-04T22:30:49.227Z",
  "updatedAt": "2021-02-04T22:30:49.227Z",
  "farm_producer": [
    {
      "id": 9,
      "name_farm": "Times New ",
      "createdAt": "2021-02-04T22:37:22.260Z",
      "updatedAt": "2021-02-04T22:37:22.260Z",
      "id_producer": 14
    },
  ]
}

```

-POST **/producer/:id_producer/farm

```
}
  "id": 8,
  "name_farm": "Bahia",
  "id_producer": 5,
  "updatedAt": "2021-02-03T19:25:19.381Z",
  "createdAt": "2021-02-03T19:25:19.381Z"
}
```