 var SpeechRecognition= window.webkitSpeechRecognition;
 var Recognition= new SpeechRecognition();

 function start(){
     document.getElementById("textbox").innerHTML="";
     Recognition.start();


 }
 Recognition.onresult= function(event){
     console.log(event);
     var content= event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML=content;
     console.log(content);
     if (content=="take my selfie"){
        speak();
     }
   
     }

     function speak(){
             var synth= window.speechSynthesis;
             n=localStorage.getItem("Name");
             speakdata=n+", Taking your selfie ";

             var utterthis=new SpeechSynthesisUtterance(speakdata);
             synth.speak(utterthis);
             Webcam.attach("#camera");
             setTimeout(function(){
                 Takephoto();
                
             },5000);
                 
             
             
             
                     
                 
            
             
             
             
     }
    var Camera= document.getElementById("camera");
    Webcam.set({
        width:320,
        height:240,
        image_format:'png',
        png_quality:90
    });
   function Takephoto(){
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML="<img id='MySelfie' src="+data_uri+" >";
           
       });
       Save();
   }
function Save(){
    link = document.getElementById("link");
    source = document.getElementById("MySelfie").src;
    link.href=source;
    link.click();
}
