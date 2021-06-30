class Note {
  constructor(author, title, password, note, expiration_date) {
    this.author = author;
    this.title = title;
    this.password = password;
    this.note = note;
    this.expiration_date = expiration_date;
  }
  //getters
  get get_expiration_date() {
    return this.expiration_date
  }
  get get_author() {
    return this.author
  }
  get get_title() {
    return this.title
  }
  get get_password() {
    return this.password
  }
  get get_note() {
    return this.note
  }
  //setters
  set set_expiration_date(variable) {
    this.expiration_date = variable
  }
  set set_author(variable) {
    this.author = variable
  }
  set set_title(variable) {
    this.title = variable
  }
  set set_password(variable) {
    this.password = variable
  }
  set set_note(variable) {
    this.note = variable
  }

}