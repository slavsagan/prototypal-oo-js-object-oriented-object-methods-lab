function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function () {
    return 'No, I must disagree'
  }
  BoardMember.prototype.approve = function () {
    return 'You can do that!'
  }
  BoardMember.prototype.doCharity = function () {
    return 'I like to help people.'
  }
  BoardMember.prototype.releasePressStatement = function () {
    return 'You will see great things from Scuber.'
  }
  BoardMember.prototype.sayHi = function () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }
}
let polishedBoardMember = new BoardMember('Mr. Polished', 'New York', 'law')

console.log(polishedBoardMember)
console.log(polishedBoardMember.name)
console.log(polishedBoardMember.homeState)
console.log(polishedBoardMember.training)

console.log(polishedBoardMember.veto())
console.log(polishedBoardMember.approve())
console.log(polishedBoardMember.doCharity())
console.log(polishedBoardMember.releasePressStatement())
console.log(polishedBoardMember.sayHi())
