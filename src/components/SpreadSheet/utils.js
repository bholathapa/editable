export function calculateRowPositions(rowHeights) {
    let prev = 0;
    const rowPositions = [];
    const rowCount = rowHeights.length;
    for (let i = 0; i < rowCount; i++) {
      if (i === 0) rowPositions[i] = 0;
      else rowPositions[i] = prev;
      prev += rowHeights[i];
    }
    return rowPositions;
  }
  

  export function mapRowIndexToDataIndex(
    rowColumns,
    totalNumOfData
  ) {
    const rowCount = rowColumns.length;
    let prevEndDataIndex = 0;
    let map = {};
    for (let i = 0; i < rowCount; i++) {
      const newEndDataIndex = Math.min(
        prevEndDataIndex + rowColumns[i],
        totalNumOfData
      );
      map[i] = [prevEndDataIndex, newEndDataIndex];
      prevEndDataIndex = newEndDataIndex;
    }
    return map;
  }
  
  export function classNames(className1, className2) {
    if (className2) return `${className1} ${className2}`;
    else return className1;
  }
  
  export function validateScrollTo(result) {
    if (result === -1 || result === undefined) {
      throw Error(
        'Invalid input to ScrollTo, make sure your input data index or row is correct'
      );
    }
  }
  
  export function sortedLastIndex(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (array[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return start;
  }
  
  export function sortedFirstIndex(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (array[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return start;
  }
  