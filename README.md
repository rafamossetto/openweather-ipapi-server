# Ip-Api + OpenWeather server

Challenge tecnico

## Instalacion

Use the package manager [npm](https://www.npmjs.com/)

```bash
# (En el directorio del repositorio)
npm install 
npm start
# Para correr los tests
npm test
```

## Instrucciones

```python
El servidor tiene cargadas 5 ciudades para probarse (texas, chicago, kansas, florida y manhattan)
estos se pueden ver en el archivo 'data.js' 
(si se desea, se puede cargar otra ciudad en este archivo colocando el nombre de la ciudad con su ip y los endpoints funcionarian igualmente)

## A continuacion se explicara cada endpoint del servidor 

# GET a /v1/location
Nos devuelve la informacion de Ip-Api de nuestra ubicacion

# GET a /v1/location?city=[city]
Nos devuelve la informacion de Ip-Api de la ciudad pasada por query, de las ya mencionadas arriba

# GET a /v1/current
Nos devuelve la informacion de Ip-Api de nuestra ubicacion y del clima actual segun OpenWeather

# GET a /v1/current[/city]
Nos devuelve la informacion de Ip-Api de la ciudad pasada por params y del clima actual segun OpenWeather

# GET a /v1/forecast
Nos devuelve la informacion de Ip-Api de nuestra ubicacion y estado del clima a 5 dias segun OpenWeather

# GET a /v1/forecast[/city]
Nos devuelve la informacion de Ip-Api de la ciudad pasada por params y del estado del clima a 5 dias segun OpenWeather
```
```
Nota: se incluyo el archivo .env con la Api Key de OpenWeather para poder probar el server correctamente
```
## Feature: Deployment

Se puede testear el servidor deployeado en Heroku desde el siguiente [link](https://ipapi-openweather-server.herokuapp.com/v1/location)
