create procedure dbo.InsertarEmpleado
       @inSalario money,
       @inNombre varchar(128)
as
Begin
     begin try
        declare @existeEmpleado BIT;
        declare @NombreSP varchar(128);

        select @NombreSP = Nombre
        from dbo.Empleado
        where @inNombre = Nombre;

        if @NombreSP = @inNombre
           set @existeEmpleado = 1;
        else
           set @existeEmpleado = 0;

        if @existeEmpleado = 0
           insert dbo.Empleado(Nombre, Salario)
           values (@inNombre, @inSalario);
        else
           throw 50005, 'Nombre de Empleado ya existe.', 1
     end try
     begin catch
        throw;
     end catch;
End;
