import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      cursos: [{
        id: 1, img: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png', nombre: 'JavaScript Avanzado', costo: 30000,
        duracion: '2 meses', cupos: 20, inscritos: 10, completado: false,
        fecha_registro: '06/03/2022', descripcion: 'Curso con las nuevasactualizaciones de JavaScript.'
      },
      {
        id: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', nombre: 'CSS para principiantes',
        costo: 10000, duracion: '1 mes', cupos: 35, inscritos: 23,
        completado: false, fecha_registro: '05/03/2022', descripcion:
          'Aprendiendo estilos con CSS desde el nivel más básico.'
      },
      {
        id: 3, img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', nombre: 'JavaScript Básico de 0 a 100', costo: 20000, duracion: '2 meses', cupos: 25,

        inscritos: 0, completado: true, fecha_registro: '05/03/2022',
        descripcion: 'Programando para la web con JavaScript.'
      },
      {
        id: 4, img:
          'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', nombre:
          'HTML Básico', costo: 10000, duracion: '1 mes', cupos: 35, inscritos:
          0, completado: true, fecha_registro: '31/01/2022', descripcion:
          'Aprende HTML 5 y crea tus primeras páginas web paso a paso condecenas de ejercicios.'
      },
      {
        id: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', nombre: 'Vue JS de 0 a 100', costo:
          85500, duracion: '5 meses', cupos: 35, inscritos: 35, completado:
          false, fecha_registro: '06/03/2022', descripcion: 'Aprende desde cerocomo usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.'
      },
      {
        id: 6, img:
          'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png',
        nombre: 'Estilos con SASS', costo: 45000, duracion: '1 mes', cupos:
          40, inscritos: 35, completado: false, fecha_registro: '06/03/2022',
        descripcion: 'Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.'
      },]
    }
  },
  getters: {
    getCursos(state) {
      return state.cursos;
    },
    GetSuma(state) {
      const sum = state.cursos.reduce(
        (accummulator,curso) => accummulator + curso.costo 
      ,0);
      console.log(sum)
      return sum;
    }
  },
  mutations: {
    // método que recibe el estado y otras variables
    agregarNuevoCurso(state, x) {
      state.cursos.push(x);
    }
  },
  actions: {
  },
  modules: {
  }
})
