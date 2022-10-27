CREATE TABLE users (
    id int primary key NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password_hash varchar(255) NOT NULL,
) ENGINE = InnoDB DEFAULT CHARSET = utf8;