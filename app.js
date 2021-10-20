exports.subList = function(req,res,next) {
    const UNIT=req.UNIT||"A";
    const math=req.math||0;
    const chemistry=req.chemistry||0;
    const physics=req.physics||0;
    const biology=req.biology||0;
    const bangla=req.bangla||0;
    const english=req.english||0;
    console.log(chemistry);
    var subjects=[];
    if(UNIT==="A"){
        if(math>=6){
            subjects.push("Math");
            subjects.push("Computer Science & Engineering");
            subjects.push("Costal Studies & Desester Management");
        }
        if(chemistry>=6){
            subjects.push("Chemistry");
            subjects.push("Soil & Environmental Science");
        }
        if(physics>=6){
            subjects.push("Physics");
            subjects.push("Geology & Mining");
            if(subjects.indexOf("Computer Science & Engineering")===-1){
                subjects.push("Computer Science & Engineering");
            }
            if(subjects.indexOf("Costal Studies & Desester Management")===-1){
                subjects.push("Costal Studies & Desester Management");
            }
        }
        if(biology>=6){
            subjects.push("Zoology");
            subjects.push("Biochemistry & Biotechnology");
        }
    }else if(UNIT==="B"){
        if(bangla>=12){
            subjects.push("Bangla");
        }
        if(english>=14){
            subjects.push("English");
        }
        subjects.push("Philosophy");
        subjects.push("Journalism");
        subjects.push("History");
        subjects.push("Economics");
        subjects.push("Sociology");
        subjects.push("Public Administration");
        subjects.push("Political Science");
        subjects.push("Law");
    }else if(UNIT==="C"){
        subjects.push("Marketing");
        subjects.push("Management Studies");
        subjects.push("Accounting & Information System");
        subjects.push("Finance & Banking");
    }
    return subjects;
}