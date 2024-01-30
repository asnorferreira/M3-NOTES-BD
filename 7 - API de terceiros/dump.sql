create database api_terceiros;

create table clientes(
	id serial primary key,
  nome text not null,
  email text not null unique,
  telefone text
);

create table produtos(
	id serial primary key,
  nome text not null,
  descricao text,
  valor integer not null
); 

create table usuarios(
  id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
);

create table vendas(
	id serial primary key,
  cliente_id integer not null references clientes(id),
  produto_id integer not null references produtos(id),
  quantidade integer not null,
  transacao_id text
);