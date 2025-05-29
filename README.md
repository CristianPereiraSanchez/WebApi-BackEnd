# TodoApi

Este proyecto es una **Web API construida con ASP.NET Core** que permite gestionar tareas (todos) con autenticación, separación por capas y buenas prácticas de desarrollo.

## Estructura del proyecto 

TodoApi/
- │
- ├── Controllers/              # Controladores (endpoints HTTP)
- ├── Data/                     # Contexto de la base de datos (ApplicationDbContext)
- ├── DTOs/                     # Data Transfer Objects (entradas y salidas de datos)
- ├── Enums/                    # Enumeraciones usadas en la lógica
- ├── Migrations/               # Migraciones de Entity Framework Core
- ├── Models/                   # Entidades del dominio
- ├── Services/                 # Lógica de negocio
- ├── appsettings.json          # Configuración de la aplicación
- ├── Program.cs                # Configuración y arranque de la app
- ├── README.md                 # Este archivo
- ├── TodoApi.http              # Pruebas de endpoints
- └── WeatherForecast.cs        # (Ejemplo por defecto de proyecto .NET, se puede eliminar)

## Funcionamiento general

- Los usuarios deben registrarse y autenticarse con JWT.
- Una vez autenticados, pueden crear, ver, actualizar y eliminar tareas.
- Las tareas pueden tener estados, prioridades u otras propiedades según los modelos definidos.
- El backend sigue una arquitectura por capas para facilitar el mantenimiento y escalabilidad.

## Endpoints principales
# Usuarios

Método	Ruta	Descripción
- POST	/api/auth/register	Registrar nuevo usuario
- POST	/api/auth/login	Iniciar sesión y obtener token

# Tareas (Todos)
- Método	Ruta	Descripción
- GET	/api/tareas	Obtener todas las tareas del usuario
- GET	/api/tareas/{id}	Obtener una tarea específica
- POST	/api/tareas	Crear una nueva tarea
- PUT	/api/tareas/{id}	Actualizar una tarea existente
- DELETE	/api/tareas/{id}	Eliminar una tarea

## Endpoints Principales
 Todos los endpoints (excepto register y login) requieren autenticación con JWT.

## Autenticación

POST /api/account/register

Registra un nuevo usuario.

{
  "username": "usuario1",
  "email": "usuario@email.com",
  "password": "Password123!"
}

POST /api/account/login

Inicia sesión y devuelve un token JWT.

{
  "username": "usuario1",
  "password": "Password123!"
}

Respuesta:

{ "token": "eyJhbGciOi..." }

Gestión de Tareas

GET /api/tareas

Obtiene las tareas del usuario autenticado.

POST /api/tareas

Crea una nueva tarea.

{
  "titulo": "Estudiar para el examen",
  "descripcion": "Matemáticas y Física",
  "estado": "Pendiente"
}

PUT /api/tareas/{id}

Actualiza una tarea por ID.

DELETE /api/tareas/{id}

Elimina una tarea por ID.

## Gestión de Categorías

GET /api/categorias

Lista todas las categorías.

POST /api/categorias

Crea una nueva categoría.

{
  "nombre": "Trabajo"
}

Autenticación JWT

Para acceder a los endpoints protegidos:

Inicia sesión con /api/account/login.

Copia el token recibido.

En Swagger, haz clic en "Authorize" y pega:

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...

O en Postman, usa el header:

Authorization: Bearer TU_TOKEN

 Ejecución del Proyecto

Clona el repositorio:

git clone https://github.com/tu-usuario/TodoApp.git

Configura la cadena de conexión en appsettings.json.

Ejecuta las migraciones:

dotnet ef database update

Inicia el servidor:

dotnet run

## Diagrama Entidad Relación
![image](https://github.com/user-attachments/assets/c10dfb06-4e92-49bd-a487-061f66c490ac)
