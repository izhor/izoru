


function sendEmail() {
		
var sender = document.getElementById('name').value;
var email = document.getElementById('email').value;
var question = document.getElementById('question').value;

var content = sender+" ("+email+"): "+question;


if (sender == "" || email == "" || question =="" ) {
     alert(" message failed : all text input must be filled")
}else{


     Email.send({
          SecureToken : "44426cf6-395b-4ae9-b240-df3794768ce4",
          To : 'alif.zhorif@gmail.com',
          From : "izoru.experimental@gmail.com",
          Subject : "Question",
          Body : content
          }).then(
               message => alert("Message Sent Successfully")
               
          );
          




}



}

function emptyInput() {
     document.getElementById('name').value = '';
     document.getElementById('email').value = '';
     document.getElementById('question').value = '';
     
}




