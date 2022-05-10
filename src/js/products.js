console.log("hello ")

let products = [{
    picture: "https://cdn.sparkfun.com/r/500-500/assets/parts/1/4/0/2/2/15447-Raspberry_Pi_4_Model_B__4_GB_-01.jpg",
    title: "4 GB Raspberry Pi 4",
    inCart: 1,
    price: 20

},{
    picture: "https://www.twinschip.com/image/cache/catalog/Products%20Twins%20Chip%20Store%202020/DEVELOPER%20BOARDS/Arduino/Arduino%20Nano%20V3.0/Arduino%20Nano%20V3.0%20Twins%20Chip%201-425x425.jpg",
    title: "Arduino Nano",
    inCart: 1,
    price: 20
},{
    picture: "https://m.media-amazon.com/images/I/818V0uRvnrL._AC_SL1500_.jpg",
    title: "Arduino Starter Kit",
    inCart: 1,
    price: 20

},{
    picture: "https://images-na.ssl-images-amazon.com/images/I/41hEKfbBpxL.jpg",
    title: "iFlight Beast F7 Drone Controller Board",
    inCart: 1,
    price: 20

},{
    picture: "https://m.media-amazon.com/images/I/61NXZU-kcaL._SL1200_.jpg",
    title: "M27-150-P Motor",
    inCart: 1,
    price: 20

},{
    picture: "https://www.raspberrypi.org/app/uploads/2021/01/17717-SparkFun-Pro-Micro-RP2040-01-500x500.jpg",
    title: "RP4020 Microcontroller Kit",
    inCart: 1,
    price: 20

},{
    picture: "https://cdn11.bigcommerce.com/s-eem7ijc77k/images/stencil/original/products/1652/25581/IMC410__72335.1577981496.jpg?c=2",
    title: "Solo 60 Motor Controller",
    inCart: 1,
    price: 25

},{
    picture: "https://m.media-amazon.com/images/I/517hkMdTmmL._AC_SS450_.jpg",
    title: "TS100 Smart Soldering Iron",
    inCart: 1,
    price: 20

},{
    picture: "https://www.ampflow.com/controllers/vex/HV.jpg",
    title: "Victor BB Motor Controller",
    inCart: 1,
    price: 20

}
]


let carts = document.querySelectorAll(".add-cart")[0];
carts.addEventListener("click", () => {
    if (carts.id == "raspberryPi4"){
        addToLocal(products[0])
    }
    else if(carts.id == "ArduinoNano"){
        addToLocal(products[1])
    }else if(carts.id == "ArduinoStarterKit"){
        addToLocal(products[2])
    }else if(carts.id == "iFlightBeastF7DroneControllerBoard"){
        addToLocal(products[3])
    }else if(carts.id == "M27-150-PMotor"){
        addToLocal(products[4])
    }else if(carts.id == "RP4020MicrocontrollerKit"){
        addToLocal(products[5])
    }else if(carts.id == "Solo60MotorController"){
        addToLocal(products[6])
    }else if(carts.id == "TS100SmartSolderingIron"){
        addToLocal(products[7])
    }else if(carts.id == "VictorBBMotorController"){
        addToLocal(products[8])
    }
})

function addToLocal(prod){
    setItems(prod)
}

function setItems(prod){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    console.log("my cartItems is: ", cartItems)

    if(cartItems != null){
        if(cartItems[prod.title] == undefined){
            cartItems = {
                ...cartItems,
                [prod.title]: prod
            }
        }else{
            cartItems[prod.title].inCart += 1
        }
        
    }else{
        products.inCart = 1

        cartItems = {
            [prod.title]: prod
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}
