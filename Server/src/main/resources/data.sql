insert into conductor (id_conductor, name, cedula, telefono, direccion) values (-1, 'conductor1', 'cedula1', 'telefono1', 'direccion1');
insert into conductor (id_conductor, name, cedula, telefono, direccion) values (-2, 'conductor2', 'cedula2', 'telefono2', 'direccion2');
insert into conductor (id_conductor, name, cedula, telefono, direccion) values (-3, 'conductor3', 'cedula3', 'telefono3', 'direccion3');
insert into conductor (id_conductor, name, cedula, telefono, direccion) values (-4, 'conductor4', 'cedula4', 'telefono4', 'direccion4');
insert into conductor (id_conductor, name, cedula, telefono, direccion) values (-5, 'conductor5', 'cedula5', 'telefono5', 'direccion5');
insert into conductor (id_conductor, name, cedula, telefono, direccion) values (-6, 'conductor6', 'cedula6', 'telefono6', 'direccion6');

insert into bus (id_bus, placa, modelo) values (-1, 'placa1', 'modelo1');
insert into bus (id_bus, placa, modelo) values (-2, 'placa2', 'modelo2');
insert into bus (id_bus, placa, modelo) values (-3, 'placa3', 'modelo3');
insert into bus (id_bus, placa, modelo) values (-4, 'placa4', 'modelo4');
insert into bus (id_bus, placa, modelo) values (-5, 'placa5', 'modelo5');
insert into bus (id_bus, placa, modelo) values (-6, 'placa6', 'modelo6');
insert into bus (id_bus, placa, modelo) values (-7, 'placa7', 'modelo7');
insert into bus (id_bus, placa, modelo) values (-8, 'placa8', 'modelo8');
insert into bus (id_bus, placa, modelo) values (-9, 'placa9', 'modelo9');
insert into bus (id_bus, placa, modelo) values (-10, 'placa10', 'modelo10');

insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Lunes', -1, -1);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Lunes', -1, -4);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Martes', -2, -6);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Lunes', -2, -3);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Miercoles', -3, -7);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Miercoles', -3, -9);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Lunes', -4, -10);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Jueves', -4, -9);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Viernes', -5, -2);
insert into conductorxbus (dia_asignacion, conductor_id_id_conductor, bus_id_id_bus) values ('Sabado', -6, -8);


insert into estacion (id_estacion, nombre) values (-1, 'estacion1');
insert into estacion (id_estacion, nombre) values (-2, 'estacion2');
insert into estacion (id_estacion, nombre) values (-3, 'estacion3');
insert into estacion (id_estacion, nombre) values (-4, 'estacion4');
insert into estacion (id_estacion, nombre) values (-5, 'estacion5');
insert into estacion (id_estacion, nombre) values (-6, 'estacion6');
insert into estacion (id_estacion, nombre) values (-7, 'estacion7');
insert into estacion (id_estacion, nombre) values (-8, 'estacion8');
insert into estacion (id_estacion, nombre) values (-9, 'estacion9');
insert into estacion (id_estacion, nombre) values (-10, 'estacion10');