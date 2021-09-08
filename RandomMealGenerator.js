//menu object
const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
    get appetizers() {
      return this.appetizers;
    },
    set appetizers(appetizersIn) {
      this.appetizers = appetizersIn;
    },
    get mains() {
      return this.mains;
    },
    set mains(mainsIn) {
      this.mains = mainsIn;
    },
    get desserts() {
      return this.desserts;
    },
    set desserts(dessertsIn) {
      this.desserts = dessertsIn;
    },
    //this method, when run, creates a dish which has a name and price (you set these). It then adds this dish to the appropriate course.
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    //this generates a random dish from a course on the menu -> we'll use this to generate a random meal
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    //this generates a random 3-course meal taking a random meal for each course
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name} and ${desserts.name}. The total price comes to ${totalPrice} euros.`;
    },
  };
  
  //creating all the possible dishes. In a real world application, these could possibly be pulled from a pre-existing menu to save manually inputting dishes
  menu.addDishToCourse('appetizers', 'feta cheese', 5.00);
  menu.addDishToCourse('appetizers', 'halloumi fries', 5.50);
  menu.addDishToCourse('appetizers', 'pita bread', 4.50);
  
  menu.addDishToCourse('mains', 'mixed grill', 12.00);
  menu.addDishToCourse('mains', 'kleftico', 10);
  menu.addDishToCourse('mains', 'gyros', 10);
  
  menu.addDishToCourse('desserts', 'loukoumi', 3.00);
  menu.addDishToCourse('desserts', 'baklava', 4.50);
  menu.addDishToCourse('desserts', 'ice cream sundae', 5.00);
  
  //ran generateRandomMeal and saved it to a variable
  let meal = menu.generateRandomMeal();
  
  //printed the variable
  console.log(meal);
  
  