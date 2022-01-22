/*============================================
=            OBJECT WITH FEATURES            =
============================================*/

var props = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	cantidadSignos: 0,
	cantidadDecimal: false,
	resultado: false
}

/*=====  End of OBJECT WITH FEATURES  ======*/

/*===========================================
=            OBJECT WITH METHODS            =
===========================================*/

var metodo = {

	inicio() {

		for (var i = 0; i < props.teclas.length; i++) {

			props.teclas[i].addEventListener("click", metodo.oprimirTecla)
		}

		document.addEventListener("keydown", metodo.oprimir)
	},

	oprimir(tecla) {

		if (tecla.keyCode == 48 || tecla.keyCode == 96) {

			props.accion = "numero"
			props.digito = 0
		}

		else if (tecla.keyCode == 49 || tecla.keyCode == 97) {

			props.accion = "numero"
			props.digito = 1
		}

		else if (tecla.keyCode == 50 || tecla.keyCode == 98) {

			props.accion = "numero"
			props.digito = 2
		}

		else if (tecla.keyCode == 51 || tecla.keyCode == 99) {

			props.accion = "numero"
			props.digito = 3
		}

		else if (tecla.keyCode == 52 || tecla.keyCode == 100) {

			props.accion = "numero"
			props.digito = 4
		}

		else if (tecla.keyCode == 53 || tecla.keyCode == 101) {

			props.accion = "numero"
			props.digito = 5
		}

		else if (tecla.keyCode == 54 || tecla.keyCode == 102) {

			props.accion = "numero"
			props.digito = 6
		}

		else if (tecla.keyCode == 55 || tecla.keyCode == 103) {

			props.accion = "numero"
			props.digito = 7
		}

		else if (tecla.keyCode == 56 || tecla.keyCode == 104) {

			props.accion = "numero"
			props.digito = 8
		}

		else if (tecla.keyCode == 57 || tecla.keyCode == 105) {

			props.accion = "numero"
			props.digito = 9
		}

		else if (tecla.keyCode == 187 || tecla.keyCode == 107) {

			props.accion = "signo"
			props.digito = "+"
		}

		else if (tecla.keyCode == 189 || tecla.keyCode == 109) {

			props.accion = "signo"
			props.digito = "-"
		}

		else if (tecla.keyCode == 88 || tecla.keyCode == 106) {

			props.accion = "signo"
			props.digito = "*"
		}

		else if (tecla.keyCode == 111) {

			props.accion = "signo"
			props.digito = "/"
		}

		else if (tecla.keyCode == 190 || tecla.keyCode == 110) {

			props.accion = "decimal"
			props.digito = "."
		}

		else if (tecla.keyCode == 13) {

			props.accion = "igual"
		}

		else if (tecla.keyCode == 8) {

			props.accion = ""
			metodo.borrarCalculadora()
		}

		else
		{
			props.accion = ""
			props.digito = ""
		}

		metodo.calculadora(props.accion, props.digito)
	},

	oprimirTecla(tecla) {

		props.accion = tecla.target.getAttribute("class")
		props.digito = tecla.target.innerHTML

		metodo.calculadora(props.accion, props.digito)
	},

	calculadora(accion, digito) {

		switch (accion) {

			case "numero":

				if (props.operaciones.innerHTML == "0") {

					props.operaciones.innerHTML = digito

				} else {

					if (props.resultado) {

						props.resultado = false
						props.operaciones.innerHTML = digito

					} else {

						props.operaciones.innerHTML += digito

					}
				}

				props.cantidadSignos = 0

				break;

			case "signo":

				props.cantidadSignos++

					if (props.cantidadSignos == "1") {

						if (props.operaciones.innerHTML == "0") {
							props.operaciones.innerHTML = 0
						} else {
							props.operaciones.innerHTML += digito
							props.cantidadDecimal = false
							props.resultado = false
						}
					}

				break;

			case "decimal":

				if (!props.cantidadDecimal && props.cantidadSignos!=1) {

					props.operaciones.innerHTML += digito
					props.cantidadDecimal = true
					props.resultado = false
				}

				break;

			case "igual":

				props.operaciones.innerHTML = eval(props.operaciones.innerHTML)

				var expresion = /./g

				if(!expresion.test(props.operaciones.innerHTML)){
					props.cantidadDecimal = true
				}

				props.resultado = true
				break;
		}
	},

	borrarCalculadora() {

		props.operaciones.innerHTML = 0
		props.cantidadDecimal = false
		props.resultado = false
	}
}

metodo.inicio()

/*=====  End of OBJECT WITH METHODS  ======*/