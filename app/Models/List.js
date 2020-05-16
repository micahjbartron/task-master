import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.listColor = data.listColor
    this.listName = data.listName
    this.listItem = data.listItem || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template() {
    return /*html*/`
  <div class="col-3">
  <div class="card shadow">
    <div class="card-body d-flex flex-column">
      <i class="fas fa-times text-danger align-self-end action" onclick="app.listController.deleteList('${this.id}')"></i>
      <h4 id="color" class="card-title bg-info text-light text-center">${this.listName}</h4>
      <ul class="pl-3">
        ${this.ListItemsTemplate}
      </ul>
      <form onsubmit="app.listController.addItem(event, '${this.id}')">
        <div class="form-group d-flex">
          <input type="text" class="form-control" name="item" id="item" aria-describedby="helpId"
            placeholder="Add Items..." required>
          <button type="submit" class="btn btn-outline-success ml-1"><i class="fas fa-plus "></i></button>
        </div>
      </form>
    </div>
  </div>
</div>
  `
  }




  get ListItemsTemplate() {
    let template = ""
    this.listItem.forEach((item, index) => {
      template += /*html*/`
      <li>${item}
          <i class="fas fa-times text-danger action" onclick="app.listController.deleteItem('${this.id}', ${index})"></i>
        </li>
      `
    })
    return template;
  }


}
