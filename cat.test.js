const Cat = require("./cat");


describe("SpeakTest", () => {
    const cat = new Cat();
    test('Test default for speak should result in "meow"', () => {
      expect(cat.speak()).toBe('meow');
    });

    test('Test speak with value should result in value', () => {
        expect(cat.speak("Kitty")).toBe('Kitty');
      });

});

describe("AgeTest", () => {
    const cat = new Cat();
    test('Test default for initial age should be <=10 and >=5', () => {
      expect(cat.getAge()).toBeLessThanOrEqual(10) && expect(cat.getAge()).toBeGreaterThanOrEqual(5);
    });

    
});