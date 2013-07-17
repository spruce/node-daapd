var daap = require('../lib/daap');
var Song = require('../lib/song').Song;

daap.createServer({
  advertise:true,
  songs: [new Song({
          file: 'Quutamo.mp3'
        })]
}).listen(36850);
