---
title: Selenium WebDriver 实战
icon: globe
order: 1
---

# Selenium WebDriver 实战指南 🚀

Selenium是Web自动化测试的基石，经过的实战，我总结了一套高效的Selenium使用方法和最佳实践。

## 🎯 为什么选择Selenium？

### Selenium的优势
✅ **跨浏览器支持** - Chrome、Firefox、Edge、Safari等  
✅ **多语言支持** - Python、Java、C#、JavaScript、Ruby  
✅ **社区活跃** - 丰富的资源和解决方案  
✅ **成熟稳定** - 经过多年企业级验证  
✅ **免费开源** - 无商业授权费用

### Selenium的局限性
❌ **执行速度较慢** - 相比Playwright、Cypress等新框架  
❌ **需要浏览器驱动** - 环境配置相对复杂  
❌ **异步处理麻烦** - 需要显式等待  
❌ **移动端支持有限** - 主要针对Web

## 🛠️ 环境搭建

### Python环境配置
```bash
# 1. 安装Python（推荐3.8+）
python --version

# 2. 安装Selenium
pip install selenium

# 3. 安装浏览器驱动
# Chrome: https://chromedriver.chromium.org/
# Firefox: https://github.com/mozilla/geckodriver/releases
# Edge: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/

# 4. 将驱动添加到PATH或项目目录
```

### Java环境配置
```xml
<!-- Maven依赖 -->
<dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.15.0</version>
</dependency>
```

## 📝 基础用法

### 1. 启动浏览器
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Chrome浏览器
driver = webdriver.Chrome()
# Firefox浏览器
# driver = webdriver.Firefox()
# Edge浏览器  
# driver = webdriver.Edge()

# 最大化窗口
driver.maximize_window()

# 访问网页
driver.get("https://www.example.com")
```

### 2. 元素定位方法
```python
# 8种定位方式
driver.find_element(By.ID, "username")
driver.find_element(By.NAME, "password")
driver.find_element(By.CLASS_NAME, "login-btn")
driver.find_element(By.TAG_NAME, "input")
driver.find_element(By.LINK_TEXT, "忘记密码")
driver.find_element(By.PARTIAL_LINK_TEXT, "忘记")
driver.find_element(By.CSS_SELECTOR, "#loginForm .btn-primary")
driver.find_element(By.XPATH, "//input[@id='username']")

# 查找多个元素
elements = driver.find_elements(By.CLASS_NAME, "menu-item")
```

### 3. 常用操作
```python
# 输入文本
element.send_keys("边界测试官")

# 点击元素
element.click()

# 清空输入框
element.clear()

# 获取文本
text = element.text

# 获取属性
value = element.get_attribute("value")

# 判断元素是否可见
is_displayed = element.is_displayed()

# 判断元素是否可用
is_enabled = element.is_enabled()

# 判断元素是否选中（复选框/单选框）
is_selected = element.is_selected()
```

## ⏳ 等待机制

### 1. 强制等待（不推荐）
```python
import time
time.sleep(5)  # 固定等待5秒
```

### 2. 隐式等待
```python
# 全局等待，对所有find_element操作生效
driver.implicitly_wait(10)  # 最多等待10秒
```

### 3. 显式等待（推荐）
```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 等待元素可见
element = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, "username"))
)

# 等待元素可点击
element = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "loginBtn"))
)

# 等待元素存在（不一定可见）
element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "username"))
)

# 等待元素消失
WebDriverWait(driver, 10).until(
    EC.invisibility_of_element_located((By.ID, "loading"))
)

# 等待页面标题包含特定文本
WebDriverWait(driver, 10).until(
    EC.title_contains("首页")
)

# 自定义等待条件
def element_has_text(locator, text):
    def predicate(driver):
        element = driver.find_element(*locator)
        return text in element.text
    return predicate

# 使用自定义条件
WebDriverWait(driver, 10).until(
    element_has_text((By.ID, "status"), "成功")
)
```

## 🎨 高级操作

### 1. 执行JavaScript
```python
# 滚动到元素
element = driver.find_element(By.ID, "footer")
driver.execute_script("arguments[0].scrollIntoView();", element)

# 修改元素属性
driver.execute_script("document.getElementById('username').value = 'testuser';")

# 获取页面标题
title = driver.execute_script("return document.title;")

# 异步操作
driver.execute_async_script("""
    var callback = arguments[arguments.length - 1];
    setTimeout(function() {
        callback('操作完成');
    }, 3000);
""")
```

### 2. 处理弹窗
```python
# 警告框
alert = driver.switch_to.alert
print(alert.text)  # 获取文本
alert.accept()     # 点击确定
# alert.dismiss()  # 点击取消

# 确认框
confirm = driver.switch_to.alert
confirm.accept()   # 点击确定
# confirm.dismiss() # 点击取消

# 提示框
prompt = driver.switch_to.alert
prompt.send_keys("输入内容")
prompt.accept()
```

### 3. 处理iframe
```python
# 切换到iframe
driver.switch_to.frame("frameName")  # 通过name
driver.switch_to.frame(0)            # 通过索引
driver.switch_to.frame(frame_element) # 通过元素

# 切换回主文档
driver.switch_to.default_content()

# 切换到父级iframe
driver.switch_to.parent_frame()
```

### 4. 窗口和标签页
```python
# 获取当前窗口句柄
current_window = driver.current_window_handle

# 获取所有窗口句柄
all_windows = driver.window_handles

# 切换到新窗口
for window in all_windows:
    if window != current_window:
        driver.switch_to.window(window)
        break

# 打开新标签页
driver.execute_script("window.open('');")
driver.switch_to.window(driver.window_handles[-1])

# 关闭当前窗口
driver.close()

# 切换回原窗口
driver.switch_to.window(current_window)
```

### 5. Cookie操作
```python
# 获取所有cookie
cookies = driver.get_cookies()

# 获取指定cookie
cookie = driver.get_cookie("session_id")

# 添加cookie
driver.add_cookie({
    'name': 'test_cookie',
    'value': '123456',
    'domain': 'example.com'
})

# 删除cookie
driver.delete_cookie("session_id")

# 删除所有cookie
driver.delete_all_cookies()
```

## 🏗️ Page Object模式

### 基础Page Object
```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    """登录页面"""
    
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)
        
        # 元素定位器
        self.username_input = (By.ID, "username")
        self.password_input = (By.ID, "password")
        self.login_button = (By.ID, "loginBtn")
        self.error_message = (By.CLASS_NAME, "error-msg")
    
    def open(self):
        """打开登录页面"""
        self.driver.get("https://example.com/login")
        return self
    
    def enter_username(self, username):
        """输入用户名"""
        element = self.wait.until(
            EC.visibility_of_element_located(self.username_input)
        )
        element.clear()
        element.send_keys(username)
        return self
    
    def enter_password(self, password):
        """输入密码"""
        element = self.wait.until(
            EC.visibility_of_element_located(self.password_input)
        )
        element.clear()
        element.send_keys(password)
        return self
    
    def click_login(self):
        """点击登录按钮"""
        element = self.wait.until(
            EC.element_to_be_clickable(self.login_button)
        )
        element.click()
        return self
    
    def login(self, username, password):
        """完整登录流程"""
        self.enter_username(username)
        self.enter_password(password)
        self.click_login()
        return self
    
    def get_error_message(self):
        """获取错误信息"""
        try:
            element = self.wait.until(
                EC.visibility_of_element_located(self.error_message)
            )
            return element.text
        except:
            return None
    
    def is_login_successful(self):
        """判断是否登录成功"""
        return "dashboard" in self.driver.current_url
```

### 使用示例
```python
# 测试用例
def test_valid_login():
    driver = webdriver.Chrome()
    try:
        login_page = LoginPage(driver)
        login_page.open()
        login_page.login("testuser", "password123")
        
        assert login_page.is_login_successful() is True
        print("登录测试通过")
    finally:
        driver.quit()
```

## 🧪 测试框架集成

### 使用pytest
```python
# conftest.py - 配置文件和fixture
import pytest
from selenium import webdriver

@pytest.fixture(scope="function")
def driver():
    """创建浏览器驱动"""
    driver = webdriver.Chrome()
    driver.maximize_window()
    yield driver
    driver.quit()

@pytest.fixture
def login_page(driver):
    """创建登录页面对象"""
    from pages.login_page import LoginPage
    return LoginPage(driver)

# test_login.py - 测试用例
class TestLogin:
    
    def test_valid_login(self, login_page):
        """测试有效登录"""
        login_page.open()
        login_page.login("testuser", "password123")
        assert login_page.is_login_successful() is True
    
    def test_invalid_password(self, login_page):
        """测试无效密码"""
        login_page.open()
        login_page.login("testuser", "wrongpassword")
        error_msg = login_page.get_error_message()
        assert error_msg == "密码错误"
    
    @pytest.mark.parametrize("username,password", [
        ("", "password123"),
        ("testuser", ""),
        ("", "")
    ])
    def test_empty_credentials(self, login_page, username, password):
        """测试空用户名或密码"""
        login_page.open()
        login_page.login(username, password)
        error_msg = login_page.get_error_message()
        assert "不能为空" in error_msg
```

### 使用unittest
```python
import unittest
from selenium import webdriver
from pages.login_page import LoginPage

class TestLogin(unittest.TestCase):
    
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        self.login_page = LoginPage(self.driver)
    
    def tearDown(self):
        self.driver.quit()
    
    def test_valid_login(self):
        self.login_page.open()
        self.login_page.login("testuser", "password123")
        self.assertTrue(self.login_page.is_login_successful())
    
    def test_invalid_password(self):
        self.login_page.open()
        self.login_page.login("testuser", "wrongpassword")
        error_msg = self.login_page.get_error_message()
        self.assertEqual(error_msg, "密码错误")

if __name__ == "__main__":
    unittest.main()
```

## 🚀 最佳实践

### 1. 元素定位策略
```python
# 推荐：使用相对稳定的定位方式
# Good
driver.find_element(By.CSS_SELECTOR, "[data-testid='login-btn']")
driver.find_element(By.XPATH, "//button[contains(@class, 'primary')]")

# Bad（容易变化）
driver.find_element(By.XPATH, "/html/body/div[3]/div[2]/button")
driver.find_element(By.CLASS_NAME, "btn-123456")  # 动态生成的类名
```

### 2. 等待策略优化
```python
# 设置合理的超时时间
SHORT_TIMEOUT = 5   # 快速操作
NORMAL_TIMEOUT = 10 # 一般操作
LONG_TIMEOUT = 30   # 慢速操作

# 组合等待
def wait_for_element(driver, locator, timeout=10):
    """等待元素出现并可见"""
    try:
        element = WebDriverWait(driver, timeout).until(
            EC.presence_of_element_located(locator)
        )
        return WebDriverWait(driver, timeout).until(
            EC.visibility_of(element)
        )
    except:
        return None
```

### 3. 异常处理
```python
from selenium.common.exceptions import (
    TimeoutException,
    NoSuchElementException,
    ElementNotInteractableException,
    StaleElementReferenceException
)

def safe_click(element, retries=3):
    """安全的点击操作，处理StaleElement异常"""
    for i in range(retries):
        try:
            element.click()
            return True
        except StaleElementReferenceException:
            if i == retries - 1:
                raise
            # 重新查找元素
            element = find_element_again()
    return False
```

### 4. 日志和截图
```python
import logging
from datetime import datetime

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def take_screenshot(driver, name):
    """截图并保存"""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"screenshots/{name}_{timestamp}.png"
    driver.save_screenshot(filename)
    logger.info(f"截图已保存: {filename}")
    return filename

# 在测试中使用
try:
    element.click()
except Exception as e:
    take_screenshot(driver, "click_error")
    logger.error(f"点击元素失败: {e}")
    raise
```

## 📊 测试报告

### 使用Allure生成报告
```python
# 安装
pip install allure-pytest

# 运行测试并生成报告
pytest --alluredir=./allure-results

# 查看报告
allure serve ./allure-results

# 在测试中添加步骤
import allure

@allure.step("登录操作")
def login(username, password):
    login_page.enter_username(username)
    login_page.enter_password(password)
    login_page.click_login()

@allure.feature("登录功能")
class TestLogin:
    
    @allure.story("有效登录")
    @allure.severity(allure.severity_level.CRITICAL)
    def test_valid_login(self):
        with allure.step("打开登录页面"):
            login_page.open()
        
        with allure.step("输入用户名和密码"):
            login("testuser", "password123")
        
        with allure.step("验证登录成功"):
            assert login_page.is_login_successful()
```

## 🔧 常见问题解决

### 问题1：元素找不到
**可能原因**：
1. 定位器写错了
2. 元素在iframe中
3. 元素还没加载出来
4. 元素被其他元素遮挡

**解决方案**：
```python
# 1. 检查定位器
print(driver.page_source)  # 查看页面源码

# 2. 检查是否在iframe中
iframes = driver.find_elements(By.TAG_NAME, "iframe")
print(f"找到 {len(iframes)} 个iframe")

# 3. 增加等待时间
element = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located(locator)
)

# 4. 使用JavaScript点击
driver.execute_script("arguments[0].click();", element)
```

### 问题2：测试不稳定
**解决方案**：
1. 使用显式等待代替隐式等待
2. 增加重试机制
3. 优化测试数据
4. 使用稳定的测试环境

### 问题3：执行速度慢
**优化建议**：
1. 使用headless模式
2. 禁用图片加载
3. 使用更快的定位方式
4. 并行执行测试

## 📚 学习资源

### 官方文档
- [Selenium官方文档](https://www.selenium.dev/documentation/)
- [Selenium Python API](https://selenium-python.readthedocs.io/)
- [WebDriver W3C标准](https://www.w3.org/TR/webdriver/)

### 推荐书籍
- 《Selenium自动化测试实战》- 虫师
- 《Selenium WebDriver 3实战宝典》- 吴晓华
- 《Python自动化测试实战》- 无涯

### 实战项目
- [Selenium测试框架模板](https://github.com/yourusername/selenium-framework)
- [Web自动化测试实战](https://github.com/yourusername/web-automation-demo)

---

> 💡 **边界测试官的