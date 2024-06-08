const Navbar = () =>{
  return(
      /*html*/`
  <!-- <link rel="stylesheet" href="./components/Navbar/Navbar.css"> -->
  <ul id="navbar">
      <li onclick="Home()">home</li>
      <li onclick="Contact()">contact</li>
      <li onclick="Hello()">hello</li>
  </ul>
  
<style>
#headAndNav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
#headAndNav ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  
}
#headAndNav ul li{
  padding: 1rem;
}
.bg{
background: transparent;
backdrop-filter: blur(10px);
position:fixed;
bottom: 0;
right: 0;
z-index: 10;

}

@media only screen and (max-width: 700px) {
 #headAndNav{
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start ;

 }
 #headAndNav ul li{
  margin: 0;
  padding-right: 1rem;
  padding-left: 0;
 }
 
 ul{
  position:sticky;
  top: 0;
  left:50;
  height: max-content;
  width: max-content;
}
}

ul li{
  position: relative;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

ul li:hover {
  color: #000;
}
</style>`
  )
}
export default Navbar