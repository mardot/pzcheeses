const config = require("./utils/config.js");
const express = require("express");
//const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

let cheeses = [
  {
    id: 1,
    title: "ABBAYE DE BELLOC",
    price: 109.95,
    description:
      "Abbaye de Belloc is a flat wheel-shaped traditional, farmhouse, unpasteurised, semi-hard cheese made from sheep's milk. It has a natural, crusty, brownish rind with patches of red, orange and yellow. The rind is marked with tiny craters.",
    category: "creamy, dense and firm",
    image: "https://www.cheese.com/media/img/cheese/Abbaye-de-Belloc.jpg",
  },
  {
    id: 2,
    title: "ABBAYE DU MONT DES CATS",
    price: 29.21,
    description:
      "The Abbaye du Mont des Cats cheese is made by monks in a monastery of the same name in the town of Godewaersvelde, in Northern France. Cow's milk from local farms is used and the milk is gently pasteurised for cheese production. The maturation process takes about 4 to 5 weeks",
    category: "semi-soft, artisan, brined",
    image: "https://www.cheese.com/media/img/cheese/Mont_des_Cats_kaas.jpg",
  },
  {
    id: 3,
    title: "ADELOST",
    price: 367.55,
    description:
      "Adelost is a Swedish blue cheese made from cow's milk. The blue-grey veins running throughout are a distinctive feature of the cheese. It has a sharp, salty and tangy flavour. The ripening process is for two to three months. The cheese comes in a drum shape with a rind of pale cream, which is lightly dotted with moulds.",
    category: "semi-soft, blue-veined",
    image: "https://www.cheese.com/media/img/cheese/Adelost_QnxYLx6.jpg",
  },
  {
    id: 4,
    title: "FETA",
    price: 78.65,
    description:
      "Feta is undoubtedly one of the most famous Greek cheeses. In fact, Feta occupies 70% stake in Greek cheese consumption. To create traditional feta, 30 percent of goat's milk is mixed with sheep's milk of animals grazing on pastures in the specific appellation of origin regions.",
    category: "soft, brined",
    image: "https://www.cheese.com/media/img/cheese/504_feta.jpg",
  },
  {
    id: 5,
    title: "JARLSBERG",
    price: 88.15,
    description:
      "Jarlsberg is a mild, semi-soft cow’s milk cheese of Norwegian origin. Created by Anders Larsen Bakke, it resembles a Swiss Emmental with distinctive, open and irregular ‘eyes’. Many a times Jarlsberg is marketed as a Swiss cheese because of its characteristics, though it tends to be sweeter and stronger than Emmentaler.",
    category: "open, smooth and supple",
    image:
      "https://www.cheese.com/media/img/cheese/Jarlsberg_in_Wholefoods_2.jpg",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/cheeses", (request, response) => {
  console.log(cheeses);
  response.json(cheeses);
});

module.exports = app;
