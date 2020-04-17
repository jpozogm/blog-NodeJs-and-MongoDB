creo archivo config.js

1- para extraer la ruta URL a la base de datos.

    En index.js cambio:

    - const config = require('./config');
      const url = config.db;

    -  app.listen(config.port, () => console.log(`Server started in port ${config.port}`));
