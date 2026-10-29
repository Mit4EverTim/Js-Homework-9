  var tasks = ["Homework", "Breakfast", "Exercise", "Reading", "Packing Bag"];
  var minutes = [30, 15, 20, 25, 10];

  document.getElementById("taskResult").innerHTML =
    "Tasks: " + tasks;

  document.getElementById("timeResult").innerHTML =
    "Minutes needed: " + minutes;

  document.getElementById("labelResult").innerHTML =
    "Press the button above!";

  function sortAZ() {
    tasks.sort();
    document.getElementById("taskResult").innerHTML = "A to Z: " + tasks;
  }

  function sortZA() {
    tasks.sort();
    tasks.reverse();
    document.getElementById("taskResult").innerHTML = "Z to A: " + tasks;
  }

  function sortShortest() {
    minutes.sort(function(a, b) { return a - b; });
    document.getElementById("timeResult").innerHTML = "Shortest tasks first: " + minutes;
  }

  function sortHighest() {
    minutes.sort(function(a, b) { return b - a; });
    document.getElementById("timeResult").innerHTML = "Longest tasks first: " + minutes;
  }

  function addLabel() {
    var labelledMinutes = minutes.map(function(time) { return time + " minutes"; });
    document.getElementById("labelResult").innerHTML = "Labelled times: " + labelledMinutes;
  }