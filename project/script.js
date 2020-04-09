@import url(https://fonts.googleapis.com/css?family=Open+Sans);

* { box-sizing: border-box; }
body { 
  background-color: whitesmoke;
  font-family: "Avenir";
  
}
h3 {
	font-style: italic;
	line-height: 0.5em;
	margin-top: 0px;
	color: grey;
	text-align: center;
	font-weight: 700px;
    font-size: 1.5em;
}

h2 {
	margin-top: 0px;
    color: #0e4749;
  text-align: center;
 font-weight: 700px;
 font-size: 32px;
 font-size: 2em;
}

h3 {

}

/* STRUCTURE */

.wrapper {
	padding: 10px;
	max-width: 800px;
	width: 80%;
	margin: 20px auto;
}
header {
	padding: 1 20px;
	background-color: rgba(113, 189, 185, 0.945);
	color: white;
	padding:15px;
	text-align: center;
	box-shadow: 0 px 16px rgba(112, 108, 108, 0.356);
}

.columns {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	margin: 20px 0;

}

.column {
	flex: 1;
	margin: 5px;
	padding: 25px;
	box-shadow: 0 6px 16px rgba(0, 0, 0, 0.051);
	background-color: white; 
	-webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
}
 
.column:hover {
		background-color: rgba(163, 184, 163, 0.158);
		cursor: pointer;
	  }

#city {
	transition: opacity 2s;

}

@media screen and (max-width: 980px) {
  .columns .column {
		margin-bottom: 5px;
	flex-basis: 40%;
	text-align: center;
	}
}

@media screen and (max-width: 680px) {
	.columns .column .icon_container {
		flex-basis: 100%;
		margin: 0 0 5px 0;
		text-align: center;
	
	}
}

.label  {
    border-bottom: 1px dotted #DDD;
    border-bottom-width: 1px;
    color: grey;
    line-height: 1.5em;
    font-size: 16px;
    font-family: "Avenir";
}

.summary {
	justify-content: center;
	margin-top:  50px;
}

.icon_container {
	align-items: center;
	display: block;
	margin-left: auto;
	padding-left: 40.5px;
	margin-right:auto;
	width: 60%;
}

/* clouds Animation and Transform*/

.mist {
	animation: shake 2s infinite linear;
}

@keyframes shake {
	0% {transform: translateX(0px);}
	25% {transform: translateX(2px);}
	50% {transform: translateX(0px);}
	75% {transform: translateX(-2px);}
	100% {transform: translateX(0px);}
}
.clouds {
	animation: clouds 5s ease-in-out infinite;
	width: 100px;
	height: 100px;
}
@keyframes clouds {
	50% { transform: translateY(-20px); }

}

.drizzle {
	animation: drizzle 5s ease-in-out infinite;
	width: 100px;
	height: 100px;
}
@keyframes drizzle {
	50% { transform: translateY(-20px); }

}

.rain {
	width: 100px;
	height: 100px;
	-webkit-animation: mover 3.5s infinite  alternate;
	animation: mover 3.5s infinite  alternate;
}
@keyframes rain {
	50% { transform: translateY(-20px); }

}

.thunderstorm {
	animation: thunderstorm 5s ease-in-out infinite;
	width: 100px;
	height: 100px;
}
@keyframes thunderstorm {
	50% { transform: translateY(-20px); }

}

.clear {
  -webkit-transform-origin: center center;
  -moz-transform-origin: 50% 50%;
  -o-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin:50% 50%;

  -webkit-animation: spin 25s linear infinite, clear 3s 0s linear infinite;
  -moz-animation: spin 25s linear infinite, clear 3s 0s linear infinite;
  -o-animation:spin 25s linear infinite, clear 3s 0s linear infinite;
  -ms-animation: spin 25s linear infinite, clear 3s 0s ease-in-out infinite;
  animation: spin 25s linear infinite,clear 3s 0s linear infinite;

} 

/* start spin animation */
@-webkit-keyframes spin {
	100% {
		-webkit-transform: rotate(360deg);
	}
}
@-moz-keyframes spin{
	100% {
		-moz-transform: rotate(360deg);
	}
}
@-o-keyframes spin{
	100% {
		-o-transform: rotate(360deg);
	}
}
@-ms-keyframes spin{
	100% {
		-ms-transform: rotate(360deg);
	}
}
@keyframes spin{
	100% {
		transform: rotate(360deg);
	}
}

table {
	background: #012B39;
	border-radius: 0.25em;
	border-collapse: collapse;
	margin-left:auto; 
    margin-right:auto;
  }

  th {
	border-bottom: 1px solid #364043;
	color: white;
	font-size: 0.85em;
	font-weight: 600;
	padding: 0.5em 1em;
	text-align: left;
  }

  td {
	color: #fff;
	font-weight: 400;
	padding: 0.3em;
  }

  .container{
	  display: none;
  }

.forecast {
  top: 530px;
  position: relative;
  height: 150px;
  text-align: center;
  margin-left:auto; 
  margin-right:auto;
}
#colored {
	background-color: rgba(170, 214, 212, 0.945);
}

/*--------------------------------------------------*/
