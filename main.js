//assign a random event
const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
//get how many days of training you have
const getTrainingDays = event => {
let days = '';
  if (event === 'Marathon') { 
     days = 50;
  } else if (event === 'Triathlon') {
     days = 100;
  } else if (event === 'Pentathlon') {
     days = 200;
  }
  return days;
};

const name = 'Nala';
//get the event and days to train
const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

//Second user
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
