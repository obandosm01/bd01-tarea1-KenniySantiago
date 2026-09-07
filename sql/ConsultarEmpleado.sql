create procedure dbo.ConsultarEmpleado
as
Begin
     Begin try
        select Empleado.id,
               Empleado.Nombre as Nombre,
               Empleado.Salario as Salario
        from dbo.Empleado
        order by Nombre asc
     End try
     Begin catch
        throw 50005, 'No se pudieron listar los empleados.', 1;
     End catch;
End
