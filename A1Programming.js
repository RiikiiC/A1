// 1. Create hospital data
let hospital = {
    name:"Oakville Public Hospital",
    patients:[
        {
            id:"001",
            fullName:"Ted Mosby",
            dateOfBirth:"1978.04.25",
            symptom:["runny nose", "sore throat", "cough"]
        },
        {
            id:"002",
            fullName:"Marshall Eriksen",
            dateOfBirth:"1978.11.02",
            symptom:["Stomach pain", "vomiting", "burping"]
        },
        {
            id:"003",
            fullName:"Lily Aldrin",
            dateOfBirth:"1978.03.22",
            symptom:["Sneezing", "stuffy nose", "headache"]
        }
    ]
};


// 2. Create a function named "showPatients"
function showPatients(patientsLi){
    let hospitalData = document.querySelector("#hospital");

    let newName = document.createElement("h1")
    newName.textContent = hospital.name;
    hospitalData.appendChild(newName);
    console.log(newName)
    
    function createPatientsInfo(patient) {

        for(let i=0; i<hospital.patients.length; i++){
            let patientsInfo = document.createElement("h2");
            
            patientsInfo.textContent = `${hospital.patients[i].fullName}
                ${hospital.patients[i].dateOfBirth}`;

            hospitalData.appendChild(patientsInfo);
            console.log(patientsInfo);

            function createSymptomsList(symptomsArray){
                let symptomList = document.createElement("ul");
                
                for (let j = 0; j < symptomsArray.length; j++) {
                    let newLi = document.createElement("li");
                    newLi.textContent = symptomsArray[j];
                    symptomList.appendChild(newLi);
                    console.log(newLi)
                };
            
                hospitalData.appendChild(symptomList)
                return symptomList;
            }
            let symptom = createSymptomsList(hospital.patients[i].symptom);
            console.log(symptom);
        }            

    }
    let info = createPatientsInfo(patientsLi);
    // console.log(info);

    return hospitalData.innerHTML;

}
let data = showPatients(hospital);
// console.log(data);
