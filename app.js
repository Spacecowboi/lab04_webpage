// Initial question
let confirm = prompt('Are you ready for this? Yes or no!')

if(confirm === 'yes') {

// Trying to show a Berserk pic based on user input
let userInput = prompt('Pick a number 1-3:');
let imageSource = '';

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