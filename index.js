let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let pic = document.createElement('img')
pic.setAttribute('src', 'assets/rizzo.jpg')
pic.setAttribute('width', '50px')
pic.setAttribute('length', '50px')
pic.append('src')
content.append(pic)

let header3 = document.createElement('h3')
let paragraph = document.createElement('p')
header3.setAttribute('class', 'dog-details')
header3.textContent = 'Description:'
paragraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
content.append(header3)
content.append(paragraph)

let header31 = document.createElement('h3')
let list = document.createElement('ul')
header31.setAttribute('class', 'dog-details')
header31.textContent = 'Feeding Times:'
list.textContent = ['9:00am', ' 12:00pm', ' 3:00pm']
content.append(header31)
content.append(list)