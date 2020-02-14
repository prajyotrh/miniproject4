  var firebaseConfig = {
    apiKey: "AIzaSyDNsy8wR_DNzxt7J5fPS-AW_6XDReeq4jU",
    authDomain: "finalproject-51616.firebaseapp.com",
    databaseURL: "https://finalproject-51616.firebaseio.com",
    projectId: "finalproject-51616",
    storageBucket: "finalproject-51616.appspot.com",
    messagingSenderId: "645157881498",
    appId: "1:645157881498:web:382215ab2d8e03c3428123"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var storage = firebase.storage();
var storageRef = storage.ref();

$('#list').find('tbody').html('');

var i=0;

storageRef.child('image/').listAll().then(function(result){
	result.items.forEach(function(imageRef){
		//console.log("Image Referance" + imageRef.toString());
		i++;
		displayImage(i,imageRef)


	});
});


function displayImage(row,image){
	image.getDownloadURL().then(function(url){

		console.log(url); 

		let new_html = '';
		new_html +='<tr>';
		new_html +='<td>';
		new_html += row;
		new_html +='</td>';
		new_html +='<td>';
		new_html += '<img src="'+url+'" width="500px" style= "float:right">';
		new_html +='<td>';
		new_html +='</tr>';

		$('#list').find('tbody').append(new_html);

	});	
}