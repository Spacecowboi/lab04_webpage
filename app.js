function greetUser() {
  let name = prompt("Who are you?:", "");
  document.write("Hey there, long time no see... " + name);
  let purpose = prompt("What are you doing here?");
  document.write(" Hmm, if you say so" + " " + name + ", Do you really think " + purpose + " is a really good use of your time?");
}






// let question = prompt("Are you sure this is where you want to be?","");
function confirmUser() {
  let question = confirm("Are you sure this is where you want to be?");
  if (question) {
    document.write("Fine, as long as you don't get in my way");
  } else {
    document.write("Then leave. I didn't want you here to begin with");
  }
}



// Initial question
function gutsPic() {

  let response = prompt('Are you ready for this? Yes or no!')
  let imageSource = '';
  let userInput = '';

  if (response.toLowerCase() === 'yes') {

    userInput = prompt('Pick a number 1-3:');

    while(userInput != 1 && userInput != 2 && userInput !=3 ){
      userInput = prompt('Pick a number 1-3:');
    }

    switch (userInput) {
      case '1':
        imageSource = 'https://static.wikia.nocookie.net/berserk/images/7/7a/Manga_E224_Berserker_Armor.png/revision/latest?cb=20190327152407';
        break;
      case '2':
        imageSource = 'https://cdn.vox-cdn.com/thumbor/R0OE3A-zy0DDsyr5MAss2K_d_UE=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/70952008/Berserk_Manga_will_continue_without_its_creator_Kentaro_Miura.0.jpg';
        break;
      case '3':
        imageSource = 'https://jonahwritesdotblog.files.wordpress.com/2018/10/yvqkz2f-e1540424645866.jpg?w=1000';
        break;
      default:
        imageSource = 'https://static.displate.com/280x392/displate/2022-12-20/b78f1e3a4f8a15913de318d6bad6164d_a8fca5364b2070dafff9cf0fd2b7f7dc.jpg';
        break;
    }
  } else {
    alert('Fine, come back when you are ready to see something really amazing!');
  }
  for (let i = 0; i < userInput; i++) {

    document.write('<img src = "' + imageSource + '" />')
  }
}
//<img src="imageSource" />
