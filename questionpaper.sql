-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2020 at 04:35 PM
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
-- Table structure for table `tblcourse`
--

CREATE TABLE `tblcourse` (
  `CourseID` int(11) NOT NULL,
  `CourseCode` varchar(50) NOT NULL,
  `CourseName` varchar(200) NOT NULL,
  `AddedByFacultyID` int(11) NOT NULL,
  `ProgramID` int(11) NOT NULL,
  `Status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblcourse`
--

INSERT INTO `tblcourse` (`CourseID`, `CourseCode`, `CourseName`, `AddedByFacultyID`, `ProgramID`, `Status`) VALUES
(1, 'IT623', 'Algorithms & Data Structure', 1, 1, 0),
(2, 'PC613', 'Communication Skills', 1, 2, 1),
(3, 'IT615', 'Database Management System', 1, 1, 0),
(4, 'SC612', 'Discrete Mathematics', 1, 1, 0),
(5, 'IT603', 'Programming (CPP)', 1, 1, 0),
(6, 'IT694', 'Computer Networks', 1, 1, 0),
(7, 'IT602', 'OOP & DS', 1, 1, 0),
(8, 'IT632', 'Software Engineering', 2, 1, 0),
(9, 'IT628', 'Systems Programming', 2, 1, 0),
(10, 'IT629', 'Web Programming', 2, 1, 0),
(11, 'IT123', 'Checking COurse', 1, 5, 0),
(12, 'PC123', 'hello', 1, 3, 0);

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
(1, 'jenibiliyawala@yahoo.com', 'Jeni', 'Biliyawala', 'jeni@1234', 'Faculty_1591460814284.JPG', '9374413322', 0),
(2, 'vibhuti@vasani.com', 'Vibhuti', 'Vasani', 'Vibhuti@vasani', 'V.svg', '9876543210', 0),
(3, 'jeni@patel.com', 'Jeni', 'patel', 'jeni@patel', 'J.svg', '7383553322', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblprogram`
--

CREATE TABLE `tblprogram` (
  `ProgramID` int(11) NOT NULL,
  `ProgramName` varchar(200) NOT NULL,
  `AddedByFacultyID` int(11) NOT NULL,
  `Status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblprogram`
--

INSERT INTO `tblprogram` (`ProgramID`, `ProgramName`, `AddedByFacultyID`, `Status`) VALUES
(1, 'MSc IT', 1, 0),
(2, 'B.Tech. (ICT)', 1, 0),
(3, 'B.Tech. (Honours) in ICT with Minor in CS', 1, 0),
(4, 'B.Tech. (MnC)', 1, 0),
(5, 'M.Tech. (ICT)', 1, 0),
(6, 'M.Tech. (EC)', 2, 0),
(7, 'M.Tech. (CSE)-Data Sciences', 2, 0),
(8, 'M.Tech. (CSE)-Information Security', 3, 0),
(9, 'M.Sc. (Data Science)', 3, 0),
(10, 'M.Des. (Communication Design)', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblcourse`
--
ALTER TABLE `tblcourse`
  ADD PRIMARY KEY (`CourseID`);

--
-- Indexes for table `tblfaculty`
--
ALTER TABLE `tblfaculty`
  ADD PRIMARY KEY (`FacultyID`);

--
-- Indexes for table `tblprogram`
--
ALTER TABLE `tblprogram`
  ADD PRIMARY KEY (`ProgramID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcourse`
--
ALTER TABLE `tblcourse`
  MODIFY `CourseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tblfaculty`
--
ALTER TABLE `tblfaculty`
  MODIFY `FacultyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tblprogram`
--
ALTER TABLE `tblprogram`
  MODIFY `ProgramID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
