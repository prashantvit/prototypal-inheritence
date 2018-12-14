function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.shout = function() {
  console.log(this.name + "is " + this.sound + "ing...");
};

function AnimalChild(sound, name, type) {
  Animal.call(this, name, type);
  this.sound = sound;
}

const dog = new AnimalChild("Bow", "dog", 1);

console.log(dog);

AnimalChild.prototype = Object.create(Animal.prototype);
const dog2 = new AnimalChild("Bow", "dog", 1);

console.log(dog2.shout());

const dad = {
  a: function() {
    console.log(this.b);
  }
};

const child = {
  b: 10
};

child.__proto__ = dad;

console.log(child.a());
