

var lessonLife = [];
var gratefull = true;
while( gratefull === true ) {
    var keepGratefull = confirm('Are u Gratefull ?');
    if( keepGratefull === true) {
        var newLessonLife = [];
        newLessonLife.push(valueOfHikmah);
        lessonLife.push(newLessonLife);
    } else {
        var unGratefull = keepGratefull;
        gratefull = unGratefull;
    }
}

lessonLife.forEach( function (e) {
    return console.log('You was Leaned: '+ e );
});
            // Write by : OP Warnet

            