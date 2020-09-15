-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2020 at 12:39 PM
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
(11, 'IT627', 'Cloud Computing', 1, 1, 0),
(12, 'IT619', 'Design of Software Systems', 1, 1, 0),
(13, 'IT618', 'Enterprise Computing', 1, 1, 0);

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
  `Status` int(2) NOT NULL DEFAULT 0,
  `BlockedByFacultyID` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblfaculty`
--

INSERT INTO `tblfaculty` (`FacultyID`, `Email`, `FirstName`, `LastName`, `Password`, `Image`, `ContactNo`, `Status`, `BlockedByFacultyID`) VALUES
(1, 'jenibiliyawala@yahoo.com', 'Jeni', 'Biliyawala', 'jeni@12345', 'Faculty_1591460814284.JPG', '9374413322', 0, 0),
(2, 'vibhuti@vasani.com', 'Vibhuti', 'Vasani', 'Vibhuti@vasani', 'V.svg', '9876543210', 0, 0),
(3, 'jeni@patel.com', 'Jeni', 'patel', 'jeni@patel', 'J.svg', '7383553322', 1, 1),
(4, 'jeni@gmail.com', 'Jenish', 'Patel', 'jenish@12345', 'Faculty_1597153115506.jpg', '9765432132', 0, 0),
(5, 'pintu@gmail.com', 'Pintu', 'jariwala', '12345678', 'P.svg', '1234567987', 0, 0),
(6, 'pankaj@gmail.com', 'pankaj', 'roy', '4654646546546', 'P.svg', '9374413320', 0, 0),
(7, 'swati@gmail.com', 'Swati', 'rajput', 'dzxcsdzxccsx', 'Faculty_1597153555014.jpg', '8675432186', 0, 0);

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
(10, 'M.Des. (Communication Design)', 1, 0),
(11, 'MCA', 1, 1),
(14, 'BCA\r\n', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblquestion`
--

CREATE TABLE `tblquestion` (
  `QuestionID` int(11) NOT NULL,
  `CourseID` int(11) NOT NULL,
  `Question` varchar(2000) NOT NULL,
  `Mark` int(11) NOT NULL,
  `Level` int(11) NOT NULL,
  `AddedByFacultyID` int(11) NOT NULL,
  `Status` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tblquestion`
--

INSERT INTO `tblquestion` (`QuestionID`, `CourseID`, `Question`, `Mark`, `Level`, `AddedByFacultyID`, `Status`) VALUES
(1, 1, 'What is binary tree?', 1, 1, 1, 0),
(2, 1, 'Explain binary search.7', 7, 2, 1, 1),
(3, 3, 'what is BCNF?', 5, 3, 1, 0),
(4, 1, 'Find the complexity of the bubble sort with explanation', 5, 2, 1, 0),
(5, 1, 'Explain prim\'s algorithm', 7, 2, 1, 0),
(6, 1, 'Queue and stack implementations using linked lists and arrays\r\n', 5, 2, 1, 0),
(7, 1, 'Write a program fibonncaci series', 1, 2, 1, 0),
(8, 1, 'Find Complexity of the selection sort in worst case', 7, 2, 1, 0),
(9, 1, 'List all the sorting method', 15, 2, 1, 0),
(10, 1, 'Check whether program is BST or not?', 15, 2, 1, 0),
(11, 1, 'Deletion of the Tree', 15, 2, 1, 0),
(12, 1, 'What are the various operations that can be performed on different Data Structures?', 7, 2, 1, 0),
(13, 1, 'How is an Array different from Linked List?', 15, 2, 1, 0),
(14, 1, 'What are Infix, prefix, Postfix notations?', 3, 2, 1, 0),
(15, 1, 'Which data structures are used for BFS and DFS of a graph?', 15, 2, 1, 0),
(16, 1, 'Can doubly linked be implemented using a single pointer variable in every node?\r\n', 15, 2, 1, 0);

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
  ADD PRIMARY KEY (`ProgramID`),
  ADD UNIQUE KEY `ProgramName` (`ProgramName`);

--
-- Indexes for table `tblquestion`
--
ALTER TABLE `tblquestion`
  ADD PRIMARY KEY (`QuestionID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblcourse`
--
ALTER TABLE `tblcourse`
  MODIFY `CourseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tblfaculty`
--
ALTER TABLE `tblfaculty`
  MODIFY `FacultyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tblprogram`
--
ALTER TABLE `tblprogram`
  MODIFY `ProgramID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tblquestion`
--
ALTER TABLE `tblquestion`
  MODIFY `QuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
