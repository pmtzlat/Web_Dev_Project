/*USE THESE COMMANDS TO UPDATE AND DELETE THE DATABASE UPON USER INPUT. 
IT'S WHAT YOU WRITE IN THE PHP/JS TO QUERY THE DB.*/


/*QUERY TO GET THE USERS */
select * from user where (iduser =  'Demo1' and psswrd = 'd3mo1'); 

/*QUERY TO GET PRODUCT*/
select * from product where (name = 'Arduino Starter Kit');

/*QUERY TO INSERT PRODUCT TO CART */
insert into relation( user, item, quantity ) values ('Demo1', 'Arduino Nano', 1);


/*QUERY TO GET ALL THE PRODUCTS IN THE CART FOR A USER*/
select * from relation where user = 'Demo1';

/*QUERY TO ADD A USER INTO THE DB */
insert into user(iduser, psswrd) values ('Demo3', 'd3mo3');

/* QUERY TO DELETE ITEM FROM CART */
delete from relation where (user = 'Demo1' and item = 'Arduino Nano');

/*QUERY TO CLEAR CART OF ALL ITEMS */
delete from relation where user= 'Demo2';

