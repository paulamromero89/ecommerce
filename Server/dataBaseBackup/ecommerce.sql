CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `idCategoria` int NOT NULL,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Padre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Digital',NULL,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(2,'Analogico',NULL,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(3,'Hibrido',NULL,1,'2023-12-26 00:00:00','2023-12-26 00:00:00');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direcciones` (
  `idDireccion` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `Direccion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CodPos` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Provincia` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Pais` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Telefono` int NOT NULL,
  `Indicaciones` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idDireccion`),
  KEY `idUsuario_idx` (`idUsuario`),
  CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
INSERT INTO `direcciones` VALUES (1,1,'Av. La voz del interior 3180','Cordoba','5000','Cordoba','Argentina',2,'-',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(2,2,'Av. Emilio Caraffa 4952','Cordoba','5009','Cordoba','Argentina',4,'Esquina Juan M. la serna',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(3,3,'Teodoro Richards 705','Cordoba','5000','Cordoba','Argentina',5,'B. arguello norte',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(4,4,'Edmundo mariotte 6011','Cordoba','5009','Cordoba','Argentina',4,'-',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(6,6,'Mendoza 5065','Cordoba','5000','Cordoba','Argentina',6,'Barrio la herradura',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(7,7,'Independencia','Cordoba','5009','Cordoba','Argentina',7,'Piso 3 depto c',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(8,8,'Viracocha 8026','Cordoba','5001','Cordoba','Argentina',1,'Calle cortada',1,'2023-12-26 00:00:00','2023-12-26 00:00:00');
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dominios`
--

DROP TABLE IF EXISTS `dominios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dominios` (
  `idDominio` int NOT NULL,
  `Nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idDominio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dominios`
--

LOCK TABLES `dominios` WRITE;
/*!40000 ALTER TABLE `dominios` DISABLE KEYS */;
/*!40000 ALTER TABLE `dominios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemsorden`
--

DROP TABLE IF EXISTS `itemsorden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itemsorden` (
  `idItem` int NOT NULL AUTO_INCREMENT,
  `idProductoItem` int NOT NULL,
  `idOrden` int NOT NULL,
  `Cantidad` int NOT NULL,
  `Subtotal` decimal(13,2) NOT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idItem`),
  KEY `idProducto_idx` (`idProductoItem`) /*!80000 INVISIBLE */,
  KEY `idOrden_idx` (`idOrden`),
  CONSTRAINT `idOrden` FOREIGN KEY (`idOrden`) REFERENCES `ordenes` (`idOrden`),
  CONSTRAINT `idProductoItem` FOREIGN KEY (`idProductoItem`) REFERENCES `productos` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemsorden`
--

LOCK TABLES `itemsorden` WRITE;
/*!40000 ALTER TABLE `itemsorden` DISABLE KEYS */;
/*!40000 ALTER TABLE `itemsorden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `idOrden` int NOT NULL AUTO_INCREMENT,
  `idUsuarioOrden` int NOT NULL,
  `idDirEnv` int NOT NULL,
  `idDirFact` int NOT NULL,
  `Precio` decimal(13,2) NOT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idOrden`),
  KEY `idUsuario_idx` (`idUsuarioOrden`) /*!80000 INVISIBLE */,
  KEY `idDirEnv_idx` (`idDirEnv`),
  KEY `idDirFact_idx` (`idDirFact`),
  CONSTRAINT `idDirEnv` FOREIGN KEY (`idDirEnv`) REFERENCES `direcciones` (`idDireccion`),
  CONSTRAINT `idDirFact` FOREIGN KEY (`idDirFact`) REFERENCES `direcciones` (`idDireccion`),
  CONSTRAINT `idUsuarioOrden` FOREIGN KEY (`idUsuarioOrden`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `idCategoria` int NOT NULL,
  `Nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Marca` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Modelo` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Descripcion` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Precio` decimal(13,2) NOT NULL,
  `Imagen` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `idCategoria_idx` (`idCategoria`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Amazfit 3.2 ','Xiaomi','Amazfit','Reloj digital led',48000.00,'https://drive.google.com/file/d/1ULTan2cmDCwhwGzPExPXXx3Le0EqsGWU/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(2,1,'Smartgalaxy','Samsung','Smartgalaxy','Smartwatch blanco pantalla led 5 sensores',76000.00,'https://drive.google.com/file/d/1HLzIIxzlb8LP_vr1F0IqXu4dUsG5u7ox/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(3,1,'Xion 2.2','Xion','M 2.2','Reloj xion color dorado pantalla twisted ',25000.00,'https://drive.google.com/file/d/1pP4G2DCG9-FOw767ezzNg5SfmIqAbRQw/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(4,2,'Mecalth blue','Mecallth','Blue 1','Reloj analogico resistente a golpes',50000.00,'https://drive.google.com/file/d/1Dm2G3rC8uY_4xZQKSC33ZhiFITEA1wgc/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(5,2,'Genova forw','Genova','Forw','Reloj dorado analogico fino',45000.00,'https://drive.google.com/file/d/1XVL9qCPqrDE0IPyLHwnwsANGGY_GYBUa/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(6,2,'Tw min','Tw','Min','Reloj minimalista analogico negro',40000.00,'https://drive.google.com/file/d/17rrqmfBakEIvhejskGW4sMgrKuKPvlwn/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(7,3,'Nevo plus','Nevo','Plus 2','Reloj hibrido minimalista',55000.00,'https://drive.google.com/file/d/1kXEbpGH5ESajDYbIkPrF3iRUv05fmFCa/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(8,3,'Samsung smartplus','Samsung','Smartplus','Reloj analogico con pantalla y sensores',81000.00,'https://drive.google.com/file/d/15KJc4_qA4OBxzQwacnuu48blk5h5_yxV/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(9,3,'Genova Form','Genova','Form','Reloj indicador fecha y notificaciones',66000.00,'https://drive.google.com/file/d/1TZDYqGviOtRvc25JXTZDelKlLX44jMcG/view?usp=drive_link',1,'2023-12-26 00:00:00','2023-12-26 00:00:00');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `idStock` int NOT NULL,
  `idProducto` int NOT NULL,
  `idSucursal` int NOT NULL,
  `Cantidad` int NOT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idStock`),
  KEY `idProducto_idx` (`idProducto`),
  KEY `idSucursal_idx` (`idSucursal`),
  CONSTRAINT `idProducto` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`),
  CONSTRAINT `idSucursal` FOREIGN KEY (`idSucursal`) REFERENCES `sucursales` (`idSucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,1,1,14,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(2,2,1,8,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(3,3,1,4,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(4,4,1,0,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(5,5,1,21,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(6,6,1,23,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(7,7,1,18,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(8,8,1,5,1,'2023-12-26 00:00:00','2023-12-26 00:00:00'),(9,9,1,36,1,'2023-12-26 00:00:00','2023-12-26 00:00:00');
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sucursales` (
  `idSucursal` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Direccion` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Ciudad` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `CodPos` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Provincia` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Pais` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Telefono` int NOT NULL,
  `Estado` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idSucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursales`
--

LOCK TABLES `sucursales` WRITE;
/*!40000 ALTER TABLE `sucursales` DISABLE KEYS */;
INSERT INTO `sucursales` VALUES (1,'Centro de importaciones Cordoba','Bv rivadavia 36','Cordoba','5001','Cordoba','Argentina','administracion@importacionescba.com',1,'1','2023-12-26 00:00:00','2023-12-26 00:00:00');
/*!40000 ALTER TABLE `sucursales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Clave` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Nombre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Apellido` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FecNac` datetime NOT NULL,
  `DNI` int NOT NULL,
  `Atributos` int NOT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `DNI_UNIQUE` (`DNI`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin@gmail.com','abc123','Admin','Istrador','1990-12-30 00:00:00',30111222,2,1,'2023-12-17 18:04:50','2023-12-17 18:04:50'),(2,'Titus_Littel72@yahoo.com','gQkvLDTY7_OrF7p','Raphael','Beahan','2023-04-04 15:05:56',18091616,1,1,'2023-12-17 21:45:48','2023-12-17 21:45:48'),(3,'Annabell42@hotmail.com','RdpP_MP2WguH65r','Jammie','Morissette','2023-01-27 21:08:19',39352884,1,1,'2023-12-17 21:46:14','2023-12-17 21:46:14'),(4,'Candido_Hilpert@gmail.com','OkdRGMd8qbnDoph','Arnulfo','Watsica','2023-12-07 16:14:04',22979978,1,1,'2023-12-17 21:46:16','2023-12-17 21:46:16'),(6,'correo@ecommerce.com','123Qwe','Nombre1','Apellido1','1991-12-24 00:00:00',41122331,1,1,'2023-12-17 23:41:01','2023-12-17 23:41:01'),(7,'mail@example.com','12345fgh','Roberto','Rodriguez','1973-07-27 00:00:00',23879547,1,1,'2023-12-25 22:15:22','2023-12-25 22:15:22'),(8,'correo2@ecommerce.com','123Qwf','Nombre2','Apellido2','1991-12-25 00:00:00',41122332,1,1,'2023-12-26 21:47:11','2023-12-26 21:47:11');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoresdominios`
--

DROP TABLE IF EXISTS `valoresdominios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoresdominios` (
  `idValor` int NOT NULL,
  `idDominio` int NOT NULL,
  `Codigo` int NOT NULL,
  `Descripcion` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Estado` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idValor`),
  KEY `idDominio_idx` (`idDominio`),
  CONSTRAINT `idDominio` FOREIGN KEY (`idDominio`) REFERENCES `dominios` (`idDominio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoresdominios`
--

LOCK TABLES `valoresdominios` WRITE;
/*!40000 ALTER TABLE `valoresdominios` DISABLE KEYS */;
/*!40000 ALTER TABLE `valoresdominios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-27 19:37:33
