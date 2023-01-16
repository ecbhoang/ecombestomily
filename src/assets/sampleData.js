export let sampleData = [
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
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/2/47fbfa00-c6a1-48eb-9db4-bff33f07ecde.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/2/e45ad961-66a8-47c2-93ef-e0389c074787.png",
      },
      {
        id: 3,
        value: "Braid Hair Girl",
        sort_id: 3,
        tooltip: "Braid Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/2/792bc611-0f80-4a74-a90a-f69580aa2a29.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/2/daf4872b-e9c1-4899-b2bd-9777e75667be.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/2/21f31950-e242-4feb-878d-61997c6d51e7.png",
      },
    ],
    sort_id: 5,
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
    sort_id: 7,
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
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/20/04a335f6-82b1-4d72-945b-dfaad1f89c5c.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/20/ffc32c39-2b99-4928-8b83-c2f32ceea77e.png",
      },
      {
        id: 3,
        value: "Braid Hair Girl",
        sort_id: 3,
        tooltip: "Braid Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/20/f4b288ba-bfdc-41af-be41-fbcb5ee52c50.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/20/c2f050a3-b942-4427-9940-ba959f1edb0b.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/20/7506bc99-ab28-4f7c-860e-5bbaa4490b46.png",
      },
    ],
    sort_id: 8,
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
    id: 28,
    type: "Text Input",
    label: "Custom The 2nd Kid's Number",
    sort_id: 10,
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
    id: 29,
    type: "Text Input",
    label: "Custom The 3rd Kid's Number ",
    sort_id: 13,
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
    id: 31,
    type: "Text Input",
    label: "Custom The 5th Kid's Number ",
    sort_id: 19,
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
    id: 25,
    type: "Text Input",
    label: "Custom The 3rd Kid's Name",
    sort_id: 12,
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
    max_length: 10,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 30,
    type: "Text Input",
    label: "Custom The 4th Kid's Number",
    sort_id: 16,
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
    id: 7,
    type: "Text Input",
    label: "Custom Dad's Name",
    sort_id: 2,
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
    max_length: 10,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 8,
    type: "Text Input",
    label: "Custom Dad's Number",
    sort_id: 3,
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
    id: 27,
    type: "Text Input",
    label: "Custom The 5th Kid's Name",
    sort_id: 18,
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
    max_length: 10,
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
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/22/6129b551-6c64-4f50-b0ef-21dae8571a0d.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/22/14c28a6c-7858-4a10-ab87-30a8578de622.png",
      },
      {
        id: 3,
        value: "Braid Hair Girl",
        sort_id: 3,
        tooltip: "Braid Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/22/e4b7ce5b-1993-4a57-a39b-d5247b7915c3.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/22/ead2e1e2-0013-48ba-b956-6f90f39cb2d8.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/22/a0e970e4-4012-4995-959d-4e61dfb8157c.png",
      },
    ],
    sort_id: 14,
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
    id: 26,
    type: "Text Input",
    label: "Custom The 4th Kid's Name",
    sort_id: 15,
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
    max_length: 10,
    is_textarea: false,
    hide_visually: false,
    variation_conditions: [],
  },
  {
    id: 9,
    type: "Text Input",
    label: "Custom The 1st Kid's Name",
    sort_id: 6,
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
    max_length: 10,
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
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/21/82b4483b-9d8a-45e0-8dc2-8e58b3795da7.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/21/fd12f2ad-ad01-48ce-bb12-1256d2c44b02.png",
      },
      {
        id: 3,
        value: "Braid Hair Girl",
        sort_id: 3,
        tooltip: "Braid Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/21/8143b133-baee-45e5-83f0-730bb84a6e85.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/21/113cb88a-c6e3-481b-818b-162e739ae634.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/21/d10d764b-1e02-4da2-b57d-52a332019ff8.png",
      },
    ],
    sort_id: 11,
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
    id: 19,
    type: "Dropdown",
    label: "Choose The Number Of Kids",
    values: [
      {
        id: 0,
        value: "1",
        sort_id: 1,
        selected: true,
        product_id: "4c3fd1b8-9d28-48e0-9f35-90345833bd0a",
      },
      {
        id: 1,
        value: "2",
        sort_id: 2,
        selected: false,
        product_id: "e5b01a42-af40-4779-857a-561d993875c7",
      },
      {
        id: 2,
        value: "3",
        sort_id: 3,
        selected: false,
        product_id: "7cb7d166-00e4-48bf-bdc1-b38cb4dccd6c",
      },
      {
        id: 3,
        value: "4",
        sort_id: 4,
        selected: false,
        product_id: "e6d4e5c9-cef1-4a95-bcc7-bd09bb044515",
      },
      {
        id: 4,
        value: "5",
        sort_id: 5,
        selected: false,
        product_id: "35dc2427-7b63-4036-a081-414e3e3c9415",
      },
    ],
    sort_id: 4,
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
    id: 24,
    type: "Text Input",
    label: "Custom The 2nd Kid's Name",
    sort_id: 9,
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
    max_length: 10,
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
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/23/cd098edc-58a0-4eb5-9428-03098aea8d07.png",
      },
      {
        id: 2,
        value: "Bob Hair Girl",
        sort_id: 2,
        tooltip: "Bob Hair Girl",
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/23/f859b511-6a57-4dc8-8cf2-c478445a8c68.png",
      },
      {
        id: 3,
        value: "Braid Hair Girl",
        sort_id: 3,
        tooltip: "Braid Hair Girl",
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/23/0a2534bc-ebaa-44e5-9db3-42d2129cdb82.png",
      },
      {
        id: 4,
        value: "Bun Hair Girl",
        sort_id: 4,
        tooltip: "Bun Hair Girl",
        image_id: 4,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/23/9422e0ad-916b-4ca5-84cb-e3904f078fbe.png",
      },
      {
        id: 5,
        value: "Long Hair Girl",
        sort_id: 5,
        tooltip: "Long Hair Girl",
        image_id: 5,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/23/d6a8d2ca-3a5f-4593-a2b6-00325ec8cbb8.png",
      },
    ],
    sort_id: 17,
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
  {
    id: 1,
    type: "Swatch",
    label: "Choose The Quotes",
    values: [
      {
        id: 1,
        value: "Full Time Dad",
        sort_id: 1,
        image_id: 1,
        selected: true,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/1/8f94c73e-332f-4e92-b997-439d2d4f9e10.png",
      },
      {
        id: 2,
        value: "Never Lose",
        sort_id: 2,
        image_id: 2,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/1/aafff25d-f4b7-4988-bc98-1195192b62eb.png",
      },
      {
        id: 3,
        value: "Thank You For Teaching Me",
        sort_id: 3,
        image_id: 3,
        selected: false,
        thumb_image:
          "https://cdn.customily.com/shopify/assetFiles/swatches/bee-pinky.myshopify.com/27f2988a-6fb1-40e8-93ba-2ad07fcee29c/1/e652e700-512b-4d9e-ad8b-88fac2dadb0f.png",
      },
    ],
    sort_id: 1,
    required: true,
    functions: [
      {
        id: 1,
        type: "image",
        image_id: "1",
      },
    ],
    conditions: [],
    hide_visually: false,
    variation_conditions: [],
  },
];
