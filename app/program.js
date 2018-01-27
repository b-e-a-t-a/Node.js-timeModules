process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if(input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case '/getOSinfo':
        getOSinfo();
        break
      case '/version':
        process.stdout.write(process.versions.node);
        break;
      case '/language':
        process.stdout.write(process.env.OOBEUILang);
        break;
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    };
  }
});



var OSinfo = require('../modules/OSinfo');

OSinfo.print();

