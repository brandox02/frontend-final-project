import { Item } from "../../components/products/item";

const items = new Array<Item>(
  {
    id: 1,
    name: "Gura phone case",
    description: "A Gawr Gura phone case, damn gura is too smart ",
    img_cover:
      "https://i.pinimg.com/originals/71/96/cf/7196cfdf85e22579fe08e82385d4061a.png",
    fav: true,
  },
  {
    id: 2,
    name: "Sonata 2005",
    description: "Sonata 2005 new only 150.000 kilómetros",
    img_cover:
      "https://i1.wp.com/criticalcarcare.com/wp-content/uploads/2019/08/Hyundai-sonata-autobody-repair-1.jpg?ssl=1",
    fav: false,
  },
  {
    id: 3,
    name: "Pekora figure",
    description: "awesome figure of pekora",
    img_cover:
      "https://www.nendoworld.com/wp-content/uploads/2021/06/c9b8a3ea6e07fe76bd5eb18d16746301.jpg",
    fav: true,
  }
);

export default function handler(req, res) {
  if (req.method === "POST") {
    const view = JSON.parse(req.body);
    res.json(items[view.id - 1]);
  } else if (req.method === "GET") {
    res.json(items);
  } else {
    // Handle any other HTTP method
  }
}
