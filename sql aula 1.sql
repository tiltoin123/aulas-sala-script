create database ProgSCRIPT;
go
use ProgSCRIPT;

create table alunos(
	id int primary key ,
	nome varchar(255),
	idade int
)

SELECT *
FROM sys.tables;

EXEC sp_help 'dbo.alunos';  