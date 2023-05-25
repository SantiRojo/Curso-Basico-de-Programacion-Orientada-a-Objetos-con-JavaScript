class Comment {
  constructor({
    content,
    studentName,
    studentRole = 'estudiante',
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} likes`);
    console.log(this.content);
  }
}


function videoPlay(id) {
  const urlSecreta = 'https://platziultrasecreto.com/' + id;
  console.log('Se esta reproduciendo desde la url ' + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = 'https://platziultrasecreto.com/' + id;
  console.log('Pausamos la url ' + urlSecreta);
}


class PlatziClass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}







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
    isFree = false,
    lang = 'spanish',
  }) {
    this._courseName = courseName;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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
  isFree: true,
})

const cursoDefinitivoHTML = new Course({
  courseName: 'Curso Definitivo de HTML y CSS',
})

const cursoPracticoHTML = new Course({
  courseName: 'Curso Práctico de HTML y CSS',
  lang: 'english',
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Students {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse)
    } else {
      console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`)
    }
  }
}

class BasicStudent extends Students {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name}, no puedes tomar cursos en inglés`);
    }
  }
}

class ExpertStudent extends Students {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Students {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: 'profesor',
    });
    comment.publicar();
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

const miguel = new FreeStudent({
  name: 'Miguel',
  username: 'ZieloNebrito',
  email: 'tuzielonebrito@catmail.com',
  twitter: 'CazandoPajaritos',
  learningPaths: [
    escuelaDesarrolloWeb,
    escuelaVideojuegos,
  ]
});

const pilar = new BasicStudent({
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

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  username: 'freddier',
  email: 'freddyvega@platzi.com',
  instagram: 'freddiervega',
})