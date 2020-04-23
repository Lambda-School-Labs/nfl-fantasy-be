exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "RM-2050",
          playerFirst: "Ray-Ray",
          playerLast: "McCloud",
          playerFull: "Ray-Ray McCloud",
          position: "RB",
          startYear: 2018,
          currentTeam: "BUF",
          height: 69,
          weight: 190,
          dob: "10/15/96",
          forty: 4.53,
          bench: 13,
          vertical: 34.5,
          broad: 113,
          shuttle: 4.32,
          cone: 6.89,
          arm: 30.25,
          hand: 9.25,
          dpos: 187.0,
          col: "Clemson",
          dv: "Atlantic Coast (ACC)",
          jnum: 14,
          dcp: 5,
        },
        {
          playerID: "RM-5050",
          playerFirst: "Raheem",
          playerLast: "Mostert",
          playerFull: "Raheem Mostert",
          position: "RB",
          startYear: 2015,
          currentTeam: "SF",
          height: 71,
          weight: 190,
          dob: "4/9/92",
          forty: 4.38,
          bench: 20,
          vertical: 40.0,
          broad: 132,
          shuttle: 4.3,
          cone: 6.9,
          arm: 30.88,
          hand: 9.75,
          dpos: 0.0,
          col: "Purdue",
          dv: "Big Ten",
          jnum: 31,
          dcp: 1,
        },
        {
          playerID: "RN-0025",
          playerFirst: "Ryan",
          playerLast: "Nall",
          playerFull: "Ryan Nall",
          position: "RB",
          startYear: 2018,
          currentTeam: "CHI",
          height: 74,
          weight: 232,
          dob: "12/27/95",
          forty: 4.58,
          bench: 15,
          vertical: 34.0,
          broad: 122,
          shuttle: 4.16,
          cone: 6.95,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Oregon State",
          dv: "Pacific 12",
          jnum: 35,
          dcp: 3,
        },
        {
          playerID: "RN-1250",
          playerFirst: "Roosevelt",
          playerLast: "Nix",
          playerFull: "Roosevelt Nix",
          position: "RB",
          startYear: 2014,
          currentTeam: "PIT",
          height: 71,
          weight: 265,
          dob: "3/30/92",
          forty: 4.79,
          bench: 22,
          vertical: 28.0,
          broad: 110,
          shuttle: 4.39,
          cone: 6.97,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Kent State",
          dv: "Mid-American (MAC)",
          jnum: 45,
          dcp: 2,
        },
        {
          playerID: "RO-0550",
          playerFirst: "Ricky",
          playerLast: "Ortiz",
          playerFull: "Ricky Ortiz",
          position: "RB",
          startYear: 2017,
          currentTeam: "NO",
          height: 72,
          weight: 235,
          dob: "4/15/94",
          forty: 4.9,
          bench: 26,
          vertical: 33.5,
          broad: 118,
          shuttle: 4.46,
          cone: 7.19,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Oregon State",
          dv: "Pacific 12",
          jnum: 30,
          dcp: 4,
        },
        {
          playerID: "RP-0550",
          playerFirst: "Rashaad",
          playerLast: "Penny",
          playerFull: "Rashaad Penny",
          position: "RB",
          startYear: 2018,
          currentTeam: "SEA",
          height: 71,
          weight: 220,
          dob: "2/2/96",
          forty: 4.46,
          bench: 13,
          vertical: 32.5,
          broad: 120,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.25,
          hand: 9.25,
          dpos: 27.0,
          col: "San Diego State",
          dv: "Mountain West (MWC)",
          jnum: 20,
          dcp: 5,
        },
        {
          playerID: "SB-0212",
          playerFirst: "Saquon",
          playerLast: "Barkley",
          playerFull: "Saquon Barkley",
          position: "RB",
          startYear: 2018,
          currentTeam: "NYG",
          height: 72,
          weight: 233,
          dob: "2/7/97",
          forty: 4.4,
          bench: 29,
          vertical: 41.0,
          broad: 0,
          shuttle: 4.24,
          cone: 0.0,
          arm: 31.38,
          hand: 9.5,
          dpos: 2.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 26,
          dcp: 1,
        },
        {
          playerID: "SM-2625",
          playerFirst: "Sony",
          playerLast: "Michel",
          playerFull: "Sony Michel",
          position: "RB",
          startYear: 2018,
          currentTeam: "NE",
          height: 71,
          weight: 214,
          dob: "2/17/95",
          forty: 4.54,
          bench: 22,
          vertical: 0.0,
          broad: 0,
          shuttle: 4.21,
          cone: 0.0,
          arm: 31.25,
          hand: 9.13,
          dpos: 31.0,
          col: "Georgia",
          dv: "Southeastern (SEC)",
          jnum: 26,
          dcp: 1,
        },
        {
          playerID: "SP-0825",
          playerFirst: "Samaje",
          playerLast: "Perine",
          playerFull: "Samaje Perine",
          position: "RB",
          startYear: 2017,
          currentTeam: "MIA",
          height: 71,
          weight: 233,
          dob: "9/16/95",
          forty: 4.65,
          bench: 30,
          vertical: 33.0,
          broad: 116,
          shuttle: 4.37,
          cone: 7.26,
          arm: 30.38,
          hand: 10.0,
          dpos: 114.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 29,
          dcp: 3,
        },
        {
          playerID: "SP-0850",
          playerFirst: "Senorise",
          playerLast: "Perry",
          playerFull: "Senorise Perry",
          position: "RB",
          startYear: 2014,
          currentTeam: "BUF",
          height: 72,
          weight: 187,
          dob: "9/19/91",
          forty: 4.4,
          bench: 18,
          vertical: 37.0,
          broad: 126,
          shuttle: 4.43,
          cone: 6.89,
          arm: 31.5,
          hand: 9.5,
          dpos: 0.0,
          col: "Louisville",
          dv: "American Athletic",
          jnum: 32,
          dcp: 4,
        },
        {
          playerID: "SW-0350",
          playerFirst: "Spencer",
          playerLast: "Ware",
          playerFull: "Spencer Ware",
          position: "RB",
          startYear: 2013,
          currentTeam: "KC",
          height: 70,
          weight: 228,
          dob: "11/23/91",
          forty: 4.62,
          bench: 17,
          vertical: 35.5,
          broad: 119,
          shuttle: 4.27,
          cone: 7.07,
          arm: 30.13,
          hand: 9.63,
          dpos: 194.0,
          col: "LSU",
          dv: "Southeastern (SEC)",
          jnum: 39,
          dcp: 3,
        },
        {
          playerID: "TB-2775",
          playerFirst: "Tony",
          playerLast: "Brooks-James",
          playerFull: "Tony Brooks-James",
          position: "RB",
          startYear: 2019,
          currentTeam: "MIN",
          height: 69,
          weight: 176,
          dob: "12/6/94",
          forty: 4.49,
          bench: 15,
          vertical: 35.5,
          broad: 127,
          shuttle: 4.27,
          cone: 7.06,
          arm: 30.13,
          hand: 8.75,
          dpos: 0.0,
          col: "Oregon",
          dv: "Pacific 12",
          jnum: 35,
          dcp: 2,
        },
        {
          playerID: "TC-0325",
          playerFirst: "Trenton",
          playerLast: "Cannon",
          playerFull: "Trenton Cannon",
          position: "RB",
          startYear: 2018,
          currentTeam: "NYJ",
          height: 70,
          weight: 182,
          dob: "7/23/94",
          forty: 4.4,
          bench: 17,
          vertical: 38.5,
          broad: 129,
          shuttle: 4.04,
          cone: 7.02,
          arm: 0.0,
          hand: 0.0,
          dpos: 204.0,
          col: "Virginia State",
          dv: "N/A",
          jnum: 25,
          dcp: 1,
        },
        {
          playerID: "TC-0450",
          playerFirst: "Tra",
          playerLast: "Carson",
          playerFull: "Tra Carson",
          position: "RB",
          startYear: 2016,
          currentTeam: "DET",
          height: 71,
          weight: 227,
          dob: "10/24/92",
          forty: 4.64,
          bench: 19,
          vertical: 37.0,
          broad: 115,
          shuttle: 4.27,
          cone: 7.1,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Texas A&M",
          dv: "Southeastern (SEC)",
          jnum: 34,
          dcp: 5,
        },
        {
          playerID: "TC-1975",
          playerFirst: "Tarik",
          playerLast: "Cohen",
          playerFull: "Tarik Cohen",
          position: "RB",
          startYear: 2017,
          currentTeam: "CHI",
          height: 66,
          weight: 179,
          dob: "7/26/95",
          forty: 4.42,
          bench: 11,
          vertical: 31.5,
          broad: 118,
          shuttle: 4.27,
          cone: 7.22,
          arm: 29.75,
          hand: 10.13,
          dpos: 119.0,
          col: "North Carolina A&T",
          dv: "Mid-Eastern Athletic (MEAC)",
          jnum: 29,
          dcp: 1,
        },
        {
          playerID: "TC-2050",
          playerFirst: "Tevin",
          playerLast: "Coleman",
          playerFull: "Tevin Coleman",
          position: "RB",
          startYear: 2015,
          currentTeam: "SF",
          height: 71,
          weight: 206,
          dob: "4/16/93",
          forty: 4.4,
          bench: 22,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 8.63,
          dpos: 73.0,
          col: "Indiana",
          dv: "Big Ten",
          jnum: 26,
          dcp: 3,
        },
        {
          playerID: "TE-0025",
          playerFirst: "Trey",
          playerLast: "Edmunds",
          playerFull: "Trey Edmunds",
          position: "RB",
          startYear: 2017,
          currentTeam: "PIT",
          height: 74,
          weight: 227,
          dob: "12/30/94",
          forty: 4.48,
          bench: 0,
          vertical: 35.5,
          broad: 122,
          shuttle: 0.0,
          cone: 7.25,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Maryland",
          dv: "Big Ten",
          jnum: 33,
          dcp: 1,
        },
        {
          playerID: "TE-0350",
          playerFirst: "Tyler",
          playerLast: "Ervin",
          playerFull: "Tyler Ervin",
          position: "RB",
          startYear: 2016,
          currentTeam: "GB",
          height: 70,
          weight: 192,
          dob: "10/7/93",
          forty: 4.36,
          bench: 17,
          vertical: 39.0,
          broad: 130,
          shuttle: 4.34,
          cone: 7.03,
          arm: 29.75,
          hand: 9.13,
          dpos: 119.0,
          col: "San Jose State",
          dv: "Mountain West (MWC)",
          jnum: 32,
          dcp: 4,
        },
        {
          playerID: "TG-1950",
          playerFirst: "Todd",
          playerLast: "Gurley",
          playerFull: "Todd Gurley",
          position: "RB",
          startYear: 2015,
          currentTeam: "LA",
          height: 73,
          weight: 222,
          dob: "8/3/94",
          forty: 4.42,
          bench: 17,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.5,
          hand: 10.0,
          dpos: 10.0,
          col: "Georgia",
          dv: "Southeastern (SEC)",
          jnum: 30,
          dcp: 1,
        },
        {
          playerID: "TH-2337",
          playerFirst: "Travis",
          playerLast: "Homer",
          playerFull: "Travis Homer",
          position: "RB",
          startYear: 2019,
          currentTeam: "SEA",
          height: 70,
          weight: 201,
          dob: "8/7/98",
          forty: 4.48,
          bench: 17,
          vertical: 39.5,
          broad: 130,
          shuttle: 4.31,
          cone: 7.07,
          arm: 31.5,
          hand: 10.0,
          dpos: 204.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 25,
          dcp: 1,
        },
        {
          playerID: "TJ-2275",
          playerFirst: "Ty",
          playerLast: "Johnson",
          playerFull: "Ty Johnson",
          position: "RB",
          startYear: 2019,
          currentTeam: "DET",
          height: 70,
          weight: 213,
          dob: "9/17/97",
          forty: 4.4,
          bench: 13,
          vertical: 34.5,
          broad: 123,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.13,
          hand: 9.13,
          dpos: 186.0,
          col: "Maryland",
          dv: "Big Ten",
          jnum: 31,
          dcp: 3,
        },
        {
          playerID: "TJ-2400",
          playerFirst: "Taiwan",
          playerLast: "Jones",
          playerFull: "Taiwan Jones",
          position: "RB",
          startYear: 2011,
          currentTeam: "HOU",
          height: 72,
          weight: 194,
          dob: "7/26/88",
          forty: 4.53,
          bench: 13,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 29.5,
          hand: 8.75,
          dpos: 125.0,
          col: "Eastern Washington",
          dv: "Big Sky",
          jnum: 34,
          dcp: 3,
        },
        {
          playerID: "TL-1037",
          playerFirst: "T.J.",
          playerLast: "Logan",
          playerFull: "T.J. Logan",
          position: "RB",
          startYear: 2017,
          currentTeam: "TB",
          height: 69,
          weight: 196,
          dob: "9/3/94",
          forty: 4.37,
          bench: 17,
          vertical: 33.5,
          broad: 121,
          shuttle: 4.27,
          cone: 6.61,
          arm: 32.0,
          hand: 9.0,
          dpos: 179.0,
          col: "North Carolina",
          dv: "Atlantic Coast (ACC)",
          jnum: 22,
          dcp: 1,
        },
        {
          playerID: "TM-3150",
          playerFirst: "Ty",
          playerLast: "Montgomery",
          playerFull: "Ty Montgomery",
          position: "RB",
          startYear: 2015,
          currentTeam: "NYJ",
          height: 72,
          weight: 221,
          dob: "1/22/93",
          forty: 4.5,
          bench: 16,
          vertical: 40.5,
          broad: 121,
          shuttle: 4.21,
          cone: 6.97,
          arm: 31.0,
          hand: 10.13,
          dpos: 94.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "TP-1650",
          playerFirst: "Tony",
          playerLast: "Pollard",
          playerFull: "Tony Pollard",
          position: "RB",
          startYear: 2019,
          currentTeam: "DAL",
          height: 72,
          weight: 210,
          dob: "4/30/97",
          forty: 4.52,
          bench: 13,
          vertical: 35.0,
          broad: 121,
          shuttle: 4.37,
          cone: 7.0,
          arm: 30.0,
          hand: 9.5,
          dpos: 128.0,
          col: "Memphis",
          dv: "American Athletic",
          jnum: 20,
          dcp: 2,
        },
        {
          playerID: "TP-1950",
          playerFirst: "Troymaine",
          playerLast: "Pope",
          playerFull: "Troymaine Pope",
          position: "RB",
          startYear: 2016,
          currentTeam: "LAC",
          height: 67,
          weight: 205,
          dob: "11/26/93",
          forty: 4.55,
          bench: 25,
          vertical: 35.0,
          broad: 120,
          shuttle: 4.21,
          cone: 6.87,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Jacksonville State",
          dv: "Ohio Valley",
          jnum: 35,
          dcp: 4,
        },
        {
          playerID: "TW-1325",
          playerFirst: "Trevon",
          playerLast: "Wesco",
          playerFull: "Trevon Wesco",
          position: "RB",
          startYear: 2019,
          currentTeam: "NYJ",
          height: 75,
          weight: 267,
          dob: "9/12/95",
          forty: 4.89,
          bench: 24,
          vertical: 31.0,
          broad: 117,
          shuttle: 4.38,
          cone: 7.18,
          arm: 34.75,
          hand: 9.5,
          dpos: 121.0,
          col: "West Virginia",
          dv: "Big 12",
          jnum: 85,
          dcp: 2,
        },
        {
          playerID: "TY-0150",
          playerFirst: "T.J.",
          playerLast: "Yeldon",
          playerFull: "T.J. Yeldon",
          position: "RB",
          startYear: 2015,
          currentTeam: "BUF",
          height: 73,
          weight: 226,
          dob: "10/2/93",
          forty: 4.52,
          bench: 22,
          vertical: 36.0,
          broad: 117,
          shuttle: 4.22,
          cone: 7.19,
          arm: 31.63,
          hand: 9.0,
          dpos: 36.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 22,
          dcp: 3,
        },
        {
          playerID: "WG-0050",
          playerFirst: "Wayne",
          playerLast: "Gallman",
          playerFull: "Wayne Gallman",
          position: "RB",
          startYear: 2017,
          currentTeam: "NYG",
          height: 72,
          weight: 215,
          dob: "10/1/94",
          forty: 4.6,
          bench: 21,
          vertical: 30.5,
          broad: 120,
          shuttle: 4.28,
          cone: 7.17,
          arm: 32.63,
          hand: 9.13,
          dpos: 140.0,
          col: "Clemson",
          dv: "Atlantic Coast (ACC)",
          jnum: 22,
          dcp: 3,
        },
        {
          playerID: "WH-0762",
          playerFirst: "Wes",
          playerLast: "Hills",
          playerFull: "Wes Hills",
          position: "RB",
          startYear: 2019,
          currentTeam: "DET",
          height: 73,
          weight: 214,
          dob: "6/5/95",
          forty: 4.59,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.38,
          hand: 8.88,
          dpos: 0.0,
          col: "Slippery Rock",
          dv: "N/A",
          jnum: 36,
          dcp: 5,
        },
        {
          playerID: "WS-0650",
          playerFirst: "Wendell",
          playerLast: "Smallwood",
          playerFull: "Wendell Smallwood",
          position: "RB",
          startYear: 2016,
          currentTeam: "WAS",
          height: 70,
          weight: 208,
          dob: "1/20/94",
          forty: 4.42,
          bench: 18,
          vertical: 33.5,
          broad: 120,
          shuttle: 4.28,
          cone: 6.83,
          arm: 30.5,
          hand: 9.25,
          dpos: 153.0,
          col: "West Virginia",
          dv: "Big 12",
          jnum: 34,
          dcp: 2,
        },
        {
          playerID: "ZL-0200",
          playerFirst: "Zach",
          playerLast: "Line",
          playerFull: "Zach Line",
          position: "RB",
          startYear: 2013,
          currentTeam: "NO",
          height: 72,
          weight: 232,
          dob: "4/26/90",
          forty: 4.77,
          bench: 26,
          vertical: 33.0,
          broad: 117,
          shuttle: 4.4,
          cone: 7.12,
          arm: 30.75,
          hand: 8.75,
          dpos: 0.0,
          col: "SMU",
          dv: "Conference USA (C-USA)",
          jnum: 42,
          dcp: 1,
        },
        {
          playerID: "ZZ-0100",
          playerFirst: "Zach",
          playerLast: "Zenner",
          playerFull: "Zach Zenner",
          position: "RB",
          startYear: 2015,
          currentTeam: "INA",
          height: 71,
          weight: 223,
          dob: "9/13/91",
          forty: 4.5,
          bench: 25,
          vertical: 41.0,
          broad: 121,
          shuttle: 4.14,
          cone: 7.08,
          arm: 32.0,
          hand: 9.63,
          dpos: 0.0,
          col: "South Dakota State",
          dv: "Missouri Valley",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "AA-0581",
          playerFirst: "Antony",
          playerLast: "Auclair",
          playerFull: "Antony Auclair",
          position: "TE",
          startYear: 2017,
          currentTeam: "TB",
          height: 78,
          weight: 256,
          dob: "5/28/93",
          forty: 4.9,
          bench: 22,
          vertical: 33.5,
          broad: 117,
          shuttle: 4.37,
          cone: 7.3,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Laval",
          dv: "N/A",
          jnum: 82,
          dcp: 5,
        },
        {
          playerID: "AF-0550",
          playerFirst: "Anthony",
          playerLast: "Firkser",
          playerFull: "Anthony Firkser",
          position: "TE",
          startYear: 2017,
          currentTeam: "TEN",
          height: 74,
          weight: 230,
          dob: "2/19/95",
          forty: 4.82,
          bench: 21,
          vertical: 31.5,
          broad: 110,
          shuttle: 4.29,
          cone: 7.06,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Harvard",
          dv: "Ivy League",
          jnum: 86,
          dcp: 1,
        },
        {
          playerID: "AH-3650",
          playerFirst: "Austin",
          playerLast: "Hooper",
          playerFull: "Austin Hooper",
          position: "TE",
          startYear: 2016,
          currentTeam: "ATL",
          height: 76,
          weight: 254,
          dob: "11/4/94",
          forty: 4.69,
          bench: 19,
          vertical: 33.0,
          broad: 117,
          shuttle: 4.32,
          cone: 7.0,
          arm: 33.75,
          hand: 10.63,
          dpos: 81.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 81,
          dcp: 1,
        },
        {
          playerID: "AS-0775",
          playerFirst: "Adam",
          playerLast: "Shaheen",
          playerFull: "Adam Shaheen",
          position: "TE",
          startYear: 2017,
          currentTeam: "CHI",
          height: 78,
          weight: 278,
          dob: "10/24/93",
          forty: 4.79,
          bench: 24,
          vertical: 32.5,
          broad: 121,
          shuttle: 4.38,
          cone: 7.09,
          arm: 33.5,
          hand: 9.63,
          dpos: 45.0,
          col: "Ashland",
          dv: "N/A",
          jnum: 87,
          dcp: 3,
        },
        {
          playerID: "BB-1550",
          playerFirst: "Blake",
          playerLast: "Bell",
          playerFull: "Blake Bell",
          position: "TE",
          startYear: 2015,
          currentTeam: "KC",
          height: 78,
          weight: 252,
          dob: "8/7/91",
          forty: 4.77,
          bench: 18,
          vertical: 33.0,
          broad: 116,
          shuttle: 4.32,
          cone: 6.85,
          arm: 33.13,
          hand: 10.0,
          dpos: 117.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 81,
          dcp: 2,
        },
        {
          playerID: "BB-2712",
          playerFirst: "Ben",
          playerLast: "Braunecker",
          playerFull: "Ben Braunecker",
          position: "TE",
          startYear: 2016,
          currentTeam: "CHI",
          height: 75,
          weight: 250,
          dob: "2/7/94",
          forty: 4.68,
          bench: 20,
          vertical: 37.5,
          broad: 121,
          shuttle: 4.2,
          cone: 6.9,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Harvard",
          dv: "Ivy League",
          jnum: 82,
          dcp: 4,
        },
        {
          playerID: "BJ-0950",
          playerFirst: "Blake",
          playerLast: "Jarwin",
          playerFull: "Blake Jarwin",
          position: "TE",
          startYear: 2017,
          currentTeam: "DAL",
          height: 77,
          weight: 244,
          dob: "7/16/94",
          forty: 4.73,
          bench: 21,
          vertical: 34.5,
          broad: 121,
          shuttle: 4.39,
          cone: 7.44,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Oklahoma State",
          dv: "Big 12",
          jnum: 89,
          dcp: 2,
        },
      ]);
    });
};
