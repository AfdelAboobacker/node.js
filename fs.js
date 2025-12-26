const fs = require("fs");
// fs.mkdir("core_Modules", (err) => {
//   if (err) throw err;
//   console.log("created");
// });


// fs.writeFile("core_Modules/text.txt","",(err)=>{
//     if (err) throw err;
//     console.log("file created");
    
// })

// fs.appendFile("core_Modules/text.txt","hahahahaha\nwhy so serious",(err)=>{
//     if (err) throw err;
//     console.log("appended");
    
// })
// =====================================================================================
// fs.mkdir("folder",(err)=>{
//     if (err) throw arrayBuffer;
//     console.log('folder created');
    
// })

// fs.writeFile("folder/text.txt"," ",(err)=>{
//     if (err) throw arrayBuffer;
//     console.log('file created');
    
// })

// fs.appendFile("folder/text.txt","helooo ",(err)=>{
//     if (err) throw arrayBuffer;
//     console.log('file updated');
    
// })


// fs.readFile("folder/text.txt",'utf8',(err,data)=>{
//     if (err) throw arrayBuffer;
//     console.log(data);
    
// })

// fs.unlink("folder/text.txt",(err)=>{
//     if (err) throw arrayBuffer;
//     console.log("file deleted");
    
// })

fs.appendFile("core_Module/text.txt","\nhow are you",(err)=>{
    if (err) throw err;
    console.log('folder updated');
    
})