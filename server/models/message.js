const pool = require('../db');

exports.getAll = async () => {
  const messages = await pool.query('SELECT * FROM messages;');
  return messages.rows;
};

exports.post = async (msg) => {
  const message = await pool.query(`INSERT INTO messages (contenido, usuario, hora) VALUES ('${msg.}content', ${msg.authorId}, 1588826917073) RETURNING *;`);
  //const message = await pool.query(`INSERT INTO messages (contenido, usuario, hora) VALUES ('${msg.content}', ${msg.authorid}, TO_TIMESTAMP(${Date.now() / 1000})) RETURNING *;`);
  return message.rows;
};
// authorId: DataTypes.BOOLEAN,
// content: DataTypes.STRING,
// timestamp: DataTypes.DATE