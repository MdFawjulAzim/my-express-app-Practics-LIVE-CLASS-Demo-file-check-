import {UPLOAD_FOLDER} from "../config/config.js";
import {moveFile} from "../utility/moveFile.js";
//create
//demo 1
export const demo1= async (req,res)=>{
    //params
    let name=req.params.name;
    let age=req.params.age;
    let city=req.params.city;




    return res.json({message:name,city:city,age:age});
}

//demo 1 query string

export const demo1q= async (req,res)=>{

    let country=req.query.country;
    let lang=req.query.lang;
    

    return res.json({message:country,langague:lang});
}

//demo 2

export const demo2= async (req,res)=>{

    let data=req.body['city'];

    return res.json({message:data});
}

//demo 3

export const demo3= async (req,res)=>{

    let pic=req.files.pic.name;
    let resBody=req.body;
    return res.json({message:pic,resBody:resBody});
}

//demo 4 upload a file

export const demo4= async (req,res)=>{

    let myFile=req.files['myFile']
    let myFilePath=UPLOAD_FOLDER(myFile.name)
    await moveFile(myFile,myFilePath)
    return res.json({message:"successfully moved file"});
}

//demo 5 request headers

export const demo5= async (req,res)=>{

    let headers=req.headers;
    return res.json({message:headers});
}