const Pet = require ('../src/pet.js')

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet ('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
      });
    it('has an initial age of 0', () => {
      const pet = new Pet('Fido')
      pet.growUp()
      expect(pet.age).toEqual(1);
    })
    it('has inital hunger of 0', () => {
      const pet = new Pet ('Fido')
      pet.getHungry()
      expect(pet.hunger).toEqual(5)
    })
    it('has inital fitness of 10', () => {
      const pet = new Pet ('Fido')
      pet.becomeUnfit()
      expect(pet.fitness).toEqual(7)
    })
    });

    describe('walk', () => {
      it('increases fitness by 4', () => {
        const pet = new Pet('Fido')
        pet.fitness = 4;
        pet.walk()
        expect(pet.fitness).toEqual(8)
      })
      it('it increases fitness to a maximum of 10', () => {
        const pet = new Pet ('Fido')
        pet.fitness = 8;
        pet.walk()
        expect(pet.fitness).toEqual(10)
      })
    })
