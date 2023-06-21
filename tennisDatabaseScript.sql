CREATE DATABASE `tennisclub`;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trainingGroupsId` int DEFAULT NULL,
  `usersId` int DEFAULT NULL,
  `courtsId` int DEFAULT NULL,
  `appointmentDate` date NOT NULL,
  `appointmentStartTime` time NOT NULL,
  `appointmentEndTime` time NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trainingGroupsId` (`trainingGroupsId`),
  KEY `usersId` (`usersId`),
  KEY `courtsId` (`courtsId`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`trainingGroupsId`) REFERENCES `traininggroups` (`id`),
  CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`),
  CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`courtsId`) REFERENCES `courts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `courts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `courtName` varchar(30) NOT NULL,
  `courtType` enum('travnati','zemljani','tvrdi') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `student` (
  `usersId` int DEFAULT NULL,
  `trainingGroupsId` int DEFAULT NULL,
  KEY `usersId` (`usersId`),
  KEY `trainingGroupsId` (`trainingGroupsId`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`usersId`) REFERENCES `users` (`id`),
  CONSTRAINT `student_ibfk_2` FOREIGN KEY (`trainingGroupsId`) REFERENCES `traininggroups` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `traininggroups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `trainersId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `trainersId` (`trainersId`),
  CONSTRAINT `traininggroups_ibfk_1` FOREIGN KEY (`trainersId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `telephoneNumber` varchar(12) NOT NULL,
  `userType` int NOT NULL,
  `approved` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `telephoneNumber_UNIQUE` (`telephoneNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `tennisclub`.`users` (`id`, `username`, `password`, `name`, `surname`, `telephoneNumber`, `userType`, `approved`) VALUES ('1', 'admin', 'admin', 'admin', 'admin', '381659219261', '0', '1');
INSERT INTO `tennisclub`.`users` (`id`, `username`, `password`, `name`, `surname`, `telephoneNumber`, `userType`, `approved`) VALUES ('6', 'mika', 'mika123', 'mika', 'mikic', '1234', '1', '0');
INSERT INTO `tennisclub`.`users` (`id`, `username`, `password`, `name`, `surname`, `telephoneNumber`, `userType`, `approved`) VALUES ('7', 'đoka', 'mika123', 'mika', 'mikic', '12345', '1', '0');
INSERT INTO `tennisclub`.`users` (`id`, `username`, `password`, `name`, `surname`, `telephoneNumber`, `userType`, `approved`) VALUES ('8', 'joka', 'mika123', 'mika', 'mikic', '123456', '1', '0');
INSERT INTO `tennisclub`.`users` (`id`, `username`, `password`, `name`, `surname`, `telephoneNumber`, `userType`, `approved`) VALUES ('9', 'lol', 'lol', 'lol', 'lol', '1', '0', '0');

