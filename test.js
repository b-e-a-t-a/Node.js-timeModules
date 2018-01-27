var os = require('os');

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


function getOSinfo() {
  var type = os.type();
  if(type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  console.log('System: ', type);
  console.log('Release: ', release);
  console.log('CPU model: ', cpu);
  console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
  console.log('User name: ', userInfo.username);
  console.log('Home dir: ', userInfo.homedir);
  console.log('time:');
  getTime();
};


// moja funkcja getTime
function getTime() {
  var uptime = os.uptime();
  var inMin = Math.floor(uptime / 60).toFixed(0);

  var inHours = Math.floor(uptime / 3600).toFixed(0);
  
  var secInhours = (uptime % 3600).toFixed(0);
  var secInMin = (secInhours / 60).toFixed(1);
  
  var minInHour = Math.floor(secInMin);
  var secInhour = (secInhours % 60);

  if (uptime < 3600) {
    console.log(inMin + ' min. ' + (uptime % 60) + ' sec.');
  } else {
    console.log(inHours + ' h ' + minInHour + ' min ' + secInhour + ' sec.');
  }
};



// szkielet funkcji:
function getTime(sec) {
  var inMin = Math.floor(sec / 60).toFixed(0);
  //console.log(inMin + ' min. ' + (sec % 60) + ' sec.');

  var inHours = Math.floor(sec / 3600).toFixed(0);
  
  var secInhours = (sec % 3600).toFixed(0);
  var secInMin = (secInhours / 60).toFixed(1);
  
  var minInHour = Math.floor(secInMin);
  var secInhour = (secInhours % 60); //ok
  //console.log(inHours + ' h ' + minInHour + ' min ' + secInhour + ' sec.');

  if (sec < 3600) {
    console.log(inMin + ' min. ' + (sec % 60) + ' sec.');
  } else {
    console.log(inHours + ' h ' + minInHour + ' min ' + secInhour + ' sec.');
  }
};

getTime(3700);