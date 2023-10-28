const app = require('./app');

/* app.listen(3800,()=> console.log('server on port 3800')) */

async function main(){
    await app.listen(3000);
    console.log('Server is running');
}

main();