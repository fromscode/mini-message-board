#! /usr/bin/env node

const { Client } = require('pg');

const query = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR(30),
    message VARCHAR(200),
    date TIMESTAMPTZ
);

INSERT INTO messages (author, message, date) VALUES
('Armando', 'Hi There!', NOW()), ('Charles', 'Hello World!', NOW());
`

const db_uri = process.argv[2];

async function main() {
    const client = new Client({
        connectionString: db_uri
    });
    try {
        await client.connect();
        await client.query(query);
        console.log(`Query executed successfully`);
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.end();
    }
}

main();