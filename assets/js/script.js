var firstName = window.prompt('Entrez votre prénom :');
while(firstName == ''){
  firstName=window.prompt('Veuillez saisir votre prénom');
}
window.alert(`Bonjour, ${firstName}`);
