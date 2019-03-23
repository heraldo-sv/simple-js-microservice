# Simple JS MicroService
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://github.com/nodejs/node"><img src="https://img.shields.io/badge/nodejs-v10.15.1-green.svg" alt="NodeJS Version" /></a>
<a href="https://github.com/nestjs/nest"><img src="https://img.shields.io/badge/nestjs-v5.4.0-red.svg" alt="NestJS Version" /></a>

Microservicio JS para consumo de peticiones REST, construido con [NestJS](https://github.com/nestjs/nest) framework + TypeScript + NodeJS


### Instalación

```bash
$ npm install
```

### Ejecución

```bash
# Desarrollo
$ npm run start

# Certificación
$ npm run start:dev

# Producción
$ npm run start:prod
```

### Consumo
Estructura para peticiones: _[host:port/controller/param](#)_

##### POST & PUT

- url
    ```url
    host:3000/message/1
   ```
- Body
    ```json
    {
        "nick"    : "Heraldo",
        "message" : "heraldo_delvalle"
    }
    ```
> POST & PUT requieren un objeto {JSON} serializado, pero únicamente PUT requiere un identificador (id) como parámetro para actualizar.

##### GET & DELETE

- url
    ```url
    host:3000/message/1
   ```
- Body
    ```json
    { }
    ```
> GET & DELETE no requieren un objeto {JSON} serializado, pero únicamente DELETE requiere un identificador (id) como parámetro para eliminar.