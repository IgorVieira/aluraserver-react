# NodeJS API em  es2015 


## Requisitos

 - Nodejs 4 ou superiores!
 - MongoDB instalado
 - Git


## Instalação

- Execute um git clone desse repositório:
  ```
    git clone https://github.com/IgorVieira/aluraserver-react.git
  ```

- Depois entre no terminal e rode o npm para instalar as dependências

  ```
   npm install
  ```

  ou

  ```
   sudo npm install
  ```

  Dependo do seu sistema operacional :p



## Uso

 - Para inicializar e ter algum dado, entre no seu terminal e rode o comando mongod para usar o CLI do seu MongoDB
 - Depois execute os seguintes comandos:

 ```
  use books //nome do database em questão
  db.authors.insert({"nome":"João","email":"joao@email.com","senha":"1234"}) //para inserir um autor
  db.authors.find() //para listar todos os autores

 ```

 - E por fim, em outro TERMINAL, rode o npm para inicializar e seja feliz estudando react =]

 ```
  npm start
 ```