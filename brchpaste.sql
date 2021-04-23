-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 23 Kwi 2021, 13:00
-- Wersja serwera: 10.4.13-MariaDB
-- Wersja PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `brchpaste`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `encoded_note_name`
--

CREATE TABLE `encoded_note_name` (
  `name` varchar(33) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `author` varchar(30) NOT NULL,
  `expiration_date` datetime NOT NULL,
  `date_added` date NOT NULL DEFAULT current_timestamp(),
  `ip` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `encoded_note_name`
--

INSERT INTO `encoded_note_name` (`name`, `password`, `author`, `expiration_date`, `date_added`, `ip`) VALUES
('12c95cae65ffbbc15b0732206443510a', '', 'Anonim', '0000-00-00 00:00:00', '2021-04-22', '::1'),
('49c46d6079663b92b9d43b1634fb6afa', '', 'Anonim', '0000-00-00 00:00:00', '2021-04-22', '::1'),
('5be91e0ef76fbf734b697ddef2f320a5', '', 'Anonim', '0000-00-00 00:00:00', '2021-04-23', '::1'),
('7eb0e1c9cfd02f329b7270dee21f558d', '$2y$10$l82Ac8t63tfiUbZhEvhXBuscsXFJ5DW4Ws7/C4MZxM23GkuGROHxG', 'Anonim', '0000-00-00 00:00:00', '2021-04-22', '::1'),
('80ac0047ae1b6b8b6870f6afae3cdf27', '$2y$10$lRt.YbCWD4xERhrIolq8QePvocUoYxWNyD/H/OKbOqBCQ.KWSJCIy', 'Anonim', '0000-00-00 00:00:00', '2021-04-22', '::1'),
('a07630862116d1c4a4facb1a132a86c9', '$2y$10$kKHm5XNceqjSItvr2VmgzOWVs.T7N25QJYEgeXuva3Sx6/KQ5CLmS', 'Anonim', '0000-00-00 00:00:00', '2021-04-22', '::1'),
('d5d009847766b9c4b19e6261e956a718', '$2y$10$.v14y4veAWWxc1fMBhtrMebRWYqewz19qsNHvPh3UeOK9oL5.8fm2', 'Anonim', '0000-00-00 00:00:00', '2021-04-22', '::1');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `table_of_notes`
--

CREATE TABLE `table_of_notes` (
  `name` varchar(32) DEFAULT NULL,
  `page_title` varchar(50) NOT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `table_of_notes`
--

INSERT INTO `table_of_notes` (`name`, `page_title`, `content`) VALUES
('d5d009847766b9c4b19e6261e956a718', 'mysqli_close($connec', ' mysqli_close($connection);mysqli_close($connection);mysqli_close($connection);mysqli_close($connection);mysqli_close($connection);'),
('80ac0047ae1b6b8b6870f6afae3cdf27', 'echo \"pass\".', ' echo \"pass\".echo \"pass\".echo \"pass\".echo \"pass\".echo \"pass\".echo \"pass\".echo \"pass\".echo \"pass\".echo \"pass\".'),
('7eb0e1c9cfd02f329b7270dee21f558d', 'echo \"pass\".$passwor', ' echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;'),
('12c95cae65ffbbc15b0732206443510a', 'nigger', ' echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;'),
('a07630862116d1c4a4facb1a132a86c9', '111', ' echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;'),
('a07630862116d1c4a4facb1a132a86c9', '222', 'echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;'),
('a07630862116d1c4a4facb1a132a86c9', '333', 'echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;'),
('49c46d6079663b92b9d43b1634fb6afa', '111', ' echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;echo \"pass\".$password;'),
('5be91e0ef76fbf734b697ddef2f320a5', 'fdafs', ' ffdsafsdfasdfsadfasdf');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `encoded_note_name`
--
ALTER TABLE `encoded_note_name`
  ADD PRIMARY KEY (`name`);

--
-- Indeksy dla tabeli `table_of_notes`
--
ALTER TABLE `table_of_notes`
  ADD KEY `name` (`name`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `table_of_notes`
--
ALTER TABLE `table_of_notes`
  ADD CONSTRAINT `table_of_notes_ibfk_1` FOREIGN KEY (`name`) REFERENCES `encoded_note_name` (`name`);

DELIMITER $$
--
-- Zdarzenia
--
CREATE DEFINER=`root`@`localhost` EVENT `delete_notes` ON SCHEDULE EVERY 1 DAY STARTS '2021-04-23 11:35:37' ON COMPLETION NOT PRESERVE ENABLE DO begin
DELETE table_of_notes FROM table_of_notes inner join encoded_note_name on table_of_notes.name=encoded_note_name.name WHERE expiration_date=current_date();
DELETE FROM encoded_note_name WHERE expiration_date=current_date();
end$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
