//dropdown interactions
//first dropdown
$('#show-dropdown-first').click(function () {
  $('#hide-dropdown-first').toggle()
})

$('#hide-first').click(function () {
  $('#hide-dropdown-first').toggle()
})

//second dropdown
$('#show-dropdown-second').click(function () {
  $('#hide-dropdown-second').toggle()
})

$('#hide-second').click(function () {
  $('#hide-dropdown-second').toggle()
})

//third dropdown
$('#show-dropdown-third').click(function () {
  $('#hide-dropdown-third').toggle()
})

$('#hide-third').click(function () {
  $('#hide-dropdown-third').toggle()
})

//arrow interactions
//yellow arrow
$('#show-yellow').click(function () {
  $('#yellow-arrow').toggle()
  $('#gray-arrow').hide()
  $('#red-arrow').hide()
})

$('#hide-yellow').click(function () {
  $('#yellow-arrow').toggle()
})

//gray arrow
$('#show-gray').click(function () {
  $('#gray-arrow').toggle()
  $('#yellow-arrow').hide()
  $('#red-arrow').hide()
})

$('#hide-gray').click(function () {
  $('#gray-arrow').toggle()
})

//red arrow
$('#show-red').click(function () {
  $('#red-arrow').toggle()
  $('#gray-arrow').hide()
  $('#yellow-arrow').hide()
})

$('#hide-red').click(function () {
  $('#red-arrow').toggle()
})
