let variations = [
  {
    id: 8757089894482,
    name: "Style",
    values: [
      {
        value: "Hoodie",
      },
      {
        value: "T-shirt",
      },
      {
        value: "Woman T-shirt",
      },
      {
        value: "Sweatshirt",
      },
    ],
    position: 1,
    functions: [],
    conditions: [],
  },
  {
    id: 8757089960018,
    name: "Color",
    values: [
      {
        value: "Hoodie White",
        image_id: "2",
      },
      {
        value: "Hoodie Heather Grey",
        image_id: "5",
      },
      {
        value: "Hoodie Pink",
        image_id: "8",
      },
      {
        value: "Hoodie Lightblue",
        image_id: "11",
      },
      {
        value: "Tshirt White",
        image_id: "1",
      },
      {
        value: "Tshirt Heather Grey",
        image_id: "4",
      },
      {
        value: "Tshirt Pink",
        image_id: "7",
      },
      {
        value: "Tshirt Lightblue",
        image_id: "10",
      },
      {
        value: "Woman T-shirt White",
        image_id: "12",
      },
      {
        value: "Woman T-shirt Heather Grey",
        image_id: "13",
      },
      {
        value: "Woman T-shirt Pink",
        image_id: "14",
      },
      {
        value: "Woman T-shirt Lightblue",
        image_id: "15",
      },
      {
        value: "Sweatshirt White",
        image_id: "3",
      },
      {
        value: "Sweatshirt Heather Grey",
        image_id: "6",
      },
    ],
    position: 2,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "53",
      },
    ],
    conditions: [],
  },
  {
    id: 8962598010962,
    name: "Size",
    values: [
      {
        value: "S",
        image_id: "1",
      },
      {
        value: "M",
        image_id: "4",
      },
      {
        value: "L",
        image_id: "7",
      },
      {
        value: "XL",
        image_id: "10",
      },
      {
        value: "2XL",
        image_id: "2",
      },
      {
        value: "3XL",
        image_id: "5",
      },
      {
        value: "4XL",
        image_id: "8",
      },
      {
        value: "5XL",
        image_id: "11",
      },
    ],
    position: 3,
    functions: [],
    conditions: [],
  },
];
const variant_extract_data = (variations = []) => {
  let result = {};
  if (variations.length) {
    variations.forEach((variation) => {
      const { values, functions } = variation;
      if (values && functions && functions.length) {
        values.forEach((v) => {
          const { value, ...data } = v;
          result[value] = { ...data, functions: functions };
        });
      }
    });
  }
  return result;
};

variant_extract_data(variations);
