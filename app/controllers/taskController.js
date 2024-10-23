//create
//demo 1
export const demo1= async (req,res)=>{
    //params
    let name=req.params.name;
    let age=req.params.age;
    let city=req.params.city;




    return res.json({message:name,city:city,age:age});
}


