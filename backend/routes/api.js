const express = require('express');
const router = express.Router();
const ScoreCard = require('../models/scoreCard')

router.get('/scorecards', (req, res, next) => {
    ScoreCard.find({}, 'quizNumber')
        .then((data) => res.json(data))
        .catch(next)
});

router.get('/scorecards/:quiznumber/teams', (req, res, next) => {
    try {
        ScoreCard.find({quiznumber: req.params.quiznumber}, 'teams')
            .then((data) => res.json(data))
            .catch(next);
    } catch (err) {
        res.json({error: "An error occured"});
    }
});

router.post('/scorecard', (req, res, next) => { 
    if(!req.body.quizNumber || !req.body.quizDate){
        res.json({error: "Input is not correct"});
    }
    else if(!ScoreCard.exists({
        quizNumber: req.body.quizNumber,
        quizDate: req.body.quizDate})) {
        try {
            ScoreCard.create(req.body)
                .then((data) => res.json(data))
                .catch(next);
        } catch (err) {
            res.json({error: "An Error Occured"});
        }
    } else {
        res.json({error: "That quiz already exists"});
    }
}); 

module.exports = router;
