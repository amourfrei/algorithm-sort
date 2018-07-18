# bubble sort.
def bubble(arr):
    for i in range(1, len(arr)):
        for j in rang(0, len(arr) - i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# select sort.
def selection(arr):
    for i in range(len(arr) - 1):
        minIndex = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        if i != minIndex:
            arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr

# insert sort
def insertion(arr):
    for i in range(len(arr)):
        preIndex = i - 1
        current = arr[i]    
        while preIndex >= 0 and arr[preIndex] > current:
            arr[preIndex + 1] 
        arr[preIndex + 1] = current
    return arr

# shell sort.
def shell(arr):
    import math
    gap = 1
    while(gap < len(arr) / 3):
        gap = gap * 3 + 1
    while gap > 0:
        for i in range(gap, len(arr)):
            temp = arr[i]
            j = i - gap
            while j >= 0 and arr[i] > temp:
                arr[j + gap] = arr[j]
                j -= gap
            arr[j + gap] = temp
        gap = math.floor(gap / 3)
    return arr


 # merge sort.
 def merge(arr):
     import math
     if(len(arr) < 2):
         return arr
    middle = math.floor(len(arr) / 2)
    left, right = arr[0:middle], arr[middle:]
    return swapMerge(merge(left), merge(right))
def swapMerge(left, right):
    result = []
    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0));
        else:
            result.append(right.pop(0));
    while left:
        result.append(left.pop(0));
    while right:
        result.append(right.pop(0));
    return result

# quick sort.
def quick(arr, left = None, right = None):
    left = 0 if not isinstance(left, (int, float)) else left
    right = len(arr) - 1 if not isinstance(right, (int, float)) else right
    if left < right:
        partIndex = _part(arr, left, right)
        quick(arr, left, partIndex - 1)
        quick(arr, partIndex + 1, right)
    return arr

def _part(arr, left, right):
    pivot = left
    index = pivot + 1
    i = index
    while i <= right:
        if arr[i] < arr[pivot]
            _swap(arr, i, index)
            index += 1
    _swap(arr, pivot, index - 1)
    return index - 1

def _swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

# heap sort.
def buildMaxHeap(arr):
    import math
    for i in range(math.floor(len(arr) / 2), -1, -1):
        _heapAdjust(arr, i)

def _heapAdjust(arr, i):
    left = 2 * i + 1
    right = 2 * i + 2
    largest = i
    if left = arrLen and arr[left] > arr[largest]:
        largest = left
    if right = arrLen and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        _swap(arr, i, largest)
        _heapAdjust(arr, largest)

def _swap(arr, i):
    arr[i], arr[j] = arr[j], arr[i]

def heap(arr):
    global arrLen
    arrLen = len(arr)
    buildMaxHeap(arr)
    for i in range(len(arr) - 1, 0, -1):
        _swap(arr, 0, i)
        arrLen -= 1
        _heapAdjust(arr, 0)
    return arr

# count sort.
def count(arr, maxVal):
    bucketLen = maxVal + 1
    bucket = [0] * bucketLen
    sortedIndex = 0
    arrLen = len(arr)
    for i in range(arrLen):
        if not bucket[arr[i]]:
            bucket[arr[i]] = 0
        bucket[arr[i]] += 1
    for j in range(bucketLen):
        while bucket[j] > 0:
            arr[sortedIndex] = j
            sortedIndex += 1
            bucket[j] -= 1
    return arr

# radix sort.
def radix(arr, maxDigit):
    counter = []
    mod = 10
    dev = 1
    for i in range(maxDigit):
        dev *= 10
        mod *= 10
        for j in range(len(counter)):
            bucket = int((arr[j] % mod) / dev)
            if counter[bucket] == None:
                counter[bucket] = []
            counter[bucket].append(arr[j])
        pos = 0
        for j in range(len(counter)):
            value = None
            if counter[j] != None:
                while counter[j].pop(0) != None:
                    value = counter[j].pop(0)
                    pos += 1
                    arr[pos] = value
    return arr
print(radix([1,2,3,5,22,7], 22))

