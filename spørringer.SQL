CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE bilmerker (
    id SERIAL PRIMARY KEY,
    merke VARCHAR(100)
);
INSERT INTO users (name) VALUES
    ('Joe Biden'),
    ('Donald Trump'),
    ('Kamala Harris');

INSERT INTO bilmerker (merke) VALUES
    ('Yugo'),
    ('Toyota');

create table skuespillere (
    id serial primary key,
    navn varchar(100)
);

insert into skuespillere (navn) values
    ('Tom Cruise'),
    ('Angelina Jolie'),
    ('Brad Pitt');

CREATE TABLE filmer (
    id SERIAL PRIMARY KEY,
    tittel VARCHAR(100) NOT NULL
);

INSERT INTO filmer (tittel) VALUES
    ('The Matrix'),
    ('The Matrix Reloaded'),
    ('The Matrix Revolutions');

CREATE TABLE skuespiller_i_film (
    id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    skuespiller_id INT NOT NULL,
    FOREIGN KEY (film_id) REFERENCES filmer(id),
    FOREIGN KEY (skuespiller_id) REFERENCES skuespillere(id)
);

INSERT INTO skuespiller_i_film (film_id, skuespiller_id) VALUES
    (1, 1),  -- Keanu Reeves i The Matrix
    (1, 2),  -- Laurence Fishburne i The Matrix
    (1, 3),  -- Carrie-Anne Moss i The Matrix
    (2, 1),  -- Keanu Reeves i The Matrix Reloaded
    (2, 2),  -- Laurence Fishburne i The Matrix Reloaded
    (2, 3),  -- Carrie-Anne Moss i The Matrix Reloaded
    (3, 1),  -- Keanu Reeves i The Matrix Revolutions
    (3, 2),  -- Laurence Fishburne i The Matrix Revolutions
    (3, 3);  -- Carrie-Anne Moss i The Matrix Revolutions

SELECT 
    s.navn AS skuespiller,
    f.tittel AS film
FROM 
    skuespillere s
JOIN 
    skuespiller_i_film sif ON s.id = sif.skuespiller_id
JOIN 
    filmer f ON f.id = sif.film_id
ORDER BY 
    s.navn, f.id;

SELECT * FROM users;
DELETE FROM users;

SELECT * FROM skuespillere;
DELETE FROM skuespillere;

SELECT * FROM filmer;
DELETE FROM filmer;

select table_schema, table_name
from information_schema.tables
where table_name = 'filmer';

NOTIFY pgrst, 'reload schema';