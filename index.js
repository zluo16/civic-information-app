
const apiKey = 'AIzaSyAhJvS-bFk3pfLbA9lJSItIs2dIr2RPrE0'

document.addEventListener('DOMContentLoaded', function(event) {
  getCivicInfo()
})

function getCivicInfo() {
  fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=${apiKey}`,)
    .then(res => res.json())
    .then()
}
