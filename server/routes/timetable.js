const express = require('express');
const db = require('../conn');
const router = express.Router();

const data = {
    monday: {
        wasd: {
            name: "maths",
            startTime: "0820",
            endTime: "0920"
        },
        dswahyfura: {
            name: "english",
            startTime: "0920",
            endTime: "1020"
        },
        fhbndsuyi: {
            name: "comp sci",
            startTime: "1040",
            endTime: "1140"
        },
        grfenuiasr: {
            name: "spanish",
            startTime: "1140",
            endTime: "1240"
        },
        ferhjwua8io: {
            name: "chemistry",
            startTime: "1330",
            endTime: "1430"
        },
        fresgse: {
            name: "economics",
            startTime: "1430",
            endTime: "1530"
        }
    },
    tuesday: {
        wasd: {
            name: "maths",
            startTime: "0800",
            endTime: "0910"
        },
        dswahyfura: {
            name: "english",
            startTime: "0910",
            endTime: "1010"
        },
        fhbndsuyi: {
            name: "comp sci",
            startTime: "1030",
            endTime: "1140"
        },
        grfenuiasr: {
            name: "spanish",
            startTime: "1140",
            endTime: "1240"
        },
        ferhjwua8io: {
            name: "chemistry",
            startTime: "1320",
            endTime: "1420"
        },
        fresgse: {
            name: "economics",
            startTime: "1420",
            endTime: "1520"
        },
        fbyufeeeeuy: {
            name: 'early stuff',
            startTime: "0530",
            endTime: "0630"
        }
    },
    wednesday: {},
    thursday: {},
    friday: {}
}

router.get('/', (req, res) => {
    res.status(200).json(data);
});

module.exports = router;
