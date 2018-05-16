class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  hasLocation() {
    if(this.location){
      return true;
    } else {
      return false;
    }
  }

  getGreeting() {
    let greetings = super.getGreeting();

    if(this.hasLocation()) {
      greetings += ` He/she lives in ${this.location}`;
    }

    return greetings;
  }
}

const me = new Traveller('Papuk', 23, 'rzal');
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, 'homeless');
console.log(other.getGreeting());

