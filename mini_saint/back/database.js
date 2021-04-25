const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'warodom', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'wwarodom@gmail.com' },
        { id: 2, username: 'john', password: '$2b$10$1Bu4tImM/Ms9rtU.8/n/COWpzUAGFB6YlsO5xZqFih1JUxafyFFXa', email: 'john@gmail.com' },
    ]
}
const products = [
    {id: 1,productsname:'ลาเต้',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://static.posttoday.com/media/content/2019/02/01/A3AA279E775B47B8B4661E8BB28F7723.jpg'},
    {id: 2,productsname:'คาปูชิโน่',discription:'ลาเต้อร่อยหอมหวาน',price: 80,imageurl:'https://ajnownirun.files.wordpress.com/2015/02/cappuccino.jpg'}
    ]
const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND
exports.products = products
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
