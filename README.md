# Rick Explorer

Aplicación web (solo frontend) para explorar los personajes de Rick and Morty, guardar favoritos y escribir notas personales. Proyecto final integrador del curso de React.



## Capturas
![Personajes](docs/personajes.png)
![Detalle](docs/detalle.png)

## Caso y API
- **Caso A** · datos principales desde una API pública.
- **API:** [The Rick and Morty API](https://rickandmortyapi.com/documentation) (`/api/character`).
- **Persistencia (localStorage):** personajes guardados con su nota, y el tema claro/oscuro.

## Funcionalidades
- Listado de personajes con **búsqueda** (con debounce), **filtro por estado** y **paginación**.
- **Detalle** de personaje con ruta dinámica.
- **Guardar** personajes con una **nota**; editar la nota y eliminar.
- **Tema claro/oscuro** con Context API.
- Manejo de estados de carga, error y "sin resultados".

## Vistas y rutas
| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/personajes` | Lista de personajes |
| `/personajes/:id` | Detalle |
| `/guardados` | Guardados |
| `/acerca` | Acerca de |
| `*` | 404 |

## Tecnologías
React · Vite · React Router · Context API · Custom hooks (`useFetch`, `useLocalStorage`, `useDebounce`)

## Estructura
```
src/
├── components/   componentes de presentación
├── context/      TemaContext, GuardadosContext
├── hooks/        useFetch, useLocalStorage, useDebounce
├── pages/        una página por ruta (estado y lógica)
├── utils/        adaptar.js, constantes.js
└── App.jsx       rutas
```

## Cómo correrla
```bash
git clone https://github.com/TU_USUARIO/rick-explorer.git
cd rick-explorer
npm install
npm run dev
```

## Autor
Jensi Matos