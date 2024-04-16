const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreCardSchema = new Schema({
    quizNumber: Number,
    quizMaster: String,
    questions: [{ 
        questionNumber: Number,
        player: String,
        points: Number,
        qtype: String,
        foulBool: Boolean,
    }],
    teams: [{
        score: Number,
        fouls: Number,
        timeouts: Number,
        players: [{
            name: String,
            personalScore: Number,
            personalFouls: Number,
            correctAnswers: Number,
        }],
        teamName: String,
        league: String,
        church: String,
    }]
});

const ScoreCard = mongoose.model("scorecard", scoreCardSchema);
module.exports = ScoreCard;
