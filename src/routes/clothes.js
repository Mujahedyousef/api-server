'use strict'
const express = require('express')
const router = express.Router()
const { clothesCollection } = require('../models/index')

router.get('/clothes', getClothes)
router.post('/clothes', addClothes)
router.get('/clothes/:id', getClothesById)
router.put('/clothes/:id', updateClothesById)
router.delete('/clothes/:id', deleteClothesById)


async function getClothes(req, res) {
    let allClothes = await clothesCollection.readRecord()
    res.status(200).json(allClothes)
}

async function addClothes(req, res) {
    let newClothes = req.body;
    const createColthes = await clothesCollection.createRecord(newClothes)
    res.status(201).json(createColthes)
}

async function getClothesById(req, res) {
    let getId = parseInt(req.params.id)
    let getClothesById = await clothesCollection.readRecord(getId)
    res.status(200).json(getClothesById)
}

async function updateClothesById(req, res) {
    let getIdToUpdate = parseInt(req.params.id);
    let dataUpdateInBody = req.body;
    let updateData = await clothesCollection.updateRecord(dataUpdateInBody, getIdToUpdate)
    res.status(201).json(updateData)
}

async function deleteClothesById(req, res) {
    let getIdToDelete = parseInt(req.params.id);
    let deleteClothesById = await clothesCollection.deleteRecord(getIdToDelete)
    res.status(204).json(deleteClothesById)
}


module.exports = router;