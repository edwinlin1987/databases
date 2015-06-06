DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  username VARCHAR(20),
  message VARCHAR(100),
  roomname VARCHAR(30),
  objectId int(11) NOT NULL auto_increment,
  PRIMARY KEY(objectId)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  username VARCHAR(20)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

