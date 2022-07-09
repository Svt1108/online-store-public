import { Data } from "../types/types";

const json = `[
    {
      "id": "1",
      "name": "Lovely Mexico",
      "img": "plate-1.jpg",
      "type": "decorative",
      "author": "Grazielli David",
      "year": "2022",
      "color": "chocolate",
      "secondColor": "green",
      "quantity": "3",
      "popularity": "yes", 
      "price": "10$"
    },
    {
       "id": "2",
       "name": "Coffee time",
       "img": "plate-2.jpg",
       "type": "decorative",
       "author": "Milena Kibede",
       "year": "2021",
       "color": "pink",
       "secondColor": "red",
       "quantity": "5",
       "popularity": "no", 
       "price": "37$"
    },
    {
        "id": "3",
        "name": "Nature",
        "img": "plate-3.jpg",
        "type": "decorative",
        "author": "Anonymous",
        "year": "2015",
        "color": "green",
        "secondColor": "green",
        "quantity": "44",
        "popularity": "yes", 
        "price": "4$"
    },
    {
         "id": "4",
         "name": "Sweet aloe",
         "img": "plate-4.jpg",
         "type": "common",
         "author": "Ahesan Ullah",
         "year": "2020",
         "color": "white",
         "secondColor": "green",
         "quantity": "35",
         "popularity": "no", 
         "price": "7$"
    },
    {
        "id": "5",
        "name": "Pink fantasy",
        "img": "plate-5.jpg",
        "type": "decorative",
        "author": "Pedro Campos",
        "year": "2020",
        "color": "pink",
        "secondColor": "white",
        "quantity": "2",
        "popularity": "yes", 
        "price": "29$"
    },
    {
         "id": "6",
         "name": "Magic bird",
         "img": "plate-6.jpg",
         "type": "for kids",
         "author": "Anonymous",
         "year": "2021",
         "color": "white",
         "secondColor": "blue",
         "quantity": "15",
         "popularity": "no", 
         "price": "19$"
    },
    {
          "id": "7",
          "name": "Fairytales",
          "img": "plate-7.jpg",
          "type": "for kids",
          "author": "Olga Emelianova",
          "year": "2021",
          "color": "white",
          "secondColor": "red",
          "quantity": "4",
          "popularity": "no", 
          "price": "3$"
    },
    {
           "id": "8",
           "name": "Blue waves",
           "img": "plate-8.jpg",
           "type": "common",
           "author": "Ahesan Ullah",
           "year": "2017",
           "color": "blue",
           "secondColor": "white",
           "quantity": "45",
           "popularity": "no", 
           "price": "11$"
    },    
    {
            "id": "9",
            "name": "Heart fantasy",
            "img": "plate-9.jpg",
            "type": "decorative",
            "author": "Pedro Campos",
            "year": "2022",
            "color": "red",
            "secondColor": "pink",
            "quantity": "4",
            "popularity": "yes", 
            "price": "36$"
    },
    {
             "id": "10",
             "name": "The book of jungles",
             "img": "plate-10.jpg",
             "type": "for kids",
             "author": "Anonymous",
             "year": "2013",
             "color": "green",
             "secondColor": "yellow",
             "quantity": "50",
             "popularity": "yes", 
             "price": "5$"
    },
    {
              "id": "11",
              "name": "Picasso dream",
              "img": "plate-11.jpg",
              "type": "decorative",
              "author": "Marta Zuravskaja",
              "year": "2018",
              "color": "yellow",
              "secondColor": "brown",
              "quantity": "10",
              "popularity": "no", 
              "price": "22$"
    },
    {
               "id": "12",
               "name": "Rustic table",
               "img": "plate-12.jpg",
               "type": "decorative",
               "author": "Julia Pilipchatina",
               "year": "2021",
               "color": "white",
               "secondColor": "blue",
               "quantity": "2",
               "popularity": "yes", 
               "price": "15$"
    },
    {
              "id": "13",
              "name": "Lovely Mexico-2",
              "img": "plate-13.jpg",
              "type": "decorative",
              "author": "Grazielli David",
              "year": "2022",
              "color": "chocolate",
              "secondColor": "green",
              "quantity": "3",
              "popularity": "yes", 
              "price": "7$"
    },
    {
               "id": "14",
               "name": "Sweet aloe-2",
               "img": "plate-14.jpg",
               "type": "common",
               "author": "Ahesan Ullah",
               "year": "2020",
               "color": "white",
               "secondColor": "green",
               "quantity": "35",
               "popularity": "no", 
               "price": "30$"
    },
    {
                "id": "15",
                "name": "Dark night",
                "img": "plate-15.jpg",
                "type": "common",
                "author": "Finalista Premio Oxford",
                "year": "2020",
                "color": "black",
                "secondColor": "white",
                "quantity": "28",
                "popularity": "no", 
                "price": "35$"
    },
    {
                 "id": "16",
                 "name": "Nature pink",
                 "img": "plate-16.jpg",
                 "type": "decorative",
                 "author": "Anonymous",
                 "year": "2015",
                 "color": "pink",
                 "secondColor": "pink",
                 "quantity": "45",
                 "popularity": "no", 
                 "price": "47$"
    },  
    {
        "id": "17",
        "name": "Lily",
        "img": "plate-17.jpg",
        "type": "common",
        "author": "Elene Rossella Lana",
        "year": "2015",
        "color": "white",
        "secondColor": "green",
        "quantity": "52",
        "popularity": "no", 
        "price": "22$"
    },
    {
         "id": "18",
         "name": "Summer fantasy",
         "img": "plate-18.jpg",
         "type": "decorative",
         "author": "Barbara Dantas",
         "year": "2021",
         "color": "black",
         "secondColor": "red",
         "quantity": "13",
         "popularity": "yes", 
         "price": "10$"
    },
    {
          "id": "19",
          "name": "Magic birds",
          "img": "plate-19.jpg",
          "type": "common",
          "author": "Anonymous",
          "year": "2017",
          "color": "blue",
          "secondColor": "white",
          "quantity": "62",
          "popularity": "no", 
          "price": "1$"
    },
    {
           "id": "20",
           "name": "Fairytales-2",
           "img": "plate-20.jpg",
           "type": "for kids",
           "author": "Olga Emelianova",
           "year": "2020",
           "color": "white",
           "secondColor": "blue",
           "quantity": "10",
           "popularity": "yes", 
           "price": "14$"
    },
    {
          "id": "21",
          "name": "White night",
          "img": "plate-21.jpg",
          "type": "common",
          "author": "Finalista Premio Oxford",
          "year": "2020",
          "color": "black",
          "secondColor": "white",
          "quantity": "28",
          "popularity": "no", 
          "price": "45$"
    },
    {
           "id": "22",
           "name": "Fairytales-3",
           "img": "plate-22.jpg",
           "type": "for kids",
           "author": "Olga Emelianova",
           "year": "2020",
           "color": "white",
           "secondColor": "blue",
           "quantity": "10",
           "popularity": "yes", 
           "price": "5$"
    },
    {
            "id": "23",
            "name": "Dream",
            "img": "plate-23.jpg",
            "type": "for kids",
            "author": "Lena Guberman",
            "year": "2022",
            "color": "white",
            "secondColor": "red",
            "quantity": "2",
            "popularity": "yes", 
            "price": "28$"
    },
    {
             "id": "24",
             "name": "Rustic table-2",
             "img": "plate-24.jpg",
             "type": "decorative",
             "author": "Julia Pilipchatina",
             "year": "2021",
             "color": "white",
             "secondColor": "blue",
             "quantity": "28",
             "popularity": "no", 
             "price": "5$"
    },    
    {
              "id": "25",
              "name": "Sweet aloe-3",
              "img": "plate-25.jpg",
              "type": "common",
              "author": "Ahesan Ullah",
              "year": "2020",
              "color": "white",
              "secondColor": "green",
              "quantity": "47",
              "popularity": "no", 
              "price": "6$"
    },
    {
               "id": "26",
               "name": "Lovely Mexico-3",
               "img": "plate-26.jpg",
               "type": "decorative",
               "author": "Grazielli David",
               "year": "2022",
               "color": "chocolate",
               "secondColor": "green",
               "quantity": "7",
               "popularity": "yes", 
               "price": "12$"
    },
    {
                "id": "27",
                "name": "Coffee time-2",
                "img": "plate-27.jpg",
                "type": "decorative",
                "author": "Milena Kibede",
                "year": "2021",
                "color": "green",
                "secondColor": "black",
                "quantity": "17",
                "popularity": "yes", 
                "price": "50$"
    },
    {
                 "id": "28",
                 "name": "Flower serenity",
                 "img": "plate-28.jpg",
                 "type": "common",
                 "author": "Ahesan Ullah",
                 "year": "2018",
                 "color": "beige",
                 "secondColor": "white",
                 "quantity": "37",
                 "popularity": "yes", 
                 "price": "19$"
    },
    {
                "id": "29",
                "name": "Alice fantasy",
                "img": "plate-29.jpg",
                "type": "decorative",
                "author": "Rory Dobner",
                "year": "2017",
                "color": "white",
                "secondColor": "black",
                "quantity": "15",
                "popularity": "yes", 
                "price": "21$"
    },
    {
                 "id": "30",
                 "name": "Country",
                 "img": "plate-30.jpg",
                 "type": "common",
                 "author": "Anonymous",
                 "year": "2014",
                 "color": "white",
                 "secondColor": "black",
                 "quantity": "53",
                 "popularity": "no", 
                 "price": "33$"
    },
    {
                  "id": "31",
                  "name": "Morning star",
                  "img": "plate-31.jpg",
                  "type": "decorative",
                  "author": "Barbara Dantas",
                  "year": "2021",
                  "color": "black",
                  "secondColor": "chocolate",
                  "quantity": "21",
                  "popularity": "yes", 
                  "price": "16$"
    },
    {
                   "id": "32",
                   "name": "Absence",
                   "img": "plate-32.jpg",
                   "type": "common",
                   "author": "Anonymous",
                   "year": "2020",
                   "color": "white",
                   "secondColor": "black",
                   "quantity": "23",
                   "popularity": "yes", 
                   "price": "27$"
    },  
    {
      "id": "33",
      "name": "Rustic table-4",
      "img": "plate-33.jpg",
      "type": "decorative",
      "author": "Julia Pilipchatina",
      "year": "2021",
      "color": "white",
      "secondColor": "blue",
      "quantity": "18",
      "popularity": "no", 
      "price": "4$"
    },
    {
       "id": "34",
       "name": "Flower queen",
       "img": "plate-34.jpg",
       "type": "common",
       "author": "Sania Khan",
       "year": "2016",
       "color": "pink",
       "secondColor": "white",
       "quantity": "29",
       "popularity": "no", 
       "price": "1$"
    },
    {
        "id": "35",
        "name": "Tiny pause",
        "img": "plate-35.jpg",
        "type": "decorative",
        "author": "Anonymous",
        "year": "2020",
        "color": "white",
        "secondColor": "black",
        "quantity": "4",
        "popularity": "no", 
        "price": "36$"
    },
    {
         "id": "36",
         "name": "Be fast",
         "img": "plate-36.jpg",
         "type": "decorative",
         "author": "Barbara Dantas",
         "year": "2021",
         "color": "black",
         "secondColor": "chocolate",
         "quantity": "8",
         "popularity": "no", 
         "price": "48$"
    },
    {
        "id": "37",
        "name": "Summer flowers",
        "img": "plate-37.jpg",
        "type": "common",
        "author": "Anonymous",
        "year": "2014",
        "color": "white",
        "secondColor": "pink",
        "quantity": "24",
        "popularity": "no", 
        "price": "3$"
    },
    {
         "id": "38",
         "name": "Lovely Mexico-4",
         "img": "plate-38.jpg",
         "type": "decorative",
         "author": "Grazielli David",
         "year": "2022",
         "color": "chocolate",
         "secondColor": "white",
         "quantity": "9",
         "popularity": "no", 
         "price": "22$"
    },
    {
          "id": "39",
          "name": "Alice fantasy-2",
          "img": "plate-39.jpg",
          "type": "decorative",
          "author": "Rory Dobner",
          "year": "2017",
          "color": "white",
          "secondColor": "black",
          "quantity": "2",
          "popularity": "yes", 
          "price": "18$"
    },
    {
           "id": "40",
           "name": "My kitty",
           "img": "plate-40.jpg",
           "type": "decorative",
           "author": "Pedro Campos",
           "year": "2022",
           "color": "red",
           "secondColor": "pink",
           "quantity": "5",
           "popularity": "yes", 
           "price": "2$"
    },    
    {
            "id": "41",
            "name": "Fenix",
            "img": "plate-41.jpg",
            "type": "common",
            "author": "Ahesan Ullah",
            "year": "2021",
            "color": "red",
            "secondColor": "yellow",
            "quantity": "17",
            "popularity": "yes", 
            "price": "11$"
    },
    {
             "id": "42",
             "name": "Flower queen-2",
             "img": "plate-42.jpg",
             "type": "common",
             "author": "Sania Khan",
             "year": "2016",
             "color": "green",
             "secondColor": "white",
             "quantity": "43",
             "popularity": "no", 
             "price": "50$"
    },
    {
              "id": "43",
              "name": "Queen christmas",
              "img": "plate-43.jpg",
              "type": "common",
              "author": "Anonymous",
              "year": "2017",
              "color": "white",
              "secondColor": "green",
              "quantity": "22",
              "popularity": "yes", 
              "price": "35$"
    },
    {
               "id": "44",
               "name": "Nature pink-2",
               "img": "plate-44.jpg",
               "type": "decorative",
               "author": "Anonymous",
               "year": "2015",
               "color": "pink",
               "secondColor": "pink",
               "quantity": "33",
               "popularity": "no", 
               "price": "42$"
    },
    {
              "id": "45",
              "name": "Simple theme",
              "img": "plate-45.jpg",
              "type": "common",
              "author": "Ahesan Ullah",
              "year": "2016",
              "color": "white",
              "secondColor": "purple",
              "quantity": "2",
              "popularity": "no", 
              "price": "18$"
    },
    {
               "id": "46",
               "name": "Forrest walk",
               "img": "plate-46.jpg",
               "type": "common",
               "author": "Ahesan Ullah",
               "year": "2020",
               "color": "white",
               "secondColor": "green",
               "quantity": "15",
               "popularity": "yes", 
               "price": "7$"
    },
    {
                "id": "47",
                "name": "Blue in silver",
                "img": "plate-47.jpg",
                "type": "decorative",
                "author": "Anonymous",
                "year": "2022",
                "color": "blue",
                "secondColor": "blue",
                "quantity": "8",
                "popularity": "yes", 
                "price": "20$"
    },
    {
                 "id": "48",
                 "name": "Travel time",
                 "img": "plate-48.jpg",
                 "type": "common",
                 "author": "Anonymous",
                 "year": "2015",
                 "color": "green",
                 "secondColor": "white",
                 "quantity": "7",
                 "popularity": "no", 
                 "price": "23$"
    },  
    {
        "id": "49",
        "name": "Blue elegant",
        "img": "plate-49.jpg",
        "type": "common",
        "author": "Rafael Cataldi",
        "year": "2019",
        "color": "blue",
        "secondColor": "white",
        "quantity": "27",
        "popularity": "yes", 
        "price": "15$"
    },
    {
         "id": "50",
         "name": "Country life",
         "img": "plate-50.jpg",
         "type": "for kids",
         "author": "Olga Emelianova",
         "year": "2021",
         "color": "white",
         "secondColor": "red",
         "quantity": "14",
         "popularity": "no", 
         "price": "5$"
    }             
]`;

export const platesArray: Array<Data> = JSON.parse(json);
