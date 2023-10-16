# API ivipcoin

<div align="center">
   <img src="https://media.licdn.com/dms/image/D4D0BAQFtE2A8AEHnvg/company-logo_200_200/0/1685972247560?e=2147483647&v=beta&t=7B8bDq_bSJKAGb5930kDDYXGpW5sUer7RP-X-5m6R-k" alt="Ivipcoin" width="250" height="250"/>
</div>

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
    - [Instalando Dependências](#21-instalando-dependências)
    - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
    - [Scripts](#23-scripts)
- [Endpoints](#3-endpoints)
- [Desenvolvedores](#4-desenvolvedores)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Cors](https://www.npmjs.com/package/cors)
- [Firebase](https://www.npmjs.com/package/firebase)
- [Firebase-admin](https://www.npmjs.com/package/firebase-admin)
- [Cross-env](https://www.npmjs.com/package/cross-env)

A URL base da aplicação: 

---

## 2. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
npm install
```

### 2.2. Variáveis de Ambiente
IMPORTANTE: O repositório já está com variáveis de ambiente referentes à um projeto Firebase criado pelo desenvolvedor, então não há necessidade de substituí-las para a aplicação funcionar, isso foi feito para facilitar do avaliador não precisar criar um novo projeto Firebase, porém, como desenvolvedor, sei que é má prática deixar dados sensíveis disponíveis no repositório, então o ideal seria deixar o arquivo **.env** dentro do **.gitignore** e as variáveis serem preenchidas de forma manual localmente e no deploy.

Se fosse utilizada as boas práticas retratadas anteriormente seria necessário a criação de um projeto Firebase (https://console.firebase.google.com/), e no mesmo criar um banco de dados Firestore e criada também ativar a autenticação de email e senha. Após feito esses passos seria necessário criar um arquivo **.env**, copiando o formato do arquivo **.env.example** e preencher as variáveis de ambiente referentes ao firebaseConfig que está presente nas configurações do projeto Firebase.

### 2.3. Scripts

Executar aplicação em ambiente de desenvolvimento:

```
npm run dev
```

---

## 3. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [User](#1-User)
- [Tasks](#2-Tasks)

---

## 1. **User**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST | /user | Criação de um usuário.|
| POST | /user/login | Autentica o usuário para ter acesso ao sistema. |

---

### 1.1. **Criação de Usuário**

### `POST/user`

### Exemplo de Request:
```
POST /user
Host: 
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:
```json
{
	"name": "user",
	"email": "user@mail.com",
	"password": "User@1234"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"uid": "XwctJMsBE1Sm3HRVuypzpJ2Dvxt1",
	"email": "user@mail.com",
	"emailVerified": false,
	"displayName": "user",
	"isAnonymous": false,
	"providerData": [
		{
			"providerId": "password",
			"uid": "user@mail.com",
			"displayName": "user",
			"email": "user@mail.com",
			"phoneNumber": null,
			"photoURL": null
		}
	],
	"stsTokenManager": {
		"refreshToken": "AMf-vBwPYoiqhV7ANyMEpDTea07eFAcsD64oJHUzPFotTdnvrZ2DY44dyjEz5nrq8vW_iQRppokrTaATfCwdSjDDHv-wuoIwA8MR9nT2FPSzGHE69b_cJ_YIu3M6SQevIxjMhjncodh9J7fBiCfngePYi2dJNZycaC3wzs0tt0ndh3ZVTvfc8UEMtG_ZMfwBtujjjBfXshnQc6fv8S3SRbcHKSujtjFfww",
		"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG8tZG8tbGlzdC1jODMxYyIsImF1ZCI6InRvLWRvLWxpc3QtYzgzMWMiLCJhdXRoX3RpbWUiOjE2OTc0NjYzODgsInVzZXJfaWQiOiJYd2N0Sk1zQkUxU20zSFJWdXlwenBKMkR2eHQxIiwic3ViIjoiWHdjdEpNc0JFMVNtM0hSVnV5cHpwSjJEdnh0MSIsImlhdCI6MTY5NzQ2NjM4OCwiZXhwIjoxNjk3NDY5OTg4LCJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidXNlckBtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.IO734zhrwbJNrEh7YjqpGufsDSxrmCl9Urne-bVoOFG4M59Amdv8Z-BZG3GJoTRnen0VhnqqmQRuhQ5dqWMVa0DL7lMhpkzDYIflgq0onES9Is2L5qJna6hG-A6PMeMD33sv9Y-X81ni-rnUVIHshAzpOCmaPPcCWEwBq2qdV9betWSnCUrlffWuIfz_Ud3N1h2PDpytFdkA-NJrL5rBEOti6jbpmbNQhms5qNC2OlZIn25OHppmaemAc9cWJgtX_XguQR6kIEXgMMZsgkilGxBjreFrVfVWdMOuqTNqPSXsbGXLDkheCnBp8OIAhEgL4N9N7RbZfo5Kymesl7YY9Q",
		"expirationTime": 1697469991030
	},
	"createdAt": "1697466388175",
	"lastLoginAt": "1697466388175",
	"apiKey": "AIzaSyC9FsYu5RxXsEc5ZxfDsN2ZJ14V3gctAMI",
	"appName": "[DEFAULT]"
}
```
Essa resposta é padrão do firebase/auth, para essa aplicação algumas das informação que este pacote oferece não vão ser utilizadas.

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 Bad Request | Email existente - Email obrigatório - Senha obrigatória. | 

---

### 1.2. **Login do Usuário**

### `POST/user/login` 

### Exemplo de Request:
```
POST/user/login
Host: 
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"email": "user@mail.com",
	"password": "User@1234"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"uid": "XwctJMsBE1Sm3HRVuypzpJ2Dvxt1",
	"email": "user@mail.com",
	"emailVerified": false,
	"displayName": "user",
	"isAnonymous": false,
	"providerData": [
		{
			"providerId": "password",
			"uid": "user@mail.com",
			"displayName": "user",
			"email": "user@mail.com",
			"phoneNumber": null,
			"photoURL": null
		}
	],
	"stsTokenManager": {
		"refreshToken": "AMf-vBzOV4Uq47YOq_pDFeuWwcMcikNbdYKQHGlW1pFclpj2OmMNiQ1kAQPJpYrmzDuBAQQNmo_hr1Tl2HKTkYneqUnc1Fb_-9YLbw4MOIkPxAYDBPvZyEX9pfQZqdUkp40Ol9ld4zLgjalLXgYQKfwlAR3eNOsSKOEZMwBALekX5saIrkc6HKZAWuA0bHjJ5lFZtmQfVdjbz9mZfDN09g2bFDtLe7uRZA",
		"accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoidXNlciIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90by1kby1saXN0LWM4MzFjIiwiYXVkIjoidG8tZG8tbGlzdC1jODMxYyIsImF1dGhfdGltZSI6MTY5NzQ2NzEzMywidXNlcl9pZCI6Ilh3Y3RKTXNCRTFTbTNIUlZ1eXB6cEoyRHZ4dDEiLCJzdWIiOiJYd2N0Sk1zQkUxU20zSFJWdXlwenBKMkR2eHQxIiwiaWF0IjoxNjk3NDY3MTMzLCJleHAiOjE2OTc0NzA3MzMsImVtYWlsIjoidXNlckBtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyQG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Hutd28wbePxWuXRCs09HJRGP2v2-jX0DvBdyT3BfxgehdCn7T10RgM_yIwJYLwL55Z2WTloFJXQsztBtr-ddU2uLeTCYHahD3QGhhdsaCBh6S_c5GM71w4EN3uP2s_ouub_FF8tslcrHtJNN0qEv9qOxvHinmlKTYja2JIQVs3EVUZKLeQAXK1iOeYqdemuduS0sfOo7P0XqYgx3TtF76XtM6_XN_V-BZvuoJRA_xQZmzV8K2-LSC-jTcQ2w5mk6C2TZ8tQjAza47e0Q4jZT1lULWhuBVDhyft_QKc7oKOvtt7wEJr7X1N4ivOgkHzYUxc3cpmUpbCnSV31IRMDELA",
		"expirationTime": 1697470736140
	},
	"createdAt": "1697466388175",
	"lastLoginAt": "1697467133466",
	"apiKey": "AIzaSyC9FsYu5RxXsEc5ZxfDsN2ZJ14V3gctAMI",
	"appName": "[DEFAULT]"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 Bad Request | Email obrigatório - Senha obrigatória. |
| 401 Unauthorized | Email ou senha não correspondem. |

---

## 2. **Tasks**
[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método   | Rota       | Descrição                               |
|----------|------------|-----------------------------------------|
| POST | /tasks | Cria tarefas. |
| GET | /tasks | Lista tarefas. |
| PATCH | /tasks/:id | Atualiza os dados de uma tarefa. |
| DELETE | /tasks/:id | Exclui uma tarefa. |

### 2.1. **Criação de tarefa**

### `POST/task`

### Exemplo de Request:
```
POST/tasks
Host: 
Authorization: Bearer Token
Content-type: application/json
```

### Exemplo de Corpo da Requisição:
```json
{
	"title": "Fazer exercício",
	"description": "ir à academia as 18:00 horas"
}
```

### Exemplo de Response:
```
201 Created
```

```json
{
	"id": "oFmTdasVVMFvTTpsWVd4",
	"title": "Fazer exercício",
	"description": "ir à academia as 18:00 horas",
	"owner": {
		"user_id": "XwctJMsBE1Sm3HRVuypzpJ2Dvxt1",
		"username": "user"
	},
	"created_at": "2023-10-16T14:45:59.944Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 Bad Request | Título obrigatório - Descrição Obrigatória. |
| 401 Unauthorized | Invalid token. |

---

### 2.2. **Listar tarefas**

### `GET/tasks` 

### Exemplo de Request:
```
GET/tasks
Host: 
Authorization: Bearer Token
Content-type: none
```
### Exemplo de Response:
```
200 OK
```

```json
[
	{
		"id": "RADcxDPeaNtCrEQLhkJ6",
		"owner": {
			"user_id": "fY8IADlvGRezJzcv9Vo6ihGVi1q1",
			"username": "Wesley Matos"
		},
		"description": "Documentar código",
		"created_at": "2023-10-16T13:10:20.189Z",
		"title": "Terminar Backend"
	},
	{
		"id": "oFmTdasVVMFvTTpsWVd4",
		"owner": {
			"user_id": "XwctJMsBE1Sm3HRVuypzpJ2Dvxt1",
			"username": "user"
		},
		"description": "ir à academia as 18:00 horas",
		"created_at": "2023-10-16T14:45:59.944Z",
		"title": "Fazer exercício"
	}
]
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token. |

---

### 2.3. **Editar tarefa**

### `PATCH/tasks/:id` 

### Exemplo de Request:
```
PATCH/tasks/oFmTdasVVMFvTTpsWVd4
Host: 
Authorization: Bearer Token
Content-type: application/json
```
### Exemplo de Response:
```
200 OK
```

```json
{
	"id": "oFmTdasVVMFvTTpsWVd4",
	"title": "Fazer exercício",
	"description": "ir à academia as 19:30 horas"
}
```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 400 Bad Request | Título obrigatório - Descrição Obrigatória. |
| 401 Unauthorized | Invalid token. |

---

### 2.4. **Deletar tarefa**

### `DELETE/tasks/:id` 

### Exemplo de Request:
```
DELETE/tasks/oFmTdasVVMFvTTpsWVd4
Host: 
Authorization: Bearer Token
Content-type: none
```
### Exemplo de Response:
```
204 No content
```

```json

```

### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 401 Unauthorized | Invalid token. |

---

## 4. Desenvolvedores
[ Voltar para o topo ](#tabela-de-conteúdos)


[<img src="https://avatars.githubusercontent.com/u/104766684?v=4" width=115><br><sub>Wesley Matos</sub>](https://github.com/wesleydematos) 
