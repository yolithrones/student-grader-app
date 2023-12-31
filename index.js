var form = document.getElementById("form")

//Declare inputs
var studentName = document.getElementById("name")
var studentEmail = document.getElementById("email")
var phoneNumber = document.getElementById("number")
var studentAge = document.getElementById("age")
var studentCountry = document.getElementById("country")
var subjectOne = document.getElementById("subject-one")
var subjectTwo = document.getElementById("subject-two")
var subjectThree = document.getElementById("subject-three")
var subjectFour = document.getElementById("subject-four")
var subjectFive = document.getElementById("subject-five")
var subjectSix = document.getElementById("subject-six")
var subjectSeven = document.getElementById("subject-seven")
var subjectEight = document.getElementById("subject-eight")
var gradeOne = document.getElementById("grade-one")
var gradeTwo = document.getElementById("grade-two")
var gradeThree = document.getElementById("grade-three")
var gradeFour = document.getElementById("grade-four")
var gradeFive = document.getElementById("grade-five")
var gradeSix = document.getElementById("grade-six")
var gradeSeven = document.getElementById("grade-seven")
var gradeEight = document.getElementById("grade-eight")

//declare variable for final result
var result = document.getElementById("result")


form.addEventListener('submit', function (e){
	e.preventDefault()
   

    if (studentName.value == "" ||studentEmail.value  == "" || phoneNumber.value  == "" || studentCountry.value  == "" || studentAge.value  == "" || subjectOne.value  == "" || subjectTwo.value  == "" || subjectThree.value  ==  "" || subjectFour.value  == "" || subjectFive.value  == "" || subjectSix.value  == "" || subjectSeven.value  == ""|| subjectEight.value  == "" || gradeOne.value  == "" || gradeTwo.value  == "" || gradeThree.value  == "" || gradeFour.value  == "" || gradeFive.value  == "" || gradeSix.value  == "" || gradeSeven.value  == "" || gradeEight.value  == "") {
        return document.getElementById("error").innerHTML = "Please fill in your COMPULSORY details!!"  

    }

    var agePoint = ""
    if(studentAge.value >= 18 & studentAge.value <=24){
        agePoint = 100
    }else if(studentAge.value >= 25 & studentAge.value <=30){
        agePoint = 80
    }else if (studentAge.value >=31 & studentAge.value <=35){
        agePoint = 50
    }else if (studentAge.value>=36 & studentAge.value <=40) {
        agePoint = 30
    }else if (studentAge.value >=41 ) {
        agePoint = 10
    }
    
    var countryPoint = ""
    if (studentCountry.value === "Africa") {
        countryPoint = 50
        
    }else if (studentCountry.value === "Asia") {
        countryPoint = 40
    }else if (studentCountry.value === "South America") {
        countryPoint = 30
        
    }else if (studentCountry.value === "North America") {
        countryPoint = 20
    }else if (studentCountry.value === "Other Part") {
        countryPoint = 10        
        
    }

    var gradePoint1 = ""
    if (gradeOne.value >= 90 && gradeOne.value <=100 ) {
        gradePoint1 = 150
    }else if (gradeOne.value >=85 && gradeOne.value <=89) {
        gradePoint1 = 140
    }else if (gradeOne.value >=75 && gradeOne.value <=84) {
        gradePoint1 = 120
    }else if (gradeOne.value >=65 && gradeOne.value <=74) {
        gradePoint1 = 100
    }else if (gradeOne.value >=60 && gradeOne.value <=64) {
        gradePoint1 = 80
    }else if (gradeOne.value >=50 && gradeOne.value  <=59 ) {
        gradePoint1 = 50
    }else if (gradeOne.value >=40 && gradeOne.value <=49) {
        gradePoint1 = 20
    }

    //
    var gradePoint2 = ""
    if (gradeTwo.value >= 90 && gradeTwo.value <=100 ) {
        gradePoint2 = 150
    }else if (gradeTwo.value >=85 && gradeTwo.value <=89) {
        gradePoint2 = 140
    }else if (gradeTwo.value >=75 && gradeTwo.value <=84) {
        gradePoint2 = 120
    }else if (gradeTwo.value >=65 && gradeTwo.value <=74) {
        gradePoint2 = 100
    }else if (gradeTwo.value >=60 && gradeTwo.value <=64) {
        gradePoint2 = 80
    }else if (gradeTwo.value >=50 && gradeTwo.value  <=59 ) {
        gradePoint2 = 50
    }else if (gradeTwo.value >=40 && gradeTwo.value <=49) {
        gradePoint2 = 20
    }

    // 
    var gradePoint3 = ""
    if (gradeThree.value >= 90 && gradeThree.value <=100 ) {
        gradePoint3 = 150
    }else if (gradeThree.value >=85 && gradeThree.value <=89) {
        gradePoint3 = 140
    }else if (gradeThree.value >=75 && gradeThree.value <=84) {
        gradePoint3 = 120
    }else if (gradeThree.value >=65 && gradeThree.value <=74) {
        gradePoint3 = 100
    }else if (gradeThree.value >=60 && gradeThree.value <=64) {
        gradePoint3 = 80
    }else if (gradeThree.value >=50 && gradeThree.value  <=59 ) {
        gradePoint3 = 50
    }else if (gradeThree.value >=40 && gradeThree.value <=49) {
        gradePoint3 = 20
    }

    //
    var gradePoint4 = ""
    if (gradeFour.value >= 90 && gradeFour.value <=100 ) {
        gradePoint4 = 150
    }else if (gradeFour.value >=85 && gradeFour.value <=89) {
        gradePoint4 = 140
    }else if (gradeFour.value >=75 && gradeFour.value <=84) {
        gradePoint4 = 120
    }else if (gradeFour.value >=65 && gradeFour.value <=74) {
        gradePoint4 = 100
    }else if (gradeFour.value >=60 && gradeFour.value <=64) {
        gradePoint4 = 80
    }else if (gradeFour.value >=50 && gradeFour.value  <=59 ) {
        gradePoint4 = 50
    }else if (gradeFour.value >=40 && gradeFour.value <=49) {
        gradePoint4 = 20
    }

    //
    var gradePoint5 = ""
    if (gradeFive.value >= 90 && gradeFive.value <=100 ) {
        gradePoint5 = 150
    }else if (gradeFive.value >=85 && gradeFive.value <=89) {
        gradePoint5 = 140
    }else if (gradeFive.value >=75 && gradeFive.value <=84) {
        gradePoint5 = 120
    }else if (gradeFive.value >=65 && gradeFive.value <=74) {
        gradePoint5 = 100
    }else if (gradeFive.value >=60 && gradeFive.value <=64) {
        gradePoint5 = 80
    }else if (gradeFive.value >=50 && gradeFive.value  <=59 ) {
        gradePoint5 = 50
    }else if (gradeFive.value >=40 && gradeFive.value <=49) {
        gradePoint5 = 20
    }

    //
    var gradePoint6 = ""
    if (gradeSix.value >= 90 && gradeSix.value <=100 ) {
        gradePoint6 = 150
    }else if (gradeSix.value >=85 && gradeSix.value <=89) {
        gradePoint6 = 140
    }else if (gradeSix.value >=75 && gradeSix.value <=84) {
        gradePoint6 = 120
    }else if (gradeSix.value >=65 && gradeSix.value <=74) {
        gradePoint6 = 100
    }else if (gradeSix.value >=60 && gradeSix.value <=64) {
        gradePoint6 = 80
    }else if (gradeSix.value >=50 && gradeSix.value  <=59 ) {
        gradePoint6 = 50
    }else if (gradeSix.value >=40 && gradeSix.value <=49) {
        gradePoint6 = 20
    }

    //
    var gradePoint7 = ""
    if (gradeSeven.value >= 90 && gradeSeven.value <=100 ) {
        gradePoint7 = 150
    }else if (gradeSeven.value >=85 && gradeSeven.value <=89) {
        gradePoint7 = 140
    }else if (gradeSeven.value>=75 && gradeSeven.value <=84) {
        gradePoint7 = 120
    }else if (gradeSeven.value >=65 && gradeSeven.value <=74) {
        gradePoint7 = 100
    }else if (gradeSeven.value>=60 && gradeSeven.value <=64) {
        gradePoint7 = 80
    }else if (gradeSeven.value >=50 && gradeSeven.value <=59 ) {
        gradePoint7 = 50
    }else if (gradeSeven.value >=40 && gradeSeven.value <=49) {
        gradePoint7 = 20
    }

    //
    var gradePoint8 = ""
    if (gradeEight.value >= 90 && gradeEight.value  <=100 ) {
        gradePoint8 = 150
    }else if (gradeEight.value  >=85 && gradeEight.value  <=89) {
        gradePoint8 = 140
    }else if (gradeEight.value  >=75 && gradeEight.value  <=84) {
        gradePoint8 = 120
    }else if (gradeEight.value  >=65 && gradeEight.value  <=74) {
        gradePoint8 = 100
    }else if (gradeEight.value  >=60 && gradeEight.value  <=64) {
        gradePoint8 = 80
    }else if (gradeEight.value  >=50 && gradeEight.value   <=59 ) {
        gradePoint8 = 50
    }else if (gradeEight.value  >=40 && gradeEight.value  <=49) {
        gradePoint8 = 20
    }



    var totalPoint = parseInt(agePoint) + parseInt(countryPoint) +parseInt(gradePoint1) +parseInt(gradePoint2) +parseInt(gradePoint3) +parseInt(gradePoint4) +parseInt(gradePoint5) +parseInt(gradePoint6) +parseInt(gradePoint7) +parseInt(gradePoint8)
    var averagePoint = totalPoint/3
    var finalAverage = Math.round(averagePoint)

    if(finalAverage >= 180 ){
		result.innerHTML = `Congratulations! Dear <b>${studentName.value}</b>, your 		final Average is <b>${finalAverage}</b> and you have been offered a full time Scholarship by the STATE UNIVERSITY OF VOLTRON .`

        //diplay empty input
        studentName.value = "" 
        studentEmail.value = "" 
        phoneNumber.value = "" 
        studentCountry.value = "" 
        studentAge.value  = "" 
        subjectOne.value = "" 
        subjectTwo.value = "" 
        subjectThree.value = "" 
        subjectFour.value = "" 
        subjectFive.value = "" 
        subjectSix.value = "" 
        subjectSeven.value = ""
        subjectEight.value = "" 
        gradeOne.value = "" 
        gradeTwo.value = "" 
        gradeThree.value = "" 
        gradeFour.value = "" 
        gradeFive.value = "" 
        gradeSix.value = "" 
        gradeSeven.value = "" 
        gradeEight.value = ""

    }else{
	    result.innerHTML = `Sorry! Dear <b>${studentName.value}</b>, your final 		Average is <b>${finalAverage}</b> and you are not eligble for our Scholarship Thanks for Understading .`

        //diplay empty input
        studentName.value = "" 
        studentEmail.value = "" 
        phoneNumber.value = "" 
        studentCountry.value = "" 
        studentAge.value  = "" 
        subjectOne.value = "" 
        subjectTwo.value = "" 
        subjectThree.value = "" 
        subjectFour.value = "" 
        subjectFive.value = "" 
        subjectSix.value = "" 
        subjectSeven.value = ""
        subjectEight.value = "" 
        gradeOne.value = "" 
        gradeTwo.value = "" 
        gradeThree.value = "" 
        gradeFour.value = "" 
        gradeFive.value = "" 
        gradeSix.value = "" 
        gradeSeven.value = "" 
        gradeEight.value = ""

    }


    var xValues = ["Age-point", "Country-point", "1st Grade-point" , "2nd Grade-point" , "3rd Grade-point" , "4th Grade-point" , "5th Grade-point" , "6th Grade-point" , "7th Grade-point" , "8th Grade-point"];
    var yValues = [agePoint , countryPoint , gradePoint1 , gradePoint2 , gradePoint3 , gradePoint4 , gradePoint5 , gradePoint6 , gradePoint7 , gradePoint8];
    var barColors = [   
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "rgb(255, 99, 71)",
        "rgba(137, 43, 226, 0.788)",
        "#deb887de",
        "rgba(255, 192, 203, 0.856)",
        "#000000b2",
        "#ff0000a8",
        "rgba(218, 165, 32, 0.658)"
    ];


    var myChart = document.getElementById("myChart");
    new Chart(myChart, {
        type: "doughnut",
        data: {
        labels: xValues ,
        datasets: [{
        backgroundColor: barColors,
        data: yValues,
        
    }]
  },
  options: {
    title: {
      display: true,
      text: "Below is the Graphical Representation of your total Point Scored" , 
        
    },
    
  }
});


})

