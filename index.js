console.log("------------------");
console.log("Choose an option:");
console.log("1. Read package.json");
console.log("2. Display OS info");
console.log("3. Start HTTP server");
console.log("------------------\n");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Option:  ', (answer) => {
  
    
switch(answer){
    case '1':
        readPackage();
        break;
    case '2': 
        displayOS();
        break;
    case '3': 
        startServer();
        break;
    default:
        console.log("Invalid number!");
        break;
}

  rl.close();
});


function readPackage(){
    const fs = require('fs');
    const readline = require('readline');

    const rl = readline.createInterface({
        input: fs.createReadStream('../package.json'),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
    console.log(`${line}`);
    });
}

function displayOS(){
    const os = require('os');

    let totalMemory = os.totalmem();
    totalMemory = totalMemory /1024 /1024 /1024;
    let freeMemory = os.freemem();
    freeMemory = freeMemory /1024 /1024 /1024;
    const osCPU = os.cpus().length;
    const osArch = os.arch();
    const osPlatform = os.platform();
    const osRelease = os.release();
    const osUser = os.userInfo().homedir;

    console.log("Getting OS Info...");
    console.log(`Total memory: ${totalMemory} GB`);
    console.log(`Free memory: ${freeMemory} GB`);
    console.log(`CPU: ${osCPU}`);
    console.log(`Arch: ${osArch}`);
    console.log(`Platform: ${osPlatform}`);
    console.log(`Release: ${osRelease}`);
    console.log(`User: ${osUser}`);
}

function startServer(){

    const http = require('http');

    const hostname = 'localhost';
    const port = 3000;
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World!');
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });

}