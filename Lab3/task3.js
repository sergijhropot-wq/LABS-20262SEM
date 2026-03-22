function insertAtPosition(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}