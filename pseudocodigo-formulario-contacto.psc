Proceso formulario
	Definir nombre Como Caracter;
	Definir email Como Caracter;
	Definir telefono Como Entero;
	Definir mensaje Como Caracter;
	Definir datos_formulario Como Caracter;
	
	nombre='nulo';
	email='nulo';
	telefono=0;
	mensaje='nulo';
	datos_formulario='Datos enviados';
	
	Escribir 'Ingresa tu nombre';
	Leer nombre;
	Escribir 'ingresa tu email';
	Leer email;
	Escribir 'Ingresa tu telefono';
	Leer telefono;
	Escribir 'Ingresa tu mensaje';
	Leer mensaje;
	
	Si nombre<>'nulo' Y email<>'nulo' Y telefono<>0 Y mensaje<>'nulo' Entonces
		Escribir datos_formulario;
	SiNo
		Escribir 'No se puede enviar. Datos incompletos';
	FinSi
FinProceso
