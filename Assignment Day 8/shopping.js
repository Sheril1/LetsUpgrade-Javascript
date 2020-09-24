let products=[
    {
        id:1,
        name:"TShirt",
        size:"M",
        color:"Yellow",
        price:400,
        image:"Product1.jpeg",
        description:"Half sleeve yellow tshirt with black design."
    },
    {
        id:2,
        name:"Designer Shirt",
        size:"M",
        color:"Navy Blue",
        price:700,
        image:"Product2.webp",
        description:"Half sleeve shirt printed with buddha face."
    },
    {
        id:3,
        name:"Formal Shirt",
        size:"L",
        color:"Navy Blue",
        price:1000,
        image:"Product3.webp",
        description:"Full sleeves formal shirt for office wears."
    },
    {
        id:4,
        name:"Padded Jacket",
        size:"M",
        color:"Black",
        price:1500,
        image:"Product4.jpg",
        description:"Comfortable and stylish padded jacket."
    },
    {
        id:5,
        name:"Autumn Top",
        size:"M",
        color:"Green",
        price:500,
        image:"Product5.webp",
        description:"Beautiful top with flower prints on sleeves."
    },   
    {
        id:6,
        name:"Hoodie Sweatshirt",
        size:"L",
        color:"Maroon",
        price:800,
        image:"Product6.webp",
        description:"White faith printed with cross design."
    },
    {
        id:7,
        name:"Denim Jumpsuit",
        size:"L",
        color:"Blue",
        price:1000,
        image:"Product7.webp",
        description:"Denim overall stretch jumpsuit."
    },
    {
        id:8,
        name:"Western Wear",
        size:"L",
        color:"Red",
        price:1500,
        image:"Product8.jpg",
        description:"Beautiful red gown for party wear."
    },
    {
        id:9,
        name:"Kurti",
        size:"M",
        color:"Red",
        price:1000,
        image:"Product9.jpeg",
        description:"Golden embroidery design."
    },
    {
        id:10,
        name:"Salwar Suit with Dupatta",
        size:"L",
        color:"Navy Blue",
        price:3000,
        image:"Product10.jpg",
        description:"Full sleeved kurti with heavy mirror work."
    },
    {
        id:11,
        name:"Lehenga Choli",
        size:"L",
        color:"Red and Cream",
        price:8000,
        image:"Product11.jpg",
        description:"Elegant traditional wear with golden design."
    },
    {
        id:12,
        name:"Ethnic Wear",
        size:"L",
        color:"Red and Maroon",
        price:5000,
        image:"Product12.jpg",
        description:"Beautiful full sleeves ethnic gown."
    }
]
cart=[];

function displayProducts(productsdata,who="productwrapper"){
    let productsString="";
    productsdata.forEach(function(product,index){
        let {id,name,size,color,price,image,description} = product;
        if(who=="productwrapper")
        {
            productsString+=`<div class="product">
            <div class="prodimg">
                <img src="images/${image}" width="100%" height="400px"/>
            </div>
            <h3>${name}</h3>
            <p>Price: ${price}</p>
            <p>Size: ${size}</p>
            <p>Color: ${color}</p>
            <p>${description}</p>
            <p>
                <button onclick="addToCart(${id})">Add to Cart</button>
            </p>
        </div>`;
        }
        else if(who=="cart")
        {
            productsString+=`<div class="product">
            <div class="prodimg">
                <img src="images/${image}" width="100%" height="400px"/>
            </div>
            <h3>${name}</h3>
            <p>Price: ${price}</p>
            <p>Size: ${size}</p>
            <p>Color: ${color}</p>
            <p>${description}</p>
            <p>
                <button onclick="removeFromCart(${id})">Remove from Cart</button>
            </p>
        </div>`;
        }       
    });
    document.getElementById(who).innerHTML=productsString;
    let totalcount;
    if(cart.length==0)
    {
        totalcount=`<h3>Your cart is empty</h3>`;
    }
    else{
        totalcount=`<h3>Total products in your cart is ${cart.length}.</h3>`;
    }
    document.getElementById("count").innerHTML=totalcount;
}
displayProducts(products);

function searchProducts(searchValue){
    let searchedProduct=products.filter(function(product,index){
        let searchString=product.name+" "+product.color+" "+product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    });
    displayProducts(searchedProduct);
}

function getProductByID(productArray,id)
{
    return productArray.find(function(product){
        return product.id==id;
    })
}

function addToCart(id){
    let popUp=cart.filter(function(ele){
        return ele.id==id;
    })
    let pro=getProductByID(products,id);
    if(popUp==0)
    {
        cart.push(pro);
        displayProducts(cart,"cart"); 
    }
    else{
        alert("This product already exists in your cart");
    }
        
}

function removeFromCart(id){
    let index=cart.findIndex(function(product){
        return product.id==id;
    });
    cart.splice(index,1);
    displayProducts(cart,"cart");
}

function filterPrice(){
    let min=document.getElementById("price1").value;
    let max=document.getElementById("price2").value;
    let filterResult=products.filter(function(ele){
        return ele.price>=min && ele.price<=max;
    });
    displayProducts(filterResult);
    document.getElementById("price1").value="";
    document.getElementById("price2").value="";
}