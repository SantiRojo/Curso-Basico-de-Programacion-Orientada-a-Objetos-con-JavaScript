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

// Prototipos con la sintaxis de Clases
class Student2 {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2('Miguel', 3, ['Curso de análisis de negocios para ciencia de datos', 'Curso de principio de visualización de datos para BI']);

// Prototipos con la sintaxis de Clases y principio RORO (Recibe Objeto, Retorna Objeto)
class Student3 {
  constructor({
    name,
    age,
    cursosAprobados,
    twitter,
    instagram,
    facebook,
    email
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.twitter = twitter;
    this.instagram = instagram;
    this.facebook = facebook;
    this.email = email;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const ishi = new Student3({
  name: 'Zeus',
  age: 2,
  cursosAprobados: ['Curso de cómo comer una comida', 'Curso de juego con pelotita de papel'],
  facebook: 'Ishi Rojo',
  twitter: '@Ishito',
  instagram: 'Ishi Rojo',
  email: 'ishirojo@catmail.com'
});

// Prototipos con la sintaxis de Clases y principio RORO (Recibe Objeto, Retorna Objeto) y parámetros por defecto
class Student4 {
  constructor({
    name,
    age,
    cursosAprobados = [],
    twitter,
    instagram,
    facebook,
    email
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.twitter = twitter;
    this.instagram = instagram;
    this.facebook = facebook;
    this.email = email;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const pili = new Student4({
  name: 'Pilar',
  age: 3,
  cursosAprobados: ['Curso de cómo estar loquita', 'Curso de mirada con ojos saltones'],
  facebook: 'Filiz',
  twitter: '@Filiz',
  instagram: 'filarzita',
  email: 'lalokita@catmail.com'
})