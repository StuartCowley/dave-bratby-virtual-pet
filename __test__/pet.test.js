const Pet = require ('../src/pet.js')

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet ('Bob')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Bob');
        expect(pet.name).toEqual('Bob');
      });
    it('has an initial age of 0', () => {
      const pet = new Pet('Bob')
      pet.growUp()
      expect(pet.age).toEqual(1);
    })
    it('has inital hunger of 0', () => {
      const pet = new Pet ('Bob')
      pet.getHungry()
      expect(pet.hunger).toEqual(5)
    })
    it('has inital fitness of 10', () => {
      const pet = new Pet ('Bob')
      pet.becomeUnfit()
      expect(pet.fitness).toEqual(7)
    })
    });

    describe('walk', () => {
      it('increases fitness by 4', () => {
        const pet = new Pet('Bob')
        pet.fitness = 4;
        pet.walk()
        expect(pet.fitness).toEqual(8)
      })
      it('it increases fitness to a maximum of 10', () => {
        const pet = new Pet ('Bob')
        pet.fitness = 8;
        pet.walk()
        expect(pet.fitness).toEqual(10)
      })
      it('it throws an error if the pet is not alive', () => {
        const pet = new Pet ('Bob')
        pet.age = 30
        expect(() => pet.walk()).toThrow('Your pet is no longer alive')
      })
    })

    describe('grow up', () => {
      it('increases the age of the pet in incrememnts of 1', () => {
        const pet = new Pet('Bob');
        pet.growUp();
        expect(pet.age).toEqual(1);
      });
      it('it throws an error if pet is no longer alive', () => {
        const pet = new Pet('Bob');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive');
      });
    });

    describe('feed', () => {
      it('it prevents hunger level from going below 0', () => {
        const pet = new Pet ('Bob')
        pet.hunger = 8
        pet.feed()
        expect(pet.hunger).toEqual(0)
      })
      it('it throws an error if the pet is not alive', () => {
        const pet = new Pet('Bob')
        pet.age = 30
        expect(() => pet.feed()).toThrow('Your pet is no longer alive')
      })
    })

    describe('checkUp', () => {
      it('returns I need a walk if fitness is less than 3', () => {
        const pet = new Pet ('Bob')
        pet.fitness = 8
        pet.checkUp()
        expect('I need a walk!')
      })
      it('returns I am hungry! if hunger is greater than or equal to 5', () => {
        const pet = new Pet ('Bob')
        pet.hunger = 5
        pet.checkUp()
        expect('I am hungry!')
      })
      it('if fitness is 3 or less AND hunger is 5 or more ', () => {
        const pet = new Pet ('Bob')
        pet.fitness <=3 && pet.hunger >= 5
        pet.checkUp()
        expect('I am hungry and I need a walk!')
      })
      it('if neither fitness or hunger are true, return I feel great!', () => {
        const pet = new Pet('Bob')
        pet.fitness >= 4 && pet.hunger <= 4
        pet.checkUp()
        expect('I feel great!')
      })
      it('it throws an error if the pet is not alive', () => {
        const pet = new Pet ('Bob')
        pet.age = 30
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive')

      })
    })
    
    describe('isAlive ', () => {
      it('returns false if age is 30 or more', () => {
        const pet = new Pet('Bob')
        pet.age = 30
        expect(pet.isAlive).toEqual(false)
      })
      it('returns false if hunger is 10 or more ', () => {
        const pet = new Pet ('Bob')
        pet.hunger = 10
        expect(pet.isAlive).toEqual(false)
      })
      it('returns false if fitness is 0 or less', () => {
        const pet = new Pet ('Bob')
        pet.fitness = 0
        expect(pet.isAlive).toEqual(false)
      })
    })