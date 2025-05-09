const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
      <div class="icono">
        <div class="logo"><img src="image/logo.png" alt="" /></div>
        <h2>Lorem</h2>
      </div>

      <nav class="login">
        <a href="galeria.html" class="botones">Lorem</a>
        <a href="register.html" class="botones register">Ipsum</a>
      </nav>
  
      <input type="checkbox" id="menu" />
      <label for="menu" class="menu-icon">
        <span><img src="image/menu.png"></span>
      </label>
      <nav class="menu">
        <ul>
          <li><a href="galeria.html">Lorem</a></li>
          <hr />
          <li><a href="register.html">Ipsum</a></li>
        </ul>
      </nav>


`;

footer.innerHTML = `
      <div>
        <h2>Lorem</h2>
        <div id="direcciones">
          <a href="#">Putent</a>
          <a href="#">Consul</a>
          <a href="#">Copiosage</a>
          <a href="#">Dolorum</a>
        </div>
        <div id="redes">
          <a href="#"><box-icon type="logo" name="instagram"></box-icon></a>
          <a href="#"
            ><box-icon name="facebook-circle" type="logo"></box-icon
          ></a>
          <a href="#"><box-icon name="twitter" type="logo"></box-icon></a>
        </div>
      </div>
      <div id="politicas">
        <p>©2025 Lorem. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
`;

