CREATE DATABASE  IF NOT EXISTS `gda` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gda`;
-- MySQL dump 10.13  Distrib 5.6.19, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: gda
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `abrev` varchar(255) NOT NULL,
  `level` varchar(255) NOT NULL,
  `DisciplineId` int(11) DEFAULT NULL,
  `TeacherId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `DisciplineId` (`DisciplineId`),
  KEY `TeacherId` (`TeacherId`),
  CONSTRAINT `class_ibfk_1` FOREIGN KEY (`DisciplineId`) REFERENCES `discipline` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `class_ibfk_2` FOREIGN KEY (`TeacherId`) REFERENCES `teacher` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'ALG01','1',1,1),(2,'ALG02','1',1,2),(3,'ETG01','1',2,2),(4,'ETG02','1',2,3),(5,'TGA01','1',3,3),(6,'TGA02','1',3,4),(7,'LPG01','1',4,4),(8,'LPG02','1',4,5),(9,'MAT01','1',5,5),(10,'MAT02','1',5,6),(11,'TGS01','1',6,6),(12,'TGS02','1',6,1),(13,'IE01','6',7,1),(14,'IE02','1',7,2),(15,'IE03','1',7,3),(16,'IE04','1',7,4),(17,'IE05','1',7,5),(18,'IE06','1',7,6);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discipline`
--

DROP TABLE IF EXISTS `discipline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discipline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `abrev` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discipline`
--

LOCK TABLES `discipline` WRITE;
/*!40000 ALTER TABLE `discipline` DISABLE KEYS */;
INSERT INTO `discipline` VALUES (1,' ALG','Álgebra Linear e Geometria Analítica'),(2,'EP','Ética Profissional'),(3,'TGA','Teoria Geral da Administração'),(4,'LPG','Linguagem de Programação'),(5,'MAT','Matemática Financeira'),(6,'TGS','Teoria Geral de Sistemas'),(7,'I.E.','Informática na Educação');
/*!40000 ALTER TABLE `discipline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `note`
--

DROP TABLE IF EXISTS `note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `note` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `note` float NOT NULL,
  `StudentId` int(11) DEFAULT NULL,
  `TestId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `StudentId` (`StudentId`),
  KEY `TestId` (`TestId`),
  CONSTRAINT `note_ibfk_1` FOREIGN KEY (`StudentId`) REFERENCES `student` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `note_ibfk_2` FOREIGN KEY (`TestId`) REFERENCES `test` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=217 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `note`
--

LOCK TABLES `note` WRITE;
/*!40000 ALTER TABLE `note` DISABLE KEYS */;
INSERT INTO `note` VALUES (1,6,1,1),(2,10,2,1),(3,6,3,1),(4,9,4,1),(5,8,5,1),(6,5,6,1),(7,10,1,2),(8,6,2,2),(9,10,3,2),(10,9,4,2),(11,8,5,2),(12,7,6,2),(13,9,1,3),(14,7,2,3),(15,8,3,3),(16,5,4,3),(17,5,5,3),(18,5,6,3),(19,7,1,4),(20,5,2,4),(21,9,3,4),(22,6,4,4),(23,8,5,4),(24,8,6,4),(25,4,1,5),(26,8,2,5),(27,6,3,5),(28,7,4,5),(29,6,5,5),(30,7,6,5),(31,5,1,6),(32,10,2,6),(33,6,3,6),(34,6,4,6),(35,6,5,6),(36,10,6,6),(37,5,1,7),(38,6,2,7),(39,5,3,7),(40,8,4,7),(41,7,5,7),(42,10,6,7),(43,8,1,8),(44,6,2,8),(45,6,3,8),(46,5,4,8),(47,6,5,8),(48,10,6,8),(49,4,1,9),(50,7,2,9),(51,4,3,9),(52,5,4,9),(53,8,5,9),(54,6,6,9),(55,9,1,10),(56,5,2,10),(57,10,3,10),(58,9,4,10),(59,9,5,10),(60,9,6,10),(61,8,1,11),(62,5,2,11),(63,10,3,11),(64,9,4,11),(65,9,5,11),(66,6,6,11),(67,10,1,12),(68,8,2,12),(69,7,3,12),(70,9,4,12),(71,6,5,12),(72,7,6,12),(73,10,1,13),(74,10,2,13),(75,10,3,13),(76,10,4,13),(77,10,5,13),(78,10,6,13),(79,8,1,14),(80,5,2,14),(81,9,3,14),(82,8,4,14),(83,10,5,14),(84,9,6,14),(85,10,1,15),(86,6,2,15),(87,9,3,15),(88,9,4,15),(89,7,5,15),(90,6,6,15),(91,10,1,16),(92,8,2,16),(93,9,3,16),(94,9,4,16),(95,8,5,16),(96,5,6,16),(97,8,1,17),(98,8,2,17),(99,6,3,17),(100,10,4,17),(101,4,5,17),(102,9,6,17),(103,8,1,18),(104,10,2,18),(105,5,3,18),(106,8,4,18),(107,7,5,18),(108,10,6,18),(109,5,1,19),(110,6,2,19),(111,5,3,19),(112,8,4,19),(113,5,5,19),(114,10,6,19),(115,8,1,20),(116,6,2,20),(117,7,3,20),(118,7,4,20),(119,5,5,20),(120,9,6,20),(121,7,1,21),(122,9,2,21),(123,5,3,21),(124,9,4,21),(125,8,5,21),(126,10,6,21),(127,5,1,22),(128,5,2,22),(129,8,3,22),(130,10,4,22),(131,8,5,22),(132,4,6,22),(133,9,1,23),(134,7,2,23),(135,5,3,23),(136,7,4,23),(137,8,5,23),(138,9,6,23),(139,10,1,24),(140,10,2,24),(141,8,3,24),(142,8,4,24),(143,10,5,24),(144,6,6,24),(145,7,1,25),(146,10,2,25),(147,6,3,25),(148,10,4,25),(149,6,5,25),(150,4,6,25),(151,10,1,26),(152,10,2,26),(153,10,3,26),(154,10,4,26),(155,10,5,26),(156,10,6,26),(157,9,1,36),(158,8,2,36),(159,10,3,36),(160,6,4,36),(161,6,5,36),(162,9,6,36),(163,10,1,35),(164,4,2,35),(165,8,3,35),(166,5,4,35),(167,8,5,35),(168,10,6,35),(169,7,1,34),(170,10,2,34),(171,7,3,34),(172,10,4,34),(173,6,5,34),(174,5,6,34),(175,6,1,33),(176,10,2,33),(177,10,3,33),(178,10,4,33),(179,8,5,33),(180,8,6,33),(181,10,1,32),(182,7,2,32),(183,8,3,32),(184,5,4,32),(185,9,5,32),(186,7,6,32),(187,4,1,31),(188,7,2,31),(189,8,3,31),(190,8,4,31),(191,9,5,31),(192,8,6,31),(193,10,1,30),(194,10,2,30),(195,10,3,30),(196,8,4,30),(197,5,5,30),(198,7,6,30),(199,6,1,29),(200,5,2,29),(201,10,3,29),(202,8,4,29),(203,9,5,29),(204,6,6,29),(205,10,1,28),(206,9,2,28),(207,9,3,28),(208,8,4,28),(209,6,5,28),(210,5,6,28),(211,4,1,27),(212,10,2,27),(213,5,3,27),(214,10,4,27),(215,4,5,27),(216,5,6,27);
/*!40000 ALTER TABLE `note` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'Sidney'),(2,'Johann'),(3,'Eduardo'),(4,'Gabriela'),(5,'José'),(6,'Maria');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_class`
--

DROP TABLE IF EXISTS `student_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) DEFAULT NULL,
  `StudentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClassId` (`ClassId`),
  KEY `StudentId` (`StudentId`),
  CONSTRAINT `student_class_ibfk_1` FOREIGN KEY (`ClassId`) REFERENCES `class` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `student_class_ibfk_2` FOREIGN KEY (`StudentId`) REFERENCES `student` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_class`
--

LOCK TABLES `student_class` WRITE;
/*!40000 ALTER TABLE `student_class` DISABLE KEYS */;
INSERT INTO `student_class` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,2,1),(8,2,2),(9,2,3),(10,2,4),(11,2,5),(12,2,6),(13,3,1),(14,3,2),(15,3,3),(16,3,4),(17,3,5),(18,3,6),(19,4,1),(20,4,2),(21,4,3),(22,4,4),(23,4,5),(24,4,6),(25,5,1),(26,5,2),(27,5,3),(28,5,4),(29,5,5),(30,5,6),(31,6,1),(32,6,2),(33,6,3),(34,6,4),(35,6,5),(36,6,6),(37,7,1),(38,7,2),(39,7,3),(40,7,4),(41,7,5),(42,7,6),(43,8,1),(44,8,2),(45,8,3),(46,8,4),(47,8,5),(48,8,6),(49,9,1),(50,9,2),(51,9,3),(52,9,4),(53,9,5),(54,9,6),(55,10,1),(56,10,2),(57,10,3),(58,10,4),(59,10,5),(60,10,6),(61,11,1),(62,11,2),(63,11,3),(64,11,4),(65,11,5),(66,11,6),(67,12,1),(68,12,2),(69,12,3),(70,12,4),(71,12,5),(72,12,6),(79,13,1),(80,13,2),(81,13,3),(82,13,4),(83,13,5),(84,13,6),(85,14,1),(86,14,2),(87,14,3),(88,14,4),(89,14,5),(90,14,6),(91,15,1),(92,15,2),(93,15,3),(94,15,4),(95,15,5),(96,15,6),(97,16,1),(98,16,2),(99,16,3),(100,16,4),(101,16,5),(102,16,6),(103,17,1),(104,17,2),(105,17,3),(106,17,4),(107,17,5),(108,17,6),(109,18,1),(110,18,2),(111,18,3),(112,18,4),(113,18,5),(114,18,6);
/*!40000 ALTER TABLE `student_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'Luciana'),(2,'Rogério'),(3,'Omir'),(4,'Milagros'),(5,'Selner'),(6,'Júlio');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `ClassId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClassId` (`ClassId`),
  CONSTRAINT `test_ibfk_1` FOREIGN KEY (`ClassId`) REFERENCES `class` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'ALG01 - Avaliação 01',1),(2,'ALG02 - Avaliação 01',2),(3,'ETG01 - Avaliação 01',3),(4,'ETG02 - Avaliação 01',4),(5,'TGA01 - Avaliação 01',5),(6,'TGA02 - Avaliação 01',6),(7,'LPG01 - Avaliação 01',7),(8,'LPG02 - Avaliação 01',8),(9,'MAT01 - Avaliação 01',9),(10,'MAT02 - Avaliação 01',10),(11,'TGS01 - Avaliação 01',11),(12,'TGS02 - Avaliação 01',12),(13,'I.E01 - Avaliação 01',13),(14,'ALG01 - Avaliação 02',1),(15,'ALG02 - Avaliação 02',2),(16,'ETG01 - Avaliação 02',3),(17,'ETG02 - Avaliação 02',4),(18,'TGA01 - Avaliação 02',5),(19,'TGA02 - Avaliação 02',6),(20,'LPG01 - Avaliação 02',7),(21,'LPG02 - Avaliação 02',8),(22,'MAT01 - Avaliação 02',9),(23,'MAT02 - Avaliação 02',10),(24,'TGS01 - Avaliação 02',11),(25,'TGS02 - Avaliação 02',12),(26,'I.E01 - Avaliação 02',13),(27,'I.E02 - Avaliação 01',14),(28,'I.E02 - Avaliação 02',14),(29,'I.E03 - Avaliação 01',15),(30,'I.E03 - Avaliação 02',15),(31,'I.E04 - Avaliação 01',16),(32,'I.E04 - Avaliação 02',16),(33,'I.E05 - Avaliação 01',17),(34,'I.E05 - Avaliação 02',17),(35,'I.E06 - Avaliação 01',18),(36,'I.E06 - Avaliação 02',18);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-16 17:40:38
