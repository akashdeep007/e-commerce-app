const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/flipmarket', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
