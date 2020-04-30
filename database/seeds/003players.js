exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .then(function () { 
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "KC-2350",
          playerFirst: "Kirk",
          playerLast: "Cousins",
          playerFull: "Kirk Cousins",
          position: "QB",
          startYear: 2012,
          currentTeam: "MIN",
          height: 75,
          weight: 214,
          dob: "8/19/88",
          forty: 4.84,
          bench: 0,
          vertical: 28.5,
          broad: 109,
          shuttle: 4.5,
          cone: 7.05,
          arm: 31.75,
          hand: 9.88,
          dpos: 102.0,
          col: "Michigan State",
          dv: "Big Ten",
          jnum: 8,
          dcp: 1,
        },
        {
          playerID: "KM-3500",
          playerFirst: "Kyler",
          playerLast: "Murray",
          playerFull: "Kyler Murray",
          position: "QB",
          startYear: 2019,
          currentTeam: "ARI",
          height: 70,
          weight: 207,
          dob: "8/7/97",
          forty: 4.4,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 28.5,
          hand: 9.5,
          dpos: 1.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 1,
          dcp: 1,
        },
        {
          playerID: "LF-0025",
          playerFirst: "Luke",
          playerLast: "Falk",
          playerFull: "Luke Falk",
          position: "QB",
          startYear: 2018,
          currentTeam: "INA",
          height: 76,
          weight: 215,
          dob: "12/28/94",
          forty: 4.87,
          bench: 0,
          vertical: 26.5,
          broad: 103,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 9.25,
          dpos: 199.0,
          col: "Washington State",
          dv: "Pacific 12",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "LJ-0150",
          playerFirst: "Lamar",
          playerLast: "Jackson",
          playerFull: "Lamar Jackson",
          position: "QB",
          startYear: 2018,
          currentTeam: "BAL",
          height: 74,
          weight: 216,
          dob: "1/7/97",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 33.13,
          hand: 9.5,
          dpos: 32.0,
          col: "Louisville",
          dv: "Atlantic Coast (ACC)",
          jnum: 8,
          dcp: 1,
        },
        {
          playerID: "MB-0450",
          playerFirst: "Matt",
          playerLast: "Barkley",
          playerFull: "Matt Barkley",
          position: "QB",
          startYear: 2013,
          currentTeam: "BUF",
          height: 74,
          weight: 227,
          dob: "9/8/90",
          forty: 4.9,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 4.58,
          cone: 0.0,
          arm: 30.63,
          hand: 10.13,
          dpos: 98.0,
          col: "USC",
          dv: "Pacific 12",
          jnum: 5,
          dcp: 2,
        },
        {
          playerID: "MG-0850",
          playerFirst: "Mike",
          playerLast: "Glennon",
          playerFull: "Mike Glennon",
          position: "QB",
          startYear: 2013,
          currentTeam: "OAK",
          height: 79,
          weight: 225,
          dob: "12/12/89",
          forty: 4.94,
          bench: 0,
          vertical: 26.5,
          broad: 102,
          shuttle: 4.52,
          cone: 7.49,
          arm: 33.13,
          hand: 9.63,
          dpos: 73.0,
          col: "North Carolina State",
          dv: "Atlantic Coast (ACC)",
          jnum: 7,
          dcp: 2,
        },
        {
          playerID: "MM-0912",
          playerFirst: "Marcus",
          playerLast: "Mariota",
          playerFull: "Marcus Mariota",
          position: "QB",
          startYear: 2015,
          currentTeam: "TEN",
          height: 76,
          weight: 222,
          dob: "10/30/93",
          forty: 4.43,
          bench: 0,
          vertical: 36.0,
          broad: 121,
          shuttle: 4.11,
          cone: 6.87,
          arm: 32.0,
          hand: 9.88,
          dpos: 2.0,
          col: "Oregon",
          dv: "Pacific 12",
          jnum: 8,
          dcp: 2,
        },
        {
          playerID: "MM-4700",
          playerFirst: "Matt",
          playerLast: "Moore",
          playerFull: "Matt Moore",
          position: "QB",
          startYear: 2007,
          currentTeam: "KC",
          height: 75,
          weight: 216,
          dob: "8/9/84",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.25,
          hand: 8.5,
          dpos: 0.0,
          col: "Oregon State",
          dv: "Pacific 10",
          jnum: 8,
          dcp: 2,
        },
        {
          playerID: "MR-2350",
          playerFirst: "Mason",
          playerLast: "Rudolph",
          playerFull: "Mason Rudolph",
          position: "QB",
          startYear: 2018,
          currentTeam: "PIT",
          height: 77,
          weight: 235,
          dob: "7/17/95",
          forty: 4.9,
          bench: 0,
          vertical: 28.5,
          broad: 107,
          shuttle: 4.56,
          cone: 0.0,
          arm: 32.38,
          hand: 9.13,
          dpos: 76.0,
          col: "Oklahoma State",
          dv: "Big 12",
          jnum: 2,
          dcp: 5,
        },
        {
          playerID: "MR-2500",
          playerFirst: "Matt",
          playerLast: "Ryan",
          playerFull: "Matt Ryan",
          position: "QB",
          startYear: 2008,
          currentTeam: "ATL",
          height: 77,
          weight: 220,
          dob: "5/17/85",
          forty: 4.89,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 4.51,
          cone: 7.4,
          arm: 32.38,
          hand: 9.5,
          dpos: 3.0,
          col: "Boston College",
          dv: "Atlantic Coast (ACC)",
          jnum: 2,
          dcp: 1,
        },
        {
          playerID: "MS-0200",
          playerFirst: "Matt",
          playerLast: "Schaub",
          playerFull: "Matt Schaub",
          position: "QB",
          startYear: 2004,
          currentTeam: "ATL",
          height: 78,
          weight: 240,
          dob: "6/25/81",
          forty: 5.04,
          bench: 0,
          vertical: 30.5,
          broad: 110,
          shuttle: 4.66,
          cone: 7.65,
          arm: 31.75,
          hand: 9.75,
          dpos: 90.0,
          col: "Virginia",
          dv: "Atlantic Coast (ACC)",
          jnum: 8,
          dcp: 2,
        },
        {
          playerID: "MS-4100",
          playerFirst: "Matthew",
          playerLast: "Stafford",
          playerFull: "Matthew Stafford",
          position: "QB",
          startYear: 2009,
          currentTeam: "DET",
          height: 75,
          weight: 232,
          dob: "2/7/88",
          forty: 4.81,
          bench: 0,
          vertical: 30.5,
          broad: 107,
          shuttle: 4.47,
          cone: 7.06,
          arm: 33.25,
          hand: 10.0,
          dpos: 1.0,
          col: "Georgia",
          dv: "Southeastern (SEC)",
          jnum: 9,
          dcp: 4,
        },
        {
          playerID: "MT-1800",
          playerFirst: "Mitchell",
          playerLast: "Trubisky",
          playerFull: "Mitchell Trubisky",
          position: "QB",
          startYear: 2017,
          currentTeam: "CHI",
          height: 74,
          weight: 222,
          dob: "8/20/94",
          forty: 4.67,
          bench: 0,
          vertical: 27.5,
          broad: 115,
          shuttle: 4.25,
          cone: 6.87,
          arm: 32.0,
          hand: 9.5,
          dpos: 2.0,
          col: "North Carolina",
          dv: "Atlantic Coast (ACC)",
          jnum: 10,
          dcp: 1,
        },
        {
          playerID: "NF-0250",
          playerFirst: "Nick",
          playerLast: "Foles",
          playerFull: "Nick Foles",
          position: "QB",
          startYear: 2012,
          currentTeam: "JAC",
          height: 77,
          weight: 243,
          dob: "1/20/89",
          forty: 5.03,
          bench: 0,
          vertical: 30.5,
          broad: 112,
          shuttle: 0.0,
          cone: 0.0,
          arm: 34.25,
          hand: 10.63,
          dpos: 88.0,
          col: "Arizona",
          dv: "Pacific 12",
          jnum: 7,
          dcp: 2,
        },
        {
          playerID: "NM-0687",
          playerFirst: "Nick",
          playerLast: "Mullens",
          playerFull: "Nick Mullens",
          position: "QB",
          startYear: 2017,
          currentTeam: "SF",
          height: 73,
          weight: 199,
          dob: "3/21/95",
          forty: 4.9,
          bench: 0,
          vertical: 31.0,
          broad: 104,
          shuttle: 4.47,
          cone: 7.4,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Southern Mississippi",
          dv: "Conference USA (C-USA)",
          jnum: 4,
          dcp: 2,
        },
        {
          playerID: "PM-0025",
          playerFirst: "Patrick",
          playerLast: "Mahomes",
          playerFull: "Patrick Mahomes",
          position: "QB",
          startYear: 2017,
          currentTeam: "KC",
          height: 74,
          weight: 225,
          dob: "9/17/95",
          forty: 4.8,
          bench: 0,
          vertical: 30.0,
          broad: 113,
          shuttle: 4.08,
          cone: 6.88,
          arm: 33.25,
          hand: 9.25,
          dpos: 10.0,
          col: "Texas Tech",
          dv: "Big 12",
          jnum: 15,
          dcp: 1,
        },
        {
          playerID: "PR-0300",
          playerFirst: "Philip",
          playerLast: "Rivers",
          playerFull: "Philip Rivers",
          position: "QB",
          startYear: 2004,
          currentTeam: "LAC",
          height: 77,
          weight: 228,
          dob: "12/8/81",
          forty: 5.08,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.25,
          hand: 9.25,
          dpos: 4.0,
          col: "North Carolina State",
          dv: "Atlantic Coast (ACC)",
          jnum: 17,
          dcp: 1,
        },
        {
          playerID: "RF-0450",
          playerFirst: "Ryan",
          playerLast: "Finley",
          playerFull: "Ryan Finley",
          position: "QB",
          startYear: 2019,
          currentTeam: "CIN",
          height: 76,
          weight: 213,
          dob: "12/26/94",
          forty: 4.73,
          bench: 0,
          vertical: 30.5,
          broad: 116,
          shuttle: 4.2,
          cone: 7.2,
          arm: 32.88,
          hand: 9.5,
          dpos: 104.0,
          col: "North Carolina State",
          dv: "Atlantic Coast (ACC)",
          jnum: 5,
          dcp: 2,
        },
        {
          playerID: "RF-0500",
          playerFirst: "Ryan",
          playerLast: "Fitzpatrick",
          playerFull: "Ryan Fitzpatrick",
          position: "QB",
          startYear: 2005,
          currentTeam: "MIA",
          height: 74,
          weight: 225,
          dob: "11/24/82",
          forty: 4.86,
          bench: 0,
          vertical: 30.5,
          broad: 105,
          shuttle: 4.07,
          cone: 7.09,
          arm: 0.0,
          hand: 0.0,
          dpos: 250.0,
          col: "Harvard",
          dv: "Ivy League",
          jnum: 14,
          dcp: 1,
        },
        {
          playerID: "RG-1850",
          playerFirst: "Robert",
          playerLast: "Griffin",
          playerFull: "Robert Griffin",
          position: "QB",
          startYear: 2012,
          currentTeam: "BAL",
          height: 74,
          weight: 223,
          dob: "2/12/90",
          forty: 4.33,
          bench: 0,
          vertical: 39.0,
          broad: 120,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.25,
          hand: 9.5,
          dpos: 2.0,
          col: "Baylor",
          dv: "Big 12",
          jnum: 3,
          dcp: 2,
        },
        {
          playerID: "RG-1885",
          playerFirst: "Ryan",
          playerLast: "Griffin",
          playerFull: "Ryan Griffin",
          position: "QB",
          startYear: 2013,
          currentTeam: "TB",
          height: 77,
          weight: 208,
          dob: "11/17/89",
          forty: 4.9,
          bench: 21,
          vertical: 34.5,
          broad: 113,
          shuttle: 4.43,
          cone: 7.01,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Tulane",
          dv: "Conference USA (C-USA)",
          jnum: 4,
          dcp: 2,
        },
        {
          playerID: "RT-0150",
          playerFirst: "Ryan",
          playerLast: "Tannehill",
          playerFull: "Ryan Tannehill",
          position: "QB",
          startYear: 2012,
          currentTeam: "TEN",
          height: 76,
          weight: 222,
          dob: "7/27/88",
          forty: 4.65,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.63,
          hand: 9.0,
          dpos: 8.0,
          col: "Texas A&M",
          dv: "Big 12",
          jnum: 17,
          dcp: 1,
        },
        {
          playerID: "RW-3850",
          playerFirst: "Russell",
          playerLast: "Wilson",
          playerFull: "Russell Wilson",
          position: "QB",
          startYear: 2012,
          currentTeam: "SEA",
          height: 71,
          weight: 206,
          dob: "11/29/88",
          forty: 4.53,
          bench: 0,
          vertical: 34.0,
          broad: 118,
          shuttle: 4.09,
          cone: 6.97,
          arm: 31.0,
          hand: 10.25,
          dpos: 75.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "SD-0175",
          playerFirst: "Sam",
          playerLast: "Darnold",
          playerFull: "Sam Darnold",
          position: "QB",
          startYear: 2018,
          currentTeam: "NYJ",
          height: 75,
          weight: 221,
          dob: "6/5/97",
          forty: 4.85,
          bench: 0,
          vertical: 26.5,
          broad: 105,
          shuttle: 4.4,
          cone: 6.96,
          arm: 31.0,
          hand: 9.38,
          dpos: 3.0,
          col: "USC",
          dv: "Pacific 12",
          jnum: 14,
          dcp: 1,
        },
        {
          playerID: "SM-0425",
          playerFirst: "Sean",
          playerLast: "Mannion",
          playerFull: "Sean Mannion",
          position: "QB",
          startYear: 2015,
          currentTeam: "MIN",
          height: 78,
          weight: 229,
          dob: "4/25/92",
          forty: 5.06,
          bench: 0,
          vertical: 31.0,
          broad: 105,
          shuttle: 4.39,
          cone: 7.29,
          arm: 33.5,
          hand: 9.0,
          dpos: 89.0,
          col: "Oregon State",
          dv: "Pacific 12",
          jnum: 4,
          dcp: 2,
        },
        {
          playerID: "TB-2093",
          playerFirst: "Tim",
          playerLast: "Boyle",
          playerFull: "Tim Boyle",
          position: "QB",
          startYear: 2018,
          currentTeam: "GB",
          height: 75,
          weight: 205,
          dob: "10/3/94",
          forty: 4.88,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Eastern Kentucky",
          dv: "Ohio Valley",
          jnum: 8,
          dcp: 2,
        },
        {
          playerID: "TB-2300",
          playerFirst: "Tom",
          playerLast: "Brady",
          playerFull: "Tom Brady",
          position: "QB",
          startYear: 2000,
          currentTeam: "NE",
          height: 76,
          weight: 225,
          dob: "8/3/77",
          forty: 5.28,
          bench: 0,
          vertical: 24.5,
          broad: 99,
          shuttle: 4.38,
          cone: 7.2,
          arm: 0.0,
          hand: 0.0,
          dpos: 199.0,
          col: "Michigan",
          dv: "Big Ten",
          jnum: 12,
          dcp: 1,
        },
        {
          playerID: "TB-2650",
          playerFirst: "Teddy",
          playerLast: "Bridgewater",
          playerFull: "Teddy Bridgewater",
          position: "QB",
          startYear: 2014,
          currentTeam: "NO",
          height: 74,
          weight: 214,
          dob: "11/10/92",
          forty: 4.79,
          bench: 0,
          vertical: 30.0,
          broad: 113,
          shuttle: 4.2,
          cone: 7.17,
          arm: 33.0,
          hand: 9.25,
          dpos: 32.0,
          col: "Louisville",
          dv: "American Athletic",
          jnum: 5,
          dcp: 2,
        },
        {
          playerID: "TH-1625",
          playerFirst: "Taysom",
          playerLast: "Hill",
          playerFull: "Taysom Hill",
          position: "QB",
          startYear: 2017,
          currentTeam: "NO",
          height: 74,
          weight: 235,
          dob: "8/23/90",
          forty: 4.46,
          bench: 0,
          vertical: 38.5,
          broad: 122,
          shuttle: 4.37,
          cone: 7.03,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Brigham Young",
          dv: "FBS Independents",
          jnum: 7,
          dcp: 3,
        },
        {
          playerID: "TM-2362",
          playerFirst: "Trace",
          playerLast: "McSorley",
          playerFull: "Trace McSorley",
          position: "QB",
          startYear: 2019,
          currentTeam: "BAL",
          height: 72,
          weight: 202,
          dob: "8/23/95",
          forty: 4.57,
          bench: 0,
          vertical: 33.0,
          broad: 115,
          shuttle: 4.12,
          cone: 7.09,
          arm: 31.0,
          hand: 9.13,
          dpos: 197.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 7,
          dcp: 3,
        },
        {
          playerID: "TS-1450",
          playerFirst: "Trevor",
          playerLast: "Siemian",
          playerFull: "Trevor Siemian",
          position: "QB",
          startYear: 2015,
          currentTeam: "NYJ",
          height: 75,
          weight: 220,
          dob: "12/26/92",
          forty: 4.94,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 250.0,
          col: "Northwestern",
          dv: "Big Ten",
          jnum: 19,
          dcp: 3,
        },
        {
          playerID: "TT-0500",
          playerFirst: "Tyrod",
          playerLast: "Taylor",
          playerFull: "Tyrod Taylor",
          position: "QB",
          startYear: 2011,
          currentTeam: "LAC",
          height: 73,
          weight: 215,
          dob: "8/3/89",
          forty: 4.47,
          bench: 0,
          vertical: 37.5,
          broad: 126,
          shuttle: 4.09,
          cone: 6.78,
          arm: 32.25,
          hand: 10.0,
          dpos: 180.0,
          col: "Virginia Tech",
          dv: "Atlantic Coast (ACC)",
          jnum: 5,
          dcp: 2,
        },
        {
          playerID: "WG-0750",
          playerFirst: "Will",
          playerLast: "Grier",
          playerFull: "Will Grier",
          position: "QB",
          startYear: 2019,
          currentTeam: "CAR",
          height: 74,
          weight: 217,
          dob: "4/3/95",
          forty: 4.84,
          bench: 0,
          vertical: 34.0,
          broad: 112,
          shuttle: 4.28,
          cone: 7.09,
          arm: 31.5,
          hand: 9.38,
          dpos: 100.0,
          col: "West Virginia",
          dv: "Big 12",
          jnum: 3,
          dcp: 1,
        },
        {
          playerID: "AA-0025",
          playerFirst: "Ameer",
          playerLast: "Abdullah",
          playerFull: "Ameer Abdullah",
          position: "RB",
          startYear: 2015,
          currentTeam: "MIN",
          height: 69,
          weight: 205,
          dob: "6/13/93",
          forty: 4.5,
          bench: 24,
          vertical: 42.5,
          broad: 130,
          shuttle: 3.95,
          cone: 6.79,
          arm: 30.0,
          hand: 8.63,
          dpos: 54.0,
          col: "Nebraska",
          dv: "Big Ten",
          jnum: 31,
          dcp: 3,
        },
        {
          playerID: "AA-0557",
          playerFirst: "Alex",
          playerLast: "Armah",
          playerFull: "Alex Armah",
          position: "RB",
          startYear: 2017,
          currentTeam: "CAR",
          height: 74,
          weight: 253,
          dob: "5/17/94",
          forty: 4.7,
          bench: 26,
          vertical: 34.5,
          broad: 122,
          shuttle: 4.29,
          cone: 7.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 192.0,
          col: "West Georgia",
          dv: "N/A",
          jnum: 40,
          dcp: 1,
        },
        {
          playerID: "AB-1125",
          playerFirst: "Andrew",
          playerLast: "Beck",
          playerFull: "Andrew Beck",
          position: "RB",
          startYear: 2019,
          currentTeam: "DEN",
          height: 75,
          weight: 254,
          dob: "5/15/96",
          forty: 4.63,
          bench: 23,
          vertical: 34.0,
          broad: 119,
          shuttle: 4.26,
          cone: 7.34,
          arm: 30.25,
          hand: 9.13,
          dpos: 0.0,
          col: "Texas",
          dv: "Big 12",
          jnum: 83,
          dcp: 1,
        },
        {
          playerID: "AE-0550",
          playerFirst: "Austin",
          playerLast: "Ekeler",
          playerFull: "Austin Ekeler",
          position: "RB",
          startYear: 2017,
          currentTeam: "LAC",
          height: 69,
          weight: 191,
          dob: "5/17/95",
          forty: 4.67,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Western State (CO)",
          dv: "N/A",
          jnum: 30,
          dcp: 2,
        },
        {
          playerID: "AI-0050",
          playerFirst: "Alec",
          playerLast: "Ingold",
          playerFull: "Alec Ingold",
          position: "RB",
          startYear: 2019,
          currentTeam: "OAK",
          height: 73,
          weight: 242,
          dob: "7/9/96",
          forty: 4.89,
          bench: 16,
          vertical: 34.0,
          broad: 116,
          shuttle: 4.32,
          cone: 7.35,
          arm: 31.5,
          hand: 9.63,
          dpos: 0.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 45,
          dcp: 1,
        },
        {
          playerID: "AJ-0375",
          playerFirst: "Andy",
          playerLast: "Janovich",
          playerFull: "Andy Janovich",
          position: "RB",
          startYear: 2016,
          currentTeam: "DEN",
          height: 73,
          weight: 238,
          dob: "5/23/93",
          forty: 4.75,
          bench: 30,
          vertical: 34.0,
          broad: 119,
          shuttle: 4.32,
          cone: 7.28,
          arm: 31.63,
          hand: 9.75,
          dpos: 176.0,
          col: "Nebraska",
          dv: "Big Ten",
          jnum: 32,
          dcp: 4,
        },
        {
          playerID: "AJ-1143",
          playerFirst: "Aaron",
          playerLast: "Jones",
          playerFull: "Aaron Jones",
          position: "RB",
          startYear: 2017,
          currentTeam: "GB",
          height: 69,
          weight: 208,
          dob: "12/2/94",
          forty: 4.56,
          bench: 16,
          vertical: 37.5,
          broad: 127,
          shuttle: 4.2,
          cone: 6.82,
          arm: 32.5,
          hand: 9.5,
          dpos: 182.0,
          col: "Texas-El Paso",
          dv: "Conference USA (C-USA)",
          jnum: 33,
          dcp: 1,
        },
      ]);
    });
};
