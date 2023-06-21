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
//const ninja1 = new Ninja("Hyabusa");
//ninja1.sayName().showStats().drinkSake().showStats();



class Sensei extends Ninja{
    constructor(name,health){
        super(name,health=200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }
    speakWisdom(){
        const mess = super.drinkSake();
        console.log(mess);
    }


}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



















