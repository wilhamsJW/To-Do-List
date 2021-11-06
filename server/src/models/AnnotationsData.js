const mongoose = require('mongoose');

const AnnotationsDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
});

module.exports = mongoose.model('Annotations', AnnotationsDataSchema);