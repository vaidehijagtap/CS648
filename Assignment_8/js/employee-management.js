/*eslint-env browser*/

var primaryColor = "#589ACE";
var secondary1 = "#D2DEEE";
var secondary2 = "#EAEFF5";

var employee_list;

employee_list = [["Roberto Scott", "Officer", 01], ["Michael McKeena", "Assistant Manager", 02], ["Kevin Rolland", "Employee", 03], ["Bruno Neuer", "Employee", 04], ["Tony Kroos", "Manager", 05]];

//Helper function to get an element from the DOM
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var empAdd = function () {
    "use strict";

    window.console.log("In addEmp()");

    var name, title, extension, registration_header, header = "", msg, required;

    required = "* Required field";
    msg = "Please review your entries and complete all required fields";

    name = $("emp_name");
    title = $("emp_title");
    extension = $("emp_extension");
    registration_header = $("registration_header");

    window.console.log("in addEmp");
    if (name.value === "") {
        name.nextElementSibling.innerHTML = required;
        header = msg;
    } else {
        name.nextElementSibling.innerHTML = "";
    }

    if (title.value === "") {
        title.nextElementSibling.innerHTML = required;
        header = msg;
    } else {
        title.nextElementSibling.innerHTML = "";
    }

    if (extension.value === "") {
        extension.nextElementSibling.innerHTML = required;
        header = msg;
    } else {
        extension.nextElementSibling.innerHTML = "";
    }

    if (header === msg) {
        registration_header.firstChild.nodeValue = header;
    } else {
        var newEmp = [name.value, title.value, extension.value];
        var index = employee_list.push(newEmp);

        console.log("Adding " + newEmp);
        addEmployeeTableRow(index-1);
        window.alert("New employee added!");
        name.value = "";
        title.value = "";
        extension.value = "";
        registration_header.firstChild.nodeValue = "";
        name.nextElementSibling.innerHTML = "";
        title.nextElementSibling.innerHTML = "";
        extension.nextElementSibling.innerHTML = "";

        window.console.log("submitting");

    }

    window.console.log("exiting addEmp()");
}


function addEmployeeTableRow(index) {
    var table = $("employee_info_table");
  
    // creating cell for employee data
    var row = document.createElement("tr");
    row.id = employee_list[index][2] + "_row";
    for (var j = 0; j < employee_list[index].length; j++) {
      var td = document.createElement("td");
      td.innerHTML = employee_list[index][j];
    //   td.style.border = "1px solid white";
    //   td.style.font = "14px arial";
      row.appendChild(td);
    }
  
    // need a cell to place the delete button in
    var td = document.createElement("td");
    // td.style.border = "1px solid white";
    // td.align = "center";
    row.appendChild(td);
  
    // adding delete button
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    // button.style.background = primaryColor;
    button.style.color = "white";
    button.style.background = primaryColor;
    // button.style.padding = "3px 5px";
    button.style.margin = "5px 5px";
    button.id = employee_list[index][2]+"_btn";
    row.lastChild.appendChild(button);
  
    // alternating row color
    if (index%2 === 0) {
      row.style.background = secondary1;
    } else {
      row.style.background = secondary2;
    }
    table.appendChild(row);
    
    table.previousElementSibling.innerHTML = "Showing "+ employee_list.length + " Employees";
}

function deleteEmployee(id, ext) {
    employee_list.splice(id, 1);
    var row = $(ext + "_row");
    console.log("Deleting row: " + row.id);
    row.remove();

    
    $("employee_info_table").previousElementSibling.innerHTML = "Showing "+ employee_list.length + " Employees";
  }


  function createInputs() {
    var formDiv = document.createElement("div");
    formDiv.id = "registration_form_div";
    formDiv.style.minWidth = "200px";
    formDiv.style.maxWidth = "50%";
    formDiv.style.display = "block";
    document.body.appendChild(formDiv);

    var inputDiv1 = document.createElement("div");
    var label1 = document.createElement("label");
    label1.innerHTML = "Name";
    var input1 = document.createElement("input");
    input1.style.margin = "10px";
    input1.id = "emp_name";
    var span1 = document.createElement("span");
    span1.class = "error";

    inputDiv1.appendChild(label1);
    inputDiv1.appendChild(input1);
    inputDiv1.appendChild(span1);
    formDiv.appendChild(inputDiv1);

    var inputDiv2 = document.createElement("div");
    var label2 = document.createElement("label");
    label2.innerHTML = "Title";
    var input2 = document.createElement("input");
    input2.style.margin = "10px";
    input2.id = "emp_title";
    var span2 = document.createElement("span");
    span2.id = "error";

    inputDiv2.appendChild(label2);
    inputDiv2.appendChild(input2);
    inputDiv2.appendChild(span2);
    formDiv.appendChild(inputDiv2);


    var inputDiv3 = document.createElement("div");
    inputDiv3.style.marginBottom = "10px";
    var label3 = document.createElement("label");
    label3.innerHTML = "Extension";
    var input3 = document.createElement("input");
    input3.style.margin = "10px";
    input3.id = "emp_extension";
    var span3 = document.createElement("span");
    span3.id = "error";

    inputDiv3.appendChild(label3);
    inputDiv3.appendChild(input3);
    inputDiv3.appendChild(span3);
    formDiv.appendChild(inputDiv3);
  
    var submitDiv = document.createElement("div");
    submitDiv.style.clear = "right";
    submitDiv.align = "left";
    
    var submitBtn = document.createElement("button");
    submitBtn.id = "btn_emp_add";
    submitBtn.style.marginBottom = "10px";
    submitBtn.style.padding = "3px 20px";
    submitBtn.innerHTML = "Add";
    submitBtn.addEventListener("click", empAdd);
    submitDiv.appendChild(submitBtn);
  
    formDiv.appendChild(submitDiv);

    var registrationMsgHeader = document.createElement("h3");
    registrationMsgHeader.id = "registration_header";
    registrationMsgHeader.innerHTML = "&nbsp;";
    formDiv.appendChild(registrationMsgHeader);

    var showingEmployeesMsg = document.createElement("h3");
    formDiv.appendChild(showingEmployeesMsg);

    var employee_info_table = document.createElement("table");
    employee_info_table.id = "employee_info_table";
    employee_info_table.style.width = "100%";
    employee_info_table.style.border = "2px solid gray";
    employee_info_table.style.background = primaryColor;
    formDiv.appendChild(employee_info_table);
  }
  

var init = function (e) {
    "use strict";

    var mainHeader = document.createElement("h1");
    mainHeader.innerHTML = "The Employee Management Application";
    document.body.appendChild(mainHeader);
  
    var addEmployeeText = document.createElement("h3");
    addEmployeeText.id = "addemployee_text";
    addEmployeeText.innerHTML = "Add employee";
    document.body.appendChild(addEmployeeText);

    createInputs();
    
    //Setting Listeners on Delete buttons
    document.body.addEventListener('click', function (e) {
        for (var i = 0; i< employee_list.length; i++) {
            if( e.srcElement.id == employee_list[i][2]+"_btn" ) {
                deleteEmployee(i, employee_list[i][2]);
            }
        }
    });
    
    display();
}

function display() {
    "use strict";

    var empInfoTable = $("employee_info_table");

    empInfoTable.previousElementSibling.innerHTML = "Showing "+ employee_list.length + " Employees";

    empInfoTable.innerHTML = "<thead><tr><th>Name</th><th>Title</th><th>Extension</th><th></th></tr></thead>";

    for (var i = 0; i < employee_list.length; i += 1) {
        addEmployeeTableRow(i);
    }

    empInfoTable.innerHTML += "</tbody>";
}

window.addEventListener("load", init);