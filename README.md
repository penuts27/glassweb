# 8-) 超清晰眼鏡行 | Glasses store
> 超清晰眼鏡行一是個電商網網站，裡面什麼都有賣

## 成品與資源連結
- Pages
  - [首頁index](https://penuts27.github.io/glassweb/)
  - [產品頁products](https://penuts27.github.io/glassweb/product.html)
  
- 設計稿
  - [首頁index](2224af-8682/screen/9030f53b-bb49-44c3-8d71-9901ad0d5206/specs/)
  - [產品頁products](https://xd.adobe.com/view/d3d1119a-affd-4f48-8188-f070932224af-8682/screen/d1c41c34-bb77-47f2-94c4-2ebb63bb20e3/specs/)

## 使用前端工具
`node npm - gulp`  
`ejs`  
`scss`  
`css-bem命名`

## RWD斷點
#### mobole device: (sm)
螢幕解析度寬度 768px 以下支援
#### medium device: (md)
螢幕解析度寬度 992px 以下支援


## 指令列表

- `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
  - 若沒有自動開啟瀏覽器則可手動在瀏覽器上輸入 `http://localhost:8080/` 即可。
  - 假使監聽功能無效的話，可以檢查一下是否修改到資料夾的名稱等。
- `gulp build` - 執行編譯模式(不會開啟瀏覽器)
- `gulp clean` - 清除 dist 資料夾
- `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages
  - 若無法部署到 GitHub Pages 的話，可以確定一下是否已經初始化專案等。

> 請務必確保已經在本機上輸入過 `npm install -g gulp`，否則電腦會不認識 `gulp` 指令哦。

## 資料夾結構

- App # 原始碼
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - js # JavaScript 放置處
    - style # 樣式放置處
      - _variable.scss
      - _reset.scss
      - _mixin.sass
      - _base.sass
      - _layout.scss
      - _index.scss
      - _layout.scss  
      - _product.scss  
  - index.html # 首頁 HTML
  - layout.ejs # Layout ejs
- gulpfile.js # Gulp 原始碼
  - envOptions.js # Gulp 路徑變數
  - index.js # Gulp 核心原始碼
