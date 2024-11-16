/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      // 底色
      body {
        background-color: #f5f5f5;
      }
      .dark body {
        background-color: black;
      }


      /* 设置了从上到下的渐变黑色 */
      #theme-matery .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      
      /* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}


/* 文章页隐藏发布时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > a {
  display: none;
}

/* 文章页隐藏更新时间 */
#article-wrapper > div.wow.fadeInUp.px-10 > section > div.flex.flex-wrap.gap-3.mt-5.text-sm > span.whitespace-nowrap {
  display: none;
}

/* 文章页隐藏阅读次数 */
#article-wrapper .busuanzi_container_page_pv {
  display: none ！important;
}

/* 文章页隐藏字数 */
#wordCountWrapper > span:nth-child(1){
 display: none !important;
}

/* 文章页隐藏阅读时长 */
#wordCountWrapper > span:nth-child(2){
 display: none;
}
    `}</style>
  )
}

export { Style }
