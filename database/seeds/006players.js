exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "KB-0350",
          playerFirst: "Kenjon",
          playerLast: "Barner",
          playerFull: "Kenjon Barner",
          position: "RB",
          startYear: 2013,
          currentTeam: "ATL",
          height: 69,
          weight: 196,
          dob: "4/28/89",
          forty: 4.39,
          bench: 20,
          vertical: 35.5,
          broad: 122,
          shuttle: 4.14,
          cone: 6.87,
          arm: 29.63,
          hand: 9.13,
          dpos: 182.0,
          col: "Oregon",
          dv: "Pacific 12",
          jnum: 38,
          dcp: 3,
        },
        {
          playerID: "KB-1225",
          playerFirst: "Khari",
          playerLast: "Blasingame",
          playerFull: "Khari Blasingame",
          position: "RB",
          startYear: 2019,
          currentTeam: "TEN",
          height: 72,
          weight: 196,
          dob: "7/1/96",
          forty: 4.55,
          bench: 20,
          vertical: 38.5,
          broad: 131,
          shuttle: 4.18,
          cone: 6.94,
          arm: 32.5,
          hand: 9.5,
          dpos: 0.0,
          col: "Vanderbilt",
          dv: "Southeastern (SEC)",
          jnum: 41,
          dcp: 3,
        },
        {
          playerID: "KD-1462",
          playerFirst: "Kenyan",
          playerLast: "Drake",
          playerFull: "Kenyan Drake",
          position: "RB",
          startYear: 2016,
          currentTeam: "ARI",
          height: 73,
          weight: 210,
          dob: "1/26/94",
          forty: 4.31,
          bench: 10,
          vertical: 34.5,
          broad: 123,
          shuttle: 4.21,
          cone: 7.04,
          arm: 31.75,
          hand: 9.75,
          dpos: 73.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 41,
          dcp: 1,
        },
        {
          playerID: "KH-2850",
          playerFirst: "Kareem",
          playerLast: "Hunt",
          playerFull: "Kareem Hunt",
          position: "RB",
          startYear: 2017,
          currentTeam: "CLE",
          height: 70,
          weight: 216,
          dob: "8/6/95",
          forty: 4.62,
          bench: 18,
          vertical: 36.5,
          broad: 119,
          shuttle: 4.53,
          cone: 7.22,
          arm: 31.38,
          hand: 9.63,
          dpos: 86.0,
          col: "Toledo",
          dv: "Mid-American (MAC)",
          jnum: 27,
          dcp: 1,
        },
        {
          playerID: "KJ-0587",
          playerFirst: "Kerryon",
          playerLast: "Johnson",
          playerFull: "Kerryon Johnson",
          position: "RB",
          startYear: 2018,
          currentTeam: "DET",
          height: 71,
          weight: 213,
          dob: "6/30/97",
          forty: 4.52,
          bench: 11,
          vertical: 40.0,
          broad: 126,
          shuttle: 4.29,
          cone: 7.07,
          arm: 32.5,
          hand: 9.75,
          dpos: 43.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 33,
          dcp: 1,
        },
        {
          playerID: "KJ-1400",
          playerFirst: "Kyle",
          playerLast: "Juszczyk",
          playerFull: "Kyle Juszczyk",
          position: "RB",
          startYear: 2013,
          currentTeam: "SF",
          height: 73,
          weight: 248,
          dob: "4/23/91",
          forty: 4.71,
          bench: 24,
          vertical: 37.0,
          broad: 121,
          shuttle: 4.19,
          cone: 6.93,
          arm: 31.25,
          hand: 9.13,
          dpos: 130.0,
          col: "Harvard",
          dv: "Ivy League",
          jnum: 44,
          dcp: 1,
        },
        {
          playerID: "KS-1450",
          playerFirst: "Keith",
          playerLast: "Smith",
          playerFull: "Keith Smith",
          position: "RB",
          startYear: 2014,
          currentTeam: "ATL",
          height: 73,
          weight: 230,
          dob: "4/8/92",
          forty: 5.01,
          bench: 26,
          vertical: 31.0,
          broad: 113,
          shuttle: 4.53,
          cone: 6.87,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "San Jose State",
          dv: "Mountain West (MWC)",
          jnum: 40,
          dcp: 1,
        },
        {
          playerID: "KW-0922",
          playerFirst: "Kerrith",
          playerLast: "Whyte Jr.",
          playerFull: "Kerrith Whyte Jr.",
          position: "RB",
          startYear: 2019,
          currentTeam: "PIT",
          height: 70,
          weight: 200,
          dob: "10/31/96",
          forty: 4.37,
          bench: 21,
          vertical: 42.0,
          broad: 132,
          shuttle: 4.37,
          cone: 7.2,
          arm: 29.88,
          hand: 9.5,
          dpos: 222.0,
          col: "Florida Atlantic",
          dv: "Conference USA (C-USA)",
          jnum: 40,
          dcp: 4,
        },
        {
          playerID: "LB-0250",
          playerFirst: "Le'Veon",
          playerLast: "Bell",
          playerFull: "Le'Veon Bell",
          position: "RB",
          startYear: 2013,
          currentTeam: "NYJ",
          height: 73,
          weight: 230,
          dob: "2/18/92",
          forty: 4.56,
          bench: 24,
          vertical: 31.5,
          broad: 118,
          shuttle: 4.24,
          cone: 6.75,
          arm: 31.5,
          hand: 9.63,
          dpos: 48.0,
          col: "Michigan State",
          dv: "Big Ten",
          jnum: 26,
          dcp: 1,
        },
        {
          playerID: "LF-0650",
          playerFirst: "Leonard",
          playerLast: "Fournette",
          playerFull: "Leonard Fournette",
          position: "RB",
          startYear: 2017,
          currentTeam: "JAC",
          height: 72,
          weight: 240,
          dob: "1/18/95",
          forty: 4.51,
          bench: 0,
          vertical: 28.5,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.63,
          hand: 9.25,
          dpos: 4.0,
          col: "LSU",
          dv: "Southeastern (SEC)",
          jnum: 27,
          dcp: 1,
        },
        {
          playerID: "LM-1000",
          playerFirst: "LeSean",
          playerLast: "McCoy",
          playerFull: "LeSean McCoy",
          position: "RB",
          startYear: 2009,
          currentTeam: "KC",
          height: 70,
          weight: 198,
          dob: "7/12/88",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.75,
          hand: 8.88,
          dpos: 53.0,
          col: "Pittsburgh",
          dv: "Big East",
          jnum: 25,
          dcp: 2,
        },
        {
          playerID: "LM-1850",
          playerFirst: "Latavius",
          playerLast: "Murray",
          playerFull: "Latavius Murray",
          position: "RB",
          startYear: 2013,
          currentTeam: "NO",
          height: 74,
          weight: 223,
          dob: "1/18/90",
          forty: 4.38,
          bench: 22,
          vertical: 36.0,
          broad: 124,
          shuttle: 4.36,
          cone: 6.81,
          arm: 33.25,
          hand: 9.13,
          dpos: 181.0,
          col: "Central Florida",
          dv: "Conference USA (C-USA)",
          jnum: 28,
          dcp: 2,
        },
        {
          playerID: "MB-2950",
          playerFirst: "Mike",
          playerLast: "Boone",
          playerFull: "Mike Boone",
          position: "RB",
          startYear: 2018,
          currentTeam: "MIN",
          height: 69,
          weight: 206,
          dob: "6/30/95",
          forty: 4.45,
          bench: 25,
          vertical: 42.0,
          broad: 139,
          shuttle: 4.38,
          cone: 6.95,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Cincinnati",
          dv: "American Athletic",
          jnum: 23,
          dcp: 4,
        },
        {
          playerID: "MB-3537",
          playerFirst: "Matt",
          playerLast: "Breida",
          playerFull: "Matt Breida",
          position: "RB",
          startYear: 2017,
          currentTeam: "SF",
          height: 69,
          weight: 180,
          dob: "2/28/95",
          forty: 4.39,
          bench: 23,
          vertical: 42.0,
          broad: 134,
          shuttle: 4.34,
          cone: 6.85,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Georgia Southern",
          dv: "Sun Belt",
          jnum: 22,
          dcp: 2,
        },
        {
          playerID: "MB-3862",
          playerFirst: "Malcolm",
          playerLast: "Brown",
          playerFull: "Malcolm Brown",
          position: "RB",
          startYear: 2015,
          currentTeam: "LA",
          height: 71,
          weight: 224,
          dob: "5/15/93",
          forty: 4.51,
          bench: 19,
          vertical: 34.5,
          broad: 117,
          shuttle: 4.15,
          cone: 6.86,
          arm: 32.75,
          hand: 10.25,
          dpos: 0.0,
          col: "Texas",
          dv: "Big 12",
          jnum: 34,
          dcp: 2,
        },
        {
          playerID: "MB-5175",
          playerFirst: "Mike",
          playerLast: "Burton",
          playerFull: "Mike Burton",
          position: "RB",
          startYear: 2015,
          currentTeam: "WAS",
          height: 71,
          weight: 242,
          dob: "2/1/92",
          forty: 4.65,
          bench: 30,
          vertical: 33.0,
          broad: 116,
          shuttle: 4.28,
          cone: 7.08,
          arm: 29.25,
          hand: 9.5,
          dpos: 168.0,
          col: "Rutgers",
          dv: "Big Ten",
          jnum: 45,
          dcp: 2,
        },
        {
          playerID: "MD-0150",
          playerFirst: "Mike",
          playerLast: "Davis",
          playerFull: "Mike Davis",
          position: "RB",
          startYear: 2015,
          currentTeam: "CAR",
          height: 72,
          weight: 197,
          dob: "2/19/93",
          forty: 4.5,
          bench: 10,
          vertical: 32.5,
          broad: 117,
          shuttle: 4.39,
          cone: 7.11,
          arm: 30.25,
          hand: 9.38,
          dpos: 126.0,
          col: "South Carolina",
          dv: "Southeastern (SEC)",
          jnum: 27,
          dcp: 3,
        },
        {
          playerID: "MG-0293",
          playerFirst: "Myles",
          playerLast: "Gaskin",
          playerFull: "Myles Gaskin",
          position: "RB",
          startYear: 2019,
          currentTeam: "MIA",
          height: 69,
          weight: 205,
          dob: "2/15/97",
          forty: 4.57,
          bench: 24,
          vertical: 35.5,
          broad: 118,
          shuttle: 4.27,
          cone: 7.19,
          arm: 29.5,
          hand: 8.63,
          dpos: 234.0,
          col: "Washington",
          dv: "Pacific 12",
          jnum: 37,
          dcp: 1,
        },
        {
          playerID: "MG-1150",
          playerFirst: "Melvin",
          playerLast: "Gordon",
          playerFull: "Melvin Gordon",
          position: "RB",
          startYear: 2015,
          currentTeam: "LAC",
          height: 73,
          weight: 215,
          dob: "4/13/93",
          forty: 4.33,
          bench: 19,
          vertical: 35.0,
          broad: 126,
          shuttle: 4.07,
          cone: 7.04,
          arm: 32.38,
          hand: 9.75,
          dpos: 15.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 25,
          dcp: 1,
        },
        {
          playerID: "MI-0100",
          playerFirst: "Mark",
          playerLast: "Ingram",
          playerFull: "Mark Ingram",
          position: "RB",
          startYear: 2011,
          currentTeam: "BAL",
          height: 69,
          weight: 215,
          dob: "12/21/89",
          forty: 4.62,
          bench: 21,
          vertical: 31.5,
          broad: 113,
          shuttle: 4.62,
          cone: 7.13,
          arm: 30.63,
          hand: 9.38,
          dpos: 28.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 21,
          dcp: 1,
        },
        {
          playerID: "ML-2500",
          playerFirst: "Marshawn",
          playerLast: "Lynch",
          playerFull: "Marshawn Lynch",
          position: "RB",
          startYear: 2007,
          currentTeam: "SEA",
          height: 71,
          weight: 215,
          dob: "4/22/86",
          forty: 4.46,
          bench: 20,
          vertical: 35.5,
          broad: 125,
          shuttle: 4.58,
          cone: 7.09,
          arm: 32.5,
          hand: 9.63,
          dpos: 12.0,
          col: "California",
          dv: "Pacific 10",
          jnum: 24,
          dcp: 2,
        },
        {
          playerID: "MM-0050",
          playerFirst: "Marlon",
          playerLast: "Mack",
          playerFull: "Marlon Mack",
          position: "RB",
          startYear: 2017,
          currentTeam: "IND",
          height: 71,
          weight: 213,
          dob: "3/7/96",
          forty: 4.5,
          bench: 15,
          vertical: 35.5,
          broad: 125,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 9.0,
          dpos: 143.0,
          col: "South Florida",
          dv: "American Athletic",
          jnum: 25,
          dcp: 1,
        },
        {
          playerID: "MS-0125",
          playerFirst: "Miles",
          playerLast: "Sanders",
          playerFull: "Miles Sanders",
          position: "RB",
          startYear: 2019,
          currentTeam: "PHI",
          height: 71,
          weight: 211,
          dob: "5/1/97",
          forty: 4.49,
          bench: 20,
          vertical: 36.0,
          broad: 124,
          shuttle: 4.19,
          cone: 6.89,
          arm: 30.63,
          hand: 9.25,
          dpos: 53.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 26,
          dcp: 2,
        },
        {
          playerID: "MW-0650",
          playerFirst: "Mark",
          playerLast: "Walton",
          playerFull: "Mark Walton",
          position: "RB",
          startYear: 2018,
          currentTeam: "INA",
          height: 70,
          weight: 202,
          dob: "3/29/97",
          forty: 4.6,
          bench: 18,
          vertical: 31.5,
          broad: 118,
          shuttle: 4.45,
          cone: 7.0,
          arm: 30.0,
          hand: 9.25,
          dpos: 112.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "NB-0125",
          playerFirst: "Nick",
          playerLast: "Bawden",
          playerFull: "Nick Bawden",
          position: "RB",
          startYear: 2018,
          currentTeam: "DET",
          height: 74,
          weight: 245,
          dob: "6/22/96",
          forty: 4.72,
          bench: 0,
          vertical: 0.0,
          broad: 109,
          shuttle: 4.37,
          cone: 7.16,
          arm: 30.5,
          hand: 9.25,
          dpos: 237.0,
          col: "San Diego State",
          dv: "Mountain West (MWC)",
          jnum: 46,
          dcp: 5,
        },
        {
          playerID: "NB-0200",
          playerFirst: "Nick",
          playerLast: "Bellore",
          playerFull: "Nick Bellore",
          position: "RB",
          startYear: 2011,
          currentTeam: "SEA",
          height: 73,
          weight: 250,
          dob: "5/12/89",
          forty: 4.84,
          bench: 23,
          vertical: 32.5,
          broad: 109,
          shuttle: 4.0,
          cone: 6.98,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Central Michigan",
          dv: "Mid-American (MAC)",
          jnum: 44,
          dcp: 1,
        },
        {
          playerID: "NC-0175",
          playerFirst: "Nick",
          playerLast: "Chubb",
          playerFull: "Nick Chubb",
          position: "RB",
          startYear: 2018,
          currentTeam: "CLE",
          height: 71,
          weight: 227,
          dob: "12/27/95",
          forty: 4.52,
          bench: 29,
          vertical: 38.5,
          broad: 128,
          shuttle: 4.25,
          cone: 7.09,
          arm: 32.0,
          hand: 9.63,
          dpos: 35.0,
          col: "Georgia",
          dv: "Southeastern (SEC)",
          jnum: 24,
          dcp: 1,
        },
        {
          playerID: "NH-1237",
          playerFirst: "Nyheim",
          playerLast: "Hines",
          playerFull: "Nyheim Hines",
          position: "RB",
          startYear: 2018,
          currentTeam: "IND",
          height: 68,
          weight: 198,
          dob: "11/12/96",
          forty: 4.38,
          bench: 11,
          vertical: 35.5,
          broad: 121,
          shuttle: 4.27,
          cone: 6.9,
          arm: 30.75,
          hand: 8.88,
          dpos: 104.0,
          col: "North Carolina State",
          dv: "Atlantic Coast (ACC)",
          jnum: 21,
          dcp: 2,
        },
        {
          playerID: "PB-0125",
          playerFirst: "Peyton",
          playerLast: "Barber",
          playerFull: "Peyton Barber",
          position: "RB",
          startYear: 2016,
          currentTeam: "TB",
          height: 70,
          weight: 228,
          dob: "6/27/94",
          forty: 4.49,
          bench: 20,
          vertical: 32.5,
          broad: 111,
          shuttle: 4.21,
          cone: 7.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Auburn",
          dv: "Southeastern (SEC)",
          jnum: 25,
          dcp: 2,
        },
        {
          playerID: "PD-0700",
          playerFirst: "Patrick",
          playerLast: "DiMarco",
          playerFull: "Patrick DiMarco",
          position: "RB",
          startYear: 2011,
          currentTeam: "BUF",
          height: 73,
          weight: 240,
          dob: "4/30/89",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "South Carolina",
          dv: "Southeastern (SEC)",
          jnum: 42,
          dcp: 1,
        },
        {
          playerID: "PL-0012",
          playerFirst: "Patrick",
          playerLast: "Laird",
          playerFull: "Patrick Laird",
          position: "RB",
          startYear: 2019,
          currentTeam: "MIA",
          height: 72,
          weight: 201,
          dob: "8/17/95",
          forty: 4.56,
          bench: 0,
          vertical: 34.0,
          broad: 120,
          shuttle: 4.14,
          cone: 6.9,
          arm: 30.0,
          hand: 9.38,
          dpos: 0.0,
          col: "California",
          dv: "Pacific 12",
          jnum: 42,
          dcp: 1,
        },
        {
          playerID: "PL-0275",
          playerFirst: "Phillip",
          playerLast: "Lindsay",
          playerFull: "Phillip Lindsay",
          position: "RB",
          startYear: 2018,
          currentTeam: "DEN",
          height: 67,
          weight: 185,
          dob: "7/24/94",
          forty: 4.43,
          bench: 14,
          vertical: 35.5,
          broad: 124,
          shuttle: 4.31,
          cone: 7.12,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Colorado",
          dv: "Pacific 12",
          jnum: 30,
          dcp: 1,
        },
        {
          playerID: "PP-0350",
          playerFirst: "Paul",
          playerLast: "Perkins",
          playerFull: "Paul Perkins",
          position: "RB",
          startYear: 2016,
          currentTeam: "INA",
          height: 70,
          weight: 208,
          dob: "11/16/94",
          forty: 4.43,
          bench: 19,
          vertical: 32.0,
          broad: 124,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.63,
          hand: 9.0,
          dpos: 149.0,
          col: "UCLA",
          dv: "Pacific 12",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "PR-0125",
          playerFirst: "Patrick",
          playerLast: "Ricard",
          playerFull: "Patrick Ricard",
          position: "RB",
          startYear: 2017,
          currentTeam: "BAL",
          height: 76,
          weight: 280,
          dob: "5/27/94",
          forty: 5.03,
          bench: 33,
          vertical: 33.5,
          broad: 106,
          shuttle: 4.55,
          cone: 7.52,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Maine",
          dv: "Colonial Athletic (CAA)",
          jnum: 42,
          dcp: 1,
        },
        {
          playerID: "QO-0200",
          playerFirst: "Qadree",
          playerLast: "Ollison",
          playerFull: "Qadree Ollison",
          position: "RB",
          startYear: 2019,
          currentTeam: "ATL",
          height: 73,
          weight: 228,
          dob: "9/8/96",
          forty: 4.58,
          bench: 19,
          vertical: 29.5,
          broad: 114,
          shuttle: 4.31,
          cone: 7.53,
          arm: 31.5,
          hand: 9.63,
          dpos: 152.0,
          col: "Pittsburgh",
          dv: "Atlantic Coast (ACC)",
          jnum: 30,
          dcp: 4,
        },
        {
          playerID: "RA-1337",
          playerFirst: "Ryquell",
          playerLast: "Armstead",
          playerFull: "Ryquell Armstead",
          position: "RB",
          startYear: 2019,
          currentTeam: "JAC",
          height: 71,
          weight: 220,
          dob: "10/30/96",
          forty: 4.45,
          bench: 22,
          vertical: 30.0,
          broad: 114,
          shuttle: 4.29,
          cone: 7.02,
          arm: 30.63,
          hand: 9.13,
          dpos: 140.0,
          col: "Temple",
          dv: "American Athletic",
          jnum: 23,
          dcp: 2,
        },
        {
          playerID: "RB-2350",
          playerFirst: "Reggie",
          playerLast: "Bonnafon",
          playerFull: "Reggie Bonnafon",
          position: "RB",
          startYear: 2018,
          currentTeam: "CAR",
          height: 72,
          weight: 206,
          dob: "1/4/96",
          forty: 4.53,
          bench: 20,
          vertical: 38.0,
          broad: 127,
          shuttle: 4.25,
          cone: 6.97,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Louisville",
          dv: "Atlantic Coast (ACC)",
          jnum: 39,
          dcp: 2,
        },
        {
          playerID: "RB-4670",
          playerFirst: "Rex",
          playerLast: "Burkhead",
          playerFull: "Rex Burkhead",
          position: "RB",
          startYear: 2013,
          currentTeam: "NE",
          height: 70,
          weight: 214,
          dob: "7/2/90",
          forty: 4.65,
          bench: 21,
          vertical: 39.0,
          broad: 125,
          shuttle: 4.09,
          cone: 6.85,
          arm: 30.88,
          hand: 9.75,
          dpos: 190.0,
          col: "Nebraska",
          dv: "Big Ten",
          jnum: 34,
          dcp: 2,
        },
        {
          playerID: "RF-1400",
          playerFirst: "Royce",
          playerLast: "Freeman",
          playerFull: "Royce Freeman",
          position: "RB",
          startYear: 2018,
          currentTeam: "DEN",
          height: 71,
          weight: 229,
          dob: "2/24/96",
          forty: 4.54,
          bench: 17,
          vertical: 34.0,
          broad: 118,
          shuttle: 4.16,
          cone: 6.9,
          arm: 32.0,
          hand: 9.5,
          dpos: 71.0,
          col: "Oregon",
          dv: "Pacific 12",
          jnum: 28,
          dcp: 2,
        },
        {
          playerID: "RJ-2250",
          playerFirst: "Ronald",
          playerLast: "Jones",
          playerFull: "Ronald Jones",
          position: "RB",
          startYear: 2018,
          currentTeam: "TB",
          height: 71,
          weight: 205,
          dob: "8/3/97",
          forty: 4.39,
          bench: 0,
          vertical: 36.5,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.13,
          hand: 8.75,
          dpos: 38.0,
          col: "USC",
          dv: "Pacific 12",
          jnum: 27,
          dcp: 1,
        },
      ]);
    });
};
