
let workCard;
let playCard;
let studyCard;
let exerciseCard;
let socialCard;
let selfCareCard;

const dailyRecordButton = document.getElementById("dailyRecord");
const WeeklyRecordButton = document.getElementById("WeeklyRecord");
const monthlyRecordButton = document.getElementById("monthlyRecord");

dailyRecordButton.addEventListener("click", defaultValue);
WeeklyRecordButton.addEventListener("click", (e) => {
   weeklyData();
   e.currentTarget.style.color = "white";
});

monthlyRecordButton.addEventListener("click", monthlyData);

const hour = "hrs";
const lastWeek = "Last Week -";

let allPreriodData = [];

// Fetch the JSON data
fetch('data.json')
   .then(response => {
      if (!response.ok) {
         throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
   })
   .then(data => {
      allPreriodData = data;
      defaultValue(data);
      console.log(data); 
   })
   .catch(error => console.error('Error fetching data:', error));

async function defaultValue(data) {
   let workData = data.find(prop => prop.title === "Work");
   let playData = data.find(prop => prop.title === "Play");
   let studyData = data.find(prop => prop.title === "Study");
   let exerciseData = data.find(prop => prop.title === "Exercise");
   let socialData = data.find(prop => prop.title === "Social");
   let selfCareData = data.find(prop => prop.title === "Self Care");

   // Work  default data
   if(workData) {
      function dailyWorkValue() {
         let dailyWorkValue = workData.timeframes.daily; 

         // let workCurrentHRS = document.getElementById("workCurrentHRS");
         // let workPreviousHRS = document.getElementById("workPreviousHRS");

         workCurrentHRS.textContent = `${dailyWorkValue.current}${hour}`;
         workPreviousHRS.textContent = `${lastWeek} ${dailyWorkValue.previous} ${hour}`
      }
      dailyWorkValue();
      workCard = workData;
   };

   // Play  default data
   if(playData) {
      function dailyPlayValue() {
         let dailyPlayValue = playData.timeframes.daily;

         playCurrentHRS.textContent = `${dailyPlayValue.current}${hour}`;
         playPrevioustHRS.textContent = `${lastWeek} ${dailyPlayValue.previous}${hour}`;
      }
      dailyPlayValue();
      playCard = playData;
   };

   // Study default data
   if(studyData) {
      function dailyStudyValue() {
         let dailyStudyValue = studyData.timeframes.daily;

         studyCurrentHRS.textContent = `${dailyStudyValue.current}${hour}`;
         studyPreviousHRS.textContent =`${lastWeek} ${dailyStudyValue.previous}${hour}`;

      }
      dailyStudyValue();
      studyCard = studyData;
   };

    // Exercise  default data
   if(exerciseData) {
      function dailyExerciseValue() {
         let dailyExerciseValue = exerciseData.timeframes.daily;

         exerciseCurrentHRS.textContent = `${dailyExerciseValue.current}${hour}`;
         exercisePreviousHRS.textContent = `${lastWeek} ${dailyExerciseValue.previous}${hour}`;
      }
      dailyExerciseValue();
      exerciseCard = exerciseData;
   };

   // Social default data
   if(socialData) {
      function dailySocialValue() {
         let dailySocialValue = socialData.timeframes.daily;

         socialCurrentHRS.textContent = `${dailySocialValue.current}${hour}`;
         socialPreviousHRS.textContent = `${lastWeek} ${dailySocialValue.previous}${hour}`;
      }
      dailySocialValue();
      socialCard = socialData;
   };

   // Self Care data
   if(selfCareData) {
      function dailySelfCareValue() {
         let dailySelfCareValue = selfCareData.timeframes.daily;

         selfCareCurrentHRS.textContent = `${dailySelfCareValue.current}${hour}`;
         selfCarePreviousHRS.textContent = `${lastWeek} ${dailySelfCareValue.previous}${hour}`;
      }
   };
   dailySelfCareValue();
   selfCareCard = selfCareData;
};

   // function to populate monthly data in the UI
function weeklyData() {
   if(workCard) {
      let weeklyData = workCard.timeframes.weekly;

      let workCurrentHRS = document.getElementById("workCurrentHRS");
      let workPreviousHRS = document.getElementById("workPreviousHRS");

      workCurrentHRS.textContent = `${weeklyData.current}${hour}`
      workPreviousHRS.textContent = `${lastWeek} ${weeklyData.previous}${hour}`
   }

   if(playCard) {
      let weeklyData = playCard.timeframes.weekly;

      playCurrentHRS.textContent = `${weeklyData.current}${hour}`;
      playPrevioustHRS.textContent = `${lastWeek} ${weeklyData.previous}${hour}`;
   }

   if(studyCard) {
      let weeklyData = studyCard.timeframes.weekly;

      studyCurrentHRS.textContent = `${weeklyData.current}${hour}`
      studyPreviousHRS.textContent = `${lastWeek} ${weeklyData.previous}${hour}`
   }

   if(exerciseCard) {
      let weeklyData = exerciseCard.timeframes.weekly;

      exerciseCurrentHRS.textContent = `${weeklyData.current}${hour}`
      exercisePreviousHRS.textContent = `${lastWeek} ${weeklyData.previous}${hour}`
   }

   if(socialCard) {
      let weeklyData = socialCard.timeframes.weekly;

      let socialCurrentHRS = document.getElementById("socialCurrentHRS");
      let socialPreviousHRS = document.getElementById("socialPreviousHRS");

      socialCurrentHRS.textContent = `${weeklyData.current}${hour}`
      socialPreviousHRS.textContent = `${lastWeek} ${weeklyData.previous}${hour}`
   }

   if(selfCareCard) {
      let weeklyData = selfCareCard.timeframes.weekly;

      let selfCareCurrentHRS = document.getElementById("selfCareCurrentHRS");
      let selfCarePreviousHRS = document.getElementById("selfCarePreviousHRS");

      selfCareCurrentHRS.textContent = `${weeklyData.current}${hour}`
      selfCarePreviousHRS.textContent = `${lastWeek} ${weeklyData.previous}${hour}`
   }
}
weeklyData();


   // function to populate monthly data in the UI
function monthlyData() {
   if(workCard) {
      let monthlyData = workCard.timeframes.monthly;

      workCurrentHRS.textContent = `${monthlyData.current}${hour}`;
      workPreviousHRS.textContent = `${lastWeek} ${monthlyData.previous}${hour}`;
   }

   if(playCard) {
      let monthlyData = playCard.timeframes.monthly;

      playCurrentHRS.textContent = `${monthlyData.current}${hour}`;
      playPrevioustHRS.textContent = `${lastWeek} ${monthlyData.previous}${hour}`;
   }

   if(studyCard) {
      let monthlyData = studyCard.timeframes.monthly;

      studyCurrentHRS.textContent = `${monthlyData.current}${hour}`;
      studyPreviousHRS.textContent = `${lastWeek} ${monthlyData.previous}${hour}`;
   }

   if(exerciseCard) {
      let monthlyData = exerciseCard.timeframes.monthly;

      exerciseCurrentHRS.textContent = `${monthlyData.current}${hour}`;
      exercisePreviousHRS.textContent = `${lastWeek} ${monthlyData.previous}${hour}`;
   }

   if(socialCard) {
      let monthlyData = socialCard.timeframes.monthly;

      socialCurrentHRS.textContent = `${monthlyData.current}${hour}`;
      socialPreviousHRS.textContent = `${lastWeek} ${monthlyData.previous}${hour}`
   }

   if(selfCareCard) {
      let monthlyData = selfCareCard.timeframes.monthly;

      selfCareCurrentHRS.textContent = `${monthlyData.current}${hour}`;
      selfCarePreviousHRS.textContent = `${lastWeek} ${monthlyData.previous}${hour}`
   }
   monthlyData();
}






   

