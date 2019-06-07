UPDATE product
Set
 name=${name}, 
 price=${price}, 
 img=${img}
WHERE product_id = ${id};


select * from product