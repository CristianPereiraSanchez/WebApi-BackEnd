# TodoApi

Este proyecto es una **Web API construida con ASP.NET Core** que permite gestionar tareas (todos) con autenticación, separación por capas y buenas prácticas de desarrollo.

## Estructura del proyecto 

TodoApi/
│
├── Controllers/              # Controladores (endpoints HTTP)
├── Data/                     # Contexto de la base de datos (ApplicationDbContext)
├── DTOs/                     # Data Transfer Objects (entradas y salidas de datos)
├── Enums/                    # Enumeraciones usadas en la lógica
├── Migrations/               # Migraciones de Entity Framework Core
├── Models/                   # Entidades del dominio
├── Services/                 # Lógica de negocio
├── appsettings.json          # Configuración de la aplicación
├── Program.cs                # Configuración y arranque de la app
├── README.md                 # Este archivo
├── TodoApi.http              # Pruebas de endpoints
└── WeatherForecast.cs        # (Ejemplo por defecto de proyecto .NET, se puede eliminar)

## Funcionamiento general

- Los usuarios deben registrarse y autenticarse con JWT.
- Una vez autenticados, pueden crear, ver, actualizar y eliminar tareas.
- Las tareas pueden tener estados, prioridades u otras propiedades según los modelos definidos.
- El backend sigue una arquitectura por capas para facilitar el mantenimiento y escalabilidad.

## Endpoints principales
# Usuarios

Método	Ruta	Descripción
POST	/api/auth/register	Registrar nuevo usuario
POST	/api/auth/login	Iniciar sesión y obtener token

# Tareas (Todos)
Método	Ruta	Descripción
GET	/api/tareas	Obtener todas las tareas del usuario
GET	/api/tareas/{id}	Obtener una tarea específica
POST	/api/tareas	Crear una nueva tarea
PUT	/api/tareas/{id}	Actualizar una tarea existente
DELETE	/api/tareas/{id}	Eliminar una tarea

## Diagrama Entidad Relación
![image](https://github.com/user-attachments/assets/c10dfb06-4e92-49bd-a487-061f66c490ac)
