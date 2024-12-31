const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 8081;

// Endpoint para verificar el estado de la API
app.get('/status', (req, res) => {
  res.json({ status: 'API corriendo', version: '1.0.0' });
});

// Endpoint para ejecutar el script de K6
app.get('/run-test-1', (req, res) => {
  const command = 'docker exec -it pam-integration-tests-services_k6_1 k6 run /scripts/script1.js';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error ejecutando K6: ${error.message}`);
      return res.status(500).json({ error: 'Error ejecutando K6' });
    }

    if (stderr) {
      console.error(`Error en K6: ${stderr}`);
      return res.status(500).json({ error: 'Error en K6', details: stderr });
    }

    console.log(`Resultados de K6:\n${stdout}`);
    res.json({ message: 'Prueba ejecutada con éxito', results: stdout });
  });
});

// Iniciar la API
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
