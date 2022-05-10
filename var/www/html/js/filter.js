const products = {
    '4GB Raspberry Pi 4': [20, 'five', 'Raspberry Pi', '../img/products/4GB-Raspberry-Pi-4.jpeg'],
    'Arduino Starter Kit': [90, 'four', 'Arduino', '../img/products/Arduino-Starter-Kit.jpg'],
    'Arduino Nano': [20, 'three', 'Arduino', '../img/products/Arduino-Nano.jpg'],
    'RP4020 Microcontroller Kit': [20, 'three', 'Raspberry Pi', 'https://www.raspberrypi.org/app/uploads/2021/01/17717-SparkFun-Pro-Micro-RP2040-01-500x500.jpg'],
    'iFlight Beast F7 Drone Controller Board': [40, 'five', 'iFlight', '../img/products/iFlight-Beast-F7-Drone-Controller.jpg'],
    'M27-150-P Motor': [20, 'three', 'AmpFlow', '../img/products/M27-150-P-Motor-jpg'],
    'Victor BB Motor Controller': [25, 'three', 'VEXPro', '../img/products/Raspberry-Pi-Pico-2040-Microcontroller.png'],
    'Solo 60 Motor Controller': [25, 'four', 'AmpFlow', '../img/products/Solo-60-Motor-Controller.jpg'],
    'TS100 Smart Soldering Iron': [100, 'five', 'Banggood', '../img/products/TS100-Smart-Soldering-Iron.jpg']
}

function filterWrite() {
    let includedProducts = [];
    let rating = "";
    let manufacturer = document.getElementById('manufacturer').value;
    let maxPrice = document.getElementById('price').value;

    var ratings = document.getElementsByName('rev');
    for (i = 0; i < ratings.length; i++) {
        if (ratings[i].checked) {
            rating = ratings[i].id;
        }
    }

    for (const [k, v] of Object.entries(products)) {
        if (manufacturer == '' || manufacturer == v[2]) {
            if (maxPrice == 0 || maxPrice <= v[0]) {
                if (rating == '' || v[1].indexOf(rating) > 0) {
                    includedProducts.push([k,v]);
                }
            }
        }
    }

    if (includedProducts.length == 0) {
        localStorage.setItem('filter', ':(');
        return;
    }
    window.location.href = '../filter.html';
    localStorage.setItem('filter', JSON.stringify(includedProducts));
}

function filterRead() {
    let filter = localStorage.getItem('filter');
    let includedProducts;

    let filterReadContainer = document.querySelector('.filter-results-container');

    if (filter != undefined) {
        if (filter == ':(') {
            return ':(';
        }

        includedProducts = JSON.parse(filter);
        let c = 0;

        for (const [k,v] of Object.entries(includedProducts)) {
            console.log(k)
            console.log(v)
        
            filterReadContainer.innerHTML += `
            <td class="product_card" width="30%" valign="top">
              <a class="product_card" style="width: 30%; margin: 10px; margin-bottom: 100%" src="product/${v[0]}">
                <center><img  class="product_pic" src="${v[1][3]}" width="90%"></center>
                <table >
                  <tbody>
                    <tr>
                      <td width="5%">
                      </td>
                      <td width="30%">
                        <strong>${v[0]}</strong>
                      </td>
                      <td width="5%"></td>
                      <td width="10%">
                        <h1><font face="Calibri"><strong>\$${v[1][0]}</strong></font></h1>
                      </td>
                    </tr>
                    <tr>
                      <td width="2%">
                      </td>
                      <td>
                        <img src="img/stars.png" width="100%">
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br>
              </a>
            </td>\n
            `
            c++;
            if (c == 2) {
                filterReadContainer.innerHTML += `<tr></tr>\n`
            }
        }
    }
}

function getManufacturersOptions() {
    let mans = []
    let mansHtml
    for (v of Object.values(products)) {
        if(!mans.includes(v[2])) {
            mans.push(v[2]);
        }
    }

    for (i = 0; i < mans.length; i++) {
        mansHtml += `<option>${mans[i]}</option>\n`
    }
    return mansHtml;
}

function displayFilterBar() {
    const container = document.querySelector('.filter-container')

    container.innerHTML += `
    <td width="20%" valign="top">
            <h1 class="font">Filters</h1>
            <br>
            <label for="price">Maximum Price:</label>
            <input class="forminput" type="text" id="price" size="10" maxlength="30" placeholder="Ex. $200" style="margin-left:12px;width:60px"><br><br>
            <label for="manufacturer">Manufacturer: </label>
            <select class="forminput" id="manufacturer" style="margin-left:30px">

              ${getManufacturersOptions()}
            </select>
            <br><br>
            <p>Ratings:</p>
            <input type="radio" id="one" name="rev">
            <label for="one">1 star</label>
            <br>
            <input type="radio" id="two" name="rev">
            <label for="two">2 stars</label>
            <br>
            <input type="radio" id="three" name="rev">
            <label for="three">3 stars</label>
            <br>
            <input type="radio" id="four" name="rev">
            <label for="four">4 stars</label>
            <br>
            <input type="radio" id="five" name="rev">
            <label for="five">5 stars</label>
            <br>
            <input type="submit" onclick="filterWrite()" name="Submit" style="width: auto; height: auto; border-radius: 0%;/>
            <br>
            <br>
            <table width="100%">
              <tbody>
                <tr width="80%">
                  <td height="30px">
                  </td>
                  <td>
                    <img src="img/banner-ad.png" width="100%">
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
    `;

    if (window.location.href.indexOf('filter') > 0) {
        filterRead();
    }
}

displayFilterBar();