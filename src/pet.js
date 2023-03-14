const max_fitness = 10;
const empty_belly = 0;
const grow_old = 1;

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = empty_belly;
    this.fitness = max_fitness;
    };

    Pet.prototype.growUp = function (){
        this.age += grow_old;
    };
    Pet.prototype.getHungry = function (){ 
        this.hunger += 5;
    };
    Pet.prototype.becomeUnfit = function (){
        this.fitness -= 3;
    };
    Pet.prototype.walk =  function (){
        if((this.fitness + 4) <= max_fitness){
            this.fitness += 4
        } else {
            this.fitness = max_fitness
        }
    };
    

module.exports = Pet