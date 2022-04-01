// Write your code here!
document.querySelector('#main').remove();
// "Make sure you create an <h1> with id 'victory'").eql('H1')
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Jonny is the champion';
document.body.append(newHeader);
