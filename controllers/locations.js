import db from '../models/index.js';

export const getNearbyLaundry = async (req, res) => {
  try {
    db.sequelize
        .query(
            'SELECT id_laundry, address, latitude, longitude, photos_url, display_price, name, ' +
              'SQRT(POW(69.1 * (latitude - ('+ req.query.latitude +')), 2) +' +
              'POW(69.1 * ('+ req.query.longitude +' - longitude) * ' +
              'COS(latitude / 57.3), 2)) AS distance ' +
              'FROM laundries HAVING distance < 30 ORDER BY distance',
            {type: db.sequelize.QueryTypes.SELECT},
        ).then((data) => {
          res.status(200).send({message: "Retrieve Data Success", rows:data});
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message ||
                  'Some error occurred while retrieving nearby laundry.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
