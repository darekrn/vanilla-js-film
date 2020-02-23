// import leftPad from './leftpad';

// const serNos = [6934, 23111, 23114, 1001, 211161];
// const partEl = document.getElementById('part-list');
// const strList = serNos.reduce(
//   (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''
// );
// console.log(strList)
// partEl.innerHTML = strList;

import HeaderView from './components/HeaderView'
import PubSub from './pubsub.js'
import FilmsGrid from './components/FilmsGrid';

// class Header {
//   constructor(element) {
//     this.element = element
//   }
//   render() {
//     var para = document.createElement("P");                       // Create a <p> node
//     var t = document.createTextNode("This is a paragraph.");      // Create a text node
//     para.appendChild(t);                                          // Append the text to <p>
//     document.getElementById(this.element).appendChild(para);
//   }
// }

//const dupa = new Header("middle")
//dupa.render()
const ps = new PubSub()
const headerView = new HeaderView('header', ps)
headerView.Render()
const filmsgrid = new FilmsGrid('filmsGrid',ps)
filmsgrid.Render()

class Store {
  constructor() {
    this.state = {}
    this.actions = {}
    this.mutations = {}
  }
}
