import { dynamicArray } from './Easy/DynamicArray.js';

let array = new dynamicArray(1);
array.getSize();
array.getCapacity();

array.pushback(1);
array.getSize();
array.getCapacity();

array.pushback(2);
array.getSize();
array.getCapacity();

array.get(1);
array.set(1,3);
array.get(1);

array.popback();
array.getSize();
array.getCapacity();