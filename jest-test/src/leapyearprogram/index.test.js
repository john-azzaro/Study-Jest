// import leapYear  from './index';

// it('should NOT be a leap year if divisible by 100, not 400', function() {
//   const input = 1900;
//   const expectedOutput = false; 
//   expect(leapYear(input)).toBe(expectedOutput);
// });

// it('should be a leap year if divisible by 4, not 100', function() {
//   const input = 1984;
//   const expectedOutput = true;
//   const actualOutput = leapYear(input);
//   expect(actualOutput).toBe(expectedOutput);
// });




import leapYear  from './index';

it('should NOT be a leap year if divisible by 100, not 400', function() {
  expect(leapYear(1900)).toBe(false);
});

it('should be a leap year if divisible by 4, not 100', function() {
  expect(leapYear(1984)).toBe(true);
});

it('should NOT be a leap year if not divisible by 4', function() {
  expect(leapYear(1983)).toBe(false);
});

it('should be a leap year if divisible by 400', function() {
  expect(leapYear(2000)).toBe(true);
});

it('should throw an error for years before 1582', function() {
  expect(function() {
    leapYear(1568);
  }).toThrow();
});