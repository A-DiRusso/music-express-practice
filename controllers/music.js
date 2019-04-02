function create(req, res) {
    res.status(200).json({message: "Behold thy creation"});
}

function retrieveAll(req, res) {
    res.status(200).json({message: "Retrieving all"});
}

function update(req, res) {
    res.status(200).json({messgae: "There will be updates"});
}

function deleteOne(req, res) {
    res.status(200).json({message: "del"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};