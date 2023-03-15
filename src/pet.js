const max_fitness = 10;
const empty_belly = 0;
const grow_old = 1;

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = empty_belly;
    this.fitness = max_fitness;
    };

    Pet.prototype = {
        get isAlive(){
            return this.age < 30 && this.hunger < 10 && this.fitness > 0
        }
    };
    
    Pet.prototype.growUp = function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        this.age += grow_old;
    };
    Pet.prototype.getHungry = function (){ 
        this.hunger += 5;
    };
    Pet.prototype.becomeUnfit = function (){
        this.fitness -= 3;
    };
    Pet.prototype.walk =  function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        if((this.fitness + 4) <= max_fitness){
            this.fitness += 4
        } else {
            this.fitness = max_fitness
        }
    };
    Pet.prototype.feed = function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        if((this.hunger + 3) <= empty_belly){
            this.hunger += 3
        } else {
            this.hunger = empty_belly;
        }
    }  
    Pet.prototype.checkUp = function (){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive')
        }
        if ((this.fitness <= 3)){
            return 'I need a walk!'
        } 
        if((this.hunger >= 5)){
            return 'I am hungry!'
        }
        if((this.fitness <= 3 && this.hunger >= 5)) {
            return 'I am hungry and I need a walk!'
        } else {
            return 'I feel great!'
        }
    }

module.exports = Pet