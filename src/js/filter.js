function getManufacturersOptions() {
    let mans = ['Raspberry Pi', 'Arduino', 'VEXPro', 'RoboClaw', 'AmpFlow', 'UY CHAN'];
    let mansHtml = '';

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
            <input type="radio" value='1' id="one" name="rev">
            <label for="one">1 star</label>
            <br>
            <input type="radio" value='2' id="two" name="rev">
            <label for="two">2 stars</label>
            <br>
            <input type="radio" value='3' id="three" name="rev">
            <label for="three">3 stars</label>
            <br>
            <input type="radio" value='4' id="four" name="rev">
            <label for="four">4 stars</label>
            <br>
            <input type="radio" value='5' id="five" name="rev">
            <label for="five">5 stars</label>
            <br>
            <input type="submit" onclick="filterOnClick()" value="Submit" name="Submit" style="width: auto; height: auto; border-radius: 0%;/>
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
}

function filterOnClick() {
  const manufacturer = document.getElementById('manufacturer');
  const rating = document.querySelector('input[name="rev"]:checked');
  const price = document.getElementById('price');
  console.log([manufacturer, rating, price]);
  manufacturer
  const manufacturerValue = manufacturer ? manufacturer.value : '';
  const ratingValue = rating ? rating.value : '';
  const priceValue = price ? price.value : '';

  window.location.href = `/filter/${manufacturerValue}/${rating ? `${ratingValue}` : 0}/${(price && priceValue >= 0) ? `${priceValue}` : 0}`;
}

displayFilterBar();