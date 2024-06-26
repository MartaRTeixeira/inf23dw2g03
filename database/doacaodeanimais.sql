CREATE DATABASE IF NOT EXISTS doacaodeanimais;
USE doacaodeanimais;

create table animal (
	id int primary key,
	name varchar(50),
	age int,
	typeAnimal varchar(50),
	breed varchar(50),
	description varchar(200)
	);

create table volunteer (
	id int primary key,
	name varchar(50),
	phoneNumber varchar(9),
	address varchar(100)
	);

create table person (
	id int primary key,
	name varchar(50),
	phoneNumber varchar(9),
	address varchar(100)
	);

create table adoption (
	id int primary key,
	idAnimal int references animal(id),
	name varchar(50),
	address varchar(100),
	idPerson int references person(id),
	idVolunteer int references volunteer(id),
	description varchar(200)
	);

create table donation (
	id int primary key,
	idPerson int references person(id),
	type varchar(50),
	quantity int
	);

insert into volunteer (id, name, phoneNumber, address) values (1, 'Joaquim', 939339396, 'Rua das pedras 31');
insert into volunteer (id, name, phoneNumber, address) values (2, 'Bruna', 938521766, 'Rua da povoa 12');
insert into volunteer (id, name, phoneNumber, address) values (3, 'Jane', 968521111, 'Avenida Diogo Cao');
insert into volunteer (id, name, phoneNumber, address) values (4, 'Jake', 938521112, 'Rua Doutor Miguel Bombarda 174');
insert into volunteer (id, name, phoneNumber, address) values (5, 'Jennie', 968521221, 'Rua Manuel da Fonseca');
insert into volunteer (id, name, phoneNumber, address) values (6, 'Rute', 968521331, 'Avenida Jose Elias Garcia 114');
insert into volunteer (id, name, phoneNumber, address) values (7, 'Chuck', 968521551, 'Rua Elias Garcia 362');
insert into volunteer (id, name, phoneNumber, address) values (8, 'Joana', 968521441, 'Rua Gago Coutinho 2');
insert into volunteer (id, name, phoneNumber, address) values (9, 'Bella', 968521661, 'Rua Vasco da Gama 31');
insert into volunteer (id, name, phoneNumber, address) values (10, 'Hugo', 938521771, 'Travessa do Poco do Musgo');
insert into volunteer (id, name, phoneNumber, address) values (11, 'Heejin', 638521558, 'Rua Oliveira Martins 9');
insert into volunteer (id, name, phoneNumber, address) values (12, 'Blair', 968521994, 'Rua 5 de Outubro 10');
insert into volunteer (id, name, phoneNumber, address) values (13, 'Shimizu', 968521615, 'Doca do Bom Sucesso');
insert into volunteer (id, name, phoneNumber, address) values (14, 'Serena', 968521228, 'Beco dos Capuchos');
insert into volunteer (id, name, phoneNumber, address) values (15, 'Mello', 936852188, 'Avenida Conde Castro Guimaraes 12-B');
insert into volunteer (id, name, phoneNumber, address) values (16, 'Olivia', 938521334, 'Rua Conselheiro Emidio Navarro Nr. 1');
insert into volunteer (id, name, phoneNumber, address) values (17, 'Salvador', 938521117, 'Avenida 5 de Outubro');
insert into volunteer (id, name, phoneNumber, address) values (18, 'Amy', 968521641, 'Estrada do Farrobo');
insert into volunteer (id, name, phoneNumber, address) values (19, 'Abu', 938521146, 'Rua 28 de Setembro');
insert into volunteer (id, name, phoneNumber, address) values (20, 'Julio', 938521978, 'Praca 25 de Abril 17');
insert into volunteer (id, name, phoneNumber, address) values (21, 'Lisa', 968521879, 'Rua Miguel Torga 2D');
insert into volunteer (id, name, phoneNumber, address) values (22, 'Julia', 938521438, 'Rua Antonio Palha');
insert into volunteer (id, name, phoneNumber, address) values (23, 'Isadora', 938521222, 'Rua Professora Olga Passos 8A');
insert into volunteer (id, name, phoneNumber, address) values (24, 'Henrique', 938521555, 'Rua Diogo de Silves 17A');
insert into volunteer (id, name, phoneNumber, address) values (25, 'Joaquina', 938521444, 'Rua Alves Redol 115');
insert into volunteer (id, name, phoneNumber, address) values (26, 'Harvey', 938521996, 'Rua Pires Antunes 18');
insert into volunteer (id, name, phoneNumber, address) values (27, 'Matilde', 968521999, 'Rua Almeida Garrett 24');
insert into volunteer (id, name, phoneNumber, address) values (28, 'Flavia', 968521666, 'Rua Vieira da Silva 9');
insert into volunteer (id, name, phoneNumber, address) values (29, 'Marcelo', 938521321, 'Rua Vasco da Gama 31');
insert into volunteer (id, name, phoneNumber, address) values (30, 'Catarina', 968521123, 'Travessa da Pereira, 22, r/c esq.');

insert into person (id, name, address) values (1, 'Nuno', 'Rua das arvores');
insert into person (id, name, address) values (2, 'Alisha', 'Rua das flores 51');
insert into person (id, name, address) values (3, 'Bianca', 'Rua Clube de Tenis');
insert into person (id, name, address) values (4, 'Maddison', 'Rua Ivens');
insert into person (id, name, address) values (5, 'Paulo', 'Rua 29 de Setembro');
insert into person (id, name, address) values (6, 'Spencer', 'Rua Oliveira Martins 3');
insert into person (id, name, address) values (7, 'Isabel', 'Rua Doutor Joao Gomes Patacao 21');
insert into person (id, name, address) values (8, 'Lourenco', 'Avenida Adriano Julio Coelho 7');
insert into person (id, name, address) values (9, 'Kimberly', 'Rua Dona Maria');
insert into person (id, name, address) values (10, 'Mario', 'Rua Guilherme Gomes Fernandes 41');
insert into person (id, name, address) values (11, 'Fabio', 'Rua Brasilia');
insert into person (id, name, address) values (12, 'Teresa', 'Rua Professor Agostinho da Silva 8');
insert into person (id, name, address) values (13, 'Marta', 'Estrada Marques de Pombal 51');
insert into person (id, name, address) values (14, 'Diana', 'Rua Luis de Camoes 2');
insert into person (id, name, address) values (15, 'Daniela', 'Rua Combatentes do Ultramar 71');
insert into person (id, name, address) values (16, 'Rodrigo', 'Rua Professor Doutor Alfredo da Costa 108');
insert into person (id, name, address) values (17, 'Carol', 'Rua Manuel Arriaga 64');
insert into person (id, name, address) values (18, 'Marisa', 'Avenida Alexandre Salles');
insert into person (id, name, address) values (19, 'Natalia', 'Praceta Calouste Gulbenkian 6');
insert into person (id, name, address) values (20, 'Faizan', 'Rua da Praia da Adraga 63');
insert into person (id, name, address) values (21, 'Blaine', 'Rua 4 de Outubro, n.o 19');
insert into person (id, name, address) values (22, 'Nuno', 'Estr. Nacional 249/1 Venteira');
insert into person (id, name, address) values (23, 'Mustafa', 'Alameda Combatentes da Grande Guerra 12-A');
insert into person (id, name, address) values (24, 'Emma', 'Rua Jeronimo Rodrigues Vilarinho');
insert into person (id, name, address) values (25, 'Pablo', 'Rua Antonio dos Reis 171');
insert into person (id, name, address) values (26, 'Luis', 'Avenida Professor Doutor Augusto Abreu Lopes');
insert into person (id, name, address) values (27, 'Benjamin', 'Avenida General Barnabe Antonio Ferreira 215');
insert into person (id, name, address) values (28, 'Anthony', 'Rua Arnaldo Jesus Gomes');
insert into person (id, name, address) values (29, 'Tomas', 'Rua Alto');
insert into person (id, name, address) values (30, 'Nikita', 'Rua Doutor Miguel Bombarda 247');

insert into animal(id, name, age, typeAnimal, breed, description) values (1, 'Bobi', 3, 'Dog', 'Yorkshire', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (2, 'Chewy', 3, 'Hamster', 'Winter White Russian Dwarf', 'Dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (3, 'Bambi', 2, 'Dog', 'American Bulldog', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (4, 'Angel', 1, 'Hamster', 'Syrian', 'This hamster is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (5,'Lilly', 2, 'Rabbit', 'English Lop', 'This rabbit is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (6, 'Fluffy', 8, 'Dog', 'Australian Shepherd', 'This dog has only 3 legs');
insert into animal(id, name, age, typeAnimal, breed, description) values (7, 'Cuddles', 5, 'Cat', 'Maine Coon', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (8, 'Duke', 6, 'Cat', 'Ragdoll', 'This cat has only one eye');
insert into animal(id, name, age, typeAnimal, breed, description) values (9, 'Chibi', 1, 'Rabbit', 'English Spot', 'This rabbit is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (10, 'Sunshine', 5, 'Dog', 'Australian Shepherd', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (11, 'Nibbles', 5, 'Cat', 'Persian Cat', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (12, 'Kooky', 4, 'Dog', 'Bernese Mountain', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (13, 'Mizuki', 5, 'Cat', 'Birman', 'This cat is hypoallergenic');
insert into animal(id, name, age, typeAnimal, breed, description) values (14, 'Taz', 2, 'Hamster', 'Roborovski Dwarf', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (15, 'Lucy', 6, 'Dog', 'Pitbul', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (16, 'Sprinkle', 2, 'Rabbit', 'Rabbit Dutch Rabbit', 'This rabbit is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (17, 'Dino', 1, 'Dog', 'Border Collie', 'This dog is allergic to pollen');
insert into animal(id, name, age, typeAnimal, breed, description) values (18, 'Mondo', 4, 'Dog', 'American Bulldog', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (19, 'Muffins', 2, 'Cat', 'British Shorthair', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (20, 'Calico', 1, 'Cat', 'Calico', 'This cat is overwheight');
insert into animal(id, name, age, typeAnimal, breed, description) values (21, 'Polka', 2, 'Rabbit', 'Blanc de Hotot', 'This rabbit is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (22, 'Sparkle',2, 'Hamster', 'Chinese', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (23, 'Binky', 6, 'Dog', 'Border Collie', 'This dog has a cast on his left back leg');
insert into animal(id, name, age, typeAnimal, breed, description) values (24, 'Ivy', 8, 'Cat', 'Ragdoll', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (25, 'Mittens', 4, 'Cat', 'Peterbald', 'This cat is allergic to dust');
insert into animal(id, name, age, typeAnimal, breed, description) values (26, 'Scarlett', 6, 'Dog', 'Australian Shepherd', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (27, 'Sissy', 7, 'Cat', 'Peterbald', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (28, 'Kane', 10, 'Dog', 'Bernese Mountain', 'This dog is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (29, 'Kirby', 7, 'Cat', 'American Wirehair', 'This cat is normal');
insert into animal(id, name, age, typeAnimal, breed, description) values (30, 'Lassie', 9, 'Dog', 'Pitbul', 'This dog is normal');

insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (1, 1, 'Adoption 01', 'Rua Doutor Miguel Bombarda 247', 30, 30, 'The animal of this adoption was a dog named Bobi');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (2, 2, 'Adoption 02', 'Rua Alto', 29, 29, 'The animal of this adoption was a hamster named Chewy');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (3, 3, 'Adoption 03', 'Rua Arnaldo Jesus Gomes', 28, 28, 'The animal of this adoption was a dog named Bambi');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (4, 4, 'Adoption 04',  'Avenida General Barnabe Antonio Ferreira 215', 27, 27, 'The animal of this adoption was a hamster named Angel');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (5, 5, 'Adoption 05',  'Avenida Professor Doutor Augusto Abreu Lopes', 26, 26, 'The animal of this adoption was a rabbit named Lilly');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (6, 6, 'Adoption 06',  'Rua Antonio dos Reis 171', 25, 25, 'The animal of this adoption was a dog named Fluffy');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (7, 7, 'Adoption 07',  'Rua Jeronimo Rodrigues Vilarinho', 24, 24,  'The animal of this adoption was a cat named Cuddles');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (8, 8, 'Adoption 08',  'Alameda Combatentes da Grande Guerra 12-A', 23, 23,  'The animal of this adoption was a cat named Duke');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (9, 9, 'Adoption 09',  'Estr. Nacional 249/1 Venteira', 22, 22,  'The animal of this adoption was a rabbit named Chibi');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (10, 10, 'Adoption 10',  'Rua 4 de Outubro, n.o 19', 21, 21, 'The animal of this adoption was a dog named Sunshine');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (11, 11, 'Adoption 11',  'Rua da Praia da Adraga 63', 20, 20, 'The animal of this adoption was a cat named Nibbles');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (12, 12, 'Adoption 12',  'Praceta Calouste Gulbenkian 6', 19, 19, 'The animal of this adoption was a dog named Kooky');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (13, 13, 'Adoption 13',  'Avenida Alexandre Salles', 18, 18, 'The animal of this adoption was a cat named Mizuki');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (14, 14, 'Adoption 14',  'Rua Manuel Arriaga 64', 17, 17, 'The animal of this adoption was a hamster named Taz');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (15, 15, 'Adoption 15',  'Rua Professor Doutor Alfredo da Costa 108', 16, 16, 'The animal of this adoption was a dog named Lucy');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (16, 16, 'Adoption 16',  'Rua Combatentes do Ultramar 71', 15, 15, 'The animal of this adoption was a rabbit named Sprinkle');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (17, 17, 'Adoption 17',  'Rua Luis de Camoes 2', 14, 14, 'The animal of this adoption was a dog named Dino');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (18, 18, 'Adoption 18',  'Estrada Marques de Pombal 51', 13, 13, 'The animal of this adoption was a dog named Mondo');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (19, 19, 'Adoption 19',  'Rua Professor Agostinho da Silva 8', 12, 12, 'The animal of this adoption was a cat named Muffins');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (20, 20, 'Adoption 20',  'Rua Brasilia', 11, 11, 'The animal of this adoption was a cat named Calico');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (21, 21, 'Adoption 21',  'Rua Guilherme Gomes Fernandes 41', 10, 10, 'The animal of this adoption was a rabbit named Polka');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (22, 22, 'Adoption 22',  'Rua Dona Maria', 9, 9, 'The animal of this adoption was a hamster named Sparkle');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (23, 23, 'Adoption 23',  'Avenida Adriano Julio Coelho 7', 8, 8, 'The animal of this adoption was a dog named Binky');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (24, 24, 'Adoption 24',  'Rua Doutor Joao Gomes Patacao 21', 7, 7, 'The animal of this adoption was a cat named Ivy');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (25, 25, 'Adoption 25',  'Rua Oliveira Martins 3', 6, 6, 'The animal of this adoption was a cat named Mittens');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (26, 26, 'Adoption 26',  'Rua 29 de Setembro', 5, 5, 'The animal of this adoption was a dog named Scarlett');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (27, 27, 'Adoption 27',  'Rua Ivens', 4, 4, 'The animal of this adoption was a cat named Sissy');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (28, 28, 'Adoption 28',  'Rua Clube de Tenis', 3, 3, 'The animal of this adoption was a dog named Kane');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (29, 29, 'Adoption 29',  'Rua das flores 51', 2, 2, 'The animal of this adoption was a cat named Kirby');
insert into adoption (id, idAnimal, name, address, idPerson, idVolunteer, description) values (30, 30, 'Adoption 30',  'Rua das arvores', 1, 1, 'The animal of this adoption was a dog named Lassie');

insert into donation (id, idPerson, type, quantity) values (1, 1, 'food', 10);
insert into donation (id, idPerson, type, quantity) values (2, 2, 'toys', 3);
insert into donation (id, idPerson, type, quantity) values (3, 3, 'food', 2);
insert into donation (id, idPerson, type, quantity) values (4, 4, 'food', 1);
insert into donation (id, idPerson, type, quantity) values (5, 5, 'toys', 1);
insert into donation (id, idPerson, type, quantity) values (6, 6, 'food', 7);
insert into donation (id, idPerson, type, quantity) values (7, 7, 'food', 2);
insert into donation (id, idPerson, type, quantity) values (8, 8, 'food', 2);
insert into donation (id, idPerson, type, quantity) values (9, 9, 'food', 4);
insert into donation (id, idPerson, type, quantity) values (10, 10, 'toys', 1);
insert into donation (id, idPerson, type, quantity) values (11, 11, 'toys', 6);
insert into donation (id, idPerson, type, quantity) values (12, 12, 'food', 3);
insert into donation (id, idPerson, type, quantity) values (13, 13, 'toys', 1);
insert into donation (id, idPerson, type, quantity) values (14, 14, 'food', 1);
insert into donation (id, idPerson, type, quantity) values (15, 15, 'toys', 1);
insert into donation (id, idPerson, type, quantity) values (16, 16, 'food', 3);
insert into donation (id, idPerson, type, quantity) values (17, 17, 'toys', 2);
insert into donation (id, idPerson, type, quantity) values (18, 18, 'food', 7);
insert into donation (id, idPerson, type, quantity) values (19, 19, 'toys', 4);
insert into donation (id, idPerson, type, quantity) values (20, 20, 'food', 10);
insert into donation (id, idPerson, type, quantity) values (21, 21, 'food', 2);
insert into donation (id, idPerson, type, quantity) values (22, 22, 'toys', 15);
insert into donation (id, idPerson, type, quantity) values (23, 23, 'food', 8);
insert into donation (id, idPerson, type, quantity) values (24, 24, 'food', 20);
insert into donation (id, idPerson, type, quantity) values (25, 25, 'toys', 2);
insert into donation (id, idPerson, type, quantity) values (26, 26, 'toys', 13);
insert into donation (id, idPerson, type, quantity) values (27, 27, 'toys', 14);
insert into donation (id, idPerson, type, quantity) values (28, 28, 'toys', 2);
insert into donation (id, idPerson, type, quantity) values (29, 29, 'food', 9);
insert into donation (id, idPerson, type, quantity) values (30, 30, 'food', 4);
