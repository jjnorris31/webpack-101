# Webpack

Soluciona las precariedades del sistema de importación de funciones o variables entre módulos de JS.  Webpack traduce tu código a una forma en que el navegador lo entiende perfectamente a través de archivos estáticos.

### Conceptos clave

- **entry**: punto de entrada de la aplicación, por lo general es el archivo `index.js`.
- **output:** punto de salida de la aplicación, usualmente es la carpeta `dist`.
- **loader:** tunel por el cual pasarán todas las dependencias, se utilizan para pre procesar los archivos.
- **plugins:** son puntos de ejecución intermedios entre la entrada de los ficheros y la salida de webpack.
- **preset:** son un montón de reglas establecidas por defecto.

### Configuración del babel-loader

```json
module.exports = {
    module: {
        rules: [
            test: /\.js$/, // solo aplicará para los archivos que se indiquen aquí
						exclude : /node_modules/, // excluye estos archivos
						use: {
							loader: "babel-loader",
							options: {
								presets: ['@babel/preset-react']
							}
						}
        ]
    }
}
```

### Caching

Algunos servidores tienen una especie de caché activada por lo que al ejecutar un build, el nombre de los archivos estáticos tiene que ser diferentes, para esto existe `contenthash`.

```json
module.exports = {
    output: {
        filename: 'app.[contenthash].js' // insertará un hash único a nuestro archivo de salida
    },
    module: {
        rules: [
            jsRules
        ]
    },
}
```

### Configuración de HTMLWebpackPlugin

```json
module.exports = {
    output: {
        filename: 'app.[contenthash].js'
    },
    module: {
        rules: [
            jsRules
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 101',
            template: 'src/index.html' // toma una plantilla establecida por nosotros
        })
    ]
}
```

### Comandos útiles

```json
// retorna un archivo minimizado no óptimo para su lectura mientras se debuggea
npm run webpack --mode production

// retorna un archivo minimizado óptimo para su lectura mientras se debuggea
npm run webpack --mode development

/* se mantiene escuchando los cambios para hacer un build cada vez que se
modifica un archivo */
npm run webpack --mode development --watch
```