$(document).ready(function () {
    if (typeof (Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
          w = new Worker("webworker.js");
        }
      w.onmessage = function (event) {
        for (let i = 0; i < event.data.length; i++) {
          document.getElementById("result"+(i+1)).innerHTML = event.data[i].name;
          document.getElementById("idname" + (i + 1)).innerHTML = event.data[i].id;
          document.getElementById("timeLimit" + (i + 1)).innerHTML = event.data[i].timelimit;
          document.getElementById("doe"+(i+1)).innerHTML = event.data[i].doe;
        }
       
          console.log(event.data);
        };
    }
    else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
});

 // for (let i = 0; i < event.data.length; i++) {
        //   document.getElementById("result"+(i+1)).innerHTML = event.data[i].student_id;
        //   document.getElementById("idname" + (i + 1)).innerHTML = event.data[i].questionnaire_id;
        //   document.getElementById("timeLimit" + (i + 1)).innerHTML = event.data[i].seen_status;
        //   document.getElementById("doe"+(i+1)).innerHTML = event.data[i].opened;
        // }
          // JSON.stringify(event.data);