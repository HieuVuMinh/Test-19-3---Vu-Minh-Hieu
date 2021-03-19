// Bài 1: Tính độ dài chuỗi
function length(a) {
    a = document.getElementById("text1").value
    document.getElementById("result1").innerHTML = a.length
}

// Bài 2: Tính trung bình cộng
function tBc(b) {
    b = prompt("Nhập độ dài mảng")
    var array = []
    var total = 0;
    if (b < 1) {
        alert("Độ dài mảng không đủ")
    } else if (b == 1) {
        var pt = parseInt(prompt("Nhập số phần tử"));
        alert("Trung bình cộng là " + pt)
    } else {
        for (let i = 0; i < b; i++) {
            array[i] = parseInt(prompt("Nhập số phần tử"));
            total += array[i];
        }
        alert("Trung bình cộng của mảng là = " + total / array.length)
    }
}

// Bài 3: Tìm giá trị lớn nhất
function maxMin(b) {
    b = prompt("Nhập độ dài mảng")
    var array = []

    if (b < 1) {
        alert("Độ dài mảng không đủ")
    } else if (b == 1) {
        var pt = parseInt(prompt("Nhập số phần tử"));
        alert("Số lớn nhất là " + pt)
    } else {
        for (let i = 0; i < b; i++) {
            array[i] = parseInt(prompt("Nhập số phần tử"));
        }
        var max = array[0]
        for (var j = 0; j < array.length; j++) {
            if (max < array[j]) {
                max = array[j];
            }
        }
        alert("Số lớn nhất là " + max)
    }
}

// Bài 3: Tìm giá trị nhỏ nhất
function minMax(b) {
    b = prompt("Nhập độ dài mảng")
    var array = []

    if (b < 1) {
        alert("Độ dài mảng không đủ")
    } else if (b == 1) {
        var pt = parseInt(prompt("Nhập số phần tử"));
        alert("Số nhỏ nhất là " + pt)
    } else {
        for (let i = 0; i < b; i++) {
            array[i] = parseInt(prompt("Nhập số phần tử"));
        }
        var min = array[0]
        for (var j = 0; j < array.length; j++) {
            if (min > array[j]) {
                min = array[j];
            }
        }
        alert("Số nhỏ nhất là " + min)
    }
}

// Bài 4: Cộng trừ nhân chia 2 số
function caculator(toantu) {
    var a = parseInt(document.getElementById("firstnumber").value)
    var b = parseInt(document.getElementById("secondnumber").value)
    switch (toantu) {
        case '+':
            document.getElementById("result2").innerHTML = a + b
            break;
        case '-':
            document.getElementById("result2").innerHTML = a - b
            break;
        case 'x':
            document.getElementById("result2").innerHTML = a * b
            break;
        case '/':
            document.getElementById("result2").innerHTML = a / b
            break;
    }
}

// Bài 5: Kiểm tra số nguyên
function check(a) {
    a = prompt("Nhập một giá trị")
    if (a < 0) {
        if (a % parseInt(a) == 0) {
            alert(a + " là số nguyên âm")
        } else {
            alert(a + " không phải là số nguyên")
        }
    } else if (a > 0) {
        if (a % parseInt(a) == 0) {
            alert(a + " là số nguyên dương")
        } else {
            alert(a + " không phải là số nguyên")
        }
    }
}

// Bài 6: Viết hàm cho phép người dùng nhập tên là hiển thị lời chào
function hiHello(a) {
    alert("Hello " + a)
}

// Bài 7: Viết chương trình cho phép thêm một phần tử trong mảng
function addNumber(a) {
    var b = []
    a = document.getElementById("num").value;
    b = b.push(a)
    document.getElementById("numorword").innerHTML = b
}

// Bài 8: Viết chương trình cho phép xóa một phần tử trong mảng
function deleteNumber(a) {
    a = document.getElementById("num1").value;
    b = [3, 2, 4, 1, 5, "hello", "chuối"];
    b.splice(a, 1);
    document.getElementById("wordorNum").innerHTML = b
}

// Bài 9: Viết chương trình cho phép tìm kiếm một phần tử trong mảng
function searchNumber(a) {
    a = document.getElementById("num2").value;
    b = [3, 2, 4, 1, 5, "hello", "chuối"];
    var index = -1;
    var count = 0;
    for (var i = 0; i < a; i++){
        if (a == b[i]){
            index = i;
            count++;
            break;
        } return index;
    } if (index = -1){
        alert("Không tìm thấy")
    } else {
        document.getElementById("numorword1").innerHTML = a + "tại vị trí" + count;
    }
}