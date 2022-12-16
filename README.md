
# 제목1
제목1
=
## 제목2
제목2
-
### 제목3
#### 제목4
##### 제목5
###### 제목6  
<br/>

#### 강조
*별표*
_언더바_
**별표**
__언더바__
~~물결무늬~~

#### 목록
1. 순서가 필요한 목록
2. 순서가 필요한 목록
    - 순서가 필요하지 않은 목록 (서브)
    - 순서가 필요하지 않은 목록 (서브)
3. 순서가 필요한 목록
    1. 순서가 필요한 목록 (서브)
    2. 순서가 필요한 목록 (서브)

- 순서가 필요하지 않은 목록에 사용 가능한 기호
    - 대쉬 (hyphen)
    * 별표 (asterisks)
    + 더하기 (plus sign)

#### 링크
[GOOGLE](https://google.com)
구글 홈페이지: https://google.com
[NAVER](https://naver.com "링크 설명")
네이버 홈페이지: <https://naver.com>
[상대적 참조](../user/login)
[Dribbble][Dribbble link]
[GitHub][1]

[Dribbble link]: https://dribbble.com
[1]: https://github.com

#### 이미지
[대체 텍스트 입니다!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명")
![대체 텍스트 입니다!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명")
![Kayak][logo]

[logo]: http://www.gstatic.com/webp/gallery/2.jpg "To go kayaking"

#### 이미지에 링크
[![Vue](/images/vue.png)](https://kr.vuejs.org/)

#### 코드 강조
`background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입 가능

#### 블록 코드 강조
```html
<a href="" target="_blank">GOOGLE</a>
```
```css
.list > li {
    position: absolute;
    top: 40px;
}
```
```javascript
function func() {
    var a = 'AAA';
    return a;
}
```
```python
s = "Python syntax highlighting"
print s
```
```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

#### 표
값 | 의미 | 기본값
:---|:---:|:---:
`static` | 유형(기준) 없음 / 배치 불가능 | `static` 
`relative` | 요소 자신을 기준으로 배치 |
`absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |
`fixed` | 브라우저 창을 기준으로 배치 |

#### 인용문
> 남의 말이나 글에서 직접 또는 간접으로 따온 문장
> (네이버 국어 사전)
> _(네이버 국어 사전)_

> 인용문을 작성하세요!
> 응?
>> 중첩된 인용문을 만들 수 있습니다.
>>> 중중첩된 인용문 1
>>> 중중첩된 인용문 2
>>> 중중첩된 인용문 3

#### 원시 HTML(Raw HTML)
<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며 대부분 잘 동작함
<img width="150" src="http://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">
![Prunus](http://www.gstatic.com/webp/gallery/4.jpg)

#### 수평선
---
***
___
