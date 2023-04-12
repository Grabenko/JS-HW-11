let students = [
  {name: 'Андрій', age: 20, rating: 4.5},
  {name: 'Богдан', age: 19, rating: 3.8},
  {name: 'Вікторія', age: 21, rating: 4.9},
  {name: 'Галина', age: 18, rating: 3.2},
  {name: 'Дмитро', age: 22, rating: 4.6},
];
students.forEach(function(student) {
  student.greet = function() {
    return 'Привіт, я ' + this.name + '!';
  }
});
let greetings = students.map(function(student) {
  return student.greet();
});
console.log(greetings);

let topStudents = students.filter(function(student) {
  return student.rating > 4.0;
});
console.log(topStudents)
function addRating(points) {
  this.rating += points;
}
students.forEach(function(student) {
  addRating.call(student, 0.5);
});
console.log(students);
