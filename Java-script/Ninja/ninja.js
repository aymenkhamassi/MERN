class Ninja{
    constructor(name,health = 10){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('Ninja Name is ${this.name}');
        return this;
    }


    showStats(){
        console.log('Name : ${this.name}');
        console.log('health : ${this.health}');
        console.log('speed : ${this.speed}');
        console.log('strength : ${this.strength}');
        return this;

    }


    drinkSake(){
        console.log('${this.name} drink sake')
        this.health += 10;
        return this;

    }
   
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();

