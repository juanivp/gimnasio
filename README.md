Ejercicio: Gestión de un gimnasio ️

Se nos solicita desarrollar un sistema de gestión para un gimnasio llamado "FitLife". El
gimnasio tiene diferentes tipos de socios y un equipo de entrenadores que los asisten.
Los socios
Existen dos tipos de socios:
● Socios Regulares: Pagan una cuota mensual fija. Tienen acceso a todas las máquinas,
pero para las clases grupales, deben pagar un adicional por cada clase a la que asistan.
● Socios VIP: Pagan una cuota mensual más alta, pero esta tarifa les da acceso ilimitado
a todas las máquinas y a todas las clases grupales sin costo adicional.
Cada socio, sin importar el tipo, tiene una identificación única, un nombre, y un plan de
entrenamiento que le asigna un entrenador. El sistema debe poder calcular el monto
mensual total a pagar por cada socio.
Los entrenadores
Los entrenadores son la base del gimnasio. Cada entrenador tiene un nombre y una
especialidad (por ejemplo, "pesas", "yoga", "funcional"). Ellos supervisan a los socios y les
asignan un plan de entrenamiento personalizado.
Las clases grupales
Las clases grupales son una parte importante de la oferta de FitLife. Cada clase tiene un
nombre (por ejemplo, "Zumba", "Pilates"), un horario y está a cargo de un entrenador. Los
socios pueden inscribirse en estas clases. Es importante que el sistema controle la
capacidad máxima de cada clase. Si un socio intenta inscribirse en una clase que ya está
llena, el sistema debe notificarlo de alguna manera.
La clase Gimnasio
Deberán crear una clase principal Gimnasio que gestione la lista de socios, la lista de
entrenadores y la lista de clases. Esta clase debe tener la capacidad de:
● Agregar y eliminar socios y entrenadores.
● Inscribir a un socio en una clase, respetando las reglas mencionadas.
● Asignar un entrenador a un socio.
● Calcular el total de ingresos mensuales esperados del gimnasio, sumando las cuotas
de todos los socios.

Consideraciones especiales

● Deberán manejar la situación en la que se intenta asignar un entrenador a un socio,
pero el entrenador no existe en el sistema.
● También deben gestionar el caso en que se intenta inscribir un socio en una clase, pero
la clase no existe.
Consignas para la resolución

A partir de la descripción anterior, se pide:
1. Análisis y Diseño:
○ Diseñar el diagrama de clases que represente su solución..
2. Implementación:
○ Codificar las clases identificadas, aplicando los conceptos de herencia,
composición y sobreescritura donde corresponda.
○ Implementar manejo de excepciones para los casos especiales mencionados.
3. Verificación:
○ Escribir las pruebas unitarias para cada clase y para las funcionalidades clave
de la clase Gimnasio.