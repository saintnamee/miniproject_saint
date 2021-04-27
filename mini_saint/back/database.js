const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'warodom', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'wwarodom@gmail.com' },
        { id: 2, username: 'john', password: '$2b$10$1Bu4tImM/Ms9rtU.8/n/COWpzUAGFB6YlsO5xZqFih1JUxafyFFXa', email: 'john@gmail.com' },
    ]
}
const products = [
    {id: 1,productsname:'Latte',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://static.posttoday.com/media/content/2019/02/01/A3AA279E775B47B8B4661E8BB28F7723.jpg'},
    {id: 2,productsname:'Cappuccino ',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://ajnownirun.files.wordpress.com/2015/02/cappuccino.jpg'},
    {id: 3,productsname:'Espresso',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/esp.jpg'},
    {id: 4,productsname:'Americano',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/americano.jpg'},
    {id: 5,productsname:'Mocha',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_2751730__340.jpg'},
    {id: 6,productsname:'Macchiato',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_431121__340.jpg'},
    {id: 7,productsname:'Frappe',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_540653_960_720.jpg'},
    {id: 8,productsname:'Latte',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://static.posttoday.com/media/content/2019/02/01/A3AA279E775B47B8B4661E8BB28F7723.jpg'},
    {id: 9,productsname:'Cappuccino ',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://ajnownirun.files.wordpress.com/2015/02/cappuccino.jpg'},
    {id: 10,productsname:'Espresso',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/esp.jpg'},
    {id: 11,productsname:'Americano',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/americano.jpg'},
    {id: 12,productsname:'Mocha',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_2751730__340.jpg'},
    {id: 13,productsname:'Macchiato',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_431121__340.jpg'},
    {id: 14,productsname:'Frappe',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_540653_960_720.jpg'},
    {id: 15,productsname:'Latte',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://static.posttoday.com/media/content/2019/02/01/A3AA279E775B47B8B4661E8BB28F7723.jpg'},
    {id: 16,productsname:'Cappuccino ',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://ajnownirun.files.wordpress.com/2015/02/cappuccino.jpg'},
    {id: 17,productsname:'Espresso',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/esp.jpg'},
    {id: 18,productsname:'Americano',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/americano.jpg'},
    {id: 19,productsname:'Mocha',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_2751730__340.jpg'},
    {id: 20,productsname:'Macchiato',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_431121__340.jpg'},
    {id: 21,productsname:'Frappe',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://image.makewebeasy.net/makeweb/0/SfjcR5Jud/blog/coffee_540653_960_720.jpg'},
    ]
const carts = [
    {id: 1,productsname:'Latte',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://static.posttoday.com/media/content/2019/02/01/A3AA279E775B47B8B4661E8BB28F7723.jpg',
    amount:3,userid:2},
    {id: 2,productsname:'Cappuccino ',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://ajnownirun.files.wordpress.com/2015/02/cappuccino.jpg',
    amount:4,userid:2}

]
const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND
exports.products = products
exports.carts = carts
exports.setUsers = function(_users) { 
  users = _users;
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}
