| Задача | Файлы |
| --- | --- |
| 2.9.1 Операторы сравнения | [task1.js](task1.js) |

# 2.9.1 Операторы сравнения
Каким будет результат этих выражений?
```javascript
5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

**Решение**
```javascript
5 > 4 // true

"ананас" > "яблоко" // я > а, следовательно false

"2" > "12" //символ 2 > 1, следовательно true

undefined == null // undefined и null равны друг другу и не равны ничему другому, следовательно true

undefined === null // undefined и null различаются по типу, следовательно false

null == "\n0\n" // undefined и null равны друг другу и не равны ничему другому, следовательно false

null === +"\n0\n" // разные типы, false
```