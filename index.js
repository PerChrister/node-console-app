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
    console.log("OS displayed");
}

function startServer(){

    const http = require('http');

    const hostname = 'localhost';
    const port = 3000;
    
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });

}