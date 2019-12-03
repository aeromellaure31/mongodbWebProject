const Pusher = require('../models/pusher.model.js')

module.exports.deleteNotification = (req, res) => {
    Pusher.deleteOne({tracknum: req.params.notify}, (err, deleteSuccess) => {
        if(err){
            res.json(err)
        }else{
            res.json(deleteSuccess)
        }
    })
}

module.exports.createPusher = (req, res) => {
    console.log(req.body)
    let push = new Pusher(req.body)
    push.save((err, pusher) => {
        if(err){
            res.json(err)
        }else(
            res.json(pusher)
        )
    })
}

module.exports.findPusher = (req, res) => {
    Pusher.find({ email: req.params.email }, (err, pusher) => {
        if (err) {
            res.status(404).send(err)
        } else if (pusher != null) {
            console.log(pusher)
            res.json({ pusher })
        } else {
            res.status(404).send("Error")
        }
    })
}

module.exports.findPusherTrack = (req, res) => {
    Pusher.find({ tracknum: req.params.track }, (err, pusher) => {
        if (err) {
            res.status(404).send(err)
        } else if (pusher != null) {
            console.log(pusher)
            res.json({ pusher })
        } else {
            res.status(404).send("Error")
        }
    })
}   