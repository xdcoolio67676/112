function take_snapshot()
{
Webcam.snap(function(data_uri)  {                                                           
    document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
});
}
console.log('ml5 verison:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EfZWPCnnF,model'.
model.json)