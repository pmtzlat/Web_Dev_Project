-- MySQL Script generated by MySQL Workbench
-- Tue May  3 20:26:54 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP DATABASE IF EXISTS mydb;
CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `iduser` VARCHAR(15) NOT NULL,
  `psswrd` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`product` ;

CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `name` VARCHAR(100) NOT NULL,
  `rating` DOUBLE NOT NULL,
  `price` DOUBLE NOT NULL DEFAULT 0,
  `category` VARCHAR(45) NULL,
  `image` VARCHAR(500) NULL,
  `stock` INT NOT NULL DEFAULT 0,
  `weight` DOUBLE NULL DEFAULT 0,
  `description` TEXT(1000) NULL,
  `height` DOUBLE NULL DEFAULT 0,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`relation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`relation` ;

CREATE TABLE IF NOT EXISTS `mydb`.`relation` (
  `user` VARCHAR(15) NOT NULL,
  `item` VARCHAR(45) NOT NULL,
  `quantity` INT(3) UNSIGNED NOT NULL,
  PRIMARY KEY (`user`, `item`),
  INDEX `nameitem_idx` (`item` ASC) VISIBLE,
  CONSTRAINT `iduser`
    FOREIGN KEY (`user`)
    REFERENCES `mydb`.`user` (`iduser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `nameitem`
    FOREIGN KEY (`item`)
    REFERENCES `mydb`.`product` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO user (iduser, psswrd) VALUES ('Demo1', 'd3mo1'), ('Demo2', 'd3mo2');

INSERT INTO product (name, rating, price, category, image, stock, weight, description, height) 
VALUES 
('4G-Raspberry-Pi-4', 4.5, 25.00, 'Microprocessor', 'https://cdn.sparkfun.com/r/500-500/assets/parts/1/4/0/2/2/15447-Raspberry_Pi_4_Model_B__4_GB_-01.jpg', 300,  12.5, 'Lorem ipsum', 22.3),
('Arduino Nano', 4.3, 14.50, 'Microprocessor', 'https://www.twinschip.com/image/cache/catalog/Products%20Twins%20Chip%20Store%202020/DEVELOPER%20BOARDS/Arduino/Arduino%20Nano%20V3.0/Arduino%20Nano%20V3.0%20Twins%20Chip%201-425x425.jpg', 150,  4.3, 'Lorem ipsum', 2.3),
('Arduino Starter Kit', 4.8, 50.35, 'Microprocessor', 'https://m.media-amazon.com/images/I/818V0uRvnrL._AC_SL1500_.jpg', 50,  20, 'Lorem ipsum', 40),
('RP4020 Microcontroller Kit', 3.8, 10.35, 'Microprocessor', 'https://www.raspberrypi.org/app/uploads/2021/01/17717-SparkFun-Pro-Micro-RP2040-01-500x500.jpg', 122,  22.5, 'Lorem ipsum', 11.37),
('iFlight Beast F7 Drone Controller Board', 4.6, 15.00, 'Microprocessor', 'https://images-na.ssl-images-amazon.com/images/I/41hEKfbBpxL.jpg', 230,  12.5, 'Lorem ipsum', 5.6),
('Victor BB Motor Controller', 3.9, 23.40, 'Motor', 'https://www.ampflow.com/controllers/vex/HV.jpg', 111,  3.5, 'Lorem ipsum', 4),
('Solo 60 Motor Controller', 3.5, 11.50, 'Motor', 'https://cdn11.bigcommerce.com/s-eem7ijc77k/images/stencil/original/products/1652/25581/IMC410__72335.1577981496.jpg?c=2', 35,  2.1, 'Lorem ipsum', 1.5),
('M27-150-P Motor', 3.8, 18.35, 'Motor', 'https://m.media-amazon.com/images/I/61NXZU-kcaL._SL1200_.jpg', 35,  5.2, 'Lorem ipsum', 2.1),
('TS100 Smart Soldering Iron', 4.3, 20.00, 'Tool', 'https://m.media-amazon.com/images/I/517hkMdTmmL._AC_SS450_.jpg', 120, 4.3, 'Lorem ipsum', 3.5)
;