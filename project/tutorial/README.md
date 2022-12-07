# 1.0 Text Styles
 ### **Code**
 ```
 **Bold** __Italic__
 
 _Italic_ _Italic_
 
 ~~Strikethrough~~
 
 **_Bold and italic_**
 
 **This bold paragraph contains an _italic_ text**
 ```
 > ### **EX**
 
 **Bold** __Italic__
 
 _Italic_ _Italic_
 
 ~~Strikethrough~~
 
 **_Bold and italic_**
 
 **This bold paragraph contains an _italic_ text**



# 1.1 Heading
### **Code**
```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
### **EX**
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6



# 1.2 Quote
### **Code**
```
> A quote is a block of text that is set off from the main text by quotation marks.
> > A quote is a block of text that is set off from the main text by quotation marks.
> > > A quote is a block of text that is set off from the main text by quotation marks.
```
### **EX**
> A quote is a block of text that is set off from the main text by quotation marks.
> > A quote is a block of text that is set off from the main text by quotation marks.
> > >A quote is a block of text that is set off from the main text by quotation marks.



# 1.3 Code & Code Block
### **Code & EX**
- 들여쓰기

4칸을 띄어쓰기 하면 들여쓰기가 된다.
``` 
This is a normal paragraph:

     This is a code block.

end code block.
```

This is a normal paragraph:

    This is a code block.

end code block.

Code Block

- " ``` " 키를 사용하는 방법
```
` ` `
$text = str_replace('one', 'an', 'There is one apple.')
print $text;
` ` `
```
```
$text = str_replace('one', 'an', 'There is one apple.')
print $text;
```
- &lt;pre&gt;&lt;code&gt;{code}&lt;/code&gt;&lt;/pre&gt; 이용방식
```
<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code>
</pre>
```
<pre>
<code>
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }

}
</code>
</pre>



# 1.4 List
### **Code**
```
- Apple
  - Samsung
    - OnePlus
      - Xiaomi

+ 1
  + 2
    + 3
      + 4

* Kotlin
  * Java
    * Android
      * XML
```
### **EX**
- Apple
  - Samsung
    - OnePlus
      - Xiaomi

+ 1
  + 2
    + 3
      + 4

* Kotlin
  * Java
    * Android
      * XML

# 1.5 Link & Image
### **Code**
```
![Tle Apps](https://tleapps.com)
![Image Alt Text](https://tleapps.com/wp-content/uploads/2021/12/covid_icon_001.png)
```

### **EX**
![Tle Apps](https://tleapps.com)
![Image Alt Text](https://tleapps.com/wp-content/uploads/2021/12/covid_icon_001.png)


# 1.6 Task List
### **Code**
```
- [ ] Remove all log print lines
- [ ] Remove deprecated functions
- [x] Increase font size
```

### **EX**
- [ ] Remove all log print lines
- [ ] Remove deprecated functions
- [x] Increase font size


# 1.7 Table
### **Code**
```
| Browser | Support |
|---------|---------|
| Chrome  | yes     |
| Firefox | yes     |
| Edge    | no      |
```
### **EX**
| Browser | Support |
|---------|---------|
| Chrome  | yes     |
| Firefox | yes     |
| Edge    | no      |

# 1.8 수평선
### **Code**
```
* * *
***
*****
---
- - -
------------------
```
### **EX**
* * *
***
******
---
-----------------
# 1.9 링크
### **Code & EX**
- 참조링크
```
[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"
```
[link keyword][id]

[id]: URL "Optional Title here"

// code
Link: [Google][googlelink]

[googlelink]: https://google.com "Go google"
- 외부링크
```
사용문법: [Title](link)
적용예: [Google](https://google.com, "google link")
```
사용문법: [Title](link)
적용예: [Google](https://google.com, "google link")
- 자동연결
```
일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

* 외부링크: <http://example.com/>
* 이메일링크: <address@example.com>
```
* 외부링크: <http://example.com/>
* 이메일링크: <address@example.com>

# 2.0 이미지
### **Code**
```
![Alt text](../cloneCoding/kokoaTalk/src/img/115819770.jpeg)
![Alt text](../cloneCoding/kokoaTalk/src/img/115819770.jpeg "Optional title")
```
### **EX**
![Alt text](../cloneCoding/kokoaTalk/src/img/115819770.jpeg)
![Alt text](../cloneCoding/kokoaTalk/src/img/115819770.jpeg "Optional title")

사이즈 조절 기능은 없기 때문에 <img width="" height=""></img>를 이용한다.

    <img src="경로" width="100px" height="100px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
    <img src="경로" width="30%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>

<img src="../cloneCoding/kokoaTalk/src/img/115819770.jpeg" width="100px" height="100px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
<img src="../cloneCoding/kokoaTalk/src/img/115819770.jpeg" width="30%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>

# 2.1 줄바꿈
3칸 이상 띄어쓰기( )를 하면 줄이 바뀐다.
### **Code**
```
* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다. 
이렇게

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기
이렇게
```
### **EX**
* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다. 
이렇게

* 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.   
이렇게
