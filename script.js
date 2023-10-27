function showTime() {
  var options = {
    timeZone: 'America/Chicago', // Set the time zone to CST (Central Standard Time)
    hour12: false, // Use 24-hour format
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  
  document.getElementById('currentTime').innerHTML = new Date().toLocaleString('en-US', options);
}

showTime();

setInterval(function () {
  showTime();
}, 1000);
function calculateGPA(){
  const g1 = document.getElementById("g1").value;
    const h1 = document.getElementById("h1").value;
    const g2 = document.getElementById("g2").value;
    const h2 = document.getElementById("h2").value;
    const g3 = document.getElementById("g3").value;
    const h3 = document.getElementById("h3").value;
    const g4 = document.getElementById("g4").value;
    const h4 = document.getElementById("h4").value;
    const g5 = document.getElementById("g5").value;
    const h5 = document.getElementById("h5").value;

    const gArray= [g1, g2, g3, g4, g5];
    let hArray=[h1,h2,h3,h4,h5];
    let x=0;
    let gpaVal=0;
    let totalHours=0;
    while(x<5){
      if (gArray[x]=="A+"){
        gpaVal+= 4.3*hArray[x];
      }
      if (gArray[x]=="A"){
        gpaVal+= 4*hArray[x];
      }
      if (gArray[x]=="A-"){
        gpaVal+= 3.7*hArray[x];
      }
      if (gArray[x]=="B+"){
        gpaVal+= 3.3*hArray[x];
      }
      if (gArray[x]=="B"){
        gpaVal+= 3*hArray[x];
      }
      if (gArray[x]=="B-"){
        gpaVal+= 2.7*hArray[x];
      }
      if (gArray[x]=="C+"){
        gpaVal+= 2.3*hArray[x];
      }
      if (gArray[x]=="C"){
        gpaVal+= 2*hArray[x];
      }
      if (gArray[x]=="C-"){
        gpaVal+= 1.7*hArray[x];
      }
      if (gArray[x]=="D+"){
        gpaVal+= 1.3*hArray[x];
      }
      if (gArray[x]=="D"){
        gpaVal+= 1*hArray[x];
      }
      if (gArray[x]=="D-"){
        gpaVal+= .7*hArray[x];
      }
      else{
        gpaVal+=0;
      }
      
      x++;
      
    }
    let y=0;
    while(y<5){
      totalHours= totalHours + parseFloat(hArray[y], 10);
      y++;
    }
    const sum= [h1,h2,h3,h4,h5].reduce((partialSum, a) => partialSum + a, 0);
    let finalGPA= gpaVal/totalHours;
    const textToAdd = `
       <div id='GPA'>
            <div id="card">
            <h3> Your GPA is ${finalGPA} with ${totalHours} hours </h3>
            </div>
        </div>
        
    `;
    const displayTextDiv = document.getElementById("displayText");
    displayTextDiv.innerHTML = textToAdd;
    

}
