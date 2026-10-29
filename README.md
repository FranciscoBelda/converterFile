# Conversor de Datos API The Movie Database (TMDb) 🎬🍿

Este proyecto demuestra cómo consumir la API REST de **The Movie Database (TMDb)**, procesar la respuesta con información de películas y series, y estructurar/convertir los datos mapeados en formato JSON listo para su almacenamiento, exportación o consumo desde otras aplicaciones.

## 🎯 Objetivos del Proyecto

* **Consumo de la API de TMDb:** Conexión mediante HTTP utilizando claves de API (API Key / Bearer Token).
* **Mapeo de Datos:** Conversión de las respuestas JSON originales a objetos/modelos de datos internos.
* **Procesamiento y Filtrado:** Selección de atributos clave (título, sinopsis, puntuación, géneros, imágenes, fecha de estreno).
* **Exportación y Formateo JSON:** Serialización personalizada de los datos a archivos `.json` estructurados o almacenamiento en base de datos.

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** Java / JavaScript (Node.js) / Python *(según implementación)*.
* **Librerías de Procesamiento JSON:** Jackson / Gson / `JSON.stringify` / `json` módulo.
* **Cliente HTTP:** Axios / Fetch API / HttpClient / RestTemplate.
* **API Externa:** [The Movie Database (TMDb) API v3/v4](https://developer.themoviedb.org/).

## 🔑 Configuración del Entorno

1. Registrarse en [TMDb](https://www.themoviedb.org/) y solicitar una clave de API.
2. Crear un archivo de variables de entorno `.env` (o `application.properties` en caso de Java/Spring Boot):

```env
TMDB_API_KEY=tu_api_key_aqui
TMDB_BASE_URL=https://api.themoviedb.org/3
```

## 🔄 Flujo de Datos

```
[API TMDb] ---> (Petición HTTP) ---> [Servicio / Parser] ---> (Mapeo & Serialización) ---> [Archivo .json Final]
```

1. **Obtención:** Se realiza una petición a endpoints como `/movie/popular`, `/search/movie` o `/movie/{movie_id}`.
2. **Transformación:** Se seleccionan únicamente los campos requeridos y se formatean fechas o URLs completas de las imágenes (usando `https://image.tmdb.org/t/p/w500`).
3. **Conversión:** Se serializa el objeto transformado en una cadena/fichero JSON legible y formateado (*pretty print*).

## 📊 Ejemplo de Salida JSON Generado

```json
{
  "total_resultados": 1,
  "peliculas": [
    {
      "id": 550,
      "titulo": "Fight Club",
      "resumen": "Un empleado de oficina insomne y un fabricante de jabón desocupado forman un club de lucha subterráneo...",
      "puntuacion": 8.4,
      "fecha_estreno": "1999-10-15",
      "poster": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B1yA9Z4y3fA.jpg"
    }
  ]
}
```

## 🚀 Ejecución del Proyecto

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd tmdb-json-converter
   ```
2. Instalar dependencias según el lenguaje empleado.
3. Ejecutar el script/servicio principal para procesar las películas y generar los archivos JSON.

## 👨‍💻 Autor

Creado por **Francisco Belda**.

Aprende más sobre APIs REST, consumo de servicios y desarrollo web en su canal de YouTube:

👉 [Canal de YouTube de Francisco Belda](https://www.youtube.com/@franciscobelda)
