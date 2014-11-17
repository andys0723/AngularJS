var myApp = angular.module('myApp',[]);

myApp.factory('Avengers', function(){
    var Avengers = {};
    Avengers.cast = [
        {
            name: "Robert Downey Jr.",
            character: "Tony Stark / Iron Man"
        },
        {
            name: "Chris Evans",
            character: "Steve Rogers / Captain America"
        },
        {
            name: "Mark Ruffalo",
            character: "Bruce Banner / The Hulk"
        },
        {
            name: "Chris Hemsworth",
            character: "Thor"
        },
        {
            name: "Scarlett Johnsson",
            character: "Natasha Romanoff / Black Widow"
        },
        {
            name: "Jeremy Runner",
            character: "Clint Barton / Hawkeys"
        },
        {
            name: "Tom Hiddieston",
            character: "Loki"
        },
        {
            name: "Clark Gregg",
            character: "Agent Phil Couison"
        },
        {
            name: "Cobie Smuiders",
            character: "Agent Maria"
        },
        {
            name: "Stellan Skarsgard",
            character: "Selvig"
        },
        {
            name: "Samuel L. Jackson",
            character: "Nick Fury"
        },
        {
            name: "Gayneth Pathrow",
            character: "Pepper Potts"
        },
        {
            name: "Paul Bettany",
            character: "Jarvis(voice)"
        },
    ]

    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}