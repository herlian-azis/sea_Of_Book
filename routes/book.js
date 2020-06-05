const routes = require('express').Router();
const BookControlelr = require('../controllers/BookController');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './downloads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +'.pdf')
  }
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      !file.mimetype.includes("pdf")
    ) {
      return cb(null, false, new Error("Only pdf are allowed"));
    }
    cb(null, true);
  }
});

routes.get('/',BookControlelr.listBooks);
routes.get('/form',BookControlelr.addBook);
routes.post('/form',upload.single('fileUpload'),BookControlelr.addBookPost);
routes.get('/downloads/:filename',BookControlelr.download);
routes.get('/detail/:id',BookControlelr.detail);



module.exports = routes;