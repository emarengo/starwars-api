# Star Wars API - DynamoDB

API RESTful que permite gestionar personajes de Star Wars, con traducción al español de todos los campos y almacenamiento en DynamoDB.

## 🚀 Características

- CRUD completo de personajes de Star Wars
- Traducción automática de campos del inglés al español
- Validación de datos con Joi
- Documentación con Swagger/OpenAPI
- Tests unitarios
- Despliegue en AWS usando Serverless Framework
- TypeScript para mayor seguridad de tipos
- Arquitectura en capas

## 📋 Requisitos Previos

- Node.js (v18.x o superior)
- AWS CLI configurado con credenciales
- Cuenta de AWS
- Serverless Framework instalado globalmente (npm install -g serverless)

## 🛠️ Instalación

1. Clonar el repositorio:
```
git clone https://github.com/emarengo/starwars-api.git
cd starwars-api
```

2. Instalar dependencias:
```
npm install
```

3. Configurar variables de entorno:
```
cp .env.example .env
```

## 📦 Estructura del Proyecto
```
src/
├── config/         # Configuraciones (swagger, etc)
├── controllers/    # Controladores
├── middlewares/    # Middlewares
├── routes/         # Definición de rutas
├── services/      # Servicios
├── tests/         # Tests
└── types/         # Tipos TypeScript
```

## 🚀 Uso

### Desarrollo Local
```
npm run start
```

### Ejecutar Tests
```
npm test
```

### Desplegar en AWS
```
npm run deploy
```

## 📚 API Endpoints

### Personajes

#### GET /characters
- Obtiene todos los personajes
- Response: Array de personajes

#### GET /characters/{id}
- Obtiene un personaje por ID
- Response: Personaje individual

#### POST /characters
- Crea un nuevo personaje
- Body: Datos del personaje

Ejemplo de payload:
```
{
  "nombre": "Luke Skywalker",
  "añoNacimiento": "19 BBY",
  "colorOjos": "azul",
  "peliculas": [
    "Una Nueva Esperanza",
    "El Imperio Contraataca"
  ],
  "genero": "masculino",
  "colorPelo": "rubio",
  "altura": "172",
  "mundoNatal": "Tatooine",
  "peso": "77",
  "colorPiel": "claro",
  "especies": ["humano"],
  "navesEspaciales": ["X-wing"],
  "vehiculos": ["Landspeeder"]
}
```

#### PUT /characters/{id}
- Actualiza un personaje existente
- Body: Datos a actualizar

#### DELETE /characters/{id}
- Elimina un personaje
- Response: 204 No Content

## 📝 Campos Disponibles
```
| Campo Español | Campo Original | Tipo | Descripción |
|--------------|----------------|------|-------------|
| nombre | name | string | Nombre del personaje |
| añoNacimiento | birth_year | string | Año de nacimiento |
| colorOjos | eye_color | string | Color de ojos |
| peliculas | films | string[] | Películas donde aparece |
| genero | gender | string | Género del personaje |
| colorPelo | hair_color | string | Color de pelo |
| altura | height | string | Altura en cm |
| mundoNatal | homeworld | string | Planeta de origen |
| peso | mass | string | Peso en kg |
| colorPiel | skin_color | string | Color de piel |
| especies | species | string[] | Especies del personaje |
| navesEspaciales | starships | string[] | Naves pilotadas |
| vehiculos | vehicles | string[] | Vehículos utilizados |
```
## 🔐 Variables de Entorno
```
DYNAMODB_TABLE=my-characters-table
AWS_REGION=us-east-1
NODE_ENV=development
```

## 🧪 Testing

El proyecto incluye tests unitarios usando Jest:

# Ejecutar tests
```
npm test
```

# Ver cobertura
```
npm test -- --coverage
```

## 📖 Documentación

La documentación de la API está disponible en Swagger UI:
```
http://localhost:3000/api-docs
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (git checkout -b feature/AmazingFeature)
3. Commit tus cambios (git commit -m 'Add: nueva característica')
4. Push a la rama (git push origin feature/AmazingFeature)
5. Abre un Pull Request

## 👥 Autor

* Ernesto Marengo - [emarengo](https://github.com/emarengo)

## 🎉 Agradecimientos

* Star Wars API (SWAPI) por proporcionar los datos originales
* AWS por la infraestructura
* Comunidad de código abierto
