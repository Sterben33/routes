CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username varchar NOT NULL,
    password_hash varchar NOT NULL,
    fio varchar,
    city varchar,
    active boolean DEFAULT TRUE
);
