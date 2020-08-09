/*
 * By J. Salem AFFA
 * 
 * This module export generateModel() function as default
 * generateModel() allows you to generate a MongoDb Model from a 'name' and an 'object'
 * 
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

function generateModel(name, value) {
    const correspond = {
        String: String,
        Number: Number,
        Boolean: Boolean,

    };

    const schemaParams = {};

    for (let attr in value) {
        schemaParams[attr] = correspond[value[attr]];
    }

    const schema = new Schema(schemaParams);
    const model = mongoose.model(name, schema);

    return model;
}

export default generateModel;