const app = require('./src/app');
const PORTA = process.env.PORTA;

app.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))