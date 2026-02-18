

# ConverterFile - File Processing Utility

`converterFile` es una herramienta ligera y eficiente diseñada para la conversión y procesamiento de archivos. Este proyecto permite transformar datos entre diferentes formatos (como JSON, CSV, o formatos de texto) facilitando la interoperabilidad entre distintos sistemas o la preparación de datos para análisis.

## ✨ Características

* **Conversión Multi-formato**: Soporte para transformar archivos de entrada en diversos formatos de salida.
* **Procesamiento por Lotes**: Capacidad para manejar múltiples archivos de forma simultánea.
* **Interfaz Sencilla**: Diseñado para ser utilizado tanto como librería en otros proyectos como herramienta independiente.
* **Extensible**: Estructura de código preparada para añadir nuevos conversores o reglas de transformación fácilmente.

## 🛠️ Tecnologías

* **Node.js**: Entorno de ejecución principal.
* **TypeScript**: Para un desarrollo robusto con tipado estático.
* **File System (FS)**: Uso intensivo de las APIs de sistema de archivos para lectura y escritura eficiente.

## 🚀 Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/FranciscoBelda/converterFile.git
cd converterFile

```


2. **Instalar dependencias**:
```bash
npm install

```


3. **Compilar (si usas TypeScript)**:
```bash
npm run build

```



## 💻 Uso

Para utilizar el conversor, puedes ejecutar el comando principal pasando la ruta del archivo de origen y el formato de destino:

```bash
npm start -- --input ./datos/archivo.csv --output ./datos/archivo.json

```

*(Nota: Ajustar los comandos según la implementación específica del script principal).*

## 📂 Estructura del Proyecto

* **`/src/converters`**: Contiene la lógica específica para cada tipo de conversión (ej. `csvToJson.ts`).
* **`/src/models`**: Definición de las interfaces de datos.
* **`/test`**: Pruebas unitarias para asegurar que la integridad de los datos se mantiene tras la conversión.

## 🔧 Configuración

El proyecto permite configurar límites de tamaño de archivo y rutas por defecto a través de un archivo de configuración o variables de entorno:

* `MAX_FILE_SIZE`: Límite máximo del archivo a procesar.
* `OUTPUT_DIR`: Carpeta destino por defecto para los archivos convertidos.

---

**Autor:** [Francisco Belda](https://github.com/FranciscoBelda)

**Licencia:** MIT
