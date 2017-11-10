class RepCard {
  constructor(rep) {
    this.name = rep.name,
    this.address = rep.address[0],
    this.phone = rep.phones[0],
    this.party = rep.party,
    this.website = rep.urls[0],
    this.photoUrl = rep.photoUrl,
    this.office = rep.office,
    this.channels = rep.channels
  }

  display() {
    return `
      <div class='ui-card'>
        <div class='image'>
          <img src="${this.photoUrl}">
        </div>
        <div class='content'>
          <a class='header'>${this.name}</a>
        </div>
      </div>
    `
  }
}
