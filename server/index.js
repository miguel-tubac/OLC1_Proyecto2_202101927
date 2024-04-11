const app = require('./app.js');

const PORT = 4000;//este puerte tiene que ser distinto al frontend
app.listen(PORT);
console.log(`Server en: http://localhost:${PORT}`);