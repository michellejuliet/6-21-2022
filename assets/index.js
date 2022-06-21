function getName() {
  let name = document.getElementById('name').value;
  document.getElementById('paragraph').innerHTML = `Hello ${name}, welcome to the bootcamp`;
  /*
  if(name !== '') {
  document.getElementById('paragraph').innerHTML = `Hello ${name}, welcome to the bootcamp`;  
  }*/
}