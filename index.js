const apiKey = 'YOUR_API_KEY'
const address = 'YOUR_ADDRESS'
var officialConnector

document.addEventListener('DOMContentLoaded', function() {
  getCivicInfo()
})

function getCivicInfo() {
  fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${address}&fields=offices,officials&includeOffices=true`,)
    .then(res => res.json())
    .then(data => {
      officialConnector = new OfficeRep(data.offices, data.officials)
      mountReps()
    })
}

function mountReps() {
  let mountPoint = document.getElementById('app')
  let reps = officialConnector.connectedOfficials().slice(2)
                              .map(rep => new RepCard(rep))
                              .map(card => card.display())
  mountPoint.innerHTML = reps.join("")
}
