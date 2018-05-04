$(document).ready(function() {

  $('#addBtn').click(function() {
    io.socket.post('/Team/addPlayersFromTsv', {
      team: $('#teamName').val(),
      path: $('#tsvPath').val()
    }, function(data, status) {
      if(status !== 'success') {
        console.error(status);
        return;
      }
      alert('Players added');
    })
  })

});
