class ProductManager {
    constructor (){
        this.products = []

    }
   
    getProducts(){
        console.log (this.products)
    }

    addProducts(title, description, id, stock, price, thumbnail){
        if(!title||!description||!id||!stock|| !price ||!thumbnail){
    console.log("Todos los campos son obligatorios ")            
        }
        if(!this.products.some((p)=> p.id === id)){
            let newProduct = (title,description ,price, id, stock, thumbnail)

            this.products.push(newProduct)
            console.log(`El producto ${title} fue agregado correctamente`)
        }else {
            console.log(`Ya existe un libro con el id ${id}`)
        }
    }
  getProductById(id){
    let product = this.products.find((p)=> p.id === id)
    
    if(product){
        return product
    }else{
        console.log(`Not Found id:  ${id}`)
    }
}
}
const product = new ProductManager()
product.addProducts("Tomate", "Es rojo y delicioso", 23.278361, 500, 100,"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmercagarden.com%2F525-large_default%2Ftomate.jpg&tbnid=B550Y6HN1NMH4M&vet=12ahUKEwjomY3mvaGDAxVZN7kGHWjtBw0QMygGegQIARB5..i&imgrefurl=https%3A%2F%2Fmercagarden.com%2Fhortifichas%2Ftomate.html&docid=JQqhkvpQyQS2zM&w=381&h=492&q=tomate&client=firefox-b-d&ved=2ahUKEwjomY3mvaGDAxVZN7kGHWjtBw0QMygGegQIARB5")
product.addProducts("Lechuga", "Es verde y refrescante", 23.2783323, 400, 90,"https://www.google.com/imgres?imgurl=https%3A%2F%2Fbiotrendies.com%2Fwp-content%2Fuploads%2F2015%2F07%2Flechuga.jpg&tbnid=RI9LNzkoqQ-enM&vet=12ahUKEwjmy6qgvqGDAxVTO7kGHSS2DG8QMygEegQIARB0..i&imgrefurl=https%3A%2F%2Fbiotrendies.com%2Fverduras%2Flechuga&docid=V1fUIECMSNSKLM&w=2000&h=1518&q=lechuga&client=firefox-b-d&ved=2ahUKEwjmy6qgvqGDAxVTO7kGHSS2DG8QMygEegQIARB0")
product.getProducts()

//Busqueda por codigod e libro
console.log("-------------")
product.getProductById(23.278361)
product.getProductById(23.278362)
