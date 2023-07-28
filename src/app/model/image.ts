// 图片列表
export interface ImageItem {
  // 图片ID
  id: number;
  // 图片名称
  name: string;
  // 图片地址
  picture: string;
  // 图片类别
  type: {
    // 类型ID
    id: number;
    // 类型名称
    name: string;
  };
   // 创建时间
  created_at: string;
}
