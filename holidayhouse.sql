CREATE DATABASE  IF NOT EXISTS `holidayhouse` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `holidayhouse`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: holidayhouse
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.31-MariaDB

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
-- Table structure for table `facility`
--

DROP TABLE IF EXISTS `facility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facility` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `facility_name` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility`
--

LOCK TABLES `facility` WRITE;
/*!40000 ALTER TABLE `facility` DISABLE KEYS */;
/*!40000 ALTER TABLE `facility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_list`
--

DROP TABLE IF EXISTS `facility_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facility_list` (
  `home_id` int(11) NOT NULL,
  `facility_id` int(11) NOT NULL,
  PRIMARY KEY (`home_id`,`facility_id`),
  KEY `fk_fac_facility_idx` (`facility_id`),
  CONSTRAINT `fk_fac_facility` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_home_facility` FOREIGN KEY (`home_id`) REFERENCES `homes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_list`
--

LOCK TABLES `facility_list` WRITE;
/*!40000 ALTER TABLE `facility_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `facility_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homes`
--

DROP TABLE IF EXISTS `homes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `homes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) COLLATE utf8_bin NOT NULL,
  `address` varchar(300) COLLATE utf8_bin NOT NULL,
  `type_of_house` varchar(45) COLLATE utf8_bin NOT NULL,
  `family_friendly` blob NOT NULL,
  `description` varchar(300) COLLATE utf8_bin NOT NULL,
  `owner` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_owner_idx` (`owner`),
  CONSTRAINT `fk_owner` FOREIGN KEY (`owner`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homes`
--

LOCK TABLES `homes` WRITE;
/*!40000 ALTER TABLE `homes` DISABLE KEYS */;
/*!40000 ALTER TABLE `homes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pictures`
--

DROP TABLE IF EXISTS `pictures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pictures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) COLLATE utf8_bin NOT NULL,
  `home_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_home_pictures_idx` (`home_id`),
  CONSTRAINT `fk_home_pictures` FOREIGN KEY (`home_id`) REFERENCES `homes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pictures`
--

LOCK TABLES `pictures` WRITE;
/*!40000 ALTER TABLE `pictures` DISABLE KEYS */;
/*!40000 ALTER TABLE `pictures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(300) COLLATE utf8_bin NOT NULL,
  `email` varchar(300) COLLATE utf8_bin NOT NULL,
  `phone_number` int(11) NOT NULL,
  `profile_pic` varchar(300) COLLATE utf8_bin NOT NULL,
  `birthday` date DEFAULT NULL,
  `password` varchar(300) COLLATE utf8_bin NOT NULL,
  `description` varchar(300) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dsgjdb','fdsffa','6146541968',0,'','2018-01-01','fsd','sdfasd'),(2,'dsgjdb','fdsffa','6146541968',0,'','2018-01-01','fsd','sdfasd'),(3,'dsgjdb','fdsffa','6146541968',0,'sfs','2018-01-01','fsd','sdfasd'),(4,'dsgjdb','fdsffa',' da',2147483647,'sfs','2018-01-01','fsd','sdfasd'),(5,'dsgjdb','fdsffa',' da',61465,'sfs','2018-01-01','fsd','sdfasd'),(6,'dsgjdb','fdsffa',' da',61465,'sfs','2018-01-01','fsd','sdfasd'),(7,'dsgjdb','fdsffa','da',61465,'njkfdsa','2018-01-01','fsd','sdfasd'),(8,'dsgjdb','fdsffa','da',61465,'njkfdsa','2018-01-01','fsd','sdfasd');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-22 18:30:23
