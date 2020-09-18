// Business Area Dropdown
var dropdown = document.getElementById('businessArea');
if(dropdown) {
    var businessAreaNames = ['Architecture & Future Solutions Lead', 
                    'Agile Transformation Lead (Darren Yeates)', 
                    'Business Enablement (Gurdeep Gill)Business Enablement (Gurdeep Gill)', 
                    'Cash Strategy (Richard Healy)', 
                    'Chief Technology Office Leadership (Mike Crisp)',
                    'Colleague Platforms (Simon Corcoran)',
                    'Commercial & Private Banking -  Bankline Direct (Tim Tor)',
                    'Commercial & Private Banking -  Digital Business Management (Louise Bevan)',
                    'Commercial & Private Banking -  Digital Channels and Services (Kim McNeil)',
                    'Commercial Services - Production Services (Joe Frost)',
                    'Core Banking (Iain McCorquodale)',
                    'Credit Risk Solutions (David Sansom)',
                    'Digital Channels (Li Qun Taylor)',
                    'Digital Channels (Miguel Tatay)',
                    'Distributed Every Day Banking & Short Term Borrowing (Darren Buckley)',
                    'Distributed Home Buying Ownership Services (Robert Camp)',
                    'Enterprise Engineering (Declan O\'Gorman)',
                    'Finance Solutions (Chris Conway)',
                    'Hosting Services (Iain McCorquodale)',
                    'Hosting Solutions (Ted Newman)',
                    'HR Solutions (Theresa Sutherland)',
                    'New Customer Propositions (Miles Hillier)',
                    'New Customer Propositions (Paul Weller [C])',
                    'Non Financial Risk (Nicola Emsley)',
                    'Resolution Planning (Fiona Hayden)',
                    'Security (Chris Ulliott)',
                    'Services Performance Analytics (John Varney) (John Varney)',
                    'Services Performance Excellence (Amanda Maxwell) (Amanda Maxwell)',
                    'Strategy & Architecture (Alan Johnston)',
                    'Team (Amna Zaidi)',
                    'Team (Fiona Morris)',
                    'Team (Grayson Thomas)',
                    'Team (Helen Smith)',
                    'Team (Nigel Hayward [C])',
                    'Team (Richard Healy)',
                    'Team (Richard Mulholland)',
                    'Team (Vicki Lund)',
                    'Technology Performance & Business Management (Gemma Willman)',
                    'Technology Personal Banking - Performance & Business Management (Alan Whelan)',
                    'Technology Services India Management (Neeraj Goyal)',
                    'Technology Transformation (Matthew Capel)',
                    'Treasury Solutions (Chris Ross)'
                ]

    for(var i=0,l=businessAreaNames.length; i<l; i++) {
        var businessAreaName = businessAreaNames[i];

        var option = document.createElement('option');
        option.setAttribute('value',businessAreaName);

        var optionText = document.createTextNode(businessAreaName);
        option.appendChild(optionText);

        dropdown.appendChild(option);
    }
}



// Form Validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
    }, false);
})();



//Dashboard Navigation
$(document).ready(function(){ 
    $("#myTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });
});


//Download CSV
function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], {type: "text/csv"});
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Hide download link
    downloadLink.style.display = "none";
    // Add the link to DOM
    document.body.appendChild(downloadLink);
    // Click download link
    downloadLink.click();
}


function exportTableToCSV(filename, classname) {
    var csv = [];
    var rows = document.querySelectorAll("table."+classname+" tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], 
        cols = rows[i].querySelectorAll("td:not(.action), th:not(.action)");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }
    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}


// Adding DataTables
$(document).ready(function() {
    $('table.display').DataTable(
        {
            dom: 'Bfrtip',
            buttons: [{
                    extend: 'excelHtml5',
                    text: 'Export as excel',
                    title: 'Pending_requests'
                } ]
        }
    );
} );


// Submitting Reject Reason
function openForm() {document.getElementById("rejectForm").style.display = "block";}
  
function closeForm() {document.getElementById("rejectForm").style.display = "none";} 

function submitRejectForm(){
    var rejectReason = document.rejectForm.reject.value;
    if (rejectReason === ""){
        alert("Please fill the input field");
        return false;
    }
    else {
        alert("Your response has been recorded successfuly!");
        return true; 
    }
}

function exportTable(){
    $("#pending").tabulator("download", "csv", "pending.csv");
}