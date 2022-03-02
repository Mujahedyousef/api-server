"use srtict"

class Collection {
    constructor(model) {
        this.model = model
    }
    async createRecord(obj) {
        try {
            return this.model.create(obj)
        } catch (e) {
            console.error('error in creating a new record for model: ', this.model.name);
        }
    }

    async readRecord(id) {
        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } })
            } else {
                return await this.model.findAll();
            }
        } catch (e) {
            console.error('error in reading record(s) for model: ', this.model.name);
        }
    }

    async updateRecord(obj, id) {

        try {
            if (obj.id) {
                return await this.model.update(obj, { where: { id: id }, returning: true })
            }

        } catch (e) {
            console.error('error in reading record and orders for model: ', this.model.name);
        }
    }

    async deleteRecord(id) {

        try {
            if (id) {
                return await this.model.destroy({ where: { id: id } })
            }

        } catch (e) {
            console.error('error in reading record and orders for model: ', this.model.name);
        }
    }

}

module.exports = Collection;





