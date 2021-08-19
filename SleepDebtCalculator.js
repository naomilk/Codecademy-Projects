const getSleepHours = day => {
    switch (day) {
      case 'Monday':
        return 8;
      case 'Tuesday':
        return 7;
      case 'Wednesday':
        return 8;
      case 'Thursday':
        return 8;
      case 'Friday':
        return 9;
      case 'Saturday':
        return 8;
      case 'Sunday':
        return 5;
    }
  } //Defines how many hours I sleep each day of the week
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); //Adds up all hrs slept during the week
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  } //Calculates the ideal time for me to sleep during the week
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const extraSleep = actualSleepHours - idealSleepHours;
    const underSleep = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!')
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than you needed! You slept ${extraSleep} hours over!`)
    } else if (actualSleepHours < idealSleepHours){
      console.log(`You should get some rest... You slept ${underSleep} hours less than you should have...`)
    }
  } //When called, this tells the user whether they're getting enough sleep
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  