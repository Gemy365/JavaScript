const team = ['Mohamed', 'Gamal', 'Kimo', 'Ali', 'Sakka']


const TeamApprove = () => `Team size: ${team.length}`

const TeamReject = () => 'Too many people on your team'

const Message = team.length <= 4 ? TeamApprove() : TeamReject() // advanced of IF Statement

console.log(Message)