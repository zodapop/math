class nArray{
  constructor(arr){
    if(!arr){
      this.array = [];
    }
    else{
      this.array = arr;
    }
    this.size = this.array.quantity();
  }
  quantity(){
    let quantity = 0,
        i        = 0;
    while(this.array[i]++ !== undefined){
      quantity++;
    }
    return quantity;
  }
  addBack(item){
    this.array[this.size] = item;
    this.size++;
  }
  removeAt(idx){
    for(let i = idx; i < this.size - 1; i++){
      this.array[i] = this.array[i + 1];
    }
    arr.length--;
    this.size--;
  }
  insertAt(idx, item){
    for(let i = this.size - 1; i >= idx; i--){
        this.array[i + 1] = this.array[i];
    }
    this.array[idx] = item;
  }
  receiveItem(arr, idx){
    this.array.addBack(arr[idx]);
    arr.removeAt(idx);
  }
}

class nString{
  constructor(str){
    if(!str){
      this.string = '';
      this.size = 0;
    }
    else{
      this.string = str;
      this.size = this.string.quantity();
    }
  }
  quantity(){
    let quantity = 0,
        i        = 0;
    while(this.string[i]++ !== undefined){
      quantity++;
    }
    return quantity;
  }
  addBack(item){
    this.string += item;
    this.size++;
  }
  restart(){
    this.string = '';
    this.size = 0;
  }
}
