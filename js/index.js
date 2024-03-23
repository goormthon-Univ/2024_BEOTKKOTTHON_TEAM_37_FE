jQuery(function ($) {
    $(".menu_toggle_btn").click(function () {
        $('.gnb').stop().slideToggle('fast');
        var otherButton = $("#otherButton");
        // 다른 버튼의 마진을 변경하는 로직
        if (otherButton.css("margin-top") === "160px") {
            otherButton.animate({ marginTop: '50px' }, 'fast'); // 부드럽게 변경
        } else {
            otherButton.animate({ marginTop: '160px' }, 'fast'); // 부드럽게 변경
        }
    });
});
