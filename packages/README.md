# library-tools

工具函数库

## `ut_dateFormatted`

| 参数 | 类型   | 描述                                                          | default |
| ---- | ------ | ------------------------------------------------------------- | ------- |
| date | string | 日期                                                          | -       |
| type | number | 0：年月日时分秒、1：年月日、2：时分秒、3：年月日时分、4：时分 | 0       |

> 日期格式化(凡日期, 统一调用此方法, 不论是否需要)，使用统一 process.env.DATAFORMAT 格式
>
> 传入完整的日期字符串如“YYYY-MM-DD HH:mm:ss”，根据type的不同对日期格式化，返回相应的日期字符串；

###### 返回格式化后的日期

```ts
(date: string, type = 0): string
```

```ts
const date1 = ut_dateFormatted("2023-9-27 16:50:00", 0); // 2023-9-27 16:50:00
const date2 = ut_dateFormatted("2023-9-27 16:50:00", 1); // 2023-9-27
const date3 = ut_dateFormatted("2023-9-27 16:50:00", 2); // 16:50:00
const date4 = ut_dateFormatted("2023-9-27 16:50:00", 3); // 2023-9-27 16:50
const date5 = ut_dateFormatted("2023-9-27 16:50:00", 4); // 16:50
```

<!-- 防抖函数 -->

## `ut_debounce`

<!-- func:要延时（添加防抖）的函数 -->
<!-- wait:延时时间（与上一次触发的执行间隔），单位 ms -->
<!-- options?.leading:是否在超时前调用 -->
<!-- options?.maxWait: 最大的延时时间（触发间隔）-->
<!-- options?.trailing:是否在超时后调用 -->

| 参数     | 类型           | 描述     |
| -------- | -------------- | -------- |
| func     | (...arg)=>void | 回调函数 |
| wait     | number         | 防抖时间 |
| options? | object         | 函数配置 |

| options?.key | 类型    | 描述                       | default |
| ------------ | ------- | -------------------------- | ------- |
| leading？    | boolean | 是否在超时前调用           | false   |
| maxWait？    | number  | 最大的延时时间（触发间隔） | -       |
| trailing？   | boolean | 是否在超时后调用           | true    |

> 防抖函数
>
> 注意
>
> 1、如果设置了maxWait且小于wait属性，则该函数会变成“节流”函数，即 maxWait 时间内若触发了该事件，则到达最大时间的时候会再次执行。
>
> 2、如果options.leading和options.trailing都为true，则只有在等待超时期间多次调用已解封的函数时，才会在超时的后边缘调用func；

###### 返回function防抖函数;

```ts
const debounce = ut_debounce(
  (...arg): void => {
    console.log(...arg);
  },
  250,
  {
    maxWait: 1000,
  }
);
```

<!-- 下载文件 -->

## `ut_downLoadFile`

<!-- url:文件下载地址 -->
<!-- name:文件名 -->

| 参数 | 类型   | 描述         |
| ---- | ------ | ------------ |
| url  | string | 文件下载地址 |
| name | string | 文件名       |

> 下载文件
>
> 下载目标地址的文件，若为ios终端触发时直接页面跳转

###### 无返回值

```ts
(url: string, name: string): void
```

```ts
ut_downLoadFile("http://xxx.xxx.xxx/xxxxxx", "file");
```

<!-- 转义 html -->

## `ut_escape`

<!-- string:待转义的字符串 -->

| 参数   | 类型   | 描述           |
| ------ | ------ | -------------- |
| string | string | 待转义的字符串 |

> 转义 html
>
> 转换字符串中的“&”，“<”，“>”，“'”，“'”和“`”字符为相应的HTML实体。注意:不转义其他字符。如果需要转义其他字符，请使用第三方库，如he；在IE < 9中，反引号可以脱离属性值或HTML注释被转义；

###### 返回string转义完成之后的字符串;

```ts
const str = ut_escape("<body>"); // "&lt;body&gt;"
```

<!-- 从 localStorage 获取数据 -->

## `ut_getLS`

<!-- key:键值对的键名 -->

| 参数 | 类型   | 描述           |
| ---- | ------ | -------------- |
| key  | string | 待转义的字符串 |

> 从 localStorage 获取数据
>
> 传入键名返回键值(字符串)，若该键名不存在则返回空字符串；

###### 返回string键名对应的键值;

```ts
(key: string):string
```

```ts
const strVal = ut_getLS("uid");
```

<!-- 判断值是否无效 -->

## `ut_isEmpty`

<!-- key:键值对的键名 -->

| 参数 | 类型   | 描述           |
| ---- | ------ | -------------- |
| key  | string | 待转义的字符串 |

> 判断值是否无效
>
> undefined | null | '' 均为无效值,返回true，其他情况为非无效值，返回false；

###### 返回 boolean 是否无效;

```ts
(_data: string):boolean
```

```ts
const isEmpty = ut_isEmpty(""); // true
const isEmpty = ut_isEmpty(null); // true
const isEmpty = ut_isEmpty(undefined); // true
const isEmpty = ut_isEmpty("abc"); // false
```

<!-- 判断当前是否为移动端-->

## `ut_isMobile`

| 参数 | 类型 | 描述 |
| ---- | ---- | ---- |
| -    | -    | -    |

> 判断当前是否为移动端
>
> 若为移动端(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)则返回true
>
> 非移动端返回false；

###### 返回boolean当前设备是否为移动端;

```ts
(): boolean
```

```ts
const isEmpty = ut_isMobile();
```

<!-- 判断当前是否为微信浏览器-->

## `ut_isWXBrowser`

| 参数 | 类型 | 描述 |
| ---- | ---- | ---- |
| -    | -    | -    |

> 判断当前是否为微信浏览器
>
> 判断当前打开页面的浏览器是否为微信浏览器；

###### 返回boolean当前页面是否为微信浏览器;

```ts
(): boolean
```

```ts
const isWXBrowser = ut_isWXBrowser();
```

<!-- 打开新的标签页 -->

## `ut_openNewWin`

<!-- _url:要打开的页面地址 -->

| 参数  | 类型   | 描述             |
| ----- | ------ | ---------------- |
| \_url | string | 要打开的页面地址 |

> 打开新的标签页
>
> ps:传入的\_url必须以'http://'或'https://'为开始；

###### 返回 void;

```ts
(_url: string): void
```

```ts
const openNewWin = ut_openNewWin("http://xxx.xxxxxxx.xxx/xxxxx");
```

<!-- 解析文件内容 -->

## `ut_readFile`

<!-- file:上传的文件 -->
<!-- fn 回调函数(el:文件内容) -->

| 参数   | 类型       | 描述               |
| ------ | ---------- | ------------------ | -------- |
| \_file | File       | 上传的文件         |
| fn     | (el:string | ArrayBuffer)=>void | 回调函数 |

> 解析文件内容
>
> fn回调函数在file加载完后执行,其中el为文件解析完成获取到的数据；

###### 返回void;

```ts
(file: File, fn: () => void): void
```

```ts
const file:File = new File(...);

ut_readFile(file,(el)=>{
  console.log(...el);
});
```

<!-- 四舍五入-->

## `ut_round`

<!-- n:需要四舍五入的数字 -->
<!-- precision:四舍五入的精度 -->

| 参数      | 类型   | 描述               | default |
| --------- | ------ | ------------------ | ------- |
| n         | number | 需要四舍五入的数字 | -       |
| precision | number | 四舍五入的精度     | 0       |

> 四舍五入
>
> 传入数字和精度，返回四舍五入后的数字,若没有设置precision则默认为0；

### 返回 number 四舍五入后的数字；

```ts
(n: number, precision: number = 0): void
```

```ts
const num = ut_round(3.14, 1); // 3.1
```

<!-- 向 localStorage 储存数据 -->

## `ut_setLS`

<!-- key:储存的键名 -->
<!-- value:对应的键值 -->

| 参数  | 类型   | 描述         |
| ----- | ------ | ------------ |
| key   | string | 要储存的键名 |
| value | string | 对应的键值   |

> 向 localStorage 储存数据；

###### 返回 void;

```ts
(key: string, value: string):void
```

```ts
ut_setLS("uid", "123456");
```

<!-- 数字转千分位 -->

## `ut_thousands`

<!-- value:传入的数字(可为字符串) -->

| 参数  | 类型    | 描述    |
| ----- | ------- | ------- | ---------------------- |
| value | `string | number` | 传入的数字(可为字符串) |

> 数字千分化
>
> 将数字千分化，如19999=>"19,999","3245269"=>"3,245,269"；

###### 返回string千分制字符串;

```ts
(value: string | number):string
```

```ts
const thousands1 = ut_thousands(19999); // "19,999"
const thousands2 = ut_thousands("3245269"); // "3,245,269"
```

<!-- 节流函数 -->

## `ut_throttle`

<!-- func:要添加节流的函数 -->
<!-- wait:间隔时间（与上一次目标函数的执行间隔），单位 ms -->
<!-- options?.leading:是否在超时前调用 -->
<!-- options?.trailing:是否在超时后调用 -->

| 参数     | 类型           | 描述     |
| -------- | -------------- | -------- |
| func     | (...arg)=>void | 回调函数 |
| wait     | number         | 节流时间 |
| options? | object         | 函数配置 |

| options?.key | 类型    | 描述             | default |
| ------------ | ------- | ---------------- | ------- |
| leading？    | boolean | 是否在超时前调用 | true    |
| trailing？   | boolean | 是否在超时后调用 | true    |

> 节流函数
>
> 注意，如果options.leading和options.trailing都为true，则只有在等待超时期间多次调用已解封的函数时，才会在超时的后边缘调用func；

###### 返回function节流函数

```ts
const throttle = ut_throttle(
  (...arg): void => {
    console.log(...arg);
  },
  250,
  {
    leading: true,
    trailing: false,
  }
);
```

<!-- 反转 html 字符串 -->

## `ut_unescape`

<!-- string:待转义的字符串 -->

| 参数  | 类型   | 描述           |
| ----- | ------ | -------------- |
| value | string | 待转义的字符串 |

> html 反转义
>
> 与 `ut_escape` 相反，转换string字符串中的 HTML 实体` &amp;`, `&lt;`, `&gt;`, `&quot;`,`&39;`, 和 `&96;` 为对应的字符

###### 返回 string 转义后的字符;

```ts
(value: string): string
```

```ts
const unescape = ut_unescape("&lt;body&gt;"); // "<body>"
```

<!-- 浅拷贝 -->

## `ut_clone`

| 参数  | 类型 | 描述             |
| ----- | ---- | ---------------- |
| value | \*   | 待拷贝的数据类型 |

```ts
var objects = [{ a: 1 }, { b: 2 }];
var shallow = ut_clone(objects);
console.log(shallow[0] === objects[0]);
// true
```

<!-- 深拷贝 -->

## `ut_cloneDeep`

| 参数  | 类型 | 描述             |
| ----- | ---- | ---------------- |
| value | \*   | 待拷贝的数据类型 |

```ts
var objects = [{ a: 1 }, { b: 2 }];
var shallow = ut_cloneDeep(objects);
console.log(shallow[0] === objects[0]);
// false
```

<!-- 正则工具 -->

## `ut_reg`

| 方法              | 参数  | 类型   | 描述                         |
| ----------------- | ----- | ------ | ---------------------------- |
| isValidPhone      | value | string | 验证手机号                   |
| isValidEmail      | value | string | 验证电子邮件                 |
| isValidBankCard   | value | string | 验证是否为银行卡号           |
| isValidDate       | value | string | 验证日期（格式：YYYY-MM-DD） |
| isValidTime       | value | string | 验证时间（格式：HH:MM:SS）   |
| isValidIDCard     | value | string | 验证身份证号                 |
| isValidPostalCode | value | string | 验证邮政编码                 |
| isAlpha           | value | string | 验证仅包含字母               |
| isValidPhone      | value | string | 验证仅包含数字               |
| isNumeric         | value | string | 验证手机号                   |
| isAlphanumeric    | value | string | 验证仅包含字母和数字         |
| isLowercase       | value | string | 验证仅包含小写字母           |
| isUppercase       | value | string | 验证仅包含大写字母           |
| isPositiveInteger | value | string | 验证是否为正整数             |
| isNegativeInteger | value | string | 验证是否为负整数             |
| isInteger         | value | string | 验证是否为整数               |
| isFloat           | value | string | 验证是否为浮点数             |
| isPositiveFloat   | value | string | 验证是否为正浮点数           |
| isNegativeFloat   | value | string | 验证是否为负浮点数           |
| isHexColor        | value | string | 验证是否为浮点数             |

```ts
 ut_reg().isValidPhone(13478789898)
 // true
 ut_reg().isValidPhone('test')
 // false
 ...
```

<!-- 正则 -->

## `ut_reg_patterns`

| 属性                | 描述                         |
| ------------------- | ---------------------------- |
| phone               | 验证手机号                   |
| email               | 验证电子邮件                 |
| bankCard            | 验证是否为银行卡号           |
| date                | 验证日期（格式：YYYY-MM-DD） |
| time                | 验证时间（格式：HH:MM:SS）   |
| idCard              | 验证身份证号                 |
| postalCode          | 验证邮政编码                 |
| alpha               | 验证仅包含字母               |
| numeric             | 验证仅包含数字               |
| alphanumeric        | 验证仅包含字母和数字         |
| lowercase           | 验证仅包含小写字母           |
| uppercase           | 验证仅包含大写字母           |
| positiveInteger     | 验证是否为正整数             |
| negativeInteger     | 验证是否为负整数             |
| integer             | 验证是否为整数               |
| float               | 验证是否为浮点数             |
| positiveFloat       | 验证是否为正浮点数           |
| negativeFloat       | 验证是否为负浮点数           |
| hexColor            | 验证是否为颜色十六进制代码   |


```ts
 ut_reg_patterns.phone
 //  /^1[3-9]\d{9}$/
 ut_reg_patterns.email
 // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 ...
```
