# BibliotecaAPI

API REST para controle de livros lidos, sendo lidos e na fila de leitura.

Inspirada na arquitetura do projeto [AgendaContatos](https://github.com/MuriloRVv2/AgendaContatos), mas:
- Proposta diferente: em vez de agenda de contatos, é um controle de leitura pessoal.
- Sem Thymeleaf: não há telas HTML server-side, tudo é exposto via endpoints REST (JSON).
- Sem tela de login/cadastro de usuário (foco no CRUD de livros).

## Stack
- Spring Boot 3.5.5
- Spring Web
- Spring Data JPA
- MySQL
- Lombok
- DevTools
- Bean Validation

## Como rodar

1. Crie o banco (ou deixe o `createDatabaseIfNotExist=true` do `application.properties` criar automaticamente):
   ```sql
   CREATE DATABASE biblioteca;
   ```
2. Ajuste usuário/senha do MySQL em `src/main/resources/application.properties` se necessário.
3. Rode:
   ```bash
   ./mvnw spring-boot:run
   ```

## Endpoints

| Método | Rota                    | Descrição                          |
|--------|-------------------------|-------------------------------------|
| GET    | /livros                 | Lista todos os livros               |
| GET    | /livros/{id}            | Busca um livro por id               |
| GET    | /livros/status/{status} | Filtra por status (QUERO_LER, LENDO, LIDO) |
| GET    | /livros/buscar?autor=   | Busca livros por autor (parcial)    |
| POST   | /livros                 | Cria um novo livro                  |
| PUT    | /livros/{id}            | Atualiza um livro existente         |
| DELETE | /livros/{id}            | Remove um livro                     |

### Exemplo de corpo (POST/PUT)
```json
{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien",
  "genero": "Fantasia",
  "anoPublicacao": 1954,
  "status": "LENDO",
  "avaliacao": 5
}
```
