const express = require('express')
const port = 3000
const app = express ()
app.get('/', (req, res) => {
    res.json ('Hello world')
});
app.get('/users', (req, res) => {
    res.json(['user1', 'user2', 'user3'])
})
app.post('/users', (req, res) => {
    res.json('user was aded')
})
app.delete('/users/:id', (req, res) => {
    res.json(`User with ID: ${req.params.id} was deleted`)
})
app.patch('/users/:id', (req, res) => {
    res.json(`User with ID: ${req.params.id} was changed`)
})
app.put('/admin', (req, res) => {
    res.json('You do not have the powers')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})