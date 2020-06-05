-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2020 at 11:09 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `questionpaper`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblfaculty`
--

CREATE TABLE `tblfaculty` (
  `FacultyID` int(11) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `FirstName` varchar(200) NOT NULL,
  `LastName` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Image` varchar(200) NOT NULL,
  `ContactNo` varchar(50) NOT NULL,
  `Status` int(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblfaculty`
--

INSERT INTO `tblfaculty` (`FacultyID`, `Email`, `FirstName`, `LastName`, `Password`, `Image`, `ContactNo`, `Status`) VALUES
(1, 'jenibiliyawala@yahoo.com', 'Jeni', 'Biliyawala', 'jeni@1234', 'Faculty_1591389487368.JPG', '9374413322', 0),
(2, 'vibhuti@vasani.com', 'Vibhuti', 'Vasani', 'Vibhuti@vasani', 'V.svg', '9876543210', 0),
(3, 'jeni@patel.com', 'Jeni', 'patel', 'jeni@patel', 'J.svg', '7383553322', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblfaculty`
--
ALTER TABLE `tblfaculty`
  ADD PRIMARY KEY (`FacultyID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblfaculty`
--
ALTER TABLE `tblfaculty`
  MODIFY `FacultyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
