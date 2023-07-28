import { Component } from '@angular/core';
import { ImageItem } from './model/image';
import { imgaes } from './conf/data';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ImageView';

  // 时间列表
  list: ImageItem[] = [];
  // 类别列表
  typeList: any;
  // 显示类别
  type = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.fetchImage();
  }

  /**
   * 获取图片列表
   */
  fetchImage() {
    let list = JSON.stringify(imgaes);
    let result = JSON.parse(list);
    let newList = JSON.stringify(imgaes);
    let newResult = JSON.parse(newList);
    this.list = this.sortDataArray(result);
    this.typeList = this.formattingData(newResult);
  }

  /**
   * 图片分组
   */
  formattingData(list: any) {
    const map = new Map();
    let res: { name: any; data: any; }[] = [];
    list.forEach((item: ImageItem, index: any, arr: any[]) => {
      if (!map.has(item.type.name)) {
        map.set(
          item.type.name,
          arr.filter((a: { type: { name: string; }; }) => a.type.name == item.type.name)
        )
      }
    })
    Array.from(map).map(item => {
      res.push({
        'name': item[0],
        'data': item[1]
      })
    })
    return res;
  }

  /**
   * 对图片根据时间排序
   */
  sortDataArray(list: any) {
    return list.sort((a: { created_at: string; },b: { created_at: string; }) => {
      return Date.parse(b.created_at) - Date.parse(a.created_at);
    })
  }

  /** 拖拽后处理 */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  /**
   * 更改显示类型
   */
  changeType(type: number) {
    this.type = type;
    switch (type) {
      case 0:
        this.fetchImage();
        break;
      case 1:
        this.fetchImage();
        break;
    }
  }
}
