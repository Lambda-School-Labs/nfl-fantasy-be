exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("players")
    .then(function () {
      // Inserts seed entries
      return knex("players").insert([
        {
          playerID: "AK-0050",
          playerFirst: "Alvin",
          playerLast: "Kamara",
          playerFull: "Alvin Kamara",
          position: "RB",
          startYear: 2017,
          currentTeam: "NO",
          height: 70,
          weight: 214,
          dob: "7/25/95",
          forty: 4.56,
          bench: 15,
          vertical: 39.5,
          broad: 131,
          shuttle: 4.35,
          cone: 7.1,
          arm: 32.75,
          hand: 9.25,
          dpos: 67.0,
          col: "Tennessee",
          dv: "Southeastern (SEC)",
          jnum: 41,
          dcp: 1,
        },
        {
          playerID: "AM-0825",
          playerFirst: "Alexander",
          playerLast: "Mattison",
          playerFull: "Alexander Mattison",
          position: "RB",
          startYear: 2019,
          currentTeam: "MIN",
          height: 71,
          weight: 221,
          dob: "6/19/98",
          forty: 4.63,
          bench: 22,
          vertical: 35.0,
          broad: 127,
          shuttle: 4.29,
          cone: 7.13,
          arm: 31.5,
          hand: 9.13,
          dpos: 102.0,
          col: "Boise State",
          dv: "Mountain West (MWC)",
          jnum: 25,
          dcp: 2,
        },
        {
          playerID: "AM-2850",
          playerFirst: "Alfred",
          playerLast: "Morris",
          playerFull: "Alfred Morris",
          position: "RB",
          startYear: 2012,
          currentTeam: "INA",
          height: 70,
          weight: 219,
          dob: "12/12/88",
          forty: 4.61,
          bench: 16,
          vertical: 35.5,
          broad: 117,
          shuttle: 4.19,
          cone: 7.01,
          arm: 31.38,
          hand: 10.25,
          dpos: 173.0,
          col: "Florida Atlantic",
          dv: "Sun Belt",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "AP-0700",
          playerFirst: "Adrian",
          playerLast: "Peterson",
          playerFull: "Adrian Peterson",
          position: "RB",
          startYear: 2007,
          currentTeam: "WAS",
          height: 73,
          weight: 217,
          dob: "3/21/85",
          forty: 4.4,
          bench: 0,
          vertical: 38.5,
          broad: 127,
          shuttle: 4.4,
          cone: 7.09,
          arm: 32.25,
          hand: 9.5,
          dpos: 7.0,
          col: "Oklahoma",
          dv: "Big 12",
          jnum: 26,
          dcp: 1,
        },
        {
          playerID: "AS-0900",
          playerFirst: "Anthony",
          playerLast: "Sherman",
          playerFull: "Anthony Sherman",
          position: "RB",
          startYear: 2011,
          currentTeam: "KC",
          height: 70,
          weight: 242,
          dob: "12/11/88",
          forty: 4.74,
          bench: 32,
          vertical: 32.5,
          broad: 111,
          shuttle: 4.41,
          cone: 7.23,
          arm: 30.0,
          hand: 9.38,
          dpos: 136.0,
          col: "Connecticut",
          dv: "Big East",
          jnum: 42,
          dcp: 1,
        },
        {
          playerID: "BB-2250",
          playerFirst: "Brandon",
          playerLast: "Bolden",
          playerFull: "Brandon Bolden",
          position: "RB",
          startYear: 2012,
          currentTeam: "NE",
          height: 71,
          weight: 215,
          dob: "1/26/90",
          forty: 4.5,
          bench: 21,
          vertical: 38.0,
          broad: 119,
          shuttle: 4.32,
          cone: 6.91,
          arm: 32.25,
          hand: 10.0,
          dpos: 0.0,
          col: "Mississippi",
          dv: "Southeastern (SEC)",
          jnum: 38,
          dcp: 2,
        },
        {
          playerID: "BH-1225",
          playerFirst: "Brian",
          playerLast: "Hill",
          playerFull: "Brian Hill",
          position: "RB",
          startYear: 2017,
          currentTeam: "ATL",
          height: 73,
          weight: 219,
          dob: "11/9/95",
          forty: 4.54,
          bench: 15,
          vertical: 34.0,
          broad: 125,
          shuttle: 4.32,
          cone: 7.03,
          arm: 31.38,
          hand: 8.88,
          dpos: 156.0,
          col: "Wyoming",
          dv: "Mountain West (MWC)",
          jnum: 23,
          dcp: 2,
        },
        {
          playerID: "BP-1200",
          playerFirst: "Bilal",
          playerLast: "Powell",
          playerFull: "Bilal Powell",
          position: "RB",
          startYear: 2011,
          currentTeam: "NYJ",
          height: 70,
          weight: 204,
          dob: "10/27/88",
          forty: 4.54,
          bench: 18,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.75,
          hand: 8.63,
          dpos: 126.0,
          col: "Louisville",
          dv: "Big East",
          jnum: 29,
          dcp: 3,
        },
        {
          playerID: "BS-0825",
          playerFirst: "Bo",
          playerLast: "Scarbrough",
          playerFull: "Bo Scarbrough",
          position: "RB",
          startYear: 2018,
          currentTeam: "DET",
          height: 73,
          weight: 228,
          dob: "9/29/96",
          forty: 4.52,
          bench: 14,
          vertical: 40.0,
          broad: 129,
          shuttle: 4.34,
          cone: 0.0,
          arm: 33.5,
          hand: 10.5,
          dpos: 236.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 43,
          dcp: 2,
        },
        {
          playerID: "BS-1450",
          playerFirst: "Boston",
          playerLast: "Scott",
          playerFull: "Boston Scott",
          position: "RB",
          startYear: 2018,
          currentTeam: "PHI",
          height: 67,
          weight: 203,
          dob: "4/27/95",
          forty: 4.4,
          bench: 21,
          vertical: 38.5,
          broad: 121,
          shuttle: 4.15,
          cone: 6.67,
          arm: 0.0,
          hand: 0.0,
          dpos: 201.0,
          col: "Louisiana Tech",
          dv: "Conference USA (C-USA)",
          jnum: 38,
          dcp: 3,
        },
        {
          playerID: "BS-2950",
          playerFirst: "Benny",
          playerLast: "Snell Jr.",
          playerFull: "Benny Snell Jr.",
          position: "RB",
          startYear: 2019,
          currentTeam: "PIT",
          height: 70,
          weight: 224,
          dob: "2/27/98",
          forty: 4.66,
          bench: 16,
          vertical: 29.5,
          broad: 119,
          shuttle: 4.33,
          cone: 7.07,
          arm: 31.0,
          hand: 9.38,
          dpos: 122.0,
          col: "Kentucky",
          dv: "Southeastern (SEC)",
          jnum: 24,
          dcp: 3,
        },
        {
          playerID: "CA-0750",
          playerFirst: "C.J.",
          playerLast: "Anderson",
          playerFull: "C.J. Anderson",
          position: "RB",
          startYear: 2013,
          currentTeam: "INA",
          height: 68,
          weight: 224,
          dob: "2/10/91",
          forty: 4.53,
          bench: 17,
          vertical: 33.0,
          broad: 119,
          shuttle: 4.12,
          cone: 7.15,
          arm: 30.0,
          hand: 9.0,
          dpos: 0.0,
          col: "California",
          dv: "Pacific 12",
          jnum: 0,
          dcp: 0,
        },
        {
          playerID: "CC-0750",
          playerFirst: "Chris",
          playerLast: "Carson",
          playerFull: "Chris Carson",
          position: "RB",
          startYear: 2017,
          currentTeam: "SEA",
          height: 72,
          weight: 218,
          dob: "9/16/94",
          forty: 4.58,
          bench: 23,
          vertical: 39.0,
          broad: 130,
          shuttle: 4.28,
          cone: 7.53,
          arm: 33.25,
          hand: 9.63,
          dpos: 249.0,
          col: "Oklahoma State",
          dv: "Big 12",
          jnum: 32,
          dcp: 1,
        },
        {
          playerID: "CC-2350",
          playerFirst: "Corey",
          playerLast: "Clement",
          playerFull: "Corey Clement",
          position: "RB",
          startYear: 2017,
          currentTeam: "PHI",
          height: 70,
          weight: 221,
          dob: "11/2/94",
          forty: 4.68,
          bench: 19,
          vertical: 32.0,
          broad: 120,
          shuttle: 4.17,
          cone: 6.71,
          arm: 30.5,
          hand: 9.75,
          dpos: 0.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 30,
          dcp: 3,
        },
        {
          playerID: "CE-0175",
          playerFirst: "Chase",
          playerLast: "Edmonds",
          playerFull: "Chase Edmonds",
          position: "RB",
          startYear: 2018,
          currentTeam: "ARI",
          height: 69,
          weight: 205,
          dob: "4/13/96",
          forty: 4.55,
          bench: 19,
          vertical: 34.0,
          broad: 122,
          shuttle: 4.07,
          cone: 6.79,
          arm: 31.13,
          hand: 9.13,
          dpos: 134.0,
          col: "Fordham",
          dv: "N/A",
          jnum: 29,
          dcp: 3,
        },
        {
          playerID: "CG-1015",
          playerFirst: "Cullen",
          playerLast: "Gillaspia",
          playerFull: "Cullen Gillaspia",
          position: "RB",
          startYear: 2019,
          currentTeam: "HOU",
          height: 74,
          weight: 235,
          dob: "5/12/95",
          forty: 4.54,
          bench: 20,
          vertical: 32.5,
          broad: 112,
          shuttle: 4.28,
          cone: 6.95,
          arm: 30.75,
          hand: 9.13,
          dpos: 220.0,
          col: "Texas A&M",
          dv: "Southeastern (SEC)",
          jnum: 44,
          dcp: 1,
        },
        {
          playerID: "CH-0525",
          playerFirst: "C.J.",
          playerLast: "Ham",
          playerFull: "C.J. Ham",
          position: "RB",
          startYear: 2016,
          currentTeam: "MIN",
          height: 73,
          weight: 240,
          dob: "7/22/93",
          forty: 4.69,
          bench: 22,
          vertical: 37.0,
          broad: 118,
          shuttle: 4.35,
          cone: 7.4,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Augustana",
          dv: "N/A",
          jnum: 30,
          dcp: 1,
        },
        {
          playerID: "CH-5000",
          playerFirst: "Carlos",
          playerLast: "Hyde",
          playerFull: "Carlos Hyde",
          position: "RB",
          startYear: 2014,
          currentTeam: "HOU",
          height: 72,
          weight: 230,
          dob: "9/20/91",
          forty: 4.61,
          bench: 19,
          vertical: 34.5,
          broad: 114,
          shuttle: 0.0,
          cone: 0.0,
          arm: 32.0,
          hand: 9.63,
          dpos: 57.0,
          col: "Ohio State",
          dv: "Big Ten",
          jnum: 23,
          dcp: 2,
        },
        {
          playerID: "CM-1225",
          playerFirst: "Christian",
          playerLast: "McCaffrey",
          playerFull: "Christian McCaffrey",
          position: "RB",
          startYear: 2017,
          currentTeam: "CAR",
          height: 71,
          weight: 202,
          dob: "6/7/96",
          forty: 4.48,
          bench: 10,
          vertical: 37.5,
          broad: 121,
          shuttle: 4.22,
          cone: 6.57,
          arm: 30.0,
          hand: 9.0,
          dpos: 8.0,
          col: "Stanford",
          dv: "Pacific 12",
          jnum: 22,
          dcp: 1,
        },
        {
          playerID: "CP-2550",
          playerFirst: "C.J.",
          playerLast: "Prosise",
          playerFull: "C.J. Prosise",
          position: "RB",
          startYear: 2016,
          currentTeam: "SEA",
          height: 72,
          weight: 220,
          dob: "5/20/94",
          forty: 4.33,
          bench: 0,
          vertical: 35.5,
          broad: 121,
          shuttle: 4.42,
          cone: 7.19,
          arm: 32.13,
          hand: 8.5,
          dpos: 90.0,
          col: "Notre Dame",
          dv: "FBS Independents",
          jnum: 22,
          dcp: 2,
        },
        {
          playerID: "CT-1220",
          playerFirst: "Chris",
          playerLast: "Thompson",
          playerFull: "Chris Thompson",
          position: "RB",
          startYear: 2013,
          currentTeam: "WAS",
          height: 67,
          weight: 192,
          dob: "10/20/90",
          forty: 4.42,
          bench: 21,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.25,
          hand: 9.25,
          dpos: 154.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 25,
          dcp: 1,
        },
        {
          playerID: "DB-2950",
          playerFirst: "Devontae",
          playerLast: "Booker",
          playerFull: "Devontae Booker",
          position: "RB",
          startYear: 2016,
          currentTeam: "DEN",
          height: 71,
          weight: 219,
          dob: "5/27/92",
          forty: 4.56,
          bench: 22,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 31.63,
          hand: 8.63,
          dpos: 136.0,
          col: "Utah",
          dv: "Pacific 12",
          jnum: 23,
          dcp: 3,
        },
        {
          playerID: "DC-3550",
          playerFirst: "Dalvin",
          playerLast: "Cook",
          playerFull: "Dalvin Cook",
          position: "RB",
          startYear: 2017,
          currentTeam: "MIN",
          height: 70,
          weight: 210,
          dob: "8/10/95",
          forty: 4.49,
          bench: 22,
          vertical: 30.5,
          broad: 116,
          shuttle: 4.53,
          cone: 7.27,
          arm: 32.38,
          hand: 9.25,
          dpos: 41.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 33,
          dcp: 1,
        },
        {
          playerID: "DD-0681",
          playerFirst: "Dalyn",
          playerLast: "Dawkins",
          playerFull: "Dalyn Dawkins",
          position: "RB",
          startYear: 2018,
          currentTeam: "TEN",
          height: 69,
          weight: 175,
          dob: "12/12/94",
          forty: 4.62,
          bench: 9,
          vertical: 31.0,
          broad: 117,
          shuttle: 4.45,
          cone: 7.12,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Colorado State",
          dv: "Mountain West (MWC)",
          jnum: 28,
          dcp: 2,
        },
        {
          playerID: "DF-1375",
          playerFirst: "D.J.",
          playerLast: "Foster",
          playerFull: "D.J. Foster",
          position: "RB",
          startYear: 2016,
          currentTeam: "ARI",
          height: 70,
          weight: 193,
          dob: "11/22/93",
          forty: 4.53,
          bench: 14,
          vertical: 36.0,
          broad: 117,
          shuttle: 4.07,
          cone: 6.75,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Arizona State",
          dv: "Pacific 12",
          jnum: 37,
          dcp: 3,
        },
        {
          playerID: "DF-1875",
          playerFirst: "Devonta",
          playerLast: "Freeman",
          playerFull: "Devonta Freeman",
          position: "RB",
          startYear: 2014,
          currentTeam: "ATL",
          height: 68,
          weight: 206,
          dob: "3/15/92",
          forty: 4.51,
          bench: 14,
          vertical: 32.0,
          broad: 118,
          shuttle: 4.26,
          cone: 7.11,
          arm: 29.38,
          hand: 9.63,
          dpos: 103.0,
          col: "Florida State",
          dv: "Atlantic Coast (ACC)",
          jnum: 24,
          dcp: 1,
        },
        {
          playerID: "DG-3200",
          playerFirst: "Derrius",
          playerLast: "Guice",
          playerFull: "Derrius Guice",
          position: "RB",
          startYear: 2018,
          currentTeam: "WAS",
          height: 70,
          weight: 224,
          dob: "6/21/97",
          forty: 4.49,
          bench: 15,
          vertical: 31.5,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.75,
          hand: 9.75,
          dpos: 59.0,
          col: "LSU",
          dv: "Southeastern (SEC)",
          jnum: 29,
          dcp: 2,
        },
        {
          playerID: "DH-1362",
          playerFirst: "Damien",
          playerLast: "Harris",
          playerFull: "Damien Harris",
          position: "RB",
          startYear: 2019,
          currentTeam: "NE",
          height: 70,
          weight: 216,
          dob: "2/11/97",
          forty: 4.57,
          bench: 16,
          vertical: 37.0,
          broad: 121,
          shuttle: 0.0,
          cone: 0.0,
          arm: 30.75,
          hand: 9.75,
          dpos: 87.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 37,
          dcp: 3,
        },
        {
          playerID: "DH-2325",
          playerFirst: "Darrell",
          playerLast: "Henderson",
          playerFull: "Darrell Henderson",
          position: "RB",
          startYear: 2019,
          currentTeam: "LA",
          height: 68,
          weight: 208,
          dob: "8/19/97",
          forty: 4.53,
          bench: 22,
          vertical: 33.5,
          broad: 121,
          shuttle: 4.41,
          cone: 7.03,
          arm: 31.0,
          hand: 8.63,
          dpos: 70.0,
          col: "Memphis",
          dv: "American Athletic",
          jnum: 27,
          dcp: 4,
        },
        {
          playerID: "DH-2450",
          playerFirst: "Derrick",
          playerLast: "Henry",
          playerFull: "Derrick Henry",
          position: "RB",
          startYear: 2016,
          currentTeam: "TEN",
          height: 75,
          weight: 247,
          dob: "7/17/94",
          forty: 4.52,
          bench: 22,
          vertical: 37.0,
          broad: 130,
          shuttle: 4.38,
          cone: 7.2,
          arm: 33.0,
          hand: 8.75,
          dpos: 45.0,
          col: "Alabama",
          dv: "Southeastern (SEC)",
          jnum: 22,
          dcp: 1,
        },
        {
          playerID: "DH-3137",
          playerFirst: "Dontrell",
          playerLast: "Hilliard",
          playerFull: "Dontrell Hilliard",
          position: "RB",
          startYear: 2018,
          currentTeam: "CLE",
          height: 71,
          weight: 205,
          dob: "2/26/95",
          forty: 4.44,
          bench: 21,
          vertical: 34.5,
          broad: 125,
          shuttle: 4.38,
          cone: 6.87,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "Tulane",
          dv: "American Athletic",
          jnum: 25,
          dcp: 4,
        },
        {
          playerID: "DJ-0887",
          playerFirst: "D'Ernest",
          playerLast: "Johnson",
          playerFull: "D'Ernest Johnson",
          position: "RB",
          startYear: 2019,
          currentTeam: "CLE",
          height: 70,
          weight: 204,
          dob: "2/27/96",
          forty: 0.0,
          bench: 0,
          vertical: 0.0,
          broad: 0,
          shuttle: 0.0,
          cone: 0.0,
          arm: 0.0,
          hand: 0.0,
          dpos: 0.0,
          col: "South Florida",
          dv: "American Athletic",
          jnum: 30,
          dcp: 2,
        },
        {
          playerID: "DJ-1325",
          playerFirst: "David",
          playerLast: "Johnson",
          playerFull: "David Johnson",
          position: "RB",
          startYear: 2015,
          currentTeam: "ARI",
          height: 73,
          weight: 224,
          dob: "12/16/91",
          forty: 4.51,
          bench: 25,
          vertical: 41.5,
          broad: 127,
          shuttle: 4.27,
          cone: 6.82,
          arm: 31.25,
          hand: 9.63,
          dpos: 86.0,
          col: "Northern Iowa",
          dv: "Missouri Valley",
          jnum: 31,
          dcp: 2,
        },
        {
          playerID: "DJ-1850",
          playerFirst: "Duke",
          playerLast: "Johnson",
          playerFull: "Duke Johnson",
          position: "RB",
          startYear: 2015,
          currentTeam: "HOU",
          height: 69,
          weight: 207,
          dob: "9/23/93",
          forty: 4.5,
          bench: 18,
          vertical: 35.0,
          broad: 121,
          shuttle: 4.16,
          cone: 6.88,
          arm: 30.38,
          hand: 9.25,
          dpos: 77.0,
          col: "Miami (FL)",
          dv: "Atlantic Coast (ACC)",
          jnum: 25,
          dcp: 1,
        },
        {
          playerID: "DL-1700",
          playerFirst: "Dion",
          playerLast: "Lewis",
          playerFull: "Dion Lewis",
          position: "RB",
          startYear: 2011,
          currentTeam: "TEN",
          height: 67,
          weight: 193,
          dob: "9/27/90",
          forty: 4.56,
          bench: 17,
          vertical: 34.5,
          broad: 112,
          shuttle: 4.18,
          cone: 6.9,
          arm: 28.13,
          hand: 8.63,
          dpos: 149.0,
          col: "Pittsburgh",
          dv: "Big East",
          jnum: 33,
          dcp: 2,
        },
        {
          playerID: "DM-2787",
          playerFirst: "David",
          playerLast: "Montgomery",
          playerFull: "David Montgomery",
          position: "RB",
          startYear: 2019,
          currentTeam: "CHI",
          height: 70,
          weight: 222,
          dob: "6/7/97",
          forty: 4.6,
          bench: 15,
          vertical: 28.5,
          broad: 121,
          shuttle: 4.23,
          cone: 7.12,
          arm: 31.0,
          hand: 9.38,
          dpos: 73.0,
          col: "Iowa State",
          dv: "Big 12",
          jnum: 32,
          dcp: 2,
        },
        {
          playerID: "DO-0025",
          playerFirst: "Dare",
          playerLast: "Ogunbowale",
          playerFull: "Dare Ogunbowale",
          position: "RB",
          startYear: 2017,
          currentTeam: "TB",
          height: 71,
          weight: 213,
          dob: "5/4/94",
          forty: 4.65,
          bench: 14,
          vertical: 35.0,
          broad: 120,
          shuttle: 4.21,
          cone: 6.99,
          arm: 31.38,
          hand: 9.13,
          dpos: 0.0,
          col: "Wisconsin",
          dv: "Big Ten",
          jnum: 44,
          dcp: 3,
        },
        {
          playerID: "DO-0600",
          playerFirst: "Devine",
          playerLast: "Ozigbo",
          playerFull: "Devine Ozigbo",
          position: "RB",
          startYear: 2019,
          currentTeam: "JAC",
          height: 71,
          weight: 219,
          dob: "10/2/96",
          forty: 4.65,
          bench: 19,
          vertical: 37.0,
          broad: 124,
          shuttle: 4.27,
          cone: 6.95,
          arm: 31.0,
          hand: 9.25,
          dpos: 0.0,
          col: "Nebraska",
          dv: "Big Ten",
          jnum: 33,
          dcp: 3,
        },
        {
          playerID: "DS-2177",
          playerFirst: "Devin",
          playerLast: "Singletary",
          playerFull: "Devin Singletary",
          position: "RB",
          startYear: 2019,
          currentTeam: "BUF",
          height: 67,
          weight: 203,
          dob: "9/3/97",
          forty: 4.66,
          bench: 15,
          vertical: 35.0,
          broad: 117,
          shuttle: 4.4,
          cone: 7.32,
          arm: 28.88,
          hand: 8.5,
          dpos: 74.0,
          col: "Florida Atlantic",
          dv: "Conference USA (C-USA)",
          jnum: 26,
          dcp: 2,
        },
        {
          playerID: "DS-3300",
          playerFirst: "Darren",
          playerLast: "Sproles",
          playerFull: "Darren Sproles",
          position: "RB",
          startYear: 2005,
          currentTeam: "PHI",
          height: 66,
          weight: 185,
          dob: "6/20/83",
          forty: 4.47,
          bench: 23,
          vertical: 33.0,
          broad: 105,
          shuttle: 3.96,
          cone: 6.96,
          arm: 28.0,
          hand: 8.0,
          dpos: 130.0,
          col: "Kansas State",
          dv: "Big 12",
          jnum: 43,
          dcp: 3,
        },
      ]);
    });
};
