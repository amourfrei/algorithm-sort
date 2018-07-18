var Sort = {}

// bubble sort.
Sort.bubble = function(arr) {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// select sort.
Sort.selection = function(arr) {
  var len = arr.length
  var minIndex, temp
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}

// insert sort.
Sort.insertion = function(arr) {
  var len = arr.length
  var preIndex, current
  for (var i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

// shell sort.
Sort.shell = function(arr) {
  var len = arr.length,
    temp,
    gap = 1
  while (gap < len / 3) {
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[i]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

// merge sort.
Sort.merge = function(arr) {
  var len = arr.length
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return _swapMerge(merge(left), merge(right))
}

function _swapMerge(left, right) {
  var result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())

  return result
}

// quick sort.
Sort.quick = function(arr, left, right) {
  var len = arr.length,
    part,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right
  if (left < right) {
    part = part(arr, left, right)
    quick(arr, left, part - 1)
    quick(arr, part + 1, right)
  }
  return arr
}

function _part(arr, left, right) {
  var pivot = left,
    index = pivot + 1
  for (var i = index; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      _swapQuick(arr, i, index)
      index++
    }
  }
  _swapQuick(arr, pivot, index - 1)
  return index - 1
}

function _swapQuick(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
//the other way quick sort
function _part2(arr, low, high) {
  var pivot = arr[low]
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high
    }
    arr[low] = arr[high]
    while (low < high && arr[low] <= pivot) {
      ++low
    }
    arr[high] = arr[low]
  }
  arr[low] = pivot
  return low
}

Sort.quick2 = function(arr, low, high) {
  if (low < high) {
    let pivot = _part2(arr, low, high)
    Sort.quick2(arr, low, pivot - 1)
    Sort.quick2(arr, pivot + 1, high)
  }
  return arr
}

//heap sort.
function Heap() {
  var len
  var swap = function(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  var heapAdjust = function(arr, i) {
    var left = 2 * i + 1,
      right = 2 * i + 2,
      largest = i
    if (left < len && arr[left] > arr[largest]) {
      largest = left
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right
    }
    if (largest != i) {
      swap(arr, i, largest)
      heapAdjust(arr, largest)
    }
  }
  var buildMaxHeap = function(arr) {
    len = arr.length
    for (var i = Math.floor(len / 2); i >= 0; i--) {
      heapAdjust(arr, i)
    }
  }
  this.sort = function(arr) {
    buildMaxHeap(arr)
    for (var i = arr.length - 1; i > 0; i--) {
      swap(arr, 0, i)
      len--
      heapAdjust(arr, 0)
    }
    return arr
  }
}

// count sort.

Sort.count = function(arr) {
  var bucket = new Array(maxVal + 1),
    sortedIndex = 0,
    arrLen = arr.length,
    bucketLen = maxVal + 1
  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }

  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j
      bucket[j]--
    }
  }
  return arr
}

// radix sort.

Sort.radix = function(arr, maxDigit) {
  var counter = [],
    mod = 10,
    dev = 1
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    var pos = 0
    for (var j = 0; j < counter.length; j++) {
      var value = null
      if (counter[j] != null) {
        while ((value = counter[j].shift() != null)) {
          arr[pos++] = value
        }
      }
    }
  }
  return arr
}
