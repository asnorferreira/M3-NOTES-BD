/*
Exercício 1
Faça uma consulta no banco de dados "orquestra" que retornam 10 músicas em que o tempo de execução seja maior que 2 minutos.
*/

select * from musicas where tempo > 120 limit 10;