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

// Department Dropdown
var dropdown = document.getElementById('department');
if(dropdown) {
    var departmentNames = [
        'Commercial Services - Programmes & Innovation (Eric Zie)',
        'Domain Architecture (Chris Ibbetson)',
        'Team (Pankaj Kane)',
        '(Blank)',
        '(Blank)',
        'Team (Nichola Doyle)',
        'Engage with the Bank (Fiona Sutherland)',
        'Customer Direct Experience (Joan O\'Sullivan)',
        'Team (John Toms)',
        'Team (Darren Firth)',
        'Team (Alan Lochhead)',
        'Cash Strategy (Richard Healy (Inherited))',
        'Infrastructure & Tools Transformation (Liam Kealey)',
        'Transformation Engineering (John Robinson)',
        'Commerical, People & Property Simplification (Tia Ferguson)',
        'Infrastructure Transformation (David Page)',
        'Application Transformation (Angela Cassidy)',
        'Colleague Platforms (Elizabeth Smith)',
        'Hosting Services - Networks (Howard Johnson)',
        'Colleague Platforms (Paul Cahill-Britton)',
        'Colleague Platforms (Steve Cant)',
        'Colleague Platforms (Maggie Murphy-Codrington)',
        'Colleague Platforms (David Drylie)',
        'Colleague Platforms (Ian Davies)',
        'ServiceNow Platform (Brian Crighton)',
        'Commercial & Private Banking -  Bankline Direct Reporting (Martin Foulger)',
        'Commercial & Private Banking -  Bankline Direct Payments (Savio D Souza)',
        'Team (Michael Woodward)',
        'Team (John Khutan)',
        'Commercial & Private Banking -  Digital Customer Support (Amanda Scott)',
        'Team (Matthew Bausor)',
        'Team (Mark Coupland)',
        'Commercial & Private Banking -  Bankline Mobile (Ricardo Didonato),',
        'Commercial & Private Banking -  Digital Product Owners (Mark Beard)',
        'Commercial Services - Production Services (Joe Harley)',
        'Team (Dharam Singh)',
        'Team (Joe Frost (Inherited))',
        'Commercial Services - Production Services (Robert Coleman)',
        'Commercial Services - Programmes & Innovation (Julie King)',
        'Commercial Services - Production Services (Gary Watson)',
        'Team (James Lyon)',
        'Commercial Services - Production Services (Carol McCabe)',
        'Commercial Services - Production Services (Joe Frost (Inherited))',
        'Core Banking Domain (Monique Riddle)',
        'Shared Services Technology (William Furneaux)',
        'Quality Centre of Excellence (Chris Booth)',
        'Financial Crime Domain (Douglas MacEwan)',
        'Core Modernisation Programme (Philip Brandom)',
        'Strategy & Business Performance (Alistair Hamilton)',
        'Team (Angus Wilson)',
        'Team (Mark Crosthwaite)',
        'Team (Michael Plumb)',
        'Team (Reg Skelton)',
        'Team (Scott Millar)',
        'Team (David Forfar)',
        'Digital Channels (Phil McCombes)',
        'Digital Channels (Nick Tye)',
        'Digital Channels (Jane Cubbidge)',
        'Digital Channels (Noel O\'Sullivan)',
        'Team (Allan Misquith)',
        'Digital Channels (Isobel Grant)',
        'Digital Channels (Keith Hurd)',
        'Digital Channels (Satya Gopal Konathala)',
        'Digital Channels (Nick White)',
        'Team (John White)',
        'Team (Li Qun Taylor (Inherited))',
        'Onboarding & Account Opening (Tracey Bailey)',
        'Mobile (Steven Gilbert)',
        'Digital Platforms (Nirojan Nirmalan)',
        'Web Experience (Sharon Douglas)',
        'Team (Matthew Harwood)',
        'Manage My Primary Account & Effortless Payments (Sue Rees)',
        'Team (Karen Kerr)',
        'Buy Now Pay Later (Mei Clark)',
        'Save & Invest & Rewards (Murray Davies)',
        'Manage My Borrowing (Stephen McNally)',
        'Finance a Large Purchase (Uma Iyer)',
        'Buy a Home (Brian McCracken)',
        'Own a Home (Vikki Martineau)',
        'Distributed Home Buying Ownership Services (David Harrison)',
        'Broker My Clients Mortgage (Stephen Haynes)',
        'Team (Neville Henderson)',
        'Performance & Business Management Centre of Excellence (Robert Camp (Inherited))',
        'Enterprise Engineering Centre of Excellence (Gavin Findlayson)',
        'Enterprise Engineering Centre of Excellence (Andrew Rochester)',
        'Enterprise Engineering Centre of Excellence (Rebecca Wyer)',
        'Application Programming Interface Platform (Jonathan Haggarty)',
        'Enterprise Engineering Centre of Excellence (Jeremy Wilks)',
        'Enterprise Engineering Centre of Excellence (Manoj Kumar)',
        'Team (Caroline Dale)',
        'Team (Lee-Ann Sansom)',
        'Finance Solutions – Plan to Perform Platform (Robin Galloway)',
        'Team (Sian Somers)',
        'Team (Matthew Mulinder [C])',
        'Finance Solutions – Regulatory and Tax Reporting (Matt Randall)',
        'Finance Solutions – Infrastructure and Engineering, Risk and Control (Kevin Grainger)',
        'Finance Solutions – Liquidity Reporting (Chris Conway (Inherited))',
        'Finance Solutions – Portfolio Director, Quality, Transformation and Strategy (Jeremy Cohen)',
        'Team (Sara Islam)',
        'Hosting Services - Mainframe Services (Mick Roche)',
        'Hosting Services - Datacentres (Stephen Cozens)',
        'Hosting Services - Platform Management (Gareth Edwards)',
        'Hosting Services - Portfolio (Paul Berrey)',
        'Hosting Services - Application Support & Middleware Services (Angus Weir)',
        'Hosting Services - User Experience (Edward Revels)',
        'Team (Emma Bradley)',
        'Infrastructure Solutions (Paul Gunter)',
        'Hosting Services - Client Server (Gordon Slider)',
        'Infrastructure Solutions (Ian Courtney)',
        'Hosting Services - Cloud Platforms (Mark Campbell)',
        'Hosting Services - Legacy Operations (Tommy Ure)',
        'Team (Colin Mason)',
        'Team (John Peters)',
        'HR Solutions (Neil Buyers)',
        'Team (Janine Burke)',
        'Team (Stewart Whitlie)',
        'Team (Les Cashin)',
        'Team (Mark Duffy)',
        'Digital HR ServiceNow (Eleanor Priestley)',
        'HR Solutions (Amit Kumar)',
        'Team (Paul Barbour)',
        'Cora (Ankit Chhajer)',
        'Team (Emma Burnett)',
        'Bank in One Place (Rachael Colville-Walker)',
        'Team (Areti Ioannou)',
        'Team (Andrew Robinson)',
        'Team (Nathan Flowers)',
        'New Customer Propositions (Robert Dalziel)',
        'New Customer Propositions (Douglas Bennett)',
        'New Customer Propositions (Li Chiu)',
        'New Customer Propositions (Garner Robertson)',
        'Team (Paul Smith)',
        'New Customer Propositions (Nicholas Barlow)',
        'Customer Remote Experience (Philip Timson)',
        'New Customer Propositions (David Weatherhead)',
        'Team (Anne Ogilvie)',
        'Team (Sean Marc)',
        'Team (Andy Fox [C])',
        'Team (Fraser Marks [C])',
        'Team (Shelley Ward)',
        'Team (Lindsay Russell)',
        'Team (Melissa Tanudirdja)',
        'Team (Fiona Hayden (Inherited))',
        'Team (Darren Bloomfield)',
        'Security (Glenn Attridge)',
        'Security (Eleanor Sim)',
        'Team (Eleanor Sim)',
        'Security (John McDiarmid)',
        'Security (Michael Gallacher)',
        'Security (Ian Wallace)',
        'Security (Silas Bartlett)',
        'Team (Richard Anson)',
        'Team (Hugh Ducker)',
        'Team (Philip Martin)',
        'Team (Melissa Hand)',
        'Team (Matthew Davies)',
        'Distributed Home Buying Ownership Services (Emma Sullivan)',
        'Performance & Business Management Centre of Excellence (Liz Cuthbert)',
        'Architecture - Franchise Domains (Robert Riddell)',
        'Architecture Governance and Business Support (Jane Marr)',
        'Architecture - Shared Domains (Iain Mortimer)',
        'MiMo Architecture & Design (Craig Hilton)',
        'Business Architecture and Archimate Service (Chris Kent)',
        'MiMo Platform (Alan Johnston (Inherited))',
        'Strategy Centre of Excellence (Ian Baron)',
        'Team (Amna Zaidi (Inherited))',
        'Service Delivery & Operational Resilience (Michael Douglas)',
        'Service Delivery & Operational Resilience (Sandy MacKenzie)',
        'Service Delivery & Operational Resilience (David Kerr)',
        'Service Delivery (Craig Armour)',
        'Team (Brian Freeborn)',
        'Service Delivery (Clare Dorricott)',
        'Mandatory (Nicky Carlsen)',
        'Business Operating Model Design (Dennis Quigley)',
        'Lending (Trish Arksey)',
        'Target Operating Model Transformation (Elizabeth Dicken)',
        'Product Transformation (Hazel Thompson)',
        'Lombard (Michael Thomas)',
        'Digital Distribution (David Jones)',
        'Customer Journey Accelerator Labs (Fiona Wing)',
        'Team (Adam Read)',
        'Onboarding & Account Opening (Vishal Mohan)',
        'Working Capital (Sonya Cunningham)',
        'Banker Tools (Melanie Moreland)',
        'Services Solution Design (Alistair Armstrong)',
        'Team (Nick Vaughan)',
        'Pan Personal Banking (Janey Agnew)',
        'Team (Sharon Davison)',
        'Every Day Banking Services (Helen Smith (Inherited))',
        'Team (Simon Marlow)',
        'Team (Paul Irons)',
        'Team (Amaninder Bector)',
        'Enterprise Solutions (Nigel Hayward [C] (Inherited))',
        'Team (Glen Clayton)',
        'Customer Remote Experience (Richard Healy (Inherited))',
        'Team (Dennis Morris)',
        'Team (Alan Sneddon)',
        'Team (Natalie Mounsey)',
        'Cost & Portfolio Management (Ged Hope)',
        'Workforce & Capability (Thomas Carrigan)',
        'Technology Performance & Business Management Centre of Excellence Transition (Sara Jane Hamilton)',
        'Business Compliance (Rachel Cardwell)',
        'Vendor Management (Mark Burns)',
        'Technology Performance & Business Management Colleague Journeys (Melanie Craig)',
        'Team (Nikki Jamieson)',
        'Market Solutions (Anurag Vohra)',
        'Commercial Technology Leadership (Rajesh M K)',
        'Technology - Performance & Business Management (Chitra Saisekar)',
        'Intelligent Automation (Punjit Malhotra)',
        'Technology - Chief Technology Office - Performance & Business Management (Saiprasad Muzumdar)',
        'Delivery Transformation (Uma Palaniappan)',
        'Distributed Home Buying Ownership Services (Rahul Soni)',
        'Customer Direct Experience (Kumar Ramani)',
        'Digital Channels (Prabhakar Ramakrishnan)',
        'Team (Anantha Selvaraj)',
        'Technology Services India Management (Jayanthi Rajaram)',
        'Team (Alexander Haylett)',
        'Team (Claire Nelson)',
        'Team (Catherine McGough)',
        'Team (Chris Alldred)',
        'Team (Amandeep Bindra)',
        'Team (Mark Raine)',
        'Team (Sumit Mathur)',
        'Treasury Solutions (Divye Trehan)',
        'Team (Andrew Ruocco)',
        'Team (Rajesh Kaushal)',
        'Team (Richard Davis)'
        ]

    for(var i=0,l=departmentNames.length; i<l; i++) {
        var departmentName = departmentNames[i];

        var option = document.createElement('option');
        option.setAttribute('value',departmentName);

        var optionText = document.createTextNode(departmentName);
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
    $('table.display').DataTable();
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