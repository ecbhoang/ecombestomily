export let sampleData = [
  {
    id: 7,
    type: "Text Input",
    label: "Custom Dad's Name",
    sort_id: 1,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: 3,
      },
    ],
    help_text: "Ex: William",
    add_chains: false,
    conditions: [],
    max_length: 7,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 1,
    type: "Swatch",
    label: "Base File",
    values: [
      {
        id: 0,
        sort_id: 1,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/1/d3101dfa-3920-4207-9c2c-11cf8c9c7a6b.png",
      },
    ],
    sort_id: 19,
    required: false,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "1",
      },
    ],
    conditions: [],
    hide_visually: true,
    variation_conditions: [],
  },
  {
    id: 28,
    type: "Text Input",
    label: "Custom The 2nd Kid's Number",
    sort_id: 9,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "9",
      },
    ],
    help_text: "Ex: 15",
    add_chains: false,
    conditions: [
      {
        id: 2,
        action: "show",
        watch_option: 19,
        desired_value: 1,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 2,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 22,
    type: "Swatch",
    label: "Choose The 4th Kid",
    values: [
      {
        id: 1,
        value: "Boy",
        sort_id: 1,
        tooltip: "Boy",
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/22/871da964-7158-435d-8856-97c7e600eaa4.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/22/0c6101ad-8e63-43ec-8b9d-212279b6ef11.png",
      },
      {
        id: 3,
        value: "Ponytail Hair Girl",
        sort_id: 3,
        tooltip: "Ponytail Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/22/5f1c102a-8532-4433-861e-7a228fb5d12f.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/22/0bbadd6d-7e11-45d3-bf5b-ebe8bda9c4ed.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/22/ca90469a-efe6-44e2-81b8-9ff450c769e9.png",
      },
    ],
    sort_id: 13,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "13",
      },
    ],
    help_text: "",
    conditions: [
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 30,
    type: "Text Input",
    label: "Custom The 4th Kid's Number",
    sort_id: 15,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "15",
      },
    ],
    help_text: "Ex: 9",
    add_chains: false,
    conditions: [
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 2,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 32,
    type: "Swatch",
    label: "Mockup Áo",
    values: [
      {
        id: 0,
        sort_id: 1,
        image_id: "1",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/32/618ad427-83aa-4f3a-8ae2-1a8eee1c9229.png",
      },
      {
        id: 1,
        sort_id: 2,
        image_id: "2",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/32/a5113e53-452e-4659-85fc-c80e18da36e8.png",
      },
    ],
    sort_id: 20,
    required: false,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "19",
      },
    ],
    add_chains: false,
    conditions: [],
    is_textarea: false,
    hide_visually: true,
    variation_conditions: [],
  },
  {
    id: 20,
    type: "Swatch",
    label: "Choose The 2nd Kid",
    values: [
      {
        id: 1,
        value: "Boy",
        sort_id: 1,
        tooltip: "Boy",
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/20/7b77abc8-e7e2-4166-9d93-1f27d278ff04.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/20/d8eb3078-2afd-4bf3-9fbc-13afa83337b7.png",
      },
      {
        id: 3,
        value: "Ponytail Hair Girl",
        sort_id: 3,
        tooltip: "Ponytail Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/20/75f43ced-e80a-4ae7-b470-ae6bbd0c43c6.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/20/a5e356e1-b4cb-460a-b511-194a75dc10ff.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/20/608f9423-afa3-446a-87dc-10f4d3f6483e.png",
      },
    ],
    sort_id: 7,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "7",
      },
    ],
    help_text: "",
    conditions: [
      {
        id: 2,
        action: "show",
        watch_option: 19,
        desired_value: 1,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 29,
    type: "Text Input",
    label: "Custom The 3rd Kid's Number ",
    sort_id: 12,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "12",
      },
    ],
    help_text: "Ex: 15",
    add_chains: false,
    conditions: [
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 2,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 27,
    type: "Text Input",
    label: "Custom The 5th Kid's Name",
    sort_id: 17,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "17",
      },
    ],
    help_text: "Ex: Robert",
    add_chains: false,
    conditions: [
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 7,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 8,
    type: "Text Input",
    label: "Custom Dad's Number",
    sort_id: 2,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: 4,
      },
    ],
    help_text: "Ex: 7",
    add_chains: false,
    conditions: [],
    max_length: 2,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 9,
    type: "Text Input",
    label: "Custom The 1st Kid's Name",
    sort_id: 5,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: 5,
      },
    ],
    help_text: "Ex: Henry",
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 19,
        desired_value: 0,
      },
      {
        id: 2,
        action: "show",
        watch_option: 19,
        desired_value: 1,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 7,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 24,
    type: "Text Input",
    label: "Custom The 2nd Kid's Name",
    sort_id: 8,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "8",
      },
    ],
    help_text: "Ex: James",
    add_chains: false,
    conditions: [
      {
        id: 2,
        action: "show",
        watch_option: 19,
        desired_value: 1,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 7,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 19,
    type: "Dropdown",
    label: "Choose The Number Of Kids",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        selected: true,
        product_id: "4458448f-b187-44ca-bd76-0bf1b03eeeb6",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        selected: false,
        product_id: "49f5c7d4-e90a-42f7-b602-b678c7acc8b2",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        selected: false,
        product_id: "cefd90e0-3642-4851-ad16-7e33c1ec0319",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        selected: false,
        product_id: "471e6825-e10b-4f9d-990b-29f8e715c9c0",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        selected: false,
        product_id: "3e89ac4b-9720-41fa-b92f-a0e0a1bfa620",
      },
    ],
    sort_id: 3,
    required: true,
    functions: [
      {
        id: 1,
        type: "product",
        text_id: "",
      },
    ],
    add_chains: false,
    conditions: [],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 2,
    type: "Swatch",
    label: "Choose The 1st Kid",
    values: [
      {
        id: 1,
        value: "Boy",
        sort_id: 1,
        tooltip: "Boy",
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/2/5f895ff8-0e53-4675-a586-20488152c1ae.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/2/e3d296b4-1330-4e14-9d5a-5fb4ff23d524.png",
      },
      {
        id: 3,
        value: "Ponytail Hair Girl",
        sort_id: 3,
        tooltip: "Ponytail Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/2/3cb76fcc-4547-4593-8653-ba3f5eed344b.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/2/db0f11b8-ec1e-4b34-8f23-212754dd2fa4.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/2/ac3ffe16-c1c6-4d30-8940-6060caae21b5.png",
      },
    ],
    sort_id: 4,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    help_text: "",
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 19,
        desired_value: 0,
      },
      {
        id: 2,
        action: "show",
        watch_option: 19,
        desired_value: 1,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 10,
    type: "Text Input",
    label: "Custom The 1st Kid's Number",
    sort_id: 6,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: 6,
      },
    ],
    help_text: "Ex: 2",
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 19,
        desired_value: 0,
      },
      {
        id: 2,
        action: "show",
        watch_option: 19,
        desired_value: 1,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 2,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 21,
    type: "Swatch",
    label: "Choose The 3rd Kid ",
    values: [
      {
        id: 1,
        value: "Boy",
        sort_id: 1,
        tooltip: "Boy",
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/21/e036f84f-a219-4581-90bb-ef3a358a0773.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/21/1c9cde70-9380-4d3d-b3f2-808fc71c28d6.png",
      },
      {
        id: 3,
        value: "Ponytail Hair Girl",
        sort_id: 3,
        tooltip: "Ponytail Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/21/53b59875-c7d5-4c7b-9c68-36e786de8f13.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/21/b1dd3760-2fb2-4ee0-bcc3-fb26783c46a8.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/21/0759bd78-0caf-4188-9d0e-cbb753d75828.png",
      },
    ],
    sort_id: 10,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    help_text: "",
    conditions: [
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 25,
    type: "Text Input",
    label: "Custom The 3rd Kid's Name",
    sort_id: 11,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "11",
      },
    ],
    help_text: "Ex: Jenny",
    add_chains: false,
    conditions: [
      {
        id: 3,
        action: "show",
        watch_option: 19,
        desired_value: 2,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 7,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 26,
    type: "Text Input",
    label: "Custom The 4th Kid's Name",
    sort_id: 14,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "14",
      },
    ],
    help_text: "Ex: Alex",
    add_chains: false,
    conditions: [
      {
        id: 4,
        action: "show",
        watch_option: 19,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 7,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 31,
    type: "Text Input",
    label: "Custom The 5th Kid's Number ",
    sort_id: 18,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "18",
      },
    ],
    help_text: "Ex: 12",
    add_chains: false,
    conditions: [
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    max_length: 2,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 23,
    type: "Swatch",
    label: "Choose The 5th Kid",
    values: [
      {
        id: 1,
        value: "Boy",
        sort_id: 1,
        tooltip: "Boy",
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/23/f94b7f06-e38a-4ff8-a812-39bc08c20766.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/23/5c050225-07c1-43bb-ae8e-4655c15fc77c.png",
      },
      {
        id: 3,
        value: "Ponytail Hair Girl",
        sort_id: 3,
        tooltip: "Ponytail Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/23/0ea74f47-daab-4a98-9a33-4cf545788b05.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/23/52d8021c-ec30-4cc5-9c55-c0ce507b50cd.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/f7826a1e-51de-4f9f-bf38-4b2b1c44b0c9/23/57b35181-26a6-4d29-a89d-668e26b41783.png",
      },
    ],
    sort_id: 16,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "16",
      },
    ],
    help_text: "",
    conditions: [
      {
        id: 5,
        action: "show",
        watch_option: 19,
        desired_value: 4,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
];

export let sampleData2 = [
  {
    id: 2,
    type: "Image Upload",
    label: "Upload Your Photo",
    sort_id: 2,
    required: true,
    functions: [],
    help_text:
      "1. Click SELECT IMAGE to upload your photo or RE-UPLOAD another if you want.\n2. Adjust the photo position (zoom in/out, rotate, move left/right/up/down) at the function buttons below the preview. \n*** For Mobile Users, click PREVIEW first, then adjust buttons will appear.\n3. Make sure your photo is high-quality, in focus, well-lit, and has no blur marks or creases.",
    libraryId: null,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 7,
        desired_value: 4,
      },
    ],
    hide_visually: false,
    minImageWidth: "0",
    minImageHeight: "0",
    file_upload_image_id: 1,
    variation_conditions: [],
  },
  {
    id: 6,
    type: "Image Upload",
    label: "Upload Your Photo",
    sort_id: 3,
    required: true,
    functions: [],
    help_text:
      "1. Click SELECT IMAGE to upload your photo or RE-UPLOAD another if you want.\n2. Adjust the photo position (zoom in/out, rotate, move left/right/up/down) at the function buttons below the preview. \n*** For Mobile Users, click PREVIEW first, then adjust buttons will appear.\n3. Make sure your photo is high-quality, in focus, well-lit, and has no blur marks or creases.",
    libraryId: null,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 7,
        desired_value: 2,
      },
    ],
    hide_visually: false,
    minImageWidth: "0",
    minImageHeight: "0",
    file_upload_image_id: "5",
    variation_conditions: [],
  },
  {
    id: 5,
    type: "Text Input",
    label: "Custom Year",
    sort_id: 5,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "2",
      },
    ],
    help_text: "Example: 2022",
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 3,
        desired_value: 2,
      },
      {
        id: 2,
        action: "show",
        watch_option: 3,
        desired_value: 3,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 3,
        desired_value: 5,
        combination_operator: "or",
      },
      {
        id: 4,
        action: "show",
        watch_option: 3,
        desired_value: 6,
        combination_operator: "or",
      },
    ],
    max_length: 4,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 7,
    type: "Dropdown",
    label: "Choose Photo Type",
    values: [
      {
        id: 4,
        value: "Remove Your Photo's Background ",
        sort_id: 1,
        image_id: 4,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/3b5a2c7c-11c6-4533-8b16-8d22d61f490a/3/2481424f-6bd5-4f8f-9974-66266496300d.png",
      },
      {
        id: 2,
        value: "Keep Your Photo's Background ",
        sort_id: 2,
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/3b5a2c7c-11c6-4533-8b16-8d22d61f490a/3/d9590f91-aecf-461d-8e6a-f249438139f0.png",
      },
    ],
    sort_id: 1,
    required: true,
    functions: [],
    libraryId: 427336,
    conditions: [],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 1,
    type: "Text Input",
    label: "Custom Names",
    sort_id: 4,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "3",
      },
    ],
    help_text: "Example: Sophia &amp; William",
    add_chains: false,
    conditions: [],
    max_length: 20,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
];

export let sampleData3 = [
  {
    id: 3,
    type: "Swatch",
    label: "No Hair",
    values: [
      {
        id: 1,
        value: "1000x1000",
        sort_id: 1,
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/3/625fcd5e-a4a5-4e2f-98d4-6629357bffaf.png",
      },
    ],
    sort_id: 24,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70219,
      },
    ],
    isCategory: 70219,
    hide_visually: true,
    variation_conditions: [],
  },
  {
    id: 9,
    type: "Swatch",
    label: "Choose Man's Hairstyle",
    values: [
      {
        id: 107,
        value: "Salf & Pepper 1",
        sort_id: 1,
        image_id: 107,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/3a4552ae-7e1c-46ef-af16-d405128ee76f.jpg",
      },
      {
        id: 108,
        value: "Salf & Pepper 2",
        sort_id: 2,
        image_id: 108,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/a179bb47-ccaf-4190-b257-459c66c73342.jpg",
      },
      {
        id: 109,
        value: "Salf & Pepper 3",
        sort_id: 3,
        image_id: 109,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/62ca09bc-47ff-4b7c-a966-abd239b46da7.jpg",
      },
      {
        id: 110,
        value: "Salf & Pepper 4",
        sort_id: 4,
        image_id: 110,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/497426c0-8bbe-4983-95b0-491c5f3834c8.jpg",
      },
      {
        id: 111,
        value: "Salf & Pepper 5",
        sort_id: 5,
        image_id: 111,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/260245be-a06d-40cc-8876-a60af55b2563.jpg",
      },
      {
        id: 112,
        value: "Salf & Pepper 6",
        sort_id: 6,
        image_id: 112,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/78d9a313-90c4-4b36-840b-4edaab022199.jpg",
      },
      {
        id: 113,
        value: "Salf & Pepper 7",
        sort_id: 7,
        image_id: 113,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/d8cc9c68-03c2-4924-8f0f-059f811ff5fa.jpg",
      },
      {
        id: 114,
        value: "Salf & Pepper 8",
        sort_id: 8,
        image_id: 114,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/67962f7f-9e83-4ba6-abd5-65fefb93e819.jpg",
      },
      {
        id: 115,
        value: "Salf & Pepper 9",
        sort_id: 9,
        image_id: 115,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/0294732b-f2c0-4778-8c50-d43ace6e53e4.jpg",
      },
      {
        id: 116,
        value: "Salf & Pepper 10",
        sort_id: 10,
        image_id: 116,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/2e0f825a-3a32-4c73-95ce-28a789a9ae31.jpg",
      },
      {
        id: 117,
        value: "Salf & Pepper 11",
        sort_id: 11,
        image_id: 117,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/d82efc71-bb57-4cd8-92c8-880240b41ca4.jpg",
      },
      {
        id: 118,
        value: "Salf & Pepper 12",
        sort_id: 12,
        image_id: 118,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/d88dd5d8-b3f9-4dce-8f3d-06374bdb5d40.jpg",
      },
      {
        id: 119,
        value: "Salf & Pepper 13",
        sort_id: 13,
        image_id: 119,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/a9ddcdcb-2bcb-4e93-8a10-e148c33ec3b2.jpg",
      },
      {
        id: 120,
        value: "Salf & Pepper 14",
        sort_id: 14,
        image_id: 120,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/8fe41ab4-0b0e-498b-b62b-d17d7246285b.jpg",
      },
      {
        id: 121,
        value: "Salf & Pepper 15",
        sort_id: 15,
        image_id: 121,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/2173fab7-b284-4203-9ff6-1aeded685442.jpg",
      },
      {
        id: 122,
        value: "Salf & Pepper 16",
        sort_id: 16,
        image_id: 122,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/ed476922-4357-4544-b058-95dff26e445d.jpg",
      },
      {
        id: 123,
        value: "Salf & Pepper 17",
        sort_id: 17,
        image_id: 123,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/bc17fb40-6f29-4d9a-ab9b-d62bc8850e29.jpg",
      },
      {
        id: 124,
        value: "Salf & Pepper 18",
        sort_id: 18,
        image_id: 124,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/d8ad904a-95a2-4ecb-838e-cb7dbc0151fd.jpg",
      },
      {
        id: 125,
        value: "Salf & Pepper 19",
        sort_id: 19,
        image_id: 125,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/386db634-c052-451e-be57-81e9455cfe6c.jpg",
      },
      {
        id: 126,
        value: "Salf & Pepper 20",
        sort_id: 20,
        image_id: 126,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/e53992f1-3ad7-45e7-8ab0-11a5861f1eb4.jpg",
      },
      {
        id: 127,
        value: "Salf & Pepper 21",
        sort_id: 21,
        image_id: 127,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/9/38bfa87c-eef1-4f7b-bf2d-085912f37b19.jpg",
      },
    ],
    sort_id: 30,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70229,
      },
    ],
    isCategory: 70229,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 32,
    type: "Swatch",
    label: "Choose Man's Beard Style",
    values: [
      {
        id: 32,
        value: "Grey 1",
        sort_id: 1,
        image_id: 32,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/58c9f8ce-f7e6-450e-b909-025ac28fcf1b.jpg",
      },
      {
        id: 33,
        value: "Grey 2",
        sort_id: 2,
        image_id: 33,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/17fbed23-fb4c-412e-99fa-33458d8f97af.jpg",
      },
      {
        id: 34,
        value: "Grey 3",
        sort_id: 3,
        image_id: 34,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/315fd63d-25bc-496e-867e-9bf766f28f0b.jpg",
      },
      {
        id: 35,
        value: "Grey 4",
        sort_id: 4,
        image_id: 35,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/195dc26f-ba85-4100-a6c3-0e1d5b9c4c13.jpg",
      },
      {
        id: 36,
        value: "Grey 5",
        sort_id: 5,
        image_id: 36,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/c1ee137c-99de-479d-83e0-8b558e7a4548.jpg",
      },
      {
        id: 37,
        value: "Grey 6",
        sort_id: 6,
        image_id: 37,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/2bbe748c-9509-4958-84f6-2ea927fedcc9.jpg",
      },
      {
        id: 38,
        value: "Grey 7",
        sort_id: 7,
        image_id: 38,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/21ba2fd2-9fd5-48bb-9aae-94424d920150.jpg",
      },
      {
        id: 39,
        value: "Grey 8",
        sort_id: 8,
        image_id: 39,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/0bd28308-f806-4e6d-bef7-91ed78ae76fb.jpg",
      },
      {
        id: 40,
        value: "Grey 9",
        sort_id: 9,
        image_id: 40,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/db6b9004-9a58-4944-b72e-f3a6d4bf93e5.jpg",
      },
      {
        id: 41,
        value: "Grey 10",
        sort_id: 10,
        image_id: 41,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/32/907d9b4b-3f15-4ad0-ac8c-b74d2df35c04.jpg",
      },
    ],
    sort_id: 36,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70240,
      },
    ],
    isCategory: 70240,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 7,
    type: "Swatch",
    label: "Choose Man's Hairstyle",
    values: [
      {
        id: 65,
        value: "Grey 1",
        sort_id: 1,
        image_id: 65,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/3cbae540-cdf2-457f-a1c7-975105c1977b.jpg",
      },
      {
        id: 66,
        value: "Grey 2",
        sort_id: 2,
        image_id: 66,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/f122cc0a-418f-4dbb-b6d1-b3b0040594fa.jpg",
      },
      {
        id: 67,
        value: "Grey 3",
        sort_id: 3,
        image_id: 67,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/023843bf-4e25-4950-8b7e-f717d83f3edf.jpg",
      },
      {
        id: 68,
        value: "Grey 4",
        sort_id: 4,
        image_id: 68,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/92be4f66-f305-4afd-b7d0-dbb1447b89c7.jpg",
      },
      {
        id: 69,
        value: "Grey 5",
        sort_id: 5,
        image_id: 69,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/af41a1fe-3f62-45b5-8cb3-508bcc8005cb.jpg",
      },
      {
        id: 70,
        value: "Grey 6",
        sort_id: 6,
        image_id: 70,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/8f44eb28-ffec-4d1b-8054-c50cdb0055a6.jpg",
      },
      {
        id: 71,
        value: "Grey 7",
        sort_id: 7,
        image_id: 71,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/3e0656eb-367c-4cbf-a6e9-02d1cf330ccb.jpg",
      },
      {
        id: 72,
        value: "Grey 8",
        sort_id: 8,
        image_id: 72,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/c1edd2da-4bc4-401d-b814-e31adbb5835d.jpg",
      },
      {
        id: 73,
        value: "Grey 9",
        sort_id: 9,
        image_id: 73,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/7e9d81fa-4d78-4879-96e3-23f7dd295cfb.jpg",
      },
      {
        id: 74,
        value: "Grey 10",
        sort_id: 10,
        image_id: 74,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/9ab5d250-0fb8-40eb-9998-0a787fb448c4.jpg",
      },
      {
        id: 75,
        value: "Grey 11",
        sort_id: 11,
        image_id: 75,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/e43713d6-b6a5-4acc-9bc0-88805e1f1737.jpg",
      },
      {
        id: 76,
        value: "Grey 12",
        sort_id: 12,
        image_id: 76,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/3900df35-d82f-4149-9b4b-58bf8a6f6f26.jpg",
      },
      {
        id: 77,
        value: "Grey 13",
        sort_id: 13,
        image_id: 77,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/5e3a6fb9-9165-48c6-8a7b-ae5edce1445b.jpg",
      },
      {
        id: 78,
        value: "Grey 14",
        sort_id: 14,
        image_id: 78,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/69a5bc25-b7f5-49fe-bf81-2ba22cac4c7a.jpg",
      },
      {
        id: 79,
        value: "Grey 15",
        sort_id: 15,
        image_id: 79,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/0afb7bd5-84e0-4663-bd30-a5aa46171321.jpg",
      },
      {
        id: 80,
        value: "Grey 16",
        sort_id: 16,
        image_id: 80,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/fab23b63-d057-4b89-b9a6-568bba7a0eb0.jpg",
      },
      {
        id: 81,
        value: "Grey 17",
        sort_id: 17,
        image_id: 81,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/23502a96-41d5-487a-9faa-acd72270091b.jpg",
      },
      {
        id: 82,
        value: "Grey 18",
        sort_id: 18,
        image_id: 82,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/c10faae6-6fc1-460e-a1fe-982e84959b93.jpg",
      },
      {
        id: 83,
        value: "Grey 19",
        sort_id: 19,
        image_id: 83,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/285fea95-26fd-4912-bbbb-1a47652fefb0.jpg",
      },
      {
        id: 84,
        value: "Grey 20",
        sort_id: 20,
        image_id: 84,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/222f045e-321e-46a3-8c3c-8c5fad1884bb.jpg",
      },
      {
        id: 85,
        value: "Grey 21",
        sort_id: 21,
        image_id: 85,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/7/b9664f4f-17c3-4cb6-8074-c8ec61cb4ebb.jpg",
      },
    ],
    sort_id: 28,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70227,
      },
    ],
    isCategory: 70227,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 31,
    type: "Swatch",
    label: "Choose Man's Beard Style",
    values: [
      {
        id: 22,
        value: "Brown 1",
        sort_id: 1,
        image_id: 22,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/9b099822-4f3a-4a37-8334-e650dfe149e8.jpg",
      },
      {
        id: 23,
        value: "Brown 2",
        sort_id: 2,
        image_id: 23,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/2c5395a8-a04d-49be-9992-ba6c2654de94.jpg",
      },
      {
        id: 24,
        value: "Brown 3",
        sort_id: 3,
        image_id: 24,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/1a2bb1f1-f146-43ac-bb95-3ad78491d68c.jpg",
      },
      {
        id: 25,
        value: "Brown 4",
        sort_id: 4,
        image_id: 25,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/8a1addfe-7f73-4503-8497-3013107b91fc.jpg",
      },
      {
        id: 26,
        value: "Brown 5",
        sort_id: 5,
        image_id: 26,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/de69f9ed-2159-4a65-8611-acc39852f4d6.jpg",
      },
      {
        id: 27,
        value: "Brown 6",
        sort_id: 6,
        image_id: 27,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/8c505a02-de75-42f8-b63a-3705be09e3b6.jpg",
      },
      {
        id: 28,
        value: "Brown 7",
        sort_id: 7,
        image_id: 28,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/5edadba5-dcbd-4f04-a82b-b267fe4a9c59.jpg",
      },
      {
        id: 29,
        value: "Brown 8",
        sort_id: 8,
        image_id: 29,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/ad6e6194-4785-48a8-a924-356fae4ca582.jpg",
      },
      {
        id: 30,
        value: "Brown 9",
        sort_id: 9,
        image_id: 30,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/6d0fc693-70d1-4714-aebb-6885450e5c15.jpg",
      },
      {
        id: 31,
        value: "Brown 10",
        sort_id: 10,
        image_id: 31,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/31/9e1958a1-eeb5-4271-946c-717c9806b13d.jpg",
      },
    ],
    sort_id: 35,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70239,
      },
    ],
    isCategory: 70239,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 90,
    type: "Dropdown",
    label: "Choose Quote",
    values: [
      {
        id: 0,
        value: "And We Lived Happily Ever After",
        sort_id: 1,
        image_id: "1",
        selected: false,
      },
      {
        id: 1,
        value: "Drive Slow Drunk Campers Matter",
        sort_id: 2,
        image_id: "2",
        selected: false,
      },
      {
        id: 2,
        value: "Husband And Wife Camping Partners For Life",
        sort_id: 3,
        image_id: "3",
        selected: false,
      },
      {
        id: 3,
        value: "Let's Sit By The Campfire And Watch People Park Their Campers",
        sort_id: 4,
        image_id: "4",
        selected: false,
      },
      {
        id: 4,
        value: "Making Memories One Campsite At A Time",
        sort_id: 5,
        image_id: "5",
        selected: false,
      },
      {
        id: 5,
        value: "You And Me We Got This",
        sort_id: 6,
        image_id: "6",
        selected: false,
      },
    ],
    sort_id: 1,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "21",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 73,
    type: "Swatch",
    label: "Choose RVs Or Tent",
    values: [
      {
        id: 0,
        value: "5th Wheel",
        sort_id: 1,
        tooltip: "5th Wheel",
        image_id: "2",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/b4947984-435d-4202-8478-a44b6eed6844.jpg",
      },
      {
        id: 1,
        value: "Camping Truck",
        sort_id: 2,
        tooltip: "Camping Truck",
        image_id: "3",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/025e33cd-55aa-4312-a68a-dd0eacc3abd1.jpg",
      },
      {
        id: 2,
        value: "Camping Van",
        sort_id: 3,
        tooltip: "Camping Van",
        image_id: "4",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/f8d7c8f6-5ce6-4a82-8c5d-6bc0de3e5c6d.jpg",
      },
      {
        id: 3,
        value: "Class A",
        sort_id: 4,
        tooltip: "Class A",
        image_id: "5",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/5449a178-8857-468a-bbd7-ea889d021bc0.jpg",
      },
      {
        id: 4,
        value: "Class C",
        sort_id: 5,
        tooltip: "Class C",
        image_id: "6",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/dc57c3c9-fd27-4505-bd4f-e24a7f50657d.jpg",
      },
      {
        id: 5,
        value: "Popup ",
        sort_id: 6,
        tooltip: "Popup ",
        image_id: "7",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/ecb954e9-7460-49a3-8001-965258ace5c3.jpg",
      },
      {
        id: 6,
        value: "Travel Trailer",
        sort_id: 7,
        tooltip: "Travel Trailer",
        image_id: "8",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/82975191-e5a6-4c6d-9be9-77bcac50a21e.jpg",
      },
      {
        id: 7,
        value: "Vintage Trailer",
        sort_id: 8,
        tooltip: "Vintage Trailer",
        image_id: "9",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/9c5a4771-3b28-43c5-8e3a-5e9d87c4dc5a.jpg",
      },
      {
        id: 8,
        value: "Camping Tent",
        sort_id: 9,
        tooltip: "Camping Tent",
        image_id: "10",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/73/94d62eba-071e-49e7-b7c1-d995e5dd42fd.jpg",
      },
    ],
    sort_id: 2,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "17",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 10,
    type: "Swatch",
    label: "Choose Woman's Skin Color",
    values: [
      {
        id: 3,
        value: "Light",
        sort_id: 1,
        tooltip: "Light",
        bg_color: "#FDDDC4",
        image_id: 3,
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 4,
        value: "Tan",
        sort_id: 2,
        tooltip: "Tan",
        bg_color: "#F0B387",
        image_id: 4,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 2,
        value: "Dark",
        sort_id: 3,
        tooltip: "Dark",
        bg_color: "#BE6F46",
        image_id: 2,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
    ],
    sort_id: 3,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "1",
      },
      {
        id: 2,
        type: "image",
        text_id: "",
        image_id: "3",
      },
      {
        id: 3,
        type: "image",
        text_id: "",
        image_id: "7",
      },
    ],
    libraryId: 90143,
    conditions: [],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 20,
    type: "Swatch",
    label: "Woman Pants",
    values: [
      {
        id: 2,
        value: "Value 2",
        sort_id: 1,
        image_id: 2,
        selected: true,
        thumb_image: null,
      },
    ],
    sort_id: 4,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "4",
      },
    ],
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 10,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 10,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 10,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: true,
    variation_conditions: [],
  },
  {
    id: 11,
    type: "Swatch",
    label: "Choose Woman's Hair Color",
    isMain: true,
    values: [
      {
        id: 62807,
        value: "Black",
        sort_id: 1,
        tooltip: "Black",
        bg_color: "#000000",
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 62808,
        value: "Blonde",
        sort_id: 2,
        tooltip: "Blonde",
        bg_color: "#E7B367",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 62809,
        value: "Brown",
        sort_id: 3,
        tooltip: "Brown",
        bg_color: "#5C432F",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 62810,
        value: "Grey",
        sort_id: 4,
        tooltip: "Grey",
        bg_color: "#B9B9B7",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 62811,
        value: "Light Blonde",
        sort_id: 5,
        tooltip: "Light Blonde",
        bg_color: "#FBE7A0",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 62812,
        value: "Red",
        sort_id: 6,
        tooltip: "Red",
        bg_color: "#752109",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
    ],
    sort_id: 5,
    required: true,
    functions: [],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 10,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 10,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 10,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 13,
    type: "Swatch",
    label: "Choose Woman's Hairstyle",
    values: [
      {
        id: 2,
        value: "Black 1",
        sort_id: 1,
        image_id: 2,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/1a0a3fd9-249c-4ddc-af08-c627dee6149b.jpg",
      },
      {
        id: 3,
        value: "Black 2",
        sort_id: 2,
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/71a660bf-ca02-4ffe-9bab-78207a6e0af9.jpg",
      },
      {
        id: 4,
        value: "Black 3",
        sort_id: 3,
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/564a7683-bbaa-48d7-adf9-d2b1c86b8388.jpg",
      },
      {
        id: 5,
        value: "Black 4",
        sort_id: 4,
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/64367741-bb85-4d8e-b027-141a5f15c50c.jpg",
      },
      {
        id: 6,
        value: "Black 5",
        sort_id: 5,
        image_id: 6,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/52194c6f-0cdd-4466-bfca-8e43ac7723ba.jpg",
      },
      {
        id: 7,
        value: "Black 6",
        sort_id: 6,
        image_id: 7,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/5b958a53-2580-4599-b001-38d1efbae1a6.jpg",
      },
      {
        id: 8,
        value: "Black 7",
        sort_id: 7,
        image_id: 8,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/effe814c-0ecb-44be-a6fe-635038cb61b6.jpg",
      },
      {
        id: 9,
        value: "Black 8",
        sort_id: 8,
        image_id: 9,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/c8908fcb-8dfd-40ed-a18e-3fe2e22e0186.jpg",
      },
      {
        id: 10,
        value: "Black 9",
        sort_id: 9,
        image_id: 10,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/8e6de583-081d-4908-8a9e-86232e64b5db.jpg",
      },
      {
        id: 11,
        value: "Black 10",
        sort_id: 10,
        image_id: 11,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/cdb97ad2-59d2-4688-a4c7-f674328f3083.jpg",
      },
      {
        id: 12,
        value: "Black 11",
        sort_id: 11,
        image_id: 12,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/5b531ca3-3d8d-4be7-a431-5d53d83abe83.jpg",
      },
      {
        id: 13,
        value: "Black 12",
        sort_id: 12,
        image_id: 13,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/13/a369e6c1-7958-41c6-be92-d6e5804dbf50.jpg",
      },
    ],
    sort_id: 6,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 11,
        desired_value: 62807,
      },
    ],
    isCategory: 62807,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 14,
    type: "Swatch",
    label: "Choose Woman's Hairstyle",
    values: [
      {
        id: 14,
        value: "Blonde 1",
        sort_id: 1,
        image_id: 14,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/aefc4b09-9edf-4fa6-a074-e4d0e0fb727a.jpg",
      },
      {
        id: 15,
        value: "Blonde 2",
        sort_id: 2,
        image_id: 15,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/ab9c52e7-e860-47c5-bced-c6b767376e6b.jpg",
      },
      {
        id: 16,
        value: "Blonde 3",
        sort_id: 3,
        image_id: 16,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/6839a55f-5264-4259-b117-4f6c89494c19.jpg",
      },
      {
        id: 17,
        value: "Blonde 4",
        sort_id: 4,
        image_id: 17,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/f5284343-f9ff-4526-a4fc-d1ef890694c5.jpg",
      },
      {
        id: 18,
        value: "Blonde 5",
        sort_id: 5,
        image_id: 18,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/2ff14a05-002b-4409-9e76-cc5b792ea18f.jpg",
      },
      {
        id: 19,
        value: "Blonde 6",
        sort_id: 6,
        image_id: 19,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/f64c2308-c002-4890-be7e-f23032388979.jpg",
      },
      {
        id: 20,
        value: "Blonde 7",
        sort_id: 7,
        image_id: 20,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/8cb7bb1e-ed39-4945-8480-5a4976b2dd89.jpg",
      },
      {
        id: 21,
        value: "Blonde 8",
        sort_id: 8,
        image_id: 21,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/3ea1786d-7901-4e0e-be2a-fd609b660b3e.jpg",
      },
      {
        id: 22,
        value: "Blonde 9",
        sort_id: 9,
        image_id: 22,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/6c493e46-6e26-4439-a27a-dbec5e7af3af.jpg",
      },
      {
        id: 23,
        value: "Blonde 10",
        sort_id: 10,
        image_id: 23,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/c61f26aa-a758-42ce-81ca-1c0112ddef96.jpg",
      },
      {
        id: 24,
        value: "Blonde 11",
        sort_id: 11,
        image_id: 24,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/0f70921f-ae13-45ea-a35c-a9bf8b576b43.jpg",
      },
      {
        id: 25,
        value: "Blonde 12",
        sort_id: 12,
        image_id: 25,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/14/2b0e4443-4a63-4913-8d26-2a6134e385a1.jpg",
      },
    ],
    sort_id: 7,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 11,
        desired_value: 62808,
      },
    ],
    isCategory: 62808,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 15,
    type: "Swatch",
    label: "Choose Woman's Hairstyle",
    values: [
      {
        id: 26,
        value: "Brown 1",
        sort_id: 1,
        image_id: 26,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/36aad303-9323-4e92-a572-77fe59a91d3f.jpg",
      },
      {
        id: 27,
        value: "Brown 2",
        sort_id: 2,
        image_id: 27,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/cf0bbb36-e270-48fb-8242-87c17794bb86.jpg",
      },
      {
        id: 28,
        value: "Brown 3",
        sort_id: 3,
        image_id: 28,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/9ad9dc12-9f2d-4c66-8988-8c4a1284b9a6.jpg",
      },
      {
        id: 29,
        value: "Brown 4",
        sort_id: 4,
        image_id: 29,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/1ebf38ea-4212-4f25-bf78-e26eebc8d10e.jpg",
      },
      {
        id: 30,
        value: "Brown 5",
        sort_id: 5,
        image_id: 30,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/e506a7ef-3fad-49b5-8225-90407b488aa7.jpg",
      },
      {
        id: 31,
        value: "Brown 6",
        sort_id: 6,
        image_id: 31,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/7c24a353-42dd-4b2f-bc2f-b28124cba741.jpg",
      },
      {
        id: 32,
        value: "Brown 7",
        sort_id: 7,
        image_id: 32,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/6a757a17-7915-4a06-8d83-15ee44d7da3a.jpg",
      },
      {
        id: 33,
        value: "Brown 8",
        sort_id: 8,
        image_id: 33,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/a1760644-1090-47b7-81da-a09fc8e90e57.jpg",
      },
      {
        id: 34,
        value: "Brown 9",
        sort_id: 9,
        image_id: 34,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/39dcbc18-fa25-4590-85a1-37064a4708af.jpg",
      },
      {
        id: 35,
        value: "Brown 10",
        sort_id: 10,
        image_id: 35,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/6212f8b2-6c6d-4539-8e5e-ceac85fa29a8.jpg",
      },
      {
        id: 36,
        value: "Brown 11",
        sort_id: 11,
        image_id: 36,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/fadce716-24b8-4090-a1b3-440e2968e324.jpg",
      },
      {
        id: 37,
        value: "Brown 12",
        sort_id: 12,
        image_id: 37,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/15/a12c1714-1d39-4aec-83e5-76cd5b41f296.jpg",
      },
    ],
    sort_id: 8,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 11,
        desired_value: 62809,
      },
    ],
    isCategory: 62809,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 16,
    type: "Swatch",
    label: "Choose Woman's Hairstyle",
    values: [
      {
        id: 38,
        value: "Grey 1",
        sort_id: 1,
        image_id: 38,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/fadf158a-ee6e-4bde-8ed8-1a8563ce5bc9.jpg",
      },
      {
        id: 39,
        value: "Grey 2",
        sort_id: 2,
        image_id: 39,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/bcd4e3ce-8311-43f8-9fb5-deb8b442a36a.jpg",
      },
      {
        id: 40,
        value: "Grey 3",
        sort_id: 3,
        image_id: 40,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/7e49e567-72c7-4023-b1ea-f489a5d89560.jpg",
      },
      {
        id: 41,
        value: "Grey 4",
        sort_id: 4,
        image_id: 41,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/f7cd2372-8077-4645-95a7-1b3c987b0d97.jpg",
      },
      {
        id: 42,
        value: "Grey 5",
        sort_id: 5,
        image_id: 42,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/6aca4b33-68e5-4dbd-91db-59c6a40ae38e.jpg",
      },
      {
        id: 43,
        value: "Grey 6",
        sort_id: 6,
        image_id: 43,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/c307fa64-5d43-438e-9e56-1ab1f2d06e9e.jpg",
      },
      {
        id: 44,
        value: "Grey 7",
        sort_id: 7,
        image_id: 44,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/59db59a9-c614-4255-8190-c88cbc5fe637.jpg",
      },
      {
        id: 45,
        value: "Grey 8",
        sort_id: 8,
        image_id: 45,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/53ba2c53-5772-4bb3-b727-b44f7812422c.jpg",
      },
      {
        id: 46,
        value: "Grey 9",
        sort_id: 9,
        image_id: 46,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/1c78a973-5478-4a5e-8299-54fac183655f.jpg",
      },
      {
        id: 47,
        value: "Grey 10",
        sort_id: 10,
        image_id: 47,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/ee9ded1a-eb7d-44d5-b3c6-d7a1686bcb36.jpg",
      },
      {
        id: 48,
        value: "Grey 11",
        sort_id: 11,
        image_id: 48,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/ca5f3d64-2992-458f-9d68-4581ac37ed5d.jpg",
      },
      {
        id: 49,
        value: "Grey 12",
        sort_id: 12,
        image_id: 49,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/16/9a56f177-cb77-43ac-8dd5-a074b4441c34.jpg",
      },
    ],
    sort_id: 9,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 11,
        desired_value: 62810,
      },
    ],
    isCategory: 62810,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 17,
    type: "Swatch",
    label: "Choose Woman's Hairstyle",
    values: [
      {
        id: 50,
        value: "Light Blonde 1",
        sort_id: 1,
        image_id: 50,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/a63b3ef1-dcdd-4d40-9d5f-e8152aabc3bf.jpg",
      },
      {
        id: 51,
        value: "Light Blonde 2",
        sort_id: 2,
        image_id: 51,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/9a5ea514-eb90-48c6-91d1-6ecb2f4d3e02.jpg",
      },
      {
        id: 52,
        value: "Light Blonde 3",
        sort_id: 3,
        image_id: 52,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/5a08e54c-75b8-4cb0-8791-baf85d04e105.jpg",
      },
      {
        id: 53,
        value: "Light Blonde 4",
        sort_id: 4,
        image_id: 53,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/c902b10c-9d6a-4eca-a319-6adf6734b1c9.jpg",
      },
      {
        id: 54,
        value: "Light Blonde 5",
        sort_id: 5,
        image_id: 54,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/c6971041-7dd2-43cc-9324-3d74538e98bc.jpg",
      },
      {
        id: 55,
        value: "Light Blonde 6",
        sort_id: 6,
        image_id: 55,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/4ee783d2-649b-4d82-9184-bc794c7f9a8a.jpg",
      },
      {
        id: 56,
        value: "Light Blonde 7",
        sort_id: 7,
        image_id: 56,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/1f478aad-73b7-48fd-909f-21752b73dfd5.jpg",
      },
      {
        id: 57,
        value: "Light Blonde 8",
        sort_id: 8,
        image_id: 57,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/fc53bd18-9448-4823-83c0-930639b84764.jpg",
      },
      {
        id: 58,
        value: "Light Blonde 9",
        sort_id: 9,
        image_id: 58,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/c69e0b81-dc61-4dab-96c9-56c021091312.jpg",
      },
      {
        id: 59,
        value: "Light Blonde 10",
        sort_id: 10,
        image_id: 59,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/9a6ec1c3-0c99-444e-82cd-72f39e29119e.jpg",
      },
      {
        id: 60,
        value: "Light Blonde 11",
        sort_id: 11,
        image_id: 60,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/1b4b02d3-05d7-473b-86bd-120a6dfbd44c.jpg",
      },
      {
        id: 61,
        value: "Light Blonde 12",
        sort_id: 12,
        image_id: 61,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/17/7bcc3038-cd52-4582-8a3a-66822cafa072.jpg",
      },
    ],
    sort_id: 10,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 11,
        desired_value: 62811,
      },
    ],
    isCategory: 62811,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 18,
    type: "Swatch",
    label: "Choose Woman's Hairstyle",
    values: [
      {
        id: 62,
        value: "Red 1",
        sort_id: 1,
        image_id: 62,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/d9419360-dfdd-4907-a188-9880945fff9e.jpg",
      },
      {
        id: 63,
        value: "Red 2",
        sort_id: 2,
        image_id: 63,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/c435515f-8e01-404a-b791-295606af1cef.jpg",
      },
      {
        id: 64,
        value: "Red 3",
        sort_id: 3,
        image_id: 64,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/e4ad9884-102e-40f4-b67c-3a0bba820725.jpg",
      },
      {
        id: 65,
        value: "Red 4",
        sort_id: 4,
        image_id: 65,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/14c810b1-f762-4220-a928-7db7175eeba5.jpg",
      },
      {
        id: 66,
        value: "Red 5",
        sort_id: 5,
        image_id: 66,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/283f0390-25aa-4f92-8f55-ffeb3f325fca.jpg",
      },
      {
        id: 67,
        value: "Red 6",
        sort_id: 6,
        image_id: 67,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/ebfe30ec-c463-4606-b6be-9bb15f9a9ecd.jpg",
      },
      {
        id: 68,
        value: "Red 7",
        sort_id: 7,
        image_id: 68,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/f07f507d-52e6-4faa-9e3e-bca44593345f.jpg",
      },
      {
        id: 69,
        value: "Red 8",
        sort_id: 8,
        image_id: 69,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/2a4f9288-05c2-4253-8f7a-719f3caa893c.jpg",
      },
      {
        id: 70,
        value: "Red 9",
        sort_id: 9,
        image_id: 70,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/d71607f2-a53e-48d0-b700-688927e31514.jpg",
      },
      {
        id: 71,
        value: "Red 10",
        sort_id: 10,
        image_id: 71,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/9da3e580-af10-4c60-b27d-27c94680c387.jpg",
      },
      {
        id: 72,
        value: "Red 11",
        sort_id: 11,
        image_id: 72,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/5a2b0d05-6ccf-4577-b18a-d632ce7ffd86.jpg",
      },
      {
        id: 73,
        value: "Red 12",
        sort_id: 12,
        image_id: 73,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/18/7db4895a-9fee-446e-a78c-4df5d9ab0c51.jpg",
      },
    ],
    sort_id: 11,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    libraryId: 90145,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 11,
        desired_value: 62812,
      },
    ],
    isCategory: 62812,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 22,
    type: "Swatch",
    label: "Choose Woman's Shirt Color",
    values: [
      {
        id: 2,
        value: "Black",
        sort_id: 1,
        tooltip: "Black",
        bg_color: "#000000",
        image_id: 2,
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 3,
        value: "Blue",
        sort_id: 2,
        tooltip: "Blue",
        bg_color: "#3569B7",
        image_id: 3,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 4,
        value: "Green",
        sort_id: 3,
        tooltip: "Green",
        bg_color: "#5A844F",
        image_id: 4,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 5,
        value: "Grey",
        sort_id: 4,
        tooltip: "Grey",
        bg_color: "#909090",
        image_id: 5,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 6,
        value: "Pink",
        sort_id: 5,
        tooltip: "Pink",
        bg_color: "#F8D4E0",
        image_id: 6,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 7,
        value: "Red",
        sort_id: 6,
        tooltip: "Red",
        bg_color: "#BD292D",
        image_id: 7,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 8,
        value: "White",
        sort_id: 7,
        tooltip: "White",
        bg_color: "#FFFFFF",
        image_id: 8,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
    ],
    sort_id: 12,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "5",
      },
    ],
    libraryId: 120831,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 10,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 10,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 10,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 75,
    type: "Dropdown",
    label: "Choose Woman's Drink",
    values: [
      {
        id: 0,
        value: "Beer",
        sort_id: 1,
        selected: true,
      },
      {
        id: 1,
        value: "Cocktail",
        sort_id: 2,
        selected: false,
      },
      {
        id: 2,
        value: "Coffee, Tea and Cocoa",
        sort_id: 3,
        selected: false,
      },
      {
        id: 3,
        value: "Fruit Juice and Smoothie",
        sort_id: 4,
        selected: false,
      },
      {
        id: 4,
        value: "Liquor and Spirit",
        sort_id: 5,
        selected: false,
      },
      {
        id: 5,
        value: "Soft Drink",
        sort_id: 6,
        selected: false,
      },
      {
        id: 6,
        value: "Wine",
        sort_id: 7,
        selected: false,
      },
    ],
    sort_id: 13,
    required: true,
    functions: [],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 10,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 10,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 10,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 77,
    type: "Swatch",
    label: "Beer",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "2",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/24833c2c-55a6-427d-ab51-5f597354b213.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "3",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/d10ca550-a220-416f-946d-24208f00f917.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "4",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/f3734c3b-ec82-4be6-9ff8-69cc59e34008.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "5",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/25e373f8-1444-4eed-8667-463f8923c243.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "6",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/357260c9-0861-4c40-902e-03c61eaf3cf0.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "7",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/328c3239-dee9-43e0-bf69-36e8133f8d52.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "8",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/55a8b08c-cd9d-4b80-a991-5c07ebc14ff1.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "9",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/7327b44d-3b18-4f01-8446-608b34e95f7f.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "10",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/39a8f911-c34f-46d6-bb2d-9e1599295c85.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "11",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/394f09ee-7f0e-4f4b-b61c-253416e8bc98.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "12",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/4be75086-8e15-4461-8add-ff7d0f33a837.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "13",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/77/e4be4105-6904-455f-8420-bc9245d73476.jpg",
      },
    ],
    sort_id: 14,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 0,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 78,
    type: "Swatch",
    label: "Cocktail",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "14",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/c991666b-0b26-41fb-88a5-922cc9e0fcbd.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "15",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/06d3b73c-cc69-4dfb-b77d-7c69516954a5.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "16",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/bfda2090-8188-428d-8fe6-38b8cb509705.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "17",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/aefcee6f-19d3-42a3-9697-6eb6d608f4ce.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "18",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/4290f296-0036-4d28-87bd-3d012394eb13.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "19",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/d73c9283-399d-49ab-aa6d-5606271c9a32.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "20",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/e76d090a-09fa-4d2f-924a-9403b7eba708.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "21",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/cf09fe53-f864-4e3b-be62-6b0b07a860cd.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "22",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/e8ef7fb1-bafa-40e3-bbfc-2b7b94bdca82.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "23",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/7e8892ee-b529-46c1-9d5c-fea7da2dc3de.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "24",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/509120aa-8e34-43a2-8a31-fd676a3cc94e.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "25",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/73a7131d-e704-48fc-b6fa-e352bc9a752c.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "26",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/224a14b5-e799-45ab-abf3-6a9bdbbd3f8d.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "27",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/281cdf4d-c312-4479-8213-e69f92376f3d.jpg",
      },
      {
        id: 14,
        value: "15",
        sort_id: 15,
        image_id: "28",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/61760ccd-0834-43ef-841a-42f3e4a9e2a2.jpg",
      },
      {
        id: 15,
        value: "16",
        sort_id: 16,
        image_id: "29",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/78/dd7e5901-29de-482f-8509-3fd338343a51.jpg",
      },
    ],
    sort_id: 15,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 1,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 79,
    type: "Swatch",
    label: "Coffee, Tea and Cocoa",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "30",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/ca9844df-fe26-4b18-baec-1e474ca68618.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "31",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/d3fa71fd-d02d-4eba-bf42-7bf33aea007a.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "32",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/b71fb09d-eff0-4a82-9fca-7e8cfa47d9bd.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "33",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/b36955d0-4fe6-4164-bd07-75254d65f8eb.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "34",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/4b9c01a5-9ed2-48fd-8446-d97e6bd40733.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "35",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/24f16528-dfd0-4340-b13c-107ba7eccc07.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "36",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/1e100fac-d535-410e-a552-9cfaa801b48a.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "37",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/36dce507-3971-41f4-91b6-6827ab1fbbd9.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "38",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/6c11b148-3831-4bed-a858-71242b377d66.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "39",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/48b4e8d5-1b3d-40bf-ac84-e97b05a752ca.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "40",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/f468cd30-72fd-404d-a99e-003196cbb015.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "41",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/9d6cea8c-d544-4d00-afcf-a190cd775434.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "42",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/5a454153-9bc7-4a7f-baef-9b773c932ef4.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "43",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/bdf8fa92-5467-411f-9180-6ecddbcb1177.jpg",
      },
      {
        id: 14,
        value: "15",
        sort_id: 15,
        image_id: "44",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/b40cfb9d-8986-44a9-9ec4-a0ca82dd6d09.jpg",
      },
      {
        id: 15,
        value: "16",
        sort_id: 16,
        image_id: "45",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/7ee95cfe-4e15-443f-8e91-6462cc457236.jpg",
      },
      {
        id: 16,
        value: "17",
        sort_id: 17,
        image_id: "46",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/d1883032-c6d0-4d9b-8eef-e964919fc43d.jpg",
      },
      {
        id: 17,
        value: "18",
        sort_id: 18,
        image_id: "47",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/2ee8a47b-fca9-4d7e-b46f-8738881baabe.jpg",
      },
      {
        id: 18,
        value: "19",
        sort_id: 19,
        image_id: "48",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/79/501b7b50-ba5b-475c-aef3-aac85a6eea88.jpg",
      },
    ],
    sort_id: 16,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 2,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 80,
    type: "Swatch",
    label: "Fruit Juice and Smoothie",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "49",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/e1694bb4-5b17-4d60-ac08-657d820fde1d.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "50",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/cbadf018-7802-42b5-9b72-05669b5b9c9f.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "51",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/eccfff68-c1be-460f-bb32-04bb19ff2bd1.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "52",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/ae53c9c7-987a-430b-9c27-2f6e3308f51d.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "53",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/02211cb5-1034-4e05-a356-8dac21dc91d4.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "54",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/76424306-09c3-4f11-818e-4fbb9bb57e0f.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "55",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/ef6358a2-65f3-4347-9801-2eeb68c3d7b5.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "56",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/cb31d3e9-d94b-4a86-967b-9165068a59b8.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "57",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/536d3485-a6db-4e8d-913e-b7fbd7ea58d5.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "58",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/d59cd50c-e29f-4637-862a-fa45f8a07c47.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "59",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/9bcf4988-3232-49c3-983f-e529bf35eb17.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "60",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/80/9e91e1db-3d22-49bc-bf84-d14460fd2f1b.jpg",
      },
    ],
    sort_id: 17,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 3,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 81,
    type: "Swatch",
    label: "Liquor and Spirit",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "61",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/0bc46fce-0fcd-49fb-8e4d-48e73ff5483f.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "62",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/c950a238-094e-40e9-8aaf-be8b1717dcdd.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "63",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/f172c30e-3bb4-4bb2-b27c-0e3e8b47816d.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "64",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/fe2e2caa-ec76-41d4-8394-efedf39136fb.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "65",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/0d4a531a-3761-4811-a45a-b27174ab1c18.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "66",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/2ec3e371-ab3a-4787-bad5-f0f4b2e73ce0.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "67",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/8c2ae37e-c963-4284-974f-ab3a7496c9d2.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "68",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/94152a45-b0de-4973-b95f-0d8665cf7c76.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "69",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/f471c795-b38e-460b-b00f-9a7ed65f5da4.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "70",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/30535a49-1fc5-4654-b98b-6d3155436480.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "71",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/165a893b-cd9b-49d4-918e-4f80efdaf6eb.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "72",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/a48bf050-9519-4416-bb0c-d77948a2bf89.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "73",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/9f09ce49-cb33-4c94-8b5f-23f57624be56.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "74",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/81/3765d57e-c331-4c3b-a1a3-cebdff4443e0.jpg",
      },
    ],
    sort_id: 18,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 4,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 82,
    type: "Swatch",
    label: "Soft Drink",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "75",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/cc01150c-54fe-4348-829d-9fa226e6461f.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "76",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/c53f5d5a-8459-408c-9da2-73cee522ebb2.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "77",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/9d1f14f7-c41a-4315-9e05-ae6115538eeb.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "78",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/a78e3bf0-14e9-4de0-bb1d-af008480d3f9.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "79",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/996a07a1-1452-4f85-8c76-e006dff776ab.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "80",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/4ad3275f-fa2b-405f-a096-9bffa0992e1d.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "81",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/97393f04-faca-457b-b592-3ce22a4370f3.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "82",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/82/9e854013-7531-40ba-a6b3-b4285527904a.jpg",
      },
    ],
    sort_id: 19,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 5,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 83,
    type: "Swatch",
    label: "Wine",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "83",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/50e77252-c096-4cc0-b2c8-ce31ef894c97.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "84",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/1bf8e8ac-4335-4797-bfa0-47c8fadb4582.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "85",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/91917389-eed2-46b0-9011-20acd1d75cb4.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "86",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/833c4017-6ba1-4a38-8b0e-76a110af5803.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "87",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/ce1e0852-a997-4530-af67-68daa03bddb6.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "88",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/78b7f3cc-bf5e-4453-8a23-ca005726b02b.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "89",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/7b5e4447-592f-41c6-a73c-ff4526fecb08.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "90",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/478bfe17-84d6-4e15-ae1f-74a9f9f5d81c.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "91",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/14880681-f0a4-4b7e-9167-a8eec10dee1c.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "92",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/85cbf969-4bc8-4e01-be0d-584988c6d067.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "93",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/fa1dd191-da0f-4ff5-b6fc-4c3fcf7c00e1.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "94",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/e694d5e4-9bff-4310-afc4-97a4f04a59d5.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "95",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/4b9deb8b-aeab-4e9a-a1f6-542442b440a5.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "96",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/5431e8b3-933e-4e75-b306-288dca02d1d8.jpg",
      },
      {
        id: 14,
        value: "15",
        sort_id: 15,
        image_id: "97",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/20a4ab44-df40-40c6-8904-dbd6424d350e.jpg",
      },
      {
        id: 15,
        value: "16",
        sort_id: 16,
        image_id: "98",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/4442bc89-fd6c-49bd-bdbe-9a8dfc99754b.jpg",
      },
      {
        id: 16,
        value: "17",
        sort_id: 17,
        image_id: "99",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/9f2529a8-a5cf-47c2-a2fe-d7c5bd563462.jpg",
      },
      {
        id: 17,
        value: "18",
        sort_id: 18,
        image_id: "100",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/a100c273-f449-4f21-888a-d97d1de921ee.jpg",
      },
      {
        id: 18,
        value: "19",
        sort_id: 19,
        image_id: "101",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/9c855030-cbeb-4c59-a17b-030b146f717e.jpg",
      },
      {
        id: 19,
        value: "20",
        sort_id: 20,
        image_id: "102",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/664fe53e-4cdd-479c-90dc-699bd753b351.jpg",
      },
      {
        id: 20,
        value: "21",
        sort_id: 21,
        image_id: "103",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/83/a4b12189-e93c-44eb-8a42-17f9df2eaac6.jpg",
      },
    ],
    sort_id: 20,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "6",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 75,
        desired_value: 6,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 1,
    type: "Swatch",
    label: "Choose Man's Skin Color",
    values: [
      {
        id: 3,
        value: "Face - Light",
        sort_id: 1,
        tooltip: "Light",
        bg_color: "#FDDDC4",
        image_id: 3,
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 4,
        value: "Face - Tan",
        sort_id: 2,
        tooltip: "Tan",
        bg_color: "#F0B387",
        image_id: 4,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 2,
        value: "Face - Dark",
        sort_id: 3,
        tooltip: "Dark",
        bg_color: "#BE6F46",
        image_id: 2,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
    ],
    sort_id: 21,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "8",
      },
      {
        id: 2,
        type: "image",
        text_id: "",
        image_id: "11",
      },
      {
        id: 3,
        type: "image",
        text_id: "",
        image_id: "15",
      },
    ],
    libraryId: 98926,
    conditions: [],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 24,
    type: "Swatch",
    label: "Young Man Pants",
    values: [
      {
        id: 2,
        value: "Value 2",
        sort_id: 1,
        image_id: 2,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/24/6b76eec3-66d1-476e-b474-a6fa4a994dc7.png",
      },
    ],
    sort_id: 22,
    required: false,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "12",
      },
    ],
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 1,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 1,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 1,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: true,
    variation_conditions: [],
  },
  {
    id: 2,
    type: "Swatch",
    label: "Choose Man's Hair Color",
    isMain: true,
    values: [
      {
        id: 70220,
        value: "Black",
        sort_id: 1,
        tooltip: "Black",
        bg_color: "#000000",
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70221,
        value: "Blonde",
        sort_id: 2,
        tooltip: "Blonde",
        bg_color: "#E7B367",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70223,
        value: "Brown",
        sort_id: 3,
        tooltip: "Brown",
        bg_color: "#5C432F",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70227,
        value: "Grey",
        sort_id: 4,
        tooltip: "Grey",
        bg_color: "#B9B9B7",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70228,
        value: "Red",
        sort_id: 5,
        tooltip: "Red",
        bg_color: "#903D47",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70229,
        value: "Salf & Pepper",
        sort_id: 6,
        tooltip: "Salf & Pepper",
        bg_color: "#716861",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70219,
        value: "No Hair",
        sort_id: 7,
        tooltip: "No Hair",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/2/761ec0f8-c128-4b26-95a8-03268a71e264.png",
      },
    ],
    sort_id: 23,
    required: true,
    functions: [],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 1,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 1,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 1,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 4,
    type: "Swatch",
    label: "Choose Man's Hairstyle",
    values: [
      {
        id: 2,
        value: "Black 1",
        sort_id: 1,
        image_id: 2,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/66a5f8a6-5257-484c-bfda-da429b8d6c35.jpg",
      },
      {
        id: 3,
        value: "Black 2",
        sort_id: 2,
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/45d15a8b-00df-4798-a603-d5f0fe00cea3.jpg",
      },
      {
        id: 4,
        value: "Black 3",
        sort_id: 3,
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/c358102c-5b4e-467b-a3e9-bd2656cb3300.jpg",
      },
      {
        id: 5,
        value: "Black 4",
        sort_id: 4,
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/551d4f7a-65f5-442e-8353-dd688a5d583b.jpg",
      },
      {
        id: 6,
        value: "Black 5",
        sort_id: 5,
        image_id: 6,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/6ba9fbfa-b601-4a7d-a5cb-59e55cb9a02b.jpg",
      },
      {
        id: 7,
        value: "Black 6",
        sort_id: 6,
        image_id: 7,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/d408f77a-7f3f-44a6-9469-c848cb45510d.jpg",
      },
      {
        id: 8,
        value: "Black 7",
        sort_id: 7,
        image_id: 8,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/4f101d10-8511-4c3d-88a2-6811e3e1a38e.jpg",
      },
      {
        id: 9,
        value: "Black 8",
        sort_id: 8,
        image_id: 9,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/9b72dfc7-b253-4490-b14a-310342d7d434.jpg",
      },
      {
        id: 10,
        value: "Black 9",
        sort_id: 9,
        image_id: 10,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/7cd90b7d-c6a1-4b3a-bb00-1f805d1189ef.jpg",
      },
      {
        id: 11,
        value: "Black 10",
        sort_id: 10,
        image_id: 11,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/2849e848-7887-4964-9f5a-cc9b07e00e25.jpg",
      },
      {
        id: 12,
        value: "Black 11",
        sort_id: 11,
        image_id: 12,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/8c0e13d7-b043-4d69-87bc-3594ce2993f3.jpg",
      },
      {
        id: 13,
        value: "Black 12",
        sort_id: 12,
        image_id: 13,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/44b60332-cfd7-449d-8917-662af84ea457.jpg",
      },
      {
        id: 14,
        value: "Black 13",
        sort_id: 13,
        image_id: 14,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/2537c887-fe21-4c90-b184-5b72e14434d2.jpg",
      },
      {
        id: 15,
        value: "Black 14",
        sort_id: 14,
        image_id: 15,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/00c22876-8ed1-4e8b-8ca5-c165a803bc68.jpg",
      },
      {
        id: 16,
        value: "Black 15",
        sort_id: 15,
        image_id: 16,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/4e4c9720-9648-4dea-a1f2-53427263fe83.jpg",
      },
      {
        id: 17,
        value: "Black 16",
        sort_id: 16,
        image_id: 17,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/ef96bb38-075b-406e-92d4-b2148b97f541.jpg",
      },
      {
        id: 18,
        value: "Black 17",
        sort_id: 17,
        image_id: 18,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/736f036e-6f0b-48a3-a145-5c519a4592d3.jpg",
      },
      {
        id: 19,
        value: "Black 18",
        sort_id: 18,
        image_id: 19,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/911e7e73-85ba-49cb-8eec-1bf57cb0999a.jpg",
      },
      {
        id: 20,
        value: "Black 19",
        sort_id: 19,
        image_id: 20,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/de52e4c6-361e-42b2-bae2-a854a115572e.jpg",
      },
      {
        id: 21,
        value: "Black 20",
        sort_id: 20,
        image_id: 21,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/543d24be-b7a6-46a4-90f1-181a8a78aec3.jpg",
      },
      {
        id: 22,
        value: "Black 21",
        sort_id: 21,
        image_id: 22,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/4/b59d7489-05a8-4525-bd2f-21fbdb65dcd7.jpg",
      },
    ],
    sort_id: 25,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70220,
      },
    ],
    isCategory: 70220,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 5,
    type: "Swatch",
    label: "Choose Man's Hairstyle",
    values: [
      {
        id: 23,
        value: "Blonde 1",
        sort_id: 1,
        image_id: 23,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/65a4c9d1-4336-4e76-b321-1e0c4a29526f.jpg",
      },
      {
        id: 24,
        value: "Blonde 2",
        sort_id: 2,
        image_id: 24,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/c2b7c9f4-a8f1-4bcb-ab64-1ab14482f4d8.jpg",
      },
      {
        id: 25,
        value: "Blonde 3",
        sort_id: 3,
        image_id: 25,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/a76fddf0-3e00-4780-81bf-2d1e3d96ba2d.jpg",
      },
      {
        id: 26,
        value: "Blonde 4",
        sort_id: 4,
        image_id: 26,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/c9cbb3b7-4c80-4f49-800e-3d6cfbf8616c.jpg",
      },
      {
        id: 27,
        value: "Blonde 5",
        sort_id: 5,
        image_id: 27,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/2f40fe81-75e9-44f9-bd92-0e90e29a1500.jpg",
      },
      {
        id: 28,
        value: "Blonde 6",
        sort_id: 6,
        image_id: 28,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/95c4afd5-dd6e-4918-b67b-8f1518923794.jpg",
      },
      {
        id: 29,
        value: "Blonde 7",
        sort_id: 7,
        image_id: 29,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/569a4be6-fd52-48b1-8e52-e3edda6347db.jpg",
      },
      {
        id: 30,
        value: "Blonde 8",
        sort_id: 8,
        image_id: 30,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/6eb1634b-0457-45c4-91bf-358bd53f7494.jpg",
      },
      {
        id: 31,
        value: "Blonde 9",
        sort_id: 9,
        image_id: 31,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/e204f6ee-3cda-4ac0-8b03-d6829309cc88.jpg",
      },
      {
        id: 32,
        value: "Blonde 10",
        sort_id: 10,
        image_id: 32,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/06ae16da-ea38-43ec-bc28-3c8a635f50f1.jpg",
      },
      {
        id: 33,
        value: "Blonde 11",
        sort_id: 11,
        image_id: 33,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/07200a12-464c-4002-be89-4bace9e50fe8.jpg",
      },
      {
        id: 34,
        value: "Blonde 12",
        sort_id: 12,
        image_id: 34,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/29aaa012-1a1b-4329-849f-1106335a362f.jpg",
      },
      {
        id: 35,
        value: "Blonde 13",
        sort_id: 13,
        image_id: 35,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/bcf4a69e-07bd-4413-8e15-cf19f2dbff53.jpg",
      },
      {
        id: 36,
        value: "Blonde 14",
        sort_id: 14,
        image_id: 36,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/c898c808-baec-4b6b-a0d6-d4ba099e7082.jpg",
      },
      {
        id: 37,
        value: "Blonde 15",
        sort_id: 15,
        image_id: 37,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/b60f6866-45a1-48d3-94b3-152a190ca6da.jpg",
      },
      {
        id: 38,
        value: "Blonde 16",
        sort_id: 16,
        image_id: 38,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/95e1de1b-f615-4efe-83a2-995f1fc295ef.jpg",
      },
      {
        id: 39,
        value: "Blonde 17",
        sort_id: 17,
        image_id: 39,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/203228c3-430c-405f-aa55-50057e9425ae.jpg",
      },
      {
        id: 40,
        value: "Blonde 18",
        sort_id: 18,
        image_id: 40,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/59c9f096-c903-450e-8975-3340ea9a1cfd.jpg",
      },
      {
        id: 41,
        value: "Blonde 19",
        sort_id: 19,
        image_id: 41,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/8a608c99-787c-44d4-b1fe-8085eeb0802d.jpg",
      },
      {
        id: 42,
        value: "Blonde 20",
        sort_id: 20,
        image_id: 42,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/b8080239-42fa-4b10-8728-1163e3697fd5.jpg",
      },
      {
        id: 43,
        value: "Blonde 21",
        sort_id: 21,
        image_id: 43,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/5/fc12e72d-e77b-476f-9a55-dae87d6434e4.jpg",
      },
    ],
    sort_id: 26,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70221,
      },
    ],
    isCategory: 70221,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 6,
    type: "Swatch",
    label: "Choose Man's Hairstyle",
    values: [
      {
        id: 44,
        value: "Brown 1",
        sort_id: 1,
        image_id: 44,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/4fcaca47-397d-455e-8d56-82db7cfdc557.jpg",
      },
      {
        id: 45,
        value: "Brown 2",
        sort_id: 2,
        image_id: 45,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/3a5d0f5a-b48d-4f67-8923-fe4193cacaac.jpg",
      },
      {
        id: 46,
        value: "Brown 3",
        sort_id: 3,
        image_id: 46,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/21d2f996-5f09-42b2-81b4-ed055b3847c7.jpg",
      },
      {
        id: 47,
        value: "Brown 4",
        sort_id: 4,
        image_id: 47,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/67eed917-3a44-4296-b4f3-f63645368291.jpg",
      },
      {
        id: 48,
        value: "Brown 5",
        sort_id: 5,
        image_id: 48,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/5f6c92da-54bb-4071-bc1c-4bf68ec8129f.jpg",
      },
      {
        id: 49,
        value: "Brown 6",
        sort_id: 6,
        image_id: 49,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/383a8083-7304-4f69-905d-af3c73b4a26f.jpg",
      },
      {
        id: 50,
        value: "Brown 7",
        sort_id: 7,
        image_id: 50,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/4797539c-4643-4ca1-9b2d-3642b852a0e0.jpg",
      },
      {
        id: 51,
        value: "Brown 8",
        sort_id: 8,
        image_id: 51,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/5c1823d0-fea7-483a-a48b-fec76a3b228a.jpg",
      },
      {
        id: 52,
        value: "Brown 9",
        sort_id: 9,
        image_id: 52,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/5a3be7d7-9663-4f47-b5f5-71296b225e6f.jpg",
      },
      {
        id: 53,
        value: "Brown 10",
        sort_id: 10,
        image_id: 53,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/db217968-acff-4d5e-bcdb-0b2459624f7e.jpg",
      },
      {
        id: 54,
        value: "Brown 11",
        sort_id: 11,
        image_id: 54,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/ad4ea787-40a5-42bb-ad18-3e64c7e16cf0.jpg",
      },
      {
        id: 55,
        value: "Brown 12",
        sort_id: 12,
        image_id: 55,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/4e6ce730-0aee-46d2-96e6-015eeac5f9f9.jpg",
      },
      {
        id: 56,
        value: "Brown 13",
        sort_id: 13,
        image_id: 56,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/a73f1252-a1b8-4d45-8f3a-a10dadf3b35f.png",
      },
      {
        id: 57,
        value: "Brown 14",
        sort_id: 14,
        image_id: 57,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/3731063d-15e4-4037-a966-4ed28e1ecfe1.jpg",
      },
      {
        id: 58,
        value: "Brown 15",
        sort_id: 15,
        image_id: 58,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/5dda1ea9-f3fc-47b4-8599-39407a5c2202.jpg",
      },
      {
        id: 59,
        value: "Brown 16",
        sort_id: 16,
        image_id: 59,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/45316f3d-1d13-4e2e-8d47-a91ea2f0dfe2.jpg",
      },
      {
        id: 60,
        value: "Brown 17",
        sort_id: 17,
        image_id: 60,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/77c53616-dc65-47b8-b4e8-cd9770ba34bb.jpg",
      },
      {
        id: 61,
        value: "Brown 18",
        sort_id: 18,
        image_id: 61,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/188887ce-b345-423c-83cc-41d736e2921c.jpg",
      },
      {
        id: 62,
        value: "Brown 19",
        sort_id: 19,
        image_id: 62,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/f2c1ebf4-c014-4644-8b03-4a534ed5ee5e.jpg",
      },
      {
        id: 63,
        value: "Brown 20",
        sort_id: 20,
        image_id: 63,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/3a3e7336-d515-47a0-a769-4fc81035b07a.png",
      },
      {
        id: 64,
        value: "Brown 21",
        sort_id: 21,
        image_id: 64,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/6/04f13ede-d5ae-4512-ba8b-49fa75d838cb.png",
      },
    ],
    sort_id: 27,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70223,
      },
    ],
    isCategory: 70223,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 8,
    type: "Swatch",
    label: "Choose Man's Hairstyle",
    values: [
      {
        id: 86,
        value: "Red 1",
        sort_id: 1,
        image_id: 86,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/13e09584-6afe-46a0-928e-9a512dae957a.jpg",
      },
      {
        id: 87,
        value: "Red 2",
        sort_id: 2,
        image_id: 87,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/2d6f09f1-2859-4f90-a4fc-4ca6af285d9f.jpg",
      },
      {
        id: 88,
        value: "Red 3",
        sort_id: 3,
        image_id: 88,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/8f4061b7-2d2d-409b-b0ac-4f471a4004a7.jpg",
      },
      {
        id: 89,
        value: "Red 4",
        sort_id: 4,
        image_id: 89,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/3a944f3a-a448-41de-88e6-de5f8aaaa8b9.jpg",
      },
      {
        id: 90,
        value: "Red 5",
        sort_id: 5,
        image_id: 90,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/c34e17c5-d4cb-4c9a-a521-c39153a58bc8.jpg",
      },
      {
        id: 91,
        value: "Red 6",
        sort_id: 6,
        image_id: 91,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/15d1920f-8936-40bc-8f06-4f9480558ee5.jpg",
      },
      {
        id: 92,
        value: "Red 7",
        sort_id: 7,
        image_id: 92,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/5e744fac-d055-4403-808f-9b6218e40867.jpg",
      },
      {
        id: 93,
        value: "Red 8",
        sort_id: 8,
        image_id: 93,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/0ad389f0-e584-4893-aca1-4fe4c28273f1.jpg",
      },
      {
        id: 94,
        value: "Red 9",
        sort_id: 9,
        image_id: 94,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/5dcc18a0-b793-4bfb-a564-1d33cc4dfa5c.jpg",
      },
      {
        id: 95,
        value: "Red 10",
        sort_id: 10,
        image_id: 95,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/8b710d2d-6244-4841-8a14-90d0d0e5527f.jpg",
      },
      {
        id: 96,
        value: "Red 11",
        sort_id: 11,
        image_id: 96,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/6bd87461-e417-43a5-a46d-e8dfb48bbf7e.jpg",
      },
      {
        id: 97,
        value: "Red 12",
        sort_id: 12,
        image_id: 97,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/32f88e02-7c0d-4a86-984e-5de9738411c7.jpg",
      },
      {
        id: 98,
        value: "Red 13",
        sort_id: 13,
        image_id: 98,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/0eb329e5-1b1d-4dde-a3a7-ee125f35c361.jpg",
      },
      {
        id: 99,
        value: "Red 14",
        sort_id: 14,
        image_id: 99,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/0b3b87b1-cac5-481a-96b2-2c772cc77f89.jpg",
      },
      {
        id: 100,
        value: "Red 15",
        sort_id: 15,
        image_id: 100,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/51de37a7-58b4-46bc-b669-6ad774884245.jpg",
      },
      {
        id: 101,
        value: "Red 16",
        sort_id: 16,
        image_id: 101,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/a59c2705-5a36-412d-be9c-9687d558c6f5.jpg",
      },
      {
        id: 102,
        value: "Red 17",
        sort_id: 17,
        image_id: 102,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/ad223d0e-cd4f-4342-b106-6743d247d47e.jpg",
      },
      {
        id: 103,
        value: "Red 18",
        sort_id: 18,
        image_id: 103,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/ab1f13bc-b0c3-4db4-bbe5-05237e1e61a0.jpg",
      },
      {
        id: 104,
        value: "Red 19",
        sort_id: 19,
        image_id: 104,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/7b4930d2-2be9-4389-b6d7-590ff4107ef9.jpg",
      },
      {
        id: 105,
        value: "Red 20",
        sort_id: 20,
        image_id: 105,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/7e441481-8827-4c9f-b630-07545aa5fa82.jpg",
      },
      {
        id: 106,
        value: "Red 21",
        sort_id: 21,
        image_id: 106,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/8/8a21ae8f-afcd-4c97-80ea-2e52bc2ef59d.jpg",
      },
    ],
    sort_id: 29,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "9",
      },
    ],
    libraryId: 98933,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 2,
        desired_value: 70228,
      },
    ],
    isCategory: 70228,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 27,
    type: "Swatch",
    label: "Choose Man's Beard Color",
    isMain: true,
    values: [
      {
        id: 70237,
        value: "Black",
        sort_id: 1,
        tooltip: "Black",
        bg_color: "#000000",
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70238,
        value: "Blonde",
        sort_id: 2,
        tooltip: "Blonde",
        bg_color: "#E7B367",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70239,
        value: "Brown",
        sort_id: 3,
        tooltip: "Brown",
        bg_color: "#5C432F",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70240,
        value: "Grey",
        sort_id: 4,
        tooltip: "Grey",
        bg_color: "#B9B9B7",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70241,
        value: "Red",
        sort_id: 5,
        tooltip: "Red",
        bg_color: "#903D47",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70242,
        value: "Salf & Pepper",
        sort_id: 6,
        tooltip: "Salf & Pepper",
        bg_color: "#716861",
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 70236,
        value: "No Beard",
        sort_id: 7,
        tooltip: "No Beard",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/27/213c0032-b683-4bb6-ac42-27edb906804c.png",
      },
    ],
    sort_id: 31,
    required: true,
    functions: [],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 1,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 1,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 1,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 28,
    type: "Swatch",
    label: "No Beard",
    values: [
      {
        id: 1,
        value: "1000x1000",
        sort_id: 1,
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/28/897b8819-7e78-44ab-a97a-9891feaf4f86.png",
      },
    ],
    sort_id: 32,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70236,
      },
    ],
    isCategory: 70236,
    hide_visually: true,
    variation_conditions: [],
  },
  {
    id: 29,
    type: "Swatch",
    label: "Choose Man's Beard Style",
    values: [
      {
        id: 2,
        value: "Black 1",
        sort_id: 1,
        image_id: 2,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/09e549dd-2148-4673-b69a-ba3201df9b76.jpg",
      },
      {
        id: 3,
        value: "Black 2",
        sort_id: 2,
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/08d26d2b-40f8-47c6-8cb3-5da2034ee21c.jpg",
      },
      {
        id: 4,
        value: "Black 3",
        sort_id: 3,
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/236d6c26-c162-4542-a8de-8fdf12d2e49c.jpg",
      },
      {
        id: 5,
        value: "Black 4",
        sort_id: 4,
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/2b6c7847-8f48-4bd3-ba4b-3250f250eab3.jpg",
      },
      {
        id: 6,
        value: "Black 5",
        sort_id: 5,
        image_id: 6,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/23e7eba2-b1d5-4ead-8a5b-e64cf31bb856.jpg",
      },
      {
        id: 7,
        value: "Black 6",
        sort_id: 6,
        image_id: 7,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/65d005f7-4860-4e30-968f-a00f1bc1b414.jpg",
      },
      {
        id: 8,
        value: "Black 7",
        sort_id: 7,
        image_id: 8,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/3bca6b6d-819a-4f4b-beb5-2119e050f609.jpg",
      },
      {
        id: 9,
        value: "Black 8",
        sort_id: 8,
        image_id: 9,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/a01e05ab-9f03-45d6-b464-cc67b9cefb93.jpg",
      },
      {
        id: 10,
        value: "Black 9",
        sort_id: 9,
        image_id: 10,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/bc9aef60-d271-4026-ab4e-23bf94b184f8.jpg",
      },
      {
        id: 11,
        value: "Black 10",
        sort_id: 10,
        image_id: 11,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/29/45070fd8-e827-4550-b72b-028903b2c9f0.jpg",
      },
    ],
    sort_id: 33,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70237,
      },
    ],
    isCategory: 70237,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 30,
    type: "Swatch",
    label: "Choose Man's Beard Style",
    values: [
      {
        id: 12,
        value: "Blonde 1",
        sort_id: 1,
        image_id: 12,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/adea6ee2-2c3b-489e-bffa-7d950c11bb53.jpg",
      },
      {
        id: 13,
        value: "Blonde 2",
        sort_id: 2,
        image_id: 13,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/5f7c7403-7fdb-435e-bcc5-c53ce1a311da.jpg",
      },
      {
        id: 14,
        value: "Blonde 3",
        sort_id: 3,
        image_id: 14,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/25f8e0bc-feee-4c4f-b051-49da403e3fae.jpg",
      },
      {
        id: 15,
        value: "Blonde 4",
        sort_id: 4,
        image_id: 15,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/75b26167-e7c4-44aa-90ec-a08e3008dcec.jpg",
      },
      {
        id: 16,
        value: "Blonde 5",
        sort_id: 5,
        image_id: 16,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/6e82b2f6-1b4c-40ed-9442-909216b5334d.jpg",
      },
      {
        id: 17,
        value: "Blonde 6",
        sort_id: 6,
        image_id: 17,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/5b0a2ef0-67b6-455a-86dd-08bc1c9502f0.jpg",
      },
      {
        id: 18,
        value: "Blonde 7",
        sort_id: 7,
        image_id: 18,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/4df8b33b-37db-45ed-9483-49a818e2b86f.jpg",
      },
      {
        id: 19,
        value: "Blonde 8",
        sort_id: 8,
        image_id: 19,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/a675a4da-f7b8-4d36-afce-25370f9d1d1c.jpg",
      },
      {
        id: 20,
        value: "Blonde 9",
        sort_id: 9,
        image_id: 20,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/2ae71a6b-aa29-4a72-a0c6-039dd31504c4.jpg",
      },
      {
        id: 21,
        value: "Blonde 10",
        sort_id: 10,
        image_id: 21,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/30/1441b517-968b-4c8a-8d6e-46ee247f82b1.jpg",
      },
    ],
    sort_id: 34,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70238,
      },
    ],
    isCategory: 70238,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 33,
    type: "Swatch",
    label: "Choose Man's Beard Style",
    values: [
      {
        id: 42,
        value: "Red 1",
        sort_id: 1,
        image_id: 42,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/66b23bea-a339-40bc-8bb0-59007b2a2a46.jpg",
      },
      {
        id: 43,
        value: "Red 2",
        sort_id: 2,
        image_id: 43,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/095115e0-df79-46b7-bce7-d86f050c68c7.jpg",
      },
      {
        id: 44,
        value: "Red 3",
        sort_id: 3,
        image_id: 44,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/843f3f36-ec50-426f-aa3e-b498e67c05ac.jpg",
      },
      {
        id: 45,
        value: "Red 4",
        sort_id: 4,
        image_id: 45,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/c4c2972e-64f4-49b3-aed7-d7c4b37afd85.jpg",
      },
      {
        id: 46,
        value: "Red 5",
        sort_id: 5,
        image_id: 46,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/124d0237-bed6-4f1b-ab3c-b3efe181d22e.jpg",
      },
      {
        id: 47,
        value: "Red 6",
        sort_id: 6,
        image_id: 47,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/6c68abfb-81ab-4492-859f-cf20d66248a7.jpg",
      },
      {
        id: 48,
        value: "Red 7",
        sort_id: 7,
        image_id: 48,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/9f314ea4-9e8a-47bf-9d08-089e0e57b2cb.jpg",
      },
      {
        id: 49,
        value: "Red 8",
        sort_id: 8,
        image_id: 49,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/eba315c3-b65f-4b9d-8d93-a3418e16f38b.jpg",
      },
      {
        id: 50,
        value: "Red 9",
        sort_id: 9,
        image_id: 50,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/9adab3b1-8fac-4823-b858-5764eb9b2b93.jpg",
      },
      {
        id: 51,
        value: "Red 10",
        sort_id: 10,
        image_id: 51,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/33/e13f9e7c-53d8-4164-a043-a182130d3f74.jpg",
      },
    ],
    sort_id: 37,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70241,
      },
    ],
    isCategory: 70241,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 34,
    type: "Swatch",
    label: "Choose Man's Beard Style",
    values: [
      {
        id: 52,
        value: "Salf & Pepper 1",
        sort_id: 1,
        image_id: 52,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/cda21460-5a5b-4f36-ae6d-1d2ad57f09f4.jpg",
      },
      {
        id: 53,
        value: "Salf & Pepper 2",
        sort_id: 2,
        image_id: 53,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/364744b2-a3a0-4160-b38b-92f48b6b3377.jpg",
      },
      {
        id: 54,
        value: "Salf & Pepper 3",
        sort_id: 3,
        image_id: 54,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/55884cec-ce57-4bf9-9477-88feb409de4d.jpg",
      },
      {
        id: 55,
        value: "Salf & Pepper 4",
        sort_id: 4,
        image_id: 55,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/eab8e22d-158a-4cce-beb6-226a2c4a0af9.jpg",
      },
      {
        id: 56,
        value: "Salf & Pepper 5",
        sort_id: 5,
        image_id: 56,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/c63a3c35-9c57-46bc-8143-08edbf5c2359.jpg",
      },
      {
        id: 57,
        value: "Salf & Pepper 6",
        sort_id: 6,
        image_id: 57,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/33031a53-8a42-4268-9187-75f85ae812e9.jpg",
      },
      {
        id: 58,
        value: "Salf & Pepper 7",
        sort_id: 7,
        image_id: 58,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/eb997e89-10bc-4e7c-a419-69f677149006.jpg",
      },
      {
        id: 59,
        value: "Salf & Pepper 8",
        sort_id: 8,
        image_id: 59,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/5c3236aa-4502-4d3f-93f5-9dea232adc74.jpg",
      },
      {
        id: 60,
        value: "Salf & Pepper 9",
        sort_id: 9,
        image_id: 60,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/e6e4c8f1-633f-484c-9faf-fc76b4eb323a.jpg",
      },
      {
        id: 61,
        value: "Salf & Pepper 10",
        sort_id: 10,
        image_id: 61,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/34/f016b38d-b09b-4985-9ffa-f99f0b153866.jpg",
      },
    ],
    sort_id: 38,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "10",
      },
    ],
    libraryId: 98953,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 27,
        desired_value: 70242,
      },
    ],
    isCategory: 70242,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 26,
    type: "Swatch",
    label: "Choose Man's Shirt Color",
    values: [
      {
        id: 2,
        value: "Black",
        sort_id: 1,
        tooltip: "Black",
        bg_color: "#000000",
        image_id: 2,
        selected: true,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 3,
        value: "Blue",
        sort_id: 2,
        tooltip: "Blue",
        bg_color: "#3569B7",
        image_id: 3,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 4,
        value: "Green",
        sort_id: 3,
        tooltip: "Green",
        bg_color: "#5A844F",
        image_id: 4,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 5,
        value: "Grey",
        sort_id: 4,
        tooltip: "Grey",
        bg_color: "#909090",
        image_id: 5,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 6,
        value: "Pink",
        sort_id: 5,
        tooltip: "Pink",
        bg_color: "#F8D4E0",
        image_id: 6,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 7,
        value: "Red",
        sort_id: 6,
        tooltip: "Red",
        bg_color: "#BD292D",
        image_id: 7,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
      {
        id: 8,
        value: "White",
        sort_id: 7,
        tooltip: "White",
        bg_color: "#FFFFFF",
        image_id: 8,
        selected: false,
        thumb_image: null,
        bg_color_alpha: 1,
      },
    ],
    sort_id: 39,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "13",
      },
    ],
    libraryId: 120840,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 1,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 1,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 1,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 74,
    type: "Dropdown",
    label: "Choose Man's Drink",
    values: [
      {
        id: 0,
        value: "Beer",
        sort_id: 1,
        selected: true,
      },
      {
        id: 1,
        value: "Cocktail",
        sort_id: 2,
        selected: false,
      },
      {
        id: 2,
        value: "Coffee, Tea and Cocoa",
        sort_id: 3,
        selected: false,
      },
      {
        id: 3,
        value: "Fruit Juice and Smoothie",
        sort_id: 4,
        selected: false,
      },
      {
        id: 4,
        value: "Liquor and Spirit",
        sort_id: 5,
        selected: false,
      },
      {
        id: 5,
        value: "Soft Drink",
        sort_id: 6,
        selected: false,
      },
      {
        id: 6,
        value: "Wine",
        sort_id: 7,
        selected: false,
      },
    ],
    sort_id: 40,
    required: true,
    functions: [],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 1,
        desired_value: 3,
      },
      {
        id: 2,
        action: "show",
        watch_option: 1,
        desired_value: 4,
        combination_operator: "or",
      },
      {
        id: 3,
        action: "show",
        watch_option: 1,
        desired_value: 2,
        combination_operator: "or",
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 76,
    type: "Swatch",
    label: "Beer",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "2",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/f05446ff-e5eb-4721-8d8d-f2e34834767d.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "3",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/22a28f24-b3e3-4604-a91a-00edfc3ebf34.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "4",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/b827bb3d-566c-4a56-86eb-564e8e69ca0e.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "5",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/e50615f1-03ec-438f-b22a-97fd41055082.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "6",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/433eaf12-05bc-4206-a8e3-e116a9282839.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "7",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/1d0fd57d-1553-4c14-b85b-7d632757505f.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "8",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/2dc7d7f9-df26-4db8-ab58-b5f1ccb58312.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "9",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/e721912a-8798-4367-94ce-ababa32692b6.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "10",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/3242c750-952a-463f-9ba3-057e3f3a9a20.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "11",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/d272086d-0a24-4600-9fc3-e14e359f55d5.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "12",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/8a981c85-1988-4cc3-8858-063f0d003da6.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "13",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/76/903f2fdc-d1d5-4540-893e-4ee0a9e2efdf.jpg",
      },
    ],
    sort_id: 41,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 0,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 84,
    type: "Swatch",
    label: "Cocktail",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "14",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/594c7422-d78c-4fdb-a132-eb2ad4f45949.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "15",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/8a9f5544-e1f7-4f4f-ac78-1b0c4a7ab713.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "16",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/3ba0710c-7b1a-4b62-8341-f9504b0e13d3.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "17",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/f51c6cd8-8d68-44e9-953e-60f6793b74c5.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "18",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/977b9f11-452c-4fa1-a1a0-a015bde7fb34.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "19",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/dbd9763f-74e1-4349-94b0-78c6546d132b.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "20",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/b662b32a-645b-40c2-8c6e-632f69570dcf.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "21",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/013e1bd6-1aec-48dd-b6a5-e557aba38cf9.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "22",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/83977e6a-7f02-4244-bd40-65a66a577496.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "23",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/b35cee40-1402-45ea-a0b4-539e64a9eb61.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "24",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/bcbc6ef6-1a2c-4bcb-822e-c106426a35cb.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "25",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/70fb3b49-65de-4dbe-8f53-5d2746796532.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "26",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/ab6c6291-cd64-45eb-a97c-926e2b67a115.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "27",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/441eaae0-5c6c-4c4d-a0f2-6b5aef26307e.jpg",
      },
      {
        id: 14,
        value: "15",
        sort_id: 15,
        image_id: "28",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/0063660d-9655-442f-8d14-7314a9e1c9b5.jpg",
      },
      {
        id: 15,
        value: "16",
        sort_id: 16,
        image_id: "29",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/84/be601ac5-650c-4c18-bbc6-ed2fd7f82980.jpg",
      },
    ],
    sort_id: 42,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 1,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 85,
    type: "Swatch",
    label: "Coffee, Tea and Cocoa",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "30",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/17067cc9-5166-4c0c-b39d-123793065e98.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "31",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/2e4fdc90-ac88-455f-9d63-315e28943785.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "32",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/4e7bc872-8479-49b4-9f53-f06d041a6deb.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "33",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/cfa58048-0db4-4a79-9e2b-cfaaec9a9976.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "34",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/f664fbb6-58b0-4060-a605-bbfc454399ba.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "35",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/efb3a33a-9033-4415-837a-9f01ad3c2c5e.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "36",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/05a82bd4-e106-4fad-9393-b423c82f5c18.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "37",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/721a77ff-1c85-4f38-992d-928eb193f656.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "38",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/4213dda7-57cc-4a14-af92-fb2d8dfaa64f.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "39",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/37ea2727-0e21-4104-893f-a623986ba653.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "40",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/5b1a6101-7636-4a49-8b89-4fb5d5a7af82.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "41",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/554a0aea-db50-41e7-922e-8eef5de671a3.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "42",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/12cdb56b-6991-4e01-a417-dde2f12d50e3.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "43",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/9329a0cc-6b47-4cc2-b62c-3168e9f64f39.jpg",
      },
      {
        id: 14,
        value: "15",
        sort_id: 15,
        image_id: "44",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/b81bb736-a858-43c8-98c7-bc21298d14cb.jpg",
      },
      {
        id: 15,
        value: "16",
        sort_id: 16,
        image_id: "45",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/2ce3a9f2-c7a5-4e52-8a3d-8e893ffa4773.jpg",
      },
      {
        id: 16,
        value: "17",
        sort_id: 17,
        image_id: "46",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/cd9d7ae9-221f-4897-956c-097a9ed6e1d8.jpg",
      },
      {
        id: 17,
        value: "18",
        sort_id: 18,
        image_id: "47",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/6b832e4c-1064-4e49-84c5-b826d8db1a8f.jpg",
      },
      {
        id: 18,
        value: "19",
        sort_id: 19,
        image_id: "48",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/85/cbae49e0-1a51-42b0-af31-9c73972daf1c.jpg",
      },
    ],
    sort_id: 43,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 2,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 86,
    type: "Swatch",
    label: "Fruit Juice and Smoothie",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "49",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/0be3ecad-6a51-4392-a954-cc63a4172627.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "50",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/da4686dc-e82b-4cb2-bf8c-29f4fb87b87e.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "51",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/2061119f-621e-4ce3-b35f-8ee7330b1be9.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "52",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/7f066d0b-fa48-4498-8b62-10eee3f453f4.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "53",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/c0cfcd90-8417-40dc-846b-bb71353bd260.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "54",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/4ce2ef62-79b2-4989-b974-0c700d27527b.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "55",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/3806e198-9f1a-4636-af9b-0e41b7b0c400.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "56",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/0dc4b825-adf3-4a32-99cf-56083f0407a1.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "57",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/f8580340-10fe-4ea4-8926-9a2db213a7e2.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "58",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/3df30403-9c78-4830-b3fe-dce76119b889.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "59",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/ee3bf7d4-1d7d-4963-bfae-095596ffe439.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "60",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/86/a69e7fd2-1079-4863-a6bb-5268f86e164d.jpg",
      },
    ],
    sort_id: 44,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 3,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 87,
    type: "Swatch",
    label: "Liquor and Spirit",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "61",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/46e11c84-48b1-47e3-879f-1a44787cf612.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "62",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/b363c4bb-f2cc-4692-ac76-382439199c42.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "63",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/0f77669a-c5db-49f7-8451-c5f5000c6b46.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "64",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/ae6c99ce-e8e6-4749-bd32-7abffb27152d.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "65",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/c40481d9-a650-4513-b7ea-e75071b892c3.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "66",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/1d1918c6-1893-4b41-b964-42227ee3fce7.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "67",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/9103bf65-7032-43f9-8ed3-6b13f6eb099a.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "68",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/c44b4893-672c-43e4-a246-0a74def50dad.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "69",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/41044de1-e8e6-4543-92a2-a8f8a870ab94.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "70",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/344b83fb-f066-4d72-a0d4-019a818cb7c1.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "71",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/adb4a29e-9dab-4bd1-b1be-fbbfa8f77ad7.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "72",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/7050a570-05da-4b68-a51f-00d761b199fa.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "73",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/d1f0ea56-2659-4589-8357-2c67aa849c40.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "74",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/87/59e9f562-fc20-46d2-a09e-ca1da59650c5.jpg",
      },
    ],
    sort_id: 45,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 4,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 88,
    type: "Swatch",
    label: "Soft Drink",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "75",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/54e2ace5-70d3-430d-ad37-d8e5865d6547.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "76",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/0d17614d-8206-4da6-95ee-e55329827b89.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "77",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/7dd9f07c-51f4-49dd-947b-f1166de9648d.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "78",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/15e24e04-c4b3-4dcb-a0c4-fc389d939a08.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "79",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/e2cff1f3-4713-48b8-8d19-46816017bc6d.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "80",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/bfd826f9-3a21-4d10-9874-402cd8979aa1.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "81",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/487ebf15-f707-4c9b-b388-8197db81bc39.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "82",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/88/a8caf61c-589b-413a-8d82-b6f9df72882c.jpg",
      },
    ],
    sort_id: 46,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 5,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 89,
    type: "Swatch",
    label: "Wine",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        image_id: "83",
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/8aab4c71-6e72-4261-8931-268231b5357b.jpg",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        image_id: "84",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/69c09bd5-bac1-4f7b-b61f-24cac4804002.jpg",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        image_id: "85",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/17919600-80a5-41f0-8aab-ce00392fef28.jpg",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        image_id: "86",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/d76f0108-ae6b-4953-a247-7df7f073e377.jpg",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        image_id: "87",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/51b5756a-9a1a-4906-83a4-e5d186210ac5.jpg",
      },
      {
        id: 5,
        value: "6",
        sort_id: 6,
        image_id: "88",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/ecfc5047-8919-4f67-bc3b-1b5407e6bffa.jpg",
      },
      {
        id: 6,
        value: "7",
        sort_id: 7,
        image_id: "89",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/60b5fd7b-8f0b-4ca4-a31f-4b1a6aef4519.jpg",
      },
      {
        id: 7,
        value: "8",
        sort_id: 8,
        image_id: "90",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/6fdcdd01-2de6-41e7-9e81-33de78838bb0.jpg",
      },
      {
        id: 8,
        value: "9",
        sort_id: 9,
        image_id: "91",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/1ab8621f-0997-4590-8d09-bdd1a6627787.jpg",
      },
      {
        id: 9,
        value: "10",
        sort_id: 10,
        image_id: "92",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/95763892-8967-4782-8fed-0412ed70869a.jpg",
      },
      {
        id: 10,
        value: "11",
        sort_id: 11,
        image_id: "93",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/7f9af2e8-0dfd-4054-914a-5cc5889d4c93.jpg",
      },
      {
        id: 11,
        value: "12",
        sort_id: 12,
        image_id: "94",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/4a0c5072-5f76-4c9d-80fc-69ddf2ca8dbc.jpg",
      },
      {
        id: 12,
        value: "13",
        sort_id: 13,
        image_id: "95",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/fc28a584-49ba-48d0-97bf-3e1c2f0f216a.jpg",
      },
      {
        id: 13,
        value: "14",
        sort_id: 14,
        image_id: "96",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/62619877-9368-4424-80db-bb96ed6db16c.jpg",
      },
      {
        id: 14,
        value: "15",
        sort_id: 15,
        image_id: "97",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/aab9b44c-0ef9-4e16-8dd6-73a531fa8e12.jpg",
      },
      {
        id: 15,
        value: "16",
        sort_id: 16,
        image_id: "98",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/f6f057ee-aee2-4603-abb3-254c9140d65f.jpg",
      },
      {
        id: 16,
        value: "17",
        sort_id: 17,
        image_id: "99",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/2667704d-5df5-4fa6-a764-ad8ae634d91a.jpg",
      },
      {
        id: 17,
        value: "18",
        sort_id: 18,
        image_id: "100",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/060fcc55-7821-4450-991d-2d53ef44a2eb.jpg",
      },
      {
        id: 18,
        value: "19",
        sort_id: 19,
        image_id: "101",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/ef868063-bd9a-49a9-9a4d-3a43c221d4f5.jpg",
      },
      {
        id: 19,
        value: "20",
        sort_id: 20,
        image_id: "102",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/5e88c7c1-5696-4c41-b5cd-68b536435ee2.jpg",
      },
      {
        id: 20,
        value: "21",
        sort_id: 21,
        image_id: "103",
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/31759c6d-c882-45d9-aa4d-13e7686e5233/89/9d8ca34f-9b08-44a9-8c7e-ce42a7d6f680.jpg",
      },
    ],
    sort_id: 47,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        text_id: "",
        image_id: "14",
      },
    ],
    libraryId: 0,
    add_chains: false,
    conditions: [
      {
        id: 1,
        action: "show",
        watch_option: 74,
        desired_value: 6,
      },
    ],
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 72,
    type: "Text Input",
    label: "Custom Name",
    sort_id: 48,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: "16",
      },
    ],
    help_text: "Example: William &amp; Sophia",
    add_chains: false,
    conditions: [],
    max_length: 20,
    is_textarea: false,
    placeholder: "",
    hide_visually: false,
    variation_conditions: [],
  },
];

export let sampleDataUploadImage = [
  {
    id: 1,
    type: "Image Upload",
    label: "Upload Your Photo",
    sort_id: 1,
    required: true,
    functions: [],
    help_text: "",
    conditions: [],
    hide_visually: false,
    minImageWidth: "800",
    minImageHeight: "800",
    file_upload_image_id: 1,
    variation_conditions: [],
  },
  {
    id: 3,
    type: "Text Input",
    label: "Custom Name",
    sort_id: 2,
    required: true,
    functions: [
      {
        id: 1,
        type: "text",
        text_id: 3,
      },
    ],
    help_text: "Example: Sophia &amp; William",
    add_chains: false,
    conditions: [],
    max_length: 20,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 2,
    type: "Swatch",
    label: "Image 2",
    values: [
      {
        id: 1,
        value: "Value 1",
        sort_id: 1,
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/great-family-shop.myshopify.com/8410b6d5-451e-4f76-80e3-5e78e277ab05/2/08a65757-f114-43e5-95df-f80240be26f6.png",
      },
    ],
    sort_id: 3,
    required: false,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "2",
      },
    ],
    conditions: [],
    hide_visually: true,
    variation_conditions: [],
  },
];
