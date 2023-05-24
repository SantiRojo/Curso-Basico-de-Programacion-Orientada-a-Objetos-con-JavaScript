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


////////////////

// Creando Objetos Literales

const santi1 = {
  name: 'Santi',
  username: 'SantiRojo',
  points: 100,
  socialMedia: {
    twitter: 'RojoIsTweeting',
    instagram: 'rojo.saint',
    facebook: 'Santi Rojo',
  },
  approvedCourses: [
    'Curso Básico de JavaScript',
    'Curso Práctico de JavaScript',
  ],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Básico de Css',
        'Curso Básico de JavaScript',
        'Curso Práctico de JavaScript',
      ],
    },
    {
      name: 'Escuela de Videojuegos',
      courses: [
        'Curso de Introducción a la producción de videojuegos',
        'Curso de Unreal Engine',
        'Curso de Unity 3D',
      ],
    }
  ]
}

const zeus1 = {
  name: 'Zeus',
  username: 'ZeusRojo',
  points: 100,
  socialMedia: {
    twitter: 'IshiIsTweeting',
    instagram: 'rojo.ishi',
    facebook: 'Zeus Rojo',
  },
  approvedCourses: [
    'Curso Básico Data Business',
    'Curso de Data Viz',
  ],
  learningPaths: [
    {
      name: 'Escuela de Desarrollo Web',
      courses: [
        'Curso Básico de Css',
        'Curso Básico de JavaScript',
        'Curso Práctico de JavaScript',
      ],
    },
    {
      name: 'Escuela de Data Science',
      courses: [
        'Curso Básico Data Business',
        'Curso de Data Viz',
        'Curso de Tableau',
      ],
    }
  ]
}

// Creando Objetos con Clases

class Course {
  constructor({
    courseName,
    classes = [],
  }) {
    this._courseName = courseName;
    this.classes = classes;
  }

  get courseName() {
    return this._courseName;
  }

  set courseName(nuevoNombre) {
    if(nuevoNombre === 'Curso Malito de Programación Básica') {
      console.error('Wey...no')
    } else{
      this._courseName = nuevoNombre;
    }
  }
}

const cursoProgBasica = new Course({
  courseName: 'Curso de Programación Básica',
})

const cursoDefinitivoHTML = new Course({
  courseName: 'Curso Definitivo de HTML y CSS',
})

const cursoPracticoHTML = new Course({
  courseName: 'Curso Práctico de HTML y CSS',
})

class LearningPath {
  constructor({
    school,
    courses = [],
  }) {
    this.school = school;
    this.courses = courses;
  }
}

class Students {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    },
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

// Instancias de Escuelas

const escuelaDesarrolloWeb = new LearningPath ({
  school: 'Escuela de Desarrollo Web',
  courses: [
    cursoProgBasica,
    'Curso Básico de JavaScript',
    'Curso Práctico de JavaScript',
  ]
});

const escuelaVideojuegos = new LearningPath({
  school: 'Escuela de Videojuegos',
  courses: [
    cursoProgBasica,
    'Curso de Unreal Engine',
    'Curso de Unity 3D',
  ]
});

const escuelaDataScience = new LearningPath({
  school: 'Escuela de Data Science',
  courses: [
    'Curso Básico Data Business',
    'Curso de Data Viz',
    'Curso de Tableau',
  ]
});


// Instancias de Alumnos

const miguel = new Students({
  name: 'Miguel',
  username: 'ZieloNebrito',
  email: 'tuzielonebrito@catmail.com',
  twitter: 'CazandoPajaritos',
  learningPaths: [
    escuelaDesarrolloWeb,
    escuelaVideojuegos,
  ]
});

const pilar = new Students({
  name: 'Pilar',
  username: 'lagordalaloca',
  email: 'lagorditafiliz@catmail.com',
  instagram: 'filizlaborda',
  learningPaths: [
    escuelaDataScience,
    escuelaVideojuegos,
  ]
});

const lu = new Students({
  learningPaths: new LearningPath({
    school: 'Escuela de UX/UI',
    courses: [
      'Curso de UX Design',
      'Curso de UI Design',
      'Curso de UX Writing',
      'Curso de UX Research'
    ]
  })
});

