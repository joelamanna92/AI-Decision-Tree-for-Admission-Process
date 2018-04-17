var DecisionTree = require('decision-tree');

var training_data = [
    {"Gre":320, "Toefl":110, "Gpa": 3.0,"admit":true},
    {"Gre":320, "Toefl":110, "Gpa": 2.0,"admit":false},
    {"Gre":270, "Toefl":90, "Gpa": 2.0,"admit":false},
    {"Gre":300, "Toefl":100, "Gpa": 2.8,"admit":true},
    {"Gre":250, "Toefl":80, "Gpa": 3.0,"admit":false},
    {"Gre":200, "Toefl":90, "Gpa": 2.5,"admit":false},
    {"Gre":290, "Toefl":100, "Gpa": 3.0,"admit":true},
    {"Gre":300, "Toefl":100, "Gpa": 3.3,"admit":true}
];

var test_data = [
    {"Gre":310, "Toefl":100, "Gpa": 3.3,"admit":true},
    {"Gre":200, "Toefl":90, "Gpa": 3.3, "admit":false},
    {"Gre":300, "Toefl":100, "Gpa": 2.3,"admit":false},
    {"Gre":300, "Toefl":102, "Gpa": 3.1,"admit":true}
];

var class_name = "admit";

var features = ["Gre", "Toefl", "Gpa"];

var dt = new DecisionTree(training_data, class_name, features);

var predicted_class = dt.predict({
    "Gre":300,
    "Toefl":100,
    "Gpa": 3.0,
    
});

var accuracy = dt.evaluate(test_data);

var treeModel = dt.toJSON();

function predictDecision (gre, toefl, gpa) {
    return dt.predict({
        "Gre": gre,
        "Toefl": toefl,
        "Gpa": gpa,
        
    });
}

// console.log("Predicted Class: " + predicted_class);
// console.log("accuracy: " + accuracy);

module.exports = {predictDecision : predictDecision};