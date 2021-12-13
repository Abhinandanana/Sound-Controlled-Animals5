function classifier(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classification=  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JAwe_T9Kn/model.json', modelReady);
    }

    function modelReady(){
        classification.classify(gotResults);
        }

        function gotResults(error, results){
            if(error){
                console.error(error);
            }
            else {
                console.log(results)

                document.getElementById("result_label").innerHTML= 'I can Hear- '+ results[0].label;
    document.getElementById("result_confidence").innerHTML= 'Accuracy- '+ (results[0].confidence*100).toFixed(2)+"%";

img1= document.getElementById('app_icons')

if (results[0].label== "Barking"){
    img1.src= 'icons8-dog-50 (1).png';
}
else if (results[0].label== "Meowing"){
    img1.src= 'icons8-cat-50.png';
}
else if (results[0].label== "Roar"){
    img1.src= 'icons8-lion-50.png';
}
else if (results[0].label== "Mooing"){
    img1.src= 'icons8-cow-50.png';
}
else {
    img1.src= 'icons8-hearing-50.png';
}
}
}
    