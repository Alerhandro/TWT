body{
    color: white;
    background-color: black;
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
    background-image: url(./img/fundo.png);
}

.fundo{
    background-size: cover;
    width: 1px;
    height: 1px;
}

.fundogato{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 1px;
    height: 1px;
}

.col-md-6 h3{
    color: cyan;
}

.col-md-6{
    text-align: center;
}

.col-md-4{
    text-align: center;
}

ul{
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    padding: 16px;
}

a{
    color: white;
    text-decoration: none;
    
}

header img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid white;
}

.center{
    text-align: center;
}

h1{
    text-align: center;
    color: rgb(228, 74, 189);
}

h2{
    text-align: center;
}

h3{
    text-align: center;
    color: aqua;
}

p{
    text-align: center;
}

.texto{
    color: whitesmoke;
    position: center;
    top: 500px;
    left: 800px;
}

footer img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

footer{
    display: flex;
    justify-content: center;
}

footer a {
    margin: 20px;
    text-align: center;
}

footer p{
    margin-top: 2px;
}

.container{
    padding: 0px 50px;
}

nav a:hover{
    color: cyan;
}

.produtos{
    display: flex;
    justify-content: center;
}

header{
    text-align: center;
}

.produto img{
    width: 160px;
    height: 115px;
    border-radius: 10%;
    cursor: pointer;
    margin: 20px;    
}

.produto img:hover{
    transform: rotate(-5deg);
}

.produto p{ 
    color: whitesmoke;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
/*
.main{
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
}
.primeira{
    justify-content: space-between;
    align-items: center;
    border: 1px solid yellow;
}*/
.centropoha{
    justify-content: center;
    display: flex;
}

.galery{
    width: 300px;
    height: 300px;
    margin: auto;
}

#galary1{
    background: url('./img/TAGAÇO.PNG') center center no-repeat;
	height:136px;
}

.descriprion{
    width: 180px;
    margin: 30px;
    margin-top: -1px;
    padding: 1px;
    color: whitesmoke;
}

.preencher{
    min-height: 50px;
    padding-left: 70px;
    margin-bottom: 10;
    font-weight: normal;
    text-align: left;
    box-sizing: border-box;
}

.input{
    justify-content: left;
}

.centro{
    display: flex;
    justify-content: center;
}

.texto{
    align-items: left;
    text-align: left;
    font-family:Tahoma, Geneva, sans-serif;
	color:#eee;
	text-transform:uppercase;
	line-height: 20px;
	font-size:13px;
	text-shadow: rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.3) 0 -1px, rgba(255,255,255,0.5) 0 1px, rgba(0,0,0,0.3) -1px -2px;    
}
/*
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    margin-left: -15%;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
}

.botoes{
    display: inline-block;
    margin-left: -15%;
}*/
.button {
    display: inline-block;
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}
  
.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
  
.button span:after {
    content: '\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}
  
.button:hover span {
    padding-right: 25px;
}
  
.button:hover span:after {
    opacity: 1;
    right: 0;
}

.botoes{
    justify-content: space-between;
    align-items: center;

}

.comprar{
    display: flex;
    justify-content: center;
    color: whitesmoke;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}