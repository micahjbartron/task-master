import ListService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let list = _store.State.lists
  let template = ''
  list.forEach(l => template += l.Template)
  document.getElementById("lists").innerHTML = template
  //document.getElementById("color").innerHTML = colorSelector
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  createList(event) {
    event.preventDefault();
    let rawList = {
      listName: event.target.listName.value

    }
    ListService.createList(rawList)
    _drawLists()
  }
  deleteList(id) {
    ListService.deleteList(id)
    _drawLists()
  }
  addItem(event, listId) {
    event.preventDefault();
    let item = event.target.item.value
    try {
      ListService.addItem(item, listId)
    }
    catch (error) {
      alert(error.message)
    }
    _drawLists()
  }

  deleteItem(listId, index) {
    ListService.deleteItem(listId, index)
    _drawLists();
  }


}
console.log("hello from the controller");
