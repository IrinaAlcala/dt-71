const Puppy = require('../../models/puppy');

const index = (req, res) => {
  Puppy.find({}).then( (puppies) => {
    res.status(200).json(puppies);
  });
};

const show = (req, res) => {
  Puppy.findById(req.params.id).then( (puppy) => {
    res.status(200).json(puppy)
  });
};

const create = (req, res) => {
  Puppy.create(req.body).then( (puppy) => { 
    res.status(201).json(puppy);  
  });
};

const update = (req, res) => {
  Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true }).then( (puppy) => {
    res.status(200).json(puppy);
  });
};

const deleteOne = (req, res) => {
  Puppy.findByIdAndRemove(req.params.id).then( (puppy) => {
    res.status(200).json(puppy);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteOne
};
