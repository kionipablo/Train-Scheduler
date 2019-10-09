//Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBPv4LuMOnt41v-lwBFsD4gkkslbSK7LbE",
    authDomain: "train-schedule-8fda4.firebaseapp.com",
    databaseURL: "https://train-schedule-8fda4.firebaseio.com",
    projectId: "train-schedule-8fda4",
    storageBucket: "train-schedule-8fda4.appspot.com",
    messagingSenderId: "398066657611",
    appId: "1:398066657611:web:98d9736fda2fb4fdd0a0ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Button for adding times
  $("#add-train-btn").on("click", function(event){
      event.preventDefault();

      //Grabs user input
      var trainName = $("#train-name-input").val().trim();
      var trainDestination = $("#destination-input").val().trim();
      var trainTime = $("#time-input").val().trim();
      var trainFrequency = $("#frequency-input").val().trim();

      //To store the user search to the database
      var newTrain = {
          train: trainName,
          destination: trainDestination,
          time: trainTime,
          frequency: trainFrequency,
        };
        
    
      database.ref().push(newTrain);
       
      console.log(newTrain.train);
      console.log(newTrain.destination);
      console.log(newTrain.time);
      console.log(newTrain.frequency);

      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#frequency-input").val("");

  })