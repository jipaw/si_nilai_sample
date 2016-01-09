-- MySQL dump 10.13  Distrib 5.5.8, for Win32 (x86)
--
-- Host: localhost    Database: si_nilai
-- ------------------------------------------------------
-- Server version	5.5.8

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
-- Table structure for table `dosen`
--

DROP TABLE IF EXISTS `dosen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dosen` (
  `NIDN` varchar(20) NOT NULL,
  `nama` varchar(60) NOT NULL,
  PRIMARY KEY (`NIDN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dosen`
--

LOCK TABLES `dosen` WRITE;
/*!40000 ALTER TABLE `dosen` DISABLE KEYS */;
/*!40000 ALTER TABLE `dosen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jurusan`
--

DROP TABLE IF EXISTS `jurusan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jurusan` (
  `idJurusan` varchar(10) NOT NULL,
  `nama` varchar(45) NOT NULL,
  PRIMARY KEY (`idJurusan`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jurusan`
--

LOCK TABLES `jurusan` WRITE;
/*!40000 ALTER TABLE `jurusan` DISABLE KEYS */;
/*!40000 ALTER TABLE `jurusan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kelas`
--

DROP TABLE IF EXISTS `kelas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kelas` (
  `idKelas` varchar(10) NOT NULL,
  `nama` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idKelas`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kelas`
--

LOCK TABLES `kelas` WRITE;
/*!40000 ALTER TABLE `kelas` DISABLE KEYS */;
INSERT INTO `kelas` VALUES ('001','MIF W31/11'),('002','TIK W31/11');
/*!40000 ALTER TABLE `kelas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mahasiswa`
--

DROP TABLE IF EXISTS `mahasiswa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mahasiswa` (
  `NPM` varchar(20) NOT NULL,
  `nama` varchar(45) NOT NULL,
  PRIMARY KEY (`NPM`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mahasiswa`
--

LOCK TABLES `mahasiswa` WRITE;
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
INSERT INTO `mahasiswa` VALUES ('11302286','Fauzi Rahman'),('11302287','Jipaw');
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mata_kuliah`
--

DROP TABLE IF EXISTS `mata_kuliah`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mata_kuliah` (
  `idmata_kuliah` varchar(10) NOT NULL,
  `nama` varchar(80) DEFAULT NULL,
  `sks` int(11) DEFAULT NULL,
  PRIMARY KEY (`idmata_kuliah`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mata_kuliah`
--

LOCK TABLES `mata_kuliah` WRITE;
/*!40000 ALTER TABLE `mata_kuliah` DISABLE KEYS */;
INSERT INTO `mata_kuliah` VALUES ('BB2001','Etika Profesi',2),('KB2001','Sistem Basis Data',3),('KB2002','Web Programming',3),('KB2003','Sistem Jaringan Komputer',3),('KB2004','Organisasi Komputer',2),('KB2005','Sistem Operasi',3),('KB2006','Struktur Data',3),('KB2007','Pengantar Hardware',3),('KB2008','Rekayasa Perangkat Lunak',4),('KB2009','Komunikasi Data',3),('KB2010','Perancangan Sistem Informasi',3),('KB2011','Dasar-dasar Akuntansi',2),('KB2014','Javascript Programming',4),('KK2002','Pengantar Teknologi Informasi',2),('KK2005','Bahasa Inggris II',2),('KK2006','Administrasi Organisasi Manajemen',2),('KK2008','Bahasa Inggris Informatika III',2),('KK2009','Riset Operasional',3),('KK2010','Sistem Informasi Manajemen Komputer',3),('KK2011','Metodologi Berorientasi Objek',2),('KK2012','Probabilitas dan Statistika',2),('PB2001','Pemrograman C++',2),('PB2003','Pemrograman Delphi',2),('PB2004','Praktek Pemrograman Delphi',2),('PB2005','Database Management System',4),('PB2006','Pemrograman Web',2),('PB2008','Pemrograman Visual Basic',4),('PK2001','Pendidikan Pancasila',2);
/*!40000 ALTER TABLE `mata_kuliah` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nilai`
--

DROP TABLE IF EXISTS `nilai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nilai` (
  `idnilai` int(11) NOT NULL AUTO_INCREMENT,
  `NPM` varchar(20) DEFAULT NULL,
  `idSemester` varchar(10) DEFAULT NULL,
  `idmata_kuliah` varchar(10) DEFAULT NULL,
  `semester_berjalan` varchar(3) DEFAULT NULL,
  `kehadiran` int(11) DEFAULT NULL,
  `tugas` int(11) DEFAULT NULL,
  `uts` int(11) DEFAULT NULL,
  `uas` int(11) DEFAULT NULL,
  `nilai_akhir` char(1) DEFAULT NULL,
  PRIMARY KEY (`idnilai`),
  KEY `NPM_idx` (`NPM`),
  KEY `mata kuliah_idx` (`idmata_kuliah`),
  KEY `semester_idx` (`idSemester`),
  CONSTRAINT `mata kuliah` FOREIGN KEY (`idmata_kuliah`) REFERENCES `mata_kuliah` (`idmata_kuliah`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `NPM` FOREIGN KEY (`NPM`) REFERENCES `mahasiswa` (`NPM`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `semester` FOREIGN KEY (`idSemester`) REFERENCES `semester` (`idSemester`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nilai`
--

LOCK TABLES `nilai` WRITE;
/*!40000 ALTER TABLE `nilai` DISABLE KEYS */;
INSERT INTO `nilai` VALUES (1,'11302286','20111','KB2014','I',75,80,85,75,'B'),(2,'11302286','20111','KB2002','I',80,85,85,85,'A'),(3,'11302286','20111','KK2002','I',85,80,85,85,'A'),(4,'11302286','20111','PB2001','I',70,75,75,70,'B'),(5,'11302286','20111','PB2003','I',70,75,75,70,'B'),(6,'11302286','20111','PK2001','I',60,65,65,65,'C'),(7,'11302286','20121','KK2005','II',70,75,70,80,'B'),(8,'11302286','20121','KB2003','II',70,75,70,75,'B'),(9,'11302286','20121','KB2004','II',75,80,85,85,'B'),(10,'11302286','20122','KB2005','III',80,85,80,80,'A'),(11,'11302286','20122','KK2008','III',70,75,75,75,'B'),(12,'11302286','20122','KB2006','III',75,80,85,80,'B'),(13,'11302286','20122','KK2010','III',80,85,80,80,'A'),(14,'11302286','20122','PB2006','III',80,80,75,85,'A');
/*!40000 ALTER TABLE `nilai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `nilaisemester`
--

DROP TABLE IF EXISTS `nilaisemester`;
/*!50001 DROP VIEW IF EXISTS `nilaisemester`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `nilaisemester` (
  `NPM` varchar(20),
  `nama_mhs` varchar(45),
  `idmata_kuliah` varchar(10),
  `nama` varchar(80),
  `sks` int(11),
  `idSemester` varchar(10),
  `semester_berjalan` varchar(3),
  `uts` int(11),
  `uas` int(11),
  `nilai_akhir` char(1)
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `semester`
--

DROP TABLE IF EXISTS `semester`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `semester` (
  `idSemester` varchar(10) NOT NULL,
  `semester` varchar(45) DEFAULT NULL,
  `tahun_ajaran` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idSemester`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semester`
--

LOCK TABLES `semester` WRITE;
/*!40000 ALTER TABLE `semester` DISABLE KEYS */;
INSERT INTO `semester` VALUES ('20111','Ganjil','2011/2012'),('20112','Genap','2011/2012'),('20121','Ganjil','2012/2013'),('20122','Genap','2012/2013'),('20131','Ganjil','2013/2014'),('20132','Genap','2013/2014'),('20141','Ganjil','2014/2015'),('20142','Genap','2014/2015');
/*!40000 ALTER TABLE `semester` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(32) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `created` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('11302286','82bc3a55e1e2c50e849e9e26fd4a78d234636e42fc438c610c66eae39620c6ec','','jipaw12@gmail.com','user',NULL),('admin','8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918','fauzi','administrator@gmail.com','admin',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `nilaisemester`
--

/*!50001 DROP TABLE IF EXISTS `nilaisemester`*/;
/*!50001 DROP VIEW IF EXISTS `nilaisemester`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `nilaisemester` AS select `mahasiswa`.`NPM` AS `NPM`,`mahasiswa`.`nama` AS `nama_mhs`,`mata_kuliah`.`idmata_kuliah` AS `idmata_kuliah`,`mata_kuliah`.`nama` AS `nama`,`mata_kuliah`.`sks` AS `sks`,`semester`.`idSemester` AS `idSemester`,`nilai`.`semester_berjalan` AS `semester_berjalan`,`nilai`.`uts` AS `uts`,`nilai`.`uas` AS `uas`,`nilai`.`nilai_akhir` AS `nilai_akhir` from (`semester` join (`mata_kuliah` join (`mahasiswa` join `nilai` on((`mahasiswa`.`NPM` = `nilai`.`NPM`))) on((`mata_kuliah`.`idmata_kuliah` = `nilai`.`idmata_kuliah`))) on((`semester`.`idSemester` = `nilai`.`idSemester`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-11-13  4:10:49
