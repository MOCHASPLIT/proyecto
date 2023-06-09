## Ejecutar sql
```
CREATE TABLE sortix83_guerrero.users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  password VARCHAR(100)
);

CREATE TABLE sortix83_guerrero.tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  description VARCHAR(255),
  status BOOLEAN,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## En la carpeta server
```
npm i
```
Configurar archivo .env
```
PORT = '3000'
SECRET_KEY = 'spUchLyibRA70isPewR#'
EXPIRES_KEY = '2d'

npm run ts
npm run js
```
## En la carpeta frontend
```
npm i
ng serve --o
```