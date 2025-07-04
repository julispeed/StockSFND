
const db = require('../db/connetion');
const crearDeposito = (req, res) => {
  const {
    Nombre,
    Descripcion
  } = req.body;

  console.log('Datos recibidos:', req.body);

  const sql = `
    INSERT INTO Depositos 
    (Nombre, Descripcion)
    VALUES (?, ?)
  `;

  const values = [Nombre, Descripcion];
  console.log("Valores que se insertan:", values);


  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar Deposito:', err);
      return res.status(500).send(err);
    }

    res.status(201).json({ message: 'Deposito insertado', id: result.insertId });
  });
};

const obtenerDepositos = (req, res) => {
  const sql=`Select Nombre, IdDeposito from Depositos`;
  db.query(sql ,(err,result)=>{
    if (err) return res.status(500).send(err);
    res.json(result);
  })
}
module.exports = {
  crearDeposito,
  obtenerDepositos
};
