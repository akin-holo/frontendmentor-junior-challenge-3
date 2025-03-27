const workCard = document.getElementById("work")
const hour = "hrs";
const lastWeek = "Last Week -";

// Fetch the JSON data
fetch('data.json')
   .then(response => {
      if (!response.ok) {
         throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
   })
   .then(data => {
      console.log(data); // Check the JSON structure in the console
      defaultValue(data);
   })
   .catch(error => console.error('Error fetching data:', error));

async function defaultValue(data) {
   let workData = data.find(prop => prop.title === "Work");
   let playData = data.find(prop => prop.title === "Play");
   let studyData = data.find(prop => prop.title === "Study");
   let exerciseData = data.find(prop => prop.title === "Exercise");
   let socialData = data.find(prop => prop.title === "Social");
   let selfCareData = data.find(prop => prop.title === "Self Care");

   // if (workData) {
      // let dailyWorkValue = workData.timeframes.daily; 

      // Update UI with current and previous hours
      // document.querySelectorAll(".current").forEach(hour => {
      //    hour.textContent = `${dailyWorkValue.current} hrs`;
      // });

   //    document.querySelectorAll(".previous").forEach(week => {
   //       week.textContent = `Last Week - ${dailyWorkValue.previous} hrs`;
   //    });
   // }

   if(workData) {
      // let dailyWorkValue = workData.timeframes.daily; 

      // let workCurrentHRS = document.getElementById("workCurrentHRS");
      // let workPreviousHRS = document.getElementById("workPreviousHRS");

      // workCurrentHRS.textContent = `${dailyWorkValue.current}hrs`;
      // workPreviousHRS.textContent = `Lask Week - ${dailyWorkValue.previous}hrs`

      function dailyWorkValue() {
         let dailyWorkValue = workData.timeframes.daily; 

         let workCurrentHRS = document.getElementById("workCurrentHRS");
         let workPreviousHRS = document.getElementById("workPreviousHRS");

         workCurrentHRS.textContent = `${dailyWorkValue.current}${hour}`;
         workPreviousHRS.textContent = `${lastWeek} ${dailyWorkValue.previous} ${hour}`
      }
      dailyWorkValue();
   };

   if(playData) {
      function dailyPlayValue() {
         let dailyPlayValue = playData.timeframes.daily;

         let playCurrentHRS = document.getElementById("playCurrentHRS");
         let playPrevioustHRS = document.getElementById("playPrevioustHRS");

         playCurrentHRS.textContent = `${dailyPlayValue.current}${hour}`;
         playPrevioustHRS.textContent = `${lastWeek} ${dailyPlayValue.previous}`;
      }
      dailyPlayValue();
   };

   // Study data
   if(studyData) {
      function dailyStudyValue(value) {
         let dailyStudyValue = studyData.timeframes.daily;

         let studyCurrentHRS = document.getElementById("studyCurrentHRS");
         let studyPreviousHRS = document.getElementById("studyPreviousHRS");

         studyCurrentHRS.textContent = `${dailyStudyValue.current} ${hour}`;
         studyPreviousHRS.textContent =`${lastWeek} ${dailyStudyValue.previous}`;

      }
      dailyStudyValue();
   };

   if(exerciseData) {
      function dailyExerciseValue() {
         let dailyExerciseValue = exerciseData.timeframes.daily;

         let exerciseCurrentHRS = document.getElementById("exerciseCurrentHRS");
         let exercisePreviousHRS = document.getElementById("exercisePreviousHRS");

         exerciseCurrentHRS.textContent = `${dailyExerciseValue.current}  ${hour}`;
         exercisePreviousHRS.textContent = `${lastWeek} ${dailyExerciseValue.previous}`;
      }
      dailyExerciseValue();
   };

   // Social data
   if(socialData) {
      function dailySocialValue() {
         let dailySocialValue = socialData.timeframes.daily;

         let socialCurrentHRS = document.getElementById("socialCurrentHRS");
         let socialPreviousHRS = document.getElementById("socialPreviousHRS");

         socialCurrentHRS.textContent = `${dailySocialValue.current}  ${hour}`;
         socialPreviousHRS.textContent = `${lastWeek} ${dailySocialValue.previous}`;
      }
      dailySocialValue();
   };

   // Social data
   if(selfCareData) {
      function dailySelfCareValue() {
         let dailySelfCareValue = selfCareData.timeframes.daily;

         let selfCareCurrentHRS = document.getElementById("selfCareCurrentHRS");
         let selfCarePreviousHRS = document.getElementById("selfCarePreviousHRS");

         selfCareCurrentHRS.textContent = `${dailySelfCareValue.current}  ${hour}`;
         selfCarePreviousHRS.textContent = `${lastWeek} ${dailySelfCareValue.previous}`;
      }
      dailySelfCareValue();
   };
}




// async function playDataValue(data) {
//    let playData = data.find(property => property.title === "Play");

//    let playDailyValue = playData.timeframes.daily;
//    let playweeklyValue = playData.timeframes.weekly;
//    let playMonthlyValue = playData.timeframes.monthly;
// };

// async function studyDataValue(data) {
//    let studyData = data.find(property => property.title === "Study");

//    let studyDailyValue = studyData.timeframes.daily;
//    let studyweeklyValue = studyData.timeframes.weekly;
//    let studyMonthlyValue = studyData.timeframes.monthly;
// };

// Exercise value assignment
// async function exerciseDataValue(data) {
//    let exerciseData = data.find(property => property.title === "Exercise");

//    let exerciseDailyValue = exerciseData.timeframes.daily;
//    let exerciseweeklyValue = exerciseData.timeframes.weekly;
//    let exerciseMonthlyValue = exerciseData.timeframes.monthly;
// };


// social value assignment
// async function socialDataValue(data) {
//    let socialData = data.find(property => property.title === "Social");

//    let socialDailyValue = socialData.timeframes.daily;
//    let socialweeklyValue = socialData.timeframes.weekly;
//    let socialMonthlyValue = socialData.timeframes.monthly;
// };


// self care value assignment
// async function selfCareDataValue(data) {
//    let selfCareData = data.find(property => property.title === "Self Care");
//    if(selfCareData) {
//       let selfCareDailyValue = selfCareData.timeframes.daily;
//       let selfCareweeklyValue = selfCareData.timeframes.weekly;
//       let selfCareMonthlyValue = selfCareData.timeframes.monthly;
//    }
// };

   

