select * from musicas;

select id, ritmo, compositor from musicas;

select distinct compositor, composicao from musicas;

select * from musicas where tempo > 120 limit 10;

select * from musicas where tempo > 60*2 limit 10;

select * from musicas where tempo > 200 AND tempo < 400;

select * from musicas where tempo > 200 OR tempo < 400;

select * from musicas where tempo between 200 and 400;

select * from musicas where compositor = 'Schubert' OR compositor = 'Mozart';

select * from musicas where compositor is null;

select * from musicas where compositor is not null;

select * from musicas limit 10;

select * from musicas limit 4 offset 0;

select * from musicas limit 10 offset 4;

select * from musicas limit 100 offset 100;

select * from musicas where compositor = 'Beethoven' order by id asc;

select * from musicas where compositor = 'Mozart' order by id desc;

select * from musicas where compositor = 'Beethoven' order by composicao asc;

select * from musicas order by compositor asc;
 
select * from musicas order by compositor desc;

select * from musicas order by compositor desc, composicao asc;

select * from musicas order by ritmo asc;

select * from musicas where tempo between 200 and 400 order by id asc, compositor asc;

select * from musicas order by id desc limit 20;

select compositor, composicao, tempo from musicas where tempo between 60*2 and 60*5 and compositor != 'Mozart';

select * from musicas where composicao like 'Violin Sonata No 1 in G minor';

select compositor, id from musicas;

select composicao, tempo from musicas where tempo > 60*4;

select compositor, composicao, id from musicas where id between 47 and 123;

select * from musicas where compositor is not null and tempo < 60*5 and compositor != 'Bach';

select * from musicas where composicao = 'Piano Sonata No 5 in C minor';

select * from musicas where composicao like 'Piano Sonata No 5 in C minor';

select * from musicas where composicao like 'Piano Sonata%';

select * from musicas where composicao like '%Sonata%';

select compositor, composicao, tempo from musicas where compositor = 'Mozart' or compositor = 'Bach';

select * from musicas where composicao like '_i__o ______ No 5 in C minor';

select * from musicas where composicao like '_iano Sonata No 5 in C minor';

select * from musicas where composicao like '___no Sonata%';

select * from musicas order by id desc;

select * from musicas where composicao ilike 'piano sonata no 5 in C minor';

select * from musicas where composicao ilike '%sonata no 5 in C mino_';

select * from musicas order by tempo desc;

select * from musicas order by tempo asc limit 5;

select * from musicas order by tempo desc limit 10;

select * from musicas order by tempo asc limit 10 offset 5;

select * from musicas limit 10 offset 0;

select * from musicas limit 10 offset 10;

select * from musicas limit 10 offset 20;

select * from musicas limit 10 offset 30;

select * from musicas limit 12 offset 12*5;

select distinct compositor from musicas where compositor is not null;

select distinct compositor, composicao from musicas;

select * from musicas where compositor like 'Bra%';

select * from musicas where ritmo like '%troppo';

select * from musicas where composicao ilike '%quartet%';

select composicao from musicas where composicao ilike '%quintet%';