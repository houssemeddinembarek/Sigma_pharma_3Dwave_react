'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles, finOne} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);
router.get('/:id', finOne);


module.exports = {
    routes: router
}