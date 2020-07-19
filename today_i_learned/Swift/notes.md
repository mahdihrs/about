
Secara terminologi Operator dibagi menjadi tiga bagian yakni unary, binary atau ternary:
- Unary Operator beroperasi pada target tunggal (misalnya -1). Terdapat dua macamnya, yang pertama adalah operator unary prefix yang muncul tepat sebelum targetnya (seperti !b) dan yang kedua adalah operator unary postfix yang muncul setelah targetnya (seperti c!).

- Binary Operator beroperasi pada dua target (seperti 2 + 3) dan bersifat infix karena mereka muncul di antara dua target .

- Ternary Operator beroperasi pada tiga target. Seperti bahasa pemrograman lainnya, Swift hanya memiliki satu operator ternary, operator kondisional ternary (a ? b : c).

  

### Remainder Operator

  

    a = (b x some multiplier) + remainder
    
    10 % 4 // akan menghasilkan sisa 2

  

### Tuples Comparison

    (1, "zebra") < (2, "apple") // true karena 1 lebih kecil dari pada 2; "zebra" tidak sama dengan "apple"
    
    (3, "apple") < (3, "bird") // true karena 3 sama dengan 3; "apple" kurang dari "bird"
    
    (4, "dog") == (4, "dog") // true karena 4 sama dengan 4; "dog" sama dengan "dog"

  

### Bitwise XOR Operator

Operator Bitwise XOR atau “exclusive OR operator” (^), membandingkan bit dari dua angka. Operator ini mengembalikan nomor baru dengan bit-bit yang ditetapkan menjadi satu jika bit antara input satu dan lainnya berbeda dan ketika inputnya sama akan ditetapkan menjadi nol.

  

    let firstBits: UInt8 = 0b00010100
    
    let otherBits: UInt8 = 0b00000101
    
    let outputBits = firstBits ^ otherBits // sama dengan 00010001

  

### Bitwise Left and Right Shift Operators

Operator Bitwise geser ke kiri (<<) dan geser ke kanan (>>), memindahkan semua bit dalam angka ke kiri atau ke kanan dengan jumlah tertentu sesuai dengan aturan yang ditentukan. Pergeseran bitwise ke kiri dan kanan memiliki efek mengalikan atau membagi bilangan bulat dengan faktor dua. Menggeser bit integer ke kiri dengan satu posisi maka ini dimaksud dengan menggandakan atau mengalikan nilainya, sedangkan menggeser ke kanan akan membagi nilainya.

  

    let shiftBits: UInt8 = 4 // 00000100 di binary
    
    shiftBits << 1 // 00001000
    
    shiftBits << 2 // 00010000
    
    shiftBits << 5 // 10000000
    
    shiftBits << 6 // 00000000
    
    shiftBits >> 2 // 00000001
