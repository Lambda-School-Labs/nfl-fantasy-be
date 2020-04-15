exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "IT-0150",
          playerFirst: "Ian",
          playerLast: "Thomas",
          playerFull: "Ian Thomas",
          position: "TE",
          startYear: 2018,
          currentTeam: "CAR",
          height: 76,
          weight: 259,
          dob: "6/6/96",
          forty: 4.65,
          bench: 0,
          vertical: 36.0,
          broad: 123,
          shuttle: 4.2,
          cone: 7.15,
          arm: 32.5,
          hand: 10.5,
          dpos: 101.0,
          col: "Indiana",
          dv: "Big Ten",
          jnum: 80,
          dcp: 2,
        },
        {
          playerID: "JA-0462",
          playerFirst: "Jordan",
          playerLast: "Akins",
          playerFull: "Jordan Akins",
          position: "TE",
          startYear: 2018,
          currentTeam: "HOU",
          height: 75,
          weight: 249,
          dob: "4/19/92",
          forty: 4.93,
          bench: 24,
          vertical: 35.0,
          broad: 122,
          shuttle: 4.38,
          cone: 7.29,
          arm: 33.5,
          hand: 9.25,
          dpos: 98.0,
          col: "Central Florida",
          dv: "American Athletic",
          jnum: 88,
          dcp: 2,
        },
        {
          playerID: "JC-4300",
          playerFirst: "Jared",
          playerLast: "Cook",
          playerFull: "Jared Cook",
          position: "TE",
          startYear: 2009,
          currentTeam: "NO",
          height: 77,
          weight: 248,
          dob: "4/7/87",
          forty: 4.49,
          bench: 23,
          vertical: 41.0,
          broad: 123,
          shuttle: 0.0,
          cone: 0.0,
          arm: 35.75,
          hand: 10.25,
          dpos: 89.0,
          col: "South Carolina",
          dv: "Southeastern (SEC)",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "JD-2550",
          playerFirst: "Jack",
          playerLast: "Doyle",
          playerFull: "Jack Doyle",
          position: "TE",
          startYear: 2013,
          currentTeam: "IND",
          height: 75,
          weight: 254,
          dob: "5/5/90",
          forty: 4.86,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Western Kentucky",
          dv: "Sun Belt",
          jnum: 84,
          dcp: 1,
        },
        {
          playerID: "JG-2687",
          playerFirst: "Jaeden",
          playerLast: "Graham",
          playerFull: "Jaeden Graham",
          position: "TE",
          startYear: 2018,
          currentTeam: "ATL",
          height: 76,
          weight: 230,
          dob: "10/10/95",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Yale",
          dv: "Ivy League",
          jnum: 87,
          dcp: 3,
        },
        {
          playerID: "JG-2900",
          playerFirst: "Jimmy",
          playerLast: "Graham",
          playerFull: "Jimmy Graham",
          position: "TE",
          startYear: 2010,
          currentTeam: "GB",
          height: 78,
          weight: 259,
          dob: "11/24/86",
          forty: 4.53,
          bench: 0,
          vertical: 38.5,
          broad: 120,
          shuttle: 4.45,
          cone: 6.9,
          arm: 35.0,
          hand: 10.63,
          dpos: 95.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 80,
          dcp: 1,
        },
        {
          playerID: "JH-3625",
          playerFirst: "Jeff",
          playerLast: "Heuerman",
          playerFull: "Jeff Heuerman",
          position: "TE",
          startYear: 2015,
          currentTeam: "DEN",
          height: 77,
          weight: 254,
          dob: "11/24/92",
          forty: 4.81,
          bench: 26,
          vertical: 34.5,
          broad: 120,
          shuttle: 0.0,
          cone: 0.0,
          arm: 33.25,
          hand: 10.13,
          dpos: 92.0,
          col: "Ohio State",
          dv: "Big Ten",
          jnum: 82,
          dcp: 1,
        },
        {
          playerID: "JH-4070",
          playerFirst: "Josh",
          playerLast: "Hill",
          playerFull: "Josh Hill",
          position: "TE",
          startYear: 2013,
          currentTeam: "NO",
          height: 77,
          weight: 229,
          dob: "5/21/90",
          forty: 4.67,
          bench: 20,
          vertical: 36.5,
          broad: 127,
          shuttle: 4.19,
          cone: 7.0,
          arm: 33.0,
          hand: 9.0,
          dpos: 0.0,
          col: "Idaho State",
          dv: "Big Sky",
          jnum: 89,
          dcp: 2,
        },
        {
          playerID: "JH-4850",
          playerFirst: "Jacob",
          playerLast: "Hollister",
          playerFull: "Jacob Hollister",
          position: "TE",
          startYear: 2017,
          currentTeam: "SEA",
          height: 76,
          weight: 239,
          dob: "11/18/93",
          forty: 4.64,
          bench: 0,
          vertical: 36.5,
          broad: 121,
          shuttle: 4.34,
          cone: 7.12,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Wyoming",
          dv: "Mountain West (MWC)",
          jnum: 48,
          dcp: 2,
        },
        {
          playerID: "JH-5150",
          playerFirst: "J.P.",
          playerLast: "Holtz",
          playerFull: "J.P. Holtz",
          position: "TE",
          startYear: 2016,
          currentTeam: "CHI",
          height: 75,
          weight: 242,
          dob: "8/28/93",
          forty: 4.79,
          bench: 20,
          vertical: 33.0,
          broad: 112,
          shuttle: 4.33,
          cone: 6.92,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Pittsburgh",
          dv: "Atlantic Coast (ACC)",
          jnum: 81,
          dcp: 1,
        },
        {
          playerID: "JH-5350",
          playerFirst: "Jesper",
          playerLast: "Horsted",
          playerFull: "Jesper Horsted",
          position: "TE",
          startYear: 2019,
          currentTeam: "CHI",
          height: 75,
          weight: 224,
          dob: "2/27/97",
          forty: 4.77,
          bench: 14,
          vertical: 32.0,
          broad: 118,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.13,
          hand: 9.88,
          dpos: 0.0,
          col: "Princeton",
          dv: "Ivy League",
          jnum: 49,
          dcp: 3,
        },
        {
          playerID: "JJ-0725",
          playerFirst: "Jesse",
          playerLast: "James",
          playerFull: "Jesse James",
          position: "TE",
          startYear: 2015,
          currentTeam: "DET",
          height: 79,
          weight: 261,
          dob: "6/4/94",
          forty: 4.69,
          bench: 26,
          vertical: 37.5,
          broad: 121,
          shuttle: 4.5,
          cone: 7.53,
          arm: 33.0,
          hand: 9.38,
          dpos: 160.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 83,
          dcp: 1,
        },
        {
          playerID: "JM-6775",
          playerFirst: "Johnny",
          playerLast: "Mundt",
          playerFull: "Johnny Mundt",
          position: "TE",
          startYear: 2017,
          currentTeam: "LA",
          height: 76,
          weight: 231,
          dob: "11/23/94",
          forty: 4.74,
          bench: 21,
          vertical: 30.0,
          broad: 113,
          shuttle: 4.24,
          cone: 7.21,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Oregon",
          dv: "Pacific 12",
          jnum: 82,
          dcp: 3,
        },
        {
          playerID: "JO-0150",
          playerFirst: "James",
          playerLast: "O'Shaughnessy",
          playerFull: "James O'Shaughnessy",
          position: "TE",
          startYear: 2015,
          currentTeam: "JAC",
          height: 76,
          weight: 248,
          dob: "1/14/92",
          forty: 4.68,
          bench: 16,
          vertical: 35.0,
          broad: 116,
          shuttle: 4.38,
          cone: 7.2,
          arm: 32.13,
          hand: 9.75,
          dpos: 173.0,
          col: "Illinois State",
          dv: "Missouri Valley",
          jnum: 80,
          dcp: 2,
        },
        {
          playerID: "JO-0562",
          playerFirst: "Josh",
          playerLast: "Oliver",
          playerFull: "Josh Oliver",
          position: "TE",
          startYear: 2019,
          currentTeam: "JAC",
          height: 77,
          weight: 249,
          dob: "3/21/97",
          forty: 4.63,
          bench: 22,
          vertical: 34.0,
          broad: 117,
          shuttle: 4.47,
          cone: 7.21,
          arm: 33.5,
          hand: 10.75,
          dpos: 69.0,
          col: "San Jose State",
          dv: "Mountain West (MWC)",
          jnum: 89,
          dcp: 2,
        },
        {
          playerID: "JP-2075",
          playerFirst: "Josh",
          playerLast: "Perkins",
          playerFull: "Josh Perkins",
          position: "TE",
          startYear: 2016,
          currentTeam: "PHI",
          height: 75,
          weight: 225,
          dob: "8/5/93",
          forty: 4.65,
          bench: 12,
          vertical: 34.0,
          broad: 126,
          shuttle: 4.38,
          cone: 7.04,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Washington",
          dv: "Pacific 12",
          jnum: 81,
          dcp: 3,
        },
        {
          playerID: "JS-4550",
          playerFirst: "Jonnu",
          playerLast: "Smith",
          playerFull: "Jonnu Smith",
          position: "TE",
          startYear: 2017,
          currentTeam: "TEN",
          height: 75,
          weight: 248,
          dob: "2/22/95",
          forty: 4.62,
          bench: 22,
          vertical: 38.0,
          broad: 126,
          shuttle: 4.18,
          cone: 7.43,
          arm: 32.88,
          hand: 9.25,
          dpos: 100.0,
          col: "Florida International",
          dv: "Conference USA (C-USA)",
          jnum: 81,
          dcp: 1,
        },
        {
          playerID: "JS-5475",
          playerFirst: "Jeremy",
          playerLast: "Sprinkle",
          playerFull: "Jeremy Sprinkle",
          position: "TE",
          startYear: 2017,
          currentTeam: "WAS",
          height: 77,
          weight: 252,
          dob: "8/10/94",
          forty: 4.69,
          bench: 15,
          vertical: 30.5,
          broad: 116,
          shuttle: 4.53,
          cone: 7.1,
          arm: 34.5,
          hand: 10.75,
          dpos: 154.0,
          col: "Arkansas",
          dv: "Southeastern (SEC)",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "JS-6325",
          playerFirst: "Jace",
          playerLast: "Sternberger",
          playerFull: "Jace Sternberger",
          position: "TE",
          startYear: 2019,
          currentTeam: "GB",
          height: 76,
          weight: 251,
          dob: "6/26/96",
          forty: 4.75,
          bench: 17,
          vertical: 31.5,
          broad: 113,
          shuttle: 4.31,
          cone: 7.19,
          arm: 32.13,
          hand: 9.75,
          dpos: 75.0,
          col: "Texas A&M",
          dv: "Southeastern (SEC)",
          jnum: 87,
          dcp: 4,
        },
        {
          playerID: "JT-1775",
          playerFirst: "Jordan",
          playerLast: "Thomas",
          playerFull: "Jordan Thomas",
          position: "TE",
          startYear: 2018,
          currentTeam: "HOU",
          height: 77,
          weight: 265,
          dob: "8/2/96",
          forty: 4.74,
          bench: 16,
          vertical: 29.5,
          broad: 111,
          shuttle: 4.64,
          cone: 7.41,
          arm: 34.13,
          hand: 11.63,
          dpos: 211.0,
          col: "Mississippi State",
          dv: "Southeastern (SEC)",
          jnum: 83,
          dcp: 3,
        },
        {
          playerID: "JV-0050",
          playerFirst: "Jason",
          playerLast: "Vander Laan",
          playerFull: "Jason Vander Laan",
          position: "TE",
          startYear: 2016,
          currentTeam: "NO",
          height: 75,
          weight: 239,
          dob: "9/22/92",
          forty: 4.78,
          bench: 27,
          vertical: 30.5,
          broad: 119,
          shuttle: 4.16,
          cone: 6.76,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Ferris State",
          dv: "N/A",
          jnum: 86,
          dcp: 5,
        },
        {
          playerID: "JW-6000",
          playerFirst: "Jason",
          playerLast: "Witten",
          playerFull: "Jason Witten",
          position: "TE",
          startYear: 2003,
          currentTeam: "DAL",
          height: 78,
          weight: 261,
          dob: "5/6/82",
          forty: 4.65,
          bench: 25,
          vertical: 31.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 69.0,
          col: "Tennessee",
          dv: "Southeastern (SEC)",
          jnum: 82,
          dcp: 1,
        },
        {
          playerID: "KR-1200",
          playerFirst: "Kyle",
          playerLast: "Rudolph",
          playerFull: "Kyle Rudolph",
          position: "TE",
          startYear: 2011,
          currentTeam: "MIN",
          height: 78,
          weight: 258,
          dob: "11/9/89",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 34.0,
          hand: 10.63,
          dpos: 43.0,
          col: "Notre Dame",
          dv: "FBS Independents",
          jnum: 82,
          dcp: 1,
        },
        {
          playerID: "KS-1375",
          playerFirst: "Kaden",
          playerLast: "Smith",
          playerFull: "Kaden Smith",
          position: "TE",
          startYear: 2019,
          currentTeam: "NYG",
          height: 77,
          weight: 255,
          dob: "4/24/97",
          forty: 4.92,
          bench: 15,
          vertical: 32.0,
          broad: 108,
          shuttle: 4.47,
          cone: 7.08,
          arm: 32.25,
          hand: 9.63,
          dpos: 176.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 82,
          dcp: 1,
        },
        {
          playerID: "LK-0200",
          playerFirst: "Lance",
          playerLast: "Kendricks",
          playerFull: "Lance Kendricks",
          position: "TE",
          startYear: 2011,
          currentTeam: "LAC",
          height: 75,
          weight: 243,
          dob: "1/30/88",
          forty: 4.65,
          bench: 25,
          vertical: 34.5,
          broad: 122,
          shuttle: 4.15,
          cone: 6.94,
          arm: 32.0,
          hand: 9.5,
          dpos: 47.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 87,
          dcp: 3,
        },
        {
          playerID: "LS-1550",
          playerFirst: "Lee",
          playerLast: "Smith",
          playerFull: "Lee Smith",
          position: "TE",
          startYear: 2011,
          currentTeam: "BUF",
          height: 78,
          weight: 269,
          dob: "11/21/87",
          forty: 4.94,
          bench: 25,
          vertical: 29.0,
          broad: 108,
          shuttle: 4.28,
          cone: 7.16,
          arm: 34.38,
          hand: 9.75,
          dpos: 159.0,
          col: "Marshall",
          dv: "Conference USA (C-USA)",
          jnum: 85,
          dcp: 3,
        },
        {
          playerID: "LS-1900",
          playerFirst: "Luke",
          playerLast: "Stocker",
          playerFull: "Luke Stocker",
          position: "TE",
          startYear: 2011,
          currentTeam: "ATL",
          height: 77,
          weight: 253,
          dob: "7/17/88",
          forty: 4.68,
          bench: 27,
          vertical: 33.0,
          broad: 115,
          shuttle: 4.4,
          cone: 7.03,
          arm: 33.0,
          hand: 9.63,
          dpos: 104.0,
          col: "Tennessee",
          dv: "Southeastern (SEC)",
          jnum: 80,
          dcp: 2,
        },
        {
          playerID: "LT-0275",
          playerFirst: "Logan",
          playerLast: "Thomas",
          playerFull: "Logan Thomas",
          position: "TE",
          startYear: 2014,
          currentTeam: "DET",
          height: 78,
          weight: 248,
          dob: "7/1/91",
          forty: 4.54,
          bench: 0,
          vertical: 35.5,
          broad: 118,
          shuttle: 4.18,
          cone: 7.05,
          arm: 34.25,
          hand: 10.88,
          dpos: 120.0,
          col: "Virginia Tech",
          dv: "Atlantic Coast (ACC)",
          jnum: 82,
          dcp: 2,
        },
        {
          playerID: "LT-0550",
          playerFirst: "Levine",
          playerLast: "Toilolo",
          playerFull: "Levine Toilolo",
          position: "TE",
          startYear: 2013,
          currentTeam: "SF",
          height: 80,
          weight: 260,
          dob: "7/30/91",
          forty: 4.79,
          bench: 19,
          vertical: 33.5,
          broad: 117,
          shuttle: 4.57,
          cone: 7.09,
          arm: 34.5,
          hand: 10.25,
          dpos: 133.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 83,
          dcp: 3,
        },
        {
          playerID: "LW-1450",
          playerFirst: "Luke",
          playerLast: "Willson",
          playerFull: "Luke Willson",
          position: "TE",
          startYear: 2013,
          currentTeam: "SEA",
          height: 77,
          weight: 250,
          dob: "1/15/90",
          forty: 4.51,
          bench: 23,
          vertical: 38.0,
          broad: 122,
          shuttle: 4.29,
          cone: 7.08,
          arm: 32.25,
          hand: 9.38,
          dpos: 158.0,
          col: "Rice",
          dv: "Conference USA (C-USA)",
          jnum: 82,
          dcp: 1,
        },
        {
          playerID: "MA-0487",
          playerFirst: "Mo",
          playerLast: "Alie-Cox",
          playerFull: "Mo Alie-Cox",
          position: "TE",
          startYear: 2017,
          currentTeam: "IND",
          height: 78,
          weight: 260,
          dob: "9/19/93",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Virginia Commonwealth",
          dv: "N/A",
          jnum: 81,
          dcp: 2,
        },
        {
          playerID: "MA-1050",
          playerFirst: "Mark",
          playerLast: "Andrews",
          playerFull: "Mark Andrews",
          position: "TE",
          startYear: 2018,
          currentTeam: "BAL",
          height: 77,
          weight: 256,
          dob: "9/6/95",
          forty: 4.58,
          bench: 17,
          vertical: 31.0,
          broad: 113,
          shuttle: 4.38,
          cone: 7.34,
          arm: 32.5,
          hand: 9.5,
          dpos: 86.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 89,
          dcp: 2,
        },
        {
          playerID: "MG-0325",
          playerFirst: "Mike",
          playerLast: "Gesicki",
          playerFull: "Mike Gesicki",
          position: "TE",
          startYear: 2018,
          currentTeam: "MIA",
          height: 77,
          weight: 247,
          dob: "10/3/95",
          forty: 4.54,
          bench: 22,
          vertical: 41.5,
          broad: 129,
          shuttle: 4.1,
          cone: 6.76,
          arm: 34.13,
          hand: 10.25,
          dpos: 42.0,
          col: "Penn State",
          dv: "Big Ten",
          jnum: 88,
          dcp: 1,
        },
        {
          playerID: "ML-0050",
          playerFirst: "Matt",
          playerLast: "LaCosse",
          playerFull: "Matt LaCosse",
          position: "TE",
          startYear: 2015,
          currentTeam: "NE",
          height: 78,
          weight: 250,
          dob: "9/21/92",
          forty: 4.71,
          bench: 20,
          vertical: 30.0,
          broad: 116,
          shuttle: 4.57,
          cone: 7.3,
          arm: 31.0,
          hand: 8.38,
          dpos: 0.0,
          col: "Illinois",
          dv: "Big Ten",
          jnum: 83,
          dcp: 2,
        },
        {
          playerID: "ML-1500",
          playerFirst: "Marcedes",
          playerLast: "Lewis",
          playerFull: "Marcedes Lewis",
          position: "TE",
          startYear: 2006,
          currentTeam: "GB",
          height: 78,
          weight: 275,
          dob: "5/19/84",
          forty: 4.8,
          bench: 23,
          vertical: 37.0,
          broad: 118,
          shuttle: 4.84,
          cone: 7.24,
          arm: 35.0,
          hand: 0.0,
          dpos: 28.0,
          col: "UCLA",
          dv: "Pacific 10",
          jnum: 89,
          dcp: 2,
        },
        {
          playerID: "MP-2350",
          playerFirst: "MyCole",
          playerLast: "Pruitt",
          playerFull: "MyCole Pruitt",
          position: "TE",
          startYear: 2015,
          currentTeam: "TEN",
          height: 74,
          weight: 251,
          dob: "3/24/92",
          forty: 4.52,
          bench: 17,
          vertical: 38.0,
          broad: 118,
          shuttle: 4.37,
          cone: 7.25,
          arm: 33.5,
          hand: 10.25,
          dpos: 143.0,
          col: "Southern Illinois",
          dv: "Missouri Valley",
          jnum: 85,
          dcp: 2,
        },
        {
          playerID: "MW-2450",
          playerFirst: "Maxx",
          playerLast: "Williams",
          playerFull: "Maxx Williams",
          position: "TE",
          startYear: 2015,
          currentTeam: "ARI",
          height: 76,
          weight: 249,
          dob: "4/12/94",
          forty: 4.78,
          bench: 17,
          vertical: 34.5,
          broad: 117,
          shuttle: 4.37,
          cone: 7.3,
          arm: 33.5,
          hand: 10.38,
          dpos: 55.0,
          col: "Minnesota",
          dv: "Big Ten",
          jnum: 87,
          dcp: 1,
        },
        {
          playerID: "NB-0450",
          playerFirst: "Nick",
          playerLast: "Boyle",
          playerFull: "Nick Boyle",
          position: "TE",
          startYear: 2015,
          currentTeam: "BAL",
          height: 76,
          weight: 268,
          dob: "2/17/93",
          forty: 5.0,
          bench: 20,
          vertical: 30.5,
          broad: 112,
          shuttle: 4.23,
          cone: 7.13,
          arm: 33.38,
          hand: 10.38,
          dpos: 171.0,
          col: "Delaware",
          dv: "Colonial Athletic (CAA)",
          jnum: 86,
          dcp: 1,
        },
        {
          playerID: "NF-0175",
          playerFirst: "Noah",
          playerLast: "Fant",
          playerFull: "Noah Fant",
          position: "TE",
          startYear: 2019,
          currentTeam: "DEN",
          height: 76,
          weight: 249,
          dob: "11/20/97",
          forty: 4.5,
          bench: 20,
          vertical: 39.5,
          broad: 127,
          shuttle: 4.22,
          cone: 6.81,
          arm: 33.5,
          hand: 9.75,
          dpos: 20.0,
          col: "Iowa",
          dv: "Big Ten",
          jnum: 87,
          dcp: 2,
        },
        {
          playerID: "NO-0150",
          playerFirst: "Nick",
          playerLast: "O'Leary",
          playerFull: "Nick O'Leary",
          position: "TE",
          startYear: 2015,
          currentTeam: "JAC",
          height: 75,
          weight: 252,
          dob: "8/31/92",
          forty: 4.92,
          bench: 21,
          vertical: 30.5,
          broad: 110,
          shuttle: 4.5,
          cone: 7.4,
          arm: 29.75,
          hand: 9.38,
          dpos: 194.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 86,
          dcp: 2,
        },
      ]);
    });
};
