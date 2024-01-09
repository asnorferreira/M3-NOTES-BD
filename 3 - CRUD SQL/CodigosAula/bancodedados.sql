create database crud;

drop table if exists "produtos";

create table "produtos"(
    id serial primay key,
    nome varchar(255) default null,
    descricao varchar(350) default null,
    preco integer null,
    categoria varchar(190) default null
);

insert into produtos(nome, descricao, preco, categoria)
values 
('Vestido Tropical', 'Bordado com Tucanos', 32000, 'Coleção de Verão'),
('Short Branco', NULL, 50000, 'Coleção de Verão'),
('Casaco Azul', NULL, 48400, 'Coleção de Inverno'),
('Macaquito Azul', 'Roupa Lisa', 27500, 'Coleção de Verão'),
('Calça Skin', NULL, 40000, 'Coleção de Inverno'),
('Cropped', 'Modelo Farm', 20000, 'Coleção de Verão');
