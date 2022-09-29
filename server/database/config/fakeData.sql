BEGIN;

INSERT INTO 
  products (name, product_img, price, category, description)
VALUES 

  ('SAMSUNG Galaxy S22 Ultra', 'https://m.media-amazon.com/images/I/71p1SFyK6RL._AC_SL1500_.jpg', 850, 'mobile','SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black' ),
  ('SAMSUNG Galaxy A13', 'https://m.media-amazon.com/images/I/413G4YJsyQL._AC_SL1199_.jpg', 650,'mobile', 'SAMSUNG Galaxy A13 5G Cell Phone, Factory Unlocked Android Smartphone, 64GB, Triple Lens Camera, Infinity Display Screen, Long Battery Life, Expandable...' ),
  ('TCL 30XL', 'https://m.media-amazon.com/images/I/71uG3rCr0kL._AC_SL1500_.jpg', 151,'mobile', 'TCL 30XL |2022| Unlocked Cell Phone, 6.82 inch Vast Display, 5000mAh Battery, Android 12 Smartphone, 50MP AI Quad-Camera, 6GB RAM + 64GB ROM, US Version Mobile Phone, Dual Speaker Phone, Night Mist'),
  ('Nokia 225', 'https://m.media-amazon.com/images/I/61Sn0+xiRiL._AC_SL1500_.jpg', 79, 'mobile', 'Nokia 225 | GSM Unlocked Mobile Phone | 4G | Black'),
  ('Apple iPhone 13', 'https://m.media-amazon.com/images/I/610oGQ4iR6L._AC_SL1500_.jpg', 680,'mobile', 'Apple iPhone 13, 128GB, Red - Unlocked Renewed'),
  ('SAMSUNG Galaxy Z Flip 4', 'https://m.media-amazon.com/images/I/61jqaN-jq7L._AC_SL1500_.jpg', 959,'mobile', 'SAMSUNG Galaxy Z Flip 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Hands Free Camera, Compact, Foldable Design, Informative Cover Screen, US Version, Pink Gold'),
  ('Motorola Edge', 'https://m.media-amazon.com/images/I/712nxo9u15L._AC_SL1500_.jpg', 620,'mobile', 'Motorola Edge | 2021 | 2-Day battery | Unlocked | Made for US by Motorola | 8/256GB | 108MP Camera | Nebula Blue'),
  ('OnePlus Nord N20 5G', 'https://m.media-amazon.com/images/I/71hIjJkMqFL._AC_SL1500_.jpg', 500,'mobile', 'OnePlus Nord N20 5G |6.43" AMOLED Display|6+128GB |U.S. Unlocked |4500 mAh Battery | 33W Fast Charging | Blue Smoke'),
  ('Moto G Stylus 5G', 'https://m.media-amazon.com/images/I/61ACu5xcNpL._AC_SL1500_.jpg', 589,'mobile', 'Moto G Stylus 5G | 2021 | 2-Day battery | Unlocked | Made for US by Motorola | 6/256GB | 48MP Camera | Cosmic Emerald'),
  ('Samsung Galaxy Note 20', 'https://m.media-amazon.com/images/I/81qmTTzUlfL._AC_SL1500_.jpg', 700,'mobile', 'Samsung Galaxy Note 20 5G Factory Unlocked Android Cell Phone, US Version, 128GB of Storage, Mobile Gaming Smartphone, Long-Lasting Battery, Mystic Bronze, SM-N981UZNAXAA'),


  ('mart Watch','https://m.media-amazon.com/images/I/61b9MPC65tL._AC_SL1500_.jpg', 29, 'watch','mart Watch, Fitness Tracker with Heart Rate Monitor & Sleep Tracking, IP68 Waterproof Pedometer, Calorie/Step Counter, Touchscreen Smartwatch Compatible with iPhone & Android Phones-Gray' ),
  ('MorePro Fitness Tracker','https://m.media-amazon.com/images/I/61T0KQXgOkL._AC_SL1500_.jpg', 35, 'watch','MorePro Fitness Tracker,24/7 Heart Rate Blood Pressure Monitor Smart Watch with Step Calorie Counter, Pedometer Watch Activity Tracker with IP68 Waterproof Sleep Tracking for Men Women Black' ),
  ('MorePro Smart Watch','https://m.media-amazon.com/images/I/61huKG6b7hL._AC_SL1200_.jpg', 45, 'watch','MorePro Smart Watch, Fitness Tracker with Blood Oxygen Heart Rate Monitor,1.69'' Touch Screen Blood Pressure Watches with 20 Sports Modes, IP68 Waterproof Pedometer for Men Women Android Compatible' ),
  ('SAMSUNG Galaxy Smart Watch 3','https://m.media-amazon.com/images/I/818MAcfvjPL._AC_SL1500_.jpg', 40, 'watch','SAMSUNG Galaxy Smart Watch 3 45mm, Mystic Black Renewed' ),
  ('Smart Watch Call Receive/Dial','https://m.media-amazon.com/images/I/717bpmLZ1UL._AC_SL1500_.jpg', 60, 'watch','Smart Watch Call Receive/Dial, Fitness Watch 28 Sport Modes, 1.7'' Smart Watches for Women Men with AI Voice Control Call/Text/Heart Rate/Sleep Monitor, Phone Smartwatch for Android iOS Phones' ),
  ('Smart Watch Answer/Make','https://m.media-amazon.com/images/I/71dvlE+vExL._AC_SL1500_.jpg', 80, 'watch','Smart Watch Answer/Make Calls Text Notification, Fitness Watch with Heart Rate/Sleep Monitor SpO2 Voice Assistant Pedometer Sports Watch for Android and iOS Phones Men Women' ),
  ('Apple Watch Series 4','https://m.media-amazon.com/images/I/51ZO97Hm0EL._AC_SL1024_.jpg', 141, 'watch','Apple Watch Series 4 GPS, 40MM - Silver Aluminum Case with White Sport Band Renewed' ),
  ('Apple Watch Series 6','https://m.media-amazon.com/images/I/81jlYA6kt8L._AC_SL1500_.jpg', 230, 'watch','Apple Watch Series 6 GPS, 40mm - Red Aluminum Case with Red Sport Band Renewed' ),


  ('MSI Crosshair 15','https://m.media-amazon.com/images/I/51dT6JedPpL._AC_SL1164_.jpg', 1280, 'laptop','M S I Crosshair 15 15.6" 144Hz 3ms FHD Gaming Laptop Core i7-11800H RTX 3050 16GB 512GB NVMe SSD Win10' ),
  ('MSI GE76 Raider','https://m.media-amazon.com/images/I/612OHmqUACS._AC_SL1000_.jpg', 1400,'laptop', 'MSI GE76 Raider Gaming Laptop 2021 1TB SSD, 16GB RAM 17.3" FHD 144 Hz, Intel Core i7-1180H 11th Gen, NVIDIA GeForce RTX 3060, Windows 10 64bit Titanium Blue 11UE-046 US Model' ),
  ('ASUS TUF Gaming F17','https://m.media-amazon.com/images/I/81cJmWBeU6L._AC_SL1500_.jpg', 1349,'laptop', 'ASUS TUF Gaming F17 Gaming Laptop, 17.3” 144Hz Full HD IPS-Type, Intel Core i7-11800H Processor, GeForce RTX 3060, 16GB DDR4, 1TB PCIe SSD, Gigabit Wi-Fi 6, Windows 11 Home, TUF FX706HM-ES74' ),
  ('Razer Blade 15','https://m.media-amazon.com/images/I/61gA6Girg6L._AC_SL1500_.jpg', 1490, 'laptop','Razer Blade 15 Gaming Laptop: NVIDIA GeForce RTX 3070 Ti - 12th Gen Intel 14-Core i7 CPU - 15.6” FHD 360Hz - 16GB DDR5 RAM - 1TB PCIe SSD - Windows 11 - CNC Aluminum - Chroma RGB - Thunderbolt 4' ),
  ('Apple MacBook Pro','https://m.media-amazon.com/images/I/71WtFY52CeL._AC_SL1500_.jpg', 1364, 'laptop','Apple MacBook Pro with Apple M2 Chip 13-inch, 16GB RAM, 256GB SSD Storage - Space Gray 2022 Model - Z16R0005S' ),
  ('HP OMEN 16.1','https://m.media-amazon.com/images/I/51CZB5VGjsL._AC_SL1500_.jpg', 1213, 'laptop','HP OMEN - 16.1 1920 x 1080 Full HD, 144Hz - Gaming Laptop - AMD Ryzen 7 - NVIDIA GeForce RTX 3050 Ti - RGB Keyboard - Thunderbolt - HDMI 2.1 - Mica Silver - w/HDMI 32GB RAM | 1TB PCIe SSD' ),

  ('SteelSeries Apex Pro','https://m.media-amazon.com/images/I/81yOuAUQAiL._AC_SL1500_.jpg', 147, 'accessories','SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation Switches – World’s Fastest Mechanical Keyboard – OLED Smart Display – RGB Backlit' ),
  ('Corsair K70 RGB PRO','https://m.media-amazon.com/images/I/81NHLnqXopL._AC_SL1500_.jpg', 1000, 'accessories','Corsair K70 RGB PRO Wired Mechanical Gaming Keyboard Cherry MX RGB Red Switches: Linear and Fast, 8,000Hz Hyper-Polling, PBT Double-Shot PRO Keycaps, Soft-Touch Palm Rest QWERTY, NA - Black' ),
  ('Razer BlackShark V2 X','https://m.media-amazon.com/images/I/71waplSVO7L._AC_SL1500_.jpg', 58, 'accessories','Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound - 50mm Drivers - Memory Foam Cushion - for PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, Mobile - 3.5mm Audio Jack - Black' ),
  ('Blue Yeti Nano','https://m.media-amazon.com/images/I/71khH7EY9DL._AC_SL1500_.jpg', 166, 'accessories','Blue Yeti Nano Premium USB Microphone for Recording, Streaming, Gaming, Podcasting on PC and Mac, Condenser Mic with Blue VO!CE Effects, Cardioid and Omni, No-Latency Monitoring - Red Onyx' ),
  ('Logitech G502 Hero','https://m.media-amazon.com/images/I/613cCGsKgBL._AC_SL1500_.jpg', 51, 'accessories','Logitech G502 Hero High Performance Wired Gaming Mouse, Hero 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC/Mac - Black' ),
  ('Acer Spirit Mousepad','https://m.media-amazon.com/images/I/91rhszjlMEL._AC_SL1500_.jpg', 68, 'accessories','Acer Spirit Mousepad, G9 591, 791, G9 593, 793, Gx21-71, G3-710, G6-710' );

COMMIT;