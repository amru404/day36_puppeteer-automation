const dc = require('./dc');


(async () => {

    await dc.initialize();
    await dc.login();
    await dc.moveTo();
    
  
  })();

// const maxy = require('./tugas-day36');


// (async () => {

//     await maxy.initialize();
//     await maxy.login();
//     await maxy.moveTo();
    
  
//   })();