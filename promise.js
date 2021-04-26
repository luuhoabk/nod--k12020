// vd1
let pr = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        // resolve("Da doi xong");
        reject(new Error("Co loi"));
    }, 2000); //doi 2 giay se gui ket qua
});

//pr.then(resolveHandle, rejectHandle);

function resolveHandle(data){
    console.log("data: " + data);
}

function rejectHandle(err){
    console.log(err+'');
}

//vd2
var fs = require('fs');

let readFile = function read(fileName){
    let pr = new Promise((resolve, reject)=>{

        //doc file bat dong bo => async wait
        fs.readFile(fileName, 'utf8', (err, data)=>{
            if(err){ //neu co loi
                reject(err); // truyen loi
            }else{
                resolve(data); // neu thanh cong truyen data
            }
        });
    });
    return pr;
}
// readFile('./api/config/text.txt').then(resolveHandle, rejectHandle);
readFile('./api/config/text.txt').then((data)=>{console.log(data), (error)=>{console.log("Err: "+error)}});

//Async wait => wait phai run ben trong 1 function co tu khoa async
// let res= await Promise; //cu phap di doi voi nhau

let checkCountDown = async ()=>{
    let res = await pr;
    console.log(res);
}
checkCountDown();