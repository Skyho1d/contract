

function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng ;
}










function checkforblank() {

	if(document.getElementById('Subject').value==""){
		alert('please enter your subject');
		return false;
	}
	if(document.getElementById('name').value==""){
		alert('please enter your name');
		return false;
	}
}

function lettersonly(input){

	var regex = /[^a-z]/gi;
	input.value=input.value.replace(regex,"");
}
