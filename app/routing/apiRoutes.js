// ==================================

//      DEPENDENCIES

var path = require('path')

// ==================================

//      LOAD DATA

var friendsData = require('../data/friends');

// ==================================

//      ROUTING

module.exports = function (app) {

    // GET ROUTES

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })


    // POST ROUTES 

    app.post('/api/friends', function (req, res) {
        console.log(req)
        friendsData.push(req.body)
    })

    // ====================
    // COMPATIBILITY LOGIC

    let lowestDifference = 0;
    let mostCompatible = '';
    // loop through friendsData
    for (i in friendsData) {
        let totalDifference = 0
        // loop through scores
        for (e in friendsData[i].scores) {

            // line below broke server
            // let q = document.getElementById('q', (e++))

            // compare selected value to other user's choice
            difference = Math.abs(q.options[q.selectedIndex].value - friendsData[i].scores[e])
            totalDifference += difference
        }
        if (totalDifference < lowestDifference) {
            lowestDifference = totalDifference
            mostCompatible = friendsData[i].name
        }
    }

    console.log(mostCompatible)



}