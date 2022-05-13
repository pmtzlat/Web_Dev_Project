function keyPress(e) {
  if (e.keyCode == 13) {
    search(document.getElementById('name').value);
  }
}

function search(term) {
  window.location.href = '/search/' + term;
}

function displayNavbar() {
  const navbarContainer = document.querySelector('.navbar-container');
  if (navbarContainer) displayNavbarStatic();
  const buttons = document.querySelectorAll('.icon');
  for (let button of buttons) {
    button.style.cursor = 'pointer';

    const to = button.getAttribute('to');
    if (to) {
      button.addEventListener('click', function () {
        window.location.href = to;
      })
    }
  }
  let signout = document.getElementById('signout');
  if (signout) {
    signout.addEventListener("click", () => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", '/signout', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      localStorage.clear();
      location.reload();
    });
  }
}

function displayNavbarStatic() {
  const navbarContainer = document.querySelector('.navbar-container');
  if (!navbarContainer) return;
  let imgLocation = 'img'
  let htmlDirLocation = '/'

  if (imgLocation == undefined) {
      imgLocation = 'img/';
  }

  if (htmlDirLocation == undefined) {
      htmlDirLocation = '/';
  }

  navbarContainer.innerHTML += `
  <table class="navbar" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr>
          <td class="icon" width="5%">
              <center>
                  <a href="/">
                  <img
                      src="${imgLocation}/home.svg"
                      width="25px"
                      height="auto"
                      padding="10px"
                      />
                  </a>
              </center>
          </td>
          <td width="29%"></td>
              <td width="30%">
                  <table width="100%">
                      <tr height="30px">
                          <td>
                              <input class="searchbar"
                                  type="text"
                                  id="name"
                                  size="30"
                                  maxlength="30"
                                  align="middle"
                                  placeholder="Search product..."
                                  border="0"
                                  onkeypress="keyPress(event)"
                              />
                          </td>
                      </tr>
                  </table>
              </td>
              <td width="auto" align="right"></td>
              <td class="icon" width="5%">
                  <center>
                  <a href="/${htmlDirLocation}/settings-account">
                      <img src="${imgLocation}/account-cog.svg" alt="Settings"/>
                  </a>
                  </center>
              </td>
              <td class="icon" width="5%">
                  <center>
                      <a href="/login">
                          <img src="${imgLocation}/account-circle.svg" alt="Log in"/>
                      </a>
                  </center>
              </td>
              <td class="icon" width="5%">
                  <center>
                      <a href="/cart">
                          <img src="${imgLocation}/cart.svg" alt="Cart"/>
                      </a>
                  </center>
              </td>
          </tr>
      </tbody>
  </table>
   
  <table class="categories hln-background" cellspacing="15px ">
      <tbody><tr height="30px">
          <td width="15%"></td>
          <td class="category_button" width="15%"> <a href="/Sensors"><center>Sensors</center></td></a>
          <td class="category_button" width="15%"><a href="/Motors"><center>Motors</center></td></a>
          <td class="category_button" width="15%"><a href="/Microprocessors"><center>Microprocessors</center></td></a>
          <td class="category_button" width="15%"><a href="/Tools"><center>Tools</center></td></a>
          <td width="15%"></td>
      </tr>
  </tbody></table>
  <br>
  `
}


function displayFooter() {
  const footerContainer = document.querySelector('.footer-container');
  if (!footerContainer) return;
  const cssLocation = '/css/footer.css'
  const htmlDirLocation = '/'

  footerContainer.innerHTML += `
    <link rel="stylesheet" href="${cssLocation}"/>
    <footer>
    <div>
        <!-- Return to top button -->
        <button onclick="topButton()" class="footer-button" id="footerButton" title="Return to top of page">Return to Top</button>
    </div>
      <div class="footer-container">
          <div class="footer-column">
                <!-- Footer column 1 -->
                <h3>Company Information</h3>
                <ul>
                    <li><a href="/about">About Robostore</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a>Careers</a></li>
                </ul>
          </div>
          <div class="footer-column">
                <!-- Footer column 2 -->
                <h3>Tools and Resources</h3>
                <ul>
                    <li><a>Sell on Robostore</a></li>
                    <li><a>Rebates</a></li>
                </ul>
          </div>
          <div class="footer-column">
                <!-- Footer column 3 -->
                <h3>Customer Service</h3>
                <ul>
                    <li><a>Return Policy</a></li>
                    <li><a>Track Orders</a></li>
                </ul>
          </div>
          <div class="footer-column">
                <!-- Footer column 4 -->
                <h3>My Account</h3>
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/${htmlDirLocation}/settings-account">Account Settings</a></li>
                    <li><a>Order History</a></li>
                    <li><a>Return History</a></li>
                    <li><a>Wish List</a></li>
                </ul>
          </div>
      </div>
  </footer>
  `
}

displayNavbar();
displayFooter();