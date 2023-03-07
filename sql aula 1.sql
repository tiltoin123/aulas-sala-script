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

insert into alunos (id,nome,idade) values(01,'mirosmar arioswaldo dragutino', 23)
insert into alunos (id,nome,idade) values(02,'vladislau pereira bananeira', 123),
(03,'jagutino lambari bananeira', 12)
select * from alunos;
select * from alunos where idade >= 20;
update alunos set idade = 20 where id =3;