import { Data } from "../types/types";

const json = `[
    {
      "id": "1",
      "img": "plate-1.jpg",
      "type": "decorative",
      "author": "Grazielli David",
      "year": "2022",
      "color": "ochre",
      "secondColor": "green",
      "quantity": "3",
      "popularity": "yes"
    },
    {
       "id": "2",
       "img": "plate-2.jpg",
       "type": "decorative",
       "author": "Milena Kibede",
       "year": "2021",
       "color": "pink",
       "secondColor": "red",
       "quantity": "5",
       "popularity": "no"
    },
    {
        "id": "3",
        "img": "plate-3.jpg",
        "type": "decorative",
        "author": "Anonymous",
        "year": "2015",
        "color": "green",
        "secondColor": "green",
        "quantity": "44",
        "popularity": "yes"
    },
    {
         "id": "4",
         "img": "plate-4.jpg",
         "type": "common",
         "author": "Ahesan Ullah",
         "year": "2020",
         "color": "white",
         "secondColor": "green",
         "quantity": "35",
         "popularity": "no"
    },
    {
        "id": "5",
        "img": "plate-5.jpg",
        "type": "decorative",
        "author": "Pedro Campos",
        "year": "2020",
        "color": "pink",
        "secondColor": "white",
        "quantity": "2",
        "popularity": "yes"
    },
    {
         "id": "6",
         "img": "plate-6.jpg",
         "type": "for kids",
         "author": "Anonymous",
         "year": "2021",
         "color": "white",
         "secondColor": "blue",
         "quantity": "15",
         "popularity": "no"
    },
    {
          "id": "7",
          "img": "plate-7.jpg",
          "type": "for kids",
          "author": "Olga Emelianova",
          "year": "2021",
          "color": "white",
          "secondColor": "red",
          "quantity": "4",
          "popularity": "no"
    },
    {
           "id": "8",
           "img": "plate-8.jpg",
           "type": "common",
           "author": "Ahesan Ullah",
           "year": "2017",
           "color": "blue",
           "secondColor": "white",
           "quantity": "45",
           "popularity": "no"
    },    
    {
            "id": "9",
            "img": "plate-9.jpg",
            "type": "decorative",
            "author": "Pedro Campos",
            "year": "2022",
            "color": "red",
            "secondColor": "pink",
            "quantity": "4",
            "popularity": "yes"
    },
    {
             "id": "10",
             "img": "plate-10.jpg",
             "type": "for kids",
             "author": "Anonymous",
             "year": "2013",
             "color": "green",
             "secondColor": "yellow",
             "quantity": "50",
             "popularity": "yes"
    },
    {
              "id": "11",
              "img": "plate-11.jpg",
              "type": "decorative",
              "author": "Marta Zuravskaja",
              "year": "2018",
              "color": "yellow",
              "secondColor": "brown",
              "quantity": "10",
              "popularity": "no"
    },
    {
               "id": "12",
               "img": "plate-12.jpg",
               "type": "decorative",
               "author": "Julia Pilipchatina",
               "year": "2021",
               "color": "white",
               "secondColor": "blue",
               "quantity": "2",
               "popularity": "yes"
    },
    {
              "id": "13",
              "img": "plate-13.jpg",
              "type": "decorative",
              "author": "Grazielli David",
              "year": "2022",
              "color": "ochre",
              "secondColor": "green",
              "quantity": "3",
              "popularity": "yes"
    },
    {
               "id": "14",
               "img": "plate-14.jpg",
               "type": "common",
               "author": "Ahesan Ullah",
               "year": "2020",
               "color": "white",
               "secondColor": "green",
               "quantity": "35",
               "popularity": "no"
    },
    {
                "id": "15",
                "img": "plate-15.jpg",
                "type": "common",
                "author": "Finalista Premio Oxford",
                "year": "2020",
                "color": "black",
                "secondColor": "white",
                "quantity": "28",
                "popularity": "no"
    },
    {
                 "id": "16",
                 "img": "plate-16.jpg",
                 "type": "decorative",
                 "author": "Anonymous",
                 "year": "2015",
                 "color": "pink",
                 "secondColor": "pink",
                 "quantity": "45",
                 "popularity": "no"
    },  
    {
        "id": "17",
        "img": "plate-17.jpg",
        "type": "common",
        "author": "Elene Rossella Lana",
        "year": "2015",
        "color": "white",
        "secondColor": "green",
        "quantity": "52",
        "popularity": "no"
    },
    {
         "id": "18",
         "img": "plate-18.jpg",
         "type": "decorative",
         "author": "Barbara Dantas",
         "year": "2021",
         "color": "black",
         "secondColor": "red",
         "quantity": "13",
         "popularity": "yes"
    },
    {
          "id": "19",
          "img": "plate-19.jpg",
          "type": "common",
          "author": "Anonymous",
          "year": "2017",
          "color": "blue",
          "secondColor": "white",
          "quantity": "62",
          "popularity": "no"
    },
    {
           "id": "20",
           "img": "plate-20.jpg",
           "type": "for kids",
           "author": "Olga Emelianova",
           "year": "2020",
           "color": "white",
           "secondColor": "blue",
           "quantity": "10",
           "popularity": "yes"
    },
    {
          "id": "21",
          "img": "plate-21.jpg",
          "type": "common",
          "author": "Finalista Premio Oxford",
          "year": "2020",
          "color": "black",
          "secondColor": "white",
          "quantity": "28",
          "popularity": "no"
    },
    {
           "id": "22",
           "img": "plate-22.jpg",
           "type": "for kids",
           "author": "Olga Emelianova",
           "year": "2020",
           "color": "white",
           "secondColor": "blue",
           "quantity": "10",
           "popularity": "yes"
    },
    {
            "id": "23",
            "img": "plate-23.jpg",
            "type": "for kids",
            "author": "Lena Guberman",
            "year": "2022",
            "color": "white",
            "secondColor": "red",
            "quantity": "2",
            "popularity": "yes"
    },
    {
             "id": "24",
             "img": "plate-24.jpg",
             "type": "decorative",
             "author": "Julia Pilipchatina",
             "year": "2021",
             "color": "white",
             "secondColor": "blue",
             "quantity": "28",
             "popularity": "no"
    },    
    {
              "id": "25",
              "img": "plate-25.jpg",
              "type": "common",
              "author": "Ahesan Ullah",
              "year": "2020",
              "color": "white",
              "secondColor": "green",
              "quantity": "47",
              "popularity": "no"
    },
    {
               "id": "26",
               "img": "plate-26.jpg",
               "type": "decorative",
               "author": "Grazielli David",
               "year": "2022",
               "color": "ochre",
               "secondColor": "green",
               "quantity": "7",
               "popularity": "yes"
    },
    {
                "id": "27",
                "img": "plate-27.jpg",
                "type": "decorative",
                "author": "Milena Kibede",
                "year": "2021",
                "color": "green",
                "secondColor": "black",
                "quantity": "17",
                "popularity": "yes"
    },
    {
                 "id": "28",
                 "img": "plate-28.jpg",
                 "type": "common",
                 "author": "Ahesan Ullah",
                 "year": "2018",
                 "color": "beige",
                 "secondColor": "white",
                 "quantity": "37",
                 "popularity": "yes"
    },
    {
                "id": "29",
                "img": "plate-29.jpg",
                "type": "decorative",
                "author": "Rory Dobner",
                "year": "2017",
                "color": "white",
                "secondColor": "black",
                "quantity": "15",
                "popularity": "yes"
    },
    {
                 "id": "30",
                 "img": "plate-30.jpg",
                 "type": "common",
                 "author": "Anonymous",
                 "year": "2014",
                 "color": "white",
                 "secondColor": "black",
                 "quantity": "53",
                 "popularity": "no"
    },
    {
                  "id": "31",
                  "img": "plate-31.jpg",
                  "type": "decorative",
                  "author": "Barbara Dantas",
                  "year": "2021",
                  "color": "black",
                  "secondColor": "ochre",
                  "quantity": "21",
                  "popularity": "yes"
    },
    {
                   "id": "32",
                   "img": "plate-32.jpg",
                   "type": "common",
                   "author": "Anonymous",
                   "year": "2020",
                   "color": "white",
                   "secondColor": "black",
                   "quantity": "23",
                   "popularity": "yes"
    },  
    {
      "id": "33",
      "img": "plate-33.jpg",
      "type": "decorative",
      "author": "Julia Pilipchatina",
      "year": "2021",
      "color": "white",
      "secondColor": "blue",
      "quantity": "18",
      "popularity": "no"
    },
    {
       "id": "34",
       "img": "plate-34.jpg",
       "type": "common",
       "author": "Sania Khan",
       "year": "2016",
       "color": "pink",
       "secondColor": "white",
       "quantity": "29",
       "popularity": "no"
    },
    {
        "id": "35",
        "img": "plate-35.jpg",
        "type": "decorative",
        "author": "Anonymous",
        "year": "2020",
        "color": "white",
        "secondColor": "black",
        "quantity": "4",
        "popularity": "no"
    },
    {
         "id": "36",
         "img": "plate-36.jpg",
         "type": "decorative",
         "author": "Barbara Dantas",
         "year": "2021",
         "color": "black",
         "secondColor": "ochre",
         "quantity": "8",
         "popularity": "no"
    },
    {
        "id": "37",
        "img": "plate-37.jpg",
        "type": "common",
        "author": "Anonymous",
        "year": "2014",
        "color": "white",
        "secondColor": "pink",
        "quantity": "24",
        "popularity": "no"
    },
    {
         "id": "38",
         "img": "plate-38.jpg",
         "type": "decorative",
         "author": "Grazielli David",
         "year": "2022",
         "color": "ochre",
         "secondColor": "white",
         "quantity": "9",
         "popularity": "no"
    },
    {
          "id": "39",
          "img": "plate-39.jpg",
          "type": "decorative",
          "author": "Rory Dobner",
          "year": "2017",
          "color": "white",
          "secondColor": "black",
          "quantity": "2",
          "popularity": "yes"
    },
    {
           "id": "40",
           "img": "plate-40.jpg",
           "type": "decorative",
           "author": "Pedro Campos",
           "year": "2022",
           "color": "red",
           "secondColor": "pink",
           "quantity": "5",
           "popularity": "yes"
    },    
    {
            "id": "41",
            "img": "plate-41.jpg",
            "type": "common",
            "author": "Ahesan Ullah",
            "year": "2021",
            "color": "red",
            "secondColor": "yellow",
            "quantity": "17",
            "popularity": "yes"
    },
    {
             "id": "42",
             "img": "plate-42.jpg",
             "type": "common",
             "author": "Sania Khan",
             "year": "2016",
             "color": "green",
             "secondColor": "white",
             "quantity": "43",
             "popularity": "no"
    },
    {
              "id": "43",
              "img": "plate-43.jpg",
              "type": "common",
              "author": "Anonymous",
              "year": "2017",
              "color": "white",
              "secondColor": "green",
              "quantity": "22",
              "popularity": "yes"
    },
    {
               "id": "44",
               "img": "plate-44.jpg",
               "type": "decorative",
               "author": "Anonymous",
               "year": "2015",
               "color": "pink",
               "secondColor": "pink",
               "quantity": "33",
               "popularity": "no"
    },
    {
              "id": "45",
              "img": "plate-45.jpg",
              "type": "common",
              "author": "Ahesan Ullah",
              "year": "2016",
              "color": "white",
              "secondColor": "purple",
              "quantity": "2",
              "popularity": "no"
    },
    {
               "id": "46",
               "img": "plate-46.jpg",
               "type": "common",
               "author": "Ahesan Ullah",
               "year": "2020",
               "color": "white",
               "secondColor": "green",
               "quantity": "15",
               "popularity": "yes"
    },
    {
                "id": "47",
                "img": "plate-47.jpg",
                "type": "decorative",
                "author": "Anonymous",
                "year": "2022",
                "color": "blue",
                "secondColor": "blue",
                "quantity": "8",
                "popularity": "yes"
    },
    {
                 "id": "48",
                 "img": "plate-48.jpg",
                 "type": "common",
                 "author": "Anonymous",
                 "year": "2015",
                 "color": "green",
                 "secondColor": "white",
                 "quantity": "7",
                 "popularity": "no"
    },  
    {
        "id": "49",
        "img": "plate-49.jpg",
        "type": "common",
        "author": "Rafael Cataldi",
        "year": "2019",
        "color": "blue",
        "secondColor": "white",
        "quantity": "27",
        "popularity": "yes"
    },
    {
         "id": "50",
         "img": "plate-50.jpg",
         "type": "for kids",
         "author": "Olga Emelianova",
         "year": "2021",
         "color": "white",
         "secondColor": "red",
         "quantity": "14",
         "popularity": "no"
    },                

  ]`;

export const platesArray: Array<Data> = JSON.parse(json);
