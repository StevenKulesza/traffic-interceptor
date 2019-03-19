const express = require('express');
const mongoose = require('mongoose');
const Parameters = require('../models/params.model');


exports.create_parameter_set = (data) => {
    console.log(data)
    return new Promise(function (resolve, reject) {
        Parameters.find({
                name: data.name
            })
            .exec()
            .then(parameters => {
                const newParameters = new Parameters({
                    _id: new mongoose.Types.ObjectId(),
                    name: data.name,
                    parameters: data
                });
                //save the user to the database
                newParameters
                    .save()
                    .then(result => {
                        console.log('Parameter set created');
                        console.log(newParameters);
                        resolve(newParameters);
                    })
                    .catch(reject('Could not save parameters.'));
            })
            .catch(reject('Could not find parameters.'));
    })
}