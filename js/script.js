$(document).ready(function () {
    let modal_close = $('.modal-close');
    let modal_close_2 = $('.modal-close-2');
    let modal = $('.modal');
    let modal_review = $('.modal-review');
    let modal_review_bt = $('.modal-review-bt');

    modal_close.click(function(){
        modal.hide();
    });
    modal_close_2.click(function(){
        modal.hide();
    });
    modal_review_bt.click(function(){
        modal_review.show();
    });
    // 전체 메뉴 관련
    let all_menu_wrap = $('.all-menu-wrap');
    all_menu_wrap.niceScroll({
        cursoropacitymax : 0.3,
        cursorwidth: "7px",
        cursorborderradius: "10px",
    });

    let all_menu = $('.all-menu');
    let all_list_cate_li = $('.all-list-cate > li');   
    let all_menu_detail_list = $('.all-menu-detail-list');

    // 상세 메뉴가 사라지는 타이머를 저장한다.
    // idntifier (식별자)
    let all_menu_timer;
    let all_menu_timer_delay = 100;

    $.each(all_list_cate_li, function(index, item){

        $(this).mouseenter(function(){            
            clearTimeout(all_menu_timer);
            all_menu.addClass('all-menu-active');
            all_menu_detail_list.hide();
            all_menu_detail_list.eq(index).show();
        });

        $(this).mouseleave(function(){
            clearTimeout(all_menu_timer);

            // 타이머 생성법 setTimeout(할일, 대기시간)
            all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
        });

    });

    // 상세 메뉴 영역을 감싸주는 div
    let all_menu_detail = $('.all-menu-detail');

    // 상세 메뉴 영역 div 에 롤오버를 하면 사라지려는 타이머를 지운다.
    all_menu_detail.mouseenter(function(){
        clearTimeout(all_menu_timer);
    });

    // 상세 메뉴 영역 div 에서 롤 아웃을 하면 조금 기다렸다가 사라지는 타이머 생성
    all_menu_detail.mouseleave(function(){
        clearTimeout(all_menu_timer);
        all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
    });

    // 상세 메뉴 사라지기
    function allMenuHide(){
        clearTimeout(all_menu_timer);
        all_menu.removeClass('all-menu-active');
    }

    // 전체 메뉴 보기 
    let all = $('#all');
    let all_timer;
    let all_timer_delay = 100;

    all.mouseenter(function(){
        clearTimeout(all_timer);
        all_menu.css('visibility', 'visible');
    });
    all.mouseleave(function(){
        clearTimeout(all_timer);
        all_timer = setTimeout(hideMenu, all_timer_delay);
    });
    all_menu.mouseenter(function(){
        clearTimeout(all_timer);
    });
    all_menu.mouseleave(function(){
        clearTimeout(all_timer);
        all_timer = setTimeout(hideMenu, all_timer_delay);
    });

    function hideMenu(){
        all_menu.css('visibility', 'hidden');
    }

    // 전체메뉴의 높이는 웹브라우저의 높이를 기준으로 지정
    all_menu.css('height', 'calc(100vh - 200px)');


    // 로그인 펼침목록
    let login_menu = $('#login-menu');
    let arrow_list_login = $('.arrow-list-login');
    login_menu.click(function(event){
        event.preventDefault();
        arrow_list_login.toggle();
        
        arrow_list_event.hide();
        arrow_list_more.hide();

        more.removeClass('arrow-list-more-active');
        more.html('더보기<i></i>');
        arrow.removeClass('arrow-list-event-active');
    });

    // 이벤트목록    
    let arrow = $('#arrow');
    let arrow_list_event = $('.arrow-list-event');
    arrow.click(function(event){
        event.preventDefault();
        arrow_list_event.toggle();

        arrow.toggleClass('arrow-list-event-active');
        more.removeClass('arrow-list-more-active');
        more.html('더보기<i></i>');

        arrow_list_more.hide();
        arrow_list_login.hide();
    });

    // 더보기 목록
    let more = $('#more');
    let arrow_list_more = $('.arrow-list-more');
    more.click(function(event){
        event.preventDefault();
        arrow_list_more.toggle();

        // 내용을 변경하기
        let temp = more.hasClass('arrow-list-more-active');
        if(temp != true) {
            more.html('접기<i></i>');
        }else{
            more.html('더보기<i></i>');
        }

        more.toggleClass('arrow-list-more-active');
        arrow.removeClass('arrow-list-event-active');

        arrow_list_event.hide();
        arrow_list_login.hide();
    });


    // 펼침기능
    let link_list = $('.link-list');
    let link_bt = $('.link-bt');
    link_bt.click(function () {
        link_list.stop().slideToggle(300);
    });

    // 위로가기 기능
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    // 위로가기 사라짐 효과
    let header_main = $('.header-main');

    $(window).scroll(function () {
        // 스크롤 바가 이동한 거리 체크
        let sc = $(window).scrollTop();
        if (sc >= 68) {
            header_main.addClass('header-main-active');
            $('.contents').css('padding-top', 63);
        } else {
            header_main.removeClass('header-main-active');
            $('.contents').css('padding-top', 0);
        }
    });

});


window.onload = function () {

    // 상단 슬라이드
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev',
        },
        pagination: {
            el: '.sw-visual-pg',
            type: 'fraction',
        },

    });

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function () {

        // sw-visual-pause-active 적용 되었는지 true, false
        let temp = $(this).hasClass('sw-visual-pause-active');

        if (temp != true) {
            // 적용이 안되었다. 그래서 적용
            $(this).addClass('sw-visual-pause-active');
            sw_visual.autoplay.stop();
        } else {
            // 적용이 되었다.그래서 적용해제
            $(this).removeClass('sw-visual-pause-active');
            sw_visual.autoplay.start();
        }

    });

    // 알뜰상품 슬라이드
    new Swiper('.sw-sale', {
        slidesPerView: 3,
        spaceBetween: 10,
        // loop: true,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-sale-next',
            prevEl: '.sw-sale-prev',
        },
        pagination: {
            el: '.sw-sale-pg',
            type: 'fraction',
        },
    });

    // 추천물품 슬라이드
    new Swiper('.sw-copartner', {
        slidesPerView: 3,
        spaceBetween: 10,
        // loop: true,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.sw-copartner-next',
            prevEl: '.sw-copartner-prev',
        },
        pagination: {
            el: '.sw-copartner-pg',
            type: 'fraction',
        },
    });

    // 추천물품 슬라이드
    new Swiper('.sw-popular', {
        slidesPerView: 7,
        spaceBetween: 10,
        navigation: {
            nextEl: '.popular-slide-next',
            prevEl: '.popular-slide-prev',
        },
    });
    
    // Popular 의 출력을 위한 데이터
    
    // 카테고리별 데이터
    let data_arr = [];
    // 타이틀 데이터
    let data_title = [];

    // HTTP Request: 서버에 자료를 요청하는 것
    // HTTP Response: 서버에서 응답 오는 것
    // fetch('https://bluej1996.github.io/hansalim/data.json')
    fetch('data.json')
    .then(res => res.json())
    .then(result => {
        for(let i = 0; i < result.length; i++) {
            let data = result[i];
            data_title[i] = data.title;
            data_arr[i] = data.arr;
        }  
        // 비동기로 데이터를 가져오기 때문에 정리 가 끝나면 목록 출력
        p_change(data_arr[0]);
        $('.popular .section-bt').text(`${data_title[0]} 물품 더보기`);
    });    

    // Popular 버튼 클릭시 실행 
    let p_tab = $('.sw-popular .swiper-slide a');

    // 내용이 나올 장소
    let p_bottom = $('.popular-bottom');

    // p_tab 을 클릭을 할때 p_change 구현하기

    $.each(p_tab, function(index, item){
        $(this).click(function(event){
            event.preventDefault();

            p_tab.removeClass('popular-bt-focus');            
            // p_tab.eq(index).addClass('popular-bt-focus');
            $(this).addClass('popular-bt-focus');

            p_change(data_arr[index]);

            let temp = data_title[index];
            $('.section-bt').text(`${temp} 물품 더보기`);

        });
    });

    


    // 내용 갱신
    
    function p_change(_arr){
        // 최종 a 태그 html 을 저장하는 용도
        let temp = '';
        for(let i = 0; i < _arr.length; i++) {
            // 배열안에 있는 데이터를 1개씩 꺼내서 참조한다.
            let data = _arr[i];

            temp += 
            `<a href="${data.link}" class="good-link">
                <span class="good-img">
                    <img src="images/${data.img}" alt="제품">
                </span>
                <div class="good-info">`;

                // cate 가 있으면 
                if(data.cate != '') {
                    temp += `<span class="good-cate">
                        <em class="good-cate-txt">${data.cate}</em>`;
                }                
                if(data.cate2 != '') {
                    temp += `<em class="good-cate-txt">${data.cate2}</em>`;
                }        
                temp += `</span>`;
                temp += `<span class="good-title">
                        ${data.title}
                    </span>
                    <span class="good-price">
                        <b> ${data.price}</b>원
                    </span>
                </div>`;

            // data.type 에 따라서 모양이 달라진다.
            if(data.type == 0) {
            }else if(data.type == 1) {
                temp += `<span class="good-tag">${data.tag}</span>`;
            }else if (data.type == 2) {
                temp += `<span class="good-tag good-tag-red">${data.tag}</span>`;
            }

            temp+=`<button class="good-cart"></button></a>`;

        }
        p_bottom.html(temp);
        p_bottom.find('a:first-child').css('margin-left', 0);
    }


    
    // 브랜드 슬라이드
    new Swiper('.sw-brand', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.sw-brand-next',
            prevEl: '.sw-brand-prev',
        },
        pagination: {
            el: '.sw-brand-pg',
            type: 'fraction',
        },
    });

    // 배너 슬라이드
    new Swiper('.sw-banner', {
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 500,
    });

    // 이용후기 슬라이드
    new Swiper('.sw-review', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.sw-review-next',
            prevEl: '.sw-review-prev',
        },
        pagination: {
            el: '.sw-review-pg',
            type: 'fraction',
        },
    });

    let cook_arr = [];
    let cook_json = 'cook.json';
    let cook_list = $('.cook-list');
    let cook_html = '';
    let cook_bt;
    let cook_bt_all = $('.cook-total .cook-bt');
    let cook_wrap = $('.cook-wrap');
    
    fetch(cook_json)
    .then(res => res.json())
    .then(result => {
        for(let i = 0; i < result.length; i++){
            cook_arr[i] = result[i];
            cook_arr[i].cook_price = parseInt(cook_arr[i].cook_price)
            cook_arr[i].cook_check = 1;
        }
        for(let i = 0; i < cook_arr.length; i++){
            let temp = cook_arr[i];
            cook_html += `<li>
                <button class="cook-bt"></button>
                <a href="${temp.cook_link}" class="cook-good">
                    <img src="images/${temp.cook_pic}" alt="${temp.cook_name}">
                    <p class="cook-good-info">
                        <span class="cook-good-title">${temp.cook_name}${temp.cook_info}</span>
                        <span class="cook-good-price">
                            <b>${temp.cook_price.toLocaleString()}</b>원
                        </span>
                    </p>
                </a>
            </li>`;
        }
        cook_list.html(cook_html);
        cook_bt = cook_list.find('.cook-bt');
        cook_wrap.niceScroll({
            cursoropacitymax : 0.3,
            cursorwidth: "7px",
            cursorborderradius: "10px",
        });
        makeCookBt();
        cookCalc();
    })
    .catch();
    let cooK_price_total = $('#cook-price-total');
    let bucket_i = $('.bucket i');
    let cook_link = $('.cook-link');
    let count = 0;
    let cook_count = $('#cook-count')

    function cookCalc(){
        let total = 0;
        count = 0;
        for(let i=0; i < cook_arr.length; i++){
            if(cook_arr[i].cook_check == 1){
                total += cook_arr[i].cook_price;
                count ++;
            }
        }
        cooK_price_total.html(total.toLocaleString());
        cook_count.text(count)
    }
    cook_link.click(function(event){
        event.preventDefault();
        bucket_i.text(count);
        bucket_i.removeClass('bucket-ani');
        setTimeout(function(){
            bucket_i.addClass('bucket-ani');
        },100)
    })

    function makeCookBt() {
        $.each(cook_bt, function(index){
            $(this).click(function(event) {
                event.stopPropagation();
                cook_arr[index].cook_check *= -1;
                $(this).toggleClass('cook-bt-false')
                cookCalc();
                cookAllBt();
            });
        });
    }
    let cook_all_check = 1;
    function cookAllBt(){
        for(let i = 0; i < cook_arr.length; i++){
            if(cook_arr[i].cook_check != 1) {
                cook_all_check = 0;
                break;
            }else{
                cook_all_check = 1;
            }
        }
        if(cook_all_check == 1) {
            cook_bt_all.removeClass('cook-bt-false');
        }else{
            cook_bt_all.addClass('cook-bt-false');
        }
    }
    cook_bt_all.click(function(event){
        event.stopPropagation();
        if(cook_all_check == 1){
            cook_all_check = 0;
        }else{
            cook_all_check = 1;
        }
        if(cook_all_check == 1){
            for(let i = 0; i < cook_arr.length; i++){
                cook_arr[i].cook_check = 1;
            }
        }else{
            for(let i = 0; i < cook_arr.length; i++){
                cook_arr[i].cook_check = -1;
            }
        }
        $.each(cook_bt, function(index, item){
            if(cook_all_check == 1) {
                $(this).removeClass('cook-bt-false')
            }else{
                $(this).addClass('cook-bt-false')
            }
        });
        if(cook_all_check == 1) {
            cook_bt_all.removeClass('cook-bt-false');
        }else{
            cook_bt_all.addClass('cook-bt-false');
        }
        cookCalc();
    })
    

    // 공지사항 탭 메뉴
    let notice_menu_bt = $('.notice-menu button');
    let notice_list = $('.notice-list');
    $.each(notice_menu_bt, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();

            notice_list.removeClass('notice-list-focus')
            notice_list.eq(index).addClass('notice-list-focus');

            notice_menu_bt.removeClass('notice-menu-focus');
            notice_menu_bt.eq(index).addClass('notice-menu-focus');
        });

    });

    // 비주얼 모달창
    let visual_modal_open = $(".sw-visual-bt");
    let visual_modal_close = $(".visual-modal-close");
    let visual_modal = $(".visual-modal");

    visual_modal_open.click(function () {
        visual_modal.fadeIn();
        $('html').css('overflow', 'hidden');
    });

    visual_modal_close.click(function () {
        visual_modal.fadeOut();
        $('html').css('overflow', 'auto');
    });

    let family_site = $('.footer-site a')
    let sitemap = $('.sitemap')
    let family_close = $('.family-close')
    family_site.click(function(event){
        event.preventDefault();
        sitemap.slideToggle(300)
        family_site.toggleClass('footer-site-active')
    })
    family_close.click(function(event){
        event.preventDefault();
        sitemap.slideUp(300);
        family_site.removeClass('footer-site-active')
    })
};