var dlink;

function uploadf()
{
	var image = document.getElementById("upfile").files[0];

	var imgName = image.name;

	console.log(imgName);
	var storageRef = firebase.storage().ref('Image/'+imgName);

	var uploadTask = storageRef.put(image);

	uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	  console.log('Upload is ' + progress + '% done');
	  switch (snapshot.state) {
	    case firebase.storage.TaskState.PAUSED: // or 'paused'
	      console.log('Upload is paused');
	      break;
	    case firebase.storage.TaskState.RUNNING: // or 'running'
	      console.log('Upload is running');
	      break;
	  }
	}, function(error) {
	  // Handle unsuccessful uploads
	}, function() {
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	    //console.log('File available at', downloadURL);
	    dlink=downloadURL;
	  });
	});

	console.log(dlink);
	
}

//