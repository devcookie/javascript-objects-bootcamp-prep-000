var playlist = {
  
}

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist, {artistName: songTitle})
  return newPlaylist
}