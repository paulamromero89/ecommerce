const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Tomi1291',
    database:'ecommerce',
})

app.get('/getUser', (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM usuarios WHERE Email=? AND Clave=?",
        [email,password],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.post('/createUser', (req,res)=>{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const lastName = req.body.lastName
    const birthDate = req.body.birthDate
    const dni = req.body.dni

    db.query(
        "INSERT INTO usuarios (Email,Clave,Nombre,Apellido,FecNac,DNI,Atributos,Estado,createdAt,updatedAt) VALUES (?,?,?,?,?,?,1,1,NOW(),NOW())",
        [email,password,name,lastName,birthDate,dni],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("User created")
            }
        }
    )
})

app.get('/getCategories', (req,res)=>{

    db.query(
        "SELECT * FROM categorias WHERE Estado=1",
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.get('/getProducts', (req,res)=>{
    const category = req.body.category
    const price = req.body.price

    db.query(
        "SELECT * FROM productos WHERE Estado=1 AND idCategoria=?",
        [category,price],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.post('/createProduct', (req,res)=>{
    const category = req.body.category
    const productNname = req.body.productName
    const brand = req.body.brand
    const model = req.body.model
    const description = req.body.description
    const price = req.body.price
    const image = req.body.image

    db.query(
        "INSERT INTO productos (idCategoria,Nombre,Marca,Modelo,Descripcion,Precio,Imagen,Estado,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,1,NOW(),NOW())",
        [category,productNname,brand,model,description,price,image],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Product created")
            }
        }
    )
})

app.put('/updateProduct', (req,res)=>{
    const productId = req.body.productId
    const category = req.body.category
    const productNname = req.body.productName
    const brand = req.body.brand
    const model = req.body.model
    const description = req.body.description
    const price = req.body.price
    const image = req.body.image

    db.query(
        "UPDATE productos SET idCategoria=?, Nombre=?, Marca=?, Modelo=?, Descripcion=?, Precio=?, Imagen=?, updatedAt=NOW() WHERE idProducto=?",
        [category,productNname,brand,model,description,price,image,productId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Updated product")
            }
        }
    )
})

app.post('/createOrder', (req,res)=>{
    const userId = req.body.idUser
    const shippingAddress = req.body.shippingAddress
    const billingAddress = req.body.billingAddress

    db.query(
        "INSERT INTO ordenes (idUsuarioOrden,idDirEnv,idDirFact,Precio,Estado,createdAt,updatedAt) VALUES (?,?,?,,0,1,NOW(),NOW())",
        [userId,shippingAddress,billingAddress],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Order created")
            }
        }
    )
})

app.put('/updateOrder', (req,res)=>{
    const orderId=req.body.orderID
    const orderTotal=req.body.orderTotal

    db.query(
        "UPDATE productos SET Precio=?, updatedAt=NOW() WHERE idOrden=?",
        [orderTotal,orderId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Updated order")
            }
        }
    )
})

app.post('/createOrderItem', (req,res)=>{
    const productId = req.body.productId
    const orderId = req.body.orderID
    const quantity = req.body.quantity
    const subTotal = req.body.subTotal

    db.query(
        "INSERT INTO itemsorden (idUProductoItem,idOrden,Cantidad,Subtotal,Estado,createdAt,updatedAt) VALUES (?,?,?,?,1,NOW(),NOW())",
        [productId,orderId,quantity,subTotal],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Order Item created")
            }
        }
    )
})

app.post('/createAddress', (req,res)=>{
    const addressId = req.body.addressId
    const address = req.body.address
    const city = req.body.city
    const postalCode = req.body.postalCode
    const state = req.body.state
    const country = req.body.country
    const phone = req.body.phone
    const instructions = req.body.instructions

    db.query(
        "INSERT INTO direcciones SET Direccion=?, Ciudad=?, CodPos=?, Provincia=?, Pais=?, Telefono=?, Indicaciones=?, updatedAt=NOW()) WHERE )",
        [address,city,postalCode,state,country,phone,instructions,addressId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Address created")
            }
        }
    )
})

app.post('/updateAddress', (req,res)=>{
    const userId = req.body.userId
    const address = req.body.address
    const city = req.body.city
    const postalCode = req.body.postalCode
    const state = req.body.state
    const country = req.body.country
    const phone = req.body.phone
    const instructions = req.body.instructions

    db.query(
        "UPDATE direcciones SET (idUsuario,Direccion,Ciudad,CodPos,Provincia,Pais,Telefono,Indicaciones,Estado,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,?,1,NOW(),NOW())",
        [userId,address,city,postalCode,state,country,phone,instructions],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Address created")
            }
        }
    )
})

app.get('/getAddresses', (req,res)=>{
    const userId = req.body.userId

    db.query(
        "SELECT * FROM direcciones WHERE idUsuario=?",
        [userId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.get('/getShops', (req,res)=>{
    
    db.query(
        "SELECT * FROM sucursales WHERE idSucursal=1",
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.get('/getStock', (req,res)=>{
    const productId = req.body.productId

    db.query(
        "SELECT * FROM stock WHERE idSucursal=1 AND idProducto=?",
        [productId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})

app.put('/updateStock', (req,res)=>{
    const productId = req.body.productId
    const quantity = req.body.quantity

    db.query(
        "UPDATE stock SET Cantidad=Cantidad-? WHERE idSucursal=1 AND idProducto=?",
        [quantity,productId],
        (err,result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
})


const port=3001
app.listen(port,()=>{
    console.log("Server running on port: " + port)
})

