
const apiKey = 'YOU_API_KEY'

document.addEventListener('DOMContentLoaded', function(event) {
  getCivicInfo()
})

function getCivicInfo() {
  fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=${apiKey}`,)
    .then(res => res.json())
    .then()
}
