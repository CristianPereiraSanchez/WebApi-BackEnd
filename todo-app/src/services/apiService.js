const apiService = {
    baseUrl: 'https://localhost:7155/api', // Ajusta si tu backend está en otro puerto
    token: null,

    // LOGIN corregido (envía NombreUsuario y Contrasena)
    login: async (username, password) => {
        const response = await fetch(`${apiService.baseUrl}/Account/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                NombreUsuario: username,
                Contrasena: password
            })
        });

        if (!response.ok) {
            let errorMessage = 'Error de login';
            try {
                const errorData = await response.json();
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                }
            } catch (error) {
                console.error('Error al interpretar la respuesta:', error);
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        apiService.token = data.token;
        return {
            user: { username, role: 'User' }, // Ajusta si tu backend devuelve más info del usuario
            token: data.token
        };
    },

    // OBTENER TAREAS
    getTasks: async () => {
        const response = await fetch(`${apiService.baseUrl}/Assignments`, {
            headers: { 'Authorization': `Bearer ${apiService.token}` }
        });

        if (!response.ok) throw new Error('Error al obtener tareas');

        const data = await response.json();

        // Mapear campos del backend al frontend
        return data.map(t => ({
            id: t.id,
            name: t.titulo,
            description: t.descripcion,
            status: t.estadoId
        }));
    },

    // CREAR TAREA
    createTask: async (task) => {
        const response = await fetch(`${apiService.baseUrl}/Assignments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiService.token}`
            },
            body: JSON.stringify({
                Titulo: task.Titulo,
                Descripcion: task.Descripcion,
                EstadoId: task.EstadoId ?? 0,
                CategoriaId: 1 // Puedes cambiar esto si agregas selección de categoría
            })
        });

        if (!response.ok) throw new Error('Error al crear tarea');

        const data = await response.json();

        return {
            id: data.id,
            name: data.Titulo,
            description: data.Descripcion,
            status: data.EstadoId
        };
    },

    // ACTUALIZAR TAREA
    updateTask: async (id, task) => {
        const response = await fetch(`${apiService.baseUrl}/Assignments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiService.token}`
            },
            body: JSON.stringify({
                Titulo: task.Titulo,
                Descripcion: task.Descripcion,
                EstadoId: task.EstadoId,
                CategoriaId: 1
            })
        });

        if (!response.ok) throw new Error('Error al actualizar tarea');

        return {
            id,
            name: task.Titulo,
            description: task.Descripcion,
            status: task.EstadoId
        };
    },

    // ELIMINAR TAREA
    deleteTask: async (id) => {
        const response = await fetch(`${apiService.baseUrl}/Assignments/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${apiService.token}` }
        });

        if (!response.ok) throw new Error('Error al eliminar tarea');
        return true;
    }
};

export default apiService;

