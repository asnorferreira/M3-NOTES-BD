select count(*) from usuarios where idade >= 18;

select *, nome as nomeCompleto from usuarios where idade >= 18;

select count(*) as quantidadeUsuarios from usuarios where idade >= 18;

select nome as nomeCompleto from usuarios where idade >= 18;

select count(*) as "quantidade Usuarios" from usuarios where idade >= 18;

select nome || ' - ' || email as "nome email" from usuarios;

select concat(nome, ' - ', email, ' - ', idade) as nome_email_idade from usuarios;

select avg(idade) from usuarios;

select round(avg(idade), 5) from usuarios;

select round(avg(idade)) from usuarios;

select max(telefone) from usuarios;
  
select idade::text from usuarios; 

select '123' :: integer;

select '123' :: integer + '4';

select cast(idade as text) from usuarios;

select now();

select sum(idade) from usuarios;

select coalesce(NULL, NULL, 'cenoura');

select concat(nome, ' - ', coalesce(telefone, 'Não possui telefone')) as concat_nome_telefone from usuarios; 

select id, concat(nome, ' - ', coalesce(email, telefone, 'Não possui')) from usuarios;

select idade, count(id), sum(idade), round(avg(idade)) from usuarios group by idade;

select categoria, count(id) as "quantidadeProdutos", sum(estoque) as "somaTotalEstoque" from farmacia group by categoria;


select * from agendamentos;

select * from agendamentos where cast(agendamento as date) < now();

select * from agendamentos where cast(agendamento as timestamp) < now();

select cast(agendamento as date) from agendamentos;

select cast(agendamento as timestamp) from agendamentos;

select age('2019-03-18 10:04:30', '2023-06-29 11:49:30');

select age('2023-06-29 11:49:30', '2019-03-18 10:04:30');

select age(cast('2019-03-18 10:04:30' as timestamp));

select age(cast('2023-06-29 11:49:30' as date));

select *, age(cast(agendamento as timestamp)) from agendamentos where cast(agendamento as timestamp) < now();

select *, age(cast(agendamento as date)) from agendamentos where cast(agendamento as date) < now();

select categoria, count(id) as "quantidadeProdutos", sum(estoque) as "somaTotalEstoque" from farmacia group by categoria;
