function displayNavbar() {
    let navbarContainer = document.querySelector('.navbar-container');

    navbarContainer.innerHTML += `
    <table class="navbar" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td class="icon" width="5%">
                <center>
                    <a href="./index.html">
                    <img
                        src="./img/home.svg"
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
                                />
                            </td>
                        </tr>
                    </table>
                </td>
                <td width="auto" align="right"></td>
                <td class="icon" width="5%">
                    <center>
                    <a href="./settings-account.html">
                        <img src="./img/account-cog.svg" alt="Settings"/>
                    </a>
                    </center>
                </td>
                <td class="icon" width="5%">
                    <center>
                        <a href="./login.html">
                            <img src="./img/account-circle.svg" alt="Log in"/>
                        </a>
                    </center>
                </td>
                <td class="icon" width="5%">
                    <center>
                        <a href="./cart.html">
                            <img src="./img/cart.svg" alt="Cart"/>
                        </a>
                    </center>
                </td>
            </tr>
        </tbody>
    </table>
     
    <table class="categories hln-background" cellspacing="15px ">
        <tbody><tr height="30px">
            <td width="15%"></td>
            <td class="category_button" width="15%"> <a href="Sensors.html"><center>Sensors</center></td></a>
            <td class="category_button" width="15%"><a href="Motors.html"><center>Motors</center></td></a>
            <td class="category_button" width="15%"><a href="Microprocessors.html"><center>Microprocessors</center></td></a>
            <td class="category_button" width="15%"><a href="Tools.html"><center>Tools</center></td></a>
            <td width="15%"></td>
        </tr>
    </tbody></table>
    <br>
    `
}

displayNavbar();