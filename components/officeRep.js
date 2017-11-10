class OfficeRep {
  constructor(offices, reps) {
    this.offices = offices,
    this.reps = reps
  }

  connectedOfficials() {
    let connectedReps = []
    this.reps.forEach((rep, i) => {
      let office = this.offices.find(o => o.officialIndices.includes(i))
      connectedReps.push(Object.assign({}, rep, { office: office }))
    })
    return connectedReps
  }
}
