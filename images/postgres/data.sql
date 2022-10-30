CREATE TABLE IF NOT EXISTS TimeZone (
id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
added timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
deleted timestamp DEFAULT NULL,
name varchar(256) NOT NULL,
abbrev varchar(5) NOT NULL,
utc_offset integer NOT NULL
);

INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Puerto Rico Atlantic Standard Time', 'AST', -14400000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Arizona Mountain Standard Time', 'MST', -25200000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Aleutian Standard Time', 'HADT', -32400000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Chamorro Standard Time', 'CHST', 36000000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Mountain Daylight Time', 'MDT', -21600000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Pacific Daylight Time', 'PDT', -25200000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Central Daylight Time', 'CDT', -18000000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Eastern Daylight Time', 'EDT', -14400000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Alaska Daylight Time', 'AKDT', -28800000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Hawaii Standard Time', 'HST', -36000000);
INSERT INTO TimeZone (name, abbrev, utc_offset) VALUES ('Samoa Standard Time', 'SST', -39600000);
