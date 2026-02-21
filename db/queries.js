const pool = require('./pool');

async function getMessages() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
}

async function addMessage(author, message) {
    await pool.query(`INSERT INTO messages (author, message, date) VALUES ($1, $2, NOW())`, [
        author, message
    ]);
}

async function getMessage(id) {
    const { rows } = await pool.query('SELECT * FROM messages WHERE ID = $1', [id]);
    return rows;
}

module.exports = {
    getMessages,
    addMessage,
    getMessage
}