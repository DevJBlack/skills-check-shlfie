CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  price INTEGER,
  img TEXT
)

INSERT INTO product (name, price, img)
VALUES ('Bugatti', 2000000, 'https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4799f9106491ebb58ca3351f6df5c44a.jpg')

-- {
-- 	"name": "Honda",
-- 	"price": 25000,
-- 	"img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-honda-civic-type-r-133-1536694565.jpg?crop=0.819xw:1.00xh;0.0631xw,0&resize=640:*"
-- }