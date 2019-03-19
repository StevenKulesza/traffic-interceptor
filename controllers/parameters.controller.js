const express = require('express');
const mongoose = require('mongoose');
const Parameters = require('../models/params.model');


exports.create_parameter_set = (data) => {
    return new Promise(function (resolve, reject) {
        Parameters.find({
                name: data.name
            })
            .exec()
            .then(parameters => {
                const newParameters = new Parameters({
                    _id: new mongoose.Types.ObjectId(),
                    name: data.name,
                    incoming: data.incoming,
                    outgoing: data.outgoing
                });
                //save the user to the database
                newParameters
                    .save()
                    .then(result => {
                        resolve(newParameters);
                    })
                    .catch(error => reject(error));
            })
            .catch(error => reject(error));
    })
}