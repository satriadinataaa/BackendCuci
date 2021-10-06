import db from '../models/index.js';
const Laundries = db.laundries;

export const getAllLaundries = async (req, res) => {
  let limit = 0;
  let offset = 0;
  let search = '';

  if (req.query.limit) {
    limit = parseInt(req.query.limit);
  }
  if (req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query.search) {
    search = req.query.search;
  }
  let queryWhere = {
    order: [
      ['id_laundry', 'DESC'],
    ],
    limit: limit,
    offset: offset,
    where: {
      name: {
        [db.op.like]: '%'+search+'%',
      },
    },
    include: db.users,
  };

  if (limit == 0 && offset == 0 ) {
    queryWhere = {
      order: [
        ['id_laundry', 'DESC'],
      ],
      where: {
        name: {
          [db.op.like]: '%'+search+'%',
        },
      },
      include: {
        model: db.users,
        attributes: ['name', 'email', 'role'],
      },

    };
  }

  try {
    Laundries.findAndCountAll(queryWhere)
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message ||
                'Some error occurred while retrieving laundries.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const createLaundry = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  const laundry = {
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    display_price: req.body.display_price,
    photos_url: req.body.photos_url,
    contact_person: req.body.contact_person,
    user_id: req.body.user_id,
  };

  Laundries.create(laundry)
      .then((data) => {
        res.send({message: `Laundry ${laundry.name} created!`});
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message ||
          'Some error occurred while creating the Laundry.',
        });
      });
};

export const getLaundryById = async (req, res) => {
  try {
    Laundries.findByPk(req.params.id_laundry)
        .then((data) => {
          res.status(200).send({message: 'Retrieve Data Success', rows: data});
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message ||
            'Some error occurred while retrieving laundry.',
          });
        });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const deleteLaundryById = async (req, res) => {
  try {
    Laundries.destroy({
      where: {
        id_laundry: req.params.id_laundry,
      },
    });
    res.status(200).send({
      message: 'data deleted',
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateLaundryById = async (req, res) => {
  try {
    await Laundries.update(req.body, {
      where: {
        id_laundry: req.params.id_laundry,
      },
    });
    res.status(200).send({
      message: 'data updated',
    });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
