'use strict'
const express = require('express')
const { foodCollection } = require('../models/index.js')
const router = express.Router()

router.get('/food', getFood)
router.post('/food', addFood)
router.get('/food/:id', getFoodById)
router.put('/food/:id', updateFoodById)
router.delete('/food/:id', deleteFoodById)


async function getFood(req, res) {
    let allFood = await foodCollection.readRecord();
    res.status(200).json(allFood)
}

async function addFood(req, res) {
    let newFood = req.body;
    const createFood = await foodCollection.createRecord(newFood);
    res.status(201).json(createFood)
}

async function getFoodById(req, res) {
    let getId = parseInt(req.params.id)
    let getFoodById = await foodCollection.readRecord(getId)
    res.status(200).json(getFoodById)
}

async function updateFoodById(req, res) {
    let getIdToUpdate = parseInt(req.params.id)
    let dataUpdateInBody = req.body
    let updateDataFood = await foodCollection.updateRecord(dataUpdateInBody, getIdToUpdate)
    res.status(201).json(updateDataFood)
}

async function deleteFoodById(req, res) {
    let getIdToDelete = parseInt(req.params.id)
    let deleteFoodById = await foodCollection.deleteRecord(getIdToDelete)
    res.status(204).json(deleteFoodById)
}


module.exports = router