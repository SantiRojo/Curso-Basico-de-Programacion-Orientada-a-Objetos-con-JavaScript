// Creación de un objeto literal
const natalia = {
  name: 'Natalia',
  age: 20,
  cursosAprobados: ['Curso Definitivo de HTML y CSS', 'Curso Práctico de HTML y CSS'],
  aprobarCurso (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
};

// Creación de un prototipo
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  //Creando método dentro de la creación del prototipo
  /* this.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  } */
}

// Creando un método por fuera de la creación del prototipo
Student.prototype.aprobarCurso = function(nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
}

// Creando una instancia de este prototipo
const juanita = new Student('Juanita Alejandra', 15, ['Curso de introducción a la producción de videojuegos', 'Curso de creación de personajes']);