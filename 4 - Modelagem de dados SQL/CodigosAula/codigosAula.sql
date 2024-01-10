create table if not exists editoras(
	id serial primary key,
  nome varchar(190) not null,
  cnpj varchar(14) unique,
  data_cadastro timestamp default now()
);

insert into editoras (nome, cnpj)
values
('Cubos Academy', '10225620100015')

create table if not exists livros (
	isbn integer primary key,
  editora_id integer references editoras(id),
  titulo text not null,
  data_publicacao date not null
);

insert into livros (isbn, editora_id, titulo, data_publicacao)
values
(123456, 1, 'Node.js Avançado', '2024-01-01');

create table if not exists enderecos (
	id serial primary key,
  editora_id integer references editoras(id),
  cep varchar(9) not null,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);

insert into enderecos (editora_id, cep)
values
(1, '41000-000');

create table categorias (
	id serial primary key,
  	nome text not null
);

create table livro_categoria (
	livro_isbn integer references livros(isbn),
  	categoria_id integer references categorias(id)
);

insert into categorias (nome) values ('Tecnologia'), ('Programação'), ('Nodejs');

insert into livro_categoria 
(livro_isbn, categoria_id)
values
(123456, 4),
(123456, 5),
(123456, 6),
(123456, 5);

create table comentarios(
	id serial primary key,
  descricao text not null,
  comentario_id integer references comentarios(id),
  livro_isbn integer references livros(isbn)
);

insert into comentarios (livro_isbn, descricao)
values
(123456, 'Livro excelente');

insert into comentarios (comentario_id, descricao)
values
(1, 'Obrigado pelo feedback');

alter table categorias add column descricao text;

alter table categorias drop column descricao;

alter table categorias alter column descricao type varchar(100);

create table telefones (
	id serial primary key,
  editora_id integer,
  numero text
);

alter table telefones
add constraint fk_telefones_editoras_id foreign key (editora_id)
references editoras(id);
