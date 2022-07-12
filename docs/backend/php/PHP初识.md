---
title: PHP初识
---

# PHP 初识

## 一、PHP 简介

### 1. PHP 是什么

Personal Home Page Hypertext Preprocessor（PHP 超文本预处理器）

PHP 是一种流行的服务器端脚本语言，适用于 Web 开发，快速建站

特点：开源免费、简单易学

版本：5.x、6.x、7.x

PHP 文件的扩展名是 `.php`

参考学习：https://www.runoob.com/php/php-tutorial.html

### 2. 安装 PHP 环境

#### 2.1 Windows

这里使用 php5.6，目前企业中使用较多

步骤：

1. 安装 vc11 运行时库

    vc_redist11_x64.exe

    php 依赖于微软的 Visual C++运行时库

2. 安装 php 语言包

    解压 php-5.6.30-Win32-VC11-x64.zip，如 D:\software\php5.6.30

    将解压后的目录添加到环境变量 PATH 中

    在 DOS 窗口中执行：`php -v`

3. 安装**Apache**服务器程序

    解压 httpd-2.4.26-x64-vc11.zip，如 D:\software\Apache2.4.26
    将解压后的 bin 目录添加到环境变量 PATH 中

    在 DOS 窗口中执行：`httpd -v`

4. 配置 Apache

    编辑 Apache 目录下的 conf\httpd.conf 文件

    ```bash
    Define SRVROOT "D:/software/Apache2.4.26"  #  第38行：指定Apache服务器所在位置，使用正斜杠
    DocumentRoot "D:/phpwork"  # 第248和249行：指定php项目所在位置
    <Directory "D:/phpwork">

    # 在文件末尾添加php的相关设置

    # 加载php5模块
    LoadModule php5_module "D:/software/php5.6.30/php5apache2_4.dll"
    # 添加对php文件的解析
    AddType application/x-httpd-php .php
    # 指定php语言包所在位置
    PHPIniDir "D:/software/php5.6.30"
    ```

5. 将 Apache 安装为系统服务

    在 DOS 窗口中执行：`httpd -k install -n Apache` 安装 Apache 服务并启动

    注：如果提示有错误，则根据错误信息修改 httpd.conf 文件，然后执行`httpd -k start -n Apache`测试

6. 访问页面

    打开浏览器输入`http://localhost`访问（**默认使用 80 端口**）

    注：每次修改 Apache 的 httpd.conf 文件后都需要重启服务，可以使用`services.msc`操作系统的服务管理器

#### 2.2 Mac OS

步骤：

1. Mac OS 自带 Apache，只需要启动 Apache，打开终端输入：

    ```bash
    sudo apachectl start
    ```

    启动 Apache 后，打开浏览器输入`http://localhost`访问（默认使用 80 端口）

2. 创建 php 项目目录

    比如在用户主目录下创建 phpwork 目录，作为 php 项目目录

    创建一个 php 文件，如 hello.php，内容如下

    ```php
    <?php
        echo "Hello World";
    ?>
    ```

3. 修改 apache 配置文件

    ```bash
    sudo vi /etc/apache2/httpd.conf
    	LoadModule php5_module libexec/apache2/libphp5.so  # 取消这一行的注释，加载php模块
    	DocumentRoot "/Users/wangbo/phpwork"  # 指定php项目所在目录
    	<Directory "/Users/wangbo/phpwork">
    ```

4. 重启 Apache 服务

    ```bash
    sudo apachectl restart
    ```

    注：Mac OS 中 PHP 配置文件可参考/private/etc/php.ini.default

## 二、第一个 PHP 程序

### 1. php 文件

php 文件以 `.php`为后缀名

-   不能通过本地方式访问，要通过 HTTP 方式访问 `http://127.0.0.1/test01.php`
-   php 代码会由服务器进行解释执行，浏览器中看不到 php 代码
-   php 文件中可以包含 html 代码

```php
<?php
    echo "Hello World";
  	$name="tom";
    echo $name;
?>
```

### 2. 输出

使用`echo`输出信息，将结果响应给客户端

### 3. 注释

单行注释：以`//` 或 `#`开头

多行注释：包围在`/* */`

### 4. 编码规范

代码区分大小写

每条语句以分号结尾

代码缩进

## 三、核心语法

### 1. 变量

php 是一门弱类型的语言，声明变量时不需要指定变量的类型，但**变量名必须以\$开头**

语法：`$变量名=变量值;`

变量命名规范：

-   变量名以\$开头
-   只能由数字、字母、下划线组成，但不能以数字开头
-   建议使用英文单词

### 2. 数据类型

常用数据类型：

-   string 字符串
-   int 整型
-   float 浮点型
-   bool 布尔
-   NULL 空类型
-   array 数组
-   object 对象

数据类型转换：

-   语法：`(数据类型)变量` 将变量转换为指定的数据类型
-   0、空字符串、null 会被转换成 false，其他值都会被转换为 true

### 2. 运算符

算术运算符：+、-、\*、/、%、++、--

比较运算符：<、>、>=、<=、==、===、!=

赋值运算符：=、+=、-=、\*=、/=、%=

逻辑运算符：&&、||、!

条件运算符：条件 ? 表达式 1 : 表达式 2

### 3. 选择结构

if…else、switch

```php
<?php
    $age = 25;
    if($age >= 60){
        echo "老年";
    }else if($age >= 40){
        echo "中年";
    }else if($age >= 20){
        echo "少年";
    }else{
        echo "童年";
    }
    echo "<hr>";

    $day = "星期四";
    switch($day){
        case "星期一":
            echo "吃包子";
            break;
        case "星期二":
            echo "吃油条";
            break;
        case "星期三":
        case "星期四":
        case "星期五":
            echo "吃煎饼果子";
            break;
        default:
            echo "不吃了";
            break;
    }
?>
```

### 4. 循环结构

while、do…while、for、foreach

break、continue

```php
/**
 * while 计算1到100之间不能被7整除的所有数字之和
 */
$i = 1;
$sum = 0;
while ($i <= 100) {
    if ($i % 7 != 0) {
        $sum += $i;
    }
    $i++;
}
echo $sum;

/**
 * do...while
 */
$i = 1;
$sum = 0;
do{
    if($i%7 != 0){
        $sum += $i;
    }
    $i++;
}while($i <= 100);
echo $sum;

/**
 * for
 */
$sum = 0;
for($i = 1; $i <= 100; $i++){
    if($i%7 != 0){
        $sum += $i;
    }
}
echo $sum;

/**
 * foreach  用于遍历数组
 */
$names = ["tom","jack","alice"];
foreach($names as $name){
    echo $name . "<br>";
}
```

php 和 html 的嵌套：

-   使用**php 脚本**`<?php ?>` 用于执行 php 代码
-   使用**php 表达式**`<?=表达式 ?>` 用于输出表达式的值

```php
<?php
$name = "tom";
echo "<h2 style='color:red;'>姓名：$name</h2>";
?>
<h2 style="color:red;">姓名：<?php echo $name; ?></h2>
<h2 style="color:red;">姓名：<?= $name ?></h2>

<!--
    if中嵌套html代码
 -->
<?php
$age = 15;
if ($age >= 18) {
?>
    <h3 style="color:green;">您今年<?= $age ?>岁</h3>
    <h3 style="color:green;">您已成年</h3>
<?php
} else {
?>
    <h3 style="color:blue;">您今年<?= $age ?>岁</h3>
    <h3 style="color:blue;">您尚未成年</h3>
<?php
}
?>

<!--
    循环中嵌套html代码
 -->
<?php
for ($i = 10; $i <= 100; $i += 10) {
?>
    <hr color="red" size="1px" width="<?= $i ?>%">
    <h5 style="text-align:center;">水平线的宽度为：<?= $i ?>%</h5>
<?php
}
?>
```

### 5. 数组

#### 5.1 基本用法

语法：

```php
$arr = array(值1,值2...);
$arr = [值1,值2...];
$arr = [
  键1 => 值1,
  键2 => 值2,
  ...
];
```

注意：

-   数组长度会自动扩展
-   使用 count()函数来获取数组的长度
-   可以定义键值数组，即键值对的形式

```php
/**
 *  数组的基本用法
 */
$names = array("tom","jack","alice");
$names = ["tom", "jack", "alice", "mike"];

echo $names[1]; // 索引从0开始

echo "数组的长度：" . count($names);

$names[0] = "汤姆";
$names[count($names)] = "alex";
$names[] = "alex"; // 省略索引时默认就是添加到数组的末尾

/**
 * 循环输出
 */
// 方式1：使用for
for($i = 0; $i < count($names); $i++){
    print_r("$i = $names[$i] <br>");
}

// 方式2：foreach
foreach($names as $name){
    print_r($name . "<br>");
}

foreach ($names as $i => $name) {
    print_r("$i = $name <br>");
}
```

#### 5.2 二维数组

二维数组可以认为是特殊的一维数组，即一维数组中的每个元素又是一个一维数组

语法：

```php
$arr = [
  [值1,值2...],
  [值1,值2...],
  [值1,值2...]
];
```

#### 5.3 数组函数

| 函数           | 描述                                                                       |
| -------------- | -------------------------------------------------------------------------- |
| count()        | 返回数组元素的个数                                                         |
| list()         | 解构赋值                                                                   |
| in_array()     | 判断数组中是否包含指定元素，返回布尔值                                     |
| array_search() | 查找指定元素在数组中第一次出现的位置（找到返回索引位置，找不到返回 false） |
| implode()      | 将数组中元素按照指定标识组合为字符串                                       |
| explode()      | 将字符串按照指定标识分隔为数组                                             |
| unset()        | 销毁给定的变量                                                             |
| array_values() | 对数组索引进行重新排序，返回重新排序后的新数组                             |

> 注意：数组元素删除后，数组中元素的索引是不连续的，无法使用 for 进行索引循环

#### 5.4 函数用法

```php
// 1.count()
$names = ["tom", "jack", "alice", "camilla"];
echo count($names);

// 2.list()
$a = $names[0];
$b = $names[1];
$c = $names[2];
list($a,$b) = $names;
echo $a,$b;

// 3.in_array()
in_array("mike",$names);

// 4.array_search()
array_search("jack",$names);

// 5.implode()
echo implode("-",$names);

// 6.explode()
explode(" ","hello world welcome to tiger");

// 7.unset()
unset($names[1]); // 删除$names数组中索引为1的元素
unset($names[array_search("alice", $names)]); // 删除数组中名为alice的元素
// 注意：删除后，数组中元素的索引是不连续的，无法使用for进行索引循环

// 8.array_values()
$names = array_values($names); //可以重置数组索引，将不连续的索引再重新排序，使其连续
```

### 6. 函数

#### 6.1 内置函数

PHP 内置了很多有用的函数，可以直接调用

-   字符串函数
-   日期函数
-   正则表达式函数

```php
1.phpinfo() //返回并输出php的所有环境和配置信息

2.header() 设置响应头
header("content-type:text/plain;charset=utf-8"); // 设置响应类型和字符集
header("content-type:json;charset=utf-8");
header("location:http://www.qq.com"); // 设置地址，实现页面跳转

3.输出 echo()、print_r()、var_dump()
echo "hello","world";
echo("hello"); // 只能输出单个值
print_r("hello"); // 可以输出复杂类型
var_dump("hello"); // 输出变量的类型和值

4.数学：rand()、round()、ceil()、floor()
echo rand(); // 生成随机数
echo rand(1,100);
echo round(3.1415926); // 四舍五入
echo round(3.1415926,3);
echo ceil(2.3); // 向上取整
echo floor(2.3); // 向下取整

5.字符串：strlen()、str_replace()、stripos()、strripos()、trim()
echo strlen("hello"); // 字符串长度
echo str_replace("o","x","hello world"); // 替换
echo stripos("hello world","o"); // 第一次出现的位置
echo strripos("hello world","o"); // 最后一次出现的位置
echo trim("   hello world    ");

6.日期：time()、date()
echo time(); // 返回1970.1.1至今的秒数
date_default_timezone_set("Asia/Shanghai");
echo date("Y-m-d H:i:s");

7.正则表达式 preg_match()
var_dump(preg_match("/^\d+$/","1234")); // 匹配返回1，不匹配返回0
```

#### 6.1 自定义函数

```php
/**
 * 正常自定义函数
 */
function 函数名(参数1,参数2...){
  // 函数体
}


/**
 * 参数的默认值
 */
function f2($id, $name = "tom")
{
    echo "$id,$name";
}
f2(9527,"唐伯虎");  //不会报错
f2(9527);


/**
 * 不定长参数，使用...
 */
function f3($a, $b, ...$c)
{
    echo "$a <br>";
    echo "$b <br>";
    print_r($c); // 数组
}

f3(1, 2, 3, 4, 5, 6, 7, 8);
```

## 四、访问 MySQL

### 1. 简介

使用 MySQLi 连接数据库，需要启用 mysqli 模块

启动 mysqli 模块的步骤：

1. 创建 php.ini 文件

    复制 php 根目录下的 php.ini-development，重命名为 php.ini

2. 编辑 php.ini 文件

    `extension_dir = "ext"` 第 734 行：取消这一行的注释，指定模块所在文件夹

    `extension=php_mysqli.dll` 第 901 行：取消这一行的注释，加载 mysqli 模块

3. 重启 Apache 服务

4. 验证

    phpinfo()

    php -m

### 2. 用法

| 函数名                 | 描述                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| mysqli_connect()       | 获取连接，如果连接成功返回 mysqli Object 对象，如果失败返回布尔值 false |
| mysqli_connect_error() | 获取连接时的错误信息                                                    |
| mysqli_connect_errno() | 获取连接时的错误码，如果连接成功返回 0，如果失败返回非 0 的数字         |
| mysqli_query()         | 执行数据库操作，如 CRUD 操作、事务操作等                                |
| mysqli_error()         | 获取执行时的错误信息                                                    |
| mysqli_errno()         | 获取执行时的错误码                                                      |
| mysqli_close()         | 关闭连接                                                                |
| mysqli_fetch_assoc()   | 从结果集中读取一行数据                                                  |
| mysqli_num_rows()      | 获取结果集中行的数量                                                    |

### 3.总结

#### 3.1 访问数据库步骤

```php
// 1.获取连接
$conn = mysqli_connect("localhost:3306", "root", "root", "test");

// 2.执行sql语句（增、删、改）
$sql = "delete from dpt where dname='运营部'";
$result = mysqli_query($conn, $sql); // 需要传入连接对象和sql语句

// 3.关闭连接
mysqli_close($conn);
```

#### 3.2 导入其他 PHP 文件代码

```php
<?php
    /**
     *  数据库工具 dbutil.php
     */
    function getConn(){
        $conn = mysqli_connect("localhost:3306","root","root","tiger");
        if(!$conn){
            die("数据库连接失败：" . mysqli_connect_error());
        }
        return $conn;
    }
?>
```

```php
// 导入dbutil.php文件
require_once "dbutil.php";

// 1.获取连接
$conn = getConn();

// 2.执行sql语句（查询）
$sql = "select deptno,dname,loc from dept";
$result = mysqli_query($conn, $sql);

// 每次读取一行，返回一个字符串索引数组，列名作为key，列值作为value
// 3.循环获取数据
while ($row = mysqli_fetch_assoc($result)) {
    foreach ($row as $key => $value) {
        echo "$key = $value , ";
    }
        echo "<br>";
}

/**
  * 获取总数量
  */
echo mysqli_num_rows($result);

// 4.关闭连接
mysqli_close($conn);
```

## 五、表单处理

### 1. 简介

通过表单发送请求，要求：

-   表单元素必须具有 name 属性
-   复选框的 name 属性值要加`[]`，表示提交值有多个

### 2. 用法

php 中提供了用来获取表单数据的变量

| 变量        | 含义                         |
| ----------- | ---------------------------- |
| \$\_GET     | 获得 GET 请求方式的数据      |
| \$\_POST    | 获得 POST 请求方式的数据     |
| \$\_REQUEST | 获得 GET/POST 请求方式的数据 |

```php
<?php
require_once "dbutil.php";

/**
 *  处理用户注册的请求
 */

// 1.获取提交的参数信息
print_r($_REQUEST);
$uname = $_REQUEST["uname"];
echo $uname;

// 2.将数据插入到数据库中
$conn = getConn();
$sql = "insert into t_user (uname,upass,sex,degree)
        values
            ('{$_REQUEST["uname"]}',
             '{$_REQUEST["upass"]}',
             '{$_REQUEST["sex"]}',
              {$_REQUEST["degree"]}
             )";

$result = mysqli_query($conn, $sql);

if ($result) {
?>
    <script>
        alert("注册成功，请登陆。。。。");
        location.href = "login.php";
    </script>
<?php
} else {
    echo "error:" . mysqli_error($conn);
}

mysqli_close($conn);
?>
```

### 3. 引用文件

在一个 php 文件中可以引用另一个 php 文件

-   require 引入的文件有错误时，停止执行，并返回一个致命错误 E_COMPILE_ERROR
-   include 引入的文件有错误时，继续执行，并返回一个警告 E_WARNING
-   require_once/include_once 只引入一次，如果引入文件中的代码已经被包括了，则不会再引入

用法：`require "文件名";` and `include "文件名"`

`require_once "文件名"` or `include_once "文件名"`

```php
<?php
    /**
     *  数据库工具 dbutil.php
     */
    function getConn(){
        $conn = mysqli_connect("localhost:3306","root","root","tiger");
        if(!$conn){
            die("数据库连接失败：" . mysqli_connect_error());
        }
        return $conn;
    }
?>
```

```php
// 导入dbutil.php文件
require_once "dbutil.php";
```
