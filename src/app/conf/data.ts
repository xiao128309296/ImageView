import { ImageItem } from "../model/image"
import { typeItem } from "../model/type"

/** 图片 */
const imgaes: Array<ImageItem> = [
  {
    id: 0,
    name: '0',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 0,
      name: '类别1'
    },
    created_at: '2023-07-01T17:13:10.717+08:00'
  },
  {
    id: 1,
    name: '1',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 0,
      name: '类别1'
    },
    created_at: '2023-07-02T17:13:10.717+08:00'
  },
  {
    id: 2,
    name: '2',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 0,
      name: '类别1'
    },
    created_at: '2023-07-03T17:13:10.717+08:00'
  },
  {
    id: 3,
    name: '3',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 0,
      name: '类别1'
    },
    created_at: '2023-07-04T17:13:10.717+08:00'
  },
  {
    id: 4,
    name: '4',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 1,
      name: '类别2'
    },
    created_at: '2023-07-05T17:13:10.717+08:00'
  },
  {
    id: 5,
    name: '5',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 1,
      name: '类别2'
    },
    created_at: '2023-07-06T17:13:10.717+08:00'
  },
  {
    id: 6,
    name: '6',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 1,
      name: '类别2'
    },
    created_at: '2023-07-07T17:13:10.717+08:00'
  },
  {
    id: 7,
    name: '7',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 1,
      name: '类别2'
    },
    created_at: '2023-07-08T17:13:10.717+08:00'
  },
  {
    id: 8,
    name: '8',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 2,
      name: '类别3'
    },
    created_at: '2023-07-09T17:13:10.717+08:00'
  },
  {
    id: 9,
    name: '9',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 2,
      name: '类别3'
    },
    created_at: '2023-07-10T17:13:10.717+08:00'
  },
  {
    id: 10,
    name: '10',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 2,
      name: '类别3'
    },
    created_at: '2023-07-11T17:13:10.717+08:00'
  },
  {
    id: 11,
    name: '11',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 2,
      name: '类别3'
    },
    created_at: '2023-07-12T17:13:10.717+08:00'
  },
  {
    id: 12,
    name: '12',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 3,
      name: '类别4'
    },
    created_at: '2023-07-13T17:13:10.717+08:00'
  },
  {
    id: 13,
    name: '13',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 3,
      name: '类别4'
    },
    created_at: '2023-07-14T17:13:10.717+08:00'
  },
  {
    id: 14,
    name: '14',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 3,
      name: '类别4'
    },
    created_at: '2023-07-15T17:13:10.717+08:00'
  },
  {
    id: 15,
    name: '15',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 3,
      name: '类别4'
    },
    created_at: '2023-07-16T17:13:10.717+08:00'
  },
  {
    id: 16,
    name: '16',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 4,
      name: '类别5'
    },
    created_at: '2023-07-17T17:13:10.717+08:00'
  },
  {
    id: 17,
    name: '17',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 4,
      name: '类别5'
    },
    created_at: '2023-07-18T17:13:10.717+08:00'
  },
  {
    id: 18,
    name: '18',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 4,
      name: '类别5'
    },
    created_at: '2023-07-19T17:13:10.717+08:00'
  },
  {
    id: 19,
    name: '19',
    picture: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJmFzSicR3biaetricmJDicpbyGYwNu45EeVIbHOQHLffRb9huETW6U0OPlmXvjiaB5yQ9HFTiayMDdtwcQ/132',
    type: {
      id: 4,
      name: '类别5'
    },
    created_at: '2023-07-20T17:13:10.717+08:00'
  },
]

/** 类别 */
const type: Array<typeItem> = [
 {
  id: 0,
  name: '类别1'
 },
 {
  id: 1,
  name: '类别2'
 },
 {
  id: 2,
  name: '类别3'
 },
 {
  id: 3,
  name: '类别4'
 },
 {
  id: 4,
  name: '类别5'
 },
]

export {imgaes, type}
