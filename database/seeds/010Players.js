exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "NV-0050",
          playerFirst: "Nick",
          playerLast: "Vannett",
          playerFull: "Nick Vannett",
          position: "TE",
          startYear: 2016,
          currentTeam: "PIT",
          height: 78,
          weight: 257,
          dob: "3/6/93",
          forty: 4.89,
          bench: 17,
          vertical: 30.5,
          broad: 113,
          shuttle: 4.2,
          cone: 7.05,
          arm: 34.25,
          hand: 10.0,
          dpos: 94.0,
          col: "Ohio State",
          dv: "Big Ten",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "OH-0250",
          playerFirst: "O.J.",
          playerLast: "Howard",
          playerFull: "O.J. Howard",
          position: "TE",
          startYear: 2017,
          currentTeam: "TB",
          height: 78,
          weight: 251,
          dob: "11/19/94",
          forty: 4.51,
          bench: 22,
          vertical: 30.0,
          broad: 121,
          shuttle: 4.16,
          cone: 6.85,
          arm: 33.75,
          hand: 10.0,
          dpos: 19.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 80,
          dcp: 1,
        },
        {
          playerID: "PB-0725",
          playerFirst: "Pharaoh",
          playerLast: "Brown",
          playerFull: "Pharaoh Brown",
          position: "TE",
          startYear: 2017,
          currentTeam: "CLE",
          height: 77,
          weight: 246,
          dob: "5/4/94",
          forty: 4.83,
          bench: 24,
          vertical: 34.0,
          broad: 103,
          shuttle: 4.46,
          cone: 7.24,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Oregon",
          dv: "Pacific 12",
          jnum: 86,
          dcp: 2,
        },
        {
          playerID: "RD-2300",
          playerFirst: "Ross",
          playerLast: "Dwelley",
          playerFull: "Ross Dwelley",
          position: "TE",
          startYear: 2018,
          currentTeam: "SF",
          height: 76,
          weight: 240,
          dob: "1/26/95",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "San Diego",
          dv: "N/A",
          jnum: 82,
          dcp: 2,
        },
        {
          playerID: "RE-0400",
          playerFirst: "Rhett",
          playerLast: "Ellison",
          playerFull: "Rhett Ellison",
          position: "TE",
          startYear: 2012,
          currentTeam: "NYG",
          height: 77,
          weight: 250,
          dob: "10/3/88",
          forty: 4.78,
          bench: 0,
          vertical: 31.5,
          broad: 109,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.75,
          hand: 10.25,
          dpos: 128.0,
          col: "USC",
          dv: "Pacific 12",
          jnum: 85,
          dcp: 3,
        },
        {
          playerID: "RG-1870",
          playerFirst: "Ryan",
          playerLast: "Griffin",
          playerFull: "Ryan Griffin",
          position: "TE",
          startYear: 2013,
          currentTeam: "NYJ",
          height: 78,
          weight: 247,
          dob: "1/11/90",
          forty: 4.87,
          bench: 21,
          vertical: 34.5,
          broad: 113,
          shuttle: 4.43,
          cone: 7.01,
          arm: 33.25,
          hand: 0.0,
          dpos: 201.0,
          col: "Connecticut",
          dv: "Big East",
          jnum: 84,
          dcp: 3,
        },
        {
          playerID: "RI-0500",
          playerFirst: "Ryan",
          playerLast: "Izzo",
          playerFull: "Ryan Izzo",
          position: "TE",
          startYear: 2018,
          currentTeam: "NE",
          height: 77,
          weight: 256,
          dob: "12/21/95",
          forty: 4.94,
          bench: 18,
          vertical: 33.0,
          broad: 110,
          shuttle: 4.43,
          cone: 7.15,
          arm: 32.13,
          hand: 9.25,
          dpos: 250.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 85,
          dcp: 3,
        },
        {
          playerID: "RS-0687",
          playerFirst: "Ricky",
          playerLast: "Seals-Jones",
          playerFull: "Ricky Seals-Jones",
          position: "TE",
          startYear: 2017,
          currentTeam: "CLE",
          height: 77,
          weight: 243,
          dob: "3/15/95",
          forty: 4.69,
          bench: 17,
          vertical: 31.0,
          broad: 121,
          shuttle: 4.33,
          cone: 7.46,
          arm: 33.13,
          hand: 9.63,
          dpos: 0.0,
          col: "Texas A&M",
          dv: "Southeastern (SEC)",
          jnum: 83,
          dcp: 2,
        },
        {
          playerID: "RT-1250",
          playerFirst: "Robert",
          playerLast: "Tonyan Jr.",
          playerFull: "Robert Tonyan Jr.",
          position: "TE",
          startYear: 2017,
          currentTeam: "GB",
          height: 77,
          weight: 236,
          dob: "4/30/94",
          forty: 4.58,
          bench: 16,
          vertical: 35.0,
          broad: 125,
          shuttle: 4.34,
          cone: 7.12,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Indiana State",
          dv: "Missouri Valley",
          jnum: 85,
          dcp: 3,
        },
        {
          playerID: "RT-1550",
          playerFirst: "Ross",
          playerLast: "Travis",
          playerFull: "Ross Travis",
          position: "TE",
          startYear: 2015,
          currentTeam: "NYJ",
          height: 78,
          weight: 225,
          dob: "1/9/93",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 0,
          dcp: 3,
        },
        {
          playerID: "SC-0175",
          playerFirst: "Stephen",
          playerLast: "Carlson",
          playerFull: "Stephen Carlson",
          position: "TE",
          startYear: 2019,
          currentTeam: "CLE",
          height: 76,
          weight: 230,
          dob: "12/12/96",
          forty: 4.77,
          bench: 18,
          vertical: 32.5,
          broad: 123,
          shuttle: 4.19,
          cone: 6.97,
          arm: 32.0,
          hand: 9.75,
          dpos: 0.0,
          col: "Princeton",
          dv: "Ivy League",
          jnum: 89,
          dcp: 3,
        },
        {
          playerID: "SC-1850",
          playerFirst: "Sean",
          playerLast: "Culkin",
          playerFull: "Sean Culkin",
          position: "TE",
          startYear: 2017,
          currentTeam: "LAC",
          height: 77,
          weight: 250,
          dob: "6/11/93",
          forty: 4.71,
          bench: 21,
          vertical: 35.5,
          broad: 120,
          shuttle: 4.46,
          cone: 7.2,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Missouri",
          dv: "Southeastern (SEC)",
          jnum: 80,
          dcp: 4,
        },
        {
          playerID: "SD-0534",
          playerFirst: "Seth",
          playerLast: "DeValve",
          playerFull: "Seth DeValve",
          position: "TE",
          startYear: 2016,
          currentTeam: "JAC",
          height: 74,
          weight: 244,
          dob: "1/29/93",
          forty: 4.68,
          bench: 22,
          vertical: 40.0,
          broad: 125,
          shuttle: 4.18,
          cone: 6.96,
          arm: 0.0,
          hand: 0.0,
          dpos: 138.0,
          col: "Princeton",
          dv: "Ivy League",
          jnum: 88,
          dcp: 1,
        },
        {
          playerID: "SS-1525",
          playerFirst: "Scott",
          playerLast: "Simonson",
          playerFull: "Scott Simonson",
          position: "TE",
          startYear: 2014,
          currentTeam: "NYG",
          height: 76,
          weight: 243,
          dob: "4/13/92",
          forty: 4.87,
          bench: 24,
          vertical: 30.5,
          broad: 111,
          shuttle: 4.62,
          cone: 7.38,
          arm: 32.0,
          hand: 9.25,
          dpos: 0.0,
          col: "Assumption",
          dv: "N/A",
          jnum: 82,
          dcp: 4,
        },
        {
          playerID: "TB-3950",
          playerFirst: "Trey",
          playerLast: "Burton",
          playerFull: "Trey Burton",
          position: "TE",
          startYear: 2014,
          currentTeam: "CHI",
          height: 74,
          weight: 224,
          dob: "10/29/91",
          forty: 4.58,
          bench: 0,
          vertical: 33.0,
          broad: 113,
          shuttle: 4.31,
          cone: 7.01,
          arm: 31.0,
          hand: 9.38,
          dpos: 0.0,
          col: "Florida",
          dv: "Southeastern (SEC)",
          jnum: 80,
          dcp: 1,
        },
        {
          playerID: "TC-2375",
          playerFirst: "Tyler",
          playerLast: "Conklin",
          playerFull: "Tyler Conklin",
          position: "TE",
          startYear: 2018,
          currentTeam: "MIN",
          height: 75,
          weight: 254,
          dob: "7/30/95",
          forty: 4.8,
          bench: 18,
          vertical: 38.0,
          broad: 120,
          shuttle: 4.23,
          cone: 7.13,
          arm: 33.25,
          hand: 9.5,
          dpos: 157.0,
          col: "Central Michigan",
          dv: "Mid-American (MAC)",
          jnum: 83,
          dcp: 3,
        },
        {
          playerID: "TE-0300",
          playerFirst: "Tyler",
          playerLast: "Eifert",
          playerFull: "Tyler Eifert",
          position: "TE",
          startYear: 2013,
          currentTeam: "CIN",
          height: 78,
          weight: 250,
          dob: "9/8/90",
          forty: 4.65,
          bench: 22,
          vertical: 35.5,
          broad: 119,
          shuttle: 4.32,
          cone: 6.92,
          arm: 33.13,
          hand: 9.13,
          dpos: 21.0,
          col: "Notre Dame",
          dv: "FBS Independents",
          jnum: 85,
          dcp: 2,
        },
        {
          playerID: "TF-1500",
          playerFirst: "Troy",
          playerLast: "Fumagalli",
          playerFull: "Troy Fumagalli",
          position: "TE",
          startYear: 2018,
          currentTeam: "DEN",
          height: 77,
          weight: 247,
          dob: "2/17/95",
          forty: 4.84,
          bench: 14,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.13,
          hand: 10.25,
          dpos: 156.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 84,
          dcp: 3,
        },
        {
          playerID: "TH-1550",
          playerFirst: "Tyler",
          playerLast: "Higbee",
          playerFull: "Tyler Higbee",
          position: "TE",
          startYear: 2016,
          currentTeam: "LA",
          height: 78,
          weight: 249,
          dob: "1/1/93",
          forty: 4.77,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 33.25,
          hand: 10.25,
          dpos: 110.0,
          col: "Western Kentucky",
          dv: "Conference USA (C-USA)",
          jnum: 89,
          dcp: 1,
        },
        {
          playerID: "TH-1875",
          playerFirst: "T.J.",
          playerLast: "Hockenson",
          playerFull: "T.J. Hockenson",
          position: "TE",
          startYear: 2019,
          currentTeam: "DET",
          height: 77,
          weight: 251,
          dob: "7/3/97",
          forty: 4.7,
          bench: 17,
          vertical: 37.5,
          broad: 123,
          shuttle: 4.18,
          cone: 7.02,
          arm: 32.25,
          hand: 9.5,
          dpos: 8.0,
          col: "Iowa",
          dv: "Big Ten",
          jnum: 88,
          dcp: 3,
        },
        {
          playerID: "TH-2875",
          playerFirst: "Tanner",
          playerLast: "Hudson",
          playerFull: "Tanner Hudson",
          position: "TE",
          startYear: 2018,
          currentTeam: "TB",
          height: 77,
          weight: 239,
          dob: "11/12/94",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Southern Arkansas",
          dv: "N/A",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "TK-0150",
          playerFirst: "Travis",
          playerLast: "Kelce",
          playerFull: "Travis Kelce",
          position: "TE",
          startYear: 2013,
          currentTeam: "KC",
          height: 77,
          weight: 255,
          dob: "10/5/89",
          forty: 4.61,
          bench: 0,
          vertical: 35.0,
          broad: 124,
          shuttle: 4.42,
          cone: 7.09,
          arm: 33.75,
          hand: 9.63,
          dpos: 63.0,
          col: "Cincinnati",
          dv: "Big East",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "TK-0850",
          playerFirst: "Tyler",
          playerLast: "Kroft",
          playerFull: "Tyler Kroft",
          position: "TE",
          startYear: 2015,
          currentTeam: "BUF",
          height: 77,
          weight: 246,
          dob: "10/15/92",
          forty: 4.65,
          bench: 17,
          vertical: 34.0,
          broad: 120,
          shuttle: 4.5,
          cone: 7.18,
          arm: 33.0,
          hand: 9.63,
          dpos: 85.0,
          col: "Rutgers",
          dv: "Big Ten",
          jnum: 81,
          dcp: 2,
        },
        {
          playerID: "TS-3656",
          playerFirst: "Tommy",
          playerLast: "Sweeney",
          playerFull: "Tommy Sweeney",
          position: "TE",
          startYear: 2019,
          currentTeam: "BUF",
          height: 76,
          weight: 251,
          dob: "7/1/95",
          forty: 4.84,
          bench: 17,
          vertical: 32.0,
          broad: 115,
          shuttle: 4.31,
          cone: 7.17,
          arm: 32.75,
          hand: 9.75,
          dpos: 228.0,
          col: "Boston College",
          dv: "Atlantic Coast (ACC)",
          jnum: 89,
          dcp: 4,
        },
        {
          playerID: "TS-3662",
          playerFirst: "Tyrone",
          playerLast: "Swoopes",
          playerFull: "Tyrone Swoopes",
          position: "TE",
          startYear: 2017,
          currentTeam: "SEA",
          height: 75,
          weight: 249,
          dob: "11/14/94",
          forty: 4.75,
          bench: 19,
          vertical: 35.0,
          broad: 115,
          shuttle: 4.36,
          cone: 6.89,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Texas",
          dv: "Big 12",
          jnum: 46,
          dcp: 3,
        },
        {
          playerID: "VD-0100",
          playerFirst: "Vernon",
          playerLast: "Davis",
          playerFull: "Vernon Davis",
          position: "TE",
          startYear: 2006,
          currentTeam: "WAS",
          height: 75,
          weight: 250,
          dob: "1/31/84",
          forty: 4.38,
          bench: 33,
          vertical: 42.0,
          broad: 128,
          shuttle: 4.17,
          cone: 7.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 6.0,
          col: "Maryland",
          dv: "Atlantic Coast (ACC)",
          jnum: 85,
          dcp: 1,
        },
        {
          playerID: "VG-0300",
          playerFirst: "Virgil",
          playerLast: "Green",
          playerFull: "Virgil Green",
          position: "TE",
          startYear: 2011,
          currentTeam: "LAC",
          height: 75,
          weight: 249,
          dob: "8/3/88",
          forty: 4.54,
          bench: 23,
          vertical: 42.5,
          broad: 130,
          shuttle: 4.4,
          cone: 6.9,
          arm: 33.5,
          hand: 9.25,
          dpos: 204.0,
          col: "Nevada",
          dv: "Western Athletic",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "VM-0250",
          playerFirst: "Vance",
          playerLast: "McDonald",
          playerFull: "Vance McDonald",
          position: "TE",
          startYear: 2013,
          currentTeam: "PIT",
          height: 76,
          weight: 267,
          dob: "6/13/90",
          forty: 4.6,
          bench: 31,
          vertical: 33.5,
          broad: 119,
          shuttle: 4.53,
          cone: 7.08,
          arm: 34.38,
          hand: 10.13,
          dpos: 55.0,
          col: "Rice",
          dv: "Conference USA (C-USA)",
          jnum: 89,
          dcp: 1,
        },
        {
          playerID: "WD-0550",
          playerFirst: "Will",
          playerLast: "Dissly",
          playerFull: "Will Dissly",
          position: "TE",
          startYear: 2018,
          currentTeam: "SEA",
          height: 76,
          weight: 262,
          dob: "7/8/96",
          forty: 4.87,
          bench: 15,
          vertical: 31.0,
          broad: 111,
          shuttle: 4.4,
          cone: 7.07,
          arm: 33.25,
          hand: 9.75,
          dpos: 120.0,
          col: "Washington",
          dv: "Pacific 12",
          jnum: 88,
          dcp: 3,
        },
        {
          playerID: "XG-0100",
          playerFirst: "Xavier",
          playerLast: "Grimble",
          playerFull: "Xavier Grimble",
          position: "TE",
          startYear: 2014,
          currentTeam: "IND",
          height: 76,
          weight: 257,
          dob: "9/2/92",
          forty: 4.9,
          bench: 16,
          vertical: 30.5,
          broad: 110,
          shuttle: 4.79,
          cone: 7.41,
          arm: 33.63,
          hand: 10.25,
          dpos: 0.0,
          col: "USC",
          dv: "Pacific 12",
          jnum: 0,
          dcp: 1,
        },
        {
          playerID: "ZE-0100",
          playerFirst: "Zach",
          playerLast: "Ertz",
          playerFull: "Zach Ertz",
          position: "TE",
          startYear: 2013,
          currentTeam: "PHI",
          height: 77,
          weight: 249,
          dob: "11/10/90",
          forty: 4.67,
          bench: 24,
          vertical: 35.5,
          broad: 114,
          shuttle: 4.47,
          cone: 7.08,
          arm: 31.75,
          hand: 9.75,
          dpos: 35.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 86,
          dcp: 1,
        },
        {
          playerID: "ZG-0012",
          playerFirst: "Zach",
          playerLast: "Gentry",
          playerFull: "Zach Gentry",
          position: "TE",
          startYear: 2019,
          currentTeam: "PIT",
          height: 80,
          weight: 262,
          dob: "9/10/96",
          forty: 4.77,
          bench: 12,
          vertical: 29.5,
          broad: 110,
          shuttle: 4.53,
          cone: 7.4,
          arm: 33.88,
          hand: 9.5,
          dpos: 141.0,
          col: "Michigan",
          dv: "Big Ten",
          jnum: 81,
          dcp: 3,
        },
        {
          playerID: "AB-3150",
          playerFirst: "A.J.",
          playerLast: "Brown",
          playerFull: "A.J. Brown",
          position: "WR",
          startYear: 2019,
          currentTeam: "TEN",
          height: 72,
          weight: 226,
          dob: "6/30/97",
          forty: 4.49,
          bench: 19,
          vertical: 36.5,
          broad: 120,
          shuttle: 4.25,
          cone: 7.0,
          arm: 32.88,
          hand: 9.75,
          dpos: 51.0,
          col: "Mississippi",
          dv: "Southeastern (SEC)",
          jnum: 11,
          dcp: 2,
        },
        {
          playerID: "AB-3500",
          playerFirst: "Antonio",
          playerLast: "Brown",
          playerFull: "Antonio Brown",
          position: "WR",
          startYear: 2010,
          currentTeam: "INA",
          height: 70,
          weight: 186,
          dob: "7/10/88",
          forty: 4.56,
          bench: 13,
          vertical: 33.5,
          broad: 105,
          shuttle: 4.18,
          cone: 6.98,
          arm: 31.0,
          hand: 9.0,
          dpos: 195.0,
          col: "Central Michigan",
          dv: "Mid-American (MAC)",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "AC-0237",
          playerFirst: "Antonio",
          playerLast: "Callaway",
          playerFull: "Antonio Callaway",
          position: "WR",
          startYear: 2018,
          currentTeam: "INA",
          height: 71,
          weight: 200,
          dob: "1/9/97",
          forty: 4.41,
          bench: 7,
          vertical: 34.0,
          broad: 121,
          shuttle: 4.33,
          cone: 7.0,
          arm: 31.5,
          hand: 9.5,
          dpos: 105.0,
          col: "Florida",
          dv: "Southeastern (SEC)",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "AC-0387",
          playerFirst: "Austin",
          playerLast: "Carr",
          playerFull: "Austin Carr",
          position: "WR",
          startYear: 2017,
          currentTeam: "NO",
          height: 72,
          weight: 201,
          dob: "12/25/93",
          forty: 4.62,
          bench: 16,
          vertical: 33.5,
          broad: 116,
          shuttle: 4.07,
          cone: 6.7,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Northwestern",
          dv: "Big Ten",
          jnum: 80,
          dcp: 4,
        },
        {
          playerID: "AC-2350",
          playerFirst: "Amari",
          playerLast: "Cooper",
          playerFull: "Amari Cooper",
          position: "WR",
          startYear: 2015,
          currentTeam: "DAL",
          height: 73,
          weight: 211,
          dob: "6/17/94",
          forty: 4.31,
          bench: 0,
          vertical: 34.0,
          broad: 120,
          shuttle: 3.98,
          cone: 6.71,
          arm: 31.5,
          hand: 10.0,
          dpos: 4.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 19,
          dcp: 1,
        },
        {
          playerID: "AD-1587",
          playerFirst: "Ashton",
          playerLast: "Dulin",
          playerFull: "Ashton Dulin",
          position: "WR",
          startYear: 2019,
          currentTeam: "IND",
          height: 73,
          weight: 215,
          dob: "5/15/97",
          forty: 4.43,
          bench: 13,
          vertical: 38.0,
          broad: 121,
          shuttle: 4.22,
          cone: 7.0,
          arm: 33.38,
          hand: 9.0,
          dpos: 0.0,
          col: "Malone",
          dv: "N/A",
          jnum: 16,
          dcp: 2,
        },
        {
          playerID: "AE-1037",
          playerFirst: "Alex",
          playerLast: "Erickson",
          playerFull: "Alex Erickson",
          position: "WR",
          startYear: 2016,
          currentTeam: "CIN",
          height: 72,
          weight: 198,
          dob: "11/6/92",
          forty: 4.54,
          bench: 14,
          vertical: 34.5,
          broad: 116,
          shuttle: 4.1,
          cone: 6.68,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 12,
          dcp: 2,
        },
        {
          playerID: "AH-3450",
          playerFirst: "Alexander",
          playerLast: "Hollins",
          playerFull: "Alexander Hollins",
          position: "WR",
          startYear: 2019,
          currentTeam: "MIN",
          height: 72,
          weight: 162,
          dob: "11/24/96",
          forty: 4.49,
          bench: 5,
          vertical: 37.0,
          broad: 128,
          shuttle: 4.18,
          cone: 6.89,
          arm: 30.25,
          hand: 8.5,
          dpos: 0.0,
          col: "Eastern Illinois",
          dv: "Ohio Valley",
          jnum: 15,
          dcp: 3,
        },
      ]);
    });
};
