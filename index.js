var empArry=[];
function addEmployee(){
    let empName=document.getElementById("empName").value;
    let empSalary=document.getElementById("empSalary").value;
    let empObject={
        Name:empName,
        Salary:empSalary
    };
    empArry.push(empObject);
    console.log(empArry);
    updateTable()
}

function sortOnName(){
   empArry.sort(function(a,b){
    var x=a.Name.toLowerCase();
    var y=b.Name.toLowerCase();
    if(x<y){
        return -1;
    }
    if(x>y){
        return 1;
    }
    return 0;
   })
   for(let emp of empArry){
    console.log(emp);
}
updateTable()
}

function sortBysalary(){
    empArry.sort(function(a,b){
    return a.Salary-b.Salary
    })
    for(let emp of empArry){
        console.log(emp);
    }
    updateTable()
}

function remove(){
    sortBysalary();
    b=empArry.length-1;
    empArry.splice(b,1);
    for(let emp of empArry){
        console.log(emp);
    }
    updateTable()
}

function top3(){
    sortBysalary();
    
    console.log(b=empArry.slice(0,2));
    updateTable()
}
function updateTable() {
    const tableBody = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ""; // Clear existing rows

    for (let emp of empArry) {
        let row = tableBody.insertRow(); // Create a new row
        let cellName = row.insertCell(0); // Create name cell
        let cellSalary = row.insertCell(1); // Create salary cell
        cellName.textContent = emp.Name; // Set name
        cellSalary.textContent = emp.Salary; // Set salary
    }
}